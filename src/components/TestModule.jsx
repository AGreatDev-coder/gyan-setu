import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  BarChart3, 
  BookOpen, 
  AlertTriangle, 
  Clock, 
  Sparkles, 
  GitFork, 
  Check 
} from 'lucide-react';
import { CURRICULUM } from '../data/mockData';
import { curriculumApi } from '../services/curriculumApi';

export default function TestModule({ 
  studentProfile, 
  activeChapter,
  onBackToDashboard, 
  onGoToLearn, 
  onGoToPath 
}) {
  const isScience = activeChapter?.subjectId === 'science' || studentProfile?.selectedSubject === 'science';
  const defaultChapter = isScience ? {
    id: 'default-science',
    title: 'Force and Pressure',
    hindiTitle: 'बल तथा दाब',
    ncertChapterNo: 'Chapter 8',
    assessment: { questions: [] }
  } : {
    id: 'default-math',
    title: 'Linear Equations in One Variable',
    hindiTitle: 'एक चर वाले रैखिक समीकरण',
    ncertChapterNo: 'Chapter 2',
    assessment: { questions: [] }
  };
  const chapter = activeChapter || defaultChapter;
  const assessment = chapter.assessment || {
    id: 'test-default',
    title: `Diagnostic Test: ${chapter.title}`,
    questions: []
  };
  const questions = assessment.questions || [];

  const [currentStep, setCurrentStep] = useState(0); // 0 to 4
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [qIdx]: optionId }
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset when chapter changes
  useEffect(() => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setIsCompleted(false);
  }, [chapter?.id]);

  const handleSelectOption = (optId) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentStep]: optId
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      
      // Calculate score and persist via curriculumApi
      let correctCount = 0;
      questions.forEach((q, idx) => {
        const selected = selectedAnswers[idx];
        const opt = q.options?.find(o => o.id === selected);
        if (opt?.isCorrect) correctCount++;
      });
      const pct = Math.round((correctCount / (questions.length || 1)) * 100);

      curriculumApi.saveProgress(studentProfile.id, chapter.id, {
        testScore: `${correctCount}/${questions.length}`,
        testPercentage: pct,
        testDate: new Date().toLocaleDateString()
      });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      const selected = selectedAnswers[idx];
      const opt = q.options?.find(o => o.id === selected);
      if (opt?.isCorrect) correctCount++;
    });
    return correctCount;
  };

  const score = calculateScore();
  const percentage = Math.round((score / (questions.length || 1)) * 100);

  if (!questions || questions.length === 0) {
    return (
      <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: 'calc(100vh - 5rem)', padding: '4rem 1rem', textAlign: 'center' }}>
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem' }}>
          <h3>No diagnostic test currently loaded for this chapter.</h3>
          <p style={{ margin: '1rem 0' }}>Please select another chapter from the curriculum navigator.</p>
          <button onClick={onBackToDashboard} className="btn btn-primary">Return to Dashboard</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: 'calc(100vh - 5rem)', paddingBottom: '4rem' }}>
      
      {/* Test Top Bar */}
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
              <span className="eyebrow" style={{ fontSize: '0.68rem' }}>STAGE 3: NCERT DIAGNOSTIC ASSESSMENT</span>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                {assessment.title}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            <Clock size={14} />
            <span>Calm & Untimed • Formative Diagnosis</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', maxWidth: '860px' }}>
        
        {!isCompleted ? (
          <div>
            {/* Progress Bar & Question Stepper */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                Question {currentStep + 1} of {questions.length}
              </div>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {questions.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '26px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: idx === currentStep 
                        ? 'var(--color-action-green)' 
                        : selectedAnswers[idx] 
                        ? 'var(--color-sand)' 
                        : '#E4D5C2'
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Assessment Question Card */}
            <div className="card" style={{
              backgroundColor: 'var(--bg-card)',
              border: '1.5px solid var(--color-border-light)',
              padding: '2.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-sand)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.5rem' }}>
                NCERT Competency: {questions[currentStep]?.topicSubarea || 'Concept Comprehension'}
              </div>

              <h2 style={{
                fontSize: '1.35rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                lineHeight: 1.5,
                marginBottom: '1.75rem'
              }}>
                {questions[currentStep]?.question}
              </h2>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                {questions[currentStep]?.options?.map(opt => {
                  const isSelected = selectedAnswers[currentStep] === opt.id;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      style={{
                        padding: '1.1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: isSelected ? '2px solid var(--color-action-green)' : '1px solid var(--color-border-light)',
                        backgroundColor: isSelected ? 'var(--color-action-green-subtle)' : 'var(--bg-card-elevated)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        transition: 'all 0.15s'
                      }}
                    >
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: isSelected ? '2px solid var(--color-action-green)' : '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        color: isSelected ? 'var(--color-action-green-text)' : 'var(--color-text-secondary)',
                        backgroundColor: isSelected ? '#FFFFFF' : 'transparent'
                      }}>
                        {opt.id.toUpperCase()}
                      </div>
                      <span style={{ fontSize: '1rem', color: 'var(--color-text-primary)', fontWeight: isSelected ? 600 : 500 }}>
                        {opt.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Step Navigation Controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  disabled={currentStep === 0}
                  onClick={handlePrev}
                  className="btn btn-secondary btn-sm"
                  style={{ opacity: currentStep === 0 ? 0.3 : 1 }}
                >
                  <ArrowLeft size={14} />
                  <span>Previous</span>
                </button>

                <button
                  disabled={!selectedAnswers[currentStep]}
                  onClick={handleNext}
                  className="btn btn-primary"
                  style={{ opacity: selectedAnswers[currentStep] ? 1 : 0.4 }}
                >
                  <span>
                    {currentStep < questions.length - 1 ? 'Next Question' : 'Complete & View Diagnostic Report'}
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
              Tip: You can change your chosen answer before submitting the final question.
            </div>
          </div>
        ) : (
          /* DIAGNOSTIC RESULTS REPORT */
          <div className="fade-in">
            <div className="card" style={{
              backgroundColor: '#FCFAF6',
              border: '1.5px solid var(--color-border)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}>
              
              {/* Report Header */}
              <div style={{ textAlign: 'center', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border-light)', marginBottom: '2rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: percentage >= 80 ? 'var(--color-action-green-subtle)' : 'var(--color-amber-subtle)',
                  border: `2px solid ${percentage >= 80 ? 'var(--color-action-green)' : 'var(--color-amber)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <Award size={32} color={percentage >= 80 ? 'var(--color-action-green)' : 'var(--color-amber)'} />
                </div>

                <span className="eyebrow" style={{ color: 'var(--color-sand)', marginBottom: '0.35rem' }}>
                  NCERT DIAGNOSTIC MASTERY REPORT
                </span>
                <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)' }}>
                  You Scored {score} out of {questions.length} ({percentage}%)
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', maxWidth: '520px', margin: '0.5rem auto 0 auto' }}>
                  {percentage >= 80 
                    ? `Excellent grasp of ${chapter.title}! You demonstrated high conceptual accuracy on NCERT textbook standards.` 
                    : `Formative evaluation complete! GyanSetu diagnosed areas of strength and specific revision points for ${chapter.title}.`}
                </p>
              </div>

              {/* Strengths & Learning Gaps Diagnostic Breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                
                {/* Strengths Box */}
                <div style={{
                  backgroundColor: 'var(--color-action-green-subtle)',
                  border: '1px solid rgba(46, 163, 52, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={18} color="var(--color-action-green)" />
                    <strong style={{ fontSize: '0.9rem', color: 'var(--color-action-green-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Demonstrated NCERT Competencies
                    </strong>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={14} color="var(--color-action-green)" />
                      <span>Definition, degree, and foundational laws</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={14} color="var(--color-action-green)" />
                      <span>Direct application and formula substitution</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={14} color="var(--color-action-green)" />
                      <span>{isScience ? 'Connecting everyday Indian context to scientific principles' : 'Translating Indian context into mathematical terms'}</span>
                    </li>
                  </ul>
                </div>

                {/* Gaps to Revise Box */}
                <div style={{
                  backgroundColor: 'var(--color-amber-subtle)',
                  border: '1px solid rgba(198, 116, 40, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <AlertTriangle size={18} color="var(--color-amber)" />
                    <strong style={{ fontSize: '0.9rem', color: 'var(--color-amber-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Identified Revision Area
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    <strong>Conceptual Application:</strong> Review core definitions and unit conversions in NCERT exercises.
                  </p>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-amber-text)', fontWeight: 600 }}>
                    Recommended Action: Practice Level 2 application problems.
                  </div>
                </div>

              </div>

              {/* Transparent Adaptive Next Step Recommendation */}
              <div style={{
                backgroundColor: '#FAF5ED',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-sand)', textTransform: 'uppercase', fontWeight: 700 }}>
                    DYNAMIC ADAPTIVE PATHWAY
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {percentage >= 80 
                      ? 'Route to NCERT Exemplar & Olympiad Section' 
                      : 'Route to Targeted Concept Capsule & Level 2 Re-Practice'}
                  </div>
                </div>

                <button
                  onClick={onGoToPath}
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <GitFork size={16} />
                  <span>View Updated Adaptive Path</span>
                </button>
              </div>

              {/* Honest Demo Disclaimer */}
              <div style={{
                borderTop: '1px solid var(--color-border-light)',
                paddingTop: '1rem',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.4
              }}>
                <strong>Diagnostic Note:</strong> Diagnostic results are saved locally to your device. This assessment is designed to support student self-awareness and teacher guidance in alignment with NEP 2020.
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
