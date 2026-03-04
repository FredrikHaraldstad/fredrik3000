'use client';

import { useRef, useState, useEffect } from 'react';

export default function ContactPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1b1917';
    ctx.lineWidth = 2;

    setContext(ctx);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context) return;
    setIsDrawing(true);
    setHasDrawn(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    context.beginPath();
    context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!context) return;
    setIsDrawing(false);
    context.closePath();
  };

  const handleSend = () => {
    if (!hasDrawn || !canvasRef.current) return;

    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'letter-to-fredrik.png';
      link.click();
      URL.revokeObjectURL(url);
    });

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <div className="min-h-screen px-6 py-32">
      {/* Status notification — WCAG 4.1.3 Status Messages */}
      {showNotification && (
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="fixed top-24 left-1/2 -translate-x-1/2 bg-background-container-inverted text-text-inverted px-6 py-4 rounded-m shadow-lg z-50"
        >
          <p className="small">
            Your letter has been downloaded — please send it to me via email!
          </p>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <h1 className="sr-only">Contact Fredrik Haraldstad</h1>

        {/* Contact info */}
        <section
          className="space-y-4 pt-8 border-b border-border-separator"
          aria-labelledby="contact-info-heading"
        >
          <h2 id="contact-info-heading" className="sr-only">
            Contact information
          </h2>
          <p className="heading-3 text-text-default mb-4 pb-4">
            <a
              href="mailto:fredrik.tveit.haraldstad@stud.aho.no"
              className="inline-block py-2 -my-1 text-text-interactive hover:text-text-interactive-hover underline-offset-4 hover:underline focus:underline min-h-[44px]"
            >
              fredrik.tveit.haraldstad@stud.aho.no
            </a>
          </p>
          <p className="heading-3 text-text-default mb-4 pb-4">
            <a
              href="tel:+4790778106"
              className="inline-block py-2 -my-1 text-text-interactive hover:text-text-interactive-hover underline-offset-4 hover:underline focus:underline min-h-[44px]"
            >
              +47 907 78 106
            </a>
          </p>
        </section>

        {/* Drawing canvas section — hidden on mobile */}
        <section
          className="mb-16 mt-[42px] py-10 border-b border-border-separator hidden md:block"
          aria-labelledby="letter-heading"
        >
          <h2 id="letter-heading" className="heading-2 text-text-default mb-8">
            Write me a letter
          </h2>

          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            style={{
              cursor:
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%231b1917\' stroke-width=\'2\'%3E%3Cpath d=\'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\'/%3E%3C/svg%3E") 0 24, auto',
            }}
            className="w-full h-[400px] bg-background-container-high border border-border-separator rounded-m"
            role="img"
            aria-label="Drawing canvas — draw your letter here"
            tabIndex={0}
          />

          <div className="flex justify-end mt-4">
            <button
              onClick={handleSend}
              disabled={!hasDrawn}
              className={`px-8 py-3 rounded-m text-base font-normal transition-colors min-h-[44px] min-w-[44px] ${
                hasDrawn
                  ? 'bg-background-action text-text-on-action hover:opacity-90 cursor-pointer border border-border-action'
                  : 'bg-background-container-low text-text-subdued cursor-not-allowed border border-border-subdued'
              }`}
              aria-label={hasDrawn ? 'Download your letter' : 'Draw something first'}
              aria-disabled={!hasDrawn}
            >
              Send letter
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
