import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Lightbulb, 
  AlertTriangle, 
  Scale, 
  ChevronDown, 
  ChevronUp,
  RefreshCw
} from 'lucide-react';
import { CURRICULUM } from '../data/mockData';
import { curriculumApi } from '../services/curriculumApi';

export default function LearnModule({ 
  studentProfile, 
  activeChapter,
  onGoToSolve, 
  onBackToDashboard 
}) {
  const isScience = activeChapter?.subjectId === 'science' || studentProfile?.selectedSubject === 'science';
  const defaultChapter = isScience ? {
    id: 'default-science',
    title: 'Force and Pressure',
    hindiTitle: 'बल तथा दाब',
    ncertChapterNo: 'Chapter 8',
    learnSections: []
  } : {
    id: 'default-math',
    title: 'Linear Equations in One Variable',
    hindiTitle: 'एक चर वाले रैखिक समीकरण',
    ncertChapterNo: 'Chapter 2',
    learnSections: []
  };
  const chapter = activeChapter || defaultChapter;
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState({});
  const [understoodConcepts, setUnderstoodConcepts] = useState({ 0: true });

  // Reset state when chapter changes
  useEffect(() => {
    setActiveConceptIndex(0);
    setRevealedSteps({});
    setUnderstoodConcepts({ 0: true });
  }, [chapter?.id]);

  const activeConcept = (chapter.learnSections && chapter.learnSections[activeConceptIndex]) || {
    eyebrow: 'Core Foundation',
    title: chapter.title,
    analogy: 'Real-world application from everyday Indian scenarios.',
    content: chapter.description,
    workedExample: {
      problem: `NCERT Example Problem on ${chapter.title}`,
      steps: [
        { step: 'Step 1: Understand the core formulation', detail: 'Identify the known and unknown parameters.' },
        { step: 'Step 2: Apply the governing formula', detail: 'Perform the arithmetic or algebraic operations step-by-step.' }
      ]
    },
    keyFormula: 'Always verify units and maintain equality across expressions.',
    commonTrap: 'Carefully double-check calculations and sign inversions.'
  };

  const toggleStep = (stepIdx) => {
    setRevealedSteps(prev => ({
      ...prev,
      [stepIdx]: !prev[stepIdx]
    }));
  };

  const handleMarkUnderstood = () => {
    setUnderstoodConcepts(prev => ({
      ...prev,
      [activeConceptIndex]: true
    }));

    // Save progress to local storage via curriculum API
    curriculumApi.saveProgress(studentProfile.id, chapter.id, {
      lastConceptReviewed: activeConcept.title,
      understoodCount: Object.keys(understoodConcepts).length + 1
    });

    // If not last concept, advance or go to practice
    if (chapter.learnSections && activeConceptIndex < chapter.learnSections.length - 1) {
      setActiveConceptIndex(activeConceptIndex + 1);
    } else {
      onGoToSolve();
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: 'calc(100vh - 5rem)', paddingBottom: '4rem' }}>
      
      {/* Module Header Bar */}
      <div style={{
        backgroundColor: 'var(--bg-subtle)',
        borderBottom: '1px solid var(--color-border-light)',
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onBackToDashboard}
              className="btn btn-ghost btn-sm"
              style={{ padding: '0.35rem 0.65rem' }}
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
            <div style={{ height: '20px', width: '1px', backgroundColor: 'var(--color-border-light)' }}></div>
            <div>
              <span className="eyebrow" style={{ fontSize: '0.7rem' }}>STAGE 1: NCERT CONCEPT FOUNDATIONS</span>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                {chapter.ncertChapterNo ? `${chapter.ncertChapterNo}: ` : ''}{chapter.title} ({chapter.hindiTitle})
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={onGoToSolve}
              className="btn btn-primary btn-sm"
            >
              <span>Jump to Adaptive Practice</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 320px) 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Concept Navigation Sidebar */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--color-border-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            position: 'sticky',
            top: '8rem'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-sand)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '1rem' }}>
              Chapter Concepts ({chapter.learnSections?.length || 1} Topics)
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(chapter.learnSections || [activeConcept]).map((sec, idx) => {
                const isActive = activeConceptIndex === idx;
                const isUnderstood = understoodConcepts[idx];

                return (
                  <button
                    key={sec.id || idx}
                    onClick={() => setActiveConceptIndex(idx)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: isActive ? '1.5px solid var(--color-action-green)' : '1px solid var(--color-border-subtle)',
                      backgroundColor: isActive ? 'var(--bg-card-elevated)' : 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      transition: 'all 0.2s',
                      boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="eyebrow" style={{ fontSize: '0.68rem', color: isActive ? 'var(--color-action-green-text)' : 'var(--color-sand)' }}>
                        {sec.eyebrow}
                      </span>
                      {isUnderstood && (
                        <CheckCircle2 size={15} color="var(--color-action-green)" />
                      )}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: isActive ? 700 : 500, color: 'var(--color-text-primary)' }}>
                      {sec.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Indian Context Info box */}
            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border-light)',
              fontSize: '0.78rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5
            }}>
              <strong>💡 NCERT Pedagogy:</strong> Concepts use physical analogies from everyday Indian environments before presenting abstract formulas.
            </div>
          </div>

          {/* Main Lesson Content Panel */}
          <div className="card" style={{
            backgroundColor: 'var(--bg-card)',
            border: '1.5px solid var(--color-border-light)',
            padding: '2.5rem'
          }}>
            {/* Concept Header */}
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '1.25rem' }}>
              <span className="eyebrow" style={{ color: 'var(--color-sand)', marginBottom: '0.5rem' }}>
                {activeConcept.eyebrow}
              </span>
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text-primary)', marginTop: '0.25rem' }}>
                {activeConcept.title}
              </h2>
            </div>

            {/* Real World Indian Analogy Box */}
            <div style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-warm-ivory)',
                border: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Scale size={20} color="var(--color-sand)" />
              </div>
              <div>
                <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Real-World Indian Context
                </strong>
                <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem', lineHeight: 1.55 }}>
                  {activeConcept.analogy}
                </p>
              </div>
            </div>

            {/* Main Lesson Text */}
            <div style={{ fontSize: '1.025rem', color: 'var(--color-text-primary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              <div style={{ whiteSpace: 'pre-line' }}>
                {activeConcept.content}
              </div>
            </div>

            {/* Worked Example Section with Interactive Step Reveal */}
            {activeConcept.workedExample && (
              <div style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Lightbulb size={18} color="var(--color-amber)" />
                  <span className="eyebrow" style={{ color: 'var(--color-amber-text)' }}>
                    NCERT STEP-BY-STEP WORKED EXAMPLE
                  </span>
                </div>

                <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
                  {activeConcept.workedExample.problem}
                </div>

                {/* Steps Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activeConcept.workedExample.steps.map((st, sIdx) => {
                    const isOpened = revealedSteps[sIdx] || sIdx === 0;

                    return (
                      <div 
                        key={sIdx}
                        style={{
                          backgroundColor: 'var(--bg-card-elevated)',
                          border: '1px solid var(--color-border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.85rem 1.15rem'
                        }}
                      >
                        <div 
                          onClick={() => toggleStep(sIdx)}
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                            {st.step}
                          </div>
                          {isOpened ? <ChevronUp size={16} color="var(--color-sand)" /> : <ChevronDown size={16} color="var(--color-sand)" />}
                        </div>

                        {isOpened && (
                          <div className="fade-in" style={{
                            marginTop: '0.65rem',
                            paddingTop: '0.65rem',
                            borderTop: '1px solid var(--color-border-subtle)',
                            fontSize: '0.9rem',
                            color: 'var(--color-text-secondary)',
                            fontFamily: st.detail.includes('=') ? 'monospace' : 'inherit'
                          }}>
                            {st.detail}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Key Formula / Core Law Box */}
            {activeConcept.keyFormula && (
              <div style={{
                backgroundColor: 'var(--color-action-green-subtle)',
                border: '1px solid rgba(46, 163, 52, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-action-green-text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  KEY TAKEAWAY PRINCIPLE
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  {activeConcept.keyFormula}
                </div>
              </div>
            )}

            {/* Common Student Pitfall Alert */}
            {activeConcept.commonTrap && (
              <div style={{
                backgroundColor: 'var(--color-amber-subtle)',
                border: '1px solid rgba(198, 116, 40, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                marginBottom: '2.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <AlertTriangle size={16} color="var(--color-amber)" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-amber-text)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    COMMON PITFALL IN CBSE / BOARD EXAMS
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {activeConcept.commonTrap}
                </p>
              </div>
            )}

            {/* Bottom Lesson Actions */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border-light)'
            }}>
              <button
                disabled={activeConceptIndex === 0}
                onClick={() => setActiveConceptIndex(activeConceptIndex - 1)}
                className="btn btn-secondary btn-sm"
                style={{ opacity: activeConceptIndex === 0 ? 0.4 : 1 }}
              >
                <ArrowLeft size={14} />
                <span>Previous Concept</span>
              </button>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={handleMarkUnderstood}
                  className="btn btn-primary"
                >
                  <CheckCircle2 size={16} />
                  <span>
                    {chapter.learnSections && activeConceptIndex < chapter.learnSections.length - 1 ? 'I Understand — Next Concept' : 'I Understand — Start Practice'}
                  </span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
