"use client";

import { useState, useEffect } from "react";

export default function HomeClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [canShowContent, setCanShowContent] = useState(false);

  const VIDEO_DURATION = 7000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanShowContent(true);
    }, VIDEO_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out ${
        canShowContent
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible h-0 overflow-hidden translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}