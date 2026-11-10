import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, Search } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeTerm: string;
  onSelectTerm: (term: string) => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeTerm,
  onSelectTerm,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [courseworkOpen, setCourseworkOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCourseworkOpen, setMobileCourseworkOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCourseworkOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (courseworkOpen) {
          setCourseworkOpen(false);
          dropdownButtonRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [courseworkOpen, mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setCourseworkOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const courseworkItems = [
    { num: "03", label: "Activities", href: "#classroom-activities", targetId: "classroom-activities" },
    { num: "04", label: "Laboratory Activities", href: "#laboratory-activities", targetId: "laboratory-activities" },
    { num: "05", label: "Quizzes", href: "#quizzes-assessments", targetId: "quizzes-assessments" },
    { num: "06", label: "Projects", href: "#projects-performance-tasks", targetId: "projects-performance-tasks" },
    { num: "07", label: "Examinations", href: "#examination-results", targetId: "examination-results" },
  ];

  return (
    <header className="no-print sticky top-0 z-50 w-full bg-[#0B1327] text-white border-b border-[#1E293B] shadow-md transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between gap-4">

        {/* Brand / Student Identity */}
        <a
          href="#cover-page"
          onClick={(e) => handleNavClick(e, 'cover-page')}
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-1 py-0.5"
          title="Back to Cover"
        >
          <span className="font-condensed text-lg sm:text-xl font-bold tracking-wider uppercase text-white group-hover:text-sky-300 transition-colors">
            Dayer C. Aniog
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 border-l border-slate-700 pl-2">
            ITC C503
          </span>
        </a>

        {/* Simplified Main Navigation (Desktop): Home | About | Coursework ▼ | Reflection */}
        <nav
          className="hidden md:flex items-center gap-1 sm:gap-2 text-sm font-medium tracking-wide"
          aria-label="Main Navigation"
        >
          <a
            href="#cover-page"
            onClick={(e) => handleNavClick(e, 'cover-page')}
            className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Home
          </a>

          <a
            href="#student-profile"
            onClick={(e) => handleNavClick(e, 'student-profile')}
            className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            About
          </a>

          <div className="relative" ref={dropdownRef}>
            <button
              ref={dropdownButtonRef}
              type="button"
              onClick={() => setCourseworkOpen((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown' && !courseworkOpen) {
                  e.preventDefault();
                  setCourseworkOpen(true);
                }
              }}
              aria-haspopup="true"
              aria-expanded={courseworkOpen}
              aria-controls="coursework-dropdown-menu"
              className={`px-3 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                courseworkOpen ? 'bg-white/10 text-white' : ''
              }`}
            >
              <span>Coursework</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 text-slate-400 ${
                  courseworkOpen ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>

            <div
              id="coursework-dropdown-menu"
              role="menu"
              aria-orientation="vertical"
              className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-60 bg-[#0D162D] border border-slate-700/80 shadow-2xl rounded-xl p-1.5 z-50 backdrop-blur-md transition-all duration-200 origin-top ${
                courseworkOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800/80 mb-1">
                Coursework Submissions
              </div>
              {courseworkItems.map((item) => (
                <a
                  key={item.targetId}
                  role="menuitem"
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.targetId)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-sky-300">
                    {item.num}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <a
            href="#learning-reflection"
            onClick={(e) => handleNavClick(e, 'learning-reflection')}
            className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Reflection
          </a>
        </nav>

        {/* Clean Controls (No icon clutter) */}
        <div className="flex items-center gap-2 shrink-0 text-sm">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-white/10 md:hidden cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#0D162D]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-2 flex flex-wrap items-center gap-2 sm:gap-3">
          <div role="search" className="relative min-w-0 flex-1 basis-full sm:basis-auto">
            <label htmlFor="portfolio-search" className="sr-only">Search portfolio coursework</label>
            <Search size={15} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              id="portfolio-search"
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search coursework, topics, or code"
              className="w-full rounded-lg border border-slate-700 bg-[#0B1327] py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-400 outline-none transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
            />
          </div>
          <div className="min-w-0 flex-1 sm:flex-none">
            <label htmlFor="portfolio-term" className="sr-only">Filter coursework by term</label>
            <select
              id="portfolio-term"
              value={activeTerm}
              onChange={(event) => onSelectTerm(event.target.value)}
              className="w-full sm:w-36 rounded-lg border border-slate-700 bg-[#0B1327] px-2.5 py-2 text-sm text-slate-200 outline-none transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
            >
              <option value="All">All terms</option>
              <option value="Prelim">Prelim</option>
              <option value="Midterm">Midterms</option>
              <option value="Final">Finals</option>
            </select>
          </div>
          <div className="min-w-0 flex-1 sm:flex-none">
            <label htmlFor="portfolio-category" className="sr-only">Filter coursework by category</label>
            <select
              id="portfolio-category"
              value={activeCategory}
              onChange={(event) => onSelectCategory(event.target.value)}
              className="w-full sm:w-48 rounded-lg border border-slate-700 bg-[#0B1327] px-2.5 py-2 text-sm text-slate-200 outline-none transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
            >
              <option value="All">All categories</option>
              <option value="Activities">Activities</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Projects">Projects</option>
              <option value="Examinations">Examinations</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-[#0B1327] border-b border-[#1E293B] px-4 py-4 space-y-2">
          <div className="flex flex-col space-y-1 text-sm font-medium">
            <a
              href="#cover-page"
              onClick={(e) => handleNavClick(e, 'cover-page')}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              Home
            </a>

            <a
              href="#student-profile"
              onClick={(e) => handleNavClick(e, 'student-profile')}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              About
            </a>

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileCourseworkOpen((prev) => !prev)}
                aria-expanded={mobileCourseworkOpen}
                aria-controls="mobile-coursework-links"
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors text-left"
              >
                <span>Coursework</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 text-slate-400 ${
                    mobileCourseworkOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {mobileCourseworkOpen && (
                <div id="mobile-coursework-links" className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-slate-700/60 ml-3">
                  {courseworkItems.map((item) => (
                    <a
                      key={item.targetId}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.targetId)}
                      className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {item.num}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#learning-reflection"
              onClick={(e) => handleNavClick(e, 'learning-reflection')}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              Reflection
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 px-2">
            <a
              href="#course-summary"
              onClick={(e) => handleNavClick(e, 'course-summary')}
              className="hover:text-white underline underline-offset-2"
            >
              Course Summary
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
