import React, { useRef } from 'react';
import { 
  X, 
  Upload, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SectionItem } from '../types/portfolio';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  allItems: SectionItem[];
  images: Record<string, string>;
  onImageChange: (id: string, src: string | null) => void;
  onNavigateToCard: (id: string) => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  allItems,
  images,
  onImageChange,
  onNavigateToCard
}) => {
  const activeInputIdRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const totalSlots = allItems.length;
  const filledSlots = allItems.filter(item => Boolean(images[item.id] || item.defaultImageSrc)).length;
  const progressPercent = Math.round((filledSlots / totalSlots) * 100);

  const handleTriggerUpload = (id: string) => {
    activeInputIdRef.current = id;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const targetId = activeInputIdRef.current;
    if (file && targetId) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onImageChange(targetId, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div 
        className="relative max-w-3xl w-full bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[88vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sky-200/80 dark:border-sky-900/50 bg-sky-50/70 dark:bg-slate-950/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="pill-badge text-[11px] font-mono">
                Slot Assistant
              </span>
              <h3 className="text-base font-bold font-display text-neutral-900 dark:text-neutral-100">
                Portfolio Screenshot & Picture Slots
              </h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Easily review and upload screenshots for all portfolio cards as you receive them.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-neutral-600 dark:text-neutral-300 border border-sky-200 dark:border-slate-700 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Tracker */}
        <div className="px-6 py-4 bg-sky-50/40 dark:bg-slate-950/40 border-b border-sky-200/80 dark:border-sky-900/50 flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
              <span className="text-neutral-700 dark:text-neutral-300">Total Cards Status</span>
              <span className="font-mono text-sky-600 dark:text-sky-400 font-extrabold">
                {filledSlots} of {totalSlots} Loaded ({progressPercent}%)
              </span>
            </div>
            <div className="h-2.5 w-full bg-sky-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Slot Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {allItems.map((item) => {
            const currentSrc = images[item.id] || item.defaultImageSrc;
            const isLoaded = Boolean(currentSrc);

            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isLoaded
                    ? 'bg-sky-50/50 dark:bg-slate-950/70 border-sky-300 dark:border-sky-800/70'
                    : 'bg-white dark:bg-slate-950/40 border-sky-200/80 dark:border-sky-950/50 hover:border-sky-300'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-slate-800 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-slate-700">
                      {item.category} #{item.sectionNumber}
                    </span>
                    {item.term && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-900/50 font-bold">
                        {item.term}
                      </span>
                    )}
                    {isLoaded ? (
                      <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Photo Attached
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <Clock size={12} /> Awaiting Picture
                      </span>
                    )}
                  </div>

                  <h4 className="text-xs font-bold font-display text-neutral-900 dark:text-neutral-100 truncate">
                    {item.title}
                  </h4>

                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5 font-mono">
                    Target: {item.imagePlaceholderNote}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {isLoaded ? (
                    <>
                      <button
                        onClick={() => handleTriggerUpload(item.id)}
                        className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold border border-sky-200 dark:border-slate-700 flex items-center gap-1 cursor-pointer"
                        title="Replace photo"
                      >
                        <Upload size={12} />
                        <span>Change</span>
                      </button>
                      <button
                        onClick={() => onImageChange(item.id, null)}
                        className="p-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/50 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 text-xs cursor-pointer"
                        title="Remove photo"
                      >
                        <Trash2 size={13} />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleTriggerUpload(item.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs shadow-sky-500/25 cursor-pointer"
                    >
                      <Upload size={12} />
                      <span>Upload Photo</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      onClose();
                      onNavigateToCard(item.id);
                    }}
                    className="p-1.5 rounded-xl bg-sky-50 dark:bg-slate-800/60 hover:bg-sky-100 text-sky-600 dark:text-neutral-300 border border-sky-200 dark:border-slate-700 cursor-pointer"
                    title="Jump to card on page"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-sky-200/80 dark:border-sky-900/50 bg-sky-50/50 dark:bg-slate-950 text-xs text-neutral-500 dark:text-neutral-400 flex justify-between items-center">
          <span className="flex items-center gap-1.5 font-mono">
            <Sparkles size={14} className="text-sky-500" />
            Photos automatically persist in browser localStorage
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-neutral-900 dark:bg-slate-800 hover:bg-neutral-800 text-white text-xs font-semibold cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
