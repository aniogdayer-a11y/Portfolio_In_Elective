export interface SectionItem {
  id: string;
  sectionNumber: number;
  title: string;
  category: string;
  term?: 'Prelim' | 'Midterm' | 'Final' | 'Full Semester';
  date?: string;
  objectives?: string[];
  instructions?: string;
  problemStatement?: string;
  codeSnippet?: string;
  codeLanguage?: string;
  procedure?: string[];
  explanation?: string;
  imagePlaceholderNote: string;
  defaultImageSrc?: string;
  tags?: string[];
  score?: string;
  remarks?: string;
}

export interface PortfolioData {
  university: {
    name: string;
    campus: string;
    college: string;
    department: string;
    logoUrl?: string;
  };
  course: {
    code: string;
    description: string;
    academicYear: string;
    semester: string;
    instructor: {
      name: string;
      title: string;
      department: string;
    };
  };
  student: {
    fullName: string;
    studentNumber: string;
    program: string;
    yearLevel: string;
    section: string;
    profilePhotoUrl: string;
    jruIdUrl?: string;
    personalIntro: string[];
    skills: {
      technical: string[];
      creative: string[];
      soft: string[];
    };
  };
  classroomActivities: SectionItem[];
  laboratoryActivities: SectionItem[];
  quizzesAndAssessments: SectionItem[];
  projectsAndPerformanceTasks: SectionItem[];
  examinationResults: SectionItem[];
  learningReflection: {
    learnedKnowledge: string;
    challengingTopics: string;
    howOvercome: string;
    futureApplication: string;
  };
}
