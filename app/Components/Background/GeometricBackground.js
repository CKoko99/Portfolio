"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import classes from "./GeometricBackground.module.css";

export default function GeometricBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hexagons, setHexagons] = useState([]);
  const containerRef = useRef(null);

  // Generate unique geometric patterns only on client
  useEffect(() => {
    const generateHexagons = () => {
      return Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * 360,
        delay: Math.random() * 2,
        duration: Math.random() * 8 + 4,
      }));
    };
    setHexagons(generateHexagons());
  }, []);

  const movementScale = 0.2; // 20% as fast

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current?.getBoundingClientRect() || {};

      if (left !== undefined) {
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={classes.geometricBackground}>
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className={classes.hexagon}
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            width: `${hex.size}px`,
            height: `${hex.size}px`,
            background: "linear-gradient(135deg, #00AEEF 0%, #45B7D1 100%)",
            opacity: 0.3,
            transform: `translate(
              ${((mousePosition.x - 0.5) * 40 * movementScale).toFixed(2)}px,
              ${((mousePosition.y - 0.5) * 40 * movementScale).toFixed(2)}px
            )`,
          }}
          animate={{
            rotate: [hex.rotation, hex.rotation + 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: hex.duration,
            repeat: Infinity,
            delay: hex.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
