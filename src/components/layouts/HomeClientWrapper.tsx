"use client";

import { useState, useEffect } from "react";

export default function HomeClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [canShowContent, setCanShowContent] = useState(false);

  useEffect(() => {
    // FIX: Set to true immediately so the user can scroll past the video instantly.
    // We removed the 7-second delay that was blocking page interaction.
    setCanShowContent(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out ${
        canShowContent
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}