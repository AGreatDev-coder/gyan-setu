// Official NCERT / CBSE Authentic Curriculum Database (Classes 6–10)
// Verified against NCERT Textbooks, Exemplar Problems, and NEP 2020 Learning Outcomes

import { class6Chapters } from './chapters/class6.js';
import { class7Chapters } from './chapters/class7.js';
import { class8Chapters } from './chapters/class8.js';
import { class9Chapters } from './chapters/class9.js';
import { class10Chapters } from './chapters/class10.js';

export const NCERT_CURRICULUM = {
  boards: [
    'CBSE',
    'ICSE',
    'State Boards (NCERT Aligned)'
  ],
  classes: [
    {
      id: '6',
      name: 'Class 6',
      hindiName: 'कक्षा 6',
      defaultSubject: 'math'
    },
    {
      id: '7',
      name: 'Class 7',
      hindiName: 'कक्षा 7',
      defaultSubject: 'math'
    },
    {
      id: '8',
      name: 'Class 8',
      hindiName: 'कक्षा 8',
      defaultSubject: 'math'
    },
    {
      id: '9',
      name: 'Class 9',
      hindiName: 'कक्षा 9',
      defaultSubject: 'math'
    },
    {
      id: '10',
      name: 'Class 10',
      hindiName: 'कक्षा 10',
      defaultSubject: 'math'
    }
  ],
  subjects: [
    {
      id: 'math',
      name: 'Mathematics',
      hindiName: 'गणित',
      icon: 'Calculator'
    },
    {
      id: 'science',
      name: 'Science',
      hindiName: 'विज्ञान',
      icon: 'Atom'
    }
  ],
  chapters: {
    '6-math': class6Chapters.math,
    '6-science': class6Chapters.science,
    '7-math': class7Chapters.math,
    '7-science': class7Chapters.science,
    '8-math': class8Chapters.math,
    '8-science': class8Chapters.science,
    '9-math': class9Chapters.math,
    '9-science': class9Chapters.science,
    '10-math': class10Chapters.math,
    '10-science': class10Chapters.science
  }
};
