import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface StudentProfileProps {
  data: PortfolioData;
  onOpenLightbox: (src: string, title: string, caption?: string) => void;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ data, onOpenLightbox }) => {
  const { student } = data;

  return (
    <section id="student-profile" className="w-full py-12 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
      {/* Editorial Section Number & Header */}
      <div className="flex items-baseline justify-between border-b border-slate-300 dark:border-slate-800 pb-3 mb-8">
        <div className="flex items-baseline gap-3">
          <span className="font-condensed text-4xl sm:text-5xl font-black text-slate-400">02</span>
          <h2 className="font-condensed text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
            Student Profile
          </h2>
        </div>
      </div>

      {/* Editorial Layout: Introduction + Portrait Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Script Salutation & Personal Introduction */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <h3 className="font-script text-4xl sm:text-5xl text-slate-900 dark:text-white font-bold mb-3 tracking-normal">
              Hi, I'm Dayer!
            </h3>
          </div>

          <div className="space-y-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
            {student.personalIntro.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Portrait Photo & ID Verification (Clean, no icons) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
          <button
            type="button"
            onClick={() => onOpenLightbox(student.profilePhotoUrl, student.fullName, `${student.program} — ${student.yearLevel}`)}
            className="w-48 sm:w-56 h-56 sm:h-64 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100/90 dark:bg-slate-800/90 p-2 shadow-sm flex items-center justify-center group cursor-pointer"
            aria-label={`View portrait of ${student.fullName}`}
            title="Click to view full portrait"
          >
            <img
              src={student.profilePhotoUrl}
              alt={student.fullName}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </button>

          <button
            onClick={() => onOpenLightbox(student.jruIdUrl || '', "Jose Rizal University Student ID Card", `SN: ${student.studentNumber}`)}
            className="no-print text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            [ Verify JRU Student ID Card ]
          </button>
        </div>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-4 border-y border-slate-300 py-5 sm:grid-cols-2 dark:border-slate-800">
        <div>
          <span className="block text-sm font-medium text-slate-500">Student Number</span>
          <p className="text-lg font-bold text-slate-900 dark:text-white">{student.studentNumber}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-slate-500">Program & Year</span>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">{student.program} — {student.yearLevel}</p>
        </div>
      </div>

      {/* 6-Grid Portfolio Breakdown (Clean typography, no icons) */}
      <div className="mb-12">
        <h4 className="mb-6 text-base font-bold tracking-wide text-slate-800 dark:text-slate-200">
          Coursework sections
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {[
            { num: '03', label: 'Classroom', count: `${data.classroomActivities.length} Outputs`, id: 'classroom-activities' },
            { num: '04', label: 'Laboratories', count: `${data.laboratoryActivities.length} Outputs`, id: 'laboratory-activities' },
            { num: '05', label: 'Quizzes', count: `${data.quizzesAndAssessments.length} Outputs`, id: 'quizzes-assessments' },
            { num: '06', label: 'Projects', count: `${data.projectsAndPerformanceTasks.length} Outputs`, id: 'projects-performance-tasks' },
            { num: '07', label: 'Examinations', count: `${data.examinationResults.length} Outputs`, id: 'examination-results' },
            { num: '08', label: 'Reflection', count: '1 Synthesis', id: 'learning-reflection' },
          ].map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.id}`}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white transition-all bg-white/50 dark:bg-slate-900/50 block group"
            >
              <span className="font-condensed text-2xl font-black text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors block">
                {cat.num}
              </span>
              <span className="font-bold text-sm text-slate-900 dark:text-white block mt-1">
                {cat.label}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-300 block mt-1">
                {cat.count}
              </span>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};
