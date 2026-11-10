import { useState, useEffect, useMemo } from 'react';
import { portfolioData } from './data/portfolioData';
import { SectionItem } from './types/portfolio';
import { Header } from './components/Header';
import { CoverPage } from './components/CoverPage';
import { TableOfContents } from './components/TableOfContents';
import { StudentProfile } from './components/StudentProfile';
import { CourseSyllabus } from './components/CourseSyllabus';
import { ActivityCard } from './components/ActivityCard';
import { LearningReflection } from './components/LearningReflection';
import { CourseSummary } from './components/CourseSummary';
import { LightboxModal } from './components/LightboxModal';
import { ImageManagerModal } from './components/ImageManagerModal';
import { ArrowUp, ExternalLink } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('dayer-portfolio-theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [images, setImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('dayer_portfolio_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Filter & Search states
  const [activeTerm, setActiveTerm] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    caption?: string;
  }>({ isOpen: false, src: '', title: '' });

  const [imageManagerOpen, setImageManagerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem('dayer-portfolio-theme', theme); } catch { /* noop */ }
  }, [theme]);

  useEffect(() => {
    try { localStorage.setItem('dayer_portfolio_images', JSON.stringify(images)); } catch { /* noop */ }
  }, [images]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageChange = (id: string, newSrc: string | null) => {
    setImages(prev => {
      const updated = { ...prev };
      if (newSrc) updated[id] = newSrc;
      else delete updated[id];
      return updated;
    });
  };

  const handleOpenLightbox = (src: string, title: string, caption?: string) => {
    setLightboxState({ isOpen: true, src, title, caption });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const allCardItems = useMemo<SectionItem[]>(() => [
    ...portfolioData.classroomActivities,
    ...portfolioData.laboratoryActivities,
    ...portfolioData.quizzesAndAssessments,
    ...portfolioData.projectsAndPerformanceTasks,
    ...portfolioData.examinationResults,
  ], []);

  const imageStats = {
    total: allCardItems.length,
    uploaded: allCardItems.filter(item => Boolean(images[item.id] || item.defaultImageSrc)).length,
  };

  // Filter items helper
  const filterItems = (items: SectionItem[]) => {
    return items.filter(item => {
      const matchesTerm = activeTerm === 'All' || item.term === activeTerm;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesTerm;
      const matchesSearch = 
        item.title.toLowerCase().includes(q) ||
        (item.instructions && item.instructions.toLowerCase().includes(q)) ||
        (item.problemStatement && item.problemStatement.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
        (item.codeSnippet && item.codeSnippet.toLowerCase().includes(q));
      return matchesTerm && matchesSearch;
    });
  };

  const filteredClassroom = useMemo(() => filterItems(portfolioData.classroomActivities), [activeTerm, searchQuery]);
  const filteredLaboratory = useMemo(() => filterItems(portfolioData.laboratoryActivities), [activeTerm, searchQuery]);
  const filteredQuizzes = useMemo(() => filterItems(portfolioData.quizzesAndAssessments), [activeTerm, searchQuery]);
  const filteredProjects = useMemo(() => filterItems(portfolioData.projectsAndPerformanceTasks), [activeTerm, searchQuery]);
  const filteredExams = useMemo(() => filterItems(portfolioData.examinationResults), [activeTerm, searchQuery]);

  // Editorial Section Heading
  const SectionHeading = ({ num, title, count }: { num: string; title: string; count?: string }) => (
    <div className="flex items-center justify-between border-b border-slate-300 dark:border-slate-800 pb-3 mb-6">
      <div className="flex items-center gap-3">
        <span className="font-condensed text-3xl sm:text-4xl font-black text-slate-400">{num}</span>
        <h2 className="font-condensed text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
          {title}
        </h2>
      </div>
      {count && (
        <span className="text-xs font-mono text-slate-500">
          {count}
        </span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Sticky Header with Navigation and Controls */}
      <Header
        theme={theme}
        onToggleTheme={() => setTheme(p => p === 'dark' ? 'light' : 'dark')}
        onOpenImageManager={() => setImageManagerOpen(true)}
        imageStats={imageStats}
        activeTerm={activeTerm}
        onSelectTerm={setActiveTerm}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Expansive Editorial Canvas */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-12">

        {/* Filter Indicator (if active) */}
        {(activeTerm !== 'All' || searchQuery) && (
          <div className="no-print mb-8 p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between font-mono">
            <div>
              <span className="font-bold text-sky-600 dark:text-sky-400">Filtered: </span>
              {activeTerm !== 'All' && <span className="mr-3">Term: <strong>{activeTerm}</strong></span>}
              {searchQuery && <span>Keyword: "<strong>{searchQuery}</strong>"</span>}
            </div>
            <button
              onClick={() => { setActiveTerm('All'); setSearchQuery(''); }}
              className="text-xs text-sky-600 dark:text-sky-400 hover:underline font-bold cursor-pointer"
            >
              Reset
            </button>
          </div>
        )}

        {/* 1. Cover Page */}
        <CoverPage data={portfolioData} />

        {/* 2. Table of Contents */}
        <div className="print-page-break">
          <TableOfContents onNavigate={scrollToSection} imageStats={imageStats} />
        </div>

        {/* 3. Student Profile */}
        <div className="print-page-break">
          <StudentProfile data={portfolioData} onOpenLightbox={handleOpenLightbox} />
        </div>

        {/* 4. Course Syllabus */}
        <div className="print-page-break">
          <CourseSyllabus data={portfolioData} />
        </div>

        {/* 5. Classroom Activities and Exercises */}
        <section id="classroom-activities" className="mb-14 scroll-mt-24 print-page-break">
          <SectionHeading num="05" title="Classroom Activities and Exercises" count={`${filteredClassroom.length} Items`} />
          {filteredClassroom.map(item => (
            <ActivityCard
              key={item.id}
              item={item}
              imageSrc={images[item.id]}
              onImageChange={handleImageChange}
              onOpenLightbox={handleOpenLightbox}
              sectionPrefix="Activity"
            />
          ))}
        </section>

        {/* 6. Laboratory Activities */}
        <section id="laboratory-activities" className="mb-14 scroll-mt-24 print-page-break">
          <SectionHeading num="06" title="Laboratory Activities" count={`${filteredLaboratory.length} Labs`} />
          {filteredLaboratory.map(item => (
            <ActivityCard
              key={item.id}
              item={item}
              imageSrc={images[item.id]}
              onImageChange={handleImageChange}
              onOpenLightbox={handleOpenLightbox}
              sectionPrefix="Lab"
            />
          ))}
        </section>

        {/* 7. Quizzes and Assessments */}
        <section id="quizzes-assessments" className="mb-14 scroll-mt-24 print-page-break">
          <SectionHeading num="07" title="Quizzes and Assessments" count={`${filteredQuizzes.length} Proofs`} />
          {filteredQuizzes.map(item => (
            <ActivityCard
              key={item.id}
              item={item}
              imageSrc={images[item.id]}
              onImageChange={handleImageChange}
              onOpenLightbox={handleOpenLightbox}
              sectionPrefix="Quiz"
            />
          ))}
        </section>

        {/* 8. Projects and Performance Tasks */}
        <section id="projects-performance-tasks" className="mb-14 scroll-mt-24 print-page-break">
          <SectionHeading num="08" title="Projects and Performance Tasks" count={`${filteredProjects.length} Deliverables`} />
          {filteredProjects.map(item => (
            <ActivityCard
              key={item.id}
              item={item}
              imageSrc={images[item.id]}
              onImageChange={handleImageChange}
              onOpenLightbox={handleOpenLightbox}
              sectionPrefix="Project"
            />
          ))}
        </section>

        {/* 9. Examination Results */}
        <section id="examination-results" className="mb-14 scroll-mt-24 print-page-break">
          <SectionHeading num="09" title="Examination Results" count={`${filteredExams.length} Exams`} />
          {filteredExams.map(item => (
            <ActivityCard
              key={item.id}
              item={item}
              imageSrc={images[item.id]}
              onImageChange={handleImageChange}
              onOpenLightbox={handleOpenLightbox}
              sectionPrefix="Exam"
            />
          ))}
        </section>

        {/* 10. Learning Reflection */}
        <div className="print-page-break">
          <LearningReflection data={portfolioData} />
        </div>

        {/* 11. Course Learning Summary */}
        <div className="print-page-break">
          <CourseSummary data={portfolioData} />
        </div>
      </main>

      {/* Editorial Footer */}
      <footer className="no-print border-t border-slate-300 dark:border-slate-800 py-8 text-xs text-slate-500 font-mono">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-900 dark:text-white">{portfolioData.university.name}</span> • {portfolioData.course.code} ({portfolioData.course.academicYear})
          </div>
          <div className="flex items-center gap-4">
            <span>{portfolioData.student.fullName} ({portfolioData.student.studentNumber})</span>
            <span>•</span>
            <a
              href="https://aniogdayer-a11y.github.io/Personal-Portfolio/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 font-bold"
            >
              <span>Personal Site</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="no-print fixed bottom-6 right-6 p-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 text-white shadow-xl transition-all z-40 cursor-pointer hover:scale-105"
          title="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* Lightbox */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState(p => ({ ...p, isOpen: false }))}
        imageSrc={lightboxState.src}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />

      {/* Image Manager Modal */}
      <ImageManagerModal
        isOpen={imageManagerOpen}
        onClose={() => setImageManagerOpen(false)}
        allItems={allCardItems}
        images={images}
        onImageChange={handleImageChange}
        onNavigateToCard={scrollToSection}
      />
    </div>
  );
}
