'use client';

import { useEffect, useRef } from 'react';

export const NoiseBackground = () => {
  const noiseRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateNoise = () => {
      const canvas = noiseRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = data[i + 1] = data[i + 2] = noise;
        data[i + 3] = 20;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const interval = setInterval(generateNoise, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={noiseRef}
      className="fixed inset-0 w-full h-full opacity-10"
      width="32"
      height="32"
      style={{ filter: 'contrast(170%) brightness(150%)' }}
    />
  );
}; 