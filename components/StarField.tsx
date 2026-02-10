
import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let targetFPS = prefersReducedMotion ? 20 : isMobile ? 30 : 60;
    let frameInterval = 1000 / targetFPS;
    let lastFrameTime = 0;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      speed: number;
      offset: number;
    }> = [];

    const updatePerformanceProfile = () => {
      isMobile = viewportWidth < 768;
      targetFPS = prefersReducedMotion ? 20 : isMobile ? 30 : 60;
      frameInterval = 1000 / targetFPS;
    };

    const resizeCanvas = () => {
      // Cap pixel ratio at 2 to avoid overdrawing on 3x retina screens
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      updatePerformanceProfile();
      canvas.width = viewportWidth * dpr;
      canvas.height = viewportHeight * dpr;
      // Reset and scale once to avoid transform accumulation on resize.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    const initStars = () => {
      const baseArea = viewportWidth * viewportHeight;
      const densityDivisor = isMobile ? 3000 : 1000; // 3x less on mobile
      const count = Math.floor(baseArea / densityDivisor);
      stars = [];
      for (let i = 0; i < count; i++) {
        const isLarge = Math.random() < 0.005;
        stars.push({
          x: Math.random() * viewportWidth,
          y: Math.random() * viewportHeight,
          size: isLarge ? Math.random() * 1.5 + 1 : Math.random() * 0.8 + 0.2,
          baseOpacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.2 + 0.05,
          offset: Math.random() * Math.PI * 2,
        });
      }
    };

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (document.hidden) return;

      // Throttle FPS on mobile
      const elapsed = time - lastFrameTime;
      if (elapsed < frameInterval) return;
      lastFrameTime = time - (elapsed % frameInterval);

      ctx.clearRect(0, 0, viewportWidth, viewportHeight);
      const seconds = time * 0.001;

      stars.forEach((star) => {
        const opacity = star.baseOpacity + Math.sin(seconds * star.speed + star.offset) * 0.15;
        const finalOpacity = Math.max(0.05, Math.min(0.8, opacity));

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        lastFrameTime = 0;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    resizeCanvas();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60"
      style={{ width: '100%', height: '100%', willChange: 'contents' }}
    />
  );
};

export default StarField;
