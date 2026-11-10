import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface CourseSyllabusProps {
  data: PortfolioData;
}

export const CourseSyllabus: React.FC<CourseSyllabusProps> = ({ data }) => {
  const { syllabus, course } = data;

  const tools = [
    { name: "Microsoft Excel", role: "Formulas, Frequency Tables, Pivot & Slicers", badge: "Core Analytics" },
    { name: "Python & Google Colab", role: "Lists, Tuples, Dictionaries & Functions", badge: "Core Programming" },
    { name: "Pandas & Matplotlib", role: "DataFrames & Scientific Visualizations", badge: "Data Science" },
    { name: "Descriptive Statistics", role: "Central Tendency, Dispersion & Probability", badge: "Statistical Theory" },
  ];

  return (
    <section id="course-syllabus" className="w-full py-12 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
      {/* Editorial Section Header */}
      <div className="flex items-baseline justify-between border-b border-slate-300 dark:border-slate-800 pb-3 mb-8">
        <div className="flex items-baseline gap-3">
          <span className="font-condensed text-4xl sm:text-5xl font-black text-slate-400">04</span>
          <h2 className="font-condensed text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
            Course Syllabus / Course Outline
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          {course.code} Curriculum
        </span>
      </div>

      {/* Technical Toolkit Strip (Clean typographic cards, no icons) */}
      <div className="mb-12">
        <div className="mb-4">
          <h3 className="font-condensed text-xl font-bold tracking-wider uppercase text-slate-900 dark:text-white">
            Course Technical Competencies & Stacks
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                {tool.badge}
              </span>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {tool.name}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1">
                {tool.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Part I: Official Portfolio Objectives (Prescribed by Prof. Virginia B. Loyola, MIT) */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mb-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
            Part I — Faculty Directive
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Objectives of the Student Class Portfolio
          </h3>
          <p className="text-xs text-slate-500 italic">
            Prescribed by Course Instructor Virginia B. Loyola, MIT:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-1">
            <li>Document the student's learning progress and academic performance throughout the semester.</li>
            <li>Compile all completed classroom activities, laboratory exercises, quizzes, projects, and examinations.</li>
            <li>Demonstrate the knowledge and practical skills acquired during the course.</li>
            <li>Develop students' organizational skills, responsibility, and sense of accountability.</li>
            <li>Encourage self-reflection and continuous improvement.</li>
          </ol>
        </div>
      </div>

      {/* Part II & III: Course Description and Learning Outcomes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8 mb-10">
        <div className="lg:col-span-5 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
            Part II — Course Description
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {course.code}: {course.description}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
            {syllabus.description}
          </p>
          <div className="text-xs font-mono text-slate-500 pt-2">
            Units: <strong>3.0 Academic Units</strong> • Instructor: <strong>{course.instructor.name}</strong>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
            Part III — Course Learning Outcomes
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Demonstrated Academic Competencies
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-1">
            {syllabus.courseObjectives.map((obj, idx) => (
              <li key={idx} className="leading-snug">
                <span>{obj}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Part IV: Modular Syllabus Breakdown */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mb-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
          Part IV — Curricular Units
        </span>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6">
          Modular Breakdown & Term Coverage
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syllabus.modules.map((mod) => (
            <div
              key={mod.moduleNumber}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30 space-y-3"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-slate-900 dark:text-white">
                  MODULE 0{mod.moduleNumber}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px]">
                  {mod.term}
                </span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                {mod.title}
              </h4>
              <ul className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 list-inside">
                {mod.topics.map((t, idx) => (
                  <li key={idx}>— {t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Part V: Grading Weights */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
              Part V — Grading System
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              Institutional Evaluation Distribution
            </h4>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <div>Classroom: <strong>20%</strong></div>
            <div>Laboratories: <strong>25%</strong></div>
            <div>Quizzes: <strong>15%</strong></div>
            <div>Projects: <strong>20%</strong></div>
            <div>Examinations: <strong>20%</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
};
