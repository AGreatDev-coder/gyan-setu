import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  LogOut, 
  KeyRound,
  Sun,
  Moon
} from 'lucide-react';
import { I18N } from '../data/mockData';

export default function Header({ 
  currentUser,
  onNavigate,
  onGoToLogin,
  onLogout,
  currentRole, 
  setCurrentRole, 
  activeView, 
  setActiveView, 
  currentLanguage, 
  setCurrentLanguage, 
  darkMode,
  onToggleDarkMode,
  lowBandwidth, 
  setLowBandwidth,
  studentProfile,
  onOpenDemoSelector
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = I18N[currentLanguage] || I18N.en;

  // Only English and Hindi supported as requested
  const languagesList = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' }
  ];

  const handleNav = (view, requiredRole) => {
    if (onNavigate) {
      onNavigate(view, requiredRole);
    } else {
      if (requiredRole && setCurrentRole) setCurrentRole(requiredRole);
      if (setActiveView) setActiveView(view);
    }
    setMobileMenuOpen(false);
  };

  const isStudentSection = ['student-dashboard', 'learn', 'solve', 'test', 'path'].includes(activeView);
  const isTeacherSection = activeView === 'teacher-dashboard';
  const isHindi = currentLanguage === 'hi';

  return (
    <header style={{
      backgroundColor: 'rgba(250, 246, 239, 0.96)',
      borderBottom: '1px solid rgba(185, 167, 141, 0.28)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: lowBandwidth ? 'none' : 'blur(12px)',
      boxShadow: '0 1px 4px rgba(90, 68, 52, 0.03)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        height: '4.5rem' 
      }}>
        
        {/* Minimal Clean Brand Logo */}
        <div 
          onClick={() => handleNav('landing')}
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            backgroundColor: 'var(--bg-card-elevated)',
            border: '1.2px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 3px rgba(90, 68, 52, 0.08)',
            flexShrink: 0
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 18V7L12 3L20 7V18L12 21L4 18Z" stroke="var(--color-sand)" strokeWidth="1.8" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" fill="#2EA334"/>
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.45rem', 
              fontWeight: 600, 
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}>
              GyanSetu
            </span>
            <span style={{ 
              fontSize: '0.825rem', 
              color: 'var(--color-sand)', 
              fontWeight: 500
            }}>
              ज्ञानसेतु
            </span>
          </div>
        </div>

        {/* Clean, Uncluttered Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '0.45rem' }}>
          <button 
            onClick={() => handleNav('landing')} 
            style={{ 
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              fontWeight: activeView === 'landing' ? 600 : 500,
              color: activeView === 'landing' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              backgroundColor: activeView === 'landing' ? 'rgba(177, 156, 122, 0.14)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {isHindi ? 'अवलोकन' : 'Overview'}
          </button>

          <button 
            onClick={() => handleNav('student-dashboard', 'student')} 
            style={{ 
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              fontWeight: isStudentSection ? 600 : 500,
              color: isStudentSection ? 'var(--color-action-green-text)' : 'var(--color-text-secondary)',
              backgroundColor: isStudentSection ? 'rgba(46, 163, 52, 0.1)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {isHindi ? 'विद्यार्थी पोर्टल' : 'Student Portal'}
          </button>

          <button 
            onClick={() => handleNav('teacher-dashboard', 'teacher')} 
            style={{ 
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9rem',
              fontWeight: isTeacherSection ? 600 : 500,
              color: isTeacherSection ? 'var(--color-blue)' : 'var(--color-text-secondary)',
              backgroundColor: isTeacherSection ? 'rgba(42, 106, 140, 0.1)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {isHindi ? 'शिक्षक केंद्र' : 'Faculty Center'}
          </button>
        </nav>

        {/* Right Action Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          
          {/* Dark Mode Minimal Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border-light)',
              background: 'transparent',
              color: darkMode ? '#F3B57B' : 'var(--color-text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.15s ease',
              flexShrink: 0
            }}
            title={darkMode ? (isHindi ? 'लाइट मोड में बदलें' : 'Switch to Light theme') : (isHindi ? 'डार्क मोड में बदलें' : 'Switch to Dark theme')}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Minimal Language Selector (English & Hindi) */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <select
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                background: 'transparent',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                padding: '0.35rem 1.7rem 0.35rem 0.7rem',
                cursor: 'pointer',
                outline: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238C7664' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center'
              }}
              aria-label="Select Language"
            >
              {languagesList.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
          </div>

          {/* User Session Chip / Sign In CTA */}
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              {/* Clean Human-Designed User Chip */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.3rem 0.75rem 0.3rem 0.35rem',
                  backgroundColor: currentUser.role === 'teacher' ? 'rgba(42, 106, 140, 0.08)' : 'rgba(46, 163, 52, 0.08)',
                  border: `1px solid ${currentUser.role === 'teacher' ? 'rgba(42, 106, 140, 0.2)' : 'rgba(46, 163, 52, 0.2)'}`,
                  borderRadius: 'var(--radius-full)'
                }}
                title={currentUser.role === 'teacher' ? `Faculty ID: ${currentUser.employeeId}` : `Roll No: ${currentUser.rollNo || '04'}`}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: currentUser.role === 'teacher' ? 'var(--color-blue)' : 'var(--color-action-green)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {currentUser.avatar || (currentUser.name ? currentUser.name[0] : (currentUser.role === 'teacher' ? 'T' : 'S'))}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {currentUser.name}
                  </span>
                  <span style={{ 
                    fontSize: '0.68rem', 
                    fontWeight: 600, 
                    color: currentUser.role === 'teacher' ? 'var(--color-blue)' : 'var(--color-action-green-text)' 
                  }}>
                    {currentUser.role === 'teacher' 
                      ? (isHindi ? 'शिक्षक' : 'Faculty') 
                      : (isHindi 
                          ? `कक्षा ${currentUser.classId || '8'}${currentUser.rollNo ? ` • रोल: ${currentUser.rollNo}` : ''}`
                          : `Class ${currentUser.classId || '8'}${currentUser.rollNo ? ` • Roll: ${currentUser.rollNo}` : ''}`
                        )}
                  </span>
                </div>
              </div>

              {/* Minimal Sign Out Button */}
              <button
                onClick={onLogout}
                style={{ 
                  background: 'none',
                  border: 'none',
                  padding: '0.35rem 0.55rem',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'color 0.15s ease'
                }}
                title={isHindi ? 'सत्र समाप्त करें' : 'Sign out of this session'}
              >
                <LogOut size={14} />
                <span>{isHindi ? 'लॉगआउट' : 'Sign out'}</span>
              </button>
            </div>
          ) : (
            /* Logged Out: Clean Sign In CTA */
            <button
              onClick={() => {
                if (onGoToLogin) onGoToLogin('student');
                else handleNav('login', 'student');
              }}
              className="btn btn-primary btn-sm"
              style={{ 
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                gap: '0.4rem',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <KeyRound size={14} />
              <span>{isHindi ? 'लॉगिन' : 'Sign In'}</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{ 
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '0.4rem',
              cursor: 'pointer',
              color: 'var(--color-text-primary)'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--color-border-light)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem'
        }}>
          {currentUser && (
            <div style={{
              padding: '0.65rem 0.85rem',
              backgroundColor: currentUser.role === 'teacher' ? 'rgba(42, 106, 140, 0.08)' : 'rgba(46, 163, 52, 0.08)',
              borderRadius: 'var(--radius-sm)',
              border: `1px solid ${currentUser.role === 'teacher' ? 'rgba(42, 106, 140, 0.2)' : 'rgba(46, 163, 52, 0.2)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.35rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: currentUser.role === 'teacher' ? 'var(--color-blue)' : 'var(--color-action-green)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  {currentUser.avatar || (currentUser.name ? currentUser.name[0] : 'U')}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                    {currentUser.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                    {currentUser.role === 'teacher' 
                      ? (isHindi ? `शिक्षक • ${currentUser.employeeId || 'KV-TEACH'}` : `Faculty • ${currentUser.employeeId || 'KV-TEACH'}`)
                      : (isHindi ? `कक्षा ${currentUser.classId || '8'} • रोल: ${currentUser.rollNo || '04'}` : `Class ${currentUser.classId || '8'} • Roll: ${currentUser.rollNo || '04'}`)}
                  </div>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.72rem', padding: '0.25rem 0.55rem' }}
              >
                {isHindi ? 'लॉगआउट' : 'Sign out'}
              </button>
            </div>
          )}

          <button 
            onClick={() => handleNav('landing')}
            className="btn btn-secondary"
            style={{ justifyContent: 'flex-start', fontWeight: 500, padding: '0.6rem 0.9rem' }}
          >
            <span>{isHindi ? 'अवलोकन' : 'Overview'}</span>
          </button>

          <button 
            onClick={() => handleNav('student-dashboard', 'student')}
            className="btn btn-secondary"
            style={{ justifyContent: 'flex-start', fontWeight: 500, padding: '0.6rem 0.9rem' }}
          >
            <span>
              {isHindi ? 'विद्यार्थी पोर्टल' : 'Student Portal'} {currentUser?.role === 'student' ? `(${isHindi ? 'कक्षा' : 'Class'} ${currentUser.classId})` : ''}
            </span>
          </button>

          <button 
            onClick={() => handleNav('teacher-dashboard', 'teacher')}
            className="btn btn-secondary"
            style={{ justifyContent: 'flex-start', fontWeight: 500, padding: '0.6rem 0.9rem' }}
          >
            <span>{isHindi ? 'शिक्षक केंद्र' : 'Faculty Center'}</span>
          </button>

          {!currentUser && (
            <button 
              onClick={() => {
                if (onGoToLogin) onGoToLogin('student');
                else handleNav('login', 'student');
                setMobileMenuOpen(false);
              }}
              className="btn btn-primary"
              style={{ justifyContent: 'center', gap: '0.45rem', marginTop: '0.4rem', padding: '0.65rem' }}
            >
              <KeyRound size={15} />
              <span>{isHindi ? 'पोर्टल लॉगिन' : 'Sign In to Portal'}</span>
            </button>
          )}
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
