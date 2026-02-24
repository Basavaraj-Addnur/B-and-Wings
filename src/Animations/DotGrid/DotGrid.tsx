'use client';
import React, { useRef, useEffect, useCallback, useMemo } from 'react';

interface Dot {
  cx: number;
  cy: number;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 30, g: 30, b: 40 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  };
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 3,
  gap = 30,
  baseColor = '#1a1a2e', 
  activeColor = '#7042ff', 
  proximity = 150,
  className = '',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: -1000, y: -1000 });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const buildGrid = useCallback(() => {
    if (!wrapperRef.current || !canvasRef.current) return;
    const { width, height } = wrapperRef.current.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvasRef.current.width = width * dpr;
    canvasRef.current.height = height * dpr;
    const ctx = canvasRef.current.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.ceil(width / (dotSize + gap));
    const rows = Math.ceil(height / (dotSize + gap));
    
    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: x * (dotSize + gap) + (width % (dotSize + gap)) / 2,
          cy: y * (dotSize + gap) + (height % (dotSize + gap)) / 2,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    buildGrid();
    window.addEventListener('resize', buildGrid);
    return () => window.removeEventListener('resize', buildGrid);
  }, [buildGrid]);

  useEffect(() => {
    let rafId: number;
    const ctx = canvasRef.current?.getContext('2d');
    
    const draw = () => {
      if (!ctx || !canvasRef.current) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      
      const { x: px, y: py } = pointerRef.current;

      dotsRef.current.forEach(dot => {
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const distSq = dx * dx + dy * dy;
        const proxSq = proximity * proximity;
        
        let color = baseColor;
        let currentSize = dotSize;
        
        if (distSq < proxSq) {
          const dist = Math.sqrt(distSq);
          // Linear falloff (1 - d/p) stays brighter longer than squared falloff
          const t = 1 - dist / proximity; 

          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          
          color = `rgb(${r},${g},${b})`;
          // Slightly increase the radius of active dots to enhance the "glow" look
          currentSize = dotSize + (t * 1.5);
        }

        ctx.beginPath();
        ctx.arc(dot.cx, dot.cy, currentSize / 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [baseColor, activeRgb, baseRgb, proximity, dotSize]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerRef.current.x = e.clientX - rect.left;
    pointerRef.current.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    pointerRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div 
      ref={wrapperRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default DotGrid;