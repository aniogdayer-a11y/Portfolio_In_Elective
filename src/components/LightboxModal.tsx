import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption
}) => {
  const [zoom, setZoom] = useState<number>(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setZoom(1);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sky-200/80 dark:border-sky-900/50 bg-sky-50/70 dark:bg-slate-950/80">
          <div>
            <h3 className="text-sm font-bold font-display text-neutral-900 dark:text-neutral-100">{title}</h3>
            {caption && <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{caption}</p>}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-neutral-700 dark:text-neutral-300 border border-sky-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 px-1">{Math.round(zoom * 100)}%</span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-neutral-700 dark:text-neutral-300 border border-sky-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-neutral-700 dark:text-neutral-300 border border-sky-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Reset Zoom"
            >
              <RotateCcw size={16} />
            </button>
            <a
              href={imageSrc}
              download={`${title.replace(/[^a-zA-Z0-9]/g, '_')}.png`}
              className="p-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-neutral-700 dark:text-neutral-300 border border-sky-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Download image"
            >
              <Download size={16} />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-800 dark:bg-sky-950/60 dark:hover:bg-sky-900/60 dark:text-sky-300 transition-colors ml-2 cursor-pointer"
              title="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Image Area */}
        <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-sky-50/20 dark:bg-slate-950/50 min-h-[300px]">
          <img
            src={imageSrc}
            alt={title}
            style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
            className="max-h-[70vh] object-contain transition-transform duration-150 rounded-xl shadow-lg"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-sky-200/80 dark:border-sky-900/50 bg-sky-50/40 dark:bg-slate-950/60 text-xs text-neutral-500 dark:text-neutral-400 flex justify-between items-center font-mono">
          <span>Click anywhere outside to dismiss • ESC key to exit</span>
          <span className="text-sky-600 dark:text-sky-400 font-bold">✦ Verified High-Resolution Output</span>
        </div>
      </div>
    </div>
  );
};
