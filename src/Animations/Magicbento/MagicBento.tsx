"use client";
import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

// 1. Define the shape of a single service object
interface Service {
  title: string;
  desc: string;
  image: string;
}

// 2. Define props for the ParticleCard
interface ParticleCardProps {
  title: string;
  desc: string;
  index: number;
  glowColor: string;
  imageSrc: string;
}

const ParticleCard: React.FC<ParticleCardProps> = ({ title, desc, index, glowColor, imageSrc }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  const clearParticles = useCallback(() => {
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, onComplete: () => p.remove() });
    });
    particlesRef.current = [];
  }, []);

  const spawnParticle = useCallback((width: number, height: number) => {
    if (!cardRef.current) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `width: 4px; height: 4px; background: rgb(${glowColor}); position: absolute; pointer-events: none;`;
    p.style.left = `${Math.random() * width}px`;
    p.style.top = `${Math.random() * height}px`;
    
    cardRef.current.appendChild(p);
    particlesRef.current.push(p);

    gsap.fromTo(p, { scale: 0 }, { scale: 1, duration: 0.3 });
    gsap.to(p, { 
      x: (Math.random() - 0.5) * 100, 
      y: (Math.random() - 0.5) * 100, 
      opacity: 0,
      duration: 1.5 + Math.random(), 
      onComplete: () => {
          if (p.parentNode) p.remove();
          particlesRef.current = particlesRef.current.filter(item => item !== p);
      }
    });
  }, [glowColor]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleMove = () => {
      const { width, height } = el.getBoundingClientRect();
      if (particlesRef.current.length < 15) {
          spawnParticle(width, height);
      }
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', clearParticles);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', clearParticles);
      clearParticles();
    };
  }, [spawnParticle, clearParticles]);

  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <div ref={cardRef} className="magic-bento-card" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* NEW: Corner Highlights */}
      <div className="corner-highlight top-left"></div>
      <div className="corner-highlight bottom-right"></div>

      <div className="magic-bento-card__icon">
        <img src={imageSrc} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="magic-bento-card__number">{displayIndex}</div>
      
      <div className="magic-bento-card__content">
        <h2 className="magic-bento-card__title">{title}</h2>
        <p className="magic-bento-card__description">{desc}</p>
      </div>
    </div>
  );
};

// 3. Define props for the Main Component
interface MagicBentoProps {
  services?: Service[];
  glowColor?: string;
}

export default function MagicBento({ 
  services = [], 
  glowColor = "250, 204, 21" 
}: MagicBentoProps) {
  return (
    <div className="card-grid">
      {services.map((s, i) => (
        <ParticleCard 
          key={i} 
          title={s.title} 
          desc={s.desc} 
          imageSrc={s.image}
          index={i} 
          glowColor={glowColor} 
        />
      ))}
    </div>
  );
}