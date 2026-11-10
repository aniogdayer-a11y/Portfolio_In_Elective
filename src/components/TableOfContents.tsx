import React from 'react';

interface TableOfContentsProps {
  onNavigate: (sectionId: string) => void;
  imageStats?: { total: number; uploaded: number };
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onNavigate }) => {
  const sections = [
    { num: "01", id: "cover-page", title: "Cover Page", desc: "Official JRU Masthead & Student Metadata", page: "01" },
    { num: "02", id: "table-of-contents", title: "Table of Contents", desc: "Curricular Index & Pagination", page: "02" },
    { num: "03", id: "student-profile", title: "Student Profile", desc: "Credentials, Bio & Academic Background", page: "03" },
    { num: "04", id: "course-syllabus", title: "Course Syllabus / Course Outline", desc: "Objectives, Modules 1–6 & Grading System", page: "04" },
    { num: "05", id: "classroom-activities", title: "Classroom Activities and Exercises", desc: "Lectures, Seatworks & Theory Outputs", page: "05–09" },
    { num: "06", id: "laboratory-activities", title: "Laboratory Activities", desc: "Code, Outputs & Result Explanations", page: "10–16" },
    { num: "07", id: "quizzes-assessments", title: "Quizzes and Assessments", desc: "Evaluative Quizzes & Assessment Proofs", page: "17–20" },
    { num: "08", id: "projects-performance-tasks", title: "Projects and Performance Tasks", desc: "Major Deliverables & Analytics Dashboards", page: "21–24" },
    { num: "09", id: "examination-results", title: "Examination Results", desc: "Prelim, Midterm & Final Exam Documentation", page: "25–28" },
    { num: "10", id: "learning-reflection", title: "Learning Reflection", desc: "Self-Evaluation & Technical Inquiries", page: "29" },
    { num: "11", id: "course-summary", title: "Course Learning Summary", desc: "Capstone Summary & Faculty Sign-off", page: "30" }
  ];

  return (
    <section id="table-of-contents" className="w-full py-12 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
      {/* Editorial Section Header */}
      <div className="flex items-baseline justify-between border-b border-slate-300 dark:border-slate-800 pb-3 mb-8">
        <div className="flex items-baseline gap-3">
          <span className="font-condensed text-4xl sm:text-5xl font-black text-slate-400">02</span>
          <h2 className="font-condensed text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
            Table of Contents
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Curricular Index
        </span>
      </div>

      {/* Editorial 2-Column Index Grid (No dashboard card box, pure clean typography) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => onNavigate(sec.id)}
            className="flex items-baseline justify-between py-3 border-b border-slate-200 dark:border-slate-800/80 hover:border-slate-900 dark:hover:border-white transition-all text-left group cursor-pointer"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-condensed text-xl font-bold text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {sec.num}
              </span>
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:underline block">
                  {sec.title}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {sec.desc}
                </span>
              </div>
            </div>

            <span className="text-xs font-mono text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white shrink-0 ml-4">
              P. {sec.page}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
