import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface StudentProfileProps {
  data: PortfolioData;
  onOpenLightbox: (src: string, title: string, caption?: string) => void;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ data, onOpenLightbox }) => {
  const { student, course, university } = data;

  return (
    <section id="student-profile" className="w-full py-12 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
      {/* Editorial Section Number & Header */}
      <div className="flex items-baseline justify-between border-b border-slate-300 dark:border-slate-800 pb-3 mb-8">
        <div className="flex items-baseline gap-3">
          <span className="font-condensed text-4xl sm:text-5xl font-black text-slate-400">03</span>
          <h2 className="font-condensed text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
            Student Profile
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Academic Identity & Background
        </span>
      </div>

      {/* Editorial Layout: Introduction + Portrait Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Script Salutation & Personal Introduction */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <h3 className="font-script text-4xl sm:text-5xl text-slate-900 dark:text-white font-bold mb-3 tracking-normal">
              Hi, I'm Dayer!
            </h3>
            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl">
              Information Technology student at <span className="font-semibold text-slate-900 dark:text-white">Jose Rizal University</span> with a focus on Data Analytics, exploratory data analysis, and Python programming.
            </p>
          </div>

          {/* 5-7 Sentences Personal Introduction */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
            {student.personalIntro.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Institutional Badges Strip (Clean typographic tags, no icons) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700">
              JRU College of Computer Studies
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700">
              AWS Student Builder Group
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700">
              BSIT 303I
            </span>
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

      {/* Academic Credentials Table */}
      <div className="border-t border-b border-slate-300 dark:border-slate-800 py-6 mb-12">
        <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-slate-400 mb-4">
          Academic Registration Particulars
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div>
            <span className="text-slate-500 block text-[11px] font-mono">Full Name</span>
            <p className="font-bold text-slate-900 dark:text-white text-base">{student.fullName}</p>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] font-mono">Student Number</span>
            <p className="font-mono font-bold text-slate-900 dark:text-white text-base">{student.studentNumber}</p>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] font-mono">Program & Year</span>
            <p className="font-semibold text-slate-900 dark:text-white">{student.program} — {student.yearLevel}</p>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] font-mono">Section</span>
            <p className="font-mono font-bold text-slate-900 dark:text-white">{student.section}</p>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] font-mono">Course Code & Description</span>
            <p className="font-semibold text-slate-900 dark:text-white">{course.code}: {course.description}</p>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] font-mono">Contact Details</span>
            <p className="font-mono text-slate-700 dark:text-slate-300">{student.email} • {student.phone}</p>
          </div>
        </div>
      </div>

      {/* 6-Grid Portfolio Breakdown (Clean typography, no icons) */}
      <div className="mb-12">
        <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-slate-400 mb-6">
          Portfolio Deliverable Categories
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {[
            { num: '05', label: 'Classroom', count: `${data.classroomActivities.length} Outputs`, id: 'classroom-activities' },
            { num: '06', label: 'Laboratories', count: `${data.laboratoryActivities.length} Outputs`, id: 'laboratory-activities' },
            { num: '07', label: 'Quizzes', count: `${data.quizzesAndAssessments.length} Outputs`, id: 'quizzes-assessments' },
            { num: '08', label: 'Projects', count: `${data.projectsAndPerformanceTasks.length} Outputs`, id: 'projects-performance-tasks' },
            { num: '09', label: 'Examinations', count: `${data.examinationResults.length} Outputs`, id: 'examination-results' },
            { num: '10', label: 'Reflection', count: '1 Synthesis', id: 'learning-reflection' },
          ].map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.id}`}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white transition-all bg-white/50 dark:bg-slate-900/50 block group"
            >
              <span className="font-condensed text-2xl font-black text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors block">
                {cat.num}
              </span>
              <span className="font-bold text-xs text-slate-900 dark:text-white block mt-1">
                {cat.label}
              </span>
              <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                {cat.count}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Educational Background, Interests, and Trainings (Clean typographic labels) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* 1. Educational Background */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Educational Background
            </h4>
          </div>
          <div className="space-y-4 text-xs">
            {student.educationalBackground.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline font-mono text-[11px]">
                  <span className="font-bold text-slate-900 dark:text-white">{edu.institution}</span>
                  <span className="text-slate-400">{edu.years}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{edu.program}</p>
                <p className="text-[11px] text-slate-500 leading-normal">{edu.highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interests and Hobbies */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Interests & Competencies
            </h4>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {student.interestsAndHobbies.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-slate-400 font-mono text-[10px] mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Trainings and Work Experience */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Trainings & Experience
            </h4>
          </div>
          <div className="space-y-4 text-xs">
            {student.trainingsAndExperience.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline font-mono text-[11px]">
                  <span className="font-bold text-slate-900 dark:text-white">{exp.role}</span>
                  <span className="text-slate-400">{exp.year}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{exp.organization}</p>
                <ul className="space-y-0.5 text-[11px] text-slate-500 list-inside">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>— {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
