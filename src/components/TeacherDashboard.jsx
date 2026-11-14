import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  AlertTriangle, 
  Search, 
  Filter, 
  Printer, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ArrowLeft, 
  HelpCircle,
  TrendingUp,
  X,
  Share2,
  Download
} from 'lucide-react';
import { DEMO_TEACHER_CLASS, I18N } from '../data/mockData';

export default function TeacherDashboard({ 
  currentLanguage, 
  onSwitchToStudent,
  currentUser,
  onGoToLogin
}) {
  const t = I18N[currentLanguage] || I18N.en;
  const classData = DEMO_TEACHER_CLASS;

  // Filter state
  const [filterTier, setFilterTier] = useState('all'); // 'all' | 'needs-support' | 'progressing' | 'mastered'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Selected student for detailed diagnosis drawer
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // Printable Worksheet modal state
  const [worksheetModalOpen, setWorksheetModalOpen] = useState(false);

  // RBAC Defense-In-Depth Security Guard
  if (!currentUser || currentUser.role !== 'teacher') {
    return (
      <div style={{ minHeight: 'calc(100vh - 5rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', backgroundColor: 'var(--bg-warm-ivory)' }}>
        <div className="card" style={{ maxWidth: '540px', textAlign: 'center', padding: '2.5rem 2rem', border: '1.5px solid #E88372', backgroundColor: '#FFF9F7', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#FDEDEB', color: '#D9381E', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <AlertTriangle size={36} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.75rem', color: '#8A1F11' }}>
            Faculty Access Required (शिक्षक प्रमाणीकरण आवश्यक)
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            This section contains confidential Class 8-B student performance records, misconceptions diagnostic heatmaps, and formative assessments.
            {currentUser ? ` You are currently signed in as student "${currentUser.name}".` : ' You are currently not signed in.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onGoToLogin ? onGoToLogin('teacher', 'Teacher credentials required to access Teacher Center.') : onSwitchToStudent?.()}
              className="btn btn-primary"
              style={{ backgroundColor: 'var(--color-blue)', gap: '0.5rem' }}
            >
              <span>Sign In with Teacher ID & Name</span>
            </button>
            <button 
              onClick={onSwitchToStudent}
              className="btn btn-secondary"
            >
              <span>Return to Student Section</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filtered roster
  const filteredRoster = classData.studentsRoster.filter(st => {
    const matchesTier = filterTier === 'all' || st.status === filterTier;
    const matchesSearch = st.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          st.flag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTier && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: 'calc(100vh - 5rem)', paddingBottom: '4rem' }}>
      
      {/* Teacher Top Command Bar */}
      <div style={{
        backgroundColor: '#FAF5ED',
        borderBottom: '1px solid var(--color-border-light)',
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>
                {currentLanguage === 'hi' ? 'शिक्षक नियंत्रण केंद्र' : 'TEACHER COMMAND CENTER'}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {classData.school}
              </span>
            </div>
            <h1 style={{ fontSize: '1.65rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
              {classData.assignedClass} • {currentLanguage === 'hi' ? (classData.subject === 'Mathematics' ? 'गणित' : 'विज्ञान') : classData.subject}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setWorksheetModalOpen(true)}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.45rem' }}
            >
              <Printer size={15} />
              <span>{currentLanguage === 'hi' ? 'उपचारात्मक कार्यपत्रक बनाएं' : 'Generate Remedial Worksheet'}</span>
            </button>

            <button
              onClick={onSwitchToStudent}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.45rem' }}
            >
              <Users size={15} />
              <span>{currentLanguage === 'hi' ? 'विद्यार्थी पोर्टल पर जाएं' : 'Switch to Student Portal'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem' }}>
        
        {/* TOP LEVEL METRICS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          {/* Card 1: Total Enrolled */}
          <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-sand)', textTransform: 'uppercase', fontWeight: 700 }}>
              Total Students
            </div>
            <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)', margin: '0.25rem 0' }}>
              {classData.totalStudents}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Kendriya Vidyalaya • Section B
            </div>
          </div>

          {/* Card 2: Average Mastery */}
          <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-sand)', textTransform: 'uppercase', fontWeight: 700 }}>
              Class Average Mastery
            </div>
            <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-action-green-text)', margin: '0.25rem 0' }}>
              {classData.averageClassMastery}%
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Chapter 2: Linear Equations
            </div>
          </div>

          {/* Card 3: Needs Attention */}
          <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-terracotta-text)', textTransform: 'uppercase', fontWeight: 700 }}>
              Needs Remedial Support
            </div>
            <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-terracotta)', margin: '0.25rem 0' }}>
              {classData.masteryTiers.needsSupport.count} students
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-terracotta-text)' }}>
              Specific sign & bracket slips flagged
            </div>
          </div>

          {/* Card 4: Mastered */}
          <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-action-green-text)', textTransform: 'uppercase', fontWeight: 700 }}>
              Independent Mastery
            </div>
            <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-action-green)', margin: '0.25rem 0' }}>
              {classData.masteryTiers.mastered.count} students
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-action-green-text)' }}>
              Ready for Level 3 & Olympiad tasks
            </div>
          </div>
        </div>

        {/* COMMON MISCONCEPTIONS IN CLASS 8-B (Crucial Teacher Empowerment Tool) */}
        <div className="card" style={{
          backgroundColor: '#FCFAF6',
          border: '1.5px solid var(--color-border)',
          padding: '2rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <span className="eyebrow">DIAGNOSTIC HEATMAP FOR TOMORROW'S CLASS</span>
              <h2 style={{ fontSize: '1.65rem', fontFamily: 'var(--font-serif)', marginTop: '0.25rem' }}>
                Classroom Misconceptions & Recommended Teaching Actions
              </h2>
            </div>
            <span className="badge badge-amber" style={{ fontSize: '0.75rem' }}>
              Aggregate of 42 Students
            </span>
          </div>

          <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            Rather than re-teaching the entire chapter, the diagnostic engine isolates the exact conceptual nodes where multiple students stumble:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {classData.commonGaps.map(gap => (
              <div
                key={gap.id}
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                    {gap.title}
                  </strong>
                  <span className={`badge ${gap.severity === 'high' ? 'badge-terracotta' : 'badge-amber'}`} style={{ fontSize: '0.7rem' }}>
                    {gap.affectedStudentsCount} students ({gap.percentage})
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.45, marginBottom: '0.85rem' }}>
                  {gap.description}
                </p>

                <div style={{
                  backgroundColor: 'var(--bg-card-elevated)',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  borderLeft: '3px solid var(--color-sand)',
                  color: 'var(--color-text-primary)'
                }}>
                  <strong>Teacher Action:</strong> {gap.teacherRecommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STUDENT ROSTER WITH SEARCH, FILTERS & DRILL-DOWN */}
        <div className="card" style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--color-border-light)',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span className="eyebrow">INDIVIDUAL STUDENT MONITORING</span>
              <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginTop: '0.2rem' }}>
                Class 8-B Student Roster
              </h2>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setFilterTier('all')}
                className={`btn btn-sm ${filterTier === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              >
                All ({classData.studentsRoster.length})
              </button>
              <button
                onClick={() => setFilterTier('needs-support')}
                className={`btn btn-sm ${filterTier === 'needs-support' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ backgroundColor: filterTier === 'needs-support' ? 'var(--color-terracotta)' : undefined }}
              >
                Needs Support (3)
              </button>
              <button
                onClick={() => setFilterTier('progressing')}
                className={`btn btn-sm ${filterTier === 'progressing' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ backgroundColor: filterTier === 'progressing' ? 'var(--color-amber)' : undefined }}
              >
                Progressing (3)
              </button>
              <button
                onClick={() => setFilterTier('mastered')}
                className={`btn btn-sm ${filterTier === 'mastered' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ backgroundColor: filterTier === 'mastered' ? 'var(--color-action-green)' : undefined }}
              >
                Mastered (4)
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search size={16} color="var(--color-sand)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search student by name or conceptual flag (e.g. 'Aarav', 'Transposition')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.6rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                backgroundColor: '#FAF5ED',
                fontSize: '0.875rem',
                color: 'var(--color-text-primary)'
              }}
            />
          </div>

          {/* Roster Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border-light)', color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Roll</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Student Name</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Mastery</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Practice Accuracy</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Identified Concept Flag</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRoster.map(st => (
                  <tr 
                    key={st.id}
                    style={{
                      borderBottom: '1px solid var(--color-border-subtle)',
                      transition: 'background-color 0.15s',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedStudent(st)}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FAF5ED'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                      #{st.roll}
                    </td>
                    <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {st.name}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 700, color: st.mastery >= 80 ? 'var(--color-action-green-text)' : st.mastery >= 60 ? 'var(--color-amber-text)' : 'var(--color-terracotta-text)' }}>
                          {st.mastery}%
                        </span>
                        <div style={{ width: '50px' }} className="progress-track">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${st.mastery}%`,
                              backgroundColor: st.mastery >= 80 ? 'var(--color-action-green)' : st.mastery >= 60 ? 'var(--color-amber)' : 'var(--color-terracotta)'
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--color-text-secondary)' }}>
                      {st.accuracy} ({st.attempts} tries)
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span className={`badge ${st.status === 'mastered' ? 'badge-green' : st.status === 'progressing' ? 'badge-amber' : 'badge-terracotta'}`}>
                        {st.flag}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedStudent(st); }}
                        className="btn btn-ghost btn-sm"
                        style={{ color: 'var(--color-sand)' }}
                      >
                        <span>Diagnose</span>
                        <ChevronRight size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      {/* STUDENT DETAIL MODAL / DRAWER */}
      {selectedStudent && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(13, 11, 9, 0.6)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          justifyContent: 'flex-end',
          zIndex: 200
        }}>
          <div className="fade-in" style={{
            width: '100%',
            maxWidth: '560px',
            backgroundColor: '#FCFAF6',
            height: '100%',
            overflowY: 'auto',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Drawer Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '1.25rem' }}>
                <div>
                  <span className="badge badge-neutral" style={{ fontSize: '0.72rem', marginBottom: '0.35rem' }}>
                    Roll #{selectedStudent.roll} • Class 8-B
                  </span>
                  <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>
                    {selectedStudent.name}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedStudent(null)}
                  className="btn btn-ghost btn-sm"
                  style={{ padding: '0.35rem' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mastery Stats Bar */}
              <div style={{
                backgroundColor: '#FAF5ED',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1.75rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Topic Mastery
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: selectedStudent.mastery >= 80 ? 'var(--color-action-green-text)' : 'var(--color-amber-text)' }}>
                    {selectedStudent.mastery}%
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Practice Accuracy
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {selectedStudent.accuracy}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Questions Attempted
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {selectedStudent.attempts}
                  </div>
                </div>
              </div>

              {/* Diagnostic Gap Diagnosis */}
              <div style={{ marginBottom: '1.75rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-sand)', marginBottom: '0.4rem' }}>
                  ACTIVE MISCONCEPTION ANALYSIS
                </span>
                <div style={{
                  backgroundColor: 'var(--color-amber-subtle)',
                  border: '1px solid rgba(198, 116, 40, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-amber-text)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                    {selectedStudent.flag}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    In practice sessions, {selectedStudent.name} demonstrates a recurring tendency to transpose terms across the equality sign without inverting sign polarity.
                  </p>
                </div>
              </div>

              {/* Recommended Pedagogical Teacher Action */}
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-sand)', marginBottom: '0.4rem' }}>
                  SUGGESTED TEACHER INTERVENTION
                </span>
                <div style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-action-green)" style={{ marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                      <strong>Peer Pairing:</strong> Pair {selectedStudent.name} with Kavya Sundaram (Roll 10) for 10 minutes on balance-scale exercises.
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-action-green)" style={{ marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                      <strong>Printable Sheet:</strong> Hand out the 1-page transposition worksheet (included in portal).
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setWorksheetModalOpen(true)}
                className="btn btn-primary"
                style={{ flex: 1, gap: '0.4rem' }}
              >
                <Printer size={16} />
                <span>Print Remedial Sheet</span>
              </button>

              <button
                onClick={() => setSelectedStudent(null)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE REMEDIAL WORKSHEET MODAL */}
      {worksheetModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(13, 11, 9, 0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          zIndex: 300
        }}>
          <div className="card fade-in" style={{
            backgroundColor: 'var(--bg-card-elevated)',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2.5rem',
            border: '2px solid var(--color-border)'
          }}>
            {/* Header of Printable Sheet */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sand)' }}>
                  KENDRIYA VIDYALAYA • REMEDIAL MATHEMATICS CLINIC
                </div>
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>
                  Targeted Practice Sheet: Algebraic Transposition
                </h2>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                  Student: {selectedStudent ? selectedStudent.name : 'Aarav Sharma'} • Class 8-B • Date: ____________
                </div>
              </div>

              <button
                onClick={() => setWorksheetModalOpen(false)}
                className="btn btn-ghost btn-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* Teacher Note on Sheet */}
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.85rem 1.25rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              <strong>Teacher Note:</strong> Remember the Mandi Balance Scale! Whatever you subtract on the left side must be added or inverted on the right side. LHS = RHS.
            </div>

            {/* Questions on Printable Sheet */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ paddingBottom: '1rem', borderBottom: '1px dashed #B9A78D' }}>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  Q1. Solve for y step-by-step: &nbsp; <code>5y - 15 = 20</code>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8C7664' }}>Show steps: (1) Invert -15 &nbsp; (2) Divide coefficient</div>
                <div style={{ height: '40px' }}></div>
              </div>

              <div style={{ paddingBottom: '1rem', borderBottom: '1px dashed #B9A78D' }}>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  Q2. Collect variables on one side: &nbsp; <code>7x + 12 = 3x + 36</code>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8C7664' }}>Hint: Subtract 3x from both sides first.</div>
                <div style={{ height: '40px' }}></div>
              </div>

              <div style={{ paddingBottom: '1rem', borderBottom: '1px dashed #B9A78D' }}>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  Q3. Real-World Word Problem: A cricket team scored 180 runs. Opener Rohit scored 30 runs, and the remaining 3 batsmen scored equal runs (x). Write and solve the equation.
                </div>
                <div style={{ height: '45px' }}></div>
              </div>
            </div>

            {/* Print / Download Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Format: 1-Page A4 Printable PDF Compatible
              </span>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <Printer size={16} />
                  <span>Print Worksheet (A4)</span>
                </button>

                <button
                  onClick={() => setWorksheetModalOpen(false)}
                  className="btn btn-secondary"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
