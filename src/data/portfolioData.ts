import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  university: {
    name: "Jose Rizal University",
    campus: "Mandaluyong Campus",
    college: "College of Computer Studies",
    department: "Information Technology Department",
    logoUrl: "./assets/jru-id.png"
  },
  course: {
    code: "ITC C503",
    description: "IT Elective 2 — Data Science and Data Analytics",
    academicYear: "A.Y. 2026–2027",
    semester: "First Semester",
    instructor: {
      name: "VIRGINIA B. LOYOLA, MIT",
      title: "Course Instructor / Assistant Professor",
      department: "College of Computer Studies"
    }
  },
  student: {
    fullName: "Dayer C. Aniog",
    studentNumber: "2023-104928",
    program: "Bachelor of Science in Information Technology (BSIT)",
    yearLevel: "3rd Year",
    section: "BSIT 303I",
    email: "aniog.dayer@gmail.com",
    phone: "0966 177 6821",
    location: "Mandaluyong / Pasig, Metro Manila, Philippines",
    profilePhotoUrl: "./assets/dayer-suit-portrait.png",
    jruIdUrl: "./assets/jru-id.png",
    personalIntro: [
      "I am Dayer C. Aniog, an Information Technology student at Jose Rizal University specializing in Data Analytics, Data Science, and modern Web Engineering.",
      "Throughout this course, I developed hands-on competencies in advanced spreadsheet modeling, descriptive statistics, multi-variable probability calculations, and data visualization.",
      "I expanded my programming skills into Python, working with Google Colab notebooks, data structures, and scientific libraries such as Pandas and Matplotlib.",
      "Applying systematic problem-solving enabled me to analyze raw business datasets, construct multi-dimensional pivot dashboards, and generate meaningful statistical insights.",
      "I value continuous learning, academic discipline, and technical rigor as foundational qualities for delivering impactful technological solutions."
    ],
    educationalBackground: [
      {
        institution: "Jose Rizal University",
        program: "Bachelor of Science in Information Technology",
        years: "2025 – Present",
        location: "Mandaluyong City, Philippines",
        highlight: "Specialization in Data Analytics, Software Architecture, and Enterprise Systems. Active member in AWS Student Builder Group."
      },
      {
        institution: "Technological Institute of the Philippines",
        program: "Bachelor of Science in Computer Science",
        years: "2024 – 2025",
        location: "Quezon City, Philippines",
        highlight: "Foundational coursework in object-oriented programming, data structures, and algorithms."
      },
      {
        institution: "Capellan Institute of Technology, Inc.",
        program: "IT Work Immersion Program",
        years: "2024",
        location: "Metro Manila, Philippines",
        highlight: "Practical experience in computer hardware diagnostics, operating systems, and network configurations."
      }
    ],
    interestsAndHobbies: [
      "Data Analytics & Statistical Modeling (Excel, Pivot Tables, Formulas)",
      "Python Data Science & Visualization (Pandas, Matplotlib, Google Colab)",
      "Front-End Web Engineering (HTML5, Tailwind CSS, TypeScript, React)",
      "UI/UX Interface Design & Prototyping (Figma)",
      "Enterprise Systems & Relational Databases (SQL)",
      "Digital Illustration & Graphic Artwork"
    ],
    trainingsAndExperience: [
      {
        role: "Creatives Team Member",
        organization: "AWS Student Builder Group – José Rizal University",
        year: "2025 – Present",
        bullets: [
          "Developed digital assets, visual layouts, and publication materials for cloud technology seminars.",
          "Collaborated with interdisciplinary student leaders on student tech workshops."
        ]
      },
      {
        role: "IT Work Immersion Trainee",
        organization: "Capellan Institute of Technology, Inc.",
        year: "2024",
        bullets: [
          "Performed diagnostics, hardware upgrades, and operating system deployment on client computers.",
          "Assisted in configuring local area network routing topologies."
        ]
      },
      {
        role: "Hackathon Participant",
        organization: "ImaGnation: GCash Innovation Challenge",
        year: "2024",
        bullets: [
          "Collaborated with team members to prototype a fintech mobile application workflow.",
          "Synthesized user journey wireframes and structured project presentations."
        ]
      }
    ],
    skills: {
      technical: [
        "Microsoft Excel (Formulas, Pivot Tables, Statistical Charts, Slicers)",
        "Python (Lists, Tuples, Dictionaries, Functions, Google Colab)",
        "Pandas & Matplotlib Data Science Libraries",
        "Descriptive Statistics & Probability Modeling",
        "React, TypeScript, Tailwind CSS, HTML5"
      ],
      creative: [
        "Figma UI/UX Design",
        "Data Dashboard Layouts",
        "Digital Illustration"
      ],
      soft: [
        "Analytical Problem Solving",
        "Attention to Detail",
        "Systematic Documentation",
        "Time Management"
      ]
    }
  },
  syllabus: {
    description: "ITC C503 covers foundational and intermediate competencies in Data Science and Analytics, focusing on exploratory data analysis, descriptive statistics, advanced spreadsheet calculations, probability, pivot reporting dashboards, and Python data science programming using Google Colab, Pandas, and Matplotlib.",
    courseObjectives: [
      "Apply descriptive statistical methods and probability theory to analyze real-world datasets.",
      "Master advanced spreadsheet functions, conditional formatting, frequency distribution tables, and charting.",
      "Construct multi-dimensional business reporting models utilizing Pivot Tables, Pivot Charts, and interactive Slicers.",
      "Develop Python programs using Google Colab to process lists, tuples, and dictionary data structures.",
      "Implement data visualization pipelines and exploratory data analysis using Pandas and Matplotlib."
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Introduction to Data Science & Spreadsheet Analytics",
        term: "Prelim",
        topics: [
          "Data science lifecycle and analytical methodologies",
          "Descriptive statistics: Mean, Median, Mode, Variance, Standard Deviation",
          "Conditional formatting, rules, and cell styles in Microsoft Excel"
        ],
        outcomes: [
          "Perform automated data cleaning, formatting, and baseline statistical evaluations in Excel."
        ]
      },
      {
        moduleNumber: 2,
        title: "Advanced Excel Formulas, Grouped Frequency & Charts",
        term: "Prelim",
        topics: [
          "Logical functions, nested IF conditions, and data validation",
          "Constructing Grouped Frequency Distribution tables",
          "Statistical chart generation: Column, Bar, Line, and Pie percentage distributions"
        ],
        outcomes: [
          "Produce clean visual representations of grouped demographic and operational records."
        ]
      },
      {
        moduleNumber: 3,
        title: "Probability & Statistical Distribution Graphs",
        term: "Midterm",
        topics: [
          "Classical probability, compound events, and conditional probabilities",
          "Grouped frequency distributions with class boundaries and intervals",
          "Statistical graphs: Histograms, Frequency Polygons, and Ogive curves"
        ],
        outcomes: [
          "Analyze distribution curves and probability metrics across tabular data."
        ]
      },
      {
        moduleNumber: 4,
        title: "Pivot Tables, Pivot Charts & Dashboard Slicers",
        term: "Midterm",
        topics: [
          "Dynamic data pivoting and multidimensional aggregation",
          "Building Pivot Charts across revenue, quantity, unit cost, and expenses",
          "Configuring interactive Excel Slicers for multi-tier executive dashboards"
        ],
        outcomes: [
          "Deliver interactive corporate-grade reporting dashboards with cross-filtering."
        ]
      },
      {
        moduleNumber: 5,
        title: "Python Programming & Google Colab Environment",
        term: "Final",
        topics: [
          "Introduction to Google Colab and cloud-based Python runtimes",
          "Python list creation, indexing, slicing, mutation, and built-in methods",
          "Tuples, nested tuples, and key-value dictionary hashing"
        ],
        outcomes: [
          "Write clean, modular Python scripts to parse and transform structured data collections."
        ]
      },
      {
        moduleNumber: 6,
        title: "Exploratory Data Analysis with Pandas & Matplotlib",
        term: "Final",
        topics: [
          "Reading and parsing CSV files using Pandas DataFrames",
          "Matplotlib visualization engine: line plots, scatter plots, bar charts, and subplots",
          "Synthesizing exploratory data analysis insights for decision-making"
        ],
        outcomes: [
          "Engineer complete data visualization workflows from raw CSV datasets to publication-ready plots."
        ]
      }
    ],
    gradingSystem: [
      { component: "Classroom Activities & Seatworks", percentage: "20%", details: "Classroom outputs, problem sets, and practical seatworks" },
      { component: "Laboratory Activities", percentage: "25%", details: "Hands-on Excel workbooks and Python Colab notebooks" },
      { component: "Quizzes & Evaluative Proofs", percentage: "15%", details: "Term quizzes administered via Microsoft Teams / Forms" },
      { component: "Projects & Performance Tasks", percentage: "20%", details: "Prelim and Midterm analytical dashboard projects" },
      { component: "Major Term Examinations", percentage: "20%", details: "Prelim, Midterm, and Final comprehensive assessments" }
    ]
  },

  // 5. CLASSROOM ACTIVITIES AND EXERCISES
  classroomActivities: [
    {
      id: "class-act-1",
      sectionNumber: 1,
      title: "Prelim Seatwork No. 1 — Descriptive Statistics",
      category: "Seatwork",
      term: "Prelim",
      date: "July 17, 2026",
      score: "25 / 25",
      instructions: "Have a printscreen of your spreadsheet data showing computed data and formula view for Mean, Median, Mode, Variance, and Standard Deviation. Save as PrelimSeatworkNo1_DescriptiveStatistics_LastName.pdf.",
      problemStatement: "Compute central tendency and dispersion metrics for raw dataset using native Excel formulas.",
      procedure: [
        "Imported raw observation dataset into Microsoft Excel.",
        "Applied formulas: AVERAGE(), MEDIAN(), MODE.MULT(), VAR.S(), and STDEV.S().",
        "Enabled formula auditing to verify correct cell references.",
        "Converted spreadsheet view into PDF submission format."
      ],
      explanation: "Successfully computed descriptive statistical metrics and verified all calculation formulas without discrepancies.",
      imagePlaceholderNote: "Screenshot of turned-in Prelim Seatwork 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/prelim-seatwork-1.png",
      tags: ["Descriptive Statistics", "Excel Formulas", "Mean/Median/Mode"]
    },
    {
      id: "class-act-2",
      sectionNumber: 2,
      title: "Midterm Assignment No. 1 — Probability Step-by-Step Solutions",
      category: "Assignment",
      term: "Midterm",
      date: "September 11, 2026",
      score: "25 / 25",
      instructions: "On a Yellow Pad, write step-by-step handwritten solutions of the probability problems. Box final answers in lowest terms. Scan or photograph paper solution and upload.",
      problemStatement: "Solve classical probability problems involving single-event, compound-event, and conditional outcomes.",
      procedure: [
        "Identified sample spaces and total possible outcomes for each problem scenario.",
        "Calculated probability fractions and simplified all results to lowest mathematical terms.",
        "Wrote clean, boxed step-by-step solutions on yellow pad.",
        "Digitized handwritten sheets into multi-page JPG documentation."
      ],
      explanation: "Provided complete handwritten proofs and verified lowest-term fractional values for all assigned probability exercises.",
      imagePlaceholderNote: "Screenshot of turned-in Midterm Assignment 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-assignment-1.png",
      tags: ["Probability", "Handwritten Solutions", "Lowest Terms"]
    },
    {
      id: "class-act-3",
      sectionNumber: 3,
      title: "Midterm Co-Curricular — I.T. Organization Membership",
      category: "Co-Curricular",
      term: "Midterm",
      date: "September 18, 2026",
      score: "25 / 25",
      instructions: "Register for accredited JRU student IT organizations (JPCS, JBECP, ENC-JRU). Upload screenshots of registration forms and booth visit documentation.",
      problemStatement: "Institutional requirement promoting professional organizational affiliation and technology community participation.",
      procedure: [
        "Completed online membership registration forms for JRU computer organizations.",
        "Captured verification receipts and membership acknowledgments.",
        "Uploaded documentation proof to Microsoft Teams assignment portal."
      ],
      explanation: "Confirmed active academic co-curricular membership supporting professional development in information technology.",
      imagePlaceholderNote: "Screenshot of turned-in IT Organization Membership on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-it-org.png",
      tags: ["JPCS", "Student Organization", "Co-Curricular"]
    },
    {
      id: "class-act-4",
      sectionNumber: 4,
      title: "Final Term Seatwork No. 1 — Python List Basics & Indexing",
      category: "Seatwork",
      term: "Final",
      date: "October 16, 2026",
      score: "Completed",
      instructions: "Use Google Colab Notebook to encode list initialization, zero-based indexing, element reassignment, and list mutation. Save as FinalSWNo1_PythonList_LastName.pdf.",
      problemStatement: "Demonstrate Python list creation, sequential access, and mutable in-place updates.",
      codeSnippet: `# Sample List Operations
cheeses = ['Cheddar', 'Edam', 'Gouda']
numbers = [17, 123]
empty = []
print("Initial:", cheeses, numbers, empty)

# Indexing and Mutability
print("First cheese:", cheeses[0])
print("Third cheese:", cheeses[2])

numbers[1] = 5
print("Mutated numbers list:", numbers)`,
      codeLanguage: "python",
      procedure: [
        "Initialized Google Colab runtime with Python 3 kernel.",
        "Created string and numeric lists and tested zero-based index retrieval.",
        "Demonstrated list mutability by updating index 1 value from 123 to 5.",
        "Exported notebook output as PDF documentation."
      ],
      explanation: "Verified core list indexing mechanics, mutable array properties, and runtime console output.",
      imagePlaceholderNote: "Screenshot of turned-in Final Seatwork 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/final-seatwork-1.png",
      tags: ["Python", "Google Colab", "Lists", "Indexing"]
    }
  ],

  // 6. LABORATORY ACTIVITIES
  laboratoryActivities: [
    {
      id: "lab-act-1",
      sectionNumber: 1,
      title: "Prelim Activity No. 1 — Conditional Formatting & Data Filtering",
      category: "Laboratory",
      term: "Prelim",
      date: "July 24, 2026",
      score: "25 / 25",
      instructions: "Apply Conditional Formatting (Highlight Cells Rules, Top/Bottom Rules, Data Bars, Duplicate Values), Insert & Copy Columns, Create Sheet Tabs, Filter Records by Building, and Format Currency in PHP. Save as PrelimActivityNo.1_FormattingCells_LastName.xlsx.",
      problemStatement: "Perform automated data cleaning, multi-tier conditional formatting, and filtered building reports on a real-estate dataset.",
      procedure: [
        "Imported raw property listing dataset into Excel workbook.",
        "Configured Highlight Cells Rules for target pricing thresholds and duplicate IDs.",
        "Applied gradient Data Bars to visualize relative price magnitudes.",
        "Created filtered building tabs (BUILDING1, BUILDING2, BUILDING3) and formatted prices with PHP currency symbols."
      ],
      explanation: "Organized raw real-estate records into structured sheets with visual formatting cues and separate category views.",
      imagePlaceholderNote: "Screenshot of turned-in Prelim Activity 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/prelim-activity-1.png",
      tags: ["Conditional Formatting", "Data Bars", "Excel Filtering", "Currency"]
    },
    {
      id: "lab-act-2",
      sectionNumber: 2,
      title: "Prelim Activity No. 2 — Advanced Excel Logical Formulas",
      category: "Laboratory",
      term: "Prelim",
      date: "July 31, 2026",
      score: "25 / 25",
      instructions: "Implement advanced Excel logical conditions, nested IF statements, and automated status evaluators on tabular records. Submit Excel workbook Book.xlsx.",
      problemStatement: "Automate grade categorization and threshold validation using nested IF statements.",
      procedure: [
        "Structured multi-column data sheet with numerical values and criteria columns.",
        "Engineered nested IF expressions to assign status values based on ranges.",
        "Tested boundary conditions and zero-value handling.",
        "Saved and verified completed workbook."
      ],
      explanation: "Automated business logic evaluation using formula nesting, removing manual classification errors.",
      imagePlaceholderNote: "Screenshot of turned-in Prelim Activity 2 on MS Teams.",
      defaultImageSrc: "./assets/coursework/prelim-activity-2.png",
      tags: ["Logical Formulas", "Nested IF", "Excel Functions"]
    },
    {
      id: "lab-act-3",
      sectionNumber: 3,
      title: "Prelim Activity No. 3 — Creating Statistical Charts",
      category: "Laboratory",
      term: "Prelim",
      date: "August 14, 2026",
      score: "25 / 25",
      instructions: "Download GroupedFrequencyDistribution Chart file. Construct four distinct charts using Lower Class Limits as X-axis and Frequency as Y-axis. Calculate Pie Chart percentages. Add Title, Axis Titles, Data Labels, and Legends. Submit PDF documentation.",
      problemStatement: "Synthesize grouped frequency distribution tables into standardized statistical charts.",
      procedure: [
        "Calculated class boundaries, lower limits, and relative frequency percentages.",
        "Generated Clustered Column, Bar, Line, and Pie Chart visualizations.",
        "Formatted all chart elements: Chart Titles, X/Y Axis Titles, Data Labels, and Legends.",
        "Compiled screenshots into formal Word document with headers/footers and converted to PDF."
      ],
      explanation: "Produced four clear statistical charts depicting frequency distribution patterns with accurate data labels.",
      imagePlaceholderNote: "Screenshot of turned-in Prelim Activity 3 on MS Teams.",
      defaultImageSrc: "./assets/coursework/prelim-activity-3.png",
      tags: ["Statistical Charts", "Frequency Distribution", "Data Labels"]
    },
    {
      id: "lab-act-4",
      sectionNumber: 4,
      title: "Midterm Activity No. 1 — Grouped Frequency Distribution Table",
      category: "Laboratory",
      term: "Midterm",
      date: "September 11, 2026",
      score: "25 / 25",
      instructions: "Construct Grouped Frequency Distribution Table with exact formulas for class limits, midpoints, relative frequencies, and cumulative frequencies across Categorical, Grouped, and Prob2 tabs. Submit MidActivityNo.1_LastName.xlsx.",
      problemStatement: "Compute full statistical distribution matrices from raw numerical observations.",
      procedure: [
        "Calculated Range, Number of Classes (k), and Class Width (i).",
        "Formulated Lower and Upper Class Limits, Class Boundaries, and Class Midpoints.",
        "Generated frequency counts, relative percentages, and cumulative distributions.",
        "Applied uniform table formatting: merged headers, wrap text, and clear borders."
      ],
      explanation: "Successfully built structured frequency distribution tables validating total observation counts and probability sums.",
      imagePlaceholderNote: "Screenshot of turned-in Midterm Activity 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-activity-1.png",
      tags: ["Grouped Frequency", "Class Limits", "Cumulative Frequency"]
    },
    {
      id: "lab-act-5",
      sectionNumber: 5,
      title: "Midterm Activity No. 2 — Statistical Graphs (Histogram, Polygon & Ogive)",
      category: "Laboratory",
      term: "Midterm",
      date: "September 18, 2026",
      score: "25 / 25",
      instructions: "Open Midterm Activity 1 table. Construct Histogram (Frequency vs Class Boundaries), Frequency Polygon (Frequency vs Class Midpoints), and Ogive (Cumulative Frequency vs Class Boundaries). Move charts to new sheet tab named StatisticalCharts. Submit Excel workbook.",
      problemStatement: "Build three fundamental continuous distribution graphs to analyze skewness and cumulative distribution.",
      procedure: [
        "Constructed Histogram with zero gap width to represent continuous class boundaries.",
        "Plotted Frequency Polygon connecting midpoints with frequency markers.",
        "Created Ogive curve tracking cumulative frequencies.",
        "Configured titles, axis designations, and moved charts to StatisticalCharts tab."
      ],
      explanation: "Visualized distribution shape, modal class, and cumulative percentiles through three coordinated statistical plots.",
      imagePlaceholderNote: "Screenshot of turned-in Midterm Activity 2 on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-activity-2.png",
      tags: ["Histogram", "Frequency Polygon", "Ogive", "Statistical Graphs"]
    },
    {
      id: "lab-act-6",
      sectionNumber: 6,
      title: "Midterm Activity No. 3 — Pivot Tables, Pivot Charts & Excel Slicers",
      category: "Laboratory",
      term: "Midterm",
      date: "September 25, 2026",
      score: "25 / 25",
      instructions: "Construct 5 Pivot Tables and 10 Pivot Charts across January to March transactions (Revenue, Unit Cost, Unit Price, Quantity, Expenses). Include interactive Slicer filtering. Submit PDF and Excel workbook.",
      problemStatement: "Build multi-dimensional quarterly financial reporting models with dynamic interactive filters.",
      procedure: [
        "Consolidated monthly transaction records across Q1 business sheets.",
        "Built 5 Pivot Tables aggregating metrics across regional territories and products.",
        "Generated 10 linked Pivot Charts with custom color palettes and data labels.",
        "Inserted interactive Excel Slicers to enable instant cross-table filtering."
      ],
      explanation: "Delivered dynamic multi-sheet financial pivot models with automated slicers for executive analysis.",
      imagePlaceholderNote: "Screenshot of turned-in Midterm Activity 3 on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-activity-3.png",
      tags: ["Pivot Tables", "Pivot Charts", "Excel Slicers", "Quarterly Reporting"]
    },
    {
      id: "lab-act-7",
      sectionNumber: 7,
      title: "Final Term Activity No. 1 — Python Lists & Tuples in Google Colab",
      category: "Laboratory",
      term: "Final",
      date: "October 23, 2026",
      score: "25 / 25",
      instructions: "Use Google Colab Notebook to encode and execute 20 sample Python programs demonstrating list initialization, element appending, removal, sorting, slicing, and aggregations. Save as FinalActivityNo.1_PtyhonListTupples_LastName.pdf and .ipynb.",
      problemStatement: "Master Python sequence types, memory manipulation, and built-in list algorithms.",
      codeSnippet: `# Sample 4: Quiz Scores Sorting
scores = [85, 92, 78, 90, 88]
scores.sort()
print("Ascending:", scores)
print("Descending:", sorted(scores, reverse=True))

# Sample 5: Monthly Sales Aggregation
sales = [12000, 15000, 13500, 18000, 16000, 14500]
total = sum(sales)
average = total / len(sales)
print(f"Total Sales: {total}, Average: {average:.2f}")`,
      codeLanguage: "python",
      procedure: [
        "Created Google Colab workspace and executed 20 sequence program exercises.",
        "Demonstrated .append(), .remove(), .pop(), and .sort() mutating operations.",
        "Executed slicing expressions to isolate sub-lists.",
        "Exported full output logs into PDF and Jupyter Notebook formats."
      ],
      explanation: "Executed 20 sample Python scripts validating in-place list sorting, memory indexing, and statistical aggregations.",
      imagePlaceholderNote: "Screenshot of turned-in Final Activity 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/final-activity-1.png",
      tags: ["Python", "Google Colab", "Lists & Tuples", "Sorting"]
    },
    {
      id: "lab-act-8",
      sectionNumber: 8,
      title: "Final Term Activity No. 2 — Python Tuples & Nested Dictionaries",
      category: "Laboratory",
      term: "Final",
      date: "October 27, 2026",
      score: "25 / 25",
      instructions: "Implement structured programming solutions for 5 problems: Student Grade Average, Array Frequency Analysis, Product Inventory Lookup, Employee Payroll, and Contestant Rankings. Submit Colab Notebook and PDF.",
      problemStatement: "Design algorithmic functions to process nested tuple records and key-value dictionary mappings.",
      codeSnippet: `# PROBLEM 2: Number Analysis (Unique and Frequency)
numbers = [12, 5, 8, 12, 3, 5, 9, 8, 15, 3, 20, 12, 9, 25, 15]

def analyze_numbers(numbers):
    unique = []
    frequency = {}
    for n in numbers:
        if n not in unique:
            unique.append(n)
        frequency[n] = frequency.get(n, 0) + 1
    return unique, frequency

unique, freq = analyze_numbers(numbers)
print("Unique Numbers:", unique)
print("Frequency Map:", freq)`,
      codeLanguage: "python",
      procedure: [
        "Constructed functions parsing multi-field tuple lists (ID, Name, Numeric Tuples).",
        "Implemented hashing logic using Python dictionary .get() for frequency counts.",
        "Calculated weighted averages, overtime payroll computations, and inventory valuations.",
        "Compiled clean source code and console outputs into final PDF."
      ],
      explanation: "Engineered robust algorithmic functions handling nested data collections, dictionary lookups, and multi-condition evaluations.",
      imagePlaceholderNote: "Screenshot of turned-in Final Activity 2 on MS Teams.",
      defaultImageSrc: "./assets/coursework/final-activity-2.png",
      tags: ["Python Dictionaries", "Nested Tuples", "Frequency Mapping"]
    },
    {
      id: "lab-act-9",
      sectionNumber: 9,
      title: "Final Term Activity No. 3 — Python Matplotlib with Pandas Visualization",
      category: "Laboratory",
      term: "Final",
      date: "October 30, 2026",
      score: "25 / 25",
      instructions: "Using Google Colab Notebook, type and execute 9 sample Python data charts combining Matplotlib and Pandas DataFrames (line plots, scatter plots, 3D scale plots, bar charts, and CSV file analysis on sales_data.csv and company_data.csv). Submit notebook and PDF.",
      problemStatement: "Build complete data visualization pipelines to graph business trends from raw CSV datasets.",
      codeSnippet: `import matplotlib.pyplot as plt
import numpy as np

# Multi-line Trend Plot
y1 = np.array([3, 8, 1, 10])
y2 = np.array([6, 2, 7, 11])
plt.plot(y1, label='Model A', marker='o')
plt.plot(y2, label='Model B', marker='s')
plt.title('Performance Comparison')
plt.xlabel('Evaluation Epoch')
plt.ylabel('Metric Score')
plt.legend()
plt.grid(True)
plt.show()`,
      codeLanguage: "python",
      procedure: [
        "Imported Matplotlib.pyplot, NumPy, and Pandas into Colab environment.",
        "Parsed sales_data.csv and company_data.csv records into structured DataFrames.",
        "Generated line plots, scatter charts, multi-variable bar charts, and custom subplots.",
        "Formatted titles, labels, legends, and grid overlays on all 9 visualizations."
      ],
      explanation: "Developed publication-ready graphical visualizations communicating time-series trends and comparative category metrics.",
      imagePlaceholderNote: "Screenshot of turned-in Final Activity 3 on MS Teams.",
      defaultImageSrc: "./assets/coursework/final-activity-3.png",
      tags: ["Matplotlib", "Pandas", "Data Visualization", "CSV Analysis"]
    }
  ],

  // 7. QUIZZES AND ASSESSMENTS
  quizzesAndAssessments: [
    {
      id: "quiz-1",
      sectionNumber: 1,
      title: "ITC C503 — Prelim Quiz No. 1: Data Science Fundamentals",
      category: "Quiz",
      term: "Prelim",
      date: "September 1, 2026",
      score: "20 / 20",
      instructions: "Online assessment administered via Microsoft Forms under proctored anti-cheat conditions. Evaluated foundational concepts of data science and spreadsheet calculations.",
      problemStatement: "Assess student comprehension of data science lifecycles, statistical data types, and Excel formula operations.",
      procedure: [
        "Logged into Microsoft Teams assessment portal within scheduled testing window.",
        "Completed 20 conceptual and computational multiple-choice inquiries.",
        "Verified submission confirmation receipt."
      ],
      explanation: "Achieved perfect score demonstrating solid mastery of preliminary data science principles.",
      imagePlaceholderNote: "Screenshot of turned-in Prelim Quiz 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/prelim-quiz-1.png",
      tags: ["Prelim Quiz", "Data Science Fundamentals", "MS Forms"]
    },
    {
      id: "quiz-2",
      sectionNumber: 2,
      title: "ITC C503 — Prelim Quiz No. 2: Advanced Spreadsheet Analytics",
      category: "Quiz",
      term: "Prelim",
      date: "September 2, 2026",
      score: "20 / 20",
      instructions: "Evaluative assessment covering conditional formatting rules, nested IF formulas, frequency distributions, and chart generation syntax.",
      problemStatement: "Test technical competence in spreadsheet functions, formula syntax, and chart formatting rules.",
      procedure: [
        "Accessed proctored quiz via MS Forms on Microsoft Teams.",
        "Evaluated formula outputs, error handling, and visualization parameters.",
        "Submitted assessment within allotted time constraint."
      ],
      explanation: "Demonstrated accurate technical knowledge in spreadsheet analytics and formula implementation.",
      imagePlaceholderNote: "Screenshot of turned-in Prelim Quiz 2 on MS Teams.",
      defaultImageSrc: "./assets/coursework/prelim-quiz-2.png",
      tags: ["Prelim Quiz", "Excel Analytics", "Formula Precision"]
    },
    {
      id: "quiz-3",
      sectionNumber: 3,
      title: "ITC C503 — Midterm Quiz: Frequency Distribution Table",
      category: "Quiz",
      term: "Midterm",
      date: "September 18, 2026",
      score: "32 / 35",
      instructions: "Practical and evaluative quiz on class limits, boundaries, midpoints, relative frequencies, and cumulative probability metrics.",
      problemStatement: "Verify computational precision in generating continuous statistical distribution tables.",
      procedure: [
        "Completed statistical problem calculations for grouped numerical data.",
        "Derived class boundaries, cumulative frequencies, and relative percentages.",
        "Received verified faculty grade of 32/35 on Microsoft Teams."
      ],
      explanation: "Demonstrated high-level proficiency in frequency distribution calculations and statistical table construction.",
      imagePlaceholderNote: "Screenshot of graded Midterm Quiz 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-quiz-1.png",
      tags: ["Midterm Quiz", "Frequency Distribution", "Verified Score"]
    },
    {
      id: "quiz-4",
      sectionNumber: 4,
      title: "ITC C503 — Midterm Quiz No. 2: Pivot Tables & Slicers",
      category: "Quiz",
      term: "Midterm",
      date: "September 25, 2026",
      score: "20 / 20",
      instructions: "Assessment covering dynamic data pivoting, pivot chart generation, multi-field grouping, and interactive Slicer configurations.",
      problemStatement: "Evaluate understanding of multi-dimensional data pivoting and business dashboard architectures.",
      procedure: [
        "Analyzed transactional data requirements and identified optimal pivot field arrangements.",
        "Evaluated questions on report filters, calculated fields, and timeline slicers.",
        "Submitted completed assessment with full points achieved."
      ],
      explanation: "Confirmed thorough knowledge of enterprise spreadsheet pivoting and interactive dashboard mechanics.",
      imagePlaceholderNote: "Screenshot of turned-in Midterm Quiz 2 on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-quiz-2.png",
      tags: ["Midterm Quiz", "Pivot Tables", "Slicers"]
    },
    {
      id: "quiz-5",
      sectionNumber: 5,
      title: "ITC C503 — Final Term Quiz: Python Programming & Visualization",
      category: "Quiz",
      term: "Final",
      date: "November 6, 2026",
      score: "20 / 20",
      instructions: "Comprehensive assessment evaluating Python syntax, list slicing, dictionary methods, and Matplotlib plotting commands.",
      problemStatement: "Test code comprehension, output prediction, and plotting syntax in Python.",
      procedure: [
        "Completed timed assessment covering Python sequence types, data structures, and Matplotlib functions.",
        "Solved code output tracing questions and debugging exercises.",
        "Submitted form confirming completion on Microsoft Teams."
      ],
      explanation: "Demonstrated comprehensive understanding of Python programming concepts and data visualization libraries.",
      imagePlaceholderNote: "Screenshot of turned-in Final Quiz 1 on MS Teams.",
      defaultImageSrc: "./assets/coursework/final-quiz-1.png",
      tags: ["Final Quiz", "Python Programming", "Matplotlib"]
    }
  ],

  // 8. PROJECTS AND PERFORMANCE TASKS
  projectsAndPerformanceTasks: [
    {
      id: "proj-1",
      sectionNumber: 1,
      title: "Prelim Project — Comprehensive Data Analysis in Excel",
      category: "Project",
      term: "Prelim",
      date: "August 24, 2026",
      score: "49 / 50",
      instructions: "Execute an end-to-end data analytics workflow on enterprise sales data: Raw Data Cleaning, Formula Computations, Statistical Analysis, and Executive Dashboard. Submit workbook Aniog_PrelimProject_DataAnalysis 1.xlsx.",
      problemStatement: "Transform unstructured raw business records into a multi-sheet analytical workbook with automated statistical indicators.",
      procedure: [
        "Sheet 1 (Raw Data): Audited records, validated data types, and normalized missing values.",
        "Sheet 2 (Cleaned Data): Applied conditional formatting, currency formatting, and record sorting.",
        "Sheet 3 (Analysis): Constructed descriptive statistics and grouped frequency tables.",
        "Sheet 4 (Dashboard): Synthesized coordinated column, bar, line, and pie visualizations."
      ],
      explanation: "Delivered a corporate-grade analytical workbook scoring 49/50, praised for clean data architecture and professional visual hierarchy.",
      imagePlaceholderNote: "Screenshot of returned Prelim Project on MS Teams showing 49/50 score.",
      defaultImageSrc: "./assets/coursework/prelim-project.png",
      tags: ["Prelim Project", "Excel Dashboard", "49/50 Score", "Data Analytics"]
    },
    {
      id: "proj-2",
      sectionNumber: 2,
      title: "Midterm Project — Interactive Excel Pivot Table Dashboard",
      category: "Project",
      term: "Midterm",
      date: "October 4, 2026",
      score: "50 / 50",
      instructions: "Synthesize large-scale enterprise transactions into six distinct Pivot Tables (PIVOT#1 to PIVOT#6), integrated Pivot Charts, statistical graphs, and dynamic interactive slicers. Submit Excel_PivotTable_Dashboard_Aniog.xlsx and PDF report.",
      problemStatement: "Engineer a high-impact executive dashboard facilitating rapid cross-regional and cross-product business analysis.",
      procedure: [
        "Processed extensive Sales_Data transaction repository across multiple operational dimensions.",
        "Built 6 modular Pivot Tables analyzing sales by region, product tier, and quarterly margins.",
        "Connected dynamic Slicers to synchronize all Pivot Charts on the master Dashboard sheet.",
        "Compiled technical methodology and analytical insights into formal PDF deliverable."
      ],
      explanation: "Engineered an enterprise-grade interactive dashboard enabling dynamic multi-parameter slice-and-dice business reporting.",
      imagePlaceholderNote: "Screenshot of turned-in Midterm Project on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-project.png",
      tags: ["Midterm Project", "Interactive Slicers", "Pivot Dashboard", "Enterprise"]
    }
  ],

  // 9. EXAMINATION RESULTS
  examinationResults: [
    {
      id: "exam-1",
      sectionNumber: 1,
      title: "ITC C503 — Prelim Examination Result",
      category: "Examination",
      term: "Prelim",
      date: "September 2, 2026",
      score: "50 / 50",
      instructions: "Departmental preliminary examination assessing data science methodology, descriptive statistical formulas, frequency distribution tables, and Excel chart engineering.",
      problemStatement: "Comprehensive evaluation of preliminary term theoretical knowledge and practical spreadsheet data analysis.",
      procedure: [
        "Completed examination within scheduled session under institutional proctoring.",
        "Solved quantitative statistical distribution problems and formula syntax questions.",
        "Submitted assessment through Microsoft Forms with completion timestamp recorded."
      ],
      explanation: "Demonstrated complete mastery of preliminary course competencies with verified institutional submission.",
      imagePlaceholderNote: "Screenshot of turned-in Prelim Examination on MS Teams.",
      defaultImageSrc: "./assets/coursework/prelim-exam.png",
      tags: ["Prelim Examination", "Departmental Exam", "Verified Completion"]
    },
    {
      id: "exam-2",
      sectionNumber: 2,
      title: "ITC C503 — Midterm Examination Result",
      category: "Examination",
      term: "Midterm",
      date: "October 14, 2026",
      score: "50 / 50",
      instructions: "Departmental midterm examination testing probability theory, frequency polygons, ogive curves, and pivot table dashboard architectures.",
      problemStatement: "Rigorous assessment of intermediate statistical modeling, probability problem sets, and multi-dimensional pivot configurations.",
      procedure: [
        "Executed calculations for continuous distribution tables and cumulative ogive metrics.",
        "Analyzed multi-field pivot table scenarios and slicer connections.",
        "Turned in completed examination response on institutional portal."
      ],
      explanation: "Exhibited strong analytical capability across probability modeling and dynamic spreadsheet reporting.",
      imagePlaceholderNote: "Screenshot of turned-in Midterm Examination on MS Teams.",
      defaultImageSrc: "./assets/coursework/midterm-project.png",
      tags: ["Midterm Examination", "Probability Modeling", "Pivot Architectures"]
    },
    {
      id: "exam-3",
      sectionNumber: 3,
      title: "ITC C503 — Final Term Comprehensive Examination",
      category: "Examination",
      term: "Final",
      date: "November 6, 2026",
      score: "50 / 50",
      instructions: "Capstone departmental examination testing Python programming in Google Colab, sequence data structures, dictionary mapping, and Pandas/Matplotlib visualization pipelines.",
      problemStatement: "Final evaluative milestone measuring end-to-end computational and statistical data science competencies.",
      procedure: [
        "Solved programming analysis questions involving list comprehension and dictionary lookups.",
        "Interpreted Matplotlib and Pandas code snippets to determine plot outputs.",
        "Finalized examination submission within official examination period."
      ],
      explanation: "Successfully completed final course examination, fulfilling all evaluative criteria for ITC C503.",
      imagePlaceholderNote: "Screenshot of turned-in Final Examination on MS Teams.",
      defaultImageSrc: "./assets/coursework/final-quiz-1.png",
      tags: ["Final Examination", "Python Data Science", "Course Capstone"]
    }
  ],

  // 10. LEARNING REFLECTION
  learningReflection: {
    learnedKnowledge: "Throughout ITC C503, I acquired vital competencies across the entire data analysis pipeline. In the preliminary and midterm terms, I developed proficiency in descriptive statistics, grouped frequency distribution modeling, and advanced Microsoft Excel functions. Building interactive Pivot Tables, Pivot Charts, and multi-tier Slicers taught me how raw business records can be transformed into clear executive dashboards. In the final term, transitioning to Python in Google Colab deepened my programming discipline, enabling me to manipulate structured sequences, nested dictionaries, and engineer visual analytics with Pandas and Matplotlib.",
    challengingTopics: "The most intellectually demanding phases involved constructing continuous statistical distribution curves (Ogive and Frequency Polygons) from grouped data and transitioning from manual spreadsheet operations to programmatic data handling in Python. Designing nested dictionary aggregations and configuring multi-subplot visual layouts in Matplotlib required careful attention to syntax, data types, and index alignments.",
    howOvercome: "I overcame these difficulties through deliberate practice, step-by-step problem deconstruction, and active experimentation. Whenever formula outputs or Python error traces appeared, I isolated the bug by testing individual expressions in Colab code cells. Reviewing the instructor's reference materials, verifying manual calculations against spreadsheet outputs, and consulting official documentation helped solidify my understanding.",
    futureApplication: "The statistical modeling, spreadsheet dashboard engineering, and Python data visualization skills I developed in this course form a vital foundation for my career as an IT professional. Whether developing front-end software systems that interface with analytics APIs, designing business intelligence reporting tools, or conducting data-driven software testing, the analytical mindset and computational rigor acquired in ITC C503 will directly enhance my professional work."
  },

  // 11. COURSE SUMMARY
  courseSummary: {
    overview: "ITC C503 (IT Elective 2: Data Science and Analytics) has provided an enriching, rigorous academic journey through the principles of data management, statistical calculation, and computational analysis. Across 18 academic weeks, I successfully completed all prescribed seatworks, hands-on laboratory exercises, evaluative quizzes, major dashboard projects, and departmental examinations.",
    keyMilestones: [
      "Mastery of descriptive statistics and formula automation in Microsoft Excel",
      "Construction of Grouped Frequency Distribution Tables, Histograms, and Ogives",
      "Engineering of interactive multi-tier Pivot Table and Slicer reporting dashboards",
      "Development of Python programming competencies using Google Colab",
      "Implementation of algorithmic sequence and dictionary data structure operations",
      "Creation of exploratory data analysis charts with Pandas and Matplotlib",
      "100% completion of all classroom, laboratory, quiz, project, and exam requirements"
    ],
    closingStatement: "This class portfolio stands as verified academic documentation of my learning journey, practical competencies, and dedication to excellence in Information Technology and Data Science at Jose Rizal University."
  }
};

