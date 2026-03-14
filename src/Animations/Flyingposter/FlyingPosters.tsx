"use client";

import React, { useRef, useEffect } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture } from 'ogl';
import './FlyingPosters.css';

interface FlyingPostersProps {
  items: string[];
  planeWidth?: number;
  planeHeight?: number;
  distortion?: number;
  scrollEase?: number;
  cameraFov?: number;
  cameraZ?: number;
  className?: string;
  [key: string]: any;
}

const vertexShader = `
precision highp float;
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uPosition;
uniform float uDistortion;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;
varying vec2 vUv;

float PI = 3.141592653589793238;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(
      oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,            oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,            0.0,
      0.0,                                0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5 ? 16.0 * pow(t, 5.0) : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + 0.25) / 0.5;
  float localprogress = clamp((fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion), 0., 2.);
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;
varying vec2 vUv;

void main() {
  float imageAspect = uImageSize.x / uImageSize.y;
  float planeAspect = uPlaneSize.x / uPlaneSize.y;
  vec2 scale = vec2(1.0, 1.0);
  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }
  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;
  gl_FragColor = texture2D(tMap, uv);
}
`;

function lerp(p1: number, p2: number, t: number) {
  return p1 + (p2 - p1) * t;
}

function map(num: number, min1: number, max1: number, min2: number, max2: number) {
  return ((num - min1) / (max1 - min1)) * (max2 - min2) + min2;
}

class Media {
  gl: any; geometry: any; scene: any; screen: any; viewport: any; image: string;
  length: number; index: number; planeWidth: number; planeHeight: number;
  distortion: number; program: any; plane: any; extra: number = 0;
  y: number = 0; heightTotal: number = 0; height: number = 0; padding: number = 5;

  constructor(params: any) {
    this.gl = params.gl;
    this.geometry = params.geometry;
    this.scene = params.scene;
    this.screen = params.screen;
    this.viewport = params.viewport;
    this.image = params.image;
    this.length = params.length;
    this.index = params.index;
    this.planeWidth = params.planeWidth;
    this.planeHeight = params.planeHeight;
    this.distortion = params.distortion;
    
    this.createShader();
    this.createMesh();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false });
    this.program = new Program(this.gl, {
      depthTest: false, depthWrite: false, fragment: fragmentShader, vertex: vertexShader,
      uniforms: {
        tMap: { value: texture }, uPosition: { value: 0 }, uPlaneSize: { value: [0, 0] },
        uImageSize: { value: [0, 0] }, rotationAxis: { value: [0, 1, 0] },
        distortionAxis: { value: [1, 1, 0] }, uDistortion: { value: this.distortion },
      },
      cullFace: false
    });
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSize.value = [img.naturalWidth, img.naturalHeight];
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program });
    this.plane.setParent(this.scene);
  }

  onResize(sizes?: any) {
    if (sizes) { this.screen = sizes.screen; this.viewport = sizes.viewport; }
    this.plane.scale.x = (this.viewport.width * this.planeWidth) / this.screen.width;
    this.plane.scale.y = (this.viewport.height * this.planeHeight) / this.screen.height;
    this.program.uniforms.uPlaneSize.value = [this.plane.scale.x, this.plane.scale.y];
    this.height = this.plane.scale.y + this.padding;
    this.heightTotal = this.height * this.length;
    this.y = -this.heightTotal / 2 + (this.index + 0.5) * this.height;
  }

  update(scrollCurrent: number) {
    this.plane.position.y = this.y - scrollCurrent - this.extra;
    const position = map(this.plane.position.y, -this.viewport.height, this.viewport.height, 5, 15);
    this.program.uniforms.uPosition.value = position;
    if (this.plane.position.y + this.plane.scale.y / 2 < -this.viewport.height / 2) this.extra -= this.heightTotal;
    else if (this.plane.position.y - this.plane.scale.y / 2 > this.viewport.height / 2) this.extra += this.heightTotal;
  }
}

export default function FlyingPosters({
  items = [], planeWidth = 320, planeHeight = 320, distortion = 3,
  scrollEase = 0.01, cameraFov = 45, cameraZ = 20, className = "", ...props
}: FlyingPostersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scroll = useRef({ current: 0, target: 0, ease: scrollEase });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const renderer = new Renderer({ canvas: canvas, alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    const camera = new Camera(gl);
    camera.fov = cameraFov;
    camera.position.z = cameraZ;
    const scene = new Transform();
    const geometry = new Plane(gl, { heightSegments: 1, widthSegments: 100 });

    let screen = { width: 0, height: 0 };
    let viewport = { width: 0, height: 0 };
    let medias: Media[] = [];

    const onResize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      screen = { width: rect.width, height: rect.height };
      renderer.setSize(screen.width, screen.height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
      const fov = (camera.fov * Math.PI) / 180;
      const h = 2 * Math.tan(fov / 2) * camera.position.z;
      viewport = { height: h, width: h * camera.aspect };
      medias.forEach(m => m.onResize({ screen, viewport }));
    };

    medias = items.map((image, index) => new Media({ gl, geometry, scene, screen, viewport, image, length: items.length, index, planeWidth, planeHeight, distortion }));
    
    onResize();
    window.addEventListener('resize', onResize);

    const onWheel = (e: WheelEvent) => { 
        scroll.current.target += e.deltaY * 0.005; 
    };
    window.addEventListener('wheel', onWheel, { passive: true });

    let rafId: number;
    const update = () => {
      scroll.current.current = lerp(scroll.current.current, scroll.current.target, scroll.current.ease);
      medias.forEach(m => m.update(scroll.current.current));
      renderer.render({ scene, camera });
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(rafId);
    };
  }, [items, planeWidth, planeHeight, distortion, scrollEase, cameraFov, cameraZ]);

  return (
    <div ref={containerRef} className={`posters-container ${className}`} {...props}>
      <canvas ref={canvasRef} className="posters-canvas" />
    </div>
  );
}