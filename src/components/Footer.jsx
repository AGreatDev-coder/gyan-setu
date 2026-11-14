import React from 'react';
import { ShieldCheck, BookOpen, HeartHandshake, Compass, ExternalLink } from 'lucide-react';
import { I18N } from '../data/mockData';

export default function Footer({ currentLanguage, setActiveView, setCurrentRole, onNavigate }) {
  const t = I18N[currentLanguage] || I18N.en;
  const isHindi = currentLanguage === 'hi';

  const handleNav = (view, role) => {
    if (onNavigate) {
      onNavigate(view, role);
    } else {
      if (role && setCurrentRole) setCurrentRole(role);
      if (setActiveView) setActiveView(view);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#EFE5D5',
      borderTop: '1px solid var(--color-border)',
      paddingTop: '3.5rem',
      paddingBottom: '2.5rem',
      color: 'var(--color-text-secondary)',
      fontSize: '0.875rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand & Mission Column */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-card-elevated)',
                border: '1.5px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 18V7L12 3L20 7V18L12 21L4 18Z" stroke="var(--color-sand)" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="3" fill="#2EA334"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                {t.brandName}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              An adaptive learning architecture engineered for Indian secondary classrooms (Classes 6–10). Built to empower teachers with real-time insight and guide students through individual conceptual milestones.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--color-sand)', fontWeight: 600 }}>
              <ShieldCheck size={14} color="var(--color-action-green)" />
              <span>NEP 2020 Pedagogical Framework</span>
            </div>
          </div>

          {/* Core Cycle Columns */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {isHindi ? 'अनुकूली चक्र' : 'Adaptive Cycle'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <button 
                  onClick={() => handleNav('learn', 'student')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.875rem' }}
                >
                  {isHindi ? '1. अवधारणाएं सीखें (दैनिक सादृश्य)' : '1. Learn (Mandi Analogy & Concepts)'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solve', 'student')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.875rem' }}
                >
                  {isHindi ? '2. अभ्यास करें (अनुकूली कठिनाई)' : '2. Solve (Dynamic Difficulty Adjustment)'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('test', 'student')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.875rem' }}
                >
                  {isHindi ? '3. निदानात्मक परीक्षा (भ्रांति पहचान)' : '3. Test (Diagnostic Misconception Finder)'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('path', 'student')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.875rem' }}
                >
                  {isHindi ? '4. अनुकूली शिक्षण पथ' : '4. Dynamic Learning Path'}
                </button>
              </li>
            </ul>
          </div>

          {/* Teacher & School Empowerment */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {isHindi ? 'शिक्षक केंद्र' : 'Teacher Center'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <button 
                  onClick={() => handleNav('teacher-dashboard', 'teacher')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.875rem' }}
                >
                  {isHindi ? 'कक्षा 8-B रोस्टर (42 विद्यार्थी)' : 'Class 8-B Roster (42 Students)'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('teacher-dashboard', 'teacher')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.875rem' }}
                >
                  {isHindi ? 'सामान्य भ्रांतियां हीटमैप' : 'Common Misconceptions Heatmap'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('teacher-dashboard', 'teacher')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', fontSize: '0.875rem' }}
                >
                  {isHindi ? 'उपचारात्मक कार्यपत्रक (वर्कशीट)' : 'Targeted Remedial Worksheets'}
                </button>
              </li>
              <li>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                  Peer Grouping & Lesson Planning
                </span>
              </li>
            </ul>
          </div>

          {/* Indian Classroom Accessibility */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Indian Classroom Fit
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: '#FAF5ED', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.8125rem', marginBottom: '0.2rem' }}>
                  Low-Bandwidth Optimization
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Engineered with lightweight text-first payloads and offline-friendly data packets for rural & semi-urban 2G/3G connections.
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Supports CBSE, ICSE, and State Board syllabi for Classes 6 to 10.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platform Info & Educational Architecture Note */}
        <div style={{
          borderTop: '1px solid var(--color-border-light)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              © 2026 <strong>GyanSetu (ज्ञानसेतु)</strong>. {isHindi ? 'सभी अधिकार सुरक्षित।' : 'All rights reserved.'}
            </div>
            <div>
              {isHindi ? 'एनईपी 2020 अनुरूप अनुकूली शिक्षण मंच • कक्षा 6–10' : 'NEP 2020 Aligned Adaptive Learning Architecture • Classes 6–10'}
            </div>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <strong>{isHindi ? 'शैक्षणिक वास्तुकला सूचना:' : 'Educational Architecture:'}</strong> {isHindi ? 'ज्ञानसेतु वैचारिक भ्रांतियों की पहचान के लिए शैक्षणिक नियमों का उपयोग करता है। यह शिक्षकों के मूल्यांकन का समर्थन करता है और छात्रों की व्यक्तिगत गति से सीखने में सहायता करता है।' : 'GyanSetu uses deterministic, pedagogically validated rule engines to identify conceptual misconceptions and empower teachers with actionable classroom insights. Built for Indian educational environments and curriculum standards.'}
          </div>
        </div>
      </div>
    </footer>
  );
}
