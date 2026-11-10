import React, { useState, useRef } from 'react';
import { SectionItem } from '../types/portfolio';

interface ActivityCardProps {
  item: SectionItem;
  imageSrc?: string;
  onImageChange?: (id: string, newSrc: string | null) => void;
  onOpenLightbox: (src: string, title: string, caption?: string) => void;
  sectionPrefix?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  item,
  imageSrc,
  onImageChange,
  onOpenLightbox,
  sectionPrefix = "Output"
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const displayImageSrc = imageSrc || item.defaultImageSrc;
  const hasImage = Boolean(displayImageSrc);

  const handleCopyCode = () => {
    if (item.codeSnippet) {
      navigator.clipboard.writeText(item.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onImageChange?.(item.id, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onImageChange?.(item.id, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    onImageChange?.(item.id, null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <article id={item.id} className="w-full py-8 border-b border-slate-200 dark:border-slate-800 scroll-mt-20 space-y-4">
      {/* Hidden file input for screenshot upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelected}
        accept="image/*"
        className="hidden"
      />

      {/* 1. Header: Section Label, Title, Metadata (Clean typography, no icons) */}
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {sectionPrefix} {String(item.sectionNumber).padStart(2, '0')}
            </span>
            {item.term && (
              <>
                <span>/</span>
                <span>{item.term} Term</span>
              </>
            )}
            {item.category && (
              <>
                <span>/</span>
                <span>{item.category}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {item.score && (
              <span className="font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                Score: {item.score}
              </span>
            )}
            {item.date && (
              <span className="text-slate-500">Date: {item.date}</span>
            )}
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
          {item.title}
        </h3>
      </div>

      {/* 2. Instructions / Problem Statement */}
      <div className="space-y-2 text-xs sm:text-sm">
        {item.instructions && (
          <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
              Instructions & Problem Requirements:
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {item.instructions}
            </p>
          </div>
        )}

        {item.problemStatement && (
          <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
              Problem Statement:
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {item.problemStatement}
            </p>
          </div>
        )}
      </div>

      {/* 3. Procedures or Source Code (when applicable) */}
      {item.procedure && item.procedure.length > 0 && (
        <div className="space-y-1.5 text-xs sm:text-sm">
          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
            Procedures Followed:
          </span>
          <ol className="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-1">
            {item.procedure.map((step, idx) => (
              <li key={idx} className="leading-relaxed">{step}</li>
            ))}
          </ol>
        </div>
      )}

      {item.codeSnippet && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Source Code ({item.codeLanguage || 'python'}):
            </span>
            <button
              onClick={handleCopyCode}
              className="no-print hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer font-mono text-[11px]"
            >
              [ {copied ? 'Copied' : 'Copy Code'} ]
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 text-xs font-mono overflow-x-auto leading-relaxed">
            <code>{item.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* 4. Actual Output Screenshot / Submission Documentation */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
          <span className="font-bold text-slate-700 dark:text-slate-300">
            Output Documentation / Submission Proof:
          </span>
          <span className={hasImage ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-slate-400'}>
            {hasImage ? 'Documentation Attached' : 'Pending Upload'}
          </span>
        </div>

        {hasImage ? (
          <div className="relative group rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 p-2 overflow-hidden flex flex-col items-center">
            <img
              src={displayImageSrc}
              alt={`Output for ${item.title}`}
              className="max-h-[440px] w-auto object-contain rounded-lg cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
              onClick={() => onOpenLightbox(displayImageSrc!, item.title, item.imagePlaceholderNote)}
            />
            {/* Action Bar (Clean text buttons, no icons) */}
            <div className="no-print w-full flex items-center justify-between pt-2 mt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500">
              <span className="text-[11px] truncate max-w-xs">{item.title}</span>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onOpenLightbox(displayImageSrc!, item.title, item.imagePlaceholderNote)}
                  className="hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  [ View Fullscreen ]
                </button>
                <span>|</span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  [ Replace ]
                </button>
                <span>|</span>
                <button
                  onClick={handleRemoveImage}
                  className="text-rose-500 hover:text-rose-700 cursor-pointer"
                >
                  [ Remove ]
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`no-print p-8 rounded-xl border-2 border-dashed text-center transition-colors ${
              isDragging
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                : 'border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/20'
            }`}
          >
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
              {item.imagePlaceholderNote || 'No screenshot attached yet.'}
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-full border border-slate-400 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs transition-colors cursor-pointer"
            >
              [ Select Screenshot ]
            </button>
          </div>
        )}
      </div>

      {/* 5. Brief Explanation of Results */}
      {item.explanation && (
        <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm">
          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
            Brief Explanation of Results:
          </span>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {item.explanation}
          </p>
        </div>
      )}

      {/* 6. Remarks / Evaluation */}
      {item.remarks && (
        <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border-l-2 border-slate-500 text-xs text-slate-800 dark:text-slate-200 font-mono">
          <span className="font-bold">Faculty Remarks: </span>
          {item.remarks}
        </div>
      )}
    </article>
  );
};
