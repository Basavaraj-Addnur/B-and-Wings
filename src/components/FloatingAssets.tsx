"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function FloatingAssets() {
  const { scrollYProgress } = useScroll();

  // HORIZONTAL: Hero (Right) -> Services (Left) -> Process (Right)
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.45, 0.65], 
    ["0vw", "-82vw", "-82vw", "0vw", "0vw"] 
  );

  // VERTICAL: This is the "SIT" logic. 
  // By repeating the same value (e.g., "110vh", "110vh"), the GIF stops moving vertically.
  const yPos = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.45, 0.65],
    ["0svh", "110svh", "110svh", "210svh", "210svh"]
  );

  const smoothX = useSpring(xPos, { stiffness: 80, damping: 35 });
  const smoothY = useSpring(yPos, { stiffness: 80, damping: 35 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          right: "5%",
          top: "12%",
        }}
        className="absolute hidden lg:block"
      >
        <motion.img
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="/hero-right.gif"
          alt="Floating Asset"
          className="w-[380px] h-auto"
        />
      </motion.div>
    </div>
  );
}