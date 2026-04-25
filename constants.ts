import { Week, Assignment, DemocracyDimension, Flashcard, QuizLevel, LiveQuizSession } from './types';

export const INSTRUCTOR = "Ahmet Ergurum";
export const SEMESTER = "Spring 2026";

export const SCHEDULE: Week[] = [
  { id: 1, dates: "Jan 27 & 29", title: "Introduction", topics: ["Comparative Method", "Course Overview"], readings: ["Lijphart Ch 1", "Syllabus"] },
  { id: 2, dates: "Feb 3-5", title: "Models of Democracy I", topics: ["Westminster Model", "Majoritarian Democracy", "Group 1 Presentation"], readings: ["Lijphart Ch 2"] },
  { id: 3, dates: "Feb 10-12", title: "Models of Democracy II", topics: ["Consensus Model", "Group 2 Presentation"], readings: ["Lijphart Ch 3"], due: ["Quiz 1 (Feb 10)"] },
  { id: 4, dates: "Feb 17-19", title: "Party Systems", topics: ["Two-party vs Multiparty", "Effective # of parties"], readings: ["Lijphart Ch 4-5"], due: ["Project Part 1: Proposal (Feb 17)"] },
  { id: 5, dates: "Feb 24-26", title: "Electoral Systems I", topics: ["Majoritarian vs PR", "Electoral Formulas", "Group 3 Presentation"], readings: ["Lijphart Ch 8"] },
  { id: 6, dates: "Mar 3-5", title: "Electoral Systems II", topics: ["Disproportionality", "Thresholds", "Group 4 Presentation"], readings: ["Lijphart Ch 8 (cont)", "Lijphart Ch 9"], due: ["Quiz 2 (Mar 3)"] },
  { id: 7, dates: "Mar 10-12", title: "Exec-Leg Relations I", topics: ["Cabinets", "Group 5 Presentation"], readings: ["Lijphart Ch 6-7"], due: ["In-Class Essay 1 (Mar 10)"] },
  { id: 8, dates: "Mar 17-19", title: "Exec-Leg Relations II", topics: ["Cabinet Formation", "Executive Dominance"], readings: ["Lijphart Ch 6-7 (cont)"], due: ["MIDTERM EXAM (Mar 19)"] },
  { id: 9, dates: "Mar 22-29", title: "SPRING BREAK", topics: ["NO CLASS"], readings: [] },
  { id: 10, dates: "Mar 31-Apr 2", title: "Legislative Institutions", topics: ["Bicameralism", "Legislative Strength", "Parliamentary Procedures"], readings: ["Lijphart Ch 11"], due: ["Project Part 2: Annotated Bibliography (Mar 31)"] },
  { id: 11, dates: "Apr 7-9", title: "Constitutions & Courts", topics: ["Judicial Review", "Constitutional Rigidity", "Group 6 Presentation"], readings: ["Lijphart Ch 12"], due: ["Quiz 3 (Apr 7)"] },
  { 
    id: 12, 
    dates: "Apr 14-16", 
    title: "Federalism & Economic Governance", 
    topics: [
      "Federal vs. Unitary",
      "Central Bank Independence",
      "Group 7 Presentation"
    ], 
    readings: [
      "Lijphart Ch 10",
      "Lijphart Ch 13",
      "Rodden (2004)"
    ] 
  },
  { 
    id: 13, 
    dates: "Apr 21-23", 
    title: "Institutions & Foreign Policy", 
    topics: [
      "Domestic Institutions & FP",
      "Two-level games",
      "Group 8 Presentation"
    ], 
    readings: [
      "Lijphart Ch 14",
      "Putnam (1988)",
      "Bueno de Mesquita & Smith (2012)"
    ], 
    due: ["In-Class Essay 2 (Apr 21)"] 
  },
  { id: 14, dates: "Apr 28-30", title: "Democratic Performance", topics: ["Measuring Democratic Quality", "Project Presentations Begin"], readings: ["Lijphart Ch 15-16"], due: ["Project Presentations (Apr 30)"] },
  { id: 15, dates: "May 5-7", title: "Challenges to Democracy", topics: ["Backsliding", "Populism", "Course Conclusion"], readings: ["Lijphart Ch 17"], due: ["Quiz 4 (May 5)", "Presentations Conclude (May 7)"] },
  { id: 16, dates: "May 15", title: "Finals Week", topics: ["NO FINAL EXAM", "Final Paper Due"], readings: [], due: ["Project Part 3: Final Paper Due (May 15)"] }
];

export const ASSIGNMENTS: Assignment[] = [
  { id: 'att', name: 'Participation & Attendance', weight: 15, category: 'Participation' },
  { id: 'pres', name: 'Country Presentation', weight: 10, category: 'Presentation' },
  { id: 'quiz', name: '4 Quizzes (5% each)', weight: 20, category: 'Quiz' },
  { id: 'essay', name: '2 In-Class Essays (10% each)', weight: 20, category: 'Essay' },
  { id: 'mid', name: 'Midterm Exam', weight: 15, category: 'Exam' },
  { id: 'proj', name: 'Country Analysis Project', weight: 20, category: 'Project' },
];

export const DEMOCRACY_DIMENSIONS: DemocracyDimension[] = [
  // Dimension I: Executives-Parties
  {
    id: 'cabinets',
    name: 'Cabinets',
    category: 'executives-parties',
    chapter: 6,
    westminster: 'Concentration of executive power in single-party majority cabinets',
    consensus: 'Executive power-sharing in broad multiparty coalitions',
    description: 'Whether the government represents a bare majority (or plurality) or seeks broad consensus through coalitions.'
  },
  {
    id: 'exec_leg',
    name: 'Executive-Legislative Relations',
    category: 'executives-parties',
    chapter: 7,
    westminster: 'Executive is dominant',
    consensus: 'Balance of power',
    description: 'The relative power of the executive versus the legislature (dominance vs. balance).'
  },
  {
    id: 'party_system',
    name: 'Party System',
    category: 'executives-parties',
    chapter: 5,
    westminster: 'Two-party system',
    consensus: 'Multiparty system',
    description: 'The effective number of political parties competing for power.'
  },
  {
    id: 'electoral',
    name: 'Electoral System',
    category: 'executives-parties',
    chapter: 8,
    westminster: 'Majoritarian and disproportional',
    consensus: 'Proportional Representation (PR)',
    description: 'How votes are translated into seats (Winner-take-all vs. Proportional).'
  },
  {
    id: 'interest_groups',
    name: 'Interest Groups',
    category: 'executives-parties',
    chapter: 9,
    westminster: 'Pluralist interest groups',
    consensus: 'Corporatist interest groups',
    description: 'Free-for-all competition vs. organized concertation (social partnership) between government, labor, and business.'
  },
  
  // Dimension II: Federal-Unitary
  {
    id: 'govt_structure',
    name: 'Federalism',
    category: 'federal-unitary',
    chapter: 10,
    westminster: 'Unitary and centralized',
    consensus: 'Federal and decentralized',
    description: 'Territorial division of power between central and regional governments.'
  },
  {
    id: 'legislature',
    name: 'Legislature',
    category: 'federal-unitary',
    chapter: 11,
    westminster: 'Concentration of legislative power in unicameral legislature',
    consensus: 'Division of power in strong bicameral legislature',
    description: 'One chamber vs. two equally strong but differently constituted chambers.'
  },
  {
    id: 'constitution',
    name: 'Constitution',
    category: 'federal-unitary',
    chapter: 12,
    westminster: 'Flexible / Unwritten',
    consensus: 'Rigid / Written',
    description: 'Ease of amending the fundamental laws of the state.'
  },
  {
    id: 'judicial',
    name: 'Judicial Review',
    category: 'federal-unitary',
    chapter: 12,
    westminster: 'Legislature has final word (No judicial review)',
    consensus: 'Laws subject to judicial review',
    description: 'Authority of supreme/constitutional courts to invalidate legislation.'
  },
  {
    id: 'central_bank',
    name: 'Central Bank',
    category: 'federal-unitary',
    chapter: 13,
    westminster: 'Dependent on Executive',
    consensus: 'Independent Central Bank',
    description: 'Autonomy of the central bank to determine monetary policy.'
  }
];

export const CONCEPT_FLASHCARDS: Flashcard[] = [
  { id: 'c1', category: 'Concept', front: 'Manufactured Majority', back: 'A parliamentary majority created by the electoral system (usually plurality) even when the party won less than 50% of the vote.' },
  { id: 'c2', category: 'Concept', front: 'Constructive Vote of No Confidence', back: 'A rule where parliament can only dismiss a cabinet if it simultaneously elects a new one (e.g., Germany, Spain).' },
  { id: 'c3', category: 'Concept', front: 'Corporatism', back: 'Interest group system with tripartite concertation between government, labor, and business to shape policy.' },
  { id: 'c4', category: 'Concept', front: 'Symmetric Bicameralism', back: 'Two legislative chambers with equal constitutional powers and democratic legitimacy.' },
  { id: 'c5', category: 'Concept', front: 'Congruent Federalism', back: 'Federal units have similar social/cultural character to the whole nation (e.g., USA, Australia).' },
  { id: 'c6', category: 'Concept', front: 'Incongruent Federalism', back: 'Federal units differ in social/cultural character (e.g., language, religion) from the whole (e.g., Belgium, Switzerland).' },
  { id: 'c7', category: 'Concept', front: 'Effective Number of Parties', back: 'A mathematical index (Laakso/Taagepera) that counts parties weighted by their relative size (seats or votes).' },
  { id: 'c8', category: 'Concept', front: 'Consociationalism', back: 'A form of power-sharing democracy for deeply divided societies, emphasizing grand coalitions and mutual vetoes.' },
  { id: 'c9', category: 'Concept', front: 'District Magnitude', back: 'The number of representatives elected from a single district. Higher magnitude = Higher proportionality.' },
  { id: 'c10', category: 'Concept', front: 'Hung Parliament', back: 'A situation in a Westminster system where no single party has an absolute majority.' },
  { id: 'c11', category: 'Concept', front: 'Executive Dominance', back: 'When the cabinet is much stronger than the legislature, typical of Westminster systems (e.g., UK).' },
  { id: 'c12', category: 'Concept', front: 'Magic Formula', back: 'The 2:2:2:1 party distribution in the Swiss Federal Council used from 1959 to 2003.' },
  { id: 'c13', category: 'Concept', front: 'Plural Society', back: 'A society divided by segmental cleavages (religious, ideological, linguistic, cultural) with distinct subsocieties.' },
  { id: 'c14', category: 'Concept', front: 'Gallagher Index', back: 'A measure of the disproportionality between votes received and seats allocated in an election.' },
  { id: 'c15', category: 'Concept', front: 'Parliamentary Sovereignty', back: 'The doctrine that the legislature (Parliament) has absolute supremacy and is not subject to judicial review (UK).' },
  { id: 'c16', category: 'Concept', front: 'Grand Coalition', back: 'A governing coalition that includes the major parties, often used in times of crisis or in consociational democracies.' },
];

