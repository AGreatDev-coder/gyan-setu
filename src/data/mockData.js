// GyanSetu (ज्ञानसेतु) - Core Curriculum Data & Adaptive Rules Engine
// Tailored for Classes 6–10 (NCERT / CBSE / State Board aligned)
import { NCERT_CURRICULUM } from './ncertDatabase.js';

export const CURRICULUM = {
  classes: NCERT_CURRICULUM.classes,
  subjects: NCERT_CURRICULUM.subjects,
  chapters: NCERT_CURRICULUM.chapters
};

// SAMPLE STUDENT PROFILES (Pre-populated realistic demo learners)
export const DEMO_STUDENTS = [
  {
    id: 'student-1',
    name: 'Aarav Sharma',
    avatar: 'AS',
    classId: '8',
    section: 'B',
    school: 'Kendriya Vidyalaya, Sector 4',
    selectedSubject: 'math',
    activeChapterId: 'linear-eq-8',
    preferredLanguage: 'en',
    overallMastery: 64, // 64% - Needs reinforcement on negative transposition
    streakDays: 4,
    recentScore: '3/5',
    lastActive: 'Today, 4:15 PM',
    learningGaps: [
      {
        topic: 'Negative Term Transposition',
        severity: 'medium',
        detail: 'Consistently makes arithmetic sign errors when moving terms with "-" across the equals sign.',
        suggestedRemedy: 'Review 3-minute Vegetable Scale balance analogy before proceeding to Level 2 questions.'
      }
    ],
    masteredTopics: ['Basic Equation Definition', 'Multiplication & Division Inverses'],
    inProgressTopics: ['Variables on Both Sides', 'Brackets & Distribution'],
    adaptiveState: {
      consecutiveErrors: 1,
      currentPracticeLevel: 2,
      recommendedNextStep: {
        type: 'remedial-capsule',
        title: '3-Min Foundation Refresh: Sign Reversal on Transposition',
        reason: 'Recommended because you tripped on "-8" becoming "+8" in Question 3. A quick 1-minute visual reminder will solidify this before your next test.',
        actionLabel: 'Review Concept Capsule'
      }
    }
  },
  {
    id: 'student-2',
    name: 'Priya Patel',
    avatar: 'PP',
    classId: '9',
    section: 'A',
    school: 'Govt. Model Senior Secondary School',
    selectedSubject: 'science',
    activeChapterId: 'force-laws-9',
    preferredLanguage: 'en',
    overallMastery: 88, // 88% - Approaching Mastery / Ready for Challenge
    streakDays: 7,
    recentScore: '5/5',
    lastActive: 'Yesterday',
    learningGaps: [],
    masteredTopics: ['Inertia & First Law', 'Momentum Formula', 'Action-Reaction pairs'],
    inProgressTopics: ['Conservation of Momentum Calculations'],
    adaptiveState: {
      consecutiveErrors: 0,
      currentPracticeLevel: 3,
      recommendedNextStep: {
        type: 'acceleration',
        title: 'Level 3 Higher-Order Thinking Challenge',
        reason: 'Consistent 100% accuracy on foundational mechanics. Advancing to multi-step real-world friction and conservation problems.',
        actionLabel: 'Take Challenge'
      }
    }
  },
  {
    id: 'student-3',
    name: 'Rohan Verma',
    avatar: 'RV',
    classId: '8',
    section: 'B',
    school: 'Kendriya Vidyalaya, Sector 4',
    selectedSubject: 'math',
    activeChapterId: 'linear-eq-8',
    preferredLanguage: 'hi',
    overallMastery: 48, // 48% - High Support Needed
    streakDays: 2,
    recentScore: '2/5',
    lastActive: '2 days ago',
    learningGaps: [
      {
        topic: 'Distributive Property with Parentheses',
        severity: 'high',
        detail: 'Forgets to multiply the outer coefficient with the second term inside brackets (e.g. 3(x - 4) becomes 3x - 4 instead of 3x - 12).',
        suggestedRemedy: 'Teacher recommended 1-on-1 worksheet on expanding brackets.'
      }
    ],
    masteredTopics: ['Basic Equation Definition'],
    inProgressTopics: ['Single step equations', 'Transposition basics'],
    adaptiveState: {
      consecutiveErrors: 2,
      currentPracticeLevel: 1,
      recommendedNextStep: {
        type: 'step-down',
        title: 'Return to Foundational Level 1 Practice',
        reason: 'Step back to single-operation equations to rebuild confidence and accuracy with step-by-step guidance.',
        actionLabel: 'Start Guided Practice'
      }
    }
  }
];

