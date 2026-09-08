import { useEffect, useState, type MouseEvent, type WheelEvent } from "react";
import { createPortal } from "react-dom";
import { HiMinus, HiPlus, HiX } from "react-icons/hi";

interface BookImageViewerProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const STEP = 0.4;

const BookImageViewer = ({
  src,
  alt,
  className = "",
  imgClassName = "",
}: BookImageViewerProps) => {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const close = () => {
    setOpen(false);
    setScale(1);
  };

  const zoomIn = () =>
    setScale((s) => Math.min(MAX_SCALE, Number((s + STEP).toFixed(2))));
  const zoomOut = () =>
    setScale((s) => Math.max(MIN_SCALE, Number((s - STEP).toFixed(2))));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-" || e.key === "_") zoomOut();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label={`Preview ${alt}`}
      >
        <img src={src} alt={alt} className={imgClassName} />
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <div
              className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
              onClick={stop}
              onWheel={handleWheel}
            >
              <div className="mb-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={scale <= MIN_SCALE}
                  aria-label="Zoom out"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow disabled:opacity-40"
                >
                  <HiMinus size={20} />
                </button>
                <span className="min-w-[3.5rem] text-center text-sm font-semibold text-white">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={scale >= MAX_SCALE}
                  aria-label="Zoom in"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow disabled:opacity-40"
                >
                  <HiPlus size={20} />
                </button>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow"
                >
                  <HiX size={20} />
                </button>
              </div>

              <div className="max-h-[80vh] max-w-[90vw] overflow-auto rounded-xl">
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxHeight: `${70 * scale}vh`,
                    maxWidth: `${80 * scale}vw`,
                  }}
                  className="mx-auto block object-contain"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default BookImageViewer;