export const QUIZ_LEVELS: QuizLevel[] = [
  {
    level: 1,
    title: "Novice: Model Identification",
    description: "Identify whether a trait belongs to the Westminster or Consensus model.",
    minScoreToUnlock: 70,
    questions: [
      {
        id: 'q1-1',
        question: "Which model features a 'Two-party system'?",
        options: ["Westminster Model", "Consensus Model"],
        correctAnswer: "Westminster Model",
        explanation: "The Westminster model creates a competitive two-party system versus the multiparty system of Consensus democracy."
      },
      {
        id: 'q1-2',
        question: "Which model features 'Proportional Representation'?",
        options: ["Westminster Model", "Consensus Model"],
        correctAnswer: "Consensus Model",
        explanation: "Consensus democracy uses PR to ensure fair representation of minorities."
      },
      {
        id: 'q1-3',
        question: "Which model features a 'Unicameral Legislature'?",
        options: ["Westminster Model", "Consensus Model"],
        correctAnswer: "Westminster Model",
        explanation: "Concentration of power in a single chamber is a hallmark of the Majoritarian/Westminster model."
      },
      {
        id: 'q1-4',
        question: "Which model features 'Federalism and Decentralization'?",
        options: ["Westminster Model", "Consensus Model"],
        correctAnswer: "Consensus Model",
        explanation: "Divided power through federalism is a key trait of the Consensus model."
      },
      {
        id: 'q1-5',
        question: "Which model features 'Constitutional Rigidity'?",
        options: ["Westminster Model", "Consensus Model"],
        correctAnswer: "Consensus Model",
        explanation: "Consensus models protect minority rights through rigid constitutions that are hard to amend."
      },
      {
        id: 'q1-6',
        question: "Which model is associated with 'Interest Group Pluralism'?",
        options: ["Westminster Model", "Consensus Model"],
        correctAnswer: "Westminster Model",
        explanation: "The Westminster model features 'Pluralism' (free-for-all competition) rather than the 'Corporatism' (organized social partnership) of the Consensus model."
      }
    ]
  },
  {
    level: 2,
    title: "Scholar: Concepts & Definitions",
    description: "Match specific political science terms to their definitions.",
    minScoreToUnlock: 70,
    questions: [
      {
        id: 'q2-1',
        question: "What is a 'Manufactured Majority'?",
        options: [
          "A coalition government formed by multiple parties.",
          "A parliamentary majority won with less than 50% of the popular vote.",
          "A majority created by banning opposition parties.",
          "A majority achieved through fraud."
        ],
        correctAnswer: "A parliamentary majority won with less than 50% of the popular vote.",
        explanation: "Common in Westminster systems (e.g., UK), where plurality rules award a seat majority to a party with only a plurality of votes."
      },
      {
        id: 'q2-2',
        question: "Which country is the best example of 'Incongruent Federalism'?",
        options: ["USA", "Australia", "Belgium", "Germany"],
        correctAnswer: "Belgium",
        explanation: "Incongruent federalism creates units with distinct social/cultural characters (e.g., language in Belgium) unlike the congruent units of the US/Australia."
      },
      {
        id: 'q2-3',
        question: "Corporatism involves cooperation between which groups?",
        options: [
          "Government, Military, and Church",
          "Government, Labor Unions, and Business Associations",
          "Executive, Legislature, and Judiciary",
          "Federal, State, and Local Governments"
        ],
        correctAnswer: "Government, Labor Unions, and Business Associations",
        explanation: "Democratic corporatism is the tripartite concertation of social partners to shape economic policy."
      },
      {
        id: 'q2-4',
        question: "What does 'District Magnitude' refer to?",
        options: [
          "The geographic size of a district in square miles.",
          "The number of voters in a district.",
          "The number of seats elected from a district.",
          "The amount of money spent in a district election."
        ],
        correctAnswer: "The number of seats elected from a district.",
        explanation: "District magnitude (M) is the crucial variable: higher M leads to higher proportionality."
      }
    ]
  },
  {
    level: 3,
    title: "Expert: Country Application",
    description: "Apply the framework to specific country cases and history.",
    minScoreToUnlock: 0, // Final level
    questions: [
      {
        id: 'q3-1',
        question: "New Zealand shifted from a pure Westminster model to a more Consensus model in the 1990s by changing which variable?",
        options: [
          "Adopting Federalism",
          "Switching to Proportional Representation (MMP)",
          "Abolishing the Monarchy",
          "Creating a Constitutional Court"
        ],
        correctAnswer: "Switching to Proportional Representation (MMP)",
        explanation: "The 1996 switch to MMP ended single-party dominance and ushered in multiparty coalitions."
      },
      {
        id: 'q3-2',
        question: "Switzerland is the prototype of Consensus democracy, but it has one Majoritarian trait. What is it?",
        options: [
          "Unwritten Constitution",
          "Lack of Judicial Review",
          "Two-Party System",
          "Unitary Government"
        ],
        correctAnswer: "Lack of Judicial Review",
        explanation: "While highly consensual, the Swiss Supreme Court traditionally cannot strike down federal laws."
      },
      {
        id: 'q3-3',
        question: "Which country represents the 'Consensus' model on the Executives-Parties dimension but 'Majoritarian' on Federal-Unitary?",
        options: ["USA", "Israel", "Canada", "Germany"],
        correctAnswer: "Israel",
        explanation: "Israel has extreme multipartyism (Consensus) but is a unitary state with no written constitution (Majoritarian)."
      },
      {
        id: 'q3-4',
        question: "In the UK, the House of Lords has only delaying power. This is an example of:",
        options: [
          "Symmetric Bicameralism",
          "Asymmetric Bicameralism",
          "Perfect Unicameralism",
          "Federalism"
        ],
        correctAnswer: "Asymmetric Bicameralism",
        explanation: "Power is concentrated in the House of Commons, making the bicameralism unequal (asymmetric)."
      }
    ]
  }
];

