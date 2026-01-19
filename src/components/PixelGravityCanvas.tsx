import { useEffect, useRef } from "react";


interface PixelGravityCanvasProps {
  imageSrc: string;
  width?: number;
  height?: number;
  pixelSize?: number;
  gravity?: number;
}

export default function PixelGravityCanvas({
  imageSrc,
  width = 400,
  height = 300,
  pixelSize = 6,
  gravity = 1.2,
}: PixelGravityCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;

      // Offscreen canvas to sample pixels
      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, width, height);
      const { data } = offCtx.getImageData(0, 0, width, height);

      // Build pixel particles
      const pixels: Array<{
        x: number;
        targetY: number;
        y: number;
        vy: number;
        color: string;
        delay: number;
      }> = [];

      for (let y = 0; y < height; y += pixelSize) {
        for (let x = 0; x < width; x += pixelSize) {
          const i = (y * width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3] / 255;
          if (a > 0.1) {
            pixels.push({
              x,
              targetY: y,
              y: -Math.random() * height, // start above canvas
              vy: 0,
              color: `rgba(${r},${g},${b},${a})`,
              delay: y * .5, // stagger by row (top-down effect)
            });
          }
        }
      }

      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, width, height);
        frame++;
        pixels.forEach((p) => {
          if (frame < p.delay) return;
          if (p.y < p.targetY) {
            p.vy += gravity;
            p.y += p.vy;
            if (p.y > p.targetY) {
              p.y = p.targetY;
              p.vy = 0;
            }
          }
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, pixelSize, pixelSize);
        });
        requestAnimationFrame(animate);
      }
      animate();
    };
  }, [imageSrc, width, height, pixelSize, gravity]);

  return <canvas ref={canvasRef} className="rounded-lg" />;
}