// TEACHER DASHBOARD MOCK DATA
// Realistic class data representing an Indian classroom of 42 students (CBSE Class 8-B)
export const DEMO_TEACHER_CLASS = {
  teacherName: 'Smt. Ananya Sen',
  school: 'Kendriya Vidyalaya, Sector 4',
  assignedClass: 'Class 8-B',
  subject: 'Mathematics',
  totalStudents: 42,
  averageClassMastery: 67, // 67% average
  completionRate: 74,
  activeChapter: 'Linear Equations in One Variable',
  
  // Class mastery tier breakdown
  masteryTiers: {
    mastered: { count: 18, percentage: 43, label: 'Mastered (80-100%)', color: '#2EA334' },
    progressing: { count: 16, percentage: 38, label: 'Progressing (60-79%)', color: '#C67428' },
    needsSupport: { count: 8, percentage: 19, label: 'Needs Support (<60%)', color: '#B8472C' }
  },

  // Common Misconceptions Flagged across the 42 students
  commonGaps: [
    {
      id: 'gap-1',
      title: 'Transposition Sign Confusion',
      affectedStudentsCount: 14,
      percentage: '33% of class',
      severity: 'high',
      description: 'Moving negative constants across the "=" sign without inverting to positive (e.g., 2x - 7 = 11 becomes 2x = 11 - 7).',
      teacherRecommendation: 'Dedicate 10 minutes at the start of tomorrow’s class to physical pan-balance analogy or draw scales on the blackboard.'
    },
    {
      id: 'gap-2',
      title: 'Bracket Distribution Oversight',
      affectedStudentsCount: 11,
      percentage: '26% of class',
      severity: 'medium',
      description: 'Students multiply the variable but omit multiplying the constant (e.g. 4(y + 3) written as 4y + 3).',
      teacherRecommendation: 'Use the "handshake method" visualization where the number outside shakes hands with both members inside.'
    },
    {
      id: 'gap-3',
      title: 'Forming Equations from Word Problems',
      affectedStudentsCount: 9,
      percentage: '21% of class',
      severity: 'medium',
      description: 'Translating comparative phrases like "4 years older than twice his age" into algebraic expressions.',
      teacherRecommendation: 'Provide the 5-step translation keyword reference sheet (provided in teacher resources tab).'
    }
  ],

  // Full Roster for Class 8-B
  studentsRoster: [
    { id: 's-1', name: 'Aarav Sharma', roll: 1, mastery: 64, status: 'progressing', flag: 'Negative Transposition', attempts: 18, accuracy: '72%', lastSeen: 'Today' },
    { id: 's-2', name: 'Ananya Mukherjee', roll: 2, mastery: 92, status: 'mastered', flag: 'None (Ready for Class 9)', attempts: 24, accuracy: '95%', lastSeen: 'Today' },
    { id: 's-3', name: 'Rohan Verma', roll: 3, mastery: 48, status: 'needs-support', flag: 'Bracket Distribution', attempts: 12, accuracy: '45%', lastSeen: '2 days ago' },
    { id: 's-4', name: 'Diya Nair', roll: 4, mastery: 86, status: 'mastered', flag: 'None', attempts: 22, accuracy: '90%', lastSeen: 'Yesterday' },
    { id: 's-5', name: 'Vikramaditya Rao', roll: 5, mastery: 52, status: 'needs-support', flag: 'Cross-multiplication', attempts: 14, accuracy: '50%', lastSeen: '3 days ago' },
    { id: 's-6', name: 'Sneha Kulkarni', roll: 6, mastery: 78, status: 'progressing', flag: 'Word Problem Setup', attempts: 20, accuracy: '75%', lastSeen: 'Today' },
    { id: 's-7', name: 'Mohd. Zeeshan', roll: 7, mastery: 81, status: 'mastered', flag: 'None', attempts: 25, accuracy: '84%', lastSeen: 'Today' },
    { id: 's-8', name: 'Tanvi Deshmukh', roll: 8, mastery: 58, status: 'needs-support', flag: 'Negative Transposition', attempts: 15, accuracy: '55%', lastSeen: 'Yesterday' },
    { id: 's-9', name: 'Aditya Chauhan', roll: 9, mastery: 74, status: 'progressing', flag: 'Bracket Distribution', attempts: 19, accuracy: '71%', lastSeen: 'Today' },
    { id: 's-10', name: 'Kavya Sundaram', roll: 10, mastery: 95, status: 'mastered', flag: 'None (Fast Learner)', attempts: 28, accuracy: '98%', lastSeen: 'Today' }
  ]
};

// MULTILINGUAL LABELS (Demo UI localization dictionary)
export const I18N = {
  en: {
    brandName: 'GyanSetu',
    brandTagline: 'Adaptive Learning for Classes 6–10',
    navHowItWorks: 'How It Works',
    navForStudents: 'For Students',
    navForTeachers: 'For Teachers',
    startLearning: 'Start Learning',
    teacherPortal: 'Explore for Teachers',
    switchRole: 'Switch Demo View',
    lowBandwidth: 'Low Data Mode',
    studentView: 'Student Workspace',
    teacherView: 'Teacher Command Center',
    learnTab: 'Learn Concepts',
    solveTab: 'Solve & Practise',
    testTab: 'Diagnostic Test',
    pathTab: 'Adaptive Path',
    dashboardTab: 'Overview',
    continueLearning: 'Continue Learning',
    whyRecommended: 'Why GyanSetu recommends this step:',
    masteryScore: 'Topic Mastery',
    needsSupport: 'Needs Support',
    progressing: 'Progressing',
    mastered: 'Mastered',
    demoBadge: 'NEP 2020 COMPLIANT ARCHITECTURE'
  },
  hi: {
    brandName: 'ज्ञानसेतु',
    brandTagline: 'कक्षा 6–10 हेतु अनुकूली शिक्षण मंच',
    navHowItWorks: 'यह कैसे कार्य करता है',
    navForStudents: 'छात्रों के लिए',
    navForTeachers: 'शिक्षकों के लिए',
    startLearning: 'पढ़ना शुरू करें',
    teacherPortal: 'शिक्षक पोर्टल देखें',
    switchRole: 'रोल बदलें',
    lowBandwidth: 'कम डेटा मोड',
    studentView: 'विद्यार्थी कक्ष',
    teacherView: 'शिक्षक नियंत्रण केंद्र',
    learnTab: 'अवधारणाएं सीखें',
    solveTab: 'अभ्यास करें (हल करें)',
    testTab: 'निदानात्मक परीक्षा',
    pathTab: 'अनुकूली मार्ग',
    dashboardTab: 'डैशबोर्ड अवलोकन',
    continueLearning: 'पढ़ाई जारी रखें',
    whyRecommended: 'ज्ञानसेतु यह कदम क्यों सुझा रहा है:',
    masteryScore: 'अवधारणा दक्षता',
    needsSupport: 'सहायता आवश्यक',
    progressing: 'प्रगति पर',
    mastered: 'दक्ष (मास्टर)',
    demoBadge: 'एनईपी 2020 मार्गदर्शिका'
  },
  mr: {
    brandName: 'ज्ञानसेतू',
    brandTagline: 'इयत्ता ६ ते १० साठी अनुकूलित शिक्षण मंच',
    navHowItWorks: 'हे कसे कार्य करते',
    navForStudents: 'विद्यार्थ्यांसाठी',
    navForTeachers: 'शिक्षकांसाठी',
    startLearning: 'शिकणे सुरू करा',
    teacherPortal: 'शिक्षक कक्ष',
    switchRole: 'भूमिका बदला',
    lowBandwidth: 'कमी डेटा मोड',
    studentView: 'विद्यार्थी कार्यक्षेत्र',
    teacherView: 'शिक्षक मार्गदर्शन कक्ष',
    learnTab: 'संकल्पना शिका',
    solveTab: 'सराव करा',
    testTab: 'चाचणी परीक्षा',
    pathTab: 'शिकण्याचा मार्ग',
    dashboardTab: 'डॅशबोर्ड',
    continueLearning: 'शिकणे चालू ठेवा',
    whyRecommended: 'ज्ञानसेतू हे पाऊल का सुचवतो:',
    masteryScore: 'विषय प्रभुत्व',
    needsSupport: 'मदतीची गरज',
    progressing: 'प्रगतीपथावर',
    mastered: 'प्रवीण',
    demoBadge: 'डेमो आवृत्ती • शैक्षणिक आराखडा'
  },
  te: {
    brandName: 'జ్ఞానసేతు',
    brandTagline: '6-10 తరగతుల విద్యార్థుల కోసం అడాప్టివ్ లెర్నింగ్',
    navHowItWorks: 'ఎలా పనిచేస్తుంది',
    navForStudents: 'విద్యార్థుల కొరకు',
    navForTeachers: 'ఉపాధ్యాయుల కొరకు',
    startLearning: 'నేర్చుకోవడం ప్రారంభించండి',
    teacherPortal: 'ఉపాధ్యాయుల పోర్టల్',
    switchRole: 'పాత్రను మార్చండి',
    lowBandwidth: 'తక్కువ డేటా మోడ్',
    studentView: 'విద్యార్థి వీక్షణ',
    teacherView: 'ఉపాధ్యాయుల డాష్‌బోర్డ్',
    learnTab: 'భావనలు నేర్చుకోండి',
    solveTab: 'సాధన చేయండి',
    testTab: 'పరీక్ష',
    pathTab: 'అభ్యసన మార్గం',
    dashboardTab: 'సమీక్ష',
    continueLearning: 'కొనసాగించండి',
    whyRecommended: 'జ్ఞానసేతు ఈ దశను ఎందుకు సిఫార్సు చేస్తుంది:',
    masteryScore: 'నైపుణ్య స్థాయి',
    needsSupport: 'మద్దతు అవసరం',
    progressing: 'పురోగతిలో ఉంది',
    mastered: 'ప్రావీణ్యం',
    demoBadge: 'డెమో ప్రొటోటైప్'
  }
};
