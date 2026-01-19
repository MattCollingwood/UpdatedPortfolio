import { useEffect, useRef, useState } from "react";

interface PixelGravityCanvasProps {
  imageSrc: string;
  morphToImage?: string;
  width?: number;
  height?: number;
  pixelSize?: number;
  gravity?: number;
  morphDelay?: number;
  morphDuration?: number;
}

export default function PixelGravityCanvas({
  imageSrc,
  morphToImage,
  width = 400,
  height = 300,
  pixelSize = 3,
  gravity = 1.2,
  morphDelay = 2000,
  morphDuration = 2000,
}: PixelGravityCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      setDebugInfo("Canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setDebugInfo("Context not found");
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const img1 = new Image();
    img1.crossOrigin = "anonymous";
    img1.src = imageSrc;

    img1.onerror = () => {
      setDebugInfo(`Error loading image: ${imageSrc}`);
    };

    img1.onload = () => {
      setDebugInfo("First image loaded");
      
      // Sample first image
      const offCanvas1 = document.createElement("canvas");
      offCanvas1.width = width;
      offCanvas1.height = height;
      const offCtx1 = offCanvas1.getContext("2d");
      if (!offCtx1) return;

      offCtx1.drawImage(img1, 0, 0, width, height);
      const imageData1 = offCtx1.getImageData(0, 0, width, height);

      // Build pixels
      const pixels: Array<{
        x: number;
        y: number;
        targetY: number;
        vy: number;
        r1: number;
        g1: number;
        b1: number;
        a1: number;
        r2?: number;
        g2?: number;
        b2?: number;
        a2?: number;
        delay: number;
        settled: boolean;
      }> = [];

      for (let y = 0; y < height; y += pixelSize) {
        for (let x = 0; x < width; x += pixelSize) {
          const i = (y * width + x) * 4;
          const a = imageData1.data[i + 3] / 255;
          if (a > 0.1) {
            pixels.push({
              x,
              y: -Math.random() * height,
              targetY: y,
              vy: 0,
              r1: imageData1.data[i],
              g1: imageData1.data[i + 1],
              b1: imageData1.data[i + 2],
              a1: a,
              delay: y * .5,
              settled: false,
            });
          }
        }
      }

      // Load second image if provided
      let img2Data: ImageData | null = null;
      if (morphToImage) {
        const img2 = new Image();
        img2.crossOrigin = "anonymous";
        img2.src = morphToImage;
        
        img2.onload = () => {
          setDebugInfo("Second image loaded");
          const offCanvas2 = document.createElement("canvas");
          offCanvas2.width = width;
          offCanvas2.height = height;
          const offCtx2 = offCanvas2.getContext("2d");
          if (!offCtx2) return;

          offCtx2.drawImage(img2, 0, 0, width, height);
          img2Data = offCtx2.getImageData(0, 0, width, height);

          // Assign second image colors
          pixels.forEach((p) => {
            const i = (p.targetY * width + p.x) * 4;
            p.r2 = img2Data!.data[i];
            p.g2 = img2Data!.data[i + 1];
            p.b2 = img2Data!.data[i + 2];
            p.a2 = img2Data!.data[i + 3] / 255;
          });
        };

        img2.onerror = () => {
          setDebugInfo(`Error loading second image: ${morphToImage}`);
        };
      }

      let frame = 0;
      let morphStartTime: number | null = null;
      let allSettled = false;

      function animate() {
        ctx.clearRect(0, 0, width, height);
        frame++;

        // Check if settled
        if (!allSettled) {
          allSettled = pixels.every((p) => p.settled);
          if (allSettled && morphToImage && img2Data) {
            setTimeout(() => {
              morphStartTime = Date.now();
              setDebugInfo("Starting morph");
            }, morphDelay);
          }
        }

        // Calculate morph progress
        let progress = 0;
        if (morphStartTime) {
          progress = Math.min((Date.now() - morphStartTime) / morphDuration, 1);
        }

        pixels.forEach((p) => {
          if (frame < p.delay) return;

          // Gravity
          if (!p.settled && p.y < p.targetY) {
            p.vy += gravity;
            p.y += p.vy;
            if (p.y >= p.targetY) {
              p.y = p.targetY;
              p.vy = 0;
              p.settled = true;
            }
          }

          // Color calculation
          let r = p.r1;
          let g = p.g1;
          let b = p.b1;
          let a = p.a1;

          if (progress > 0 && p.r2 !== undefined) {
            r = Math.round(p.r1 + (p.r2 - p.r1) * progress);
            g = Math.round(p.g1 + (p.g2! - p.g1) * progress);
            b = Math.round(p.b1 + (p.b2! - p.b1) * progress);
            a = p.a1 + (p.a2! - p.a1) * progress;
          }

          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fillRect(p.x, p.y, pixelSize, pixelSize);
        });

        requestAnimationFrame(animate);
      }

      animate();
    };
  }, [imageSrc, morphToImage, width, height, pixelSize, gravity, morphDelay, morphDuration]);

  return (
    <div>
      <canvas ref={canvasRef} className="rounded-lg" />
      {debugInfo && <p className="text-xs text-muted-foreground mt-2">{debugInfo}</p>}
    </div>
  );
}