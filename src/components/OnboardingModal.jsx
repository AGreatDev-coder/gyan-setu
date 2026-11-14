import React, { useState } from 'react';
import { 
  X, 
  User, 
  GraduationCap, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { DEMO_STUDENTS, CURRICULUM } from '../data/mockData';

export default function OnboardingModal({ 
  isOpen, 
  onClose, 
  currentRole, 
  setCurrentRole, 
  activeStudent, 
  setActiveStudent, 
  setActiveView 
}) {
  const [activeTab, setActiveTab] = useState('personas'); // 'personas' | 'custom'
  
  // Custom Profile Form state
  const [customClass, setCustomClass] = useState('8');
  const [customSubject, setCustomSubject] = useState('math');
  const [customName, setCustomName] = useState('Arjun Mehta');
  const [customGoal, setCustomGoal] = useState('Strengthen Foundations');

  if (!isOpen) return null;

  const handleSelectPersona = (student) => {
    setActiveStudent(student);
    setCurrentRole('student');
    setActiveView('student-dashboard', 'student');
    onClose();
  };

  const handleSelectTeacher = () => {
    setActiveView('teacher-dashboard', 'teacher');
    onClose();
  };

  const handleCreateCustom = (e) => {
    e.preventDefault();
    const newStudent = {
      id: 'custom-student',
      name: customName || 'Student',
      avatar: (customName || 'S').substring(0, 2).toUpperCase(),
      classId: customClass,
      section: 'A',
      school: 'Delhi Public School / Model Govt. School',
      selectedSubject: customSubject,
      activeChapterId: customSubject === 'science' ? `${customClass}-science` : `${customClass}-math`,
      preferredLanguage: 'en',
      overallMastery: 70,
      streakDays: 3,
      recentScore: '4/5',
      lastActive: 'Just now',
      learningGaps: [
        {
          topic: 'Targeted Practice',
          severity: 'medium',
          detail: `Custom learning track created for Class ${customClass} ${customSubject === 'math' ? 'Mathematics' : 'Science'}.`,
          suggestedRemedy: 'Begin with Level 1 practice.'
        }
      ],
      masteredTopics: ['Core Fundamentals'],
      inProgressTopics: ['Active Chapter Concepts'],
      adaptiveState: {
        consecutiveErrors: 0,
        currentPracticeLevel: 2,
        recommendedNextStep: {
          type: 'practice',
          title: `Class ${customClass} Foundational Review`,
          reason: `Personalized for your goal: "${customGoal}".`,
          actionLabel: 'Start Practice'
        }
      }
    };

    setActiveStudent(newStudent);
    setCurrentRole('student');
    setActiveView('student-dashboard');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(13, 11, 9, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      zIndex: 500
    }}>
      <div className="card fade-in" style={{
        backgroundColor: 'var(--bg-card-elevated)',
        maxWidth: '640px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '2.25rem',
        border: '1.5px solid var(--color-border)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--color-sand)', fontSize: '0.7rem' }}>
              DEMO PERSONA SWITCHER
            </span>
            <h2 style={{ fontSize: '1.65rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>
              Choose or Configure a Demo User
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
              Explore GyanSetu from multiple perspectives without requiring passwords or personal data.
            </p>
          </div>

          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm"
            style={{ padding: '0.35rem' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab switch between Preset Personas and Custom */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.75rem' }}>
          <button
            onClick={() => setActiveTab('personas')}
            className={`btn btn-sm ${activeTab === 'personas' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <span>Preset Personas (Recommended)</span>
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`btn btn-sm ${activeTab === 'custom' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <span>Configure Custom Profile</span>
          </button>
        </div>

        {activeTab === 'personas' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Student 1: Aarav Sharma */}
            <div
              onClick={() => handleSelectPersona(DEMO_STUDENTS[0])}
              style={{
                backgroundColor: activeStudent.id === 'student-1' ? 'var(--bg-subtle)' : 'var(--bg-card)',
                border: activeStudent.id === 'student-1' ? '2px solid var(--color-action-green)' : '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.15s'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                    Aarav Sharma
                  </strong>
                  <span className="badge badge-amber" style={{ fontSize: '0.68rem' }}>
                    Class 8-B • Math
                  </span>
                  <span className="badge badge-neutral" style={{ fontSize: '0.68rem' }}>
                    Mastery: 64%
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  State: Demonstrates sign transposition confusion in Linear Equations. Triggers remedial capsule.
                </div>
              </div>
              <ChevronRightIcon />
            </div>

            {/* Student 2: Priya Patel */}
            <div
              onClick={() => handleSelectPersona(DEMO_STUDENTS[1])}
              style={{
                backgroundColor: activeStudent.id === 'student-2' ? 'var(--bg-subtle)' : 'var(--bg-card)',
                border: activeStudent.id === 'student-2' ? '2px solid var(--color-action-green)' : '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.15s'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                    Priya Patel
                  </strong>
                  <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>
                    Class 9-A • Science
                  </span>
                  <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>
                    Mastery: 88%
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  State: High-achieving learner. Unlocks Level 3 acceleration & Newton's Law challenges.
                </div>
              </div>
              <ChevronRightIcon />
            </div>

            {/* Student 3: Rohan Verma */}
            <div
              onClick={() => handleSelectPersona(DEMO_STUDENTS[2])}
              style={{
                backgroundColor: activeStudent.id === 'student-3' ? 'var(--bg-subtle)' : 'var(--bg-card)',
                border: activeStudent.id === 'student-3' ? '2px solid var(--color-action-green)' : '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.15s'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                    Rohan Verma
                  </strong>
                  <span className="badge badge-terracotta" style={{ fontSize: '0.68rem' }}>
                    Class 8-B • Math
                  </span>
                  <span className="badge badge-terracotta" style={{ fontSize: '0.68rem' }}>
                    Mastery: 48%
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  State: High support needed. Repeated errors trigger guided Class 7 prerequisite fallback.
                </div>
              </div>
              <ChevronRightIcon />
            </div>

            {/* Teacher Persona */}
            <div
              onClick={handleSelectTeacher}
              style={{
                backgroundColor: currentRole === 'teacher' ? 'rgba(42, 106, 140, 0.15)' : 'var(--bg-card)',
                border: currentRole === 'teacher' ? '2px solid var(--color-blue)' : '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.15s'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '1rem', color: 'var(--color-blue-text)' }}>
                    Smt. Ananya Sen (Teacher View)
                  </strong>
                  <span className="badge badge-blue" style={{ fontSize: '0.68rem' }}>
                    Mathematics Teacher
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  View full Class 8-B cohort analytics, misconception heatmaps, and printable worksheets.
                </div>
              </div>
              <ChevronRightIcon />
            </div>

          </div>
        ) : (
          /* Custom Form */
          <form onSubmit={handleCreateCustom} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                Student Name / Alias
              </label>
              <input
                type="text"
                required
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FAF5ED',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                  Select Class
                </label>
                <select
                  value={customClass}
                  onChange={(e) => setCustomClass(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#FAF5ED',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="6">Class 6 (कक्षा 6)</option>
                  <option value="7">Class 7 (कक्षा 7)</option>
                  <option value="8">Class 8 (कक्षा 8)</option>
                  <option value="9">Class 9 (कक्षा 9)</option>
                  <option value="10">Class 10 (कक्षा 10)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                  Select Subject
                </label>
                <select
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#FAF5ED',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="math">Mathematics (गणित)</option>
                  <option value="science">Science (विज्ञान)</option>
                  <option value="english">English Grammar</option>
                  <option value="sst">Social Science</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                Primary Learning Goal
              </label>
              <select
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FAF5ED',
                  fontSize: '0.9rem'
                }}
              >
                <option value="Strengthen Foundations">Strengthen Foundational Concepts</option>
                <option value="Clear Specific Doubts">Catch Up on Weak Topics</option>
                <option value="Exam Preparation">CBSE/State Board Exam Revision</option>
                <option value="Challenge & Advanced">Challenge Myself with Olympiad Problems</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem' }}
            >
              <span>Launch Custom Learning Journey</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* Child Safety & Privacy Notice */}
        <div style={{
          marginTop: '1.75rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--color-border-light)',
          fontSize: '0.72rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.4
        }}>
          <strong>Privacy By Design:</strong> GyanSetu does not store real student phone numbers, email addresses, or biometric data. All demo entries are ephemeral and operate safely in local browser memory.
        </div>
      </div>
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-sand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
