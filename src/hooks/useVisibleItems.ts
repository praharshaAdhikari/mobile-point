"use client";
import { useState, useEffect } from "react";

type BreakpointConfig = {
  sm: number; // below 640px
  md: number; // 640-1023px
  lg: number; // 1024px+
};

const useVisibleItems = (config: BreakpointConfig): number => {
  const [visibleItems, setVisibleItems] = useState(config.lg);

  useEffect(() => {
    const getCount = () => {
      const width = window.innerWidth;
      if (width < 640) return config.sm;
      if (width < 1024) return config.md;
      return config.lg;
    };

    setVisibleItems(getCount());

    const handleResize = () => setVisibleItems(getCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [config.sm, config.md, config.lg]);

  return visibleItems;
};

export default useVisibleItems;
