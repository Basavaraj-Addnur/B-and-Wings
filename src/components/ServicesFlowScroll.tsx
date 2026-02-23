"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform
} from "framer-motion";
import React, { useRef } from "react";

interface FlowScrollCardProps {
  title: string;
  desc: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
}

const FlowScrollCard = ({
  title,
  desc,
  index,
  scrollYProgress,
  totalItems
}: FlowScrollCardProps) => {
  const ITEMS_PER_ROW = 3;

  const prev = Math.max(0, index - ITEMS_PER_ROW);
  const next = Math.min(totalItems - 1, index + ITEMS_PER_ROW);

  const previousRow = Math.floor(prev / ITEMS_PER_ROW);
  const currentRow = Math.floor(index / ITEMS_PER_ROW);
  const nextRow = Math.floor(next / ITEMS_PER_ROW);

  const totalRows = Math.ceil(totalItems / ITEMS_PER_ROW);

  const scrollRangePerRow = 1 / totalRows;

  const entryAnimation = previousRow / totalRows - scrollRangePerRow;
  const currPosition = currentRow / totalRows;
  const exitAnimation = nextRow / totalRows + scrollRangePerRow * 2;

  const offsetToAdd =
    (scrollRangePerRow / totalItems) * (currentRow + 2);

  const range = [
    0,
    entryAnimation - offsetToAdd,
    currPosition - offsetToAdd,
    currPosition - offsetToAdd,
    exitAnimation - offsetToAdd,
    1
  ];

  const scale = useTransform(scrollYProgress, range, [
    0.5,
    0.5,
    1,
    1,
    0.5,
    0.5
  ]);

  const isLeft = index % ITEMS_PER_ROW === 0;
  const isRight = index % ITEMS_PER_ROW === 2;

  const x = useTransform(scrollYProgress, range, [
    isLeft ? "100%" : isRight ? "-100%" : "0%",
    isLeft ? "100%" : isRight ? "-100%" : "0%",
    "0%",
    "0%",
    "0%",
    "0%"
  ]);

  const rotate = useTransform(scrollYProgress, range, [
    isLeft ? -20 : isRight ? 20 : 0,
    isLeft ? -20 : isRight ? 20 : 0,
    0,
    0,
    0,
    0
  ]);

  const shadowY = useTransform(scrollYProgress, range, [
    50,
    50,
    25,
    25,
    -50,
    -50
  ]);

  return (
    <motion.div
      style={{
        scale,
        x,
        rotate,
        zIndex: !isLeft && !isRight ? 1 : 0,
        boxShadow: useTransform(
          shadowY,
          (value) =>
            `0px ${value}px 40px 10px rgba(0,0,0,0.08)`
        )
      }}
      className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm h-full flex flex-col"
    >
      <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

interface FlowScrollProps {
  services: {
    title: string;
    desc: string;
  }[];
}

const ServicesFlowScroll = ({ services }: FlowScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div
      ref={ref}
      className="w-full h-[800px] overflow-y-auto flex justify-center py-20"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-max">
        {services.map((service, index) => (
          <FlowScrollCard
            key={index}
            title={service.title}
            desc={service.desc}
            index={index}
            scrollYProgress={scrollYProgress}
            totalItems={services.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesFlowScroll;