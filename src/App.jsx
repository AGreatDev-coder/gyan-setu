import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/StudentDashboard';
import LearnModule from './components/LearnModule';
import SolveModule from './components/SolveModule';
import TestModule from './components/TestModule';
import AdaptivePathView from './components/AdaptivePathView';
import TeacherDashboard from './components/TeacherDashboard';
import LoginPage from './components/LoginPage';
import OnboardingModal from './components/OnboardingModal';
import { DEMO_STUDENTS } from './data/mockData';
import { curriculumApi } from './services/curriculumApi';
import { authService } from './services/authService';

export default function App() {
  // Authentication & RBAC Session State
  const [currentUser, setCurrentUser] = useState(() => authService.getStoredUser());
  const [loginRoleIntent, setLoginRoleIntent] = useState('student'); // 'student' | 'teacher'
  const [loginRequiredRole, setLoginRequiredRole] = useState(null); // 'student' | 'teacher' | null
  const [loginSecurityNotice, setLoginSecurityNotice] = useState(null);

  // Navigation & Role State
  const [currentRole, setCurrentRole] = useState(() => {
    const stored = authService.getStoredUser();
    return stored ? stored.role : 'student';
  }); // 'student' | 'teacher'
  const [activeView, setActiveView] = useState('landing'); // 'landing' | 'student-dashboard' | 'teacher-dashboard' | 'learn' | 'solve' | 'test' | 'path' | 'login'
  const [studentSubView, setStudentSubView] = useState('overview'); // 'overview' | 'learn' | 'solve' | 'test' | 'path'
  
  // Active Persona State
  const [activeStudent, setActiveStudent] = useState(() => {
    const stored = authService.getStoredUser();
    if (stored && stored.role === 'student') return stored;
    return DEMO_STUDENTS[0];
  });
  const [demoSelectorOpen, setDemoSelectorOpen] = useState(false);

  // Dynamic NCERT Curriculum State
  const [selectedClassId, setSelectedClassId] = useState(() => {
    const stored = authService.getStoredUser();
    return (stored?.role === 'student' && stored?.classId) || DEMO_STUDENTS[0].classId || '8';
  });
  const [selectedSubjectId, setSelectedSubjectId] = useState(() => {
    const stored = authService.getStoredUser();
    return (stored?.role === 'student' && stored?.selectedSubject) || DEMO_STUDENTS[0].selectedSubject || 'math';
  });
  const [availableChapters, setAvailableChapters] = useState([]);
  const [activeChapter, setActiveChapter] = useState(null);

  // Classroom Adaptation State
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('gyansetu_language');
      return saved === 'hi' ? 'hi' : 'en';
    } catch (e) {
      return 'en';
    }
  });

  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('gyansetu_dark_mode') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [lowBandwidth, setLowBandwidth] = useState(false);

  // Sync dark mode class to document body & root & persist
  useEffect(() => {
    try {
      if (darkMode) {
        document.body.classList.add('dark-theme');
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('gyansetu_dark_mode', 'true');
      } else {
        document.body.classList.remove('dark-theme');
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('gyansetu_dark_mode', 'false');
      }
    } catch (e) {
      console.warn('Dark mode sync failed:', e);
    }
  }, [darkMode]);

  // Persist language selection
  const handleLanguageChange = (newLang) => {
    const validLang = newLang === 'hi' ? 'hi' : 'en';
    setCurrentLanguage(validLang);
    try {
      localStorage.setItem('gyansetu_language', validLang);
    } catch (e) {
      console.warn('Language persistence failed:', e);
    }
  };

  // Fetch NCERT chapters dynamically when class or subject changes
  useEffect(() => {
    let isMounted = true;
    
    // Strict Grade Lock: If a student is authenticated, lock to their registered grade
    const effectiveClass = (currentUser?.role === 'student' && currentUser.classId)
      ? currentUser.classId
      : selectedClassId;

    if (currentUser?.role === 'student' && currentUser.classId && selectedClassId !== currentUser.classId) {
      setSelectedClassId(currentUser.classId);
    }

    curriculumApi.getChapters(effectiveClass, selectedSubjectId).then(chapters => {
      if (!isMounted) return;
      setAvailableChapters(chapters || []);
      if (chapters && chapters.length > 0) {
        // If current activeChapter already belongs to this class & subject, keep it
        const currentStillAvailable = chapters.find(c => c.id === activeChapter?.id);
        if (currentStillAvailable) {
          setActiveChapter(currentStillAvailable);
          return;
        }
        // Match active student's active chapter if applicable
        const studentChapter = activeStudent?.activeChapterId
          ? chapters.find(c => c.id === activeStudent.activeChapterId || c.id.startsWith(activeStudent.activeChapterId))
          : null;
        setActiveChapter(studentChapter || chapters[0]);
      } else {
        setActiveChapter(null);
      }
    });
    return () => { isMounted = false; };
  }, [selectedClassId, selectedSubjectId, activeStudent?.id, currentUser?.id, currentUser?.classId]);

  // Keep curriculum aligned when logged-in user changes
  useEffect(() => {
    if (currentUser?.role === 'student' && currentUser.classId) {
      setSelectedClassId(currentUser.classId);
      if (currentUser.selectedSubject) {
        setSelectedSubjectId(currentUser.selectedSubject);
      }
    }
  }, [currentUser]);

  // When demo persona switches, align the selected class and subject
  useEffect(() => {
    if (activeStudent) {
      setSelectedClassId(activeStudent.classId || '8');
      setSelectedSubjectId(activeStudent.selectedSubject || 'math');
    }
  }, [activeStudent]);

  // Sync lowBandwidth mode class to document body
  useEffect(() => {
    if (lowBandwidth) {
      document.body.classList.add('low-bandwidth-mode');
    } else {
      document.body.classList.remove('low-bandwidth-mode');
    }
  }, [lowBandwidth]);

  // Centralized Route Guard & RBAC Controller
  const handleNavigate = (targetView, requiredRole = null) => {
    if (targetView === 'landing') {
      setActiveView('landing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetView === 'login') {
      setLoginRoleIntent(requiredRole || 'student');
      setLoginRequiredRole(requiredRole || null);
      setLoginSecurityNotice(null);
      setActiveView('login');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Role-based Access Control for Teacher Center
    if (targetView === 'teacher-dashboard' || requiredRole === 'teacher') {
      if (currentUser && currentUser.role === 'teacher') {
        setCurrentRole('teacher');
        setActiveView('teacher-dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const notice = currentUser && currentUser.role === 'student'
          ? `Security Access Denied: You are currently signed in with Student credentials ("${currentUser.name}", ID: ${currentUser.rollNo || 'KV-8B-04'}). Faculty authorization (Teacher ID & Name) is strictly required to view class analytics and rosters.`
          : 'Faculty Authentication Required: Please sign in with your Teacher ID Number and Full Name to access Teacher Command Center.';
        setLoginRoleIntent('teacher');
        setLoginRequiredRole('teacher');
        setLoginSecurityNotice(notice);
        setActiveView('login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Role-based Access Control for Student Journey
    const studentViews = ['student-dashboard', 'learn', 'solve', 'test', 'path'];
    if (studentViews.includes(targetView) || requiredRole === 'student') {
      if (currentUser && currentUser.role === 'student') {
        setCurrentRole('student');
        setActiveView(targetView);
        if (targetView === 'student-dashboard') setStudentSubView('overview');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (currentUser && currentUser.role === 'teacher') {
        setLoginRoleIntent('student');
        setLoginRequiredRole('student');
        setLoginSecurityNotice(`You are currently signed in as Faculty (${currentUser.name}). To access student learning paths with an active student profile, please log in with a Student ID No. and Name.`);
        setActiveView('login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setLoginRoleIntent('student');
        setLoginRequiredRole('student');
        setLoginSecurityNotice('Please sign in with your Student ID No. and Full Name to access the adaptive learning curriculum.');
        setActiveView('login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    setActiveView(targetView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setLoginSecurityNotice(null);
    setLoginRequiredRole(null);

    if (user.role === 'teacher') {
      setCurrentRole('teacher');
      setActiveView('teacher-dashboard');
    } else {
      setCurrentRole('student');
      setActiveStudent(user);
      if (user.classId) setSelectedClassId(user.classId);
      if (user.selectedSubject) setSelectedSubjectId(user.selectedSubject);
      setActiveView('student-dashboard');
      setStudentSubView('overview');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setCurrentRole('student');
    setActiveView('landing');
    setLoginSecurityNotice(null);
    setLoginRequiredRole(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handlers
  const handleStartStudent = () => {
    handleNavigate('student-dashboard', 'student');
  };

  const handleStartTeacher = () => {
    handleNavigate('teacher-dashboard', 'teacher');
  };

  const handleStudentSubTab = (tab) => {
    setStudentSubView(tab);
    if (tab === 'overview') {
      setActiveView('student-dashboard');
    } else if (tab === 'learn') {
      setActiveView('learn');
    } else if (tab === 'solve') {
      setActiveView('solve');
    } else if (tab === 'test') {
      setActiveView('test');
    } else if (tab === 'path') {
      setActiveView('path');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChangeChapter = (chapterId) => {
    const ch = availableChapters.find(c => c.id === chapterId);
    if (ch) {
      setActiveChapter(ch);
    }
  };

  return (
    <div 
      className={darkMode ? 'dark-theme' : ''} 
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-warm-ivory)' }}
    >
      
      {/* Global Navigation Header */}
      <Header
        currentUser={currentUser}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        activeView={activeView}
        setActiveView={setActiveView}
        onNavigate={handleNavigate}
        onGoToLogin={(role, notice) => {
          setLoginRoleIntent(role || 'student');
          setLoginRequiredRole(role || null);
          setLoginSecurityNotice(notice || null);
          setActiveView('login');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onLogout={handleLogout}
        currentLanguage={currentLanguage}
        setCurrentLanguage={handleLanguageChange}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(prev => !prev)}
        lowBandwidth={lowBandwidth}
        setLowBandwidth={setLowBandwidth}
        studentProfile={activeStudent}
        onOpenDemoSelector={() => setDemoSelectorOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeView === 'landing' && (
          <LandingPage
            onStartStudent={handleStartStudent}
            onStartTeacher={handleStartTeacher}
            currentLanguage={currentLanguage}
            lowBandwidth={lowBandwidth}
          />
        )}

        {activeView === 'login' && (
          <LoginPage
            initialRole={loginRoleIntent}
            requiredRole={loginRequiredRole}
            securityNotice={loginSecurityNotice}
            onLoginSuccess={handleLoginSuccess}
            onBackToHome={() => {
              setActiveView('landing');
              setLoginSecurityNotice(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeView === 'student-dashboard' && (
          <StudentDashboard
            studentProfile={activeStudent}
            currentUser={currentUser}
            activeSubView={studentSubView}
            setActiveSubView={handleStudentSubTab}
            currentLanguage={currentLanguage}
            activeChapter={activeChapter}
            availableChapters={availableChapters}
            selectedClassId={(currentUser?.role === 'student' && currentUser.classId) || selectedClassId}
            onChangeClass={(newClass) => {
              if (currentUser?.role === 'student' && currentUser.classId) {
                if (newClass !== currentUser.classId) {
                  console.warn(`Grade Locked: Student enrolled in Class ${currentUser.classId}`);
                  return;
                }
              }
              setSelectedClassId(newClass);
            }}
            selectedSubjectId={selectedSubjectId}
            onChangeSubject={(newSub) => setSelectedSubjectId(newSub)}
            onChangeChapter={handleChangeChapter}
            onSelectTopic={(topicId) => {
              setActiveView('learn');
              setStudentSubView('learn');
            }}
            onOpenDemoSelector={() => setDemoSelectorOpen(true)}
          />
        )}

        {activeView === 'learn' && (
          <LearnModule
            studentProfile={activeStudent}
            activeChapter={activeChapter}
            onGoToSolve={() => {
              setActiveView('solve');
              setStudentSubView('solve');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToDashboard={() => {
              setActiveView('student-dashboard');
              setStudentSubView('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeView === 'solve' && (
          <SolveModule
            studentProfile={activeStudent}
            activeChapter={activeChapter}
            onBackToDashboard={() => {
              setActiveView('student-dashboard');
              setStudentSubView('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToLearn={() => {
              setActiveView('learn');
              setStudentSubView('learn');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToTest={() => {
              setActiveView('test');
              setStudentSubView('test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeView === 'test' && (
          <TestModule
            studentProfile={activeStudent}
            activeChapter={activeChapter}
            onBackToDashboard={() => {
              setActiveView('student-dashboard');
              setStudentSubView('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToLearn={() => {
              setActiveView('learn');
              setStudentSubView('learn');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToPath={() => {
              setActiveView('path');
              setStudentSubView('path');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeView === 'path' && (
          <AdaptivePathView
            studentProfile={activeStudent}
            activeChapter={activeChapter}
            selectedSubjectId={selectedSubjectId}
            selectedClassId={(currentUser?.role === 'student' && currentUser.classId) || selectedClassId}
            onBackToDashboard={() => {
              setActiveView('student-dashboard');
              setStudentSubView('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToLearn={() => {
              setActiveView('learn');
              setStudentSubView('learn');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToSolve={() => {
              setActiveView('solve');
              setStudentSubView('solve');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToTest={() => {
              setActiveView('test');
              setStudentSubView('test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeView === 'teacher-dashboard' && (
          <TeacherDashboard
            currentUser={currentUser}
            currentLanguage={currentLanguage}
            onGoToLogin={(role, notice) => {
              setLoginRoleIntent(role || 'teacher');
              setLoginRequiredRole(role || 'teacher');
              setLoginSecurityNotice(notice || null);
              setActiveView('login');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSwitchToStudent={() => {
              handleNavigate('student-dashboard', 'student');
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        currentLanguage={currentLanguage}
        setActiveView={setActiveView}
        setCurrentRole={setCurrentRole}
        onNavigate={handleNavigate}
      />

      {/* Demo Persona Switcher Modal */}
      <OnboardingModal
        isOpen={demoSelectorOpen}
        onClose={() => setDemoSelectorOpen(false)}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        activeStudent={activeStudent}
        setActiveStudent={(newStudent) => {
          setActiveStudent(newStudent);
          if (newStudent) {
            authService.saveSession(newStudent);
            setCurrentUser(newStudent);
          }
        }}
        setActiveView={(view) => {
          handleNavigate(view);
        }}
      />

    </div>
  );
}
