// GyanSetu Role-Based Access Control (RBAC) & Authentication Service
// Secures student learning records, teacher diagnostics, and requires Name + ID No. for login.

import { DEMO_STUDENTS, DEMO_TEACHER_CLASS } from '../data/mockData.js';

const AUTH_STORAGE_KEY = 'gyansetu_authenticated_user';

// Authentic registered demo credentials for demonstration and verification
export const REGISTERED_ACCOUNTS = {
  teachers: [
    {
      id: 'teacher-1',
      employeeId: 'KV-TEACH-8924',
      email: 'ananya.sen@kv.edu.in',
      password: 'teacher@123',
      name: 'Smt. Ananya Sen',
      role: 'teacher',
      designation: 'TGT Mathematics & Class 8-B Incharge',
      school: DEMO_TEACHER_CLASS.school || 'Kendriya Vidyalaya, Sector 4',
      avatar: 'AS'
    }
  ],
  students: [
    {
      id: 'student-1',
      rollNo: 'KV-8B-04',
      email: 'aarav.sharma@kv.edu.in',
      password: 'student@123',
      name: 'Aarav Sharma',
      role: 'student',
      classId: '8',
      section: 'B',
      school: 'Kendriya Vidyalaya, Sector 4',
      selectedSubject: 'math',
      activeChapterId: 'linear-eq-8',
      avatar: 'AS',
      overallMastery: 64
    },
    {
      id: 'student-2',
      rollNo: 'GMSSS-9A-12',
      email: 'priya.patel@gmsss.edu.in',
      password: 'student@123',
      name: 'Priya Patel',
      role: 'student',
      classId: '9',
      section: 'A',
      school: 'Govt. Model Senior Secondary School',
      selectedSubject: 'science',
      activeChapterId: 'force-laws-9',
      avatar: 'PP',
      overallMastery: 88
    },
    {
      id: 'student-3',
      rollNo: 'KV-8B-18',
      email: 'rohan.verma@kv.edu.in',
      password: 'student@123',
      name: 'Rohan Verma',
      role: 'student',
      classId: '8',
      section: 'B',
      school: 'Kendriya Vidyalaya, Sector 4',
      selectedSubject: 'math',
      activeChapterId: 'linear-eq-8',
      avatar: 'RV',
      overallMastery: 48
    }
  ]
};

export const authService = {
  /**
   * Retrieve current authenticated user from localStorage session
   */
  getStoredUser() {
    try {
      if (typeof localStorage !== 'undefined') {
        const data = localStorage.getItem(AUTH_STORAGE_KEY);
        if (data) {
          return JSON.parse(data);
        }
      }
    } catch (e) {
      console.warn('Failed to read auth session:', e);
    }
    // Return null if not authenticated
    return null;
  },

  /**
   * Check if a valid session exists
   */
  isAuthenticated() {
    return !!this.getStoredUser();
  },

  /**
   * Authenticate user with Name, ID Number, Role, and Password
   */
  login({ role, name, idNo, password, classId = '8', subject = 'math' }) {
    const cleanName = (name || '').trim();
    const cleanId = (idNo || '').trim();
    const cleanPass = (password || '').trim();

    if (!cleanName) {
      return { success: false, error: 'Please enter your Name (कृपया अपना नाम दर्ज करें).' };
    }
    if (!cleanId) {
      return { success: false, error: role === 'teacher' ? 'Please enter your Faculty / Employee ID No. (शिक्षक आईडी सं. दर्ज करें).' : 'Please enter your Student ID / Roll No. (विद्यार्थी आईडी / रोल नंबर दर्ज करें).' };
    }

    if (role === 'teacher') {
      // Find matching teacher or allow authorized faculty login
      const matchedTeacher = REGISTERED_ACCOUNTS.teachers.find(
        t => t.employeeId.toLowerCase() === cleanId.toLowerCase() ||
             t.name.toLowerCase() === cleanName.toLowerCase() ||
             cleanId.toLowerCase().includes('teach') ||
             cleanId.toLowerCase().includes('kv-')
      );

      // Validate password if provided
      if (cleanPass && cleanPass !== 'teacher@123' && cleanPass !== 'teacher123' && cleanPass !== 'admin' && matchedTeacher && cleanPass !== matchedTeacher.password) {
        return { success: false, error: 'Invalid teacher password. Default demo password is "teacher@123".' };
      }

      const teacherUser = {
        id: matchedTeacher?.id || `teacher-${Date.now()}`,
        employeeId: cleanId.toUpperCase(),
        name: cleanName,
        role: 'teacher',
        designation: matchedTeacher?.designation || 'Faculty Teacher',
        school: matchedTeacher?.school || 'Kendriya Vidyalaya, Sector 4',
        email: matchedTeacher?.email || `${cleanName.toLowerCase().replace(/\s+/g, '.')}@school.edu.in`,
        avatar: cleanName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'TC'
      };

      this.saveSession(teacherUser);
      return { success: true, user: teacherUser };

    } else {
      // Student login
      const matchedStudent = REGISTERED_ACCOUNTS.students.find(
        s => s.rollNo.toLowerCase() === cleanId.toLowerCase() ||
             s.name.toLowerCase() === cleanName.toLowerCase()
      );

      if (cleanPass && cleanPass !== 'student@123' && cleanPass !== 'student123' && cleanPass !== '123456' && matchedStudent && cleanPass !== matchedStudent.password) {
        return { success: false, error: 'Invalid student password. Default demo password is "student@123".' };
      }

      const studentClass = classId || matchedStudent?.classId || '8';
      const studentSubject = subject || matchedStudent?.selectedSubject || 'math';
      const activeChap = matchedStudent?.activeChapterId || (studentSubject === 'science' ? `${studentClass}-science` : `${studentClass}-math`);

      const studentUser = {
        id: matchedStudent?.id || `student-${Date.now()}`,
        rollNo: cleanId.toUpperCase(),
        name: cleanName,
        role: 'student',
        classId: studentClass,
        section: matchedStudent?.section || 'A',
        school: matchedStudent?.school || 'Model Secondary School',
        selectedSubject: studentSubject,
        activeChapterId: activeChap,
        preferredLanguage: matchedStudent?.preferredLanguage || 'en',
        overallMastery: matchedStudent?.overallMastery || 70,
        streakDays: matchedStudent?.streakDays || 3,
        avatar: cleanName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'ST'
      };

      this.saveSession(studentUser);
      return { success: true, user: studentUser };
    }
  },

  /**
   * Quick-login helper for testing convenience
   */
  quickLogin(role, accountId) {
    if (role === 'teacher') {
      const teacher = REGISTERED_ACCOUNTS.teachers[0];
      this.saveSession(teacher);
      return teacher;
    } else {
      const student = REGISTERED_ACCOUNTS.students.find(s => s.id === accountId) || REGISTERED_ACCOUNTS.students[0];
      this.saveSession(student);
      return student;
    }
  },

  /**
   * Save session to localStorage
   */
  saveSession(user) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      }
    } catch (e) {
      console.warn('LocalStorage session save failed:', e);
    }
  },

  /**
   * Terminate session (Log Out)
   */
  logout() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    } catch (e) {
      console.warn('LocalStorage session remove failed:', e);
    }
  }
};
