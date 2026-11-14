# GyanSetu (ज्ञानसेतु) - Adaptive Learning Platform

An AI-guided, NEP 2020 & NCERT/CBSE aligned adaptive learning platform tailored for Indian K-12 education (Classes 6 to 10).

---

## 🌟 Key Features

- **Official NCERT / CBSE Curriculum**:
  - Covers **Class 6, 7, 8, 9, and 10** across both **Mathematics** and **Science**.
  - **40 Complete Chapters** (4 chapters per grade × subject combination).
  - Every chapter contains:
    - **2 Learning Concept Sections** with real-world analogies, deep NCERT pedagogical content, step-by-step worked examples, key formulas, and common traps.
    - **4 Leveled Practice Questions** (Foundational, Application, Conceptual, HOTs) with explanations for every choice.
    - **5 Diagnostic Assessment Quiz Questions** with comprehensive explanations.
- **Role-Based Authentication**:
  - **Student Login**: Students log in with their Name and Student ID (e.g. `STU08-101`, `STU09-102`). Class-based access control restricts students to their respective grade's curriculum.
  - **Teacher Login**: Teachers log in with their Teacher ID (e.g. `TCH-MATH-01`, `TCH-SCI-02`) to view student mastery analytics, performance flags, and assign diagnostic assessments.
- **Multilingual Support**:
  - English and Hindi (हिंदी) language toggling.
- **Theme Modes**:
  - Dark Mode and Light Mode with persistence.
- **Offline / Low-Data Mode**:
  - Bandwidth optimization toggle for rural or low-connectivity environments.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation

1. Extract the zip archive to your preferred directory.
2. Open a terminal in the project directory and install dependencies:

```bash
npm install
```

### Running Locally (Development Server)

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to the local URL displayed (typically `http://localhost:5173/`).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔑 Demo Login Credentials

### Student Accounts (Grade-Specific Access)
| Class | Student ID | Name | Permitted Scope |
|---|---|---|---|
| Class 6 | `STU06-101` | Aarav Sharma | Class 6 Math & Science |
| Class 7 | `STU07-101` | Diya Patel | Class 7 Math & Science |
| Class 8 | `STU08-101` | Rohan Verma | Class 8 Math & Science |
| Class 9 | `STU09-101` | Ananya Singh | Class 9 Math & Science |
| Class 10 | `STU10-101` | Priya Gupta | Class 10 Math & Science |

### Teacher Accounts (Full Analytical Access)
| Subject / Role | Teacher ID | Name | Scope |
|---|---|---|---|
| Mathematics | `TCH-MATH-01` | Rajesh Sharma | All Grades Analytics |
| Science | `TCH-SCI-02` | Sunita Rao | All Grades Analytics |

*(Note: Custom names and IDs can also be entered directly into the login form).*

---

## 📁 Project Structure

```
adaptive-learning/
├── dist/                      # Production build output
├── src/
│   ├── components/            # React UI components
│   │   ├── Header.jsx         # Navigation, language & theme toggles
│   │   ├── LoginPage.jsx      # Student & Teacher secure authentication
│   │   ├── StudentDashboard.jsx
│   │   ├── TeacherDashboard.jsx
│   │   ├── LearnModule.jsx    # Concept explanations & worked examples
│   │   ├── SolveModule.jsx    # Leveled practice questions
│   │   ├── TestModule.jsx     # Diagnostic assessment quizzes
│   │   ├── AdaptivePathView.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── chapters/          # Modularized NCERT curriculum data
│   │   │   ├── class6.js
│   │   │   ├── class7.js
│   │   │   ├── class8.js
│   │   │   ├── class9.js
│   │   │   └── class10.js
│   │   ├── ncertDatabase.js   # Assembled NCERT curriculum database
│   │   └── mockData.js        # Compatibility exports
│   ├── services/
│   │   ├── authService.js     # Role & grade access management
│   │   └── curriculumApi.js   # Asynchronous curriculum & assessment service
│   ├── App.jsx                # Main application orchestrator
│   ├── index.css              # Global styles & theme definitions
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

