import React, { useState } from 'react';
import { 
  ArrowLeft, 
  GitFork, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  AlertTriangle, 
  BookOpen, 
  RefreshCw, 
  BarChart3, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function AdaptivePathView({ 
  studentProfile, 
  activeChapter,
  selectedSubjectId,
  selectedClassId,
  onBackToDashboard, 
  onGoToLearn, 
  onGoToSolve, 
  onGoToTest 
}) {
  // Interactive Simulation Mode to explore rule engine branches
  const [activeSimulation, setActiveSimulation] = useState('current'); // 'current' | 'remedial' | 'accelerated'

  const isScience = selectedSubjectId === 'science' || activeChapter?.subjectId === 'science' || (studentProfile?.selectedSubject === 'science' && !selectedSubjectId);

  // Dynamic pathway steps based on subject and active simulation
  const pathways = isScience ? {
    current: {
      statusLabel: `Active Student Diagnosis (${studentProfile?.name || 'Science Learner'})`,
      ruleTrigger: 'Hesitation in identifying action-reaction contact force pairs on distinct bodies.',
      recommendationSummary: `Recommended: 3-min Interactive Science Capsule on contact vs non-contact force pairs before proceeding to multi-step ${activeChapter?.title || 'Science'} problems.`,
      steps: [
        {
          id: 1,
          stage: 'STAGE 1: LEARN',
          title: `${activeChapter?.title || 'Core Science Foundations'}: Physical Principles`,
          status: 'completed',
          detail: 'Mastered foundational concepts and physical definitions. 100% understanding confirmed.'
        },
        {
          id: 2,
          stage: 'STAGE 2: SOLVE',
          title: 'Level 1 Foundational Calculations (Units & Laws)',
          status: 'completed',
          detail: '4 of 4 foundational questions solved accurately.'
        },
        {
          id: 3,
          stage: 'INTERVENTION CAPSULE',
          title: 'Remedial Micro-Lesson: Action-Reaction Contact Pairs on Distinct Bodies',
          status: 'active',
          isRecommendation: true,
          detail: 'Why this is recommended: Tripped on distinguishing balanced internal forces from simultaneous mutual interaction on distinct bodies. A 3-minute visual review will solidify this.',
          action: 'Start Science Capsule'
        },
        {
          id: 4,
          stage: 'STAGE 2: SOLVE',
          title: 'Level 2 Application: Conservation Laws & Everyday Collisions',
          status: 'upcoming',
          detail: 'Applying governing equations and physical laws to multi-step real-world problems.'
        },
        {
          id: 5,
          stage: 'STAGE 3: TEST',
          title: `${activeChapter?.title || 'Science'} Diagnostic Assessment`,
          status: 'upcoming',
          detail: '5-question comprehensive mastery evaluation.'
        }
      ]
    },
    remedial: {
      statusLabel: 'Simulated Path: Repeated Errors Pattern',
      ruleTrigger: 'Student encountered 2 consecutive mistakes on identifying balanced vs unbalanced forces.',
      recommendationSummary: 'Triggered Prerequisite Fallback: Return to Class 7/8 Science fundamentals before resuming advanced dynamics.',
      steps: [
        {
          id: 1,
          stage: 'PREREQUISITE REPAIR',
          title: 'Class 7/8 Refresher: Fundamentals of Force, Pressure & Units',
          status: 'active',
          isRecommendation: true,
          detail: 'Why this is recommended: When fundamental physical intuition is shaky, quantitative science feels abstract. Solidifying net force vectors and physical units first builds rock-solid intuition.',
          action: 'Review Science Foundations'
        },
        {
          id: 2,
          stage: 'STAGE 1: LEARN',
          title: 'Guided Free-Body Diagrams with Indian Real-World Analogies',
          status: 'upcoming',
          detail: 'Visual models showing equal and opposite forces in static equilibrium.'
        },
        {
          id: 3,
          stage: 'STAGE 2: SOLVE',
          title: 'Level 1 Guided Practice with Step-by-Step Prompts',
          status: 'upcoming',
          detail: 'Immediate hint on every step to build confidence.'
        }
      ]
    },
    accelerated: {
      statusLabel: `Simulated Path: Accelerated Fast-Track (${studentProfile?.name || 'Priya Patel'})`,
      ruleTrigger: 'Student achieved 100% accuracy on first attempt across Level 1 & 2 science problems.',
      recommendationSummary: 'Triggered Acceleration: Bypass repetitive drills directly to National Science Olympiad (NSO) challenges & Class 11 preview.',
      steps: [
        {
          id: 1,
          stage: 'STAGE 1 & 2',
          title: `${activeChapter?.title || 'Core Science'} Principles Mastery`,
          status: 'completed',
          detail: 'Completed with 96% accuracy.'
        },
        {
          id: 2,
          stage: 'ACCELERATION CHALLENGE',
          title: 'National Science Olympiad (NSO) Inquiry & Multi-Force Analysis',
          status: 'active',
          isRecommendation: true,
          detail: 'Why this is recommended: Consistent conceptual mastery demonstrated. Unlocking multi-step scientific investigation problems to prevent disengagement.',
          action: 'Start Olympiad Challenge'
        },
        {
          id: 3,
          stage: 'ADVANCED PREVIEW',
          title: 'Class 11 Physics Bridge: Vector Resolution and Two-Dimensional Kinematics',
          status: 'upcoming',
          detail: 'Resolving forces and vectors into perpendicular components (Fx = F cos θ).'
        }
      ]
    }
  } : {
    current: {
      statusLabel: `Active Student Diagnosis (${studentProfile?.name || 'Aarav Sharma'})`,
      ruleTrigger: 'Mixed performance in Practice Question 3 (Transposition sign reversal).',
      recommendationSummary: 'Recommended: 3-min Mandi Balance Scale reminder before attempting Level 2 variables-on-both-sides equations.',
      steps: [
        {
          id: 1,
          stage: 'STAGE 1: LEARN',
          title: 'What is an Equation? Mandi Balance Scale',
          status: 'completed',
          detail: 'Mastered concept of equality maintenance. 100% understanding confirmed.'
        },
        {
          id: 2,
          stage: 'STAGE 2: SOLVE',
          title: 'Level 1 Foundational Equations (One Step)',
          status: 'completed',
          detail: '4 of 4 foundational questions solved accurately.'
        },
        {
          id: 3,
          stage: 'INTERVENTION CAPSULE',
          title: 'Remedial Micro-Lesson: Negative Sign Transposition',
          status: 'active',
          isRecommendation: true,
          detail: 'Why this is recommended: Tripped on -8 becoming +8 when crossing equality. A 3-minute visual review will lock this in before your upcoming test.',
          action: 'Start Remedial Capsule'
        },
        {
          id: 4,
          stage: 'STAGE 2: SOLVE',
          title: 'Level 2 Application: Variables on Both Sides',
          status: 'upcoming',
          detail: '5x + 20 = 2x + 80. Grouping like terms and multi-step isolation.'
        },
        {
          id: 5,
          stage: 'STAGE 3: TEST',
          title: 'Class 8 Chapter 2 Diagnostic Assessment',
          status: 'upcoming',
          detail: '5-question comprehensive mastery evaluation.'
        }
      ]
    },
    remedial: {
      statusLabel: 'Simulated Path: Repeated Errors Pattern',
      ruleTrigger: 'Student encountered 2 consecutive mistakes on inverse operations.',
      recommendationSummary: 'Triggered Prerequisite Fallback: Return to Class 7 Integer Addition/Subtraction before resuming equations.',
      steps: [
        {
          id: 1,
          stage: 'PREREQUISITE REPAIR',
          title: 'Class 7 Refresher: Rules of Integers (+ and -)',
          status: 'active',
          isRecommendation: true,
          detail: 'Why this is recommended: When fundamental number sense is shaky, algebra feels confusing. Solidifying negative numbers first prevents long-term maths anxiety.',
          action: 'Review Class 7 Foundations'
        },
        {
          id: 2,
          stage: 'STAGE 1: LEARN',
          title: 'Guided Balance Scale with Concrete Blocks',
          status: 'upcoming',
          detail: 'Physical visual models showing cancellation of opposite charges.'
        },
        {
          id: 3,
          stage: 'STAGE 2: SOLVE',
          title: 'Level 1 Guided Practice with Step-by-Step Prompts',
          status: 'upcoming',
          detail: 'Immediate hint on every step to build confidence.'
        }
      ]
    },
    accelerated: {
      statusLabel: `Simulated Path: Accelerated Fast-Track (${studentProfile?.name || 'Priya Patel'})`,
      ruleTrigger: 'Student achieved 100% accuracy on first attempt across Level 1 & 2.',
      recommendationSummary: 'Triggered Acceleration: Bypass repetitive exercises directly to Level 3 Challenge & Class 9 preview.',
      steps: [
        {
          id: 1,
          stage: 'STAGE 1 & 2',
          title: 'Linear Equations Core Mastery',
          status: 'completed',
          detail: 'Completed with 96% accuracy.'
        },
        {
          id: 2,
          stage: 'ACCELERATION CHALLENGE',
          title: 'Olympiad & Higher-Order Thinking Word Problems',
          status: 'active',
          isRecommendation: true,
          detail: 'Why this is recommended: Consistent mastery demonstrated. Unlocking multi-variable speed-time-distance train equations to prevent disengagement.',
          action: 'Start Level 3 Challenge'
        },
        {
          id: 3,
          stage: 'ADVANCED PREVIEW',
          title: 'Class 9 Bridge: Introduction to Linear Equations in Two Variables',
          status: 'upcoming',
          detail: 'Cartesian coordinate plotting (2x + 3y = 12).'
        }
      ]
    }
  };

  const activePath = pathways[activeSimulation];

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: 'calc(100vh - 5rem)', paddingBottom: '4rem' }}>
      
      {/* Header Bar */}
      <div style={{
        backgroundColor: 'var(--bg-subtle)',
        borderBottom: '1px solid var(--color-border-light)',
        paddingTop: '0.85rem',
        paddingBottom: '0.85rem'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onBackToDashboard}
              className="btn btn-ghost btn-sm"
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
            <div style={{ height: '20px', width: '1px', backgroundColor: 'var(--color-border-light)' }}></div>
            <div>
              <span className="eyebrow" style={{ fontSize: '0.68rem' }}>ADAPTIVE PATH ENGINE</span>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                Personalized Learning Sequence
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>
              Deterministic Rule Engine Active
            </span>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', maxWidth: '860px' }}>
        
        {/* Interactive Simulation Switcher */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={18} color="var(--color-sand)" />
              <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Adaptive Rule Simulator
              </strong>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
              Test how GyanSetu branches for different learner behaviors:
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            <button
              onClick={() => setActiveSimulation('current')}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: activeSimulation === 'current' ? '2px solid var(--color-action-green)' : '1px solid var(--color-border-light)',
                backgroundColor: activeSimulation === 'current' ? 'var(--bg-card-elevated)' : 'transparent',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                1. {studentProfile?.name || 'Student'}'s Actual State
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                {isScience ? 'Contact force misconception → Micro-capsule' : 'Single transposition error → Micro-capsule'}
              </div>
            </button>

            <button
              onClick={() => setActiveSimulation('remedial')}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: activeSimulation === 'remedial' ? '2px solid var(--color-amber)' : '1px solid var(--color-border-light)',
                backgroundColor: activeSimulation === 'remedial' ? 'var(--bg-card-elevated)' : 'transparent',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                2. Repeated Errors State
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                {isScience ? 'Triggers Class 7/8 science fallback' : 'Triggers Class 7 integer fallback'}
              </div>
            </button>

            <button
              onClick={() => setActiveSimulation('accelerated')}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: activeSimulation === 'accelerated' ? '2px solid var(--color-blue)' : '1px solid var(--color-border-light)',
                backgroundColor: activeSimulation === 'accelerated' ? 'var(--bg-card-elevated)' : 'transparent',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                3. High Mastery State
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                {isScience ? 'Fast-tracks directly to Science Olympiad' : 'Fast-tracks directly to Olympiad level'}
              </div>
            </button>
          </div>
        </div>

        {/* Active Route Explanation Card */}
        <div className="card" style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--color-border-light)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>
              {activePath.statusLabel}
            </span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
            Transparent Rule Rationale
          </h2>

          <div style={{
            backgroundColor: '#FAF5ED',
            borderLeft: '4px solid var(--color-action-green)',
            padding: '1rem 1.25rem',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
            marginBottom: '1rem'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-sand)', fontWeight: 700, textTransform: 'uppercase' }}>
              Observable Performance Trigger:
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
              {activePath.ruleTrigger}
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
            {activePath.recommendationSummary}
          </p>
        </div>

        {/* Visual Timeline of Steps */}
        <div style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '3rem' }}>
          
          {/* Vertical connecting line */}
          <div style={{
            position: 'absolute',
            left: '27px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            backgroundColor: 'var(--color-border)'
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {activePath.steps.map((st, idx) => {
              const isCompleted = st.status === 'completed';
              const isActive = st.status === 'active';

              return (
                <div key={st.id} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', position: 'relative' }}>
                  
                  {/* Step Node Icon */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: isCompleted 
                      ? 'var(--color-action-green)' 
                      : isActive 
                      ? '#FFFFFF' 
                      : '#EFE5D5',
                    border: isActive 
                      ? '3px solid var(--color-action-green)' 
                      : '2px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 2,
                    boxShadow: isActive ? '0 0 0 4px rgba(46, 163, 52, 0.2)' : 'none'
                  }}>
                    {isCompleted ? (
                      <CheckCircle2 size={18} color="#FFFFFF" />
                    ) : isActive ? (
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-action-green)' }}></div>
                    ) : (
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>{idx + 1}</span>
                    )}
                  </div>

                  {/* Step Content Card */}
                  <div className="card" style={{
                    flex: 1,
                    backgroundColor: isActive ? 'var(--bg-card-elevated)' : 'var(--bg-card)',
                    border: isActive ? '2px solid var(--color-action-green)' : '1px solid var(--color-border-light)',
                    padding: '1.5rem',
                    boxShadow: isActive ? 'var(--shadow-md)' : 'none'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span className={`badge ${isActive ? 'badge-green' : isCompleted ? 'badge-neutral' : 'badge-neutral'}`} style={{ fontSize: '0.7rem' }}>
                        {st.stage}
                      </span>
                      {isActive && (
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-action-green-text)', textTransform: 'uppercase' }}>
                          ● Current Priority
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                      {st.title}
                    </h3>

                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: isActive ? '1rem' : '0' }}>
                      {st.detail}
                    </p>

                    {isActive && (
                      <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--color-border-light)' }}>
                        <button
                          onClick={onGoToLearn}
                          className="btn btn-primary btn-sm"
                          style={{ gap: '0.4rem' }}
                        >
                          <span>{st.action || 'Continue Step'}</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
