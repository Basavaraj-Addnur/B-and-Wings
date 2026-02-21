"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TextCursor() {
  const [items, setItems] = useState<{ id: number; x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      // Get container position to calculate local coordinates
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (Math.random() > 0.8) {
        const gridSize = 50; 
        const snappedX = Math.floor(mouseX / gridSize) * gridSize;
        const snappedY = Math.floor(mouseY / gridSize) * gridSize;

        const newItem = {
          id: Date.now(),
          x: snappedX,
          y: snappedY,
        };
        
        setItems((prev) => [...prev, newItem].slice(-15));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setItems((prev) => prev.filter((item) => Date.now() - item.id < 1000));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute"
            style={{ 
              left: item.x, 
              top: item.y,
              width: "50px", 
              height: "50px",
              backgroundColor: "rgba(234, 179, 8, 0.2)",
              border: "1px solid rgba(0,0,0,0.05)",
              mixBlendMode: "multiply"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}