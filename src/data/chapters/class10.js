// class10.js NCERT Curriculum Chapters (Mathematics and Science)
// 4 chapters per subject, fully aligned with official NCERT / CBSE curriculum.

export const class10Chapters = {
  math: [
  {
    "id": "quadratic-eq-10",
    "ncertChapterNo": "Chapter 4",
    "title": "Quadratic Equations",
    "hindiTitle": "द्विघात समीकरण",
    "description": "Standard form ax² + bx + c = 0, factorization method, quadratic formula (Shridharacharya formula), discriminant (D = b² - 4ac), and nature of roots.",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "qe-1",
        "eyebrow": "Definition & Roots",
        "title": "1. Standard Quadratic Form & Shridharacharya Formula",
        "analogy": "Calculating trajectory of an Indian ISRO satellite or projectile path of a six hit by MS Dhoni! The height curve follows a second-degree quadratic parabola.",
        "content": "A quadratic equation in variable x is an equation of the form:\n**ax² + bx + c = 0**, where a, b, c are real numbers and **a ≠ 0**.\n\nThe roots are given by the **Quadratic Formula (श्रीधराचार्य सूत्र)**:\n**x = [-b ± √(b² - 4ac)] / (2a)**\n\nThe quantity **D = b² - 4ac** is called the **Discriminant**:\n- If D > 0: Two distinct real roots.\n- If D = 0: Two equal real roots.\n- If D < 0: No real roots.",
        "workedExample": {
          "problem": "NCERT Ex 4.3: Find the roots of 2x² - 7x + 3 = 0 using the quadratic formula",
          "steps": [
            {
              "step": "Identify coefficients",
              "detail": "a = 2, b = -7, c = 3"
            },
            {
              "step": "Calculate Discriminant D",
              "detail": "D = b² - 4ac = (-7)² - 4(2)(3) = 49 - 24 = 25 (> 0, two real roots)"
            },
            {
              "step": "Apply Formula",
              "detail": "x = [-(-7) ± √25] / (2 × 2) = (7 ± 5) / 4"
            },
            {
              "step": "Two roots",
              "detail": "x1 = (7 + 5)/4 = 12/4 = 3;  x2 = (7 - 5)/4 = 2/4 = 1/2."
            }
          ]
        },
        "keyFormula": "x = [-b ± √(b² - 4ac)] / (2a). D = b² - 4ac determines nature of roots.",
        "commonTrap": "Board Exam Pitfall: Be careful with negative signs when b is negative! -(-7) becomes +7."
      },
      {
        "id": "sec-qe10-2",
        "eyebrow": "Concept 2: Quadratic Formula & Discriminant",
        "title": "The Quadratic Formula & Nature of Roots",
        "analogy": "A medical scanner diagnosing a patient: The discriminant D = b² - 4ac acts like a diagnostic scan, instantly telling us whether roots exist as distinct real numbers, twin twins, or non-real numbers before we do any heavy calculations.",
        "content": "1. Standard Quadratic Form: ax² + bx + c = 0 (a ≠ 0).\n2. The Quadratic Formula (Shreedharacharya's Formula):\n x = [-b ± √(b² - 4ac)] / (2a)\n3. Discriminant D = b² - 4ac governs the nature of roots:\n - Case 1: If D > 0, there are TWO DISTINCT REAL ROOTS.\n - Case 2: If D = 0, there are TWO EQUAL (COINCIDENT) REAL ROOTS (x = -b / 2a).\n - Case 3: If D < 0, there are NO REAL ROOTS.\n4. Real roots exist when D ≥ 0.",
        "workedExample": {
          "problem": "Find the discriminant of 2x² - 4x + 3 = 0, and hence find nature of roots.",
          "steps": [
            {
              "step": "Step 1: Identify coefficients",
              "detail": "a = 2, b = -4, c = 3."
            },
            {
              "step": "Step 2: Calculate D = b² - 4ac",
              "detail": "D = (-4)² - 4(2)(3) = 16 - 24 = -8."
            },
            {
              "step": "Step 3: Determine nature",
              "detail": "Since D = -8 < 0, this quadratic equation has no real roots."
            }
          ]
        },
        "keyFormula": "x = [-b ± √(b² - 4ac)] / 2a  |  D = b² - 4ac",
        "commonTrap": "In D = b² - 4ac, (-4)² is +16, NOT -16! Squaring any real number yields a positive value."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-qe-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Ex 4.4: Find the discriminant of 2x² - 4x + 3 = 0",
        "options": [
          {
            "id": "a",
            "text": "D = -8 (No real roots)",
            "isCorrect": true,
            "explanation": "Correct! a=2, b=-4, c=3. D = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D < 0, there are no real roots."
          },
          {
            "id": "b",
            "text": "D = 8 (Two real roots)",
            "isCorrect": false,
            "explanation": "Incorrect: 16 - 24 = -8, not +8!"
          },
          {
            "id": "c",
            "text": "D = 0 (Equal roots)",
            "isCorrect": false,
            "explanation": "Incorrect: 16 is not equal to 24."
          },
          {
            "id": "d",
            "text": "D = 40",
            "isCorrect": false,
            "explanation": "Incorrect: Remember formula is b² - 4ac."
          }
        ],
        "hint": "Use D = b² - 4ac with a=2, b=-4, c=3.",
        "conceptTag": "discriminant-calculation"
      },
      {
        "id": "q-qe10-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "For what value of k will the equation 2x² + kx + 3 = 0 have two EQUAL real roots?",
        "options": [
          {
            "id": "a",
            "text": "k = ±2√6",
            "isCorrect": true,
            "explanation": "Correct! For equal roots D = 0 => k² - 4(2)(3) = 0 => k² - 24 = 0 => k² = 24 => k = ±√24 = ±2√6."
          },
          {
            "id": "b",
            "text": "k = ±6",
            "isCorrect": false,
            "explanation": "√24 is not 6."
          },
          {
            "id": "c",
            "text": "k = ±12",
            "isCorrect": false,
            "explanation": "k² = 24."
          },
          {
            "id": "d",
            "text": "k = 24",
            "isCorrect": false,
            "explanation": "k = ±√24."
          }
        ],
        "hint": "Equal roots condition is Discriminant D = b² - 4ac = 0.",
        "conceptTag": "Equal Roots Condition"
      },
      {
        "id": "q-qe10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "If the discriminant D < 0 for ax² + bx + c = 0, what does this indicate about its roots?",
        "options": [
          {
            "id": "a",
            "text": "No real roots exist",
            "isCorrect": true,
            "explanation": "Correct! When D < 0, square root of a negative number is not real, meaning no real roots exist."
          },
          {
            "id": "b",
            "text": "Two equal real roots",
            "isCorrect": false,
            "explanation": "That is when D = 0."
          },
          {
            "id": "c",
            "text": "Two distinct rational roots",
            "isCorrect": false,
            "explanation": "That requires D > 0 and a perfect square."
          },
          {
            "id": "d",
            "text": "One real root",
            "isCorrect": false,
            "explanation": "Roots are complex conjugates."
          }
        ],
        "hint": "Can we take square root of a negative number in real numbers?",
        "conceptTag": "Discriminant Interpretation"
      },
      {
        "id": "q-qe10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Solve 3x² - 5x + 2 = 0 using the quadratic formula.",
        "options": [
          {
            "id": "a",
            "text": "x = 1 and x = 2/3",
            "isCorrect": true,
            "explanation": "Correct! a = 3, b = -5, c = 2. D = 25 - 24 = 1. x = [-(-5) ± √1] / 6 = (5 ± 1)/6 => 6/6 = 1 or 4/6 = 2/3."
          },
          {
            "id": "b",
            "text": "x = -1 and x = -2/3",
            "isCorrect": false,
            "explanation": "Formula has -b, so -(-5) = +5."
          },
          {
            "id": "c",
            "text": "x = 2 and x = 1/3",
            "isCorrect": false,
            "explanation": "Incorrect."
          },
          {
            "id": "d",
            "text": "x = 5/3 and x = 2",
            "isCorrect": false,
            "explanation": "Roots are 1 and 2/3."
          }
        ],
        "hint": "Use x = [-b ± √D] / 2a with D = 1.",
        "conceptTag": "Quadratic Formula Solution"
      }
    ],
    "assessment": {
      "id": "test-qe-1",
      "title": "Class 10 Chapter 4 NCERT Diagnostic Test",
      "questions": [
        {
          "id": "t-qe-1",
          "question": "If the quadratic equation ax² + bx + c = 0 has equal real roots, then:",
          "options": [
            {
              "id": "a",
              "text": "b² = 4ac",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "b² > 4ac",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "b² < 4ac",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "b = 0",
              "isCorrect": false
            }
          ],
          "explanation": "Equal roots occur when Discriminant D = 0 => b² - 4ac = 0 => b² = 4ac.",
          "topicSubarea": "Nature of Roots"
        },
        {
          "id": "t-qe-2",
          "question": "The roots of the quadratic equation x² - 9 = 0 are:",
          "options": [
            {
              "id": "a",
              "text": "+3 and -3",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Only +3",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Only -3",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "0 and 9",
              "isCorrect": false
            }
          ],
          "explanation": "x² = 9 => x = ±√9 = ±3.",
          "topicSubarea": "Pure Quadratic Solving"
        },
        {
          "id": "t-qe-3",
          "question": "What is the sum of roots of the quadratic equation 3x² - 6x + 2 = 0?",
          "options": [
            {
              "id": "a",
              "text": "2",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "-2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "2/3",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "-6",
              "isCorrect": false
            }
          ],
          "explanation": "Sum of roots = -b / a = -(-6) / 3 = 6 / 3 = 2.",
          "topicSubarea": "Relation between Roots and Coefficients"
        },
        {
          "id": "t-qe-4",
          "question": "Which of the following is NOT a quadratic equation?",
          "options": [
            {
              "id": "a",
              "text": "(x - 2)² + 1 = 2x - 3",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "x(x + 1) + 8 = (x + 2)(x - 2)",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "x(2x + 3) = x² + 1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "(x + 2)³ = x³ - 4",
              "isCorrect": false
            }
          ],
          "explanation": "x² + x + 8 = x² - 4 => x + 12 = 0, which is linear, NOT quadratic!",
          "topicSubarea": "Identifying Quadratic Equations"
        },
        {
          "id": "t-qe-5",
          "question": "If one root of 2x² + kx - 6 = 0 is 2, find the value of k:",
          "options": [
            {
              "id": "a",
              "text": "k = -1",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "k = 1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "k = 2",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "k = -2",
              "isCorrect": false
            }
          ],
          "explanation": "Substitute x = 2: 2(2)² + k(2) - 6 = 0 => 8 + 2k - 6 = 0 => 2k + 2 = 0 => k = -1.",
          "topicSubarea": "Root Substitution"
        }
      ]
    },
    "classId": "10",
    "subjectId": "math"
  },
  {
    "id": "real-numbers-10",
    "classId": "10",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 1",
    "title": "Real Numbers",
    "hindiTitle": "वास्तविक संख्याएँ",
    "description": "Fundamental Theorem of Arithmetic, prime factorisation method for HCF and LCM, proving irrationality of √2, √3, √5, and 3 + 2√5, and applications.",
    "estimatedMinutes": 28,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-rn10-1",
        "eyebrow": "Concept 1: Prime Factorisation",
        "title": "Fundamental Theorem of Arithmetic",
        "analogy": "Molecules built from elemental atoms: Just as every chemical molecule can be uniquely disassembled into constituent atoms, every composite number decomposes into a unique product of prime numbers.",
        "content": "1. The Fundamental Theorem of Arithmetic:\n - Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.\n2. Finding HCF and LCM by Prime Factorisation:\n - HCF = Product of the SMALLEST power of each common prime factor involved in the numbers.\n - LCM = Product of the GREATEST power of each prime factor involved in the numbers.\n3. Product Relationship for Two Numbers a and b:\n - HCF(a, b) × LCM(a, b) = a × b.\n - Note: This formula holds true ONLY for two numbers, not for three or more numbers!",
        "workedExample": {
          "problem": "Find the HCF and LCM of 96 and 404 using prime factorisation, and verify HCF × LCM = Product of numbers.",
          "steps": [
            {
              "step": "Step 1: Prime factorise both numbers",
              "detail": "96 = 2⁵ × 3; 404 = 2² × 101."
            },
            {
              "step": "Step 2: Calculate HCF",
              "detail": "Common prime is 2; smallest power is 2² = 4. HCF = 4."
            },
            {
              "step": "Step 3: Calculate LCM",
              "detail": "LCM = 2⁵ × 3 × 101 = 32 × 3 × 101 = 9696."
            },
            {
              "step": "Step 4: Verify product",
              "detail": "HCF × LCM = 4 × 9696 = 38784. 96 × 404 = 38784. Verified!"
            }
          ]
        },
        "keyFormula": "HCF(a, b) × LCM(a, b) = a × b",
        "commonTrap": "HCF × LCM = a × b × c is FALSE for three numbers! Do not apply the two-number product rule to three numbers."
      },
      {
        "id": "sec-rn10-2",
        "eyebrow": "Concept 2: Proof of Irrationality",
        "title": "Revisiting Irrational Numbers",
        "analogy": "Proof by Contradiction: Like a detective demonstrating that a suspect could not have committed the crime because it leads to an impossible physical contradiction (e.g. Being in two cities at once).",
        "content": "1. Fundamental Lemma: Let p be a prime number. If p divides a² (where a is a positive integer), then p divides a.\n2. Proof of Irrationality of √2 (Contradiction):\n - Assume √2 is rational: √2 = a/b where a and b are co-prime integers (b ≠ 0).\n - Squaring both sides: 2 = a²/b² => 2b² = a² => 2 divides a² => 2 divides a.\n - Write a = 2c. Then 2b² = (2c)² = 4c² => b² = 2c² => 2 divides b² => 2 divides b.\n - This means 2 is a common factor of both a and b, contradicting our assumption that a and b are co-prime!\n - Therefore, √2 is irrational.\n3. Properties of Irrationals:\n - Sum or difference of a rational and an irrational is always irrational (e.g. 3 + √2).\n - Product or quotient of a non-zero rational and an irrational is irrational (e.g. 5√3).",
        "workedExample": {
          "problem": "Prove that 5 - √3 is an irrational number, given that √3 is irrational.",
          "steps": [
            {
              "step": "Step 1: Assume contrary",
              "detail": "Assume 5 - √3 is rational, so 5 - √3 = a/b where a, b are integers and b ≠ 0."
            },
            {
              "step": "Step 2: Rearrange for √3",
              "detail": "√3 = 5 - a/b = (5b - a) / b."
            },
            {
              "step": "Step 3: Deduce contradiction",
              "detail": "Since a, b are integers, (5b - a)/b is rational. This implies √3 is rational, which contradicts the known fact that √3 is irrational."
            },
            {
              "step": "Step 4: Conclude",
              "detail": "Hence, 5 - √3 is irrational."
            }
          ]
        },
        "keyFormula": "If prime p divides a², then p divides a",
        "commonTrap": "Never forget to state that co-prime means highest common factor is 1 when setting up proof by contradiction."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-rn10-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "If HCF(306, 657) = 9, what is the LCM(306, 657)?",
        "options": [
          {
            "id": "a",
            "text": "22338",
            "isCorrect": true,
            "explanation": "Correct! LCM = (306 × 657) / HCF = 201042 / 9 = 22338."
          },
          {
            "id": "b",
            "text": "201042",
            "isCorrect": false,
            "explanation": "201042 is product of numbers, must divide by HCF."
          },
          {
            "id": "c",
            "text": "2238",
            "isCorrect": false,
            "explanation": "Check division: 201042 / 9 = 22338."
          },
          {
            "id": "d",
            "text": "18240",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Use LCM(a, b) = (a × b) / HCF(a, b).",
        "conceptTag": "HCF and LCM Relation"
      },
      {
        "id": "q-rn10-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Can the number 6ⁿ, where n is a natural number, ever end with the digit 0?",
        "options": [
          {
            "id": "a",
            "text": "Yes, when n is a multiple of 5",
            "isCorrect": false,
            "explanation": "6ⁿ = 2ⁿ × 3ⁿ, 5 never appears as a factor."
          },
          {
            "id": "b",
            "text": "No, because its prime factorisation contains only 2 and 3, never 5",
            "isCorrect": true,
            "explanation": "Correct! A number ends in 0 only if its prime factorisation contains both 2 and 5. 6ⁿ = (2 × 3)ⁿ has no factor 5."
          },
          {
            "id": "c",
            "text": "Yes, for all even numbers n",
            "isCorrect": false,
            "explanation": "6²=36, 6⁴=1296; always ends in 6."
          },
          {
            "id": "d",
            "text": "Yes, when n = 10",
            "isCorrect": false,
            "explanation": "Ends in 6 for all n."
          }
        ],
        "hint": "For a number to end in 0, 5 must be in its prime factorisation.",
        "conceptTag": "Prime Factorisation Logic"
      },
      {
        "id": "q-rn10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Which of the following numbers is an IRRATIONAL number?",
        "options": [
          {
            "id": "a",
            "text": "2 + √4",
            "isCorrect": false,
            "explanation": "√4 = 2, so 2 + 2 = 4 (rational)."
          },
          {
            "id": "b",
            "text": "(3 + √7)(3 - √7)",
            "isCorrect": false,
            "explanation": "3² - (√7)² = 9 - 7 = 2 (rational)."
          },
          {
            "id": "c",
            "text": "2 - 3√5",
            "isCorrect": true,
            "explanation": "Correct! Difference of rational 2 and irrational 3√5 is irrational."
          },
          {
            "id": "d",
            "text": "√144 / 12",
            "isCorrect": false,
            "explanation": "12 / 12 = 1 (rational)."
          }
        ],
        "hint": "Simplify each expression before classifying.",
        "conceptTag": "Identifying Irrationals"
      },
      {
        "id": "q-rn10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "There is a circular path around a sports field. Sonia takes 18 minutes to drive one round, while Ravi takes 12 minutes for the same. If they both start at the same point and at the same time in the same direction, after how many minutes will they meet again at the starting point?",
        "options": [
          {
            "id": "a",
            "text": "6 minutes",
            "isCorrect": false,
            "explanation": "6 is HCF, but they meet at multiples of their times (LCM)."
          },
          {
            "id": "b",
            "text": "36 minutes",
            "isCorrect": true,
            "explanation": "Correct! Meeting time at starting point is LCM(18, 12). 18 = 2 × 3², 12 = 2² × 3. LCM = 2² × 3² = 36 minutes."
          },
          {
            "id": "c",
            "text": "72 minutes",
            "isCorrect": false,
            "explanation": "36 minutes is the earliest meeting time."
          },
          {
            "id": "d",
            "text": "30 minutes",
            "isCorrect": false,
            "explanation": "LCM is 36."
          }
        ],
        "hint": "They meet at the starting point at the lowest common multiple (LCM) of their round times.",
        "conceptTag": "LCM Real-Life Application"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-rn10-1",
          "question": "If two positive integers a and b are written as a = x³y² and b = xy³, where x and y are prime numbers, then HCF(a, b) is:",
          "options": [
            {
              "id": "a",
              "text": "xy",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "xy²",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "x³y³",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "x²y²",
              "isCorrect": false
            }
          ],
          "explanation": "HCF is product of lowest powers of common prime factors: min power of x is 1, min power of y is 2 => xy².",
          "topicSubarea": "HCF of Exponents"
        },
        {
          "id": "t-rn10-2",
          "question": "The product of a non-zero rational and an irrational number is:",
          "options": [
            {
              "id": "a",
              "text": "Always irrational",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Always rational",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Rational or irrational",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "One",
              "isCorrect": false
            }
          ],
          "explanation": "Multiplying a non-zero rational by an irrational always yields an irrational number.",
          "topicSubarea": "Irrational Arithmetic"
        },
        {
          "id": "t-rn10-3",
          "question": "The total number of factors of a prime number is:",
          "options": [
            {
              "id": "a",
              "text": "1",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "2",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "3",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Infinite",
              "isCorrect": false
            }
          ],
          "explanation": "A prime number has exactly two distinct factors: 1 and itself.",
          "topicSubarea": "Prime Numbers"
        },
        {
          "id": "t-rn10-4",
          "question": "If LCM(a, 18) = 36 and HCF(a, 18) = 2, then a is:",
          "options": [
            {
              "id": "a",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "3",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "4",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "1",
              "isCorrect": false
            }
          ],
          "explanation": "a × 18 = HCF × LCM = 2 × 36 = 72 => a = 72 / 18 = 4.",
          "topicSubarea": "Finding Unknown Number"
        },
        {
          "id": "t-rn10-5",
          "question": "According to the Fundamental Theorem of Arithmetic, every composite number can be uniquely factorised into primes except for:",
          "options": [
            {
              "id": "a",
              "text": "The order of its prime factors",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Its magnitude",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The signs of factors",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Number of factors",
              "isCorrect": false
            }
          ],
          "explanation": "The prime factorisation is unique apart from the order in which factors are written (e.g. 2×3 = 3×2).",
          "topicSubarea": "Fundamental Theorem Statement"
        }
      ]
    }
  },
  {
    "id": "polynomials-10",
    "classId": "10",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 2",
    "title": "Polynomials",
    "hindiTitle": "बहुपद",
    "description": "Geometrical meaning of zeroes, parabolic graphs of quadratics, relationship between zeroes and coefficients of quadratic and cubic polynomials, and forming quadratic polynomials from given zeroes.",
    "estimatedMinutes": 28,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-poly10-1",
        "eyebrow": "Concept 1: Geometry & Zeroes",
        "title": "Geometrical Meaning of Zeroes",
        "analogy": "A basketball trajectory: When you shoot a ball, its parabolic arc y = ax² + bx + c passes through horizontal ground level (y = 0) at distinct x points. The x-coordinates where the curve crosses the X-axis are precisely the zeroes of the polynomial.",
        "content": "1. Geometrical Interpretation of Zeroes:\n - The zeroes of a polynomial p(x) are the X-COORDINATES of points where the graph of y = p(x) intersects the X-axis.\n2. Linear Polynomial ax + b (a ≠ 0):\n - Graph is a straight line intersecting X-axis at exactly 1 point: (-b/a, 0).\n3. Quadratic Polynomial ax² + bx + c (a ≠ 0):\n - Graph is a U-shaped parabola opening upwards if a > 0, downwards if a < 0.\n - Intersects X-axis at 2 distinct points (2 zeroes if D > 0).\n - Touches X-axis at 1 point (two coincident zeroes if D = 0).\n - Does not intersect X-axis at all (0 real zeroes if D < 0).\n - Maximum number of real zeroes for polynomial of degree n is n.",
        "workedExample": {
          "problem": "The graph of y = p(x) intersects the X-axis at 3 distinct points. How many zeroes does p(x) have?",
          "steps": [
            {
              "step": "Step 1: Recall definition",
              "detail": "The number of zeroes is equal to the number of points where the graph intersects the X-axis."
            },
            {
              "step": "Step 2: Count intersections",
              "detail": "The graph intersects the X-axis at 3 points."
            },
            {
              "step": "Step 3: Conclude",
              "detail": "p(x) has exactly 3 zeroes."
            }
          ]
        },
        "keyFormula": "Number of zeroes = Number of points where y = p(x) intersects X-axis",
        "commonTrap": "Do not count intersections with the Y-axis! Zeroes correspond solely to intersections with the X-axis."
      },
      {
        "id": "sec-poly10-2",
        "eyebrow": "Concept 2: Zeroes & Coefficients",
        "title": "Relationship Between Zeroes & Coefficients",
        "analogy": "Reverse engineering a puzzle: If you know the two zeroes α and β of a quadratic equation, you can reconstruct the equation without trial and error using their sum and product.",
        "content": "1. Quadratic Polynomial ax² + bx + c with zeroes α and β:\n - Sum of Zeroes: α + β = -b / a = - (coefficient of x) / (coefficient of x²)\n - Product of Zeroes: α · β = c / a = (constant term) / (coefficient of x²)\n2. Constructing Quadratic Polynomial:\n - Given sum S and product P of zeroes, polynomial is:\n p(x) = k [x² - (α + β)x + αβ] = k [x² - Sx + P] where k is any non-zero real constant.\n3. Cubic Polynomial ax³ + bx² + cx + d with zeroes α, β, γ:\n - α + β + γ = -b / a\n - αβ + βγ + γα = c / a\n - αβγ = -d / a",
        "workedExample": {
          "problem": "Find a quadratic polynomial whose sum and product of zeroes are 1/4 and -1 respectively.",
          "steps": [
            {
              "step": "Step 1: Identify S and P",
              "detail": "Sum S = α + β = 1/4; Product P = αβ = -1."
            },
            {
              "step": "Step 2: Substitute into formula",
              "detail": "p(x) = k [x² - Sx + P] = k [x² - (1/4)x - 1]."
            },
            {
              "step": "Step 3: Choose k = 4 to eliminate fractions",
              "detail": "p(x) = 4 [x² - x/4 - 1] = 4x² - x - 4."
            }
          ]
        },
        "keyFormula": "α + β = -b/a  |  αβ = c/a  |  p(x) = k[x² - (α+β)x + αβ]",
        "commonTrap": "Watch the minus sign in formula! p(x) = x² - (Sum)x + (Product). Students frequently write x² + (Sum)x."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-poly10-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What is the sum and product of zeroes of the quadratic polynomial 2x² - 8x + 6?",
        "options": [
          {
            "id": "a",
            "text": "Sum = 4, Product = 3",
            "isCorrect": true,
            "explanation": "Correct! α + β = -(-8)/2 = 8/2 = 4. αβ = 6/2 = 3."
          },
          {
            "id": "b",
            "text": "Sum = -4, Product = 3",
            "isCorrect": false,
            "explanation": "Formula has minus sign: -(-8)/2 = +4."
          },
          {
            "id": "c",
            "text": "Sum = 8, Product = 6",
            "isCorrect": false,
            "explanation": "Must divide by coefficient of x² (a = 2)."
          },
          {
            "id": "d",
            "text": "Sum = 4, Product = -3",
            "isCorrect": false,
            "explanation": "c is +6, so product is +3."
          }
        ],
        "hint": "Use α + β = -b/a and αβ = c/a where a = 2, b = -8, c = 6.",
        "conceptTag": "Zeroes-Coefficients Relation"
      },
      {
        "id": "q-poly10-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "If one zero of the quadratic polynomial x² + 3x + k is 2, what is the value of k?",
        "options": [
          {
            "id": "a",
            "text": "10",
            "isCorrect": false,
            "explanation": "Check signs: 2² + 3(2) + k = 10 + k = 0 => k = -10."
          },
          {
            "id": "b",
            "text": "-10",
            "isCorrect": true,
            "explanation": "Correct! Since 2 is a zero, p(2) = 0 => (2)² + 3(2) + k = 0 => 4 + 6 + k = 0 => k = -10."
          },
          {
            "id": "c",
            "text": "-7",
            "isCorrect": false,
            "explanation": "4 + 6 = 10."
          },
          {
            "id": "d",
            "text": "5",
            "isCorrect": false,
            "explanation": "k = -10."
          }
        ],
        "hint": "Substitute x = 2 into the polynomial and equate to 0.",
        "conceptTag": "Evaluating Unknown Constant"
      },
      {
        "id": "q-poly10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "If α and β are zeroes of p(x) = x² - 5x + 6, what is the value of 1/α + 1/β?",
        "options": [
          {
            "id": "a",
            "text": "5/6",
            "isCorrect": true,
            "explanation": "Correct! 1/α + 1/β = (α + β)/(αβ). Here α + β = 5, αβ = 6. So 1/α + 1/β = 5/6."
          },
          {
            "id": "b",
            "text": "-5/6",
            "isCorrect": false,
            "explanation": "Sum of roots is +5, not -5."
          },
          {
            "id": "c",
            "text": "6/5",
            "isCorrect": false,
            "explanation": "Sum goes in numerator, product in denominator."
          },
          {
            "id": "d",
            "text": "1/6",
            "isCorrect": false,
            "explanation": "Numerator is α + β = 5."
          }
        ],
        "hint": "Combine fractions: 1/α + 1/β = (α + β) / (αβ).",
        "conceptTag": "Symmetric Expressions of Roots"
      },
      {
        "id": "q-poly10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "If the zeroes of the polynomial ax² + bx + c are reciprocals of each other, which condition must hold true?",
        "options": [
          {
            "id": "a",
            "text": "a = c",
            "isCorrect": true,
            "explanation": "Correct! If roots are α and 1/α, their product is α · (1/α) = 1. But product of roots = c/a. Therefore c/a = 1 => c = a."
          },
          {
            "id": "b",
            "text": "b = 0",
            "isCorrect": false,
            "explanation": "b = 0 implies roots are equal and opposite in sign."
          },
          {
            "id": "c",
            "text": "a = b",
            "isCorrect": false,
            "explanation": "Reciprocal roots depend on product c/a."
          },
          {
            "id": "d",
            "text": "b² = 4ac",
            "isCorrect": false,
            "explanation": "That is the condition for equal roots."
          }
        ],
        "hint": "Product of reciprocal roots α × (1/α) = 1. Compare with c/a.",
        "conceptTag": "Reciprocal Zeroes Condition"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-poly10-1",
          "question": "The graph of a quadratic polynomial ax² + bx + c is a:",
          "options": [
            {
              "id": "a",
              "text": "Parabola",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Straight line",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Circle",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Hyperbola",
              "isCorrect": false
            }
          ],
          "explanation": "Every quadratic equation graph is a parabola opening upwards or downwards.",
          "topicSubarea": "Parabola Curve"
        },
        {
          "id": "t-poly10-2",
          "question": "A quadratic polynomial can have at most how many zeroes?",
          "options": [
            {
              "id": "a",
              "text": "1",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "2",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "3",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Infinite",
              "isCorrect": false
            }
          ],
          "explanation": "By the Fundamental Theorem of Algebra, a degree 2 polynomial can have at most 2 real zeroes.",
          "topicSubarea": "Maximum Zeroes"
        },
        {
          "id": "t-poly10-3",
          "question": "If the zeroes of x² - kx + 6 are in the ratio 2 : 3, what is a positive value of k?",
          "options": [
            {
              "id": "a",
              "text": "5",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "6",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "7",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "8",
              "isCorrect": false
            }
          ],
          "explanation": "Let zeroes be 2m and 3m. Product = 6m² = 6 => m = 1 => zeroes are 2 and 3. Sum = k = 2 + 3 = 5.",
          "topicSubarea": "Zeroes Ratio"
        },
        {
          "id": "t-poly10-4",
          "question": "The zeroes of quadratic polynomial x² + 99x + 127 are:",
          "options": [
            {
              "id": "a",
              "text": "Both positive",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Both negative",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "One positive and one negative",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Equal",
              "isCorrect": false
            }
          ],
          "explanation": "Sum α + β = -99 (negative) and Product αβ = 127 (positive). Two numbers with positive product and negative sum must both be negative.",
          "topicSubarea": "Signs of Roots"
        },
        {
          "id": "t-poly10-5",
          "question": "If α, β, γ are the zeroes of cubic polynomial ax³ + bx² + cx + d, then αβγ is equal to:",
          "options": [
            {
              "id": "a",
              "text": "-d / a",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "d / a",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "-c / a",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "b / a",
              "isCorrect": false
            }
          ],
          "explanation": "Product of zeroes of a cubic polynomial is -d / a.",
          "topicSubarea": "Cubic Zeroes Relation"
        }
      ]
    }
  },
  {
    "id": "arithmetic-progressions-10",
    "classId": "10",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 5",
    "title": "Arithmetic Progressions",
    "hindiTitle": "समांतर श्रेढ़ियाँ",
    "description": "Concept of Arithmetic Progression (AP), first term 'a', common difference 'd', nth term formula a_n = a + (n - 1)d, sum of first n terms S_n = n/2 [2a + (n - 1)d], and practical word problems.",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-ap10-1",
        "eyebrow": "Concept 1: Definition & General Term",
        "title": "Common Difference & The nth Term of an AP",
        "analogy": "Climbing a ladder with identical rung spacing: Each step elevates you by an exact, fixed distance 'd'. If first step is at height 'a', the 10th rung is at height a + 9d.",
        "content": "1. Definition of AP: A sequence in which each term is obtained by adding a fixed number 'd' to the preceding term (except the first term 'a').\n - Common difference d = aₖ₊₁ - aₖ (can be positive, negative, or zero!).\n2. General Form of an AP:\n a, a + d, a + 2d, a + 3d, ...\n3. The nth Term (General Term):\n aₙ = a + (n - 1)d\n where 'a' is first term, 'd' is common difference, and 'n' is term number (must be a positive integer).\n4. nth Term from the End: L - (n - 1)d, where L is the last term.",
        "workedExample": {
          "problem": "Find the 20th term of the AP: 3, 8, 13, 18, ...",
          "steps": [
            {
              "step": "Step 1: Identify first term a and common difference d",
              "detail": "a = 3, d = 8 - 3 = 5."
            },
            {
              "step": "Step 2: Use nth term formula aₙ = a + (n - 1)d",
              "detail": "a₂₀ = 3 + (20 - 1) × 5"
            },
            {
              "step": "Step 3: Calculate",
              "detail": "a₂₀ = 3 + 19 × 5 = 3 + 95 = 98."
            }
          ]
        },
        "keyFormula": "aₙ = a + (n - 1)d  |  Common Difference d = a₂ - a₁",
        "commonTrap": "n must be a positive integer (1, 2, 3...)! If solving for n gives a fraction or negative number, that value does not belong to the AP."
      },
      {
        "id": "sec-ap10-2",
        "eyebrow": "Concept 2: Series Summation",
        "title": "Sum of First n Terms of an AP",
        "analogy": "Carl Friedrich Gauss pairing 1 to 100: (1 + 100) = 101, (2 + 99) = 101... 50 pairs of 101 = 5050. The sum of any arithmetic sequence pairs first and last elements symmetrically.",
        "content": "1. Formula for Sum of First n Terms (Sₙ):\n Sₙ = (n / 2) [2a + (n - 1)d]\n2. Alternative Formula when Last Term 'l' is known:\n Sₙ = (n / 2) (a + l)\n3. Finding aₙ from Sₙ:\n aₙ = Sₙ - Sₙ₋₁ (The nth term is the difference between sum of n terms and sum of n-1 terms).\n4. Sum of First n Positive Integers:\n Sₙ = 1 + 2 + 3 + ... + n = n(n + 1) / 2.",
        "workedExample": {
          "problem": "Find the sum of the first 24 terms of the AP: 5, 8, 11, 14, ...",
          "steps": [
            {
              "step": "Step 1: Identify parameters",
              "detail": "a = 5, d = 8 - 5 = 3, n = 24."
            },
            {
              "step": "Step 2: Apply sum formula Sₙ = (n/2)[2a + (n - 1)d]",
              "detail": "S₂₄ = (24 / 2) [2(5) + (24 - 1)(3)]"
            },
            {
              "step": "Step 3: Evaluate inside brackets",
              "detail": "= 12 [10 + 23 × 3] = 12 [10 + 69] = 12 × 79"
            },
            {
              "step": "Step 4: Compute final product",
              "detail": "12 × 79 = 948."
            }
          ]
        },
        "keyFormula": "Sₙ = (n/2)[2a + (n - 1)d] = (n/2)(a + l)  |  S_natural = n(n + 1)/2",
        "commonTrap": "Do not forget that the term inside is 2a, not a, when using the [2a + (n-1)d] formula!"
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-ap10-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which term of the AP: 21, 18, 15, ... is -81?",
        "options": [
          {
            "id": "a",
            "text": "35th term",
            "isCorrect": true,
            "explanation": "Correct! a = 21, d = 18 - 21 = -3. aₙ = -81 => 21 + (n - 1)(-3) = -81 => -3(n - 1) = -102 => n - 1 = 34 => n = 35."
          },
          {
            "id": "b",
            "text": "34th term",
            "isCorrect": false,
            "explanation": "n - 1 = 34, so n = 35."
          },
          {
            "id": "c",
            "text": "36th term",
            "isCorrect": false,
            "explanation": "Check arithmetic: -102 / -3 = 34; n = 35."
          },
          {
            "id": "d",
            "text": "28th term",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Use a + (n - 1)d = -81 with a = 21 and d = -3.",
        "conceptTag": "Finding Term Number"
      },
      {
        "id": "q-ap10-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "What is the sum of the first 15 multiples of 8?",
        "options": [
          {
            "id": "a",
            "text": "960",
            "isCorrect": true,
            "explanation": "Correct! AP is 8, 16, 24, ... First term a = 8, d = 8, last term l = 15 × 8 = 120. S₁₅ = (15/2)(8 + 120) = (15/2)(128) = 15 × 64 = 960."
          },
          {
            "id": "b",
            "text": "1020",
            "isCorrect": false,
            "explanation": "15 × 64 = 960."
          },
          {
            "id": "c",
            "text": "840",
            "isCorrect": false,
            "explanation": "Check calculation: 15 × 64 = 960."
          },
          {
            "id": "d",
            "text": "1200",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "AP has a = 8, last term l = 8 × 15 = 120. Use Sₙ = (n/2)(a + l).",
        "conceptTag": "Multiples Summation"
      },
      {
        "id": "q-ap10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "If the nth term of an AP is given by aₙ = 9 - 5n, what is its common difference d?",
        "options": [
          {
            "id": "a",
            "text": "-5",
            "isCorrect": true,
            "explanation": "Correct! d = a₂ - a₁. a₁ = 9 - 5(1) = 4; a₂ = 9 - 5(2) = -1. d = -1 - 4 = -5. (In general, coefficient of n is always the common difference d)."
          },
          {
            "id": "b",
            "text": "5",
            "isCorrect": false,
            "explanation": "Coefficient of n is negative (-5)."
          },
          {
            "id": "c",
            "text": "9",
            "isCorrect": false,
            "explanation": "9 is the constant part, not d."
          },
          {
            "id": "d",
            "text": "4",
            "isCorrect": false,
            "explanation": "4 is the first term a₁."
          }
        ],
        "hint": "Find a₁ and a₂, then compute a₂ - a₁.",
        "conceptTag": "Common Difference from aₙ"
      },
      {
        "id": "q-ap10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "How many two-digit numbers are divisible by 3?",
        "options": [
          {
            "id": "a",
            "text": "30",
            "isCorrect": true,
            "explanation": "Correct! Two digit numbers divisible by 3: 12, 15, ..., 99. Here a = 12, d = 3, aₙ = 99. 12 + (n - 1)3 = 99 => (n - 1)3 = 87 => n - 1 = 29 => n = 30."
          },
          {
            "id": "b",
            "text": "33",
            "isCorrect": false,
            "explanation": "33 includes single-digit multiples 3, 6, 9 (33 - 3 = 30)."
          },
          {
            "id": "c",
            "text": "29",
            "isCorrect": false,
            "explanation": "n - 1 = 29, so n = 30."
          },
          {
            "id": "d",
            "text": "31",
            "isCorrect": false,
            "explanation": "There are exactly 30 two-digit multiples of 3."
          }
        ],
        "hint": "First two-digit multiple is 12, last is 99. Solve 12 + (n - 1)3 = 99.",
        "conceptTag": "Divisibility AP Problem"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-ap10-1",
          "question": "The common difference of the AP: -10, -6, -2, 2, ... is:",
          "options": [
            {
              "id": "a",
              "text": "4",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "-4",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "-2",
              "isCorrect": false
            }
          ],
          "explanation": "d = -6 - (-10) = -6 + 10 = 4.",
          "topicSubarea": "Common Difference"
        },
        {
          "id": "t-ap10-2",
          "question": "If a, b, c are in AP, then the arithmetic mean b is equal to:",
          "options": [
            {
              "id": "a",
              "text": "(a + c) / 2",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "√(ac)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "2ac / (a + c)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "a + c",
              "isCorrect": false
            }
          ],
          "explanation": "b - a = c - b => 2b = a + c => b = (a + c)/2.",
          "topicSubarea": "Arithmetic Mean"
        },
        {
          "id": "t-ap10-3",
          "question": "The sum of first n natural numbers is given by:",
          "options": [
            {
              "id": "a",
              "text": "n(n + 1) / 2",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "n²",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "n(n - 1) / 2",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "2n + 1",
              "isCorrect": false
            }
          ],
          "explanation": "Standard formula for sum of 1 to n is n(n + 1)/2.",
          "topicSubarea": "Sum of Natural Numbers"
        },
        {
          "id": "t-ap10-4",
          "question": "If the sum of first n terms of an AP is Sₙ = 3n² + 5n, its first term a₁ is:",
          "options": [
            {
              "id": "a",
              "text": "8",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "3",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "5",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "14",
              "isCorrect": false
            }
          ],
          "explanation": "First term a₁ = S₁ = 3(1)² + 5(1) = 3 + 5 = 8.",
          "topicSubarea": "First Term from Sₙ"
        },
        {
          "id": "t-ap10-5",
          "question": "The 11th term from the last term of the AP: 10, 7, 4, ..., -62 is:",
          "options": [
            {
              "id": "a",
              "text": "-32",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "-40",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "-16",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "-20",
              "isCorrect": false
            }
          ],
          "explanation": "d = -3. Term from end = L - (n - 1)d = -62 - (11 - 1)(-3) = -62 - 10(-3) = -62 + 30 = -32.",
          "topicSubarea": "nth Term from End"
        }
      ]
    }
  }
],
  science: [
  {
    "id": "chemical-reactions-10",
    "classId": "10",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 1",
    "title": "Chemical Reactions and Equations",
    "hindiTitle": "रासायनिक अभिक्रियाएँ एवं समीकरण",
    "description": "Balancing chemical equations, types of reactions (combination, decomposition, displacement, redox), and preventing corrosion and rancidity in India.",
    "estimatedMinutes": 30,
    "masteryTarget": 85,
    "learnSections": [
      {
        "id": "cr-1",
        "eyebrow": "Balancing Equations",
        "title": "1. Conservation of Mass & Diwali Whitewashing",
        "analogy": "During Diwali preparations across India, traditional houses are whitewashed with quicklime (कली चूना). When quicklime (CaO) is dropped into water, vigorous bubbling and steam occur, forming slaked lime [Ca(OH)₂] and releasing huge heat!",
        "content": "In a **Chemical Reaction**, one or more substances (reactants) transform into new substances with different chemical properties (products).\n\n**Law of Conservation of Mass**: Mass can neither be created nor destroyed in a chemical reaction.\nTherefore, **the total number of atoms of each element MUST be equal on both LHS and RHS of a chemical equation**!\n\n**Diwali Whitewashing Chemistry**:\n1. Slaking: **CaO (s) + H₂O (l) → Ca(OH)₂ (aq) + Heat** (Exothermic Combination Reaction)\n2. Wall hardening: Slaked lime applied to walls slowly reacts with carbon dioxide in the air to form a shiny, hard layer of calcium carbonate (marble sheen):\n**Ca(OH)₂ (aq) + CO₂ (g) → CaCO₃ (s) + H₂O (l)**",
        "workedExample": {
          "problem": "NCERT Example: Balance the equation for the burning of natural gas (methane): CH₄ + O₂ → CO₂ + H₂O",
          "steps": [
            {
              "step": "Step 1: Count atoms on both sides",
              "detail": "LHS: C=1, H=4, O=2. RHS: C=1, H=2, O=3."
            },
            {
              "step": "Step 2: Balance Hydrogen atoms",
              "detail": "Put coefficient 2 before H₂O on RHS: CH₄ + O₂ → CO₂ + 2H₂O. Now H is 4 on both sides."
            },
            {
              "step": "Step 3: Balance Oxygen atoms",
              "detail": "Now RHS has 2 + 2 = 4 oxygen atoms. Put coefficient 2 before O₂ on LHS: CH₄ + 2O₂ → CO₂ + 2H₂O."
            },
            {
              "step": "Check",
              "detail": "LHS: C=1, H=4, O=4. RHS: C=1, H=4, O=4. Perfectly balanced!"
            }
          ]
        },
        "keyFormula": "Total Mass of Reactants = Total Mass of Products. Exothermic: releases heat. Endothermic: absorbs heat.",
        "commonTrap": "Never change the subscripts of a chemical formula to balance an equation! (e.g. changing H₂O to H₂O₂ to balance oxygen destroys the compound identity)."
      },
      {
        "id": "cr-2",
        "eyebrow": "Types of Reactions",
        "title": "2. Four Major Types of Chemical Reactions & Rusting",
        "analogy": "Leaving an iron bicycle outside during the Indian monsoon: The shiny iron metal reacts with moisture and oxygen to form a reddish-brown flaky coating of rust (जंग लगना).",
        "content": "**Four Core NCERT Reaction Types**:\n1. **Combination Reaction**: Two or more reactants combine to form a single product (e.g. 2Mg + O₂ → 2MgO).\n2. **Decomposition Reaction**: A single reactant breaks down into two or more simpler products (e.g. 2FeSO₄ → Fe₂O₃ + SO₂ + SO₃). Requires heat, light, or electricity!\n3. **Displacement Reaction**: A more reactive metal displaces a less reactive metal from its salt solution (e.g. Iron nail in blue Copper Sulphate: Fe + CuSO₄ → FeSO₄ + Cu).\n4. **Redox (Oxidation-Reduction) Reaction**:\n   - **Oxidation**: Addition of oxygen or loss of hydrogen/electrons.\n   - **Reduction**: Loss of oxygen or gain of hydrogen/electrons.",
        "workedExample": {
          "problem": "NCERT Question: In the reaction CuO + H₂ → Cu + H₂O, identify the substance oxidized and the substance reduced.",
          "steps": [
            {
              "step": "Step 1: Track Copper Oxide",
              "detail": "CuO loses oxygen to become Cu. Loss of oxygen = Reduction. Therefore, CuO is REDUCED."
            },
            {
              "step": "Step 2: Track Hydrogen",
              "detail": "H₂ gains oxygen to become H₂O. Gain of oxygen = Oxidation. Therefore, H₂ is OXIDIZED."
            }
          ]
        },
        "keyFormula": "Oxidation = Gain of O (or loss of e⁻). Reduction = Loss of O (or gain of e⁻).",
        "commonTrap": "Confusing corrosion with rancidity: Corrosion is metal oxidation (like rusting iron), whereas rancidity is the oxidation of fats and oils in food items."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-cr-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Textbook: An iron nail is dipped in blue copper sulphate solution for 20 minutes. What happens?",
        "options": [
          {
            "id": "a",
            "text": "Blue color fades to light green and reddish-brown copper deposits on the nail",
            "isCorrect": true,
            "explanation": "Correct! Fe is more reactive than Cu: Fe + CuSO₄ (blue) → FeSO₄ (green) + Cu (brown)."
          },
          {
            "id": "b",
            "text": "No reaction takes place because iron is less reactive",
            "isCorrect": false,
            "explanation": "Incorrect: Iron is more reactive than copper in the reactivity series."
          },
          {
            "id": "c",
            "text": "The nail completely dissolves into liquid within 5 minutes",
            "isCorrect": false,
            "explanation": "Incorrect: Copper simply deposits on the nail surface."
          },
          {
            "id": "d",
            "text": "The solution turns bright yellow with gas bubbles",
            "isCorrect": false,
            "explanation": "Incorrect: The solution turns greenish iron sulphate."
          }
        ],
        "hint": "Remember the displacement reaction between iron and copper sulphate.",
        "conceptTag": "displacement-reaction"
      },
      {
        "id": "p-cr-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Why are packets of potato chips (like Lays or Balaji) flushed with Nitrogen gas during packaging?",
        "options": [
          {
            "id": "a",
            "text": "Nitrogen prevents the fats and oils from getting oxidized (rancidity)",
            "isCorrect": true,
            "explanation": "Excellent! Nitrogen is an unreactive inert gas that prevents oxidation (विकृतगंधिता/rancidity), keeping chips fresh and crisp."
          },
          {
            "id": "b",
            "text": "Nitrogen adds spicy flavor to the chips",
            "isCorrect": false,
            "explanation": "Incorrect: Nitrogen is odorless and tasteless."
          },
          {
            "id": "c",
            "text": "Nitrogen makes the packet heavy for shipping",
            "isCorrect": false,
            "explanation": "Incorrect: Nitrogen is light."
          },
          {
            "id": "d",
            "text": "Nitrogen keeps the chips at freezing temperature",
            "isCorrect": false,
            "explanation": "Incorrect: Gaseous nitrogen at room temperature does not freeze."
          }
        ],
        "hint": "Think about how oxygen spoils fried oily snacks.",
        "conceptTag": "rancidity-prevention"
      },
      {
        "id": "q-cr10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Why is cellular respiration considered an exothermic reaction in biology?",
        "options": [
          {
            "id": "a",
            "text": "Glucose combines with oxygen in cells to release energy: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy",
            "isCorrect": true,
            "explanation": "Correct! Respiration breaks down glucose and releases chemical energy in the form of ATP, making it an exothermic reaction."
          },
          {
            "id": "b",
            "text": "Heat is absorbed from surrounding blood",
            "isCorrect": false,
            "explanation": "Energy is released, not absorbed."
          },
          {
            "id": "c",
            "text": "Carbon dioxide is inhaled",
            "isCorrect": false,
            "explanation": "CO₂ is exhaled."
          },
          {
            "id": "d",
            "text": "It decomposes food into cold ash",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Respiration releases energy to power bodily functions.",
        "conceptTag": "Exothermic Respiration"
      },
      {
        "id": "q-cr10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "In the redox reaction CuO + H₂ → Cu + H₂O, identify the substance oxidized and the substance reduced.",
        "options": [
          {
            "id": "a",
            "text": "H₂ is oxidized and CuO is reduced",
            "isCorrect": true,
            "explanation": "Correct! H₂ gains oxygen to become H₂O (oxidation). CuO loses oxygen to become Cu (reduction)."
          },
          {
            "id": "b",
            "text": "CuO is oxidized and H₂ is reduced",
            "isCorrect": false,
            "explanation": "CuO loses oxygen, so it is reduced."
          },
          {
            "id": "c",
            "text": "Both H₂ and CuO are reduced",
            "isCorrect": false,
            "explanation": "One must be oxidized in a redox reaction."
          },
          {
            "id": "d",
            "text": "Neither is oxidized nor reduced",
            "isCorrect": false,
            "explanation": "This is a classical redox reaction."
          }
        ],
        "hint": "Oxidation is gain of oxygen; reduction is loss of oxygen.",
        "conceptTag": "Redox Identification"
      }
    ],
    "assessment": {
      "id": "test-cr-10",
      "title": "Class 10 Chapter 1 NCERT Diagnostic Assessment: Chemical Reactions",
      "questions": [
        {
          "id": "t-cr-1",
          "question": "When calcium oxide (quicklime) reacts vigorously with water, it produces slaked lime. This reaction is classified as:",
          "options": [
            {
              "id": "a",
              "text": "Combination and Exothermic Reaction",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Decomposition and Endothermic Reaction",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Displacement Reaction",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Neutralization Reaction only",
              "isCorrect": false
            }
          ],
          "explanation": "Two reactants combine to form one product (combination), accompanied by the release of significant heat (exothermic).",
          "topicSubarea": "Combination Reactions"
        },
        {
          "id": "t-cr-2",
          "question": "The shiny white finish that appears on walls 2 to 3 days after whitewashing is due to the formation of:",
          "options": [
            {
              "id": "a",
              "text": "Calcium Carbonate (CaCO₃)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Calcium Oxide (CaO)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Calcium Hydroxide [Ca(OH)₂]",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Calcium Nitrate [Ca(NO₃)₂]",
              "isCorrect": false
            }
          ],
          "explanation": "Ca(OH)₂ on walls reacts slowly with atmospheric CO₂ to form a smooth protective coat of CaCO₃.",
          "topicSubarea": "Whitewashing Chemistry"
        },
        {
          "id": "t-cr-3",
          "question": "In the reaction: MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂, the substance being oxidized is:",
          "options": [
            {
              "id": "a",
              "text": "HCl (Hydrochloric acid)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "MnO₂",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "MnCl₂",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "H₂O",
              "isCorrect": false
            }
          ],
          "explanation": "HCl loses hydrogen to become Cl₂, which corresponds to oxidation.",
          "topicSubarea": "Redox Reactions"
        },
        {
          "id": "t-cr-4",
          "question": "Which of the following processes is an endothermic reaction (absorbs heat)?",
          "options": [
            {
              "id": "a",
              "text": "Decomposition of Ferrous Sulphate crystals by heating",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Respiration in humans",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Burning of natural gas",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Dilution of sulphuric acid in water",
              "isCorrect": false
            }
          ],
          "explanation": "Thermal decomposition requires external heat input to break down chemical bonds.",
          "topicSubarea": "Endothermic vs Exothermic"
        },
        {
          "id": "t-cr-5",
          "question": "The formula of rust formed on iron surfaces is:",
          "options": [
            {
              "id": "a",
              "text": "Fe₂O₃ · xH₂O (Hydrated Ferric Oxide)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "FeO",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Fe₃O₄",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Fe(OH)₂",
              "isCorrect": false
            }
          ],
          "explanation": "Rust is chemically hydrated ferric oxide: Fe₂O₃ · xH₂O.",
          "topicSubarea": "Corrosion"
        }
      ]
    }
  },
  {
    "id": "light-reflection-10",
    "classId": "10",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 9",
    "title": "Light – Reflection and Refraction",
    "hindiTitle": "प्रकाश – परावर्तन तथा अपवर्तन",
    "description": "Spherical mirrors, mirror formula, refractive index, Snell’s law, and rear-view mirrors in Indian vehicles.",
    "estimatedMinutes": 30,
    "masteryTarget": 85,
    "learnSections": [
      {
        "id": "lr-1",
        "eyebrow": "Spherical Mirrors",
        "title": "1. Convex Mirrors in Indian Vehicles & Real vs Virtual Images",
        "analogy": "Look at the side rear-view mirror of an auto-rickshaw or motorbike. It has the famous inscription: \"Objects in the mirror are closer than they appear!\" Why are convex mirrors chosen?",
        "content": "**Spherical Mirrors**:\n- **Concave Mirror** (अवतल दर्पण): Reflecting surface curves inwards. Can form both real-inverted and virtual-erect images. Used by dentists to see enlarged teeth, and in solar cookers and car headlights!\n- **Convex Mirror** (उत्तल दर्पण): Reflecting surface curves outwards. **Always forms a virtual, erect, and diminished (smaller) image.**\n  - Why used as rear-view vehicle mirrors: Gives a much wider field of view (दृष्टि-क्षेत्र) enabling the driver to view full highway traffic behind!\n\n**The Mirror Formula & Magnification**:\n**1/f = 1/v + 1/u**\n- **u** = Object distance (always negative according to New Cartesian Sign Convention).\n- **v** = Image distance.\n- **f** = Focal length (negative for concave, positive for convex).\n- **Magnification m = h' / h = -v / u**.",
        "workedExample": {
          "problem": "NCERT Question: A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. Find its focal length.",
          "steps": [
            {
              "step": "Step 1: Formula",
              "detail": "Focal length f = Radius of curvature R / 2"
            },
            {
              "step": "Step 2: Sign for convex mirror",
              "detail": "For convex mirror, focus is behind the mirror (positive): f = +3.00 / 2 = +1.50 metres."
            }
          ]
        },
        "keyFormula": "Mirror Formula: 1/f = 1/v + 1/u. Lens Formula: 1/f = 1/v - 1/u. Power P = 1 / f (in metres).",
        "commonTrap": "Sign convention mistake: Forgetting that object distance u is ALWAYS negative in coordinate geometry calculations!"
      },
      {
        "id": "sec-lr10-2",
        "eyebrow": "Concept 2: Refraction & Lenses",
        "title": "Refraction of Light, Snell's Law & Lens Formula",
        "analogy": "A car driving from paved asphalt into deep sand at an angle: One wheel slows down before the other, causing the entire vehicle to swerve and change direction. When light transitions into an optically denser medium, it slows down and bends towards the normal.",
        "content": "1. Laws of Refraction & Snell's Law:\n - Incident ray, refracted ray, and normal at point of incidence all lie in the same plane.\n - Snell's Law: sin(i) / sin(r) = constant = n₂₁ (refractive index of medium 2 with respect to medium 1).\n2. Absolute Refractive Index (n):\n - n = c / v (speed of light in vacuum / speed of light in medium). Light in vacuum c = 3 × 10⁸ m/s.\n3. Spherical Lenses:\n - Convex Lens: Converging lens (thicker in middle, real inverted image for most positions, virtual erect when object between F and optical centre).\n - Concave Lens: Diverging lens (thinner in middle, always forms virtual, erect, and diminished image).\n4. Lens Formula & Magnification:\n - 1/f = 1/v - 1/u (Note the minus sign!).\n - Magnification m = v / u = h' / h.\n5. Power of a Lens (P):\n - Reciprocal of focal length in metres: P = 1 / f (in metres).\n - SI unit: Dioptre (D). 1 D = 1 m⁻¹. Convex lens has positive power (+); concave lens has negative power (-).",
        "workedExample": {
          "problem": "A convex lens has a focal length of +20 cm. Find its optical power in dioptres.",
          "steps": [
            {
              "step": "Step 1: Convert focal length to metres",
              "detail": "f = +20 cm = +0.20 m."
            },
            {
              "step": "Step 2: Apply formula P = 1 / f(m)",
              "detail": "P = 1 / (+0.20) = +5 Dioptres (+5 D)."
            },
            {
              "step": "Step 3: Conclusion",
              "detail": "Power of the convex lens is +5 D."
            }
          ]
        },
        "keyFormula": "Lens Formula: 1/f = 1/v - 1/u  |  Power P = 1 / f(m) (Dioptres)",
        "commonTrap": "In Mirror Formula it is 1/f = 1/v + 1/u and m = -v/u. In Lens Formula it is 1/f = 1/v - 1/u and m = +v/u. Do not swap lens and mirror formulas!"
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-lr-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Question: What is the focal length of a spherical convex mirror whose radius of curvature is 32 cm?",
        "options": [
          {
            "id": "a",
            "text": "+16 cm",
            "isCorrect": true,
            "explanation": "Correct! f = R / 2 = 32 / 2 = +16 cm (focal length of convex mirror is positive)."
          },
          {
            "id": "b",
            "text": "-16 cm",
            "isCorrect": false,
            "explanation": "Incorrect: Convex mirror has a positive focal length."
          },
          {
            "id": "c",
            "text": "+64 cm",
            "isCorrect": false,
            "explanation": "Incorrect: Multiplied instead of dividing by 2."
          },
          {
            "id": "d",
            "text": "+32 cm",
            "isCorrect": false,
            "explanation": "Incorrect: 32 cm is the radius of curvature R, not focal length."
          }
        ],
        "hint": "Remember f = R / 2.",
        "conceptTag": "mirror-focal-length"
      },
      {
        "id": "q-lr10-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "A doctor prescribes a corrective lens of power -2.0 D. What is the focal length and nature of the lens?",
        "options": [
          {
            "id": "a",
            "text": "Focal length = -0.5 m, Concave lens (diverging)",
            "isCorrect": true,
            "explanation": "Correct! f = 1 / P = 1 / (-2.0 D) = -0.5 m = -50 cm. Negative focal length indicates a concave (diverging) lens used to correct myopia."
          },
          {
            "id": "b",
            "text": "Focal length = +0.5 m, Convex lens",
            "isCorrect": false,
            "explanation": "Convex lenses have positive power."
          },
          {
            "id": "c",
            "text": "Focal length = -2 m, Convex lens",
            "isCorrect": false,
            "explanation": "f = 1/P = -0.5 m."
          },
          {
            "id": "d",
            "text": "Focal length = +2 m, Concave lens",
            "isCorrect": false,
            "explanation": "Power is -2.0 D."
          }
        ],
        "hint": "Use f = 1 / P. Negative power means concave lens.",
        "conceptTag": "Lens Power and Focal Length"
      },
      {
        "id": "q-lr10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "According to Snell's law, for a given pair of media and color of light, which ratio remains constant?",
        "options": [
          {
            "id": "a",
            "text": "sin(i) / sin(r)",
            "isCorrect": true,
            "explanation": "Correct! Snell's Law states that the ratio of the sine of angle of incidence to the sine of angle of refraction is constant: sin i / sin r = n₂₁."
          },
          {
            "id": "b",
            "text": "cos(i) / cos(r)",
            "isCorrect": false,
            "explanation": "It is the sine ratio."
          },
          {
            "id": "c",
            "text": "tan(i) / tan(r)",
            "isCorrect": false,
            "explanation": "It is sine, not tangent."
          },
          {
            "id": "d",
            "text": "i / r",
            "isCorrect": false,
            "explanation": "Ratio of angles is not constant, ratio of their sines is."
          }
        ],
        "hint": "Snell's law uses the sine function.",
        "conceptTag": "Snell's Law"
      },
      {
        "id": "q-lr10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "An object is placed 10 cm in front of a convex mirror of focal length 15 cm. Where is the image formed?",
        "options": [
          {
            "id": "a",
            "text": "+6 cm (behind the mirror)",
            "isCorrect": true,
            "explanation": "Correct! For convex mirror, f = +15 cm, u = -10 cm. 1/v = 1/f - 1/u = 1/15 - 1/(-10) = 1/15 + 1/10 = 5/30 = 1/6 => v = +6 cm."
          },
          {
            "id": "b",
            "text": "-6 cm (in front of mirror)",
            "isCorrect": false,
            "explanation": "Convex mirrors always form virtual images behind the mirror (v > 0)."
          },
          {
            "id": "c",
            "text": "+30 cm",
            "isCorrect": false,
            "explanation": "1/15 + 1/10 = 5/30 = 1/6."
          },
          {
            "id": "d",
            "text": "+15 cm",
            "isCorrect": false,
            "explanation": "v = +6 cm."
          }
        ],
        "hint": "Mirror formula: 1/v + 1/u = 1/f with f = +15 and u = -10.",
        "conceptTag": "Convex Mirror Image Distance"
      }
    ],
    "assessment": {
      "id": "test-lr-10",
      "title": "Class 10 Chapter 9 NCERT Diagnostic Assessment: Light Reflection & Refraction",
      "questions": [
        {
          "id": "t-lr-1",
          "question": "Why are convex mirrors preferred as rear-view mirrors in vehicles?",
          "options": [
            {
              "id": "a",
              "text": "They always give an erect image and have a wider field of view",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "They produce highly magnified real images",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "They are cheaper to manufacture",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "They focus sunlight to keep mirrors clean",
              "isCorrect": false
            }
          ],
          "explanation": "Convex mirrors curve outwards, offering a wide panoramic field of view with upright diminished images.",
          "topicSubarea": "Convex Mirror Applications"
        },
        {
          "id": "t-lr-2",
          "question": "The unit of power of a lens is the:",
          "options": [
            {
              "id": "a",
              "text": "Dioptre (D)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Centimetre",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Metre/second",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Candela",
              "isCorrect": false
            }
          ],
          "explanation": "Power of a lens P = 1 / f (in metres), measured in Dioptres (D).",
          "topicSubarea": "Power of Lens"
        },
        {
          "id": "t-lr-3",
          "question": "When light travels obliquely from a rarer medium (air) into a denser medium (glass), it:",
          "options": [
            {
              "id": "a",
              "text": "Bends towards the normal",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Bends away from the normal",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Continues along the exact same path",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Reflects backward at 180 degrees",
              "isCorrect": false
            }
          ],
          "explanation": "Light slows down in the optically denser medium, bending towards the normal line.",
          "topicSubarea": "Refraction of Light"
        },
        {
          "id": "t-lr-4",
          "question": "The magnification produced by a plane mirror is always:",
          "options": [
            {
              "id": "a",
              "text": "+1",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "-1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Greater than +1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Zero",
              "isCorrect": false
            }
          ],
          "explanation": "Plane mirror forms an image of the exact same size as the object (m = 1) and upright (+ sign).",
          "topicSubarea": "Magnification"
        },
        {
          "id": "t-lr-5",
          "question": "Which type of mirror is used by dentists to view magnified images of teeth?",
          "options": [
            {
              "id": "a",
              "text": "Concave mirror",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Convex mirror",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Plane mirror",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Cylindrical mirror",
              "isCorrect": false
            }
          ],
          "explanation": "When an object is placed close between Pole and Focus of a concave mirror, it forms an enlarged, erect, virtual image.",
          "topicSubarea": "Concave Mirror Applications"
        }
      ]
    }
  },
  {
    "id": "electricity-10",
    "classId": "10",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 11",
    "title": "Electricity",
    "hindiTitle": "विद्युत",
    "description": "Electric current and circuit, electric potential and potential difference, Ohm's law, resistance and resistivity factors, series and parallel resistor circuits, heating effect of electric current (Joule's law), and electric power.",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-elec10-1",
        "eyebrow": "Concept 1: Current & Ohm's Law",
        "title": "Current, Potential Difference & Ohm's Law",
        "analogy": "Water flowing down a pipeline from a rooftop tank: Water pressure height difference (Potential difference V) pushes water volume rate (Current I) through a narrow pipe with internal friction (Resistance R).",
        "content": "1. Electric Current (I):\n - Rate of flow of electric charges: I = Q / t.\n - SI unit: Ampere (A). 1 A = 1 Coulomb / 1 second.\n - 1 Coulomb = charge of 6.25 × 10¹⁸ electrons (charge on 1 electron e = -1.6 × 10⁻¹⁹ C).\n - Conventional current flows from positive (+) to negative (-) terminal (opposite to electron flow).\n2. Electric Potential Difference (V):\n - Work done to move a unit positive charge from one point to another: V = W / Q.\n - SI unit: Volt (V). 1 V = 1 Joule / 1 Coulomb.\n3. Ohm's Law:\n - At constant temperature, the current flowing through a metallic conductor is directly proportional to the potential difference across its ends: V ∝ I => V = IR.\n - Resistance R (SI unit Ohm, Ω): Property of a conductor to resist flow of charges.\n4. Factors Affecting Resistance:\n - R = ρ (l / A) where l is length, A is cross-sectional area, and ρ is electrical resistivity of material (SI unit Ω·m).\n - R is directly proportional to length (longer wire => higher resistance).\n - R is inversely proportional to area (thicker wire => lower resistance).\n - Resistivity ρ depends only on nature of material and temperature (not on length or area!).",
        "workedExample": {
          "problem": "A 6 V battery is connected across an unknown resistor. There is a current of 2.5 mA in the circuit. Find the value of resistance.",
          "steps": [
            {
              "step": "Step 1: Convert units to SI",
              "detail": "V = 6 V. Current I = 2.5 mA = 2.5 × 10⁻³ A."
            },
            {
              "step": "Step 2: Apply Ohm's Law R = V / I",
              "detail": "R = 6 / (2.5 × 10⁻³) = 6000 / 2.5."
            },
            {
              "step": "Step 3: Calculate resistance",
              "detail": "R = 2400 Ω = 2.4 kΩ."
            }
          ]
        },
        "keyFormula": "I = Q / t  |  V = W / Q  |  V = IR  |  R = ρ l / A",
        "commonTrap": "Resistivity ρ does NOT change when a wire is stretched or cut! Resistivity is an intrinsic material property. Only resistance R changes."
      },
      {
        "id": "sec-elec10-2",
        "eyebrow": "Concept 2: Combinations & Heating",
        "title": "Circuit Combinations & Joule's Heating",
        "analogy": "Holiday decorative lights vs household sockets: In series fairy lights, if one bulb burns out, the whole string goes dark! In parallel home circuits, each appliance operates independently on the full 220 V supply.",
        "content": "1. Series Combination of Resistors:\n - Same current I passes through every resistor; total voltage V = V₁ + V₂ + V₃.\n - Equivalent Resistance: R_eq = R₁ + R₂ + R₃ (always greater than individual resistances).\n2. Parallel Combination of Resistors:\n - Same voltage V across each resistor; total current I = I₁ + I₂ + I₃.\n - Equivalent Resistance: 1 / R_eq = 1/R₁ + 1/R₂ + 1/R₃ (always smaller than smallest individual resistance!).\n - For two resistors in parallel: R_eq = (R₁ × R₂) / (R₁ + R₂).\n3. Heating Effect of Electric Current (Joule's Law of Heating):\n - Heat produced H = I² R t = V I t = (V² / R) t. (Heat is proportional to square of current, resistance, and time).\n - Applications: Electric toaster, electric iron, electric heater (all use Nichrome alloy with high resistivity and high melting point that does not oxidize at high heat).\n - Electric Fuse: Safety device made of lead-tin alloy with low melting point that melts and breaks circuit during overloading or short circuit.\n4. Electric Power (P):\n - P = V I = I² R = V² / R. SI unit: Watt (W).\n - 1 kWh = 3.6 × 10⁶ Joules.",
        "workedExample": {
          "problem": "An electric iron consumes energy at a rate of 840 W when heating at maximum rate. The voltage is 220 V. What is the current and resistance?",
          "steps": [
            {
              "step": "Step 1: Calculate current using P = VI",
              "detail": "I = P / V = 840 W / 220 V = 3.82 A."
            },
            {
              "step": "Step 2: Calculate resistance using R = V / I or R = V² / P",
              "detail": "R = (220)² / 840 = 48400 / 840 = 57.6 Ω."
            }
          ]
        },
        "keyFormula": "R_series = ΣRᵢ  |  1/R_parallel = Σ(1/Rᵢ)  |  H = I² R t  |  P = V I = V²/R",
        "commonTrap": "In parallel circuits, smaller resistance draws MORE power (P = V²/R) because voltage is constant! In series, larger resistance draws more power (P = I²R)."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-elec10-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "If a wire of resistance R is melted and stretched to DOUBLE its original length without altering mass, its new resistance becomes:",
        "options": [
          {
            "id": "a",
            "text": "2R",
            "isCorrect": false,
            "explanation": "When length doubles, area halves (volume = l × A is constant)."
          },
          {
            "id": "b",
            "text": "4R",
            "isCorrect": true,
            "explanation": "Correct! Volume is constant: l' = 2l implies A' = A/2. New resistance R' = ρ(2l)/(A/2) = 4ρ(l/A) = 4R."
          },
          {
            "id": "c",
            "text": "R / 2",
            "isCorrect": false,
            "explanation": "Stretching increases resistance."
          },
          {
            "id": "d",
            "text": "R / 4",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Volume = length × area is constant. Doubling length halves cross-sectional area.",
        "conceptTag": "Resistance Scaling with Stretching"
      },
      {
        "id": "q-elec10-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. What is their combined equivalent resistance?",
        "options": [
          {
            "id": "a",
            "text": "11 Ω",
            "isCorrect": false,
            "explanation": "11 Ω is their series sum (2 + 3 + 6), not parallel."
          },
          {
            "id": "b",
            "text": "1 Ω",
            "isCorrect": true,
            "explanation": "Correct! 1/R = 1/2 + 1/3 + 1/6 = (3 + 2 + 1) / 6 = 6/6 = 1. So R = 1 Ω."
          },
          {
            "id": "c",
            "text": "2 Ω",
            "isCorrect": false,
            "explanation": "Parallel equivalent is strictly less than smallest resistor (2 Ω)."
          },
          {
            "id": "d",
            "text": "0.5 Ω",
            "isCorrect": false,
            "explanation": "1/R = 1 => R = 1 Ω."
          }
        ],
        "hint": "Use 1/R_eq = 1/2 + 1/3 + 1/6.",
        "conceptTag": "Parallel Equivalent Resistance"
      },
      {
        "id": "q-elec10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Why are heating elements of appliances like toasters and geysers made of an alloy like Nichrome rather than pure copper?",
        "options": [
          {
            "id": "a",
            "text": "Nichrome has higher resistivity and does not oxidize (burn) easily at high temperatures",
            "isCorrect": true,
            "explanation": "Correct! Alloys have higher resistivity than pure metals and do not oxidize (burn) even at red hot temperatures."
          },
          {
            "id": "b",
            "text": "Nichrome has zero electrical resistance",
            "isCorrect": false,
            "explanation": "Zero resistance produces zero heat (H = I²Rt)."
          },
          {
            "id": "c",
            "text": "Nichrome is a liquid at room temperature",
            "isCorrect": false,
            "explanation": "Nichrome is a solid alloy of Nickel and Chromium."
          },
          {
            "id": "d",
            "text": "Copper cannot conduct current",
            "isCorrect": false,
            "explanation": "Copper conducts current very well, hence low heat."
          }
        ],
        "hint": "High resistivity produces high heat (I²Rt) and alloy resists oxidation.",
        "conceptTag": "Heating Element Materials"
      },
      {
        "id": "q-elec10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Two electric bulbs rated 220 V, 100 W and 220 V, 40 W are connected in SERIES to a 220 V supply. Which bulb will glow brighter?",
        "options": [
          {
            "id": "a",
            "text": "The 100 W bulb",
            "isCorrect": false,
            "explanation": "In series, current I is same. Bulb with higher resistance consumes more power (P = I²R)."
          },
          {
            "id": "b",
            "text": "The 40 W bulb",
            "isCorrect": true,
            "explanation": "Correct! R = V²/P. The 40 W bulb has higher resistance (R_40 = 220²/40 = 1210 Ω vs R_100 = 484 Ω). In series, current is identical, so heat produced H = I²R is higher in 40 W bulb, making it glow brighter!"
          },
          {
            "id": "c",
            "text": "Both will glow with identical brightness",
            "isCorrect": false,
            "explanation": "Resistances are different."
          },
          {
            "id": "d",
            "text": "Neither will glow",
            "isCorrect": false,
            "explanation": "Circuit is complete, both will glow."
          }
        ],
        "hint": "Calculate resistance R = V²/P. In series, same current flows through both, and power P = I²R.",
        "conceptTag": "Bulb Brightness in Series"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-elec10-1",
          "question": "The SI unit of electrical resistivity is:",
          "options": [
            {
              "id": "a",
              "text": "Ohm-metre (Ω·m)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Ohm / metre (Ω/m)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Ohm (Ω)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Volt / Ampere",
              "isCorrect": false
            }
          ],
          "explanation": "ρ = R·A / l => (Ω · m²) / m = Ω·m.",
          "topicSubarea": "Resistivity Unit"
        },
        {
          "id": "t-elec10-2",
          "question": "An ammeter is always connected in ________ and a voltmeter in ________ in a circuit:",
          "options": [
            {
              "id": "a",
              "text": "Series, Parallel",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Parallel, Series",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Series, Series",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Parallel, Parallel",
              "isCorrect": false
            }
          ],
          "explanation": "Ammeter has very low resistance and connects in series; voltmeter has very high resistance and connects in parallel across components.",
          "topicSubarea": "Circuit Instruments"
        },
        {
          "id": "t-elec10-3",
          "question": "According to Joule's law of heating, heat produced is proportional to:",
          "options": [
            {
              "id": "a",
              "text": "Square of current (I²)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Square root of current (√I)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Inverse of resistance (1/R)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Inverse of time (1/t)",
              "isCorrect": false
            }
          ],
          "explanation": "H = I² R t, so heat is proportional to the square of current.",
          "topicSubarea": "Joule's Law"
        },
        {
          "id": "t-elec10-4",
          "question": "What is the commercial unit of electric energy commonly called 1 \"unit\"?",
          "options": [
            {
              "id": "a",
              "text": "Kilowatt-hour (kWh)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Watt-hour",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Joule-second",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Coulomb-volt",
              "isCorrect": false
            }
          ],
          "explanation": "1 commercial unit of electricity is 1 kilowatt-hour (1 kWh).",
          "topicSubarea": "Commercial Energy Unit"
        },
        {
          "id": "t-elec10-5",
          "question": "An electric fuse protects electrical circuits against:",
          "options": [
            {
              "id": "a",
              "text": "Short-circuiting and overloading",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Voltage drops only",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Electric shock to users only",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Chemical corrosion",
              "isCorrect": false
            }
          ],
          "explanation": "Fuse melts when excessive current flows due to overloading or direct contact between live and neutral wires (short circuit).",
          "topicSubarea": "Fuse Safety"
        }
      ]
    }
  },
  {
    "id": "magnetic-effects-10",
    "classId": "10",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 12",
    "title": "Magnetic Effects of Electric Current",
    "hindiTitle": "विद्युत धारा के चुंबकीय प्रभाव",
    "description": "Magnetic field lines, field due to straight conductor, Right-Hand Thumb Rule, circular loop and solenoid, force on a current-carrying conductor, Fleming's Left-Hand Rule, electric motor, electromagnetic induction, and domestic electric circuits.",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-mag10-1",
        "eyebrow": "Concept 1: Field Lines & Solenoid",
        "title": "Magnetic Fields & Electromagnets",
        "analogy": "Iron filings dancing around a bar magnet: The invisible curves along which filings align reveal magnetic field lines emerging from North Pole and merging into South Pole, forming closed continuous loops.",
        "content": "1. Properties of Magnetic Field Lines:\n - Emerge from North pole and enter South pole outside magnet; inside magnet they travel from South to North.\n - Magnetic field lines are closed continuous loops.\n - Degree of closeness of lines indicates strength of field (crowded at poles => strong field).\n - Two magnetic field lines NEVER intersect each other! (If they did, a compass needle at point of intersection would point in two directions simultaneously, which is impossible).\n2. Field Due to Current-Carrying Straight Conductor:\n - Forms concentric circles around the wire.\n - Right-Hand Thumb Rule: If you hold a current-carrying straight wire with your right hand such that your thumb points in direction of current, your curled fingers wrap in direction of magnetic field lines.\n3. Magnetic Field in a Solenoid:\n - Solenoid: A long cylindrical coil of many circular turns of insulated copper wire.\n - Field pattern inside a solenoid is uniform (parallel straight lines) and resembles a bar magnet.\n - Electromagnet: A soft iron core placed inside a current-carrying solenoid becomes a strong temporary magnet.",
        "workedExample": {
          "problem": "Why can two magnetic field lines never cross each other?",
          "steps": [
            {
              "step": "Step 1: Consider what the tangent to a field line represents",
              "detail": "The tangent at any point on a magnetic field line gives the direction of magnetic field at that point."
            },
            {
              "step": "Step 2: Hypothesize intersection",
              "detail": "If two lines intersected at point P, there would be two tangents, indicating two different directions of magnetic field at one point."
            },
            {
              "step": "Step 3: Deduce physical impossibility",
              "detail": "A compass needle can point in only one direction. Hence two lines can never intersect."
            }
          ]
        },
        "keyFormula": "Right-Hand Thumb Rule: Thumb = Current, Curled Fingers = Magnetic Field Lines",
        "commonTrap": "Inside the magnet, field lines travel from SOUTH to NORTH, while outside they travel from NORTH to SOUTH."
      },
      {
        "id": "sec-mag10-2",
        "eyebrow": "Concept 2: Force & Domestic Circuits",
        "title": "Fleming's Rules & Domestic Wiring",
        "analogy": "A three-pronged home plug: The live wire (red/brown) brings high voltage energy, the neutral wire (black/blue) completes the return path, and the thick green earth wire safely dumps stray leakage currents into the ground before they can shock you.",
        "content": "1. Force on a Current-Carrying Conductor in Magnetic Field:\n - F = B I l sin(θ). Force is maximum when conductor is perpendicular to magnetic field (θ = 90°).\n2. Fleming's Left-Hand Rule (Motors):\n - Stretch thumb, forefinger, and middle finger of left hand mutually perpendicular.\n - Forefinger = Magnetic Field (B)\n - Middle finger = Current (I)\n - Thumb = Force / Motion (F)\n - (Mnemonic: Father-Mother-Child = Force, Field, Current).\n - Working principle of Electric Motor (converts electrical energy to mechanical energy).\n3. Domestic Electric Wiring:\n - Live wire (Red/Brown insulation) at 220 V potential.\n - Neutral wire (Black/Blue insulation) at 0 V potential (potential difference = 220 V, 50 Hz AC in India).\n - Earth wire (Green/Yellow insulation) connected to metal plate buried deep in ground.\n - Function of Earth wire: Provides a low-resistance path for leakage current to ground, preventing fatal electric shocks to anyone touching faulty metal bodies (refrigerators, irons).\n - Overloading vs Short Circuit:\n - Short circuit: Live and neutral wires touch directly due to damaged insulation, causing circuit resistance to drop to near zero and huge current to surge.\n - Overloading: Connecting too many high-power appliances simultaneously to a single socket.",
        "workedExample": {
          "problem": "A positively charged alpha particle projected towards West is deflected towards North by a magnetic field. What is the direction of the magnetic field?",
          "steps": [
            {
              "step": "Step 1: Identify current direction",
              "detail": "Alpha particles are positively charged, so current direction = direction of motion = West (Middle finger points West)."
            },
            {
              "step": "Step 2: Identify deflection force",
              "detail": "Deflection is towards North, so force = North (Thumb points North)."
            },
            {
              "step": "Step 3: Apply Fleming's Left-Hand Rule",
              "detail": "With thumb North and middle finger West, the forefinger points UPWARD (vertically upward)."
            },
            {
              "step": "Step 4: Conclusion",
              "detail": "The magnetic field direction is vertically upward."
            }
          ]
        },
        "keyFormula": "Fleming's Left Hand: Thumb (Force), Forefinger (Field), Middle finger (Current)",
        "commonTrap": "For a beam of electrons (negative charge), current direction is OPPOSITE to electron motion! Middle finger must point opposite to electron trajectory."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-mag10-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What is the nature of the magnetic field INSIDE a long straight current-carrying solenoid?",
        "options": [
          {
            "id": "a",
            "text": "Zero",
            "isCorrect": false,
            "explanation": "It is very strong inside."
          },
          {
            "id": "b",
            "text": "Uniform and same at all points",
            "isCorrect": true,
            "explanation": "Correct! The field lines inside a solenoid are parallel straight lines, indicating a uniform magnetic field."
          },
          {
            "id": "c",
            "text": "Decreases as we move towards ends",
            "isCorrect": false,
            "explanation": "Field is uniform throughout the interior."
          },
          {
            "id": "d",
            "text": "Circular concentric rings",
            "isCorrect": false,
            "explanation": "Circular concentric rings occur around a straight wire, not inside a solenoid."
          }
        ],
        "hint": "Inside a solenoid, field lines are parallel straight lines.",
        "conceptTag": "Solenoid Field Characteristics"
      },
      {
        "id": "q-mag10-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Which rule is used to determine the direction of force experienced by a current-carrying conductor in a magnetic field?",
        "options": [
          {
            "id": "a",
            "text": "Fleming's Left-Hand Rule",
            "isCorrect": true,
            "explanation": "Correct! Fleming's Left-Hand Rule gives direction of mechanical force on a conductor."
          },
          {
            "id": "b",
            "text": "Right-Hand Thumb Rule",
            "isCorrect": false,
            "explanation": "Right-Hand Thumb Rule gives direction of magnetic field lines around a current."
          },
          {
            "id": "c",
            "text": "Fleming's Right-Hand Rule",
            "isCorrect": false,
            "explanation": "Right-Hand Rule gives direction of induced current."
          },
          {
            "id": "d",
            "text": "Ohm's Law",
            "isCorrect": false,
            "explanation": "Ohm's law relates V, I, and R."
          }
        ],
        "hint": "Left hand is for motors and mechanical force.",
        "conceptTag": "Fleming's Left Hand Rule"
      },
      {
        "id": "q-mag10-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "What is the primary safety function of earthing metallic appliances (like electric geysers or refrigerators) in households?",
        "options": [
          {
            "id": "a",
            "text": "To ensure any leakage current flows harmlessly into the earth without giving a shock to user",
            "isCorrect": true,
            "explanation": "Correct! The low-resistance earth wire carries accidental leakage currents safely to the ground and blows the fuse."
          },
          {
            "id": "b",
            "text": "To reduce the electricity bill",
            "isCorrect": false,
            "explanation": "Earthing does not alter power consumption."
          },
          {
            "id": "c",
            "text": "To increase voltage to appliances",
            "isCorrect": false,
            "explanation": "Voltage is fixed at 220 V."
          },
          {
            "id": "d",
            "text": "To convert alternating current into direct current",
            "isCorrect": false,
            "explanation": "Rectifiers convert AC to DC, not earthing."
          }
        ],
        "hint": "Earth wire provides a low resistance path for stray charge to escape.",
        "conceptTag": "Earthing Protection"
      },
      {
        "id": "q-mag10-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "An electron enters a uniform magnetic field at right angles to it. What will be the path followed by the electron?",
        "options": [
          {
            "id": "a",
            "text": "Circular path",
            "isCorrect": true,
            "explanation": "Correct! When a charged particle moves perpendicular to a magnetic field, the magnetic force is always perpendicular to velocity, acting as centripetal force and deflecting it into a circular path."
          },
          {
            "id": "b",
            "text": "Straight line with increasing speed",
            "isCorrect": false,
            "explanation": "Force is perpendicular, speed remains constant."
          },
          {
            "id": "c",
            "text": "Parabolic path",
            "isCorrect": false,
            "explanation": "Parabolic path occurs in electric field, circular in magnetic field."
          },
          {
            "id": "d",
            "text": "It comes to an immediate stop",
            "isCorrect": false,
            "explanation": "Magnetic force does no work and cannot stop it."
          }
        ],
        "hint": "Perpendicular force causes uniform circular motion (centripetal acceleration).",
        "conceptTag": "Charged Particle in Magnetic Field"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-mag10-1",
          "question": "Magnetic field lines around a straight current-carrying conductor are in the form of:",
          "options": [
            {
              "id": "a",
              "text": "Concentric circles",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Straight lines radiating outward",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Helical spirals",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Ellipses",
              "isCorrect": false
            }
          ],
          "explanation": "Concentric circles centered on the wire represent the magnetic field.",
          "topicSubarea": "Field of Straight Wire"
        },
        {
          "id": "t-mag10-2",
          "question": "In India, the potential difference between live and neutral wires and frequency of domestic AC are:",
          "options": [
            {
              "id": "a",
              "text": "220 V, 50 Hz",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "110 V, 60 Hz",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "440 V, 50 Hz",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "220 V, 60 Hz",
              "isCorrect": false
            }
          ],
          "explanation": "Standard domestic supply in India is 220 Volts alternating current at 50 Hertz.",
          "topicSubarea": "Domestic Supply Specifications"
        },
        {
          "id": "t-mag10-3",
          "question": "An electric motor converts:",
          "options": [
            {
              "id": "a",
              "text": "Electrical energy into mechanical energy",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Mechanical energy into electrical energy",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Chemical energy into electrical energy",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Magnetic energy into chemical energy",
              "isCorrect": false
            }
          ],
          "explanation": "Electric motors use electrical current in a magnetic field to generate mechanical rotation.",
          "topicSubarea": "Motor Principle"
        },
        {
          "id": "t-mag10-4",
          "question": "The core of a strong electromagnet is made of:",
          "options": [
            {
              "id": "a",
              "text": "Soft iron",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Steel",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Alnico",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Copper",
              "isCorrect": false
            }
          ],
          "explanation": "Soft iron magnetizes readily when current flows and loses magnetism quickly when current stops.",
          "topicSubarea": "Electromagnet Core"
        },
        {
          "id": "t-mag10-5",
          "question": "At the time of a short circuit, the current in the domestic circuit:",
          "options": [
            {
              "id": "a",
              "text": "Increases heavily",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Decreases substantially",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Does not change",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Varies continuously",
              "isCorrect": false
            }
          ],
          "explanation": "When live and neutral wires touch, resistance drops near zero, causing current to surge heavily.",
          "topicSubarea": "Short Circuit Current"
        }
      ]
    }
  }
]
};
