import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  ShieldAlert, 
  GraduationCap, 
  Users, 
  ArrowRight, 
  ArrowLeft,
  AlertCircle,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  BookOpen,
  KeyRound
} from 'lucide-react';
import { authService, REGISTERED_ACCOUNTS } from '../services/authService';

export default function LoginPage({ 
  initialRole = 'student',
  requiredRole = null,
  securityNotice = null,
  onLoginSuccess,
  onBackToHome 
}) {
  const [roleTab, setRoleTab] = useState(requiredRole || initialRole || 'student');
  
  // Student form state
  const [studentName, setStudentName] = useState('');
  const [studentIdNo, setStudentIdNo] = useState('');
  const [studentClass, setStudentClass] = useState('8');
  const [studentSubject, setStudentSubject] = useState('math');
  const [studentPassword, setStudentPassword] = useState('student@123');
  
  // Teacher form state
  const [teacherName, setTeacherName] = useState('');
  const [teacherIdNo, setTeacherIdNo] = useState('');
  const [teacherSchool, setTeacherSchool] = useState('Kendriya Vidyalaya, Sector 4');
  const [teacherPassword, setTeacherPassword] = useState('teacher@123');

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (requiredRole) {
      setRoleTab(requiredRole);
    } else if (initialRole) {
      setRoleTab(initialRole);
    }
    setErrorMessage('');
  }, [requiredRole, initialRole]);

  // Pre-fill demo profiles on demand
  const handleSelectStudentDemo = (demo) => {
    setStudentName(demo.name);
    setStudentIdNo(demo.rollNo);
    setStudentClass(demo.classId);
    setStudentSubject(demo.selectedSubject);
    setStudentPassword('student@123');
    setErrorMessage('');
  };

  const handleSelectTeacherDemo = (demo) => {
    setTeacherName(demo.name);
    setTeacherIdNo(demo.employeeId);
    setTeacherSchool(demo.school);
    setTeacherPassword('teacher@123');
    setErrorMessage('');
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    setTimeout(() => {
      const result = authService.login({
        role: 'student',
        name: studentName,
        idNo: studentIdNo,
        classId: studentClass,
        subject: studentSubject,
        password: studentPassword
      });
      setLoading(false);

      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setErrorMessage(result.error);
      }
    }, 200);
  };

  const handleTeacherSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    setTimeout(() => {
      const result = authService.login({
        role: 'teacher',
        name: teacherName,
        idNo: teacherIdNo,
        password: teacherPassword
      });
      setLoading(false);

      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setErrorMessage(result.error);
      }
    }, 200);
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 4.5rem)',
      backgroundColor: 'var(--bg-warm-ivory)',
      paddingTop: '2.5rem',
      paddingBottom: '4rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            onClick={onBackToHome}
            className="btn btn-ghost btn-sm"
            style={{ gap: '0.4rem', color: 'var(--color-text-secondary)' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-action-green-text)', fontWeight: 600 }}>
            <ShieldCheck size={16} />
            <span>RBAC Security Gateway</span>
          </div>
        </div>

        {/* Security Warning Banner if an unauthorized attempt was intercepted */}
        {securityNotice && (
          <div style={{
            backgroundColor: 'var(--color-amber-subtle)',
            border: '1.5px solid rgba(198, 116, 40, 0.4)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.875rem',
            color: 'var(--color-amber-text)'
          }}>
            <ShieldAlert size={20} color="var(--color-amber)" style={{ flexShrink: 0 }} />
            <div>
              <strong>Security Alert:</strong> {securityNotice}
            </div>
          </div>
        )}

        {/* Main Login Card */}
        <div className="card" style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: 0,
          overflow: 'hidden'
        }}>
          
          {/* Top Brand Banner */}
          <div style={{
            backgroundColor: 'var(--bg-subtle)',
            borderBottom: '1px solid var(--color-border-light)',
            padding: '1.75rem 2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              backgroundColor: roleTab === 'teacher' ? '#2A6A8C' : '#2EA334',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              marginBottom: '0.75rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <KeyRound size={24} />
            </div>
            
            <h1 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
              GyanSetu Portal Login
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
              Authenticate with your <strong>Full Name</strong> and <strong>ID Number</strong> for secure access.
            </p>
          </div>

          {/* Role Switching Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderBottom: '1.5px solid var(--color-border-light)',
            backgroundColor: 'var(--bg-subtle)'
          }}>
            <button
              onClick={() => {
                if (requiredRole && requiredRole !== 'student') return;
                setRoleTab('student');
                setErrorMessage('');
              }}
              style={{
                padding: '1rem',
                border: 'none',
                borderBottom: roleTab === 'student' ? '3px solid var(--color-action-green)' : '3px solid transparent',
                backgroundColor: roleTab === 'student' ? 'var(--bg-card)' : 'transparent',
                fontWeight: roleTab === 'student' ? 700 : 500,
                color: roleTab === 'student' ? 'var(--color-action-green-text)' : 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: requiredRole && requiredRole !== 'student' ? 'not-allowed' : 'pointer',
                opacity: requiredRole && requiredRole !== 'student' ? 0.5 : 1,
                fontSize: '0.95rem'
              }}
            >
              <GraduationCap size={18} />
              <span>Student Login (विद्यार्थी)</span>
            </button>

            <button
              onClick={() => {
                setRoleTab('teacher');
                setErrorMessage('');
              }}
              style={{
                padding: '1rem',
                border: 'none',
                borderBottom: roleTab === 'teacher' ? '3px solid var(--color-blue)' : '3px solid transparent',
                backgroundColor: roleTab === 'teacher' ? 'var(--bg-card)' : 'transparent',
                fontWeight: roleTab === 'teacher' ? 700 : 500,
                color: roleTab === 'teacher' ? 'var(--color-blue)' : 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              <Users size={18} />
              <span>Teacher Login (शिक्षक)</span>
            </button>
          </div>

          {/* Form Content Area */}
          <div style={{ padding: '2rem' }}>
            
            {/* Error Message Alert */}
            {errorMessage && (
              <div style={{
                backgroundColor: '#FDEDEB',
                border: '1.5px solid #E88372',
                borderRadius: 'var(--radius-sm)',
                padding: '0.85rem 1rem',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                color: '#8A1F11',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            {roleTab === 'student' ? (
              /* STUDENT LOGIN FORM */
              <form onSubmit={handleStudentSubmit}>
                
                {/* Student Name */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Student Full Name (विद्यार्थी का नाम): *
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Aarav Sharma or your name"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    required
                  />
                </div>

                {/* Student ID / Roll No */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Student ID No. / Roll No. (विद्यार्थी आईडी सं. / रोल नंबर): *
                  </label>
                  <input
                    type="text"
                    value={studentIdNo}
                    onChange={(e) => setStudentIdNo(e.target.value)}
                    placeholder="e.g. KV-8B-04 or STU-101"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                      textTransform: 'uppercase'
                    }}
                    required
                  />
                </div>

                {/* Class & Subject Dropdowns */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                      Grade / Class (कक्षा):
                    </label>
                    <select
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.875rem',
                        fontWeight: 600
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
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                      Active Subject (विषय):
                    </label>
                    <select
                      value={studentSubject}
                      onChange={(e) => setStudentSubject(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}
                    >
                      <option value="math">Mathematics (गणित)</option>
                      <option value="science">Science (विज्ञान)</option>
                    </select>
                  </div>
                </div>

                {/* Password / PIN */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      Security Password / PIN (पासवर्ड):
                    </label>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      Default: student@123
                    </span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={studentPassword}
                      onChange={(e) => setStudentPassword(e.target.value)}
                      placeholder="Enter security password"
                      style={{
                        width: '100%',
                        padding: '0.65rem 2.5rem 0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-sand)',
                        cursor: 'pointer'
                      }}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.8rem 1.25rem',
                    fontSize: '0.95rem',
                    gap: '0.5rem'
                  }}
                >
                  <Lock size={16} />
                  <span>{loading ? 'Authenticating...' : 'Sign In as Student'}</span>
                  <ArrowRight size={16} />
                </button>

                {/* Quick Auto-Fill Demo Accounts */}
                <div style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--color-border-light)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    <Sparkles size={15} color="var(--color-sand)" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)' }}>
                      Quick Auto-Fill (Tap to fill Name & ID):
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {REGISTERED_ACCOUNTS.students.map(demo => (
                      <div
                        key={demo.id}
                        onClick={() => handleSelectStudentDemo(demo)}
                        style={{
                          backgroundColor: studentIdNo === demo.rollNo ? '#FAF5ED' : '#FFFFFF',
                          border: studentIdNo === demo.rollNo ? '1.5px solid var(--color-action-green)' : '1px solid var(--color-border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.15s'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                            {demo.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            ID: <strong>{demo.rollNo}</strong> • Class {demo.classId}-{demo.section || 'A'} • {demo.selectedSubject === 'science' ? 'Science' : 'Mathematics'}
                          </div>
                        </div>
                        <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>
                          Auto Fill
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </form>
            ) : (
              /* TEACHER LOGIN FORM */
              <form onSubmit={handleTeacherSubmit}>
                
                {/* Teacher Name */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Faculty Teacher Full Name (शिक्षक का नाम): *
                  </label>
                  <input
                    type="text"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    placeholder="e.g. Smt. Ananya Sen or your name"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    required
                  />
                </div>

                {/* Teacher Employee ID */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Faculty / Employee ID No. (शिक्षक कर्मचारी आईडी सं.): *
                  </label>
                  <input
                    type="text"
                    value={teacherIdNo}
                    onChange={(e) => setTeacherIdNo(e.target.value)}
                    placeholder="e.g. KV-TEACH-8924 or FAC-101"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                      textTransform: 'uppercase'
                    }}
                    required
                  />
                </div>

                {/* School */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    School / Vidyalaya (विद्यालय):
                  </label>
                  <input
                    type="text"
                    value={teacherSchool}
                    onChange={(e) => setTeacherSchool(e.target.value)}
                    placeholder="Kendriya Vidyalaya, Sector 4"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Teacher Password */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      Faculty Security Password (पासवर्ड):
                    </label>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      Default: teacher@123
                    </span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={teacherPassword}
                      onChange={(e) => setTeacherPassword(e.target.value)}
                      placeholder="Enter security password"
                      style={{
                        width: '100%',
                        padding: '0.65rem 2.5rem 0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--color-border)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-sand)',
                        cursor: 'pointer'
                      }}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-blue)',
                    padding: '0.8rem 1.25rem',
                    fontSize: '0.95rem',
                    gap: '0.5rem'
                  }}
                >
                  <Lock size={16} />
                  <span>{loading ? 'Authenticating...' : 'Sign In as Faculty Teacher'}</span>
                  <ArrowRight size={16} />
                </button>

                {/* Quick Auto-Fill Demo Teacher Account */}
                <div style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--color-border-light)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    <Sparkles size={15} color="var(--color-sand)" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)' }}>
                      Quick Auto-Fill (Tap to fill Faculty Name & ID):
                    </span>
                  </div>

                  <div
                    onClick={() => handleSelectTeacherDemo(REGISTERED_ACCOUNTS.teachers[0])}
                    style={{
                      backgroundColor: teacherIdNo === REGISTERED_ACCOUNTS.teachers[0].employeeId ? '#FAF5ED' : '#FFFFFF',
                      border: teacherIdNo === REGISTERED_ACCOUNTS.teachers[0].employeeId ? '1.5px solid var(--color-blue)' : '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                        {REGISTERED_ACCOUNTS.teachers[0].name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        ID: <strong>{REGISTERED_ACCOUNTS.teachers[0].employeeId}</strong> • {REGISTERED_ACCOUNTS.teachers[0].designation}
                      </div>
                    </div>
                    <span className="badge badge-blue" style={{ fontSize: '0.68rem' }}>
                      Auto Fill
                    </span>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Card Footer Security Indicator */}
          <div style={{
            backgroundColor: '#FAF5ED',
            borderTop: '1px solid var(--color-border-light)',
            padding: '0.85rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            color: 'var(--color-text-muted)'
          }}>
            <ShieldCheck size={14} color="var(--color-action-green)" />
            <span>Role-Based Access Control (RBAC) • Credentials Protected Under NEP 2020 Guidelines</span>
          </div>

        </div>
      </div>
    </div>
  );
}

