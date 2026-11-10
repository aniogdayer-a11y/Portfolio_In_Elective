import React, { useState } from 'react';
import { SectionItem } from '../types/portfolio';

interface ActivityCardProps {
  item: SectionItem;
  files?: string[];
  onOpenLightbox: (src: string, title: string, caption?: string) => void;
}

const imageExtensions = new Set(['png', 'jpg', 'jpeg', 'webp', 'gif']);
const downloadExtensions = new Set(['csv', 'ipynb', 'xlsx']);

const getExtension = (file: string) =>
  file.split('/').pop()?.split('.').pop()?.toLowerCase() ?? '';

const getFileName = (file: string) => file.split('/').pop() ?? file;

const getFileUrl = (file: string) =>
  `${import.meta.env.BASE_URL}${file.split('/').map(encodeURIComponent).join('/')}`;

export const ActivityCard: React.FC<ActivityCardProps> = ({
  item,
  files = [],
  onOpenLightbox,
}) => {
  const [copied, setCopied] = useState(false);
  const [openPdfFiles, setOpenPdfFiles] = useState<Record<string, boolean>>({});

  const images = files.filter((file) => imageExtensions.has(getExtension(file)));
  const pdfs = files.filter((file) => getExtension(file) === 'pdf');
  const downloads = files.filter((file) => downloadExtensions.has(getExtension(file)));
  const hasDetails = Boolean(
    item.instructions ||
    item.problemStatement ||
    item.procedure?.length ||
    item.codeSnippet ||
    item.explanation ||
    item.remarks
  );

  const handleCopyCode = async () => {
    if (!item.codeSnippet) return;

    try {
      await navigator.clipboard.writeText(item.codeSnippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy the code snippet.', error);
    }
  };

  return (
    <article
      id={item.id}
      className="mb-6 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm last:mb-0 dark:border-slate-800 dark:bg-slate-900/70"
    >
      <header className="space-y-2 border-b border-slate-200 px-5 py-5 sm:px-7 dark:border-slate-700">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <span className="rounded-full bg-sky-50 px-3 py-1 font-semibold text-sky-800 dark:bg-sky-950/60 dark:text-sky-200">
            {item.term ?? 'Coursework'}
          </span>
          <span>{item.category}</span>
          {item.score && (
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
              Score: {item.score}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl dark:text-white">
          {item.title}
        </h3>
      </header>

      <div className="space-y-5 p-5 sm:p-7">
        {images.length > 0 && (
          <section aria-label={`Images for ${item.title}`}>
            <div className={`grid gap-4 ${images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
              {images.map((file, index) => {
                const fileName = getFileName(file);
                const href = getFileUrl(file);

                return (
                  <figure
                    key={file}
                    className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 ${
                      images.length === 1 ? 'mx-auto w-full max-w-5xl' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(href, fileName, item.title)}
                      className="flex min-h-44 w-full cursor-zoom-in items-center justify-center p-2 sm:min-h-56"
                      aria-label={`View ${fileName}`}
                    >
                      <img
                        src={href}
                        alt={`${item.title} — image ${index + 1}`}
                        loading="lazy"
                        className="max-h-[420px] w-full rounded-lg object-contain"
                      />
                    </button>
                    <figcaption className="border-t border-slate-200 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
                      Image {index + 1}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        )}

        {pdfs.length > 0 && (
          <section aria-label={`PDF files for ${item.title}`} className="space-y-3">
            {pdfs.map((file) => {
              const fileName = getFileName(file);
              const href = getFileUrl(file);
              const isOpen = Boolean(openPdfFiles[file]);

              return (
                <div key={file} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                    <p className="min-w-0 flex-1 break-words text-base font-semibold text-slate-900 dark:text-white">
                      {fileName}
                    </p>
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenPdfFiles((current) => ({ ...current, [file]: !current[file] }))}
                        className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-sky-800 hover:bg-sky-50 dark:border-slate-600 dark:text-sky-200 dark:hover:bg-slate-800"
                      >
                        {isOpen ? 'Hide PDF' : 'View PDF'}
                      </button>
                      <a
                        href={href}
                        download={fileName}
                        className="rounded-lg bg-sky-700 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-800"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                  {isOpen && (
                    <iframe
                      src={href}
                      title={`PDF preview: ${fileName}`}
                      className="h-[420px] w-full border-t border-slate-200 bg-white sm:h-[560px] dark:border-slate-700"
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {downloads.length > 0 && (
          <section aria-label={`Downloadable files for ${item.title}`} className="space-y-2">
            {downloads.map((file) => {
              const fileName = getFileName(file);
              const extension = getExtension(file);
              const fileType = extension === 'xlsx'
                ? 'Excel workbook'
                : extension === 'ipynb'
                  ? 'Jupyter notebook'
                  : 'Dataset';

              return (
                <div
                  key={file}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-700"
                >
                  <div className="min-w-0">
                    <p className="break-words text-base font-semibold text-slate-900 dark:text-white">
                      {fileName}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {fileType}{extension === 'xlsx' ? ' · Open in Excel or Google Sheets' : ''}
                    </p>
                  </div>
                  <a
                    href={getFileUrl(file)}
                    download={fileName}
                    className="shrink-0 rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
                  >
                    Download
                  </a>
                </div>
              );
            })}
          </section>
        )}

        {files.length === 0 && (
          <p className="text-base text-slate-600 dark:text-slate-300">
            No files were included for this item.
          </p>
        )}

        {hasDetails && (
          <details className="group border-t border-slate-200 pt-2 dark:border-slate-700">
            <summary className="cursor-pointer rounded-lg py-2 text-base font-semibold text-slate-700 hover:text-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 dark:text-slate-200 dark:hover:text-sky-300">
              More details
            </summary>
            <div className="space-y-4 pt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              {item.instructions && <p><strong>Instructions:</strong> {item.instructions}</p>}
              {item.problemStatement && <p><strong>Task:</strong> {item.problemStatement}</p>}
              {item.procedure && item.procedure.length > 0 && (
                <div>
                  <h4 className="mb-2 font-semibold">Steps completed</h4>
                  <ol className="list-inside list-decimal space-y-1">
                    {item.procedure.map((step, index) => <li key={index}>{step}</li>)}
                  </ol>
                </div>
              )}
              {item.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-semibold">Code ({item.codeLanguage || 'text'})</h4>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                    >
                      {copied ? 'Copied' : 'Copy code'}
                    </button>
                  </div>
                  <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-relaxed text-slate-100">
                    <code>{item.codeSnippet}</code>
                  </pre>
                </div>
              )}
              {item.explanation && <p><strong>Result:</strong> {item.explanation}</p>}
              {item.remarks && <p><strong>Remarks:</strong> {item.remarks}</p>}
            </div>
          </details>
        )}
      </div>
    </article>
  );
};
