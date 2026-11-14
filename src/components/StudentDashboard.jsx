import React from 'react';
import { 
  BookOpen, 
  RefreshCw, 
  BarChart3, 
  GitFork, 
  ArrowRight, 
  Flame, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Compass, 
  Sparkles, 
  ChevronRight,
  Calculator,
  Atom,
  HelpCircle,
  Layers,
  Database,
  Lock,
  ShieldCheck
} from 'lucide-react';
import { I18N } from '../data/mockData';

export default function StudentDashboard({ 
  studentProfile, 
  activeSubView, 
  setActiveSubView, 
  currentLanguage, 
  activeChapter,
  availableChapters,
  selectedClassId,
  onChangeClass,
  selectedSubjectId,
  onChangeSubject,
  onChangeChapter,
  onSelectTopic,
  onOpenDemoSelector,
  currentUser
}) {
  const t = I18N[currentLanguage] || I18N.en;
  const isHindi = currentLanguage === 'hi';
  
  // Enrolled grade lock: strictly lock to student's registered class
  const enrolledClassId = (currentUser?.role === 'student' && currentUser.classId) || studentProfile?.classId;
  const effectiveClass = enrolledClassId || selectedClassId;
  
  const isScience = selectedSubjectId === 'science' || activeChapter?.subjectId === 'science';
  const defaultScienceChapter = {
    id: 'default-science',
    title: 'Force and Pressure',
    hindiTitle: 'बल तथा दाब',
    ncertChapterNo: 'Chapter 8',
    learnSections: [],
    practiceQuestions: []
  };
  const defaultMathChapter = {
    id: 'default-math',
    title: 'Linear Equations in One Variable',
    hindiTitle: 'एक चर वाले रैखिक समीकरण',
    ncertChapterNo: 'Chapter 2',
    learnSections: [],
    practiceQuestions: []
  };
  const chapter = activeChapter || (isScience ? defaultScienceChapter : defaultMathChapter);

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: 'calc(100vh - 5rem)', paddingBottom: '4rem' }}>
      
      {/* Student Sub-Navigation Tabs */}
      <div style={{
        backgroundColor: '#FAF5ED',
        borderBottom: '1px solid var(--color-border-light)',
        position: 'sticky',
        top: '4.5rem',
        zIndex: 90
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflowX: 'auto', paddingBottom: '0.2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', whiteSpace: 'nowrap' }}>
            <button
              onClick={() => setActiveSubView('overview')}
              className="btn btn-ghost btn-sm"
              style={{
                borderRadius: 'var(--radius-sm)',
                fontWeight: activeSubView === 'overview' ? 700 : 500,
                color: activeSubView === 'overview' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                backgroundColor: activeSubView === 'overview' ? '#EFE5D5' : 'transparent',
                borderBottom: activeSubView === 'overview' ? '2px solid var(--color-action-green)' : '2px solid transparent'
              }}
            >
              <Compass size={15} />
              <span>{isHindi ? 'डैशबोर्ड' : t.dashboardTab}</span>
            </button>

            <button
              onClick={() => setActiveSubView('learn')}
              className="btn btn-ghost btn-sm"
              style={{
                borderRadius: 'var(--radius-sm)',
                fontWeight: activeSubView === 'learn' ? 700 : 500,
                color: activeSubView === 'learn' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                backgroundColor: activeSubView === 'learn' ? '#EFE5D5' : 'transparent',
                borderBottom: activeSubView === 'learn' ? '2px solid var(--color-action-green)' : '2px solid transparent'
              }}
            >
              <BookOpen size={15} />
              <span>{isHindi ? 'अवधारणाएं सीखें' : t.learnTab}</span>
            </button>

            <button
              onClick={() => setActiveSubView('solve')}
              className="btn btn-ghost btn-sm"
              style={{
                borderRadius: 'var(--radius-sm)',
                fontWeight: activeSubView === 'solve' ? 700 : 500,
                color: activeSubView === 'solve' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                backgroundColor: activeSubView === 'solve' ? '#EFE5D5' : 'transparent',
                borderBottom: activeSubView === 'solve' ? '2px solid var(--color-action-green)' : '2px solid transparent'
              }}
            >
              <RefreshCw size={15} />
              <span>{isHindi ? 'अभ्यास करें' : t.solveTab}</span>
            </button>

            <button
              onClick={() => setActiveSubView('test')}
              className="btn btn-ghost btn-sm"
              style={{
                borderRadius: 'var(--radius-sm)',
                fontWeight: activeSubView === 'test' ? 700 : 500,
                color: activeSubView === 'test' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                backgroundColor: activeSubView === 'test' ? '#EFE5D5' : 'transparent',
                borderBottom: activeSubView === 'test' ? '2px solid var(--color-action-green)' : '2px solid transparent'
              }}
            >
              <BarChart3 size={15} />
              <span>{isHindi ? 'निदानात्मक परीक्षा' : t.testTab}</span>
            </button>

            <button
              onClick={() => setActiveSubView('path')}
              className="btn btn-ghost btn-sm"
              style={{
                borderRadius: 'var(--radius-sm)',
                fontWeight: activeSubView === 'path' ? 700 : 500,
                color: activeSubView === 'path' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                backgroundColor: activeSubView === 'path' ? '#EFE5D5' : 'transparent',
                borderBottom: activeSubView === 'path' ? '2px solid var(--color-action-green)' : '2px solid transparent'
              }}
            >
              <GitFork size={15} />
              <span>{isHindi ? 'अनुकूली मार्ग' : t.pathTab}</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1rem' }}>
            <span className="badge badge-green" style={{ fontSize: '0.6875rem' }}>
              {isHindi ? 'एनसीईआरटी पाठ्यक्रम डेटाबेस' : 'Official NCERT Database Connected'}
            </span>
          </div>
        </div>
      </div>

      {/* DASHBOARD HERO & WELCOME BANNER */}
      <div className="container" style={{ paddingTop: '1.75rem' }}>
        
        {/* Authentic NCERT Curriculum Navigator Strip */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.1rem 1.5rem',
          marginBottom: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Database size={18} color="var(--color-action-green)" />
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-sand)', textTransform: 'uppercase', fontWeight: 700 }}>
                {isHindi ? 'एनसीईआरटी पाठ्यक्रम चयनकर्ता' : 'AUTHENTIC NCERT CURRICULUM SELECTOR'}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {isHindi 
                  ? (enrolledClassId ? `कक्षा ${enrolledClassId} पाठ्यक्रम (ग्रेड-लॉक) • विषय व अध्याय:` : 'कक्षा, विषय या अध्याय चुनें:')
                  : (enrolledClassId ? `Class ${enrolledClassId} Syllabus (Grade-Locked) • Select Subject & Chapter:` : 'Switch Grade, Subject or NCERT Textbook Chapter:')
                }
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Class Selection: Locked for enrolled students, selectable for guest */}
            {enrolledClassId ? (
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--color-action-green)',
                  backgroundColor: '#EDF8EE',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--color-action-green-text)',
                  cursor: 'default',
                  boxShadow: 'var(--shadow-sm)'
                }}
                title={isHindi ? `कक्षा ${enrolledClassId} में नामांकित। पाठ्यक्रम केवल कक्षा ${enrolledClassId} तक सीमित है।` : `Access is strictly restricted to Class ${enrolledClassId} curriculum based on student enrollment.`}
              >
                <Lock size={13} />
                <span>{isHindi ? `कक्षा ${enrolledClassId} (नामांकित व लॉक)` : `Class ${enrolledClassId} (Enrolled & Locked)`}</span>
              </div>
            ) : (
              <select
                value={selectedClassId}
                onChange={(e) => onChangeClass(e.target.value)}
                style={{
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--bg-card-elevated)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer'
                }}
              >
                <option value="6">{isHindi ? 'कक्षा 6 (Class 6)' : 'Class 6 (कक्षा 6)'}</option>
                <option value="7">{isHindi ? 'कक्षा 7 (Class 7)' : 'Class 7 (कक्षा 7)'}</option>
                <option value="8">{isHindi ? 'कक्षा 8 (Class 8)' : 'Class 8 (कक्षा 8)'}</option>
                <option value="9">{isHindi ? 'कक्षा 9 (Class 9)' : 'Class 9 (कक्षा 9)'}</option>
                <option value="10">{isHindi ? 'कक्षा 10 (Class 10)' : 'Class 10 (कक्षा 10)'}</option>
              </select>
            )}

            {/* Subject Dropdown */}
            <select
              value={selectedSubjectId}
              onChange={(e) => onChangeSubject(e.target.value)}
              style={{
                padding: '0.45rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--bg-card-elevated)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                cursor: 'pointer'
              }}
            >
              <option value="math">{isHindi ? 'गणित (Mathematics)' : 'Mathematics (गणित)'}</option>
              <option value="science">{isHindi ? 'विज्ञान (Science)' : 'Science (विज्ञान)'}</option>
            </select>

            {/* Chapter Dropdown */}
            {availableChapters && availableChapters.length > 0 && (
              <select
                value={chapter.id}
                onChange={(e) => onChangeChapter(e.target.value)}
                style={{
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-action-green)',
                  backgroundColor: 'var(--bg-card-elevated)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--color-action-green-text)',
                  cursor: 'pointer',
                  maxWidth: '280px'
                }}
              >
                {availableChapters.map(ch => (
                  <option key={ch.id} value={ch.id}>
                    {ch.ncertChapterNo ? `${ch.ncertChapterNo}: ` : ''}{isHindi && ch.hindiTitle ? `${ch.hindiTitle} (${ch.title})` : `${ch.title}${ch.hindiTitle ? ` (${ch.hindiTitle})` : ''}`}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Personalized Welcome Card */}
        <div className="card" style={{
          backgroundColor: '#FCFAF6',
          border: '1.5px solid var(--color-border)',
          padding: '2rem',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                  ACTIVE STUDENT: {studentProfile.name}
                </span>
                <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>
                  Class {enrolledClassId || selectedClassId}-{studentProfile.section || 'A'}
                </span>
                {studentProfile.rollNo && (
                  <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>
                    {isHindi ? `रोल नं: ${studentProfile.rollNo}` : `Roll No: ${studentProfile.rollNo}`}
                  </span>
                )}
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  {studentProfile.school}
                </span>
              </div>

              <h1 style={{ fontSize: '2.1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.35rem' }}>
                {isHindi ? `नमस्ते, ${studentProfile.name}!` : `Namaste, ${studentProfile.name}!`}
              </h1>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', maxWidth: '580px', lineHeight: 1.5 }}>
                {isHindi 
                  ? `सक्रिय पाठ: कक्षा ${selectedClassId} ${selectedSubjectId === 'math' ? 'गणित' : 'विज्ञान'} — ${chapter.ncertChapterNo ? `${chapter.ncertChapterNo}: ` : ''}${chapter.hindiTitle || chapter.title}`
                  : `Current Active Focus: Class ${selectedClassId} ${selectedSubjectId === 'math' ? 'Mathematics' : 'Science'} — ${chapter.ncertChapterNo ? `${chapter.ncertChapterNo}: ` : ''}${chapter.title} (${chapter.hindiTitle})`
                }
              </p>
            </div>

            {/* Overall Mastery & Streak Metrics */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.25rem',
                textAlign: 'center',
                minWidth: '110px'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {isHindi ? 'अवधारणा दक्षता' : 'Topic Mastery'}
                </div>
                <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-action-green-text)', fontWeight: 600 }}>
                  {studentProfile.overallMastery}%
                </div>
                <span className="badge badge-amber" style={{ fontSize: '0.6875rem', marginTop: '0.2rem' }}>
                  {isHindi ? 'प्रगति पर' : 'Approaching'}
                </span>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.25rem',
                textAlign: 'center',
                minWidth: '100px'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {isHindi ? 'अध्ययन निरंतरता' : 'Active Streak'}
                </div>
                <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                  <Flame size={20} />
                  <span>{studentProfile.streakDays}d</span>
                </div>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                  {isHindi ? 'नियमित!' : 'Consistent!'}
                </span>
              </div>
            </div>
          </div>

          {/* Big Action: Continue Learning Banner */}
          <div style={{
            marginTop: '1.75rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-sand)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                {isHindi ? 'अगला अनुशंसित अध्ययन चरण' : 'Next Recommended Step'}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {isHindi ? `${chapter.hindiTitle || chapter.title} — अभ्यास प्रारंभ करें` : `${chapter.title} — Start Interactive Practice`}
              </div>
            </div>

            <button
              onClick={() => setActiveSubView('learn')}
              className="btn btn-primary"
              style={{ gap: '0.5rem' }}
            >
              <span>{isHindi ? 'पढ़ाई जारी रखें' : t.continueLearning}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* TRANSPARENT ADAPTIVE RATIONALE (Explain why this step is recommended) */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
            <Sparkles size={18} color="var(--color-sand)" />
            <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t.whyRecommended}
            </strong>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            "Curriculum automatically mapped to NCERT competencies for Class {selectedClassId}. GyanSetu tracks your answer accuracy on each problem to adjust question difficulty dynamically."
          </p>
          <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8125rem' }}>
            <span className="badge badge-neutral">Syllabus: NCERT & CBSE National Framework</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Target Mastery: {chapter.masteryTarget || 80}%</span>
          </div>
        </div>

        {/* THREE CORE STAGES SUMMARY CARDS */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <span className="eyebrow">YOUR ACTIVE MODULE</span>
              <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)' }}>
                {chapter.title} ({chapter.hindiTitle})
              </h2>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-sand)', fontWeight: 600 }}>
              CBSE Class {selectedClassId} {chapter.ncertChapterNo}
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Learn Stage Card */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-green">STAGE 1: LEARN</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    {chapter.learnSections ? `${chapter.learnSections.length} Concepts` : 'NCERT Theory'}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                  Core Concepts & Indian Analogies
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Explore verified NCERT textbook explanations, real-world Indian applications, and worked examples.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-action-green-text)', fontWeight: 600 }}>
                  <CheckCircle2 size={15} />
                  <span>Text-first lightweight content</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                <button
                  onClick={() => setActiveSubView('learn')}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Open Learn Reader</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Solve Stage Card */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-amber">STAGE 2: SOLVE</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    {chapter.practiceQuestions ? `${chapter.practiceQuestions.length} Questions` : 'Adaptive'}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                  Adaptive Practice Questions
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Genuine NCERT & Exemplar problems scaled by difficulty. Revisit fundamentals or unlock higher-order challenges.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-amber-text)', fontWeight: 600 }}>
                  <AlertTriangle size={15} />
                  <span>Real-time feedback & explanation</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                <button
                  onClick={() => setActiveSubView('solve')}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Start Adaptive Practice</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Test Stage Card */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-blue">STAGE 3: TEST</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>5 Questions</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                  Diagnostic Assessment
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  A calm formative assessment that diagnoses which specific conceptual competencies need reinforcement.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                  <Clock size={15} />
                  <span>Untimed diagnostic test</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                <button
                  onClick={() => setActiveSubView('test')}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Take Diagnostic Test</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
