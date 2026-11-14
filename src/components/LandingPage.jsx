import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  RefreshCw, 
  Check, 
  ChevronRight, 
  Clock, 
  Cpu, 
  FileText,
  AlertTriangle
} from 'lucide-react';
import { I18N } from '../data/mockData';

export default function LandingPage({ 
  onStartStudent, 
  onStartTeacher, 
  currentLanguage, 
  lowBandwidth 
}) {
  const t = I18N[currentLanguage] || I18N.en;

  // Interactive Hero Preview State: shows an instant adaptive feedback simulation
  const [demoAnswer, setDemoAnswer] = useState(null); // 'correct' | 'mistake' | null

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh' }}>
      
      {/* HERO SECTION */}
      <section style={{
        paddingTop: '4.5rem',
        paddingBottom: '5rem',
        borderBottom: '1px solid var(--color-border-light)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left Column: Editorial Headline & Value Prop */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-sand)', letterSpacing: '0.14em' }}>
                  {currentLanguage === 'hi' ? 'एनईपी 2020 शिक्षाशास्त्र संरचना • कक्षा 6–10' : 'NEP 2020 PEDAGOGICAL ARCHITECTURE • CLASSES 6–10'}
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.35rem, 4.5vw, 3.6rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                color: 'var(--color-text-primary)',
                lineHeight: 1.16,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}>
                {currentLanguage === 'hi' 
                  ? 'हर विद्यार्थी अपनी गति से सीखता है। अब हर कक्षा उसके अनुसार ढल सकती है।' 
                  : 'Every student learns at their own pace. Now, every classroom can adapt to it.'}
              </h1>

              <p style={{
                fontSize: '1.125rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '540px'
              }}>
                {currentLanguage === 'hi' ? (
                  <>
                    <strong>ज्ञानसेतु (GyanSetu)</strong> समझता है कि प्रत्येक छात्र क्या सीख रहा है, वास्तविक समय में वैचारिक भ्रांतियों की पहचान करता है, और अगले सर्वोत्तम अध्ययन चरण की सिफारिश करता है।
                  </>
                ) : (
                  <>
                    <strong>GyanSetu (ज्ञानसेतु)</strong> discovers what each student understands, diagnoses hidden conceptual misconceptions in real time, and recommends the next best learning step. Built to empower Indian teachers, not replace them.
                  </>
                )}
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button 
                  onClick={onStartStudent}
                  className="btn btn-primary btn-lg"
                  style={{ gap: '0.65rem' }}
                >
                  <span>{currentLanguage === 'hi' ? 'विद्यार्थी अध्ययन शुरू करें' : 'Start Student Journey (Demo)'}</span>
                  <ArrowRight size={18} />
                </button>

                <button 
                  onClick={onStartTeacher}
                  className="btn btn-secondary btn-lg"
                  style={{ gap: '0.65rem' }}
                >
                  <Users size={18} color="var(--color-text-secondary)" />
                  <span>{currentLanguage === 'hi' ? 'शिक्षकों के लिए देखें' : 'Explore for Teachers'}</span>
                </button>
              </div>

              {/* Trust & Constraint Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginTop: '2.5rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--color-border-light)',
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="var(--color-action-green)" />
                  <span>{currentLanguage === 'hi' ? 'सीबीएसई एवं राज्य बोर्ड पाठ्यक्रम' : 'CBSE & State Board Curricula'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="var(--color-action-green)" />
                  <span>{currentLanguage === 'hi' ? 'हल्का 2G/3G टेक्स्ट-फर्स्ट इंजन' : 'Lightweight 2G/3G Text-First Engine'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="var(--color-action-green)" />
                  <span>{currentLanguage === 'hi' ? 'बिना सार्वजनिक रैंकिंग, गरिमापूर्ण सुरक्षा' : 'Zero Public Shaming or Leaderboards'}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Adaptive Showcase */}
            <div>
              <div className="card" style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1.5px solid var(--color-border)',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}>
                {/* Header of Preview Card */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <span className="eyebrow" style={{ color: 'var(--color-sand)', fontSize: '0.7rem' }}>
                      LIVE ADAPTIVE ENGINE PREVIEW
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginTop: '0.2rem' }}>
                      How GyanSetu Responds to Mistakes
                    </h3>
                  </div>
                  <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                    Class 8 • Math
                  </span>
                </div>

                <div style={{
                  backgroundColor: 'var(--bg-card-elevated)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  border: '1px solid var(--color-border-subtle)',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
                    Student: Aarav Sharma • Question 3 of 6
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                    Solve for x: &nbsp; <code style={{ backgroundColor: '#F4EBDD', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>3x - 8 = 16</code>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                    Simulate how the adaptive rule engine branches depending on Aarav's answer:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <button
                      onClick={() => setDemoAnswer('mistake')}
                      style={{
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: demoAnswer === 'mistake' ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border-light)',
                        backgroundColor: demoAnswer === 'mistake' ? 'var(--color-terracotta-subtle)' : '#FAF6F0',
                        color: 'var(--color-text-primary)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Option B: x = 2.66</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Common sign slip: subtracted 8 from 16</div>
                    </button>

                    <button
                      onClick={() => setDemoAnswer('correct')}
                      style={{
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: demoAnswer === 'correct' ? '2px solid var(--color-action-green)' : '1px solid var(--color-border-light)',
                        backgroundColor: demoAnswer === 'correct' ? 'var(--color-action-green-subtle)' : '#FAF6F0',
                        color: 'var(--color-text-primary)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Option A: x = 8</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Correct inverse: added 8 to both sides</div>
                    </button>
                  </div>
                </div>

                {/* Adaptive Feedback Display */}
                {demoAnswer === 'mistake' && (
                  <div className="fade-in" style={{
                    backgroundColor: 'var(--color-amber-subtle)',
                    border: '1px solid rgba(198, 116, 40, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <AlertTriangle size={17} color="var(--color-amber)" />
                      <strong style={{ fontSize: '0.875rem', color: 'var(--color-amber-text)' }}>
                        Misconception Detected: Negative Transposition
                      </strong>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                      Aarav subtracted 8 instead of adding it. Rather than marking a discouraging "Wrong" and moving on, GyanSetu branches to:
                    </p>
                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-primary)',
                      borderLeft: '3px solid var(--color-amber)'
                    }}>
                      <strong>Adaptive Action:</strong> 1-Minute Mandi Scale refresher on inverse operations before re-attempting Level 1 question.
                    </div>
                  </div>
                )}

                {demoAnswer === 'correct' && (
                  <div className="fade-in" style={{
                    backgroundColor: 'var(--color-action-green-subtle)',
                    border: '1px solid rgba(46, 163, 52, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <CheckCircle2 size={17} color="var(--color-action-green)" />
                      <strong style={{ fontSize: '0.875rem', color: 'var(--color-action-green-text)' }}>
                        Concept Mastered: Single Step Inverse
                      </strong>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                      Accurately inverted the negative constant to positive! Mastery index bumped to 72%.
                    </p>
                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-primary)',
                      borderLeft: '3px solid var(--color-action-green)'
                    }}>
                      <strong>Adaptive Action:</strong> Unlocks Level 2 Application: "Variables on Both Sides (5x + 20 = 2x + 80)".
                    </div>
                  </div>
                )}

                {!demoAnswer && (
                  <div style={{ textAlign: 'center', padding: '0.75rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    ↑ Click an option above to see how the system adapts in real-time.
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION: The Reality of Indian Classrooms */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        borderBottom: '1px solid var(--color-border-light)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-sand)', marginBottom: '0.75rem' }}>
              THE CLASSROOM CHALLENGE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
              1 Teacher. 45 Students. 40 Minutes. One pace cannot fit all.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              In typical Indian secondary classrooms across government, aided, and private schools, students arrive with wildly divergent prior foundations. Front-of-class lecturing inadvertently leaves students behind or slows down rapid learners.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Learner 1: Needs Support */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-terracotta-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <HelpCircle size={22} color="var(--color-terracotta)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>
                The Hesitant Learner
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Struggled with positive and negative integers in Class 7. Now in Class 8, linear equations feel impossible. Hesitates to raise a hand in a crowded room out of peer embarrassment.
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-terracotta-text)', fontWeight: 600 }}>
                GyanSetu Solution: Silently diagnoses the Class 7 integer gap and provides a 2-minute visual refresher without shame.
              </div>
            </div>

            {/* Learner 2: The Fast Grasper */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-action-green-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Sparkles size={22} color="var(--color-action-green)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>
                The Accelerated Learner
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Grasps the textbook exercise within the first 5 minutes of class. Becomes disengaged or distracted while waiting for the rest of the classroom to finish repetitive questions.
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-action-green-text)', fontWeight: 600 }}>
                GyanSetu Solution: Automatically unlocks Level 3 Higher-Order Thinking challenges and Olympiad-style math puzzles.
              </div>
            </div>

            {/* Persona 3: The Dedicated Teacher */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-blue-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Users size={22} color="var(--color-blue)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>
                The Overburdened Teacher
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Balances syllabus completion, exam grading, attendance, and administrative duties for 4 to 5 sections daily. Wants to help every student, but lacks granular visibility into where each child struggles.
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-blue-text)', fontWeight: 600 }}>
                GyanSetu Solution: Groups students by exact misconception and generates ready-to-print 1-page targeted remedial worksheets.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE ADAPTIVE CYCLE: Learn → Solve → Test */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        borderBottom: '1px solid var(--color-border-light)',
        backgroundColor: 'var(--bg-subtle)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-sand)', marginBottom: '0.75rem' }}>
              THE GYANKARAM ENGINE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
              Learn. Solve. Test. The Continuous Cycle of Mastery.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Rather than jumping straight to high-stakes examinations, GyanSetu structures every chapter into three interconnected, lightweight learning phases.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}>
            {/* Step 1: Learn */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card-elevated)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>STAGE 1</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-sand)', fontWeight: 600 }}>10–15 Mins</span>
              </div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-warm-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid var(--color-border-light)'
              }}>
                <BookOpen size={22} color="var(--color-text-primary)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>
                1. Learn Concepts
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Bite-sized, text-first explanations rooted in Indian context. Learn algebraic equilibrium through local vegetable mandi balance scales and cricket run-rate equations.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={14} color="var(--color-action-green)" />
                  <span>Worked examples with step-by-step reasoning</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={14} color="var(--color-action-green)" />
                  <span>"Think Like a Mathematician" visual alerts</span>
                </li>
              </ul>
            </div>

            {/* Step 2: Solve */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card-elevated)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="badge badge-amber" style={{ fontSize: '0.75rem' }}>STAGE 2</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-sand)', fontWeight: 600 }}>Adaptive</span>
              </div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-warm-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid var(--color-border-light)'
              }}>
                <RefreshCw size={22} color="var(--color-amber)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>
                2. Solve & Practise
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Practice problems that dynamically scale in difficulty. Level 1 ensures core definitions, Level 2 applies multi-step isolation, and Level 3 challenges abstract thinking.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={14} color="var(--color-action-green)" />
                  <span>Immediate pedagogical explanations for errors</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={14} color="var(--color-action-green)" />
                  <span>Transparent topic mastery recalculation</span>
                </li>
              </ul>
            </div>

            {/* Step 3: Test */}
            <div className="card" style={{ backgroundColor: 'var(--bg-card-elevated)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>STAGE 3</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-sand)', fontWeight: 600 }}>Diagnostic</span>
              </div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-warm-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid var(--color-border-light)'
              }}>
                <BarChart3 size={22} color="var(--color-blue)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>
                3. Diagnostic Assessment
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Short, calm, 5-question evaluation that doesn't just output a percentage. It diagnoses exact conceptual strengths and pinpoints the precise sub-topic requiring revision.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={14} color="var(--color-action-green)" />
                  <span>Detailed subarea diagnostic breakdown</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={14} color="var(--color-action-green)" />
                  <span>No shaming labels; actionable recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHER EMPOWERMENT SECTION (Prominent, High-Contrast Editorial Panel) */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: '#0D0B09',
        color: '#FAF5ED'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-sand)', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>
                TEACHER-CENTRIC PHILOSOPHY
              </span>
              <h2 style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
                fontFamily: 'var(--font-serif)',
                color: '#FAF5ED',
                lineHeight: 1.2,
                marginBottom: '1.5rem'
              }}>
                Technology will never replace Indian teachers. GyanSetu multiplies their classroom impact.
              </h2>
              <p style={{
                fontSize: '1.05rem',
                color: '#D4C4B0',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}>
                In a class of 45 students, a teacher cannot spend 20 minutes with every child daily. GyanSetu does the heavy diagnostic lifting in the background, identifying which 12 students struggle with the exact same algebraic sign error, so the teacher can run a focused 5-minute micro-lesson.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ marginTop: '0.2rem', color: 'var(--color-action-green)' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong style={{ color: '#FAF5ED', fontSize: '0.95rem' }}>Common Misconception Heatmap:</strong>
                    <p style={{ color: '#B9A78D', fontSize: '0.85rem', margin: 0 }}>
                      Instantly see which concept in Chapter 2 tripped up the most students before starting tomorrow's class.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ marginTop: '0.2rem', color: 'var(--color-action-green)' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong style={{ color: '#FAF5ED', fontSize: '0.95rem' }}>Targeted 1-Page Printable Worksheets:</strong>
                    <p style={{ color: '#B9A78D', fontSize: '0.85rem', margin: 0 }}>
                      Generate custom practice sheets for students with uneven home internet access to solve on paper.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ marginTop: '0.2rem', color: 'var(--color-action-green)' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong style={{ color: '#FAF5ED', fontSize: '0.95rem' }}>Data-Informed Peer Tutoring:</strong>
                    <p style={{ color: '#B9A78D', fontSize: '0.85rem', margin: 0 }}>
                      System suggests pairing learners who have mastered a topic with peers who need supportive reinforcement.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={onStartTeacher}
                className="btn btn-primary btn-lg"
                style={{ backgroundColor: 'var(--color-action-green)' }}
              >
                <span>Launch Teacher Command Center (Class 8-B)</span>
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Teacher Dashboard Snapshot Preview Card */}
            <div style={{
              backgroundColor: '#1E1914',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(185, 167, 141, 0.3)',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(185, 167, 141, 0.2)', paddingBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-sand)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    CLASS COMMAND SNAPSHOT
                  </span>
                  <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: '#FAF5ED' }}>
                    Class 8-B • 42 Students
                  </div>
                </div>
                <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                  Avg Mastery: 67%
                </span>
              </div>

              {/* Mastery Distribution preview */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#D4C4B0', marginBottom: '0.5rem' }}>
                  <span>Class Performance Distribution</span>
                  <span>18 Mastered • 16 Progressing • 8 Support</span>
                </div>
                <div style={{ display: 'flex', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: '43%', backgroundColor: '#2EA334' }} title="18 Mastered"></div>
                  <div style={{ width: '38%', backgroundColor: '#C67428' }} title="16 Progressing"></div>
                  <div style={{ width: '19%', backgroundColor: '#B8472C' }} title="8 Need Support"></div>
                </div>
              </div>

              {/* Alert box for teacher */}
              <div style={{
                backgroundColor: 'rgba(184, 71, 44, 0.15)',
                border: '1px solid rgba(184, 71, 44, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F38A73', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  <AlertTriangle size={15} />
                  <span>Flagged Misconception Alert</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#EFE5D5', lineHeight: 1.4 }}>
                  <strong>14 students</strong> confused signs when transposing negative terms in Linear Equations.
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-sand)', marginTop: '0.5rem' }}>
                  → Recommended: 10-min pan-balance visual demo tomorrow.
                </div>
              </div>

              {/* Mini roster preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.85rem', backgroundColor: '#29221C', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.825rem', color: '#FAF5ED' }}>
                    Aarav Sharma <span style={{ color: 'var(--color-sand)', fontSize: '0.75rem' }}>(Roll 1)</span>
                  </div>
                  <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>64% Mastery</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.85rem', backgroundColor: '#29221C', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.825rem', color: '#FAF5ED' }}>
                    Kavya Sundaram <span style={{ color: 'var(--color-sand)', fontSize: '0.75rem' }}>(Roll 10)</span>
                  </div>
                  <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>95% Mastery</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INDIAN CLASSROOM FIT: Multilingual, Low-Bandwidth, Boards */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        borderBottom: '1px solid var(--color-border-light)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-sand)', marginBottom: '0.75rem' }}>
              BUILT FOR INDIAN REALITIES
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
              Engineered for Bharat: High pedagogical rigor, low device overhead.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Educational software in India cannot assume high-end laptops or lightning-fast optical fiber broadband. GyanSetu was designed from day one to operate smoothly across constraints.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                Multilingual Support
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                Toggle seamlessly between English and हिन्दी (Hindi) UI labels. Helps vernacular-medium students transition smoothly into bilingual scientific terminology.
              </p>
              <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                English & हिन्दी Active
              </span>
            </div>

            <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                2G/3G Low-Data Mode
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                Text-first lesson delivery avoids multi-megabyte video buffering. Toggle the top bar "Low Data Mode" to strip heavy animations and run smoothly on budget smartphones.
              </p>
              <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>
                Sub-50KB Payload Targets
              </span>
            </div>

            <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                Syllabus Architecture
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                Mapped directly to NCERT competencies for Classes 6 to 10. Extensible data schemas allow state boards (SCERT Maharashtra, Karnataka, Telangana, UP) to plug in regional topics.
              </p>
              <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                Classes 6, 7, 8, 9, 10
              </span>
            </div>

            <div className="card" style={{ backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                Dignified Student Safety
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                No public student ranking ladders, no peer shaming, and zero predatory gamification loops. Protects mental wellbeing while fostering authentic intrinsic curiosity.
              </p>
              <span className="badge badge-blue" style={{ fontSize: '0.72rem' }}>
                Student Mental Health First
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section style={{
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-subtle)'
      }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
            Experience the adaptive bridge today.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2.25rem', lineHeight: 1.6 }}>
            Explore the full end-to-end learning journey as student Aarav Sharma, or step into the shoes of teacher Smt. Ananya Sen to view real-time class diagnostics.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={onStartStudent}
              className="btn btn-primary btn-lg"
              style={{ gap: '0.65rem' }}
            >
              <span>Launch Student Adaptive Path</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onStartTeacher}
              className="btn btn-secondary btn-lg"
            >
              <span>Explore Teacher Center</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