export const LIVE_QUIZZES: LiveQuizSession[] = [
  {
    weekId: 1,
    title: "Week 1: Introduction",
    isLocked: false,
    questions: [
      {
        id: 'lq1-1',
        text: "What is the 'Fundamental Problem' of Comparative Politics?",
        timeLimit: 20,
        explanation: "Comparative politics struggles with having a small number of countries (N) but a huge number of potential variables (culture, history, economy) that explain differences.",
        options: [
          { id: '1a', text: "Too many countries", color: 'red', isCorrect: false },
          { id: '1b', text: "Many variables, Small N", color: 'blue', isCorrect: true },
          { id: '1c', text: "Fake News", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Lack of Theory", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq1-2',
        text: "Who is the author of our main textbook?",
        timeLimit: 20,
        explanation: "Lijphart, duh?",
        options: [
          { id: '2a', text: "Karl Marx", color: 'red', isCorrect: false },
          { id: '2b', text: "Arend Lijphart", color: 'blue', isCorrect: true },
          { id: '2c', text: "Emmanuel Macron", color: 'yellow', isCorrect: false },
          { id: '2d', text: "Ahmet Ergurum", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq1-3',
        text: "Which two dimensions does Lijphart use to classify democracies?",
        timeLimit: 20,
        explanation: "Lijphart argues that democratic institutions cluster into two dimensions: Executives-Parties (Joint Power) and Federal-Unitary (Divided Power).",
        options: [
          { id: '3a', text: "Executives-Parties & Federal-Unitary", color: 'red', isCorrect: true },
          { id: '3b', text: "Good & Bad", color: 'blue', isCorrect: false },
          { id: '3c', text: "East & West", color: 'yellow', isCorrect: false },
          { id: '3d', text: "Rich & Poor", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq1-4',
        text: "Which statement is 'Normative'?",
        timeLimit: 20,
        explanation: "Normative statements make value judgments ('better', 'worse', 'should') about what ought to be. Empirical statements describe facts that can be tested.",
        options: [
          { id: '4a', text: "Democracies are better than dictatorships.", color: 'red', isCorrect: true },
          { id: '4b', text: "Democracies have higher GDP per capita.", color: 'blue', isCorrect: false },
          { id: '4c', text: "Dictatorships have fewer parties.", color: 'yellow', isCorrect: false },
          { id: '4d', text: "Voter turnout is 60%.", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq1-5',
        text: "MSSD (Most Similar Systems Design) is also known as...",
        timeLimit: 20,
        explanation: "MSSD compares countries that are very similar (controlling for variables) but differ in one key outcome, isolating the cause. This is Mill's Method of Difference.",
        options: [
          { id: '5a', text: "Method of Difference", color: 'red', isCorrect: true },
          { id: '5b', text: "Method of Agreement", color: 'blue', isCorrect: false },
          { id: '5c', text: "Statistical Method", color: 'yellow', isCorrect: false },
          { id: '5d', text: "Case Study", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq1-6',
        text: "Which reasoning moves from Specific Observations to General Theory?",
        timeLimit: 20,
        explanation: "Inductive reasoning starts with specific observations/data and builds toward a general theory. Deductive starts with theory/hypothesis and tests it with data.",
        options: [
          { id: '6a', text: "Deductive", color: 'red', isCorrect: false },
          { id: '6b', text: "Inductive", color: 'blue', isCorrect: true },
          { id: '6c', text: "Reductive", color: 'yellow', isCorrect: false },
          { id: '6d', text: "Productive", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq1-7',
        text: "In the hypothesis 'Economic Development leads to Democracy', what is 'Democracy'?",
        timeLimit: 20,
        explanation: "The Dependent Variable (Y) is the effect or outcome we are trying to explain. The Independent Variable (X) is the cause (Development).",
        options: [
          { id: '7a', text: "Independent Variable (X)", color: 'red', isCorrect: false },
          { id: '7b', text: "Dependent Variable (Y)", color: 'blue', isCorrect: true },
          { id: '7c', text: "Control Variable (Z)", color: 'yellow', isCorrect: false },
          { id: '7d', text: "Spurious Variable", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq1-8',
        text: "Case Studies (N=1) are strong in ____ but weak in ____.",
        timeLimit: 20,
        explanation: "Case studies provide deep contextual detail (internal validity) but cannot easily be generalized to the whole world (external validity).",
        options: [
          { id: '8a', text: "Breadth; Depth", color: 'red', isCorrect: false },
          { id: '8b', text: "Math; English", color: 'blue', isCorrect: false },
          { id: '8c', text: "Depth; Generalization", color: 'yellow', isCorrect: true },
          { id: '8d', text: "Theory; Data", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 2,
    title: "Week 2: Westminster Model",
    isLocked: false,
    questions: [
      {
        id: 'lq1',
        text: "Which of these is NOT a characteristic of the Westminster Model?",
        timeLimit: 20,
        explanation: "The Westminster model is characterized by single-party majority cabinets and executive dominance. Multiparty coalitions are a hallmark of the Consensus model.",
        options: [
          { id: '1a', text: "Executive Dominance", color: 'red', isCorrect: false },
          { id: '1b', text: "Multiparty Coalitions", color: 'blue', isCorrect: true },
          { id: '1c', text: "Unitary Government", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Plurality Elections", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq2',
        text: "What does 'Fusion of Power' mean in the UK context?",
        timeLimit: 20,
        explanation: "In parliamentary systems like the UK, the Executive (PM and Cabinet) is drawn directly from and is responsible to the Legislature, 'fusing' the branches rather than separating them.",
        options: [
          { id: '2a', text: "PM is part of Legislature", color: 'red', isCorrect: true },
          { id: '2b', text: "Separation of Church & State", color: 'blue', isCorrect: false },
          { id: '2c', text: "Nuclear Energy", color: 'yellow', isCorrect: false },
          { id: '2d', text: "Local & Central Gov Work Together", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq3',
        text: "Which electoral system tends to manufacture majorities?",
        timeLimit: 20,
        explanation: "First-Past-The-Post (Plurality) rules often give a party with less than 50% of the vote a majority of the seats, 'manufacturing' a governing majority.",
        options: [
          { id: '3a', text: "PR-STV", color: 'red', isCorrect: false },
          { id: '3b', text: "MMP", color: 'blue', isCorrect: false },
          { id: '3c', text: "First-Past-The-Post", color: 'yellow', isCorrect: true },
          { id: '3d', text: "List PR", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq2-4',
        text: "The Westminster Model is based on the principle of...",
        timeLimit: 20,
        explanation: "The Westminster (Majoritarian) model concentrates power in the hands of the majority to ensure effective governance.",
        options: [
          { id: '9a', text: "Majority Rule", color: 'red', isCorrect: true },
          { id: '9b', text: "Proportionality", color: 'blue', isCorrect: false },
          { id: '9c', text: "Minority Veto", color: 'yellow', isCorrect: false },
          { id: '9d', text: "Divided Power", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq2-5',
        text: "Which dimension is characterized by 'Joint Power'?",
        timeLimit: 20,
        explanation: "The Executives-Parties dimension concentrates power within the central government (Joint Power), while the Federal-Unitary dimension divides power (Divided Power).",
        options: [
          { id: '10a', text: "Federal-Unitary", color: 'red', isCorrect: false },
          { id: '10b', text: "Executives-Parties", color: 'blue', isCorrect: true },
          { id: '10c', text: "Left-Right", color: 'yellow', isCorrect: false },
          { id: '10d', text: "Global-Local", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq2-6',
        text: "The Consensus Model is recommended for...",
        timeLimit: 20,
        explanation: "Lijphart argues Consensus democracy is superior for 'plural societies' with deep religious, cultural, or linguistic divisions.",
        options: [
          { id: '11a', text: "Homogeneous Societies", color: 'red', isCorrect: false },
          { id: '11b', text: "Plural / Divided Societies", color: 'blue', isCorrect: true },
          { id: '11c', text: "Small Islands", color: 'yellow', isCorrect: false },
          { id: '11d', text: "Military Dictatorships", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq2-8',
        text: "In Ch 2, Lijphart identifies this country as a 'purer' example of the Westminster Model than the UK (pre-1996).",
        timeLimit: 20,
        explanation: "Before its 1996 switch to MMP, New Zealand was an even clearer example of Westminster majoritarianism (unicameral, unitary, unwritten constitution) than the UK itself.",
        options: [
          { id: '8a', text: "New Zealand", color: 'red', isCorrect: true },
          { id: '8b', text: "Canada", color: 'blue', isCorrect: false },
          { id: '8c', text: "Barbados", color: 'yellow', isCorrect: false },
          { id: '8d', text: "Australia", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq2-9',
        text: "Because the House of Lords has very little power compared to the House of Commons, the UK's legislature is...",
        timeLimit: 20,
        explanation: "Asymmetric bicameralism means the two chambers have unequal power. The Commons is supreme; the Lords can only delay legislation.",
        options: [
          { id: '9a', text: "Symmetric Bicameral", color: 'red', isCorrect: false },
          { id: '9b', text: "Asymmetric Bicameral", color: 'blue', isCorrect: true },
          { id: '9c', text: "Perfectly Unicameral", color: 'yellow', isCorrect: false },
          { id: '9d', text: "Federal", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq2-10',
        text: "Why is the British Constitution described as 'Flexible'?",
        timeLimit: 20,
        explanation: "Because it is unwritten/uncodified, Parliament can change fundamental laws (constitutional matters) with a simple majority vote, just like regular laws.",
        options: [
          { id: '10a', text: "It bends physically", color: 'red', isCorrect: false },
          { id: '10b', text: "It is hard to change", color: 'blue', isCorrect: false },
          { id: '10c', text: "Requires 2/3 majority to change", color: 'yellow', isCorrect: false },
          { id: '10d', text: "Changed by simple majority", color: 'green', isCorrect: true }
        ]
      }
    ]
  },
  {
    weekId: 3,
    title: "Week 3: Consensus Model",
    isLocked: false,
    questions: [
      {
        id: 'lq4',
        text: "The Consensus Model aims to...",
        timeLimit: 20,
        explanation: "The Consensus model is designed to include as many groups as possible in decision-making, rather than letting a bare majority rule.",
        options: [
          { id: '4a', text: "Maximize Efficiency", color: 'red', isCorrect: false },
          { id: '4b', text: "Concentrate Power", color: 'blue', isCorrect: false },
          { id: '4c', text: "Share Power / Include Minorities", color: 'yellow', isCorrect: true },
          { id: '4d', text: "Speed up decision making", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq5',
        text: "Which country is Lijphart's primary example of Consensus Democracy?",
        timeLimit: 20,
        explanation: "Switzerland is the archetypal consensus democracy with its grand coalition executive (Federal Council), multiparty system, and strong federalism.",
        options: [
          { id: '5a', text: "United Kingdom", color: 'red', isCorrect: false },
          { id: '5b', text: "USA", color: 'blue', isCorrect: false },
          { id: '5c', text: "Switzerland", color: 'yellow', isCorrect: true },
          { id: '5d', text: "New Zealand", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 4,
    title: "Week 4: Party Systems",
    isLocked: false,
    questions: [
      {
        id: 'lq4-1',
        text: "What does the 'Effective Number of Parties' (N) measure?",
        timeLimit: 20,
        explanation: "Unlike the raw number of parties, the Effective Number (Laakso/Taagepera index) weights parties by their size (votes or seats) to show how many 'count'.",
        options: [
          { id: '1a', text: "Total number of registered parties", color: 'red', isCorrect: false },
          { id: '1b', text: "Parties weighted by their size", color: 'blue', isCorrect: true },
          { id: '1c', text: "Only parties in government", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Number of extremist parties", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq4-2',
        text: "Which of these is NOT one of Lipset & Rokkan's 4 classic social cleavages?",
        timeLimit: 20,
        explanation: "The four frozen cleavages are: Center-Periphery, State-Church, Land-Industry (Rural-Urban), and Owner-Worker (Class). 'Internet-Offline' is not one.",
        options: [
          { id: '2a', text: "Owner - Worker (Class)", color: 'red', isCorrect: false },
          { id: '2b', text: "State - Church", color: 'blue', isCorrect: false },
          { id: '2c', text: "Internet - Offline", color: 'yellow', isCorrect: true },
          { id: '2d', text: "Center - Periphery", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq4-3',
        text: "According to Duverger's Law, Plurality (First-Past-The-Post) elections tend to produce...",
        timeLimit: 20,
        explanation: "Duverger's Law states that plurality rule tends to produce a two-party system due to the mechanical and psychological effects of the electoral system.",
        options: [
          { id: '3a', text: "Multiparty Systems", color: 'red', isCorrect: false },
          { id: '3b', text: "Two-Party Systems", color: 'blue', isCorrect: true },
          { id: '3c', text: "Dictatorships", color: 'yellow', isCorrect: false },
          { id: '3d', text: "Unstable Governments", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq4-4',
        text: "Which new issue dimension arose in the late 20th century, often associated with Green parties?",
        timeLimit: 20,
        explanation: "This dimension (Inglehart) pits economic growth against environmental protection and lifestyle freedom.",
        options: [
          { id: '4a', text: "Church vs State", color: 'red', isCorrect: false },
          { id: '4b', text: "Materialist vs Post-Materialist", color: 'blue', isCorrect: true },
          { id: '4c', text: "Center vs Periphery", color: 'yellow', isCorrect: false },
          { id: '4d', text: "Owners vs Workers", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq4-5',
        text: "What is a 'Hung Parliament'?",
        timeLimit: 20,
        explanation: "A Hung Parliament occurs in a majoritarian system when no single party wins >50% of the seats, forcing a coalition or minority government.",
        options: [
          { id: '5a', text: "Parliament is suspended", color: 'red', isCorrect: false },
          { id: '5b', text: "No party has a majority of seats", color: 'blue', isCorrect: true },
          { id: '5c', text: "The King dissolves parliament", color: 'yellow', isCorrect: false },
          { id: '5d', text: "Voter turnout is too low", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 5,
    title: "Week 5: Electoral Systems I",
    isLocked: false,
    questions: [
      {
        id: 'lq5-1',
        text: "What is 'District Magnitude' (M)?",
        timeLimit: 20,
        explanation: "District Magnitude is the number of representatives elected from a single district. It is the most critical factor in determining proportionality.",
        options: [
          { id: '1a', text: "The physical size of a district", color: 'red', isCorrect: false },
          { id: '1b', text: "The number of voters in a district", color: 'blue', isCorrect: false },
          { id: '1c', text: "The number of seats per district", color: 'yellow', isCorrect: true },
          { id: '1d', text: "The campaign spending limit", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq5-2',
        text: "Which electoral system is most associated with the Westminster Model?",
        timeLimit: 20,
        explanation: "The Westminster model typically uses Plurality (First-Past-The-Post) in single-member districts to manufacture single-party majorities.",
        options: [
          { id: '2a', text: "Proportional Representation (PR)", color: 'red', isCorrect: false },
          { id: '2b', text: "Plurality / First-Past-The-Post", color: 'blue', isCorrect: true },
          { id: '2c', text: "Single Transferable Vote", color: 'yellow', isCorrect: false },
          { id: '2d', text: "Mixed Member Proportional", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq5-3',
        text: "What is the primary goal of Proportional Representation (PR)?",
        timeLimit: 20,
        explanation: "PR aims to translate votes into seats as accurately as possible, so that 20% of the votes equals roughly 20% of the seats.",
        options: [
          { id: '3a', text: "To create a strong one-party government", color: 'red', isCorrect: false },
          { id: '3b', text: "To mirror vote shares in seat shares", color: 'blue', isCorrect: true },
          { id: '3c', text: "To exclude extremist parties", color: 'yellow', isCorrect: false },
          { id: '3d', text: "To ensure local representation", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq5-4',
        text: "In a Single-Member District (M=1), how many votes do you need to win?",
        timeLimit: 20,
        explanation: "In a plurality system (Winner-Take-All), you only need a plurality—one more vote than the second-place candidate—not necessarily a majority (>50%).",
        options: [
          { id: '4a', text: "A majority (>50%)", color: 'red', isCorrect: false },
          { id: '4b', text: "Two-thirds (66%)", color: 'blue', isCorrect: false },
          { id: '4c', text: "A plurality (more than anyone else)", color: 'yellow', isCorrect: true },
          { id: '4d', text: "Unanimous consent", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq5-5',
        text: "Which of these is a formula used to calculate seat distribution in PR systems?",
        timeLimit: 20,
        explanation: "The D'Hondt method is a divisor formula used in many PR countries (e.g., Spain, Belgium) to allocate seats.",
        options: [
          { id: '5a', text: "Duverger's Law", color: 'red', isCorrect: false },
          { id: '5b', text: "D'Hondt Method", color: 'blue', isCorrect: true },
          { id: '5c', text: "Median Voter Theorem", color: 'yellow', isCorrect: false },
          { id: '5d', text: "Pareto Optimality", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 6,
    title: "Week 6: Electoral Systems II",
    isLocked: false,
    questions: [
      {
        id: 'lq6-1',
        text: "Which index is commonly used to measure the disproportionality of an electoral system?",
        timeLimit: 20,
        explanation: "The Gallagher Index (Least Squares Index) measures the difference between vote percentages and seat percentages. Lower scores mean higher proportionality.",
        options: [
          { id: '1a', text: "Gini Coefficient", color: 'red', isCorrect: false },
          { id: '1b', text: "Gallagher Index", color: 'blue', isCorrect: true },
          { id: '1c', text: "Human Development Index", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Corruption Perceptions Index", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq6-2',
        text: "What is an 'Electoral Threshold'?",
        timeLimit: 20,
        explanation: "An electoral threshold is the minimum share of the vote (e.g., 5% in Germany) a party must secure to be eligible for any seats in parliament.",
        options: [
          { id: '2a', text: "The minimum age to vote", color: 'red', isCorrect: false },
          { id: '2b', text: "The minimum percentage of votes to win seats", color: 'blue', isCorrect: true },
          { id: '2c', text: "The maximum number of terms a PM can serve", color: 'yellow', isCorrect: false },
          { id: '2d', text: "The number of signatures needed to run", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq6-3',
        text: "In a Mixed Member Proportional (MMP) system (like Germany), how many votes does a voter typically cast?",
        timeLimit: 20,
        explanation: "Voters cast two votes: one for a local district candidate (plurality) and one for a party list (PR). The party vote determines the overall seat distribution.",
        options: [
          { id: '3a', text: "One", color: 'red', isCorrect: false },
          { id: '3b', text: "Two (Candidate & Party)", color: 'blue', isCorrect: true },
          { id: '3c', text: "Three", color: 'yellow', isCorrect: false },
          { id: '3d', text: "Ranked preferences", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq6-4',
        text: "What is 'Malapportionment'?",
        timeLimit: 20,
        explanation: "Malapportionment occurs when districts vary greatly in population size, meaning votes in smaller districts count more (e.g., US Senate, rural bias).",
        options: [
          { id: '4a', text: "When districts have unequal numbers of voters", color: 'red', isCorrect: true },
          { id: '4b', text: "When votes are counted incorrectly", color: 'blue', isCorrect: false },
          { id: '4c', text: "When parties are banned", color: 'yellow', isCorrect: false },
          { id: '4d', text: "When the executive dissolves parliament", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq6-5',
        text: "Which system allows voters to rank candidates in order of preference in multi-member districts?",
        timeLimit: 20,
        explanation: "Single Transferable Vote (STV) allows voters to rank candidates (1, 2, 3...). Surplus votes from winners and votes from eliminated losers are transferred.",
        options: [
          { id: '5a', text: "First-Past-The-Post", color: 'red', isCorrect: false },
          { id: '5b', text: "Single Transferable Vote (STV)", color: 'blue', isCorrect: true },
          { id: '5c', text: "Closed List PR", color: 'yellow', isCorrect: false },
          { id: '5d', text: "Two-Round System", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq6-6',
        text: "What is the key difference between Pluralism and Corporatism?",
        timeLimit: 20,
        explanation: "Pluralism is characterized by free-for-all competition among many uncoordinated groups, while Corporatism involves organized, concerted cooperation between peak associations.",
        options: [
          { id: '6a', text: "Pluralism has fewer groups", color: 'red', isCorrect: false },
          { id: '6b', text: "Corporatism bans interest groups", color: 'blue', isCorrect: false },
          { id: '6c', text: "Pluralism is competitive; Corporatism is coordinated", color: 'yellow', isCorrect: true },
          { id: '6d', text: "Corporatism is only found in dictatorships", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq6-7',
        text: "Which three actors are typically involved in 'Tripartite Concertation'?",
        timeLimit: 20,
        explanation: "Democratic corporatism relies on the social partnership between the Government, Labor Unions, and Business/Employer Associations.",
        options: [
          { id: '7a', text: "Executive, Legislature, Judiciary", color: 'red', isCorrect: false },
          { id: '7b', text: "Government, Labor, Business", color: 'blue', isCorrect: true },
          { id: '7c', text: "Church, State, Military", color: 'yellow', isCorrect: false },
          { id: '7d', text: "Farmers, Students, Pensioners", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq6-8',
        text: "According to Lijphart, Interest Group Corporatism is associated with which model of democracy?",
        timeLimit: 20,
        explanation: "Corporatism is a trait of the Consensus model, as it seeks to include major economic interests in decision-making, unlike the competitive Pluralism of the Westminster model.",
        options: [
          { id: '8a', text: "Westminster Model", color: 'red', isCorrect: false },
          { id: '8b', text: "Consensus Model", color: 'blue', isCorrect: true },
          { id: '8c', text: "Presidential Model", color: 'yellow', isCorrect: false },
          { id: '8d', text: "Authoritarian Model", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 7,
    title: "Week 7: Exec-Leg Relations I",
    isLocked: false,
    questions: [
      {
        id: 'lq7-1',
        text: "What defines a 'Minimal Winning Coalition'?",
        timeLimit: 20,
        explanation: "A minimal winning coalition is one where every member party is strictly necessary to maintain a parliamentary majority. If any single party leaves, the coalition loses its majority.",
        options: [
          { id: '1a', text: "A coalition of all major parties", color: 'red', isCorrect: false },
          { id: '1b', text: "A government formed by a single minority party", color: 'blue', isCorrect: false },
          { id: '1c', text: "A coalition where no member party is superfluous to maintaining a majority", color: 'yellow', isCorrect: true },
          { id: '1d', text: "A coalition that lost the popular vote", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq7-2',
        text: "Why might parties form an 'Oversized' (Surplus Majority) Cabinet?",
        timeLimit: 20,
        explanation: "Oversized cabinets include more parties than strictly necessary. They are often formed to amend the constitution (which may require a 2/3 supermajority) or to ensure national unity during a crisis.",
        options: [
          { id: '2a', text: "To save money on elections", color: 'red', isCorrect: false },
          { id: '2b', text: "Because the constitution requires it", color: 'blue', isCorrect: false },
          { id: '2c', text: "To prevent the opposition from speaking", color: 'yellow', isCorrect: false },
          { id: '2d', text: "To pass constitutional amendments or handle crises", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq7-3',
        text: "Which of the following is a defining characteristic of a Parliamentary system?",
        timeLimit: 20,
        explanation: "In parliamentary systems, the executive (Prime Minister and Cabinet) is dependent on the confidence of the legislature and can be dismissed via a vote of no confidence.",
        options: [
          { id: '3a', text: "The executive is dependent on the legislature's confidence", color: 'red', isCorrect: true },
          { id: '3b', text: "The head of government is directly elected", color: 'blue', isCorrect: false },
          { id: '3c', text: "The president serves a fixed term", color: 'yellow', isCorrect: false },
          { id: '3d', text: "Strict separation of powers", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq7-4',
        text: "In a Presidential system, the relationship between the executive and legislature is based on:",
        timeLimit: 20,
        explanation: "Presidential systems are characterized by a separation of powers, where both the president and the legislature are independently elected for fixed terms and cannot easily dismiss each other.",
        options: [
          { id: '4a', text: "Fusion of power", color: 'red', isCorrect: false },
          { id: '4b', text: "Executive dominance", color: 'blue', isCorrect: false },
          { id: '4c', text: "Legislative supremacy", color: 'yellow', isCorrect: false },
          { id: '4d', text: "Separation of powers", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq7-5',
        text: "According to Lijphart, which system tends to produce the highest degree of executive dominance?",
        timeLimit: 20,
        explanation: "Single-party majority parliamentary systems (like the UK Westminster model) produce the highest executive dominance because the cabinet controls a disciplined majority in the legislature.",
        options: [
          { id: '5a', text: "Presidential systems", color: 'red', isCorrect: false },
          { id: '5b', text: "Multiparty parliamentary systems", color: 'blue', isCorrect: false },
          { id: '5c', text: "Single-party majority parliamentary systems", color: 'yellow', isCorrect: true },
          { id: '5d', text: "The Swiss directorial system", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq7-6',
        text: "What is a 'Constructive Vote of No Confidence'?",
        timeLimit: 20,
        explanation: "Used in countries like Germany, it requires the legislature to simultaneously agree on a replacement head of government when voting to dismiss the current one, ensuring stability.",
        options: [
          { id: '6a', text: "A vote that automatically triggers new elections", color: 'red', isCorrect: false },
          { id: '6b', text: "A vote requiring a 2/3 supermajority to dismiss the PM", color: 'blue', isCorrect: false },
          { id: '6c', text: "A vote where parliament must agree on a successor to dismiss the PM", color: 'yellow', isCorrect: true },
          { id: '6d', text: "A vote initiated by the President to dissolve parliament", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq7-7',
        text: "What characterizes a 'Minority Government'?",
        timeLimit: 20,
        explanation: "A minority government is formed by a party or coalition that does not control a majority of seats (>50%) in the legislature, relying on ad hoc support from other parties to pass laws.",
        options: [
          { id: '7a', text: "A cabinet that does not control a majority of legislative seats", color: 'red', isCorrect: true },
          { id: '7b', text: "A government representing ethnic minorities", color: 'blue', isCorrect: false },
          { id: '7c', text: "A government formed after losing an election", color: 'yellow', isCorrect: false },
          { id: '7d', text: "A cabinet with fewer ministers than usual", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq7-8',
        text: "What is a 'Minimal Connected Winning Coalition'?",
        timeLimit: 20,
        explanation: "This theory suggests that coalitions will form among parties that are adjacent to each other on the ideological spectrum, minimizing policy compromises.",
        options: [
          { id: '8a', text: "A coalition of parties that share a border region", color: 'red', isCorrect: false },
          { id: '8b', text: "A coalition formed via social media connections", color: 'blue', isCorrect: false },
          { id: '8c', text: "A coalition that includes the median voter", color: 'yellow', isCorrect: false },
          { id: '8d', text: "A coalition of ideologically adjacent parties with no unnecessary members", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq7-9',
        text: "In a Semi-Presidential system, what is 'Cohabitation'?",
        timeLimit: 20,
        explanation: "Cohabitation occurs when the directly elected President and the Prime Minister (who relies on legislative confidence) belong to different political parties.",
        options: [
          { id: '9a', text: "When the President and PM belong to different parties", color: 'red', isCorrect: true },
          { id: '9b', text: "When the executive and legislature share the same building", color: 'blue', isCorrect: false },
          { id: '9c', text: "When two parties merge into one", color: 'yellow', isCorrect: false },
          { id: '9d', text: "When the cabinet includes non-politician experts", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq7-10',
        text: "According to Lijphart's analysis, which type of cabinet tends to be the most durable (lasts the longest)?",
        timeLimit: 20,
        explanation: "Single-party majority cabinets are generally the most durable because they do not suffer from the internal disagreements that can break apart coalition governments.",
        options: [
          { id: '10a', text: "Minority coalitions", color: 'red', isCorrect: false },
          { id: '10b', text: "Oversized coalitions", color: 'blue', isCorrect: false },
          { id: '10c', text: "Single-party majority cabinets", color: 'yellow', isCorrect: true },
          { id: '10d', text: "Minimal winning coalitions", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 8,
    title: "Week 8: Exec-Leg Relations II",
    isLocked: false,
    questions: [
      {
        id: 'lq8-1',
        text: "According to the conventional wisdom challenged by Cheibub and Limongi, why are parliamentary democracies supposedly more stable than presidential ones?",
        timeLimit: 20,
        explanation: "The conventional view argues that the fusion of executive and legislative powers in parliamentarism creates governments supported by disciplined majorities, avoiding the stalemates of presidentialism.",
        options: [
          { id: '1a', text: "A) Because the fusion of powers creates governments supported by disciplined majorities.", color: 'green', isCorrect: true },
          { id: '1b', text: "B) Because they always have a written constitution.", color: 'yellow', isCorrect: false },
          { id: '1c', text: "C) Because they rely on decentralized committee systems.", color: 'red', isCorrect: false },
          { id: '1d', text: "D) Because prime ministers have fixed terms in office.", color: 'blue', isCorrect: false }
        ]
      },
      {
        id: 'lq8-2',
        text: "How do Cheibub and Limongi view minority governments in parliamentary and presidential regimes?",
        timeLimit: 20,
        explanation: "They argue that minority governments are frequent in both regimes and are not necessarily a sign of political instability or crisis.",
        options: [
          { id: '2a', text: "A) They are rare anomalies that almost always lead to democratic breakdown.", color: 'green', isCorrect: false },
          { id: '2b', text: "B) They are frequent in both regimes and are not necessarily a sign of crisis.", color: 'yellow', isCorrect: true },
          { id: '2c', text: "C) They only occur in presidential systems due to the separation of powers.", color: 'red', isCorrect: false },
          { id: '2d', text: "D) They are the primary cause of legislative deadlock in parliamentary systems.", color: 'blue', isCorrect: false }
        ]
      },
      {
        id: 'lq8-3',
        text: "What do the authors conclude about the relationship between legislative deadlock and the survival of presidential democracies?",
        timeLimit: 20,
        explanation: "They find that deadlock is relatively infrequent and its occurrence has only a very small impact on the probability of regime breakdown.",
        options: [
          { id: '3a', text: "A) Deadlock is the single most common cause of democratic breakdown.", color: 'green', isCorrect: false },
          { id: '3b', text: "B) Deadlock is pervasive and makes presidential regimes inherently ungovernable.", color: 'yellow', isCorrect: false },
          { id: '3c', text: "C) Deadlock is relatively infrequent and has a small impact on regime breakdown.", color: 'red', isCorrect: true },
          { id: '3d', text: "D) Deadlock only occurs when the president has no veto power.", color: 'blue', isCorrect: false }
        ]
      },
      {
        id: 'lq8-4',
        text: "According to the article, why is the argument that the 'threat of government dissolution' guarantees party discipline in parliamentary regimes flawed?",
        timeLimit: 20,
        explanation: "If a legislator's constituents support their rebellion against the party, early elections are not a credible threat to them, as they would likely be re-elected.",
        options: [
          { id: '4a', text: "A) Because prime ministers rarely have the power to dissolve parliament.", color: 'green', isCorrect: false },
          { id: '4b', text: "B) Because legislators only care about policy, not about getting re-elected.", color: 'yellow', isCorrect: false },
          { id: '4c', text: "C) Because party leaders cannot control access to the ballot.", color: 'red', isCorrect: false },
          { id: '4d', text: "D) If constituents support the rebellion, early elections are not a credible threat.", color: 'blue', isCorrect: true }
        ]
      },
      {
        id: 'lq8-5',
        text: "What do Cheibub and Limongi argue regarding the formation of coalition governments in presidential regimes?",
        timeLimit: 20,
        explanation: "They argue that the incentives for forming coalitions are actually very similar in both parliamentary and presidential regimes.",
        options: [
          { id: '5a', text: "A) The incentives for forming coalitions are very similar in both regimes.", color: 'green', isCorrect: true },
          { id: '5b', text: "B) Presidential regimes offer no incentives for parties to cooperate.", color: 'yellow', isCorrect: false },
          { id: '5c', text: "C) Coalitions only form when the president's party holds a majority of seats.", color: 'red', isCorrect: false },
          { id: '5d', text: "D) High party fractionalization makes it impossible to form coalitions.", color: 'blue', isCorrect: false }
        ]
      },
      {
        id: 'lq8-6',
        text: "How does high party fractionalization affect presidential democracies, according to the authors' findings?",
        timeLimit: 20,
        explanation: "Under high fractionalization, coalition governments actually become more frequent and significantly improve the regime's survival chances.",
        options: [
          { id: '6a', text: "A) It guarantees legislative paralysis and regime collapse.", color: 'green', isCorrect: false },
          { id: '6b', text: "B) Coalition governments become more frequent and improve survival chances.", color: 'yellow', isCorrect: true },
          { id: '6c', text: "C) It makes coalition formation more difficult and less frequent.", color: 'red', isCorrect: false },
          { id: '6d', text: "D) It forces the president to rely exclusively on decree power.", color: 'blue', isCorrect: false }
        ]
      },
      {
        id: 'lq8-7',
        text: "The authors argue that the real difference in performance between regimes might stem from the centralization of the decision-making process. Which is TRUE?",
        timeLimit: 20,
        explanation: "Both regimes can exhibit centralized or decentralized decision-making depending on legislative organization and executive agenda powers.",
        options: [
          { id: '7a', text: "A) Parliamentarism always features centralized decision-making.", color: 'green', isCorrect: false },
          { id: '7b', text: "B) The US Congress is the typical model for all presidential legislatures.", color: 'yellow', isCorrect: false },
          { id: '7c', text: "C) Both regimes can exhibit centralized or decentralized decision-making.", color: 'red', isCorrect: true },
          { id: '7d', text: "D) Centralized decision-making is only possible with a single-party majority.", color: 'blue', isCorrect: false }
        ]
      },
      {
        id: 'lq8-8',
        text: "How do strong presidential legislative powers (like decree power and exclusive initiative) affect executive-legislative relations?",
        timeLimit: 20,
        explanation: "They can be used to centralize the decision-making process and enforce discipline within the government's coalition.",
        options: [
          { id: '8a', text: "A) They inevitably lead to conflict, paralysis, and democratic breakdown.", color: 'green', isCorrect: false },
          { id: '8b', text: "B) They allow the president to bypass the legislature entirely.", color: 'yellow', isCorrect: false },
          { id: '8c', text: "C) They are only effective if the president's party has a majority in congress.", color: 'red', isCorrect: false },
          { id: '8d', text: "D) They can centralize decision-making and enforce coalition discipline.", color: 'blue', isCorrect: true }
        ]
      },
      {
        id: 'lq8-9',
        text: "Why do the authors use post-1988 Brazil as a key example in their argument?",
        timeLimit: 20,
        explanation: "It demonstrates that despite a fragmented party system, strong presidential agenda powers and centralized legislative rules can produce high legislative success and party discipline.",
        options: [
          { id: '9a', text: "A) It demonstrates that strong agenda powers can produce high legislative success.", color: 'green', isCorrect: true },
          { id: '9b', text: "B) It proves that strong presidents and fragmented party systems lead to deadlock.", color: 'yellow', isCorrect: false },
          { id: '9c', text: "C) It shows that proportional representation is incompatible with presidentialism.", color: 'red', isCorrect: false },
          { id: '9d', text: "D) It is a classic example of a decentralized legislature.", color: 'blue', isCorrect: false }
        ]
      },
      {
        id: 'lq8-10',
        text: "What is the ultimate conclusion Cheibub and Limongi reach regarding the survival of parliamentary vs. presidential democracies?",
        timeLimit: 20,
        explanation: "The better survival record of parliamentary regimes cannot be explained simply by the basic constitutional differences (fusion vs. separation of powers) between the two systems.",
        options: [
          { id: '10a', text: "A) Parliamentary regimes survive longer because they prevent minority governments.", color: 'green', isCorrect: false },
          { id: '10b', text: "B) The better survival record cannot be explained simply by basic constitutional differences.", color: 'yellow', isCorrect: true },
          { id: '10c', text: "C) Presidential regimes should be abandoned in favor of parliamentarism.", color: 'red', isCorrect: false },
          { id: '10d', text: "D) Electoral laws are the only institutional feature that matters for regime survival.", color: 'blue', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 10,
    title: "Week 10: Legislative Institutions",
    isLocked: false,
    questions: [
      {
        id: 'lq10-1',
        text: "In Lijphart’s framework, strong bicameralism combines which two features?",
        timeLimit: 20,
        explanation: "Lijphart defines strong bicameralism as a system in which both chambers are powerful and also represent different constituencies. That is why the United States, Switzerland, and Australia are classic strong bicameral cases.",
        options: [
          { id: '1a', text: "Symmetric powers and incongruent composition", color: 'red', isCorrect: true },
          { id: '1b', text: "Asymmetric powers and congruent composition", color: 'blue', isCorrect: false },
          { id: '1c', text: "Symmetric powers and congruent composition", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Weak powers and direct election", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-2',
        text: "What does “symmetric bicameralism” mean?",
        timeLimit: 20,
        explanation: "The key issue is power, not election method. In a symmetric system, the upper house can genuinely block or co-determine legislation rather than merely delay it.",
        options: [
          { id: '2a', text: "The two chambers are elected by the same voters", color: 'red', isCorrect: false },
          { id: '2b', text: "The second chamber has equal or near-equal legislative power", color: 'blue', isCorrect: true },
          { id: '2c', text: "The upper chamber is directly elected", color: 'yellow', isCorrect: false },
          { id: '2d', text: "The lower chamber can always override the upper chamber", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-3',
        text: "What does “incongruent bicameralism” mean?",
        timeLimit: 20,
        explanation: "Incongruence refers to composition. If chambers are elected or constituted differently, they may produce different majorities and represent different interests.",
        options: [
          { id: '3a', text: "The two chambers are equally powerful", color: 'red', isCorrect: false },
          { id: '3b', text: "The two chambers are chosen in different ways or represent different constituencies", color: 'blue', isCorrect: true },
          { id: '3c', text: "The two chambers always disagree", color: 'yellow', isCorrect: false },
          { id: '3d', text: "The upper chamber is weak", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-4',
        text: "Which country is the clearest example of strong bicameralism in the readings?",
        timeLimit: 20,
        explanation: "The United States is the clearest example because both chambers must pass legislation and the Senate represents states rather than population proportionally, making it both symmetric and highly incongruent.",
        options: [
          { id: '4a', text: "New Zealand", color: 'red', isCorrect: false },
          { id: '4b', text: "United States", color: 'blue', isCorrect: true },
          { id: '4c', text: "Sweden", color: 'yellow', isCorrect: false },
          { id: '4d', text: "Ireland", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-5',
        text: "According to Fish, stronger legislatures help democracy mainly by improving:",
        timeLimit: 20,
        explanation: "Fish argues that stronger legislatures can better check executives and reduce abuses of power, which strengthens horizontal accountability.",
        options: [
          { id: '5a', text: "Military discipline", color: 'red', isCorrect: false },
          { id: '5b', text: "Horizontal accountability", color: 'blue', isCorrect: true },
          { id: '5c', text: "Presidential charisma", color: 'yellow', isCorrect: false },
          { id: '5d', text: "Judicial activism only", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-6',
        text: "Which statement best captures the relationship between bicameralism and federalism in Lijphart’s data?",
        timeLimit: 20,
        explanation: "Lijphart finds a strong empirical relationship between federalism and bicameralism. Not every bicameral system is federal, but every formal federal system in the sample has a bicameral legislature.",
        options: [
          { id: '6a', text: "Federalism and bicameralism are unrelated", color: 'red', isCorrect: false },
          { id: '6b', text: "All federal systems in the sample are unicameral", color: 'blue', isCorrect: false },
          { id: '6c', text: "All formally federal systems in the sample are bicameral", color: 'yellow', isCorrect: true },
          { id: '6d', text: "Bicameralism exists only in federal systems", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-7',
        text: "Why does bicameralism belong in Lijphart’s federal-unitary dimension?",
        timeLimit: 20,
        explanation: "In Lijphart’s framework, bicameralism often helps give regions or constituent units a voice in national lawmaking. That is why it fits the broader logic of dispersed rather than concentrated power.",
        options: [
          { id: '7a', text: "Because it always produces two-party systems", color: 'red', isCorrect: false },
          { id: '7b', text: "Because second chambers usually represent territorial units and protect divided power", color: 'blue', isCorrect: true },
          { id: '7c', text: "Because bicameralism increases turnout", color: 'yellow', isCorrect: false },
          { id: '7d', text: "Because upper chambers are always directly elected", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-8',
        text: "According to Fish, stronger legislatures also help democracy because they encourage stronger:",
        timeLimit: 20,
        explanation: "Fish says when legislatures matter, politicians invest more in party-building, which improves representation and accountability.",
        options: [
          { id: '8a', text: "Monarchies", color: 'red', isCorrect: false },
          { id: '8b', text: "Political parties", color: 'blue', isCorrect: true },
          { id: '8c', text: "Central banks", color: 'yellow', isCorrect: false },
          { id: '8d', text: "Referendums", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-9',
        text: "Which is the best argument for bicameralism from a consensus-democracy perspective?",
        timeLimit: 20,
        explanation: "Your slides contrast majoritarian and consensus views directly. From the consensus perspective, bicameralism is valuable because it creates veto points, slows hasty decisions, and encourages broader bargains.",
        options: [
          { id: '9a', text: "It ensures that one majority governs without obstacles", color: 'red', isCorrect: false },
          { id: '9b', text: "It reduces the need for compromise", color: 'blue', isCorrect: false },
          { id: '9c', text: "It protects minorities and forces broader agreement", color: 'yellow', isCorrect: true },
          { id: '9d', text: "It makes representation perfectly equal across citizens", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq10-10',
        text: "Why have some democracies moved from bicameralism to unicameralism?",
        timeLimit: 20,
        explanation: "Your slides note a one-way historical pattern toward unicameralism in some cases, especially where the second chamber is seen as duplicative, inefficient, or democratically weak. New Zealand, Denmark, Sweden, and Iceland are the examples highlighted.",
        options: [
          { id: '10a', text: "Bicameralism is unconstitutional in democracies", color: 'red', isCorrect: false },
          { id: '10b', text: "Upper chambers are often seen as redundant or less legitimate, especially in small unitary states", color: 'blue', isCorrect: true },
          { id: '10c', text: "Federal states do not need upper chambers anymore", color: 'yellow', isCorrect: false },
          { id: '10d', text: "Strong bicameralism always causes regime collapse", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 11,
    title: "Week 11: Constitutions and Judicial Review",
    isLocked: false,
    questions: [
      {
        id: 'lq11-1',
        text: "What does constitutional rigidity mean?",
        timeLimit: 20,
        explanation: "Constitutional rigidity means amendment is harder than passing ordinary legislation. That is the basic contrast with constitutional flexibility.",
        options: [
          { id: '1a', text: "The constitution cannot be interpreted by courts", color: 'red', isCorrect: false },
          { id: '1b', text: "The constitution is harder to change than ordinary law", color: 'blue', isCorrect: true },
          { id: '1c', text: "The constitution can only be changed by referendum", color: 'yellow', isCorrect: false },
          { id: '1d', text: "The constitution is always unwritten", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-2',
        text: "Which of the following usually makes a constitution more rigid?",
        timeLimit: 20,
        explanation: "Supermajority requirements are one of the clearest ways to make constitutional amendment harder. Other devices include multiple chambers, referendums, and state ratification.",
        options: [
          { id: '2a', text: "A simple majority vote in one chamber", color: 'red', isCorrect: false },
          { id: '2b', text: "Fewer veto points", color: 'blue', isCorrect: false },
          { id: '2c', text: "A two-thirds supermajority requirement", color: 'yellow', isCorrect: true },
          { id: '2d', text: "No written constitution", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-3',
        text: "Which country is the best example of a very rigid constitution?",
        timeLimit: 20,
        explanation: "In your notes and slides, the United States is the clearest example of a very rigid constitution because amendment requires 2/3 of Congress plus 3/4 of the states.",
        options: [
          { id: '3a', text: "United Kingdom", color: 'red', isCorrect: false },
          { id: '3b', text: "New Zealand", color: 'blue', isCorrect: false },
          { id: '3c', text: "United States", color: 'yellow', isCorrect: true },
          { id: '3d', text: "Israel", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-4',
        text: "Which country is the best example of a flexible constitutional order?",
        timeLimit: 20,
        explanation: "The United Kingdom is the classic example of flexibility because major constitutional rules can be changed by ordinary parliamentary legislation.",
        options: [
          { id: '4a', text: "Germany", color: 'red', isCorrect: false },
          { id: '4b', text: "Australia", color: 'blue', isCorrect: false },
          { id: '4c', text: "United States", color: 'yellow', isCorrect: false },
          { id: '4d', text: "United Kingdom", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq11-5',
        text: "According to Lijphart’s logic, constitutional rigidity fits the consensus model because it:",
        timeLimit: 20,
        explanation: "Rigidity belongs to the consensus side because it limits the ability of a bare majority to rewrite the rules of the game.",
        options: [
          { id: '5a', text: "strengthens executive dominance", color: 'red', isCorrect: false },
          { id: '5b', text: "prevents simple majorities from changing the basic rules too easily", color: 'blue', isCorrect: true },
          { id: '5c', text: "eliminates the role of courts", color: 'yellow', isCorrect: false },
          { id: '5d', text: "creates a two-party system", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-6',
        text: "What is judicial review?",
        timeLimit: 20,
        explanation: "Judicial review is the authority of courts to determine whether laws are constitutional and potentially invalidate them.",
        options: [
          { id: '6a', text: "The power of legislatures to review courts", color: 'red', isCorrect: false },
          { id: '6b', text: "The power of courts to assess whether laws are constitutional", color: 'blue', isCorrect: true },
          { id: '6c', text: "The power of presidents to veto laws", color: 'yellow', isCorrect: false },
          { id: '6d', text: "The power of voters to remove judges by referendum", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-7',
        text: "In the decentralized model of judicial review:",
        timeLimit: 20,
        explanation: "The American model is decentralized because constitutional review can arise in the ordinary judiciary, not only in one specialized court.",
        options: [
          { id: '7a', text: "only one special constitutional court can review laws", color: 'red', isCorrect: false },
          { id: '7b', text: "many courts can consider constitutional questions", color: 'blue', isCorrect: true },
          { id: '7c', text: "courts cannot invalidate laws at all", color: 'yellow', isCorrect: false },
          { id: '7d', text: "review happens only through parliament", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-8',
        text: "In the centralized model of judicial review:",
        timeLimit: 20,
        explanation: "The European or Kelsenian model centers review in a specialized constitutional court, as in Germany.",
        options: [
          { id: '8a', text: "review is exercised only by local courts", color: 'red', isCorrect: false },
          { id: '8b', text: "legislatures have final authority over constitutionality", color: 'blue', isCorrect: false },
          { id: '8c', text: "a specialized constitutional court has the main review authority", color: 'yellow', isCorrect: true },
          { id: '8d', text: "judges are elected by referendum", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-9',
        text: "What does parliamentary sovereignty mean in the classic U.K. model?",
        timeLimit: 20,
        explanation: "In the classic U.K. model, Parliament is sovereign, so courts do not exercise strong American-style judicial review over Acts of Parliament.",
        options: [
          { id: '9a', text: "Courts have the final word on constitutionality", color: 'red', isCorrect: false },
          { id: '9b', text: "Regions can veto all legislation", color: 'blue', isCorrect: false },
          { id: '9c', text: "Parliament has final authority and courts do not strongly strike down Acts of Parliament", color: 'yellow', isCorrect: true },
          { id: '9d', text: "The prime minister can amend the constitution alone", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq11-10',
        text: "What is the countermajoritarian difficulty?",
        timeLimit: 20,
        explanation: "The countermajoritarian difficulty is the democratic objection that unelected judges may overturn decisions made by elected representatives.",
        options: [
          { id: '10a', text: "The problem of too many political parties", color: 'red', isCorrect: false },
          { id: '10b', text: "The problem of unelected judges overruling elected majorities", color: 'blue', isCorrect: true },
          { id: '10c', text: "The problem of weak bicameralism", color: 'yellow', isCorrect: false },
          { id: '10d', text: "The problem of federalism in large states", color: 'green', isCorrect: false }
        ]
      }
    ]
  },
  {
    weekId: 13,
    title: "Week 13: Democratic Institutions and Foreign Policy",
    isLocked: false,
    questions: [
      {
        id: 'lq13-1',
        text: "What is the main idea of Putnam’s two-level game theory?",
        timeLimit: 20,
        explanation: "Leaders bargain internationally and domestically at the same time.",
        options: [
          { id: '1a', text: "Leaders bargain internationally and domestically at the same time", color: 'red', isCorrect: true },
          { id: '1b', text: "Foreign policy is determined only by military power", color: 'blue', isCorrect: false },
          { id: '1c', text: "Domestic politics does not matter in diplomacy", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Democracies cannot make international agreements", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-2',
        text: "In Putnam’s theory, what is Level I?",
        timeLimit: 20,
        explanation: "Level I refers to international bargaining between governments.",
        options: [
          { id: '2a', text: "Domestic approval by voters", color: 'red', isCorrect: false },
          { id: '2b', text: "International bargaining between governments", color: 'blue', isCorrect: true },
          { id: '2c', text: "Judicial review of foreign policy", color: 'yellow', isCorrect: false },
          { id: '2d', text: "Public opinion polling", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-3',
        text: "What is Level II in Putnam’s two-level game?",
        timeLimit: 20,
        explanation: "Level II is domestic approval or ratification.",
        options: [
          { id: '3a', text: "Military planning", color: 'red', isCorrect: false },
          { id: '3b', text: "Trade negotiation", color: 'blue', isCorrect: false },
          { id: '3c', text: "Domestic approval or ratification", color: 'yellow', isCorrect: true },
          { id: '3d', text: "International law enforcement", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-4',
        text: "What is a win-set?",
        timeLimit: 20,
        explanation: "The win-set is the set of all possible international agreements that would be accepted by domestic actors.",
        options: [
          { id: '4a', text: "The number of countries in an alliance", color: 'red', isCorrect: false },
          { id: '4b', text: "The military resources available to a state", color: 'blue', isCorrect: false },
          { id: '4c', text: "The public speeches made by a leader", color: 'yellow', isCorrect: false },
          { id: '4d', text: "The set of agreements that domestic actors would accept", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq13-5',
        text: "What does a large win-set usually mean?",
        timeLimit: 20,
        explanation: "A large win-set makes an international agreement easier to reach, though it reduces negotiating leverage.",
        options: [
          { id: '5a', text: "International agreement is easier to reach", color: 'red', isCorrect: true },
          { id: '5b', text: "Domestic actors reject all agreements", color: 'blue', isCorrect: false },
          { id: '5c', text: "The leader has no bargaining flexibility", color: 'yellow', isCorrect: false },
          { id: '5d', text: "The country cannot negotiate internationally", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-6',
        text: "Why can a small win-set sometimes help a leader in international bargaining?",
        timeLimit: 20,
        explanation: "It gives leverage by allowing the leader to say 'I cannot accept that deal at home.'",
        options: [
          { id: '6a', text: "It removes all domestic constraints", color: 'red', isCorrect: false },
          { id: '6b', text: "It lets the leader say, “I cannot accept that deal at home”", color: 'blue', isCorrect: true },
          { id: '6c', text: "It guarantees faster agreement", color: 'yellow', isCorrect: false },
          { id: '6d', text: "It eliminates the need for ratification", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-7',
        text: "According to Bueno de Mesquita and Smith, why do leaders care about domestic politics?",
        timeLimit: 20,
        explanation: "Leaders care because they want to stay in power, which requires satisfying their winning coalition.",
        options: [
          { id: '7a', text: "Domestic politics only matters in elections", color: 'red', isCorrect: false },
          { id: '7b', text: "Foreign policy is never connected to survival", color: 'blue', isCorrect: false },
          { id: '7c', text: "Leaders want to stay in power", color: 'yellow', isCorrect: true },
          { id: '7d', text: "Domestic actors always agree with leaders", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-8',
        text: "What is the “winning coalition”?",
        timeLimit: 20,
        explanation: "The winning coalition is the subset of the selectorate whose support is essential for a leader to stay in power.",
        options: [
          { id: '8a', text: "All citizens in the country", color: 'red', isCorrect: false },
          { id: '8b', text: "All foreign allies of the state", color: 'blue', isCorrect: false },
          { id: '8c', text: "The opposition party", color: 'yellow', isCorrect: false },
          { id: '8d', text: "The group whose support a leader needs to stay in power", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq13-9',
        text: "What is the selectorate?",
        timeLimit: 20,
        explanation: "The selectorate includes all individuals who have at least a nominal say in choosing the leader.",
        options: [
          { id: '9a', text: "The group with at least some role in choosing the leader", color: 'red', isCorrect: true },
          { id: '9b', text: "The group of foreign diplomats negotiating a treaty", color: 'blue', isCorrect: false },
          { id: '9c', text: "The military command structure", color: 'yellow', isCorrect: false },
          { id: '9d', text: "The central bank leadership", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-10',
        text: "Which domestic actor can affect foreign policy by ratifying or blocking agreements?",
        timeLimit: 20,
        explanation: "Legislatures serve as a common Level II constituency that must ratify or can block agreements.",
        options: [
          { id: '10a', text: "Weather agencies", color: 'red', isCorrect: false },
          { id: '10b', text: "Legislatures", color: 'blue', isCorrect: true },
          { id: '10c', text: "Sports organizations", color: 'yellow', isCorrect: false },
          { id: '10d', text: "Foreign tourists", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-11',
        text: "What is the main point of Lijphart’s two-dimensional map?",
        timeLimit: 20,
        explanation: "Democracies vary primarily in how they concentrate or disperse power across the two dimensions.",
        options: [
          { id: '11a', text: "All democracies have identical institutions", color: 'red', isCorrect: false },
          { id: '11b', text: "Only presidential systems can be democratic", color: 'blue', isCorrect: false },
          { id: '11c', text: "Democracies vary in how they concentrate or disperse power", color: 'yellow', isCorrect: true },
          { id: '11d', text: "Foreign policy is unrelated to institutions", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq13-12',
        text: "Which statement best summarizes Week 13?",
        timeLimit: 20,
        explanation: "Foreign policy is shaped by both international bargaining and domestic political constraints.",
        options: [
          { id: '12a', text: "Foreign policy is made only by international pressure", color: 'red', isCorrect: false },
          { id: '12b', text: "Domestic institutions rarely affect diplomacy", color: 'blue', isCorrect: false },
          { id: '12c', text: "Leaders can ignore domestic actors when negotiating", color: 'yellow', isCorrect: false },
          { id: '12d', text: "Foreign policy is shaped by both international bargaining and domestic political constraints", color: 'green', isCorrect: true }
        ]
      }
    ]
  },
  {
    weekId: 14,
    title: "Week 14: Democratic Performance and Quality",
    isLocked: true,
    questions: [
      {
        id: 'lq14-1',
        text: "What question is Lijphart mainly asking in Chapter 15?",
        timeLimit: 20,
        explanation: "He's examining if the type of democracy affects macroeconomic management and control of violence.",
        options: [
          { id: '1a', text: "Does consensus democracy make a difference for effective government and policy-making?", color: 'red', isCorrect: true },
          { id: '1b', text: "Should democracies adopt presidentialism?", color: 'blue', isCorrect: false },
          { id: '1c', text: "Why do federal systems always outperform unitary systems?", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Why are two-party systems more democratic?", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq14-2',
        text: "What is Lijphart’s overall conclusion about effective government?",
        timeLimit: 20,
        explanation: "He finds no clear evidence that majoritarian democracies are better at governing, contrary to conventional wisdom.",
        options: [
          { id: '2a', text: "Majoritarian democracies always govern better", color: 'red', isCorrect: false },
          { id: '2b', text: "Majoritarian democracies do not outperform consensus democracies", color: 'blue', isCorrect: true },
          { id: '2c', text: "Consensus democracies always grow faster economically", color: 'yellow', isCorrect: false },
          { id: '2d', text: "Federal systems are always more stable", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq14-3',
        text: "In Chapter 16, consensus democracy makes the clearest positive difference on:",
        timeLimit: 20,
        explanation: "Consensus democracies tend to be more egalitarian, have better representation of women, and higher voter turnout.",
        options: [
          { id: '3a', text: "military spending", color: 'red', isCorrect: false },
          { id: '3b', text: "presidential power", color: 'blue', isCorrect: false },
          { id: '3c', text: "democratic quality and inclusive outcomes", color: 'yellow', isCorrect: true },
          { id: '3d', text: "cabinet secrecy", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq14-4',
        text: "Which phrase does Lijphart use for more inclusive and humane democratic outcomes?",
        timeLimit: 20,
        explanation: "Lijphart argues that consensus democracies are 'kinder and gentler' than majoritarian ones.",
        options: [
          { id: '4a', text: "“strong state democracy”", color: 'red', isCorrect: false },
          { id: '4b', text: "“efficient majoritarianism”", color: 'blue', isCorrect: false },
          { id: '4c', text: "“competitive pluralism”", color: 'yellow', isCorrect: false },
          { id: '4d', text: "“kinder, gentler democracy”", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq14-5',
        text: "According to Lijphart, which statement is most accurate?",
        timeLimit: 20,
        explanation: "While majoritarianism can make fast decisions, those decisions are not necessarily better or more stable over time.",
        options: [
          { id: '5a', text: "Faster decision-making is not automatically better government", color: 'red', isCorrect: true },
          { id: '5b', text: "Slower government is always better government", color: 'blue', isCorrect: false },
          { id: '5c', text: "Coalition cabinets cannot be effective", color: 'yellow', isCorrect: false },
          { id: '5d', text: "Representation always reduces accountability", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq14-6',
        text: "Which of the following is associated with higher democratic quality in Lijphart’s analysis?",
        timeLimit: 20,
        explanation: "Broader representation of groups translates directly to higher 'quality' metrics in his evaluation.",
        options: [
          { id: '6a', text: "single-party cabinets", color: 'red', isCorrect: false },
          { id: '6b', text: "broader representation and inclusion", color: 'blue', isCorrect: true },
          { id: '6c', text: "executive dominance", color: 'yellow', isCorrect: false },
          { id: '6d', text: "fewer parties and fewer checks", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq14-7',
        text: "Which dimension matters most for Lijphart’s strongest performance claims?",
        timeLimit: 20,
        explanation: "The executives-parties dimension (e.g. proportional representation, coalition cabinets) has the strongest impact on 'kinder, gentler' policies.",
        options: [
          { id: '7a', text: "local–national dimension", color: 'red', isCorrect: false },
          { id: '7b', text: "presidential–parliamentary dimension", color: 'blue', isCorrect: false },
          { id: '7c', text: "executives–parties dimension", color: 'yellow', isCorrect: true },
          { id: '7d', text: "judicial-only dimension", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq14-8',
        text: "What is the main takeaway from Chapters 15 and 16 together?",
        timeLimit: 20,
        explanation: "Consensus democracy does not sacrifice effective governance, while still providing better representation and democratic quality.",
        options: [
          { id: '8a', text: "Majoritarian democracy is always superior", color: 'red', isCorrect: false },
          { id: '8b', text: "Institutions do not affect democratic outcomes", color: 'blue', isCorrect: false },
          { id: '8c', text: "Consensus democracy only helps small countries", color: 'yellow', isCorrect: false },
          { id: '8d', text: "Consensus democracies do at least as well on effectiveness and better on democratic quality", color: 'green', isCorrect: true }
        ]
      }
    ]
  },
  {
    weekId: 15,
    title: "Week 15: Contemporary Challenges to Democracy",
    isLocked: true,
    questions: [
      {
        id: 'lq15-1',
        text: "What is Lijphart’s main recommendation in Chapter 17?",
        timeLimit: 20,
        explanation: "He strongly recommends the consensus model, especially for newly democratizing countries.",
        options: [
          { id: '1a', text: "The consensus option is generally the more attractive democratic choice", color: 'red', isCorrect: true },
          { id: '1b', text: "Every country should copy the UK exactly", color: 'blue', isCorrect: false },
          { id: '1c', text: "Presidentialism is always best for divided societies", color: 'yellow', isCorrect: false },
          { id: '1d', text: "Institutions matter less than culture", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq15-2',
        text: "For which kinds of countries does Lijphart say federalist institutions are especially useful?",
        timeLimit: 20,
        explanation: "Federalism helps manage deep societal divisions and provides representation in large/diverse populations.",
        options: [
          { id: '2a', text: "only very small island states", color: 'red', isCorrect: false },
          { id: '2b', text: "large countries and countries with deep ethnic or religious divisions", color: 'blue', isCorrect: true },
          { id: '2c', text: "only two-party systems", color: 'yellow', isCorrect: false },
          { id: '2d', text: "only presidential systems", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq15-3',
        text: "What is one of Lijphart’s important caveats about institutions and culture?",
        timeLimit: 20,
        explanation: "A society's culture must support the institutions, but institutional design also helps shape political culture.",
        options: [
          { id: '3a', text: "Institutions never shape politics", color: 'red', isCorrect: false },
          { id: '3b', text: "Culture fully determines democracy", color: 'blue', isCorrect: false },
          { id: '3c', text: "Institutions and political culture can shape each other", color: 'yellow', isCorrect: true },
          { id: '3d', text: "Political culture does not matter at all", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq15-4',
        text: "Which country does Lijphart use as a reason for optimism about consensus institutions in newer democracies?",
        timeLimit: 20,
        explanation: "South Africa's transition and adoption of consensus elements provides a model for managing deep societal divisions.",
        options: [
          { id: '4a', text: "France", color: 'red', isCorrect: false },
          { id: '4b', text: "United States", color: 'blue', isCorrect: false },
          { id: '4c', text: "United Kingdom", color: 'yellow', isCorrect: false },
          { id: '4d', text: "South Africa", color: 'green', isCorrect: true }
        ]
      },
      {
        id: 'lq15-5',
        text: "Which of the following is the best example of democratic backsliding?",
        timeLimit: 20,
        explanation: "Backsliding involves the incremental erosion of democratic checks and balances by elected leaders.",
        options: [
          { id: '5a', text: "an elected leader weakening courts and checks in order to stay in power", color: 'red', isCorrect: true },
          { id: '5b', text: "a coalition government forming after an election", color: 'blue', isCorrect: false },
          { id: '5c', text: "a country adopting proportional representation", color: 'yellow', isCorrect: false },
          { id: '5d', text: "a parliament increasing women’s representation", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq15-6',
        text: "What is populism most commonly understood to mean in democratic politics?",
        timeLimit: 20,
        explanation: "Populism pits a 'pure people' against corrupt elites and institutions, often challenging constitutional limits.",
        options: [
          { id: '6a', text: "rule by constitutional courts", color: 'red', isCorrect: false },
          { id: '6b', text: "a claim to represent “the real people” against elites and institutions", color: 'blue', isCorrect: true },
          { id: '6c', text: "a strong independent central bank", color: 'yellow', isCorrect: false },
          { id: '6d', text: "coalition bargaining among many parties", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq15-7',
        text: "Why might consensus institutions be more resilient against democratic erosion?",
        timeLimit: 20,
        explanation: "By avoiding concentrated power, consensus institutions make it harder for a single leader to quickly dismantle democratic checks.",
        options: [
          { id: '7a', text: "because they eliminate all conflict", color: 'red', isCorrect: false },
          { id: '7b', text: "because they remove elections", color: 'blue', isCorrect: false },
          { id: '7c', text: "because they disperse power and create more checks", color: 'yellow', isCorrect: true },
          { id: '7d', text: "because they always produce two-party systems", color: 'green', isCorrect: false }
        ]
      },
      {
        id: 'lq15-8',
        text: "What is the broad final lesson of Week 15?",
        timeLimit: 20,
        explanation: "Institutional choices like electoral rules and executive-legislative relations are critical for how well a democracy performs and survives.",
        options: [
          { id: '8a', text: "democracy works best when power is always concentrated", color: 'red', isCorrect: false },
          { id: '8b', text: "democratic institutions do not matter very much", color: 'blue', isCorrect: false },
          { id: '8c', text: "only political culture matters for democratic survival", color: 'yellow', isCorrect: false },
          { id: '8d', text: "institutional design affects representation, quality, and democratic resilience", color: 'green', isCorrect: true }
        ]
      }
    ]
  }
];

export const APPROVED_COUNTRIES = [
  "United Kingdom",
  "New Zealand",
  "Australia",
  "Switzerland",
  "Belgium",
  "Netherlands",
  "Spain",
  "Sweden",
  "Germany",
  "Ireland",
  "Japan",
  "France",
  "Finland",
  "Austria",
  "Canada",
  "India",
  "Brazil"
];
