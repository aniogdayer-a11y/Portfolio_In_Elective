import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface LearningReflectionProps {
  data: PortfolioData;
}

export const LearningReflection: React.FC<LearningReflectionProps> = ({ data }) => {
  const { learningReflection } = data;

  const reflections = [
    {
      num: "01",
      question: "What important knowledge and skills did you learn?",
      subtitle: "Academic Competencies & Practical Capabilities Acquired",
      content: learningReflection.learnedKnowledge
    },
    {
      num: "02",
      question: "What activities or topics were most challenging?",
      subtitle: "Technical Roadblocks & Conceptual Obstacles Encountered",
      content: learningReflection.challengingTopics
    },
    {
      num: "03",
      question: "How did you overcome the difficulties?",
      subtitle: "Problem-Solving Strategies & Continuous Improvement",
      content: learningReflection.howOvercome
    },
    {
      num: "04",
      question: "How will you apply the knowledge and skills you acquired?",
      subtitle: "Professional Career Applications & Future Technology Outlook",
      content: learningReflection.futureApplication
    }
  ];

  return (
    <section id="learning-reflection" className="w-full py-12 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
      {/* Editorial Section Header */}
      <div className="flex items-baseline justify-between border-b border-slate-300 dark:border-slate-800 pb-3 mb-8">
        <div className="flex items-baseline gap-3">
          <span className="font-condensed text-4xl sm:text-5xl font-black text-slate-400">10</span>
          <h2 className="font-condensed text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
            Learning Reflection
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Student Self-Evaluation
        </span>
      </div>

      {/* 4 Inquiries in Clean Editorial Typography (No decorative icons) */}
      <div className="space-y-8">
        {reflections.map((ref) => (
          <div key={ref.num} className="border-b border-slate-200 dark:border-slate-800/60 pb-8 last:border-b-0">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-condensed text-2xl font-black text-slate-400">
                {ref.num}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {ref.question}
                </h3>
                <span className="text-[11px] font-mono text-slate-500 block">
                  {ref.subtitle}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify mt-3 pl-8">
              {ref.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
