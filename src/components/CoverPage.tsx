import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface CoverPageProps {
  data: PortfolioData;
}

export const CoverPage: React.FC<CoverPageProps> = ({ data }) => {
  return (
    <section 
      id="cover-page" 
      className="w-full relative py-6 sm:py-10 border-b border-slate-200 dark:border-slate-800"
    >
      {/* 1. TOP RUNNER */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-800 pb-3 mb-4 sm:mb-6 font-mono">
        <div>
          <span>{data.student.fullName}</span>
        </div>
        <div className="text-center">
          <span className="text-slate-500 dark:text-slate-400">{data.course.academicYear}</span>
        </div>
        <div className="text-right">
          <span className="text-slate-600 dark:text-slate-400">{data.student.section} • STUDENT</span>
        </div>
      </div>

      {/* 2. HERO STAGE: BOLD "PORTFOLIO" WITH OVERLAPPING CUTOUT PORTRAIT */}
      <div className="relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex items-center justify-center my-4 sm:my-6 select-none overflow-visible">
        {/* Background Gigantic Condensed Typography */}
        <h1 className="font-condensed text-[19vw] sm:text-[17vw] md:text-[15vw] lg:text-[12.5rem] xl:text-[14rem] leading-none font-black uppercase tracking-tight text-slate-900 dark:text-white text-center w-full select-none pointer-events-none">
          PORTFOLIO
        </h1>

        {/* Foreground Overlapping Portrait Cutout */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10">
          <img
            src={data.student.profilePhotoUrl}
            alt={data.student.fullName}
            className="max-h-[320px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[540px] xl:max-h-[580px] w-auto max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
            }}
          />
        </div>
      </div>

      {/* 3. EDITORIAL STATEMENTS (Clean, no decorative icons) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 pt-4 items-end">
        {/* Left Column: Course Academic Statement */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold block">
            {data.course.code} — {data.course.description}
          </span>
          <p className="text-xs sm:text-sm font-normal text-slate-700 dark:text-slate-300 leading-relaxed max-w-md">
            A comprehensive compilation of classroom activities, descriptive statistics workbooks, probability problem solutions, interactive Excel dashboards, and Python data science projects.
          </p>
        </div>

        {/* Right Column: Student Statement */}
        <div className="space-y-2 md:text-right flex flex-col md:items-end">
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            {data.student.fullName}
          </h2>
          <p className="text-xs sm:text-sm font-normal text-slate-700 dark:text-slate-300 leading-relaxed max-w-md">
            Information Technology student at Jose Rizal University focusing on Data Analytics, exploratory data analysis, and Python programming.
          </p>
        </div>
      </div>

      {/* 4. FORMAL ACADEMIC DETAILS STRIP */}
      <div className="border-t border-b border-slate-300 dark:border-slate-800 py-6 my-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
              Course Code & Title
            </span>
            <p className="font-bold text-slate-900 dark:text-white">
              {data.course.code}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px]">
              {data.course.description}
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
              University & College
            </span>
            <p className="font-bold text-slate-900 dark:text-white">
              {data.university.name}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px]">
              {data.university.college}
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
              Course Instructor
            </span>
            <p className="font-bold text-slate-900 dark:text-white">
              {data.course.instructor.name}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px]">
              {data.course.instructor.title}
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
              Academic Term & Year
            </span>
            <p className="font-bold text-slate-900 dark:text-white">
              {data.course.academicYear}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px]">
              {data.course.semester}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
