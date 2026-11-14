// GyanSetu Official NCERT Curriculum & Assessment API Service Layer
// Provides asynchronous API endpoints for real syllabus, practice questions, and local persistence.

import { NCERT_CURRICULUM } from '../data/ncertDatabase.js';

const STORAGE_KEY_PREFIX = 'gyansetu_student_progress_';

export const curriculumApi = {
  /**
   * Fetch all supported grades (Classes 6 to 10)
   */
  async getClasses() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(NCERT_CURRICULUM.classes);
      }, 50);
    });
  },

  /**
   * Fetch available subjects
   */
  async getSubjects(classId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(NCERT_CURRICULUM.subjects);
      }, 50);
    });
  },

  /**
   * Fetch official NCERT chapters for a specific class and subject
   */
  async getChapters(classId, subjectId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const key = `${classId}-${subjectId}`;
        const rawChapters = NCERT_CURRICULUM.chapters[key] || [];
        const chapters = rawChapters.map(ch => ({
          ...ch,
          classId: ch.classId || String(classId),
          subjectId: ch.subjectId || String(subjectId)
        }));
        resolve(chapters);
      }, 70);
    });
  },

  /**
   * Fetch a specific chapter with full learn sections, worked examples, and formulas
   */
  async getChapter(classId, subjectId, chapterId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const key = `${classId}-${subjectId}`;
        const rawChapters = NCERT_CURRICULUM.chapters[key] || [];
        const chapters = rawChapters.map(ch => ({
          ...ch,
          classId: ch.classId || String(classId),
          subjectId: ch.subjectId || String(subjectId)
        }));
        const chapter = chapters.find(c => c.id === chapterId) || chapters[0];
        if (chapter) {
          resolve(chapter);
        } else {
          reject(new Error(`Chapter not found for class ${classId}, subject ${subjectId}, id ${chapterId}`));
        }
      }, 60);
    });
  },

  /**
   * Fetch verified NCERT practice questions for a chapter
   */
  async getPracticeQuestions(classId, subjectId, chapterId) {
    const chapter = await this.getChapter(classId, subjectId, chapterId);
    return chapter.practiceQuestions || [];
  },

  /**
   * Fetch verified NCERT diagnostic assessment for a chapter
   */
  async getAssessment(classId, subjectId, chapterId) {
    const chapter = await this.getChapter(classId, subjectId, chapterId);
    return chapter.assessment || { questions: [] };
  },

  /**
   * Persist student progress to browser localStorage
   */
  saveProgress(studentId, chapterId, progressData) {
    try {
      const key = `${STORAGE_KEY_PREFIX}${studentId}_${chapterId}`;
      const existing = this.getProgress(studentId, chapterId) || {};
      const updated = {
        ...existing,
        ...progressData,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
      return progressData;
    }
  },

  /**
   * Retrieve student progress from browser localStorage
   */
  getProgress(studentId, chapterId) {
    try {
      const key = `${STORAGE_KEY_PREFIX}${studentId}_${chapterId}`;
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn('LocalStorage read failed:', e);
      return null;
    }
  }
};
