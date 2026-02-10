
import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      speed: number;
      offset: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      // Adjusted density based on screen size for performance
      const baseArea = window.innerWidth * window.innerHeight;
      const isMobile = window.innerWidth < 768;
      const densityDivisor = isMobile ? 2000 : 1000; // Half density on mobile
      const count = Math.floor(baseArea / densityDivisor);
      stars = [];
      for (let i = 0; i < count; i++) {
        const isLarge = Math.random() < 0.005; // Very few large stars
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: isLarge ? Math.random() * 1.5 + 1 : Math.random() * 0.8 + 0.2, // Mostly tiny dots
          baseOpacity: Math.random() * 0.5 + 0.1, // Subtler base opacity
          speed: Math.random() * 0.2 + 0.05, // Slower, more majestic twinkle
          offset: Math.random() * Math.PI * 2,
        });
      }
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const seconds = time * 0.001;

      stars.forEach((star) => {
        // Sine wave for smooth twinkling
        const opacity = star.baseOpacity + Math.sin(seconds * star.speed + star.offset) * 0.15;
        const finalOpacity = Math.max(0.05, Math.min(0.8, opacity));

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2); // Removed /2 since size is already small radius
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60" // Reduced global opacity slightly
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default StarField;
