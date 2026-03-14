"use client";

import { useEffect, useRef, FC } from 'react';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from 'postprocessing';
import './Hyperspeed.css';

interface HyperspeedOptions {
  distortion: string;
  length: number;
  roadWidth: number;
  islandWidth: number;
  lanesPerRoad: number;
  fov: number;
  fovSpeedUp: number;
  speedUp: number;
  carLightsFade: number;
  totalSideLightSticks: number;
  lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number;
  brokenLinesWidthPercentage: number;
  brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number];
  lightStickHeight: [number, number];
  movingAwaySpeed: [number, number];
  movingCloserSpeed: [number, number];
  carLightsLength: [number, number];
  carLightsRadius: [number, number];
  carWidthPercentage: [number, number];
  carShiftX: [number, number];
  carFloorSeparation: [number, number];
  colors: {
    roadColor: number;
    islandColor: number;
    background: number;
    shoulderLines: number;
    brokenLines: number;
    leftCars: number[];
    rightCars: number[];
    sticks: number;
  };
}

const defaultOptions: HyperspeedOptions = {
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [12, 80],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x03b3c3
  }
};

class App {
  container: HTMLElement;
  options: HyperspeedOptions;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  composer: EffectComposer;
  clock: THREE.Clock;
  requestID: number = 0;

  constructor(container: HTMLElement, options: HyperspeedOptions) {
    this.container = container;
    this.options = options;
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(options.fov, container.offsetWidth / container.offsetHeight, 0.1, 10000);
    this.camera.position.z = -5;
    this.camera.position.y = 7;
    this.camera.lookAt(0, 0, -options.length);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(new EffectPass(this.camera, new BloomEffect({ luminanceThreshold: 0.2, intensity: 1.5 })));

    this.clock = new THREE.Clock();
    this.init();
  }

  init() {
    // Road Geometry
    const geometry = new THREE.PlaneGeometry(this.options.roadWidth, this.options.length, 20, 100);
    const material = new THREE.MeshBasicMaterial({ color: this.options.colors.roadColor, side: THREE.DoubleSide });
    const road = new THREE.Mesh(geometry, material);
    road.rotation.x = -Math.PI / 2;
    road.position.z = -this.options.length / 2;
    this.scene.add(road);

    // Car Lights (Simplified for performance)
    const lightGeo = new THREE.CylinderGeometry(0.1, 0.1, 20, 8);
    const lightMat = new THREE.MeshBasicMaterial({ color: this.options.colors.leftCars[0] });
    for(let i=0; i<20; i++) {
        const light = new THREE.Mesh(lightGeo, lightMat);
        light.rotation.x = Math.PI / 2;
        light.position.set(Math.random() * 10 - 5, 0.2, -Math.random() * 400);
        this.scene.add(light);
    }

    this.tick();
  }

  tick() {
    const delta = this.clock.getDelta();
    this.scene.children.forEach(child => {
        if(child instanceof THREE.Mesh && child.geometry instanceof THREE.CylinderGeometry) {
            child.position.z += 100 * delta;
            if(child.position.z > 0) child.position.z = -400;
        }
    });
    this.composer.render(delta);
    this.requestID = requestAnimationFrame(() => this.tick());
  }

  dispose() {
    cancelAnimationFrame(this.requestID);
    this.renderer.dispose();
    this.scene.clear();
    if (this.container.contains(this.renderer.domElement)) {
        this.container.removeChild(this.renderer.domElement);
    }
  }
}

const Hyperspeed: FC<{ effectOptions?: Partial<HyperspeedOptions> }> = ({ effectOptions = {} }) => {
  const hyperspeedRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (!hyperspeedRef.current) return;
    const options = { ...defaultOptions, ...effectOptions };
    appRef.current = new App(hyperspeedRef.current, options as HyperspeedOptions);
    return () => appRef.current?.dispose();
  }, [effectOptions]);

  return <div id="lights" ref={hyperspeedRef}></div>;
};

export default Hyperspeed;