import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Sparkles, 
  RotateCcw, 
  BookOpen, 
  HelpCircle, 
  TrendingUp,
  AlertTriangle,
  Award
} from 'lucide-react';
import { CURRICULUM } from '../data/mockData';
import { curriculumApi } from '../services/curriculumApi';

export default function SolveModule({ 
  studentProfile, 
  activeChapter,
  onBackToDashboard, 
  onGoToLearn, 
  onGoToTest 
}) {
  const isScience = activeChapter?.subjectId === 'science' || studentProfile?.selectedSubject === 'science';
  const defaultChapter = isScience ? {
    id: 'default-science',
    title: 'Force and Pressure',
    hindiTitle: 'बल तथा दाब',
    ncertChapterNo: 'Chapter 8',
    practiceQuestions: []
  } : {
    id: 'default-math',
    title: 'Linear Equations in One Variable',
    hindiTitle: 'एक चर वाले रैखिक समीकरण',
    ncertChapterNo: 'Chapter 2',
    practiceQuestions: []
  };
  const chapter = activeChapter || defaultChapter;
  const questions = chapter.practiceQuestions || [];

  // Active question index
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  // Real-time Adaptive Engine State
  const [liveMastery, setLiveMastery] = useState(studentProfile.overallMastery || 65);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [consecutiveWrong, setConsecutiveWrong] = useState(0);
  const [adaptiveMessage, setAdaptiveMessage] = useState(null);

  // Reset when chapter changes
  useEffect(() => {
    setCurrentQIndex(0);
    setSelectedOptionId(null);
    setSubmitted(false);
    setShowHint(false);
    setAdaptiveMessage(null);
    
    // Check if there is saved progress for this chapter
    const saved = curriculumApi.getProgress(studentProfile.id, chapter.id);
    if (saved && saved.mastery) {
      setLiveMastery(saved.mastery);
    }
  }, [chapter?.id]);

  const currentQ = questions[currentQIndex] || {
    id: 'p-default',
    level: 1,
    levelLabel: 'Foundational',
    question: `Practice Question for ${chapter.title}`,
    options: [
      { id: 'a', text: 'Option A (Correct)', isCorrect: true, explanation: 'Verified NCERT solution.' },
      { id: 'b', text: 'Option B', isCorrect: false, explanation: 'Incorrect application.' }
    ],
    hint: 'Review the chapter formula.'
  };

  const handleSelectOption = (optId) => {
    if (submitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId) return;
    setSubmitted(true);

    const chosenOption = currentQ.options.find(o => o.id === selectedOptionId);
    const isCorrect = chosenOption?.isCorrect;

    let updatedMastery = liveMastery;

    if (isCorrect) {
      const newStreak = consecutiveCorrect + 1;
      setConsecutiveCorrect(newStreak);
      setConsecutiveWrong(0);
      updatedMastery = Math.min(100, liveMastery + 6);
      setLiveMastery(updatedMastery);

      if (newStreak >= 2) {
        setAdaptiveMessage({
          type: 'success-boost',
          title: 'Adaptive Elevation: Consistent Accuracy!',
          text: 'Great work! You have answered 2 consecutive questions correctly. GyanSetu is unlocking Level 3 Higher-Order Thinking problems.'
        });
      } else {
        setAdaptiveMessage({
          type: 'correct',
          title: 'Accurate Solution!',
          text: 'Mastery increased by +6%. Keep the momentum going.'
        });
      }
    } else {
      const newWrong = consecutiveWrong + 1;
      setConsecutiveWrong(newWrong);
      setConsecutiveCorrect(0);
      updatedMastery = Math.max(30, liveMastery - 4);
      setLiveMastery(updatedMastery);

      if (newWrong >= 2) {
        setAdaptiveMessage({
          type: 'intervention',
          title: 'Adaptive Branching: Misconception Detected',
          text: 'You have encountered 2 consecutive slips on this competency. We recommend a 2-minute review of the concept theory before continuing.'
        });
      } else {
        setAdaptiveMessage({
          type: 'wrong',
          title: 'Conceptual Opportunity Identified',
          text: 'Review the step-by-step breakdown below. Notice how the rule applies to this case.'
        });
      }
    }

    // Persist real progress to localStorage via curriculumApi!
    curriculumApi.saveProgress(studentProfile.id, chapter.id, {
      mastery: updatedMastery,
      lastQuestionId: currentQ.id,
      lastQuestionCorrect: isCorrect
    });
  };

  const handleNextQuestion = () => {
    setSelectedOptionId(null);
    setSubmitted(false);
    setShowHint(false);
    setAdaptiveMessage(null);

    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Completed all practice questions!
      onGoToTest();
    }
  };

  const handleRetryCurrent = () => {
    setSelectedOptionId(null);
    setSubmitted(false);
    setAdaptiveMessage(null);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: 'calc(100vh - 5rem)', paddingBottom: '4rem' }}>
      
      {/* Top Practice Bar */}
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
              <span>Back</span>
            </button>
            <div style={{ height: '20px', width: '1px', backgroundColor: 'var(--color-border-light)' }}></div>
            <div>
              <span className="eyebrow" style={{ fontSize: '0.68rem' }}>STAGE 2: NCERT ADAPTIVE PRACTICE</span>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                {chapter.ncertChapterNo ? `${chapter.ncertChapterNo}: ` : ''}{chapter.title} • Practice Lab
              </div>
            </div>
          </div>

          {/* Live Dynamic Mastery Meter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Live Topic Mastery
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-action-green-text)' }}>
                {liveMastery}%
              </div>
            </div>
            <div style={{ width: '80px' }} className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${liveMastery}%`, backgroundColor: liveMastery >= 75 ? 'var(--color-action-green)' : 'var(--color-amber)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', maxWidth: '880px' }}>
        
        {/* Progress Stepper & Difficulty Tag */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Question {currentQIndex + 1} of {questions.length}
            </span>
            <span className={`badge ${currentQ.level === 1 ? 'badge-blue' : currentQ.level === 2 ? 'badge-amber' : 'badge-green'}`}>
              Level {currentQ.level}: {currentQ.levelLabel}
            </span>
          </div>

          <button
            onClick={() => setShowHint(!showHint)}
            className="btn btn-ghost btn-sm"
            style={{ fontSize: '0.78rem', color: 'var(--color-sand)' }}
          >
            <Lightbulb size={14} />
            <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
          </button>
        </div>

        {/* Hint Box (if opened) */}
        {showHint && (
          <div className="fade-in" style={{
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <Lightbulb size={18} color="var(--color-amber)" />
            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              <strong>Hint:</strong> {currentQ.hint}
            </span>
          </div>
        )}

        {/* Main Question Card */}
        <div className="card" style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--color-border-light)',
          padding: '2.25rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            lineHeight: 1.5,
            marginBottom: '1.75rem'
          }}>
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {currentQ.options.map(opt => {
              const isSelected = selectedOptionId === opt.id;
              let borderStyle = '1px solid var(--color-border-light)';
              let bgStyle = 'var(--bg-card-elevated)';
              let indicator = null;

              if (submitted) {
                if (opt.isCorrect) {
                  borderStyle = '2px solid var(--color-action-green)';
                  bgStyle = 'var(--color-action-green-subtle)';
                  indicator = <CheckCircle2 size={18} color="var(--color-action-green)" />;
                } else if (isSelected && !opt.isCorrect) {
                  borderStyle = '2px solid var(--color-terracotta)';
                  bgStyle = 'var(--color-terracotta-subtle)';
                  indicator = <XCircle size={18} color="var(--color-terracotta)" />;
                }
              } else if (isSelected) {
                borderStyle = '2px solid var(--color-text-primary)';
                bgStyle = 'var(--bg-subtle)';
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: borderStyle,
                    backgroundColor: bgStyle,
                    cursor: submitted ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: isSelected ? '2px solid var(--color-text-primary)' : '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      backgroundColor: isSelected ? 'var(--color-beige)' : 'transparent'
                    }}>
                      {opt.id.toUpperCase()}
                    </div>
                    <span style={{ fontSize: '1rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                      {opt.text}
                    </span>
                  </div>

                  {indicator}
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          {!submitted ? (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                disabled={!selectedOptionId}
                onClick={handleSubmitAnswer}
                className="btn btn-primary btn-lg"
                style={{ opacity: selectedOptionId ? 1 : 0.4 }}
              >
                <span>Check My Answer</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="fade-in">
              {/* Detailed Feedback Panel */}
              <div style={{
                backgroundColor: currentQ.options.find(o => o.id === selectedOptionId)?.isCorrect 
                  ? 'var(--color-action-green-subtle)' 
                  : 'var(--color-terracotta-subtle)',
                border: currentQ.options.find(o => o.id === selectedOptionId)?.isCorrect 
                  ? '1px solid rgba(46, 163, 52, 0.3)' 
                  : '1px solid rgba(184, 71, 44, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  {currentQ.options.find(o => o.id === selectedOptionId)?.isCorrect ? (
                    <>
                      <CheckCircle2 size={18} color="var(--color-action-green)" />
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-action-green-text)' }}>
                        Correct Solution!
                      </strong>
                    </>
                  ) : (
                    <>
                      <AlertTriangle size={18} color="var(--color-terracotta)" />
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-terracotta-text)' }}>
                        Pedagogical Explanation:
                      </strong>
                    </>
                  )}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', lineHeight: 1.55, margin: 0 }}>
                  {currentQ.options.find(o => o.id === selectedOptionId)?.explanation}
                </p>
              </div>

              {/* Dynamic Adaptive Rule Engine Alert (if active) */}
              {adaptiveMessage && (
                <div style={{
                  backgroundColor: '#FAF5ED',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}>
                  <Sparkles size={18} color="var(--color-sand)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
                      {adaptiveMessage.title}
                    </strong>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem', margin: 0 }}>
                      {adaptiveMessage.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {!currentQ.options.find(o => o.id === selectedOptionId)?.isCorrect && (
                    <button
                      onClick={handleRetryCurrent}
                      className="btn btn-secondary btn-sm"
                    >
                      <RotateCcw size={14} />
                      <span>Retry Question</span>
                    </button>
                  )}

                  <button
                    onClick={onGoToLearn}
                    className="btn btn-ghost btn-sm"
                    style={{ color: 'var(--color-sand)' }}
                  >
                    <BookOpen size={14} />
                    <span>Review Concept Theory</span>
                  </button>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="btn btn-primary"
                >
                  <span>
                    {currentQIndex < questions.length - 1 ? 'Next Question' : 'Complete Practice & Take Assessment'}
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
