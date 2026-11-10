import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface CourseSummaryProps {
  data: PortfolioData;
}

export const CourseSummary: React.FC<CourseSummaryProps> = ({ data }) => {
  const { courseSummary, student, course } = data;

  return (
    <section id="course-summary" className="w-full py-12 mb-16 scroll-mt-20">
      {/* Editorial Section Header */}
      <div className="flex items-baseline justify-between border-b border-slate-300 dark:border-slate-800 pb-3 mb-8">
        <div className="flex items-baseline gap-3">
          <span className="font-condensed text-4xl sm:text-5xl font-black text-slate-400">11</span>
          <h2 className="font-condensed text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
            Course Learning Summary
          </h2>
        </div>
        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
          Curriculum Complete
        </span>
      </div>

      {/* Editorial Spread: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Narrative Synthesis */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
            Semester Synthesis
          </span>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            {courseSummary.overview}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic pt-2 border-l-2 border-slate-300 dark:border-slate-700 pl-4">
            "{courseSummary.closingStatement}"
          </p>
        </div>

        {/* Right Column: Verified Milestones (Clean typographic list, no icons) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
            Verified Competency Milestones
          </span>
          <div className="space-y-2">
            {courseSummary.keyMilestones.map((milestone, idx) => (
              <div key={idx} className="flex items-start gap-2.5 py-2 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-mono">
                <span className="text-slate-400 font-bold shrink-0 mt-0.5">—</span>
                <span className="leading-snug">{milestone}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formal Academic Certification & Sign-off Block */}
      <div className="border-t border-b border-slate-300 dark:border-slate-800 py-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          {/* Student Declaration */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Student Declaration & Certification
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I hereby certify that all classroom outputs, laboratory workbooks, quizzes, projects, and examination proofs compiled in this portfolio are my own authentic academic work completed for {course.code}.
            </p>
            <div className="pt-4">
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                {student.fullName}
              </p>
              <p className="font-mono text-slate-500 text-[11px]">
                Student No.: {student.studentNumber} • {student.section}
              </p>
            </div>
          </div>

          {/* Instructor Sign-off */}
          <div className="space-y-2 md:border-l md:border-slate-200 md:dark:border-slate-800 md:pl-8">
            <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Faculty Verification & Assessment
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Course Portfolio evaluation and verification in compliance with Jose Rizal University College of Computer Studies academic guidelines.
            </p>
            <div className="pt-4">
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                {course.instructor.name}
              </p>
              <p className="text-slate-500 text-[11px]">
                {course.instructor.title} • {course.instructor.department}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation Bar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <span className="text-slate-500 text-[11px]">
          Jose Rizal University • {course.code} • {course.academicYear}
        </span>
        <a
          href="https://aniogdayer-a11y.github.io/Personal-Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          [ Dayer's Personal Portfolio ]
        </a>
      </div>
    </section>
  );
};
