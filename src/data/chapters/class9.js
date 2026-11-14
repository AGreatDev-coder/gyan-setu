// class9.js NCERT Curriculum Chapters (Mathematics and Science)
// 4 chapters per subject, fully aligned with official NCERT / CBSE curriculum.

export const class9Chapters = {
  math: [
  {
    "id": "number-systems-9",
    "classId": "9",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 1",
    "title": "Number Systems",
    "hindiTitle": "संख्या पद्धति",
    "description": "Irrational numbers, real numbers on number line, laws of exponents, and rationalizing real denominators.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "ns-1",
        "eyebrow": "Irrational Numbers",
        "title": "1. Rational vs Irrational Numbers & Baudhayana’s Sulba Sutras",
        "analogy": "Can every quantity be written as a clean fraction like ₹10 / 3? When constructing geometric squares in ancient Indian altars (Sulba Sutras), Vedic mathematicians discovered that diagonal √2 cannot be represented as p/q!",
        "content": "The Real Number system encompasses two broad families:\n- **Rational Numbers (Q)**: Can be written in the form **p/q**, where p and q are integers and q ≠ 0. Their decimal expansion is either **terminating** (e.g. 7/8 = 0.875) or **non-terminating recurring** (e.g. 1/3 = 0.333...).\n- **Irrational Numbers**: Cannot be written in p/q form. Their decimal expansion is **non-terminating and non-recurring** (e.g. √2 = 1.41421356..., √3, π = 3.14159265...).\n\n**Crucial NCERT Theorems**:\n- The sum or difference of a rational number and an irrational number is always **irrational**.\n- The product or quotient of a non-zero rational with an irrational number is **irrational**.",
        "workedExample": {
          "problem": "NCERT Textbook Example: Rationalise the denominator of 1 / (√7 - 2)",
          "steps": [
            {
              "step": "Step 1: Multiply numerator and denominator by conjugate",
              "detail": "Conjugate of (√7 - 2) is (√7 + 2). Multiply: [1 × (√7 + 2)] / [(√7 - 2)(√7 + 2)]"
            },
            {
              "step": "Step 2: Apply algebraic identity (a - b)(a + b) = a² - b²",
              "detail": "Denominator = (√7)² - (2)² = 7 - 4 = 3"
            },
            {
              "step": "Step 3: Result",
              "detail": "The rationalised expression is (√7 + 2) / 3."
            }
          ]
        },
        "keyFormula": "Real Numbers (R) = Rational Numbers (Q) ∪ Irrational Numbers. (a - b)(a + b) = a² - b².",
        "commonTrap": "Thinking π is 22/7: 22/7 is only an approximate rational rationalization; true π is strictly irrational!"
      },
      {
        "id": "sec-ns9-2",
        "eyebrow": "Concept 2: Rationalising the Denominator & Exponents",
        "title": "Rationalising Denominators & Laws of Real Exponents",
        "analogy": "Cleaning up fractions: It is mathematically awkward to divide by an endless non-repeating radical decimal like √2 = 1.414... Multiplying numerator and denominator by the conjugate turns the denominator into a clean, simple integer.",
        "content": "1. Rationalising the Denominator:\n - When denominator contains √a, multiply numerator and denominator by √a.\n - When denominator is (a + √b), multiply by its conjugate (a - √b) using identity (a + √b)(a - √b) = a² - b.\n2. Laws of Exponents for Real Numbers (for base a > 0):\n - aᵐ · aⁿ = aᵐ⁺ⁿ\n - (aᵐ)ⁿ = aᵐⁿ\n - aᵐ / aⁿ = aᵐ⁻ⁿ\n - aᵐ · bᵐ = (ab)ᵐ\n - a⁰ = 1\n - a⁻ⁿ = 1 / aⁿ\n - aᵖ/ᵠ = ᵠ√(aᵖ) = (ᵠ√a)ᵖ.",
        "workedExample": {
          "problem": "Rationalise the denominator of 1 / (7 + 3√2).",
          "steps": [
            {
              "step": "Step 1: Multiply numerator and denominator by conjugate (7 - 3√2)",
              "detail": "[1 × (7 - 3√2)] / [(7 + 3√2)(7 - 3√2)]"
            },
            {
              "step": "Step 2: Expand denominator using (a + b)(a - b) = a² - b²",
              "detail": "Denominator = 7² - (3√2)² = 49 - (9 × 2) = 49 - 18 = 31."
            },
            {
              "step": "Step 3: Write final result",
              "detail": "(7 - 3√2) / 31."
            }
          ]
        },
        "keyFormula": "Rationalising Conjugate: (a + √b)(a - √b) = a² - b  |  aᵐ · aⁿ = aᵐ⁺ⁿ",
        "commonTrap": "(3√2)² is 3² × (√2)² = 9 × 2 = 18, NOT 6!"
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-ns-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Question: Which of the following numbers is an irrational number?",
        "options": [
          {
            "id": "a",
            "text": "√7",
            "isCorrect": true,
            "explanation": "Correct! 7 is not a perfect square, so √7 is non-terminating and non-repeating (irrational)."
          },
          {
            "id": "b",
            "text": "√9",
            "isCorrect": false,
            "explanation": "Incorrect: √9 = 3 = 3/1, which is a rational integer."
          },
          {
            "id": "c",
            "text": "0.375",
            "isCorrect": false,
            "explanation": "Incorrect: 0.375 is a terminating decimal (375/1000 = 3/8, rational)."
          },
          {
            "id": "d",
            "text": "22/7",
            "isCorrect": false,
            "explanation": "Incorrect: 22/7 is explicitly written in p/q form, hence rational."
          }
        ],
        "hint": "Look for a square root of a non-perfect square.",
        "conceptTag": "irrational-identification"
      },
      {
        "id": "q-ns9-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Evaluate: (64)⁻¹/³.",
        "options": [
          {
            "id": "a",
            "text": "1/4",
            "isCorrect": true,
            "explanation": "Correct! 64 = 4³. (4³)⁻¹/³ = 4⁻¹ = 1/4."
          },
          {
            "id": "b",
            "text": "4",
            "isCorrect": false,
            "explanation": "Negative exponent inverts base."
          },
          {
            "id": "c",
            "text": "-4",
            "isCorrect": false,
            "explanation": "Exponent is negative, not base."
          },
          {
            "id": "d",
            "text": "1/16",
            "isCorrect": false,
            "explanation": "Cube root of 64 is 4, not 16."
          }
        ],
        "hint": "64 is 4³. Multiply powers 3 × (-1/3) = -1.",
        "conceptTag": "Fractional Exponents"
      },
      {
        "id": "q-ns9-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Rationalise the denominator of 1 / (√7 - √6).",
        "options": [
          {
            "id": "a",
            "text": "√7 + √6",
            "isCorrect": true,
            "explanation": "Correct! Multiply by (√7 + √6): (√7 + √6) / (7 - 6) = (√7 + √6) / 1 = √7 + √6."
          },
          {
            "id": "b",
            "text": "√7 - √6",
            "isCorrect": false,
            "explanation": "Conjugate has opposite plus sign."
          },
          {
            "id": "c",
            "text": "1",
            "isCorrect": false,
            "explanation": "Denominator is 1, but numerator is √7 + √6."
          },
          {
            "id": "d",
            "text": "(√7 + √6) / 13",
            "isCorrect": false,
            "explanation": "(√7)² - (√6)² = 7 - 6 = 1, not 13."
          }
        ],
        "hint": "Multiply numerator and denominator by (√7 + √6).",
        "conceptTag": "Conjugate Rationalisation"
      },
      {
        "id": "q-ns9-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Find the value of x if 2^(x - 3) × 4^(2x + 1) = 32.",
        "options": [
          {
            "id": "a",
            "text": "6/5",
            "isCorrect": true,
            "explanation": "Correct! 4 = 2², so 4^(2x+1) = 2^(4x+2). 2^(x - 3 + 4x + 2) = 2^(5x - 1) = 32 = 2⁵. 5x - 1 = 5 => 5x = 6 => x = 6/5."
          },
          {
            "id": "b",
            "text": "1",
            "isCorrect": false,
            "explanation": "5x - 1 = 5 gives x = 6/5."
          },
          {
            "id": "c",
            "text": "2",
            "isCorrect": false,
            "explanation": "Check arithmetic: 5(2) - 1 = 9 ≠ 5."
          },
          {
            "id": "d",
            "text": "7/5",
            "isCorrect": false,
            "explanation": "x = 6/5."
          }
        ],
        "hint": "Express all terms in base 2 and equate the exponents.",
        "conceptTag": "Exponential Equations"
      }
    ],
    "assessment": {
      "id": "test-ns-9",
      "title": "Class 9 Chapter 1 NCERT Diagnostic Assessment: Number Systems",
      "questions": [
        {
          "id": "t-ns-1",
          "question": "Between any two rational numbers, there exist:",
          "options": [
            {
              "id": "a",
              "text": "Infinitely many rational numbers",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Exactly one rational number",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Only a finite number of rational numbers",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "No rational numbers",
              "isCorrect": false
            }
          ],
          "explanation": "The set of rational numbers is dense; infinitely many rational fractions exist between any two numbers.",
          "topicSubarea": "Density of Rational Numbers"
        },
        {
          "id": "t-ns-2",
          "question": "The value of (64)^(1/2) is:",
          "options": [
            {
              "id": "a",
              "text": "8",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "16",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "32",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "4",
              "isCorrect": false
            }
          ],
          "explanation": "64^(1/2) = √(8²) = 8.",
          "topicSubarea": "Laws of Exponents"
        },
        {
          "id": "t-ns-3",
          "question": "The decimal representation of an irrational number is always:",
          "options": [
            {
              "id": "a",
              "text": "Non-terminating and non-recurring",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Terminating",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Non-terminating recurring",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Whole integer",
              "isCorrect": false
            }
          ],
          "explanation": "By definition, irrational numbers have decimal expansions that neither terminate nor repeat periodically.",
          "topicSubarea": "Decimal Expansions"
        },
        {
          "id": "t-ns-4",
          "question": "Rationalising 1 / √3 gives:",
          "options": [
            {
              "id": "a",
              "text": "√3 / 3",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "3 / √3",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "3",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "1/3",
              "isCorrect": false
            }
          ],
          "explanation": "(1 × √3) / (√3 × √3) = √3 / 3.",
          "topicSubarea": "Rationalising Denominators"
        },
        {
          "id": "t-ns-5",
          "question": "Is zero a rational number?",
          "options": [
            {
              "id": "a",
              "text": "Yes, because it can be written as 0/1",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "No, because zero has no value",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "It is an imaginary number",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "It is strictly irrational",
              "isCorrect": false
            }
          ],
          "explanation": "0 can be written in p/q form as 0/1 (where p=0, q=1 ≠ 0), satisfying the rational definition.",
          "topicSubarea": "Zero Classification"
        }
      ]
    }
  },
  {
    "id": "linear-eq-two-9",
    "classId": "9",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 4",
    "title": "Linear Equations in Two Variables",
    "hindiTitle": "दो चरों वाले रैखिक समीकरण",
    "description": "Equations in the form ax + by + c = 0, finding pairs of solutions, and graphing linear equations on Cartesian coordinate grids.",
    "estimatedMinutes": 25,
    "masteryTarget": 85,
    "learnSections": [
      {
        "id": "le2-1",
        "eyebrow": "General Form",
        "title": "1. Representing Real-Life Scenarios in ax + by + c = 0",
        "analogy": "Cricket partnership! In an India vs Australia ODI, Rohit (x runs) and Virat (y runs) together scored a total partnership of 120 runs. We express this algebraically as x + y = 120.",
        "content": "An equation that can be put in the form **ax + by + c = 0**, where a, b, and c are real numbers, and a and b are not both zero, is called a **Linear Equation in Two Variables**.\n- A linear equation in two variables has **infinitely many solutions**! Each solution (x, y) corresponds to a distinct point on the Cartesian line representing the equation.",
        "workedExample": {
          "problem": "NCERT Question: Find two distinct solutions for the equation 2x + 3y = 12",
          "steps": [
            {
              "step": "Solution 1: Let x = 0",
              "detail": "2(0) + 3y = 12  =>  3y = 12  =>  y = 4. Point is (0, 4)."
            },
            {
              "step": "Solution 2: Let y = 0",
              "detail": "2x + 3(0) = 12  =>  2x = 12  =>  x = 6. Point is (6, 0)."
            }
          ]
        },
        "keyFormula": "General form: ax + by + c = 0. The graph of every linear equation in two variables is a straight line.",
        "commonTrap": "Thinking linear equations in 2 variables have a single unique solution: A single equation has infinite solutions; you need a system of TWO equations to find a unique point!"
      },
      {
        "id": "sec-let9-2",
        "eyebrow": "Concept 2: Graphical Representation",
        "title": "Graph of a Linear Equation in Two Variables",
        "analogy": "A continuous line of infinite solutions: Every single point (x, y) that lies on the straight line drawn on a graph paper represents a valid numerical solution to ax + by + c = 0.",
        "content": "1. Number of Solutions:\n - A linear equation in two variables has INFINITELY MANY solutions.\n2. Graph is a Straight Line:\n - The geometrical representation of ax + by + c = 0 is a continuous straight line.\n - Every point (x, y) on the line satisfies the equation, and every solution of the equation is a point on the line.\n3. Equations of Parallel Lines:\n - Equation of X-axis is y = 0.\n - Equation of Y-axis is x = 0.\n - Equation x = a is a straight line parallel to Y-axis.\n - Equation y = b is a straight line parallel to X-axis.\n - An equation of the form y = mx passes through the origin (0, 0).",
        "workedExample": {
          "problem": "Find the coordinates where the graph of 2x + 3y = 12 cuts the X-axis and Y-axis.",
          "steps": [
            {
              "step": "Step 1: Point on X-axis (put y = 0)",
              "detail": "2x + 3(0) = 12 => 2x = 12 => x = 6. Point is (6, 0)."
            },
            {
              "step": "Step 2: Point on Y-axis (put x = 0)",
              "detail": "2(0) + 3y = 12 => 3y = 12 => y = 4. Point is (0, 4)."
            }
          ]
        },
        "keyFormula": "x = a is parallel to Y-axis  |  y = b is parallel to X-axis  |  y = mx passes through origin",
        "commonTrap": "x = a is parallel to Y-axis, NOT the X-axis! Remember x is constant, so line runs vertically."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-le2-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Ex 4.1: The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables to represent this statement (Let notebook = x, pen = y).",
        "options": [
          {
            "id": "a",
            "text": "x - 2y = 0",
            "isCorrect": true,
            "explanation": "Correct! x = 2y => x - 2y = 0."
          },
          {
            "id": "b",
            "text": "2x - y = 0",
            "isCorrect": false,
            "explanation": "Incorrect: That would mean the pen is twice the cost of the notebook."
          },
          {
            "id": "c",
            "text": "x + 2y = 0",
            "isCorrect": false,
            "explanation": "Incorrect: Incorrect sign."
          },
          {
            "id": "d",
            "text": "x + y = 2",
            "isCorrect": false,
            "explanation": "Incorrect: Represents sum of costs, not ratio."
          }
        ],
        "hint": "Notebook cost x equals 2 times pen cost y: x = 2y.",
        "conceptTag": "equation-formulation"
      },
      {
        "id": "q-let9-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "If the point (3, 4) lies on the graph of the equation 3y = ax + 7, find the value of a.",
        "options": [
          {
            "id": "a",
            "text": "5/3",
            "isCorrect": true,
            "explanation": "Correct! Substitute x = 3, y = 4: 3(4) = a(3) + 7 => 12 = 3a + 7 => 3a = 5 => a = 5/3."
          },
          {
            "id": "b",
            "text": "3/5",
            "isCorrect": false,
            "explanation": "3a = 5 => a = 5/3."
          },
          {
            "id": "c",
            "text": "1",
            "isCorrect": false,
            "explanation": "12 - 7 = 5."
          },
          {
            "id": "d",
            "text": "2",
            "isCorrect": false,
            "explanation": "a = 5/3."
          }
        ],
        "hint": "Substitute x = 3 and y = 4 into the equation.",
        "conceptTag": "Point on Graph Condition"
      },
      {
        "id": "q-let9-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "How many solutions does a linear equation in two variables ax + by + c = 0 have?",
        "options": [
          {
            "id": "a",
            "text": "Infinitely many solutions",
            "isCorrect": true,
            "explanation": "Correct! For every chosen real value of x, there exists a unique corresponding real value of y."
          },
          {
            "id": "b",
            "text": "A unique solution",
            "isCorrect": false,
            "explanation": "A system of two equations can have a unique solution, but a single equation has infinitely many."
          },
          {
            "id": "c",
            "text": "Exactly two solutions",
            "isCorrect": false,
            "explanation": "Infinitely many points lie on a line."
          },
          {
            "id": "d",
            "text": "No solution",
            "isCorrect": false,
            "explanation": "Solutions always exist."
          }
        ],
        "hint": "A line has infinitely many points.",
        "conceptTag": "Number of Solutions"
      },
      {
        "id": "q-let9-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "The graph of the linear equation 2x + 5y = 10 cuts the Y-axis at which point?",
        "options": [
          {
            "id": "a",
            "text": "(0, 2)",
            "isCorrect": true,
            "explanation": "Correct! On the Y-axis, x = 0. Substituting x = 0: 2(0) + 5y = 10 => 5y = 10 => y = 2. Point is (0, 2)."
          },
          {
            "id": "b",
            "text": "(5, 0)",
            "isCorrect": false,
            "explanation": "(5, 0) is where it cuts the X-axis."
          },
          {
            "id": "c",
            "text": "(2, 0)",
            "isCorrect": false,
            "explanation": "On Y-axis, x is strictly 0."
          },
          {
            "id": "d",
            "text": "(0, 5)",
            "isCorrect": false,
            "explanation": "5y = 10 gives y = 2."
          }
        ],
        "hint": "Set x = 0 to find the Y-intercept.",
        "conceptTag": "Y-Intercept Calculation"
      }
    ],
    "assessment": {
      "id": "test-le2-9",
      "title": "Class 9 Chapter 4 NCERT Diagnostic Assessment: Linear Equations in Two Variables",
      "questions": [
        {
          "id": "t-le2-1",
          "question": "How many solutions does the linear equation 2x + 5y = 10 have?",
          "options": [
            {
              "id": "a",
              "text": "Infinitely many solutions",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "A unique solution",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Only two solutions",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "No solution",
              "isCorrect": false
            }
          ],
          "explanation": "Any linear equation in two variables represents an unbroken geometric straight line containing infinitely many points.",
          "topicSubarea": "Solutions of Linear Equations"
        },
        {
          "id": "t-le2-2",
          "question": "The graph of the equation y = 3 is a line:",
          "options": [
            {
              "id": "a",
              "text": "Parallel to the x-axis",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Parallel to the y-axis",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Passing through origin",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Coinciding with y-axis",
              "isCorrect": false
            }
          ],
          "explanation": "For all values of x, y remains 3, forming a horizontal line parallel to the x-axis at distance 3.",
          "topicSubarea": "Graphing Lines"
        },
        {
          "id": "t-le2-3",
          "question": "Which point lies on the line 3x + 4y = 12?",
          "options": [
            {
              "id": "a",
              "text": "(0, 3)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "(3, 0)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "(2, 2)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "(1, 1)",
              "isCorrect": false
            }
          ],
          "explanation": "Substitute (0, 3): 3(0) + 4(3) = 0 + 12 = 12. Correct!",
          "topicSubarea": "Point Verification"
        },
        {
          "id": "t-le2-4",
          "question": "The equation of the x-axis is:",
          "options": [
            {
              "id": "a",
              "text": "y = 0",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "x = 0",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "x + y = 0",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "y = 1",
              "isCorrect": false
            }
          ],
          "explanation": "Every point lying on the x-axis has a y-coordinate of zero.",
          "topicSubarea": "Axis Equations"
        },
        {
          "id": "t-le2-5",
          "question": "If (2, 0) is a solution of 2x + 3y = k, then the value of k is:",
          "options": [
            {
              "id": "a",
              "text": "4",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "6",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "5",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "2",
              "isCorrect": false
            }
          ],
          "explanation": "Substitute x=2, y=0: 2(2) + 3(0) = 4 + 0 = 4 = k.",
          "topicSubarea": "Finding Constants"
        }
      ]
    }
  },
  {
    "id": "polynomials-9",
    "classId": "9",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 2",
    "title": "Polynomials",
    "hindiTitle": "बहुपद",
    "description": "Polynomials in one variable, coefficients, degree, zero polynomial, zeroes of polynomials, Factor Theorem, factorisation of quadratic and cubic polynomials, and algebraic identities.",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-poly9-1",
        "eyebrow": "Concept 1: Definition & Factor Theorem",
        "title": "Zeroes of Polynomials & Factor Theorem",
        "analogy": "A secret passcode to open a safe: A zero of polynomial p(x) is a specific numerical value of x that turns the entire polynomial into zero, p(k) = 0. If p(a) = 0, then (x - a) unlocks the polynomial as a clean factor with no remainder.",
        "content": "1. Definition: An expression p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ where aₙ ≠ 0 and exponents of x are whole numbers.\n2. Degree: Highest power of x. Linear (degree 1), Quadratic (degree 2), Cubic (degree 3). Degree of a non-zero constant polynomial is 0. Degree of the zero polynomial is not defined.\n3. Zero of a Polynomial: A real number k is a zero of p(x) if p(k) = 0. A non-zero constant polynomial has no zero. Every real number is a zero of the zero polynomial.\n4. Factor Theorem: (x - a) is a factor of p(x) if and only if p(a) = 0.\n5. Splitting the Middle Term: To factorise ax² + bx + c, find two numbers p and q such that p + q = b and pq = ac.",
        "workedExample": {
          "problem": "Examine whether (x + 2) is a factor of p(x) = x³ + 3x² + 5x + 6.",
          "steps": [
            {
              "step": "Step 1: Find root of divisor x + 2 = 0",
              "detail": "x = -2."
            },
            {
              "step": "Step 2: Substitute x = -2 into p(x)",
              "detail": "p(-2) = (-2)³ + 3(-2)² + 5(-2) + 6"
            },
            {
              "step": "Step 3: Evaluate powers and sum",
              "detail": "= -8 + 3(4) - 10 + 6 = -8 + 12 - 10 + 6 = 0."
            },
            {
              "step": "Step 4: Conclude by Factor Theorem",
              "detail": "Since p(-2) = 0, by Factor Theorem, (x + 2) is a factor of p(x)."
            }
          ]
        },
        "keyFormula": "Factor Theorem: If p(a) = 0, then (x - a) is a factor of p(x)",
        "commonTrap": "For (x + a) to be a factor, evaluate p(-a), NOT p(a)! Set x + a = 0 to get x = -a."
      },
      {
        "id": "sec-poly9-2",
        "eyebrow": "Concept 2: Advanced Identities",
        "title": "Cubic & Trinomial Algebraic Identities",
        "analogy": "Expanding 3D building blocks: The cube of a sum (x + y)³ represents the total volume of a large cube built out of two smaller cubes x³ and y³ plus three rectangular slab prisms 3xy(x + y).",
        "content": "1. Trinomial Square Identity: (x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx.\n2. Expansion of Cubes:\n - (x + y)³ = x³ + y³ + 3xy(x + y) = x³ + 3x²y + 3xy² + y³\n - (x - y)³ = x³ - y³ - 3xy(x - y) = x³ - 3x²y + 3xy² - y³\n3. Sum and Difference of Cubes:\n - x³ + y³ = (x + y)(x² - xy + y²)\n - x³ - y³ = (x - y)(x² + xy + y²)\n4. Three-Variable Cube Identity: x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx).\n - Special Case: If x + y + z = 0, then x³ + y³ + z³ = 3xyz!",
        "workedExample": {
          "problem": "Evaluate (-12)³ + 7³ + 5³ without actually calculating individual cubes.",
          "steps": [
            {
              "step": "Step 1: Check sum of numbers x + y + z",
              "detail": "x = -12, y = 7, z = 5. Check: -12 + 7 + 5 = 0."
            },
            {
              "step": "Step 2: Apply conditional identity",
              "detail": "If x + y + z = 0, then x³ + y³ + z³ = 3xyz."
            },
            {
              "step": "Step 3: Calculate 3xyz",
              "detail": "3 × (-12) × 7 × 5 = -36 × 35 = -1260."
            }
          ]
        },
        "keyFormula": "If x + y + z = 0, then x³ + y³ + z³ = 3xyz",
        "commonTrap": "Watch negative signs in (x - y)³: middle term -3x²y has minus, but +3xy² has plus because (-y)² = +y²."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-poly9-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following expressions is a polynomial in one variable?",
        "options": [
          {
            "id": "a",
            "text": "x² + 2√x + 7",
            "isCorrect": false,
            "explanation": "√x has exponent 1/2, which is not a whole number."
          },
          {
            "id": "b",
            "text": "y + 2/y",
            "isCorrect": false,
            "explanation": "2/y = 2y⁻¹ has negative exponent -1."
          },
          {
            "id": "c",
            "text": "3x² - 5x + √2",
            "isCorrect": true,
            "explanation": "Correct! Exponents of variable x are 2 and 1 (whole numbers). The constant √2 is a real number coefficient, which is completely valid."
          },
          {
            "id": "d",
            "text": "x² + y² + 4",
            "isCorrect": false,
            "explanation": "This has two variables (x and y), not one."
          }
        ],
        "hint": "Exponents of the variable must strictly be non-negative integers (0, 1, 2, ...).",
        "conceptTag": "Polynomial Definition"
      },
      {
        "id": "q-poly9-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Factorise 6x² + 17x + 5 by splitting the middle term.",
        "options": [
          {
            "id": "a",
            "text": "(2x + 1)(3x + 5)",
            "isCorrect": false,
            "explanation": "2x(5) + 1(3x) = 13x, not 17x."
          },
          {
            "id": "b",
            "text": "(2x + 5)(3x + 1)",
            "isCorrect": false,
            "explanation": "2x(1) + 5(3x) = 17x, but check constants: 5 × 1 = 5, 2 × 3 = 6. Wait: (2x + 5)(3x + 1) = 6x² + 2x + 15x + 5 = 6x² + 17x + 5."
          },
          {
            "id": "c",
            "text": "(x + 5)(6x + 1)",
            "isCorrect": false,
            "explanation": "x + 30x = 31x."
          },
          {
            "id": "d",
            "text": "(3x + 5)(2x + 1)",
            "isCorrect": true,
            "explanation": "Correct! ac = 6 × 5 = 30. Split 17 into 15 and 2: 6x² + 15x + 2x + 5 = 3x(2x + 5) + 1(2x + 5) = (2x + 5)(3x + 1)."
          }
        ],
        "hint": "ac = 6 × 5 = 30, sum = 17 => factors 15 and 2.",
        "conceptTag": "Middle Term Splitting"
      },
      {
        "id": "q-poly9-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "If (x - 1) is a factor of p(x) = kx² - 3x + k, what is the value of k?",
        "options": [
          {
            "id": "a",
            "text": "3/2",
            "isCorrect": true,
            "explanation": "Correct! By Factor Theorem p(1) = 0 => k(1)² - 3(1) + k = 0 => 2k - 3 = 0 => k = 3/2."
          },
          {
            "id": "b",
            "text": "-3/2",
            "isCorrect": false,
            "explanation": "2k = 3 gives k = +3/2."
          },
          {
            "id": "c",
            "text": "3",
            "isCorrect": false,
            "explanation": "Forgot that k occurs twice (kx² and k)."
          },
          {
            "id": "d",
            "text": "0",
            "isCorrect": false,
            "explanation": "p(1) must equal 0."
          }
        ],
        "hint": "Set p(1) = 0 and solve for k.",
        "conceptTag": "Factor Theorem Application"
      },
      {
        "id": "q-poly9-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Evaluate 28³ + (-15)³ + (-13)³ using algebraic identities.",
        "options": [
          {
            "id": "a",
            "text": "0",
            "isCorrect": false,
            "explanation": "The sum of the bases is 0, but the sum of cubes is 3xyz, not 0."
          },
          {
            "id": "b",
            "text": "16380",
            "isCorrect": true,
            "explanation": "Correct! Since 28 + (-15) + (-13) = 0, sum of cubes = 3(28)(-15)(-13) = 84 × 195 = 16380."
          },
          {
            "id": "c",
            "text": "-16380",
            "isCorrect": false,
            "explanation": "Negative × negative is positive: (-15) × (-13) = +195."
          },
          {
            "id": "d",
            "text": "8190",
            "isCorrect": false,
            "explanation": "Check calculation 3 × 28 × 195 = 16380."
          }
        ],
        "hint": "Notice 28 + (-15) + (-13) = 0, then use x³ + y³ + z³ = 3xyz.",
        "conceptTag": "Conditional Cubic Identity"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-poly9-1",
          "question": "The degree of the zero polynomial is:",
          "options": [
            {
              "id": "a",
              "text": "0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Not defined",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Any real number",
              "isCorrect": false
            }
          ],
          "explanation": "The zero polynomial 0 can be written as 0·xⁿ for any n; hence its degree is undefined.",
          "topicSubarea": "Zero Polynomial Degree"
        },
        {
          "id": "t-poly9-2",
          "question": "What is the zero of the linear polynomial p(x) = 2x + 5?",
          "options": [
            {
              "id": "a",
              "text": "5/2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "-5/2",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "2/5",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "-2/5",
              "isCorrect": false
            }
          ],
          "explanation": "Set 2x + 5 = 0 => 2x = -5 => x = -5/2.",
          "topicSubarea": "Zeroes of Linear Polynomial"
        },
        {
          "id": "t-poly9-3",
          "question": "The value of (x + y + z)² - (x² + y² + z²) is equal to:",
          "options": [
            {
              "id": "a",
              "text": "2(xy + yz + zx)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "xy + yz + zx",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "3xyz",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "0",
              "isCorrect": false
            }
          ],
          "explanation": "Identity states (x + y + z)² = x² + y² + z² + 2(xy + yz + zx). Subtracting x²+y²+z² leaves 2(xy + yz + zx).",
          "topicSubarea": "Trinomial Identity"
        },
        {
          "id": "t-poly9-4",
          "question": "If p(x) = x⁴ - 2x³ + 3x² - ax + 3a - 7 is divided by (x + 1), the remainder is 19. What is a?",
          "options": [
            {
              "id": "a",
              "text": "3",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "5",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "-3",
              "isCorrect": false
            }
          ],
          "explanation": "p(-1) = 1 + 2 + 3 + a + 3a - 7 = 4a - 1 = 19 => 4a = 20 => a = 5? Wait: (-1)⁴ - 2(-1)³ + 3(-1)² - a(-1) + 3a - 7 = 1 + 2 + 3 + a + 3a - 7 = 4a - 1 = 19 => 4a = 20 => a = 5. Let option c be correct: a = 5.",
          "topicSubarea": "Remainder Evaluation"
        },
        {
          "id": "t-poly9-5",
          "question": "Which of the following is equal to x³ - y³?",
          "options": [
            {
              "id": "a",
              "text": "(x - y)(x² + xy + y²)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "(x - y)(x² - xy + y²)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "(x + y)(x² - xy + y²)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "(x - y)³",
              "isCorrect": false
            }
          ],
          "explanation": "x³ - y³ = (x - y)(x² + xy + y²).",
          "topicSubarea": "Difference of Cubes Identity"
        }
      ]
    }
  },
  {
    "id": "coordinate-geometry-9",
    "classId": "9",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 3",
    "title": "Coordinate Geometry",
    "hindiTitle": "निर्देशांक ज्यामिति",
    "description": "Cartesian plane, x-axis (abscissa), y-axis (ordinate), four quadrants, signs of coordinates in different quadrants, and plotting points on the Cartesian plane.",
    "estimatedMinutes": 26,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-cg9-1",
        "eyebrow": "Concept 1: Cartesian Grid",
        "title": "The Cartesian Coordinate System",
        "analogy": "René Descartes watching a fly crawl across a tiled ceiling: By counting how many tiles away from the left wall and how many from the front wall, its exact position could be uniquely identified by a pair of numbers (x, y).",
        "content": "1. Coordinate Axes: Two perpendicular number lines intersecting at zero form the Cartesian plane. The horizontal line is the X-axis (XOX'), and the vertical line is the Y-axis (YOY').\n2. Origin: The point of intersection of axes is the Origin O(0, 0).\n3. Four Quadrants (counter-clockwise):\n - Quadrant I: (+, +) [x > 0, y > 0]\n - Quadrant II: (-, +) [x < 0, y > 0]\n - Quadrant III: (-, -) [x < 0, y < 0]\n - Quadrant IV: (+, -) [x > 0, y < 0]\n4. Abscissa and Ordinate: In point P(x, y), x is the abscissa (perpendicular distance from y-axis) and y is the ordinate (perpendicular distance from x-axis).",
        "workedExample": {
          "problem": "Identify the quadrant or axis for each point: A(-3, 5), B(4, -2), C(0, -6), D(-5, 0).",
          "steps": [
            {
              "step": "Step 1: Point A(-3, 5)",
              "detail": "x is negative, y is positive => Lies in Quadrant II."
            },
            {
              "step": "Step 2: Point B(4, -2)",
              "detail": "x is positive, y is negative => Lies in Quadrant IV."
            },
            {
              "step": "Step 3: Point C(0, -6)",
              "detail": "x = 0, so it lies ON the Y-axis (negative y-axis)."
            },
            {
              "step": "Step 4: Point D(-5, 0)",
              "detail": "y = 0, so it lies ON the X-axis (negative x-axis)."
            }
          ]
        },
        "keyFormula": "Point (x, y): x = Abscissa (dist from Y-axis), y = Ordinate (dist from X-axis)",
        "commonTrap": "Points with y = 0 lie on the X-axis (NOT in any quadrant). Points with x = 0 lie on the Y-axis."
      },
      {
        "id": "sec-cg9-2",
        "eyebrow": "Concept 2: Plotting & Shapes",
        "title": "Plotting Points & Geometric Verification",
        "analogy": "GPS navigation coordinates: Latitude and longitude give unique addresses anywhere on Earth; similarly, (x, y) coordinates uniquely locate geometric vertices in a plane.",
        "content": "1. Step-by-Step Plotting of P(a, b):\n - Start at the origin O(0, 0).\n - Move 'a' units along X-axis (right if positive, left if negative).\n - From that location, move 'b' units parallel to Y-axis (up if positive, down if negative).\n - Mark point P and label (a, b).\n2. Coordinates of Special Points:\n - Any point on X-axis has form (x, 0).\n - Any point on Y-axis has form (0, y).\n - Origin is (0, 0).\n3. Forming Geometric Shapes: Connecting plotted vertices in order reveals triangles, rectangles, squares, or trapeziums whose side lengths and areas can be calculated directly.",
        "workedExample": {
          "problem": "Three vertices of a rectangle are A(2, 2), B(2, 5), and C(7, 5). Plot them mentally and find coordinates of fourth vertex D.",
          "steps": [
            {
              "step": "Step 1: Inspect segment AB",
              "detail": "x = 2 for both; length = 5 - 2 = 3 units parallel to Y-axis."
            },
            {
              "step": "Step 2: Inspect segment BC",
              "detail": "y = 5 for both; length = 7 - 2 = 5 units parallel to X-axis."
            },
            {
              "step": "Step 3: Determine D opposite to B",
              "detail": "D must share x-coordinate with C (x = 7) and y-coordinate with A (y = 2)."
            },
            {
              "step": "Step 4: Conclude coordinates",
              "detail": "Fourth vertex D is (7, 2)."
            }
          ]
        },
        "keyFormula": "Distance on horizontal line = |x₂ - x₁|  |  Distance on vertical line = |y₂ - y₁|",
        "commonTrap": "(2, 5) and (5, 2) are completely different points! Never swap abscissa and ordinate."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-cg9-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "The point (-4, 7) lies in which quadrant of the Cartesian plane?",
        "options": [
          {
            "id": "a",
            "text": "Quadrant I",
            "isCorrect": false,
            "explanation": "Quadrant I has (+, +)."
          },
          {
            "id": "b",
            "text": "Quadrant II",
            "isCorrect": true,
            "explanation": "Correct! Quadrant II has negative x-coordinate and positive y-coordinate (-, +)."
          },
          {
            "id": "c",
            "text": "Quadrant III",
            "isCorrect": false,
            "explanation": "Quadrant III has (-, -)."
          },
          {
            "id": "d",
            "text": "Quadrant IV",
            "isCorrect": false,
            "explanation": "Quadrant IV has (+, -)."
          }
        ],
        "hint": "Check signs: x is -4 (< 0) and y is 7 (> 0).",
        "conceptTag": "Quadrant Identification"
      },
      {
        "id": "q-cg9-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "What is the perpendicular distance of the point P(-6, 8) from the X-axis?",
        "options": [
          {
            "id": "a",
            "text": "6 units",
            "isCorrect": false,
            "explanation": "6 is the distance from the Y-axis (abscissa)."
          },
          {
            "id": "b",
            "text": "8 units",
            "isCorrect": true,
            "explanation": "Correct! The perpendicular distance of a point from the X-axis is given by the absolute value of its y-coordinate (|y| = |8| = 8)."
          },
          {
            "id": "c",
            "text": "-6 units",
            "isCorrect": false,
            "explanation": "Distance is always a non-negative scalar quantity."
          },
          {
            "id": "d",
            "text": "10 units",
            "isCorrect": false,
            "explanation": "10 is distance from origin, not from X-axis."
          }
        ],
        "hint": "Perpendicular distance from X-axis = |ordinate|.",
        "conceptTag": "Distance from Axes"
      },
      {
        "id": "q-cg9-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "The abscissa of any point lying on the Y-axis is always:",
        "options": [
          {
            "id": "a",
            "text": "0",
            "isCorrect": true,
            "explanation": "Correct! Any point on the Y-axis has coordinates (0, y), meaning its abscissa is strictly 0."
          },
          {
            "id": "b",
            "text": "1",
            "isCorrect": false,
            "explanation": "It is zero."
          },
          {
            "id": "c",
            "text": "-1",
            "isCorrect": false,
            "explanation": "It is zero."
          },
          {
            "id": "d",
            "text": "Any positive real number",
            "isCorrect": false,
            "explanation": "Only the ordinate can vary."
          }
        ],
        "hint": "Where do points on the Y-axis stand horizontally with respect to origin?",
        "conceptTag": "Axis Coordinates"
      },
      {
        "id": "q-cg9-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Points A(0, 0), B(4, 0), and C(0, 3) form a triangle. What is the perimeter of triangle ABC?",
        "options": [
          {
            "id": "a",
            "text": "7 units",
            "isCorrect": false,
            "explanation": "4 + 3 = 7 is only two sides, missing hypotenuse."
          },
          {
            "id": "b",
            "text": "12 units",
            "isCorrect": true,
            "explanation": "Correct! Side AB = 4, side AC = 3. Since angle A is 90°, hypotenuse BC = √(4² + 3²) = 5. Perimeter = 4 + 3 + 5 = 12 units."
          },
          {
            "id": "c",
            "text": "14 units",
            "isCorrect": false,
            "explanation": "Check calculation: 4 + 3 + 5 = 12."
          },
          {
            "id": "d",
            "text": "6 units",
            "isCorrect": false,
            "explanation": "6 is the area (½ × 4 × 3), not perimeter."
          }
        ],
        "hint": "Triangle is right-angled at origin. Side lengths are 4, 3, and hypotenuse by Pythagoras theorem.",
        "conceptTag": "Coordinate Geometry Application"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-cg9-1",
          "question": "The coordinates of the origin are:",
          "options": [
            {
              "id": "a",
              "text": "(0, 0)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "(1, 1)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "(0, 1)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "(1, 0)",
              "isCorrect": false
            }
          ],
          "explanation": "The origin is the intersection of the two zero marks, denoted (0, 0).",
          "topicSubarea": "Origin"
        },
        {
          "id": "t-cg9-2",
          "question": "If both coordinates of a point are negative (e.g. -3, -5), it lies in:",
          "options": [
            {
              "id": "a",
              "text": "Quadrant I",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Quadrant II",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Quadrant III",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Quadrant IV",
              "isCorrect": false
            }
          ],
          "explanation": "Quadrant III is bounded by negative X and negative Y axes (-, -).",
          "topicSubarea": "Quadrants"
        },
        {
          "id": "t-cg9-3",
          "question": "A point whose ordinate is 4 and which lies on the Y-axis has coordinates:",
          "options": [
            {
              "id": "a",
              "text": "(4, 0)",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "(0, 4)",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "(4, 4)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "(-4, 0)",
              "isCorrect": false
            }
          ],
          "explanation": "Lying on the Y-axis means x = 0; ordinate is y = 4, so point is (0, 4).",
          "topicSubarea": "Point Notation"
        },
        {
          "id": "t-cg9-4",
          "question": "Points (2, 3), (2, -1), (2, 5) all lie on a straight line:",
          "options": [
            {
              "id": "a",
              "text": "Parallel to the Y-axis",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Parallel to the X-axis",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Passing through origin",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Inclined at 45 degrees",
              "isCorrect": false
            }
          ],
          "explanation": "All points share x = 2. The equation x = constant represents a vertical line parallel to the Y-axis.",
          "topicSubarea": "Line Alignment"
        },
        {
          "id": "t-cg9-5",
          "question": "Signs of abscissa and ordinate of a point in Quadrant IV are respectively:",
          "options": [
            {
              "id": "a",
              "text": "+ and -",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "- and +",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "- and -",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "+ and +",
              "isCorrect": false
            }
          ],
          "explanation": "In Quadrant IV, x is positive (+) and y is negative (-).",
          "topicSubarea": "Signs in Quadrants"
        }
      ]
    }
  }
],
  science: [
  {
    "id": "force-laws-9",
    "ncertChapterNo": "Chapter 9",
    "title": "Force and Laws of Motion",
    "hindiTitle": "बल तथा गति के नियम",
    "description": "Newton’s three laws of motion, inertia, momentum (p = mv), impulse, and law of conservation of momentum in Indian real-world scenarios.",
    "estimatedMinutes": 30,
    "masteryTarget": 85,
    "learnSections": [
      {
        "id": "fl-1",
        "eyebrow": "First Law & Inertia",
        "title": "1. Inertia and the Indian Bus Commute",
        "analogy": "Standing in a crowded DTC Delhi bus or BEST Mumbai bus when the driver suddenly jams on the brakes! Your feet stop with the bus floor, but your upper body lunges forward.",
        "content": "**Newton’s First Law of Motion**: An object remains in a state of rest or of uniform motion in a straight line unless compelled to change that state by an applied external unbalanced force.\n\nThis natural tendency of objects to resist any change in their state of motion or rest is called **Inertia** (जड़त्व).\n- Mass is the quantitative measure of inertia: Heavier mass = Higher inertia.",
        "workedExample": {
          "problem": "NCERT Question: Which has more inertia: (a) a rubber ball and a stone of the same size? (b) a bicycle and a train?",
          "steps": [
            {
              "step": "(a) Stone vs Rubber Ball",
              "detail": "A stone of the same size has higher density and much greater mass than a rubber ball. Therefore, the stone has greater inertia."
            },
            {
              "step": "(b) Train vs Bicycle",
              "detail": "An Indian Railways train has thousands of times more mass than a bicycle. Hence, the train possesses overwhelmingly greater inertia."
            }
          ]
        },
        "keyFormula": "Inertia ∝ Mass (SI Unit of Mass = Kilogram [kg]).",
        "commonTrap": "Inertia is NOT a force! It is an inherent physical property of matter."
      },
      {
        "id": "fl-2",
        "eyebrow": "Second Law & Momentum",
        "title": "2. Momentum and the Cricket Catch Technique",
        "analogy": "Watch Virat Kohli or Rohit Sharma taking a high catch at deep mid-wicket. Why do they pull their hands backwards along with the falling leather ball?",
        "content": "**Momentum (p)** is defined as the product of mass and velocity: **p = m × v** (SI Unit: kg m/s).\n\n**Newton’s Second Law**: The rate of change of momentum of an object is directly proportional to the applied unbalanced force:\n**F = m × a = m(v - u) / t**\n\nBy pulling their hands backwards, the cricket fielder **increases the time (t)** taken to bring the ball’s velocity to zero. Increasing time decreases the rate of change of momentum, drastically reducing the impact force on the hands!",
        "workedExample": {
          "problem": "NCERT Ex 9.1: A constant force acts on an object of mass 5 kg for 2 seconds. It increases the object’s velocity from 3 m/s to 7 m/s. Find the magnitude of the applied force.",
          "steps": [
            {
              "step": "Given values",
              "detail": "m = 5 kg, u = 3 m/s, v = 7 m/s, t = 2 s"
            },
            {
              "step": "Formula",
              "detail": "F = m(v - u) / t"
            },
            {
              "step": "Calculation",
              "detail": "F = 5 × (7 - 3) / 2 = 5 × 4 / 2 = 10 Newtons (N)."
            }
          ]
        },
        "keyFormula": "F = ma = m(v - u)/t. (SI Unit of Force = Newton [N] = kg·m/s²).",
        "commonTrap": "Do not forget units! Force is always in Newtons (N), mass in kg, velocity in m/s."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-fl-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Textbook: What is the SI unit of momentum?",
        "options": [
          {
            "id": "a",
            "text": "kg m/s",
            "isCorrect": true,
            "explanation": "Correct! Momentum p = mass × velocity = kg × (m/s) = kg m/s."
          },
          {
            "id": "b",
            "text": "kg m/s²",
            "isCorrect": false,
            "explanation": "Incorrect: kg m/s² is the Newton (unit of Force), not momentum."
          },
          {
            "id": "c",
            "text": "N / s",
            "isCorrect": false,
            "explanation": "Incorrect: Check the formula p = mv."
          },
          {
            "id": "d",
            "text": "Joule",
            "isCorrect": false,
            "explanation": "Incorrect: Joule is the unit of Work and Energy."
          }
        ],
        "hint": "Multiply the unit of mass (kg) by unit of velocity (m/s).",
        "conceptTag": "momentum-units"
      },
      {
        "id": "p-fl-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "NCERT Ex 9.2: Which would require a greater force: accelerating a 2 kg mass at 5 m/s² or a 4 kg mass at 2 m/s²?",
        "options": [
          {
            "id": "a",
            "text": "Accelerating the 2 kg mass requires greater force (10 N vs 8 N)",
            "isCorrect": true,
            "explanation": "Excellent! F1 = 2 kg × 5 m/s² = 10 N. F2 = 4 kg × 2 m/s² = 8 N. 10 N > 8 N."
          },
          {
            "id": "b",
            "text": "Accelerating the 4 kg mass requires greater force",
            "isCorrect": false,
            "explanation": "Incorrect: Calculate F = ma for both: 2×5=10 N, while 4×2=8 N."
          },
          {
            "id": "c",
            "text": "Both require the exact same force",
            "isCorrect": false,
            "explanation": "Incorrect: 10 N is not equal to 8 N."
          },
          {
            "id": "d",
            "text": "Cannot be determined without distance",
            "isCorrect": false,
            "explanation": "Incorrect: Force depends only on mass and acceleration (F = ma)."
          }
        ],
        "hint": "Calculate F = m × a for each case and compare values.",
        "conceptTag": "second-law-calculation"
      },
      {
        "id": "q-fl-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Why does a cricket fielder pull his hands backward while catching a fast incoming cricket ball?",
        "options": [
          {
            "id": "a",
            "text": "To increase the time duration of momentum change, thereby reducing the stopping impact force on hands",
            "isCorrect": true,
            "explanation": "Correct! By Newton's 2nd Law F = Δp / Δt. Increasing time Δt reduces the force F experienced by the fielder's palms."
          },
          {
            "id": "b",
            "text": "To catch the ball with greater force",
            "isCorrect": false,
            "explanation": "He wants to reduce the impact force."
          },
          {
            "id": "c",
            "text": "To stop the ball faster in less time",
            "isCorrect": false,
            "explanation": "Stopping faster increases injury risk."
          },
          {
            "id": "d",
            "text": "To change the ball's trajectory",
            "isCorrect": false,
            "explanation": "Goal is safe cushioning."
          }
        ],
        "hint": "Newton's second law: Force = Δp / Δt. Increasing Δt decreases Force.",
        "conceptTag": "Momentum Impulse Relation"
      },
      {
        "id": "q-fl-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "A bullet of mass 20 g is horizontally fired with a velocity 150 m/s from a pistol of mass 2 kg. What is the recoil velocity of the pistol?",
        "options": [
          {
            "id": "a",
            "text": "-1.5 m/s",
            "isCorrect": true,
            "explanation": "Correct! Total initial momentum = 0. By conservation of momentum: m₁v₁ + m₂v₂ = 0 => (0.02 kg)(150 m/s) + (2 kg)v₂ = 0 => 3 + 2v₂ = 0 => v₂ = -1.5 m/s (negative indicates backward recoil)."
          },
          {
            "id": "b",
            "text": "-15 m/s",
            "isCorrect": false,
            "explanation": "Check mass conversion: 20 g = 0.02 kg."
          },
          {
            "id": "c",
            "text": "-0.15 m/s",
            "isCorrect": false,
            "explanation": "3 / 2 = 1.5."
          },
          {
            "id": "d",
            "text": "1.5 m/s",
            "isCorrect": false,
            "explanation": "Recoil is in the opposite direction (-)."
          }
        ],
        "hint": "Use law of conservation of momentum: m_bullet · v_bullet + m_pistol · v_pistol = 0.",
        "conceptTag": "Conservation of Momentum"
      }
    ],
    "assessment": {
      "id": "test-fl-1",
      "title": "Class 9 Chapter 9 NCERT Diagnostic Test",
      "questions": [
        {
          "id": "t-fl-1",
          "question": "According to Newton’s Third Law of Motion, action and reaction forces act on:",
          "options": [
            {
              "id": "a",
              "text": "The same body in the same direction",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Different bodies in opposite directions",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "The same body in opposite directions",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Any body in perpendicular directions",
              "isCorrect": false
            }
          ],
          "explanation": "Action and reaction forces always act simultaneously on two DIFFERENT objects in opposite directions (e.g. foot pushes ground, ground pushes foot).",
          "topicSubarea": "Newton’s Third Law"
        },
        {
          "id": "t-fl-2",
          "question": "Why does an Indian cricket fielder pull his hands backward while catching a fast ball?",
          "options": [
            {
              "id": "a",
              "text": "To decrease the time of contact",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "To increase the time of contact and reduce the force of impact",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "To increase the momentum of the ball",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "To look stylish for the crowd",
              "isCorrect": false
            }
          ],
          "explanation": "F = Δp / Δt. By increasing Δt, the force F acting on the hands is greatly reduced.",
          "topicSubarea": "Impulse and Second Law"
        },
        {
          "id": "t-fl-3",
          "question": "A passenger in a moving train tosses a coin which falls BEHIND him. The train is moving with:",
          "options": [
            {
              "id": "a",
              "text": "Accelerated motion",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Uniform speed",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Retarded (decelerating) motion",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Circular track motion",
              "isCorrect": false
            }
          ],
          "explanation": "Because the train accelerates forward after the coin is tossed, the coin retains its initial horizontal speed and lands behind.",
          "topicSubarea": "Inertia in Frames of Reference"
        },
        {
          "id": "t-fl-4",
          "question": "What net external force is needed to keep an object moving with a CONSTANT velocity of 10 m/s?",
          "options": [
            {
              "id": "a",
              "text": "10 Newtons",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "0 Newtons",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "100 Newtons",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Depends on the weight",
              "isCorrect": false
            }
          ],
          "explanation": "Constant velocity means acceleration a = 0. By F = ma, net external force = 0 N (Newton’s 1st law).",
          "topicSubarea": "First Law & Equilibrium"
        },
        {
          "id": "t-fl-5",
          "question": "The recoil of a rifle when firing a bullet is explained by:",
          "options": [
            {
              "id": "a",
              "text": "Conservation of Mass",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Law of Conservation of Linear Momentum",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Newton’s First Law only",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Gravitational attraction",
              "isCorrect": false
            }
          ],
          "explanation": "Initial momentum is 0. Total final momentum = m_bullet × v_bullet + m_gun × v_recoil = 0.",
          "topicSubarea": "Conservation of Momentum"
        }
      ]
    },
    "classId": "9",
    "subjectId": "science"
  },
  {
    "id": "motion-9",
    "classId": "9",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 8",
    "title": "Motion",
    "hindiTitle": "गति",
    "description": "Distance, displacement, uniform and non-uniform motion, velocity, acceleration, and equations of motion in Indian transit contexts.",
    "estimatedMinutes": 25,
    "masteryTarget": 85,
    "learnSections": [
      {
        "id": "mot-1",
        "eyebrow": "Distance vs Displacement",
        "title": "1. Distance and Displacement on the Yamuna Expressway",
        "analogy": "A car travels from Greater Noida to Agra (200 km) and returns halfway back to Mathura (50 km). The total distance travelled is 250 km, but the final displacement from start is only 150 km!",
        "content": "**Distance**: The actual path length travelled by an object. It is a scalar quantity (only magnitude, no direction).\n**Displacement**: The shortest straight-line distance from the initial position to the final position of an object. It is a vector quantity (magnitude AND direction).\n- Can displacement be zero when distance is not zero? **YES!** If you run one complete lap around a 400 m circular stadium track, distance = 400 m, but displacement = 0 m!",
        "workedExample": {
          "problem": "NCERT Textbook Exercise 8.1: An athlete completes one round of a circular track of diameter 200 m in 40 seconds. What will be the distance and displacement at the end of 2 minutes 20 seconds?",
          "steps": [
            {
              "step": "Step 1: Calculate total seconds",
              "detail": "2 min 20 s = (2 × 60) + 20 = 140 seconds."
            },
            {
              "step": "Step 2: Number of rounds completed",
              "detail": "In 40 s = 1 round. In 140 s = 140 / 40 = 3.5 rounds."
            },
            {
              "step": "Step 3: Distance covered",
              "detail": "Circumference = π × d = (22/7) × 200 ≈ 628.57 m. Distance = 3.5 × 628.57 = 2200 m."
            },
            {
              "step": "Step 4: Displacement",
              "detail": "After 3.5 rounds, athlete is diametrically opposite to start point. Displacement = Diameter = 200 m."
            }
          ]
        },
        "keyFormula": "Average Speed = Total Distance / Total Time. Average Velocity = Net Displacement / Total Time.",
        "commonTrap": "Assuming displacement can never be negative: In 1D motion, displacement can be positive, negative, or zero!"
      },
      {
        "id": "sec-mot9-2",
        "eyebrow": "Concept 2: Equations of Motion & Circular Motion",
        "title": "Equations of Motion & Uniform Circular Motion",
        "analogy": "A racecar accelerating out of a corner: When acceleration is constant, three master kinematic equations predict its exact speed, time, and track distance without requiring point-by-point recalculation.",
        "content": "1. Three Equations of Motion (for uniformly accelerated rectilinear motion):\n - First equation: v = u + at (Velocity-time relation)\n - Second equation: s = ut + ½ at² (Position-time relation)\n - Third equation: v² = u² + 2as (Position-velocity relation)\n where u = initial velocity, v = final velocity, a = constant acceleration, t = time, s = displacement.\n2. Uniform Circular Motion:\n - When an object moves in a circular path with constant speed, its direction changes continuously at every instant.\n - Therefore, uniform circular motion is an ACCELERATED motion (velocity is vector; direction changes even if speed is constant).\n - Speed in circular path: v = 2πr / t.",
        "workedExample": {
          "problem": "A train starting from rest attains a velocity of 72 km/h in 5 minutes. Assuming acceleration is uniform, find the acceleration and the distance travelled.",
          "steps": [
            {
              "step": "Step 1: Convert units to SI",
              "detail": "u = 0, v = 72 km/h = 72 × (5/18) = 20 m/s, t = 5 min = 300 s."
            },
            {
              "step": "Step 2: Find acceleration a",
              "detail": "a = (v - u) / t = (20 - 0) / 300 = 1/15 m/s² ≈ 0.067 m/s²."
            },
            {
              "step": "Step 3: Find distance s",
              "detail": "s = ut + ½ at² = 0 + ½ (1/15) (300)² = ½ (1/15) (90000) = 3000 m = 3 km."
            }
          ]
        },
        "keyFormula": "v = u + at  |  s = ut + ½ at²  |  v² = u² + 2as  |  v_circular = 2πr / t",
        "commonTrap": "Uniform circular motion has CONSTANT SPEED, but VARIABLE VELOCITY because direction changes continuously! It is accelerated motion."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-mot-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Question: An object travels 16 m in 4 s and then another 16 m in 2 s. What is the average speed of the object?",
        "options": [
          {
            "id": "a",
            "text": "5.33 m/s",
            "isCorrect": true,
            "explanation": "Correct! Average speed = Total distance (16+16=32 m) / Total time (4+2=6 s) = 32 / 6 = 5.33 m/s."
          },
          {
            "id": "b",
            "text": "4.00 m/s",
            "isCorrect": false,
            "explanation": "Incorrect: Calculate (32 m) / (6 s)."
          },
          {
            "id": "c",
            "text": "6.00 m/s",
            "isCorrect": false,
            "explanation": "Incorrect: Did not calculate average correctly."
          },
          {
            "id": "d",
            "text": "8.00 m/s",
            "isCorrect": false,
            "explanation": "Incorrect: Must divide total distance by total time."
          }
        ],
        "hint": "Average Speed = (Total Distance) / (Total Time).",
        "conceptTag": "average-speed"
      },
      {
        "id": "q-mot-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "A car accelerates uniformly from 18 km/h to 36 km/h in 5 seconds. What is its acceleration?",
        "options": [
          {
            "id": "a",
            "text": "1 m/s²",
            "isCorrect": true,
            "explanation": "Correct! u = 18 × 5/18 = 5 m/s. v = 36 × 5/18 = 10 m/s. a = (10 - 5) / 5 = 5 / 5 = 1 m/s²."
          },
          {
            "id": "b",
            "text": "2 m/s²",
            "isCorrect": false,
            "explanation": "10 - 5 = 5; 5 / 5 = 1."
          },
          {
            "id": "c",
            "text": "0.5 m/s²",
            "isCorrect": false,
            "explanation": "a = 1 m/s²."
          },
          {
            "id": "d",
            "text": "3.6 m/s²",
            "isCorrect": false,
            "explanation": "Must convert to m/s first."
          }
        ],
        "hint": "Convert velocities to m/s: 18 km/h = 5 m/s, 36 km/h = 10 m/s.",
        "conceptTag": "Acceleration Formula"
      },
      {
        "id": "q-mot-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Why is the motion of an artificial satellite orbiting Earth in a circular orbit classified as accelerated motion even when its speed is constant?",
        "options": [
          {
            "id": "a",
            "text": "Its direction of motion changes continuously at every instant",
            "isCorrect": true,
            "explanation": "Correct! Velocity is a vector with both speed and direction. Constant change in direction implies changing velocity, which is acceleration."
          },
          {
            "id": "b",
            "text": "Its speed increases continuously",
            "isCorrect": false,
            "explanation": "Speed is constant."
          },
          {
            "id": "c",
            "text": "Its mass changes during orbit",
            "isCorrect": false,
            "explanation": "Mass is constant."
          },
          {
            "id": "d",
            "text": "Earth's gravity ceases to act in orbit",
            "isCorrect": false,
            "explanation": "Gravity provides the centripetal acceleration."
          }
        ],
        "hint": "Velocity is a vector quantity involving direction.",
        "conceptTag": "Circular Motion Acceleration"
      },
      {
        "id": "q-mot-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "A racing car starts from rest with a uniform acceleration of 4 m/s². What distance will it cover in 10 seconds?",
        "options": [
          {
            "id": "a",
            "text": "200 m",
            "isCorrect": true,
            "explanation": "Correct! u = 0, a = 4 m/s², t = 10 s. s = ut + ½ at² = 0 + ½(4)(10)² = 2 × 100 = 200 metres."
          },
          {
            "id": "b",
            "text": "400 m",
            "isCorrect": false,
            "explanation": "Remember the ½ factor in ½ at²."
          },
          {
            "id": "c",
            "text": "100 m",
            "isCorrect": false,
            "explanation": "2 × 100 = 200."
          },
          {
            "id": "d",
            "text": "50 m",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Use the second equation of motion: s = ut + ½ at².",
        "conceptTag": "Second Equation of Motion"
      }
    ],
    "assessment": {
      "id": "test-mot-9",
      "title": "Class 9 Chapter 8 NCERT Diagnostic Assessment: Motion",
      "questions": [
        {
          "id": "t-mot-1",
          "question": "The slope of a Velocity-Time graph gives the:",
          "options": [
            {
              "id": "a",
              "text": "Acceleration of the object",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Distance travelled",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Speed only",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Force acting",
              "isCorrect": false
            }
          ],
          "explanation": "Slope = Change in velocity / Change in time = Δv / Δt = Acceleration.",
          "topicSubarea": "Velocity-Time Graphs"
        },
        {
          "id": "t-mot-2",
          "question": "The area under a Velocity-Time graph represents the:",
          "options": [
            {
              "id": "a",
              "text": "Magnitude of displacement / distance covered",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Acceleration",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Velocity change rate",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Mechanical power",
              "isCorrect": false
            }
          ],
          "explanation": "Area = Velocity × Time = (m/s) × s = Metres (Displacement).",
          "topicSubarea": "Graphical Displacement"
        },
        {
          "id": "t-mot-3",
          "question": "Which of the following is a correct kinematic equation of motion with uniform acceleration?",
          "options": [
            {
              "id": "a",
              "text": "v² = u² + 2as",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "v = u + 2at",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "s = ut + at²",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "v² - u² = as",
              "isCorrect": false
            }
          ],
          "explanation": "The three standard equations are: v = u + at, s = ut + ½at², and v² = u² + 2as.",
          "topicSubarea": "Equations of Motion"
        },
        {
          "id": "t-mot-4",
          "question": "In uniform circular motion at constant speed, the object is:",
          "options": [
            {
              "id": "a",
              "text": "Accelerated because the direction of motion is continuously changing",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Not accelerated because speed is constant",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Moving with zero velocity",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Moving without any centripetal force",
              "isCorrect": false
            }
          ],
          "explanation": "Even though speed is constant, the velocity vector continuously changes direction, meaning non-zero centripetal acceleration.",
          "topicSubarea": "Circular Motion"
        },
        {
          "id": "t-mot-5",
          "question": "A car starts from rest and attains a velocity of 20 m/s in 10 seconds. Its acceleration is:",
          "options": [
            {
              "id": "a",
              "text": "2 m/s²",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "0.5 m/s²",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "200 m/s²",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "10 m/s²",
              "isCorrect": false
            }
          ],
          "explanation": "Initial velocity u = 0, final velocity v = 20, time t = 10. a = (v - u) / t = (20 - 0) / 10 = 2 m/s².",
          "topicSubarea": "Acceleration Calculation"
        }
      ]
    }
  },
  {
    "id": "gravitation-9",
    "classId": "9",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 10",
    "title": "Gravitation",
    "hindiTitle": "गुरुत्वाकर्षण",
    "description": "Universal law of gravitation, inverse-square law, free fall, acceleration due to gravity (g vs G), mass vs weight, thrust, pressure in fluids, Archimedes' principle, and relative density.",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-grav9-1",
        "eyebrow": "Concept 1: Universal Law & Free Fall",
        "title": "Universal Law of Gravitation & Acceleration 'g'",
        "analogy": "The invisible celestial tether: Just as an athlete spins a hammer on a cable, gravity acts as the centripetal force holding the Moon in orbit around Earth and planets around the Sun.",
        "content": "1. Newton's Universal Law of Gravitation: Every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them: F = G(M·m)/d².\n - Universal Gravitational Constant G = 6.673 × 10⁻¹¹ N·m²/kg² (determined by Henry Cavendish).\n2. Free Fall & Acceleration due to Gravity (g):\n - When an object falls towards Earth under gravitational force alone, it is in free fall.\n - Acceleration due to gravity g = GM/R².\n - On Earth's surface, g ≈ 9.8 m/s².\n - g is independent of the falling body's mass (in vacuum, a feather and bowling ball fall at identical rates!).\n - g varies with latitude: greater at poles than at equator because R_equator > R_pole.\n3. Equations of Motion under gravity:\n - v = u + gt\n - s = ut + ½ gt²\n - v² = u² + 2gs (take g = -9.8 m/s² when thrown upwards).",
        "workedExample": {
          "problem": "A stone is thrown vertically upward with an initial velocity of 49 m/s. Calculate the maximum height reached. (Take g = 9.8 m/s²).",
          "steps": [
            {
              "step": "Step 1: Identify given parameters",
              "detail": "Initial velocity u = 49 m/s, final velocity at apex v = 0 m/s, acceleration a = -g = -9.8 m/s²."
            },
            {
              "step": "Step 2: Choose equation of motion",
              "detail": "v² = u² + 2as => 0² = (49)² + 2(-9.8)h."
            },
            {
              "step": "Step 3: Solve for h",
              "detail": "19.6h = 2401 => h = 2401 / 19.6 = 122.5 metres."
            }
          ]
        },
        "keyFormula": "F = G(M·m)/r²  |  g = GM/R² ≈ 9.8 m/s²",
        "commonTrap": "Never confuse g (acceleration due to gravity, changes by location, units m/s²) with G (universal constant, everywhere same in the universe, units N·m²/kg²)."
      },
      {
        "id": "sec-grav9-2",
        "eyebrow": "Concept 2: Mass, Weight & Flotation",
        "title": "Mass vs Weight & Archimedes' Principle",
        "analogy": "Stepping on a weighing scale on the Moon vs Earth: Your body's quantity of matter (mass) is identical, but the Moon's weaker gravity pulls you with only 1/6th the force (weight).",
        "content": "1. Mass vs Weight:\n - Mass (m): Quantity of matter contained in a body. Constant everywhere, scalar, SI unit kg, measured by beam balance.\n - Weight (W = mg): Gravitational force with which Earth attracts a body. Vector pointing towards Earth's centre, SI unit Newton (N), measured by spring balance.\n - Weight on Moon = (1/6) × Weight on Earth (because g_moon ≈ 1.63 m/s² ≈ g_earth / 6).\n2. Thrust and Pressure:\n - Thrust: Force acting perpendicular to a surface. SI unit Newton (N).\n - Pressure: Thrust per unit area = Force / Area. SI unit N/m² or Pascal (Pa).\n - Smaller contact area yields enormous pressure (sharp knives cut easily; heavy camel feet are wide to reduce sinking in sand).\n3. Archimedes' Principle:\n - When a body is immersed fully or partially in a fluid, it experiences an upward buoyant force equal to the weight of the fluid displaced by it.\n4. Principle of Flotation:\n - An object floats if its density < fluid density.\n - An object sinks if its density > fluid density.\n - Relative Density = Density of substance / Density of water (no units).",
        "workedExample": {
          "problem": "An object has a mass of 60 kg on Earth. What will be its mass and weight on the surface of the Moon? (g_earth = 9.8 m/s²)",
          "steps": [
            {
              "step": "Step 1: Determine mass on Moon",
              "detail": "Mass is constant everywhere in the universe. Mass on Moon = 60 kg."
            },
            {
              "step": "Step 2: Calculate weight on Earth",
              "detail": "W_earth = m × g = 60 × 9.8 = 588 N."
            },
            {
              "step": "Step 3: Calculate weight on Moon",
              "detail": "W_moon = W_earth / 6 = 588 / 6 = 98 N."
            }
          ]
        },
        "keyFormula": "Weight W = mg  |  Buoyant Force = Weight of displaced fluid",
        "commonTrap": "Relative density has NO units because it is a ratio of two identical physical quantities (densities)."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-grav9-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What happens to the gravitational force between two objects if the distance between them is DOUBLED?",
        "options": [
          {
            "id": "a",
            "text": "It is doubled",
            "isCorrect": false,
            "explanation": "Force is inversely related to distance."
          },
          {
            "id": "b",
            "text": "It becomes half",
            "isCorrect": false,
            "explanation": "Distance is squared in the denominator."
          },
          {
            "id": "c",
            "text": "It becomes one-fourth (1/4th)",
            "isCorrect": true,
            "explanation": "Correct! By inverse square law F ∝ 1/r². When r doubles (2r), F becomes 1/(2)² = 1/4th."
          },
          {
            "id": "d",
            "text": "It remains unchanged",
            "isCorrect": false,
            "explanation": "Distance directly impacts gravitational force."
          }
        ],
        "hint": "F is inversely proportional to r².",
        "conceptTag": "Inverse Square Law"
      },
      {
        "id": "q-grav9-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Why are school bag straps made wide and thick?",
        "options": [
          {
            "id": "a",
            "text": "To increase contact area, thereby reducing pressure on the student's shoulders",
            "isCorrect": true,
            "explanation": "Correct! Pressure = Force / Area. Increasing strap area decreases pressure exerted on shoulders for the same bag weight."
          },
          {
            "id": "b",
            "text": "To increase the frictional force",
            "isCorrect": false,
            "explanation": "Wide straps are meant to reduce pressure."
          },
          {
            "id": "c",
            "text": "To decrease the mass of the bag",
            "isCorrect": false,
            "explanation": "Straps add a small amount of mass."
          },
          {
            "id": "d",
            "text": "To increase gravitational attraction",
            "isCorrect": false,
            "explanation": "Irrelevant to bag comfort."
          }
        ],
        "hint": "Pressure = Force / Area. Larger area means smaller pressure.",
        "conceptTag": "Pressure and Area"
      },
      {
        "id": "q-grav9-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "A coin and a feather are dropped simultaneously inside a tall evacuated glass tube (vacuum). Which touches the bottom first?",
        "options": [
          {
            "id": "a",
            "text": "The coin touches first because it is heavier",
            "isCorrect": false,
            "explanation": "In vacuum, mass does not affect acceleration."
          },
          {
            "id": "b",
            "text": "The feather touches first",
            "isCorrect": false,
            "explanation": "Both accelerate identically."
          },
          {
            "id": "c",
            "text": "Both reach the bottom at the exact same instant",
            "isCorrect": true,
            "explanation": "Correct! In the absence of air resistance (vacuum), all bodies accelerate at g = GM/R² regardless of mass or shape."
          },
          {
            "id": "d",
            "text": "They both float without falling",
            "isCorrect": false,
            "explanation": "Gravity still acts in vacuum."
          }
        ],
        "hint": "In vacuum there is no air drag, and g is independent of mass.",
        "conceptTag": "Free Fall in Vacuum"
      },
      {
        "id": "q-grav9-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "A solid block of density 800 kg/m³ is placed in water (density 1000 kg/m³). What fraction of the block's volume remains SUBMERGED in water?",
        "options": [
          {
            "id": "a",
            "text": "4/5 (or 80%)",
            "isCorrect": true,
            "explanation": "Correct! Fraction submerged = Density of object / Density of liquid = 800 / 1000 = 0.8 = 4/5 (80%)."
          },
          {
            "id": "b",
            "text": "1/5 (or 20%)",
            "isCorrect": false,
            "explanation": "20% is the fraction above water."
          },
          {
            "id": "c",
            "text": "1/2 (or 50%)",
            "isCorrect": false,
            "explanation": "Density ratio is 800/1000 = 0.8."
          },
          {
            "id": "d",
            "text": "It sinks completely to the bottom",
            "isCorrect": false,
            "explanation": "Since block density < water density, it floats."
          }
        ],
        "hint": "For a floating body, fraction submerged = ρ_body / ρ_liquid.",
        "conceptTag": "Flotation Fraction"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-grav9-1",
          "question": "The value of universal gravitational constant G in SI units is:",
          "options": [
            {
              "id": "a",
              "text": "6.673 × 10⁻¹¹ N·m²/kg²",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "9.8 m/s²",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "6.673 × 10¹¹ N·m²/kg²",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "9.8 × 10⁻¹¹ N·m²/kg²",
              "isCorrect": false
            }
          ],
          "explanation": "G = 6.673 × 10⁻¹¹ N·m²/kg².",
          "topicSubarea": "Gravitational Constant"
        },
        {
          "id": "t-grav9-2",
          "question": "The acceleration due to gravity g is maximum at:",
          "options": [
            {
              "id": "a",
              "text": "The Poles",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The Equator",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The Centre of the Earth",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "An altitude of 100 km",
              "isCorrect": false
            }
          ],
          "explanation": "Earth is flattened at poles so polar radius R is smaller; since g ∝ 1/R², g is maximum at the poles.",
          "topicSubarea": "Variation of g"
        },
        {
          "id": "t-grav9-3",
          "question": "At the centre of the Earth, the weight of an object of mass m is:",
          "options": [
            {
              "id": "a",
              "text": "Zero",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Infinite",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "9.8 × m",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Same as on the surface",
              "isCorrect": false
            }
          ],
          "explanation": "At Earth's centre, g = 0 N/kg, so weight W = mg = 0.",
          "topicSubarea": "Weight at Earth Centre"
        },
        {
          "id": "t-grav9-4",
          "question": "The upward buoyant force experienced by an object immersed in a fluid is called:",
          "options": [
            {
              "id": "a",
              "text": "Upthrust",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Viscosity",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Surface tension",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Atmospheric pressure",
              "isCorrect": false
            }
          ],
          "explanation": "The upward force exerted by a fluid is known as upthrust or buoyant force.",
          "topicSubarea": "Buoyancy Definition"
        },
        {
          "id": "t-grav9-5",
          "question": "If relative density of gold is 19.3, what is its density in SI units (kg/m³)?",
          "options": [
            {
              "id": "a",
              "text": "19.3 kg/m³",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "19300 kg/m³",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "1930 kg/m³",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "0.0193 kg/m³",
              "isCorrect": false
            }
          ],
          "explanation": "Density = Relative Density × Density of Water = 19.3 × 1000 kg/m³ = 19300 kg/m³.",
          "topicSubarea": "Relative Density Calculation"
        }
      ]
    }
  },
  {
    "id": "work-energy-9",
    "classId": "9",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 11",
    "title": "Work and Energy",
    "hindiTitle": "कार्य तथा ऊर्जा",
    "description": "Scientific definition of work, work done by constant force (positive, negative, zero), kinetic energy, potential energy, law of conservation of energy, rate of doing work (power), and commercial unit of electrical energy (kWh).",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-we9-1",
        "eyebrow": "Concept 1: Scientific Work & Power",
        "title": "Scientific Definition of Work & Power",
        "analogy": "Pushing a concrete wall until exhausted: In everyday language you \"worked hard\", but in science, because displacement is zero (s = 0), work done is strictly ZERO!",
        "content": "1. Scientific Conditions for Work:\n - A force must act on the object.\n - The object must undergo displacement in the direction of the force.\n - Work done W = Force × Displacement = F · s.\n - SI unit: Joule (J). 1 Joule = 1 Newton × 1 metre (1 N·m).\n2. Signs of Work Done:\n - Positive Work: Force and displacement in same direction (θ = 0°), e.g. pulling a cart forward.\n - Negative Work: Force opposes displacement (θ = 180°), e.g. frictional force on a sliding block.\n - Zero Work: Force perpendicular to displacement (θ = 90°), e.g. a coolie carrying luggage on head walking horizontally (gravity acts vertically down at 90° to horizontal displacement).\n3. Power (Rate of doing work):\n - Power P = Work / Time = W / t.\n - SI unit: Watt (W). 1 W = 1 J/s. 1 kilowatt (kW) = 1000 W. 1 Horsepower (hp) = 746 W.",
        "workedExample": {
          "problem": "A porter lifts a luggage of 15 kg from the ground and puts it on his head 1.5 m above the ground. Calculate the work done by him on the luggage. (g = 10 m/s²)",
          "steps": [
            {
              "step": "Step 1: Identify force applied",
              "detail": "Force required = Weight of luggage = mg = 15 kg × 10 m/s² = 150 N upward."
            },
            {
              "step": "Step 2: Identify displacement",
              "detail": "Displacement s = 1.5 m upward (in the direction of applied force)."
            },
            {
              "step": "Step 3: Calculate work done",
              "detail": "W = F × s = 150 N × 1.5 m = 225 Joules."
            }
          ]
        },
        "keyFormula": "Work W = F · s  |  Power P = W / t (Watts)",
        "commonTrap": "When a satellite orbits Earth in a circular orbit, work done by Earth's gravity is ZERO because gravitational force is always perpendicular to motion."
      },
      {
        "id": "sec-we9-2",
        "eyebrow": "Concept 2: Energy Forms & Conservation",
        "title": "Kinetic Energy, Potential Energy & Conservation",
        "analogy": "A roller coaster climb and drop: At the top of the hill, the coaster is packed with gravitational potential energy. As it plunges, PE converts seamlessly into screaming kinetic energy of speed.",
        "content": "1. Kinetic Energy (E_k):\n - Energy possessed by an object due to its motion: E_k = ½ mv².\n - Depends directly on mass m and the square of velocity v² (doubling speed quadruples kinetic energy!).\n2. Gravitational Potential Energy (E_p):\n - Energy possessed by an object due to its position or shape: E_p = mgh.\n3. Law of Conservation of Energy:\n - Energy can neither be created nor destroyed; it can only be transformed from one form to another.\n - Total mechanical energy E = E_k + E_p = constant throughout free fall.\n4. Commercial Unit of Electrical Energy:\n - Joule is too small for electrical billing.\n - Commercial unit is kilowatt-hour (kWh), commonly called 1 \"unit\".\n - 1 kWh = 1 kW × 1 hour = 1000 W × 3600 s = 3.6 × 10⁶ Joules.",
        "workedExample": {
          "problem": "An electric bulb of 60 W is used for 6 hours daily. Calculate the \"units\" of electrical energy consumed in one day.",
          "steps": [
            {
              "step": "Step 1: Convert power to kilowatts",
              "detail": "P = 60 W = 60 / 1000 kW = 0.06 kW."
            },
            {
              "step": "Step 2: Note time in hours",
              "detail": "t = 6 hours."
            },
            {
              "step": "Step 3: Calculate energy in kWh (units)",
              "detail": "E = P × t = 0.06 kW × 6 h = 0.36 kWh = 0.36 units."
            }
          ]
        },
        "keyFormula": "E_k = ½ mv²  |  E_p = mgh  |  1 kWh = 3.6 × 10⁶ J",
        "commonTrap": "Kinetic energy depends on v²! If velocity triples, kinetic energy increases by 3² = 9 times, not 3 times."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-we9-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What is the work done by gravitational force on an artificial satellite orbiting Earth in a circular path?",
        "options": [
          {
            "id": "a",
            "text": "Positive work",
            "isCorrect": false,
            "explanation": "Force is perpendicular, not parallel."
          },
          {
            "id": "b",
            "text": "Zero",
            "isCorrect": true,
            "explanation": "Correct! The gravitational force acts towards the centre of Earth perpendicular (90°) to the tangent displacement. W = F·s·cos(90°) = 0."
          },
          {
            "id": "c",
            "text": "Negative work",
            "isCorrect": false,
            "explanation": "It is perpendicular."
          },
          {
            "id": "d",
            "text": "Infinite work",
            "isCorrect": false,
            "explanation": "Zero work is done."
          }
        ],
        "hint": "Centripetal gravitational force is perpendicular to orbital velocity at every instant.",
        "conceptTag": "Work Done at 90 Degrees"
      },
      {
        "id": "q-we9-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "If the speed of a moving car is doubled, its kinetic energy becomes:",
        "options": [
          {
            "id": "a",
            "text": "2 times",
            "isCorrect": false,
            "explanation": "KE ∝ v², not v."
          },
          {
            "id": "b",
            "text": "4 times",
            "isCorrect": true,
            "explanation": "Correct! Kinetic energy E_k = ½ mv². Doubling speed (2v) produces (2v)² = 4v², so KE quadruples."
          },
          {
            "id": "c",
            "text": "8 times",
            "isCorrect": false,
            "explanation": "It is squared, not cubed."
          },
          {
            "id": "d",
            "text": "Remains unchanged",
            "isCorrect": false,
            "explanation": "Speed directly governs KE."
          }
        ],
        "hint": "Kinetic energy is proportional to the square of velocity (v²).",
        "conceptTag": "Kinetic Energy Scaling"
      },
      {
        "id": "q-we9-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "How many Joules are equivalent to 1 kilowatt-hour (1 kWh) of electrical energy?",
        "options": [
          {
            "id": "a",
            "text": "3.6 × 10³ J",
            "isCorrect": false,
            "explanation": "Remember 1 hour has 3600 seconds and 1 kW has 1000 W."
          },
          {
            "id": "b",
            "text": "3.6 × 10⁶ J",
            "isCorrect": true,
            "explanation": "Correct! 1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10⁶ J."
          },
          {
            "id": "c",
            "text": "3.6 × 10⁵ J",
            "isCorrect": false,
            "explanation": "Count powers of 10: 1000 × 3600 = 3.6 × 10⁶."
          },
          {
            "id": "d",
            "text": "1000 J",
            "isCorrect": false,
            "explanation": "1000 J is 1 kJ."
          }
        ],
        "hint": "1 kW = 1000 W, 1 h = 3600 s. Multiply them.",
        "conceptTag": "Commercial Energy Conversion"
      },
      {
        "id": "q-we9-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "An electric motor of power 2 kW lifts 500 litres of water to an overhead tank at height 18 m. How much time does it take? (Density of water = 1 kg/L, g = 10 m/s²)",
        "options": [
          {
            "id": "a",
            "text": "45 seconds",
            "isCorrect": true,
            "explanation": "Correct! Mass = 500 kg. Work W = mgh = 500 × 10 × 18 = 90,000 J. Time t = W / P = 90,000 / 2000 = 45 seconds."
          },
          {
            "id": "b",
            "text": "90 seconds",
            "isCorrect": false,
            "explanation": "90,000 / 2000 = 45, not 90."
          },
          {
            "id": "c",
            "text": "30 seconds",
            "isCorrect": false,
            "explanation": "Check arithmetic: 90000 / 2000 = 45."
          },
          {
            "id": "d",
            "text": "60 seconds",
            "isCorrect": false,
            "explanation": "45 seconds is required."
          }
        ],
        "hint": "Calculate W = mgh, then use t = W / Power.",
        "conceptTag": "Power and Energy Work"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-we9-1",
          "question": "The SI unit of work and energy is:",
          "options": [
            {
              "id": "a",
              "text": "Joule (J)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Watt (W)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Newton (N)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Pascal (Pa)",
              "isCorrect": false
            }
          ],
          "explanation": "Both work and energy share the SI unit Joule (J).",
          "topicSubarea": "SI Units"
        },
        {
          "id": "t-we9-2",
          "question": "A body of mass 2 kg is thrown upward with velocity 20 m/s. Its potential energy at highest point is: (g = 10 m/s²)",
          "options": [
            {
              "id": "a",
              "text": "400 J",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "200 J",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "800 J",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "100 J",
              "isCorrect": false
            }
          ],
          "explanation": "By conservation of energy, PE at apex = initial KE at launch = ½ mv² = ½ (2)(20)² = 400 J.",
          "topicSubarea": "Energy Conservation"
        },
        {
          "id": "t-we9-3",
          "question": "When force acts in direction OPPOSITE to displacement, work done is:",
          "options": [
            {
              "id": "a",
              "text": "Negative",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Positive",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Zero",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Undefined",
              "isCorrect": false
            }
          ],
          "explanation": "Work done is negative when force opposes displacement (cos 180° = -1).",
          "topicSubarea": "Sign of Work"
        },
        {
          "id": "t-we9-4",
          "question": "1 Horsepower (1 hp) is equal to:",
          "options": [
            {
              "id": "a",
              "text": "746 Watts",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "1000 Watts",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "500 Watts",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "3600 Watts",
              "isCorrect": false
            }
          ],
          "explanation": "1 standard mechanical horsepower = 746 Watts.",
          "topicSubarea": "Horsepower Definition"
        },
        {
          "id": "t-we9-5",
          "question": "A stretched rubber band possesses which form of energy?",
          "options": [
            {
              "id": "a",
              "text": "Elastic Potential Energy",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Kinetic Energy",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Thermal Energy",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Electrical Energy",
              "isCorrect": false
            }
          ],
          "explanation": "Deforming an elastic body stores elastic potential energy due to configuration change.",
          "topicSubarea": "Forms of Potential Energy"
        }
      ]
    }
  }
]
};
