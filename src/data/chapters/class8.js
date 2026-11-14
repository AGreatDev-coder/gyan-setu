// class8.js NCERT Curriculum Chapters (Mathematics and Science)
// 4 chapters per subject, fully aligned with official NCERT / CBSE curriculum.

export const class8Chapters = {
  math: [
  {
    "id": "linear-eq-8",
    "ncertChapterNo": "Chapter 2",
    "title": "Linear Equations in One Variable",
    "hindiTitle": "एक चर वाले रैखिक समीकरण",
    "description": "Solving linear equations with variables on one and both sides, transposition of terms, and real-life algebraic modeling.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "c1",
        "eyebrow": "Core Balance Principle",
        "title": "1. The Equality Principle (Mandi Two-Pan Balance)",
        "analogy": "Picture a local vegetable market vendor (सब्ज़ीवाला) with an authentic brass two-pan balance scale. When both pans align perfectly at the center, the system is in mathematical equilibrium.",
        "content": "An algebraic equation is an assertion of balance: LHS = RHS.\nWhatever arithmetic operation is performed on one side must be performed on the exact other side to maintain truth:\n- If 5 is subtracted from LHS, 5 must be subtracted from RHS.\n- If LHS is multiplied by 3, RHS must be multiplied by 3.\n\nIn a **Linear Equation in One Variable**, the highest power (degree) of the unknown quantity is strictly 1:\n2x + 7 = 19",
        "workedExample": {
          "problem": "NCERT Textbook Exercise 2.1: Solve 3x - 5 = 16",
          "steps": [
            {
              "step": "Step 1: Isolate the variable term",
              "detail": "Add 5 to BOTH sides: 3x - 5 + 5 = 16 + 5  =>  3x = 21"
            },
            {
              "step": "Step 2: Eliminate the coefficient",
              "detail": "Divide BOTH sides by 3: 3x / 3 = 21 / 3  =>  x = 7"
            },
            {
              "step": "Step 3: Verification (LHS vs RHS)",
              "detail": "LHS = 3(7) - 5 = 21 - 5 = 16 = RHS. Hence verified!"
            }
          ]
        },
        "keyFormula": "LHS = RHS. Transposition Rule: + becomes -, - becomes +, × becomes ÷, ÷ becomes ×.",
        "commonTrap": "Board Exam Error: Forgetting to change the sign when transposing across the \"=\" sign (e.g., writing 3x = 16 - 5 instead of 16 + 5)."
      },
      {
        "id": "c2",
        "eyebrow": "Variables on Both Sides",
        "title": "2. Solving Equations with Unknowns on Both Sides",
        "analogy": "Imagine two school students comparing stationery costs: Aarav has 5 pencil boxes and ₹20 cash, while Priya has 2 pencil boxes and ₹80 cash. If both have identical total worth, how much does one box cost?",
        "content": "When the unknown appears on both left and right sides (e.g. 5x + 20 = 2x + 80), the golden rule is:\n1. Group all variable terms on one side (usually LHS).\n2. Group all pure numerical constants on the other side (RHS).\n3. Combine like terms and divide by the coefficient.",
        "workedExample": {
          "problem": "NCERT Textbook Exercise 2.3: Solve 5x + 20 = 2x + 80",
          "steps": [
            {
              "step": "Step 1: Transpose 2x to LHS",
              "detail": "5x - 2x + 20 = 80  =>  3x + 20 = 80"
            },
            {
              "step": "Step 2: Transpose +20 to RHS",
              "detail": "3x = 80 - 20  =>  3x = 60"
            },
            {
              "step": "Step 3: Solve for x",
              "detail": "x = 60 / 3  =>  x = 20. Each box costs ₹20."
            }
          ]
        },
        "keyFormula": "Like terms combine with like terms: Variable terms with variable terms, constants with constants.",
        "commonTrap": "Never add variable terms to constants directly (e.g. 5x + 20 is NOT 25x!)."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-8m-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Ex 2.1: Solve for y: 4y + 9 = 25",
        "options": [
          {
            "id": "a",
            "text": "y = 4",
            "isCorrect": true,
            "explanation": "Correct! 4y = 25 - 9 = 16. Dividing by 4 gives y = 4."
          },
          {
            "id": "b",
            "text": "y = 8",
            "isCorrect": false,
            "explanation": "Incorrect: Did you add 9 instead of subtracting? 25 - 9 = 16."
          },
          {
            "id": "c",
            "text": "y = 3",
            "isCorrect": false,
            "explanation": "Incorrect: Check your division 16 ÷ 4 = 4."
          },
          {
            "id": "d",
            "text": "y = 16",
            "isCorrect": false,
            "explanation": "Incorrect: 16 is 4y, divide both sides by 4."
          }
        ],
        "hint": "Subtract 9 from 25 first, then divide by 4.",
        "conceptTag": "basic-isolation"
      },
      {
        "id": "p-8m-2",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Ex 2.1: If x / 5 = 12, what is the value of x?",
        "options": [
          {
            "id": "a",
            "text": "x = 2.4",
            "isCorrect": false,
            "explanation": "Incorrect: The inverse of division is MULTIPLICATION, not division."
          },
          {
            "id": "b",
            "text": "x = 60",
            "isCorrect": true,
            "explanation": "Correct! Multiplying both sides by 5: x = 12 × 5 = 60."
          },
          {
            "id": "c",
            "text": "x = 17",
            "isCorrect": false,
            "explanation": "Incorrect: Do not add 5, multiply by 5."
          },
          {
            "id": "d",
            "text": "x = 7",
            "isCorrect": false,
            "explanation": "Incorrect: 12 - 5 is not the inverse operation."
          }
        ],
        "hint": "Inverse operation of division is multiplication.",
        "conceptTag": "fractional-isolation"
      },
      {
        "id": "p-8m-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "NCERT Ex 2.3: Solve for m: 7m - 8 = 3m + 16",
        "options": [
          {
            "id": "a",
            "text": "m = 2",
            "isCorrect": false,
            "explanation": "Incorrect: 7m - 3m = 4m; 16 + 8 = 24; 24 ÷ 4 = 6."
          },
          {
            "id": "b",
            "text": "m = 6",
            "isCorrect": true,
            "explanation": "Spot on! Transpose 3m to LHS and -8 to RHS: 4m = 24 => m = 6."
          },
          {
            "id": "c",
            "text": "m = 8",
            "isCorrect": false,
            "explanation": "Incorrect: 16 + 8 = 24, not 32."
          },
          {
            "id": "d",
            "text": "m = 4",
            "isCorrect": false,
            "explanation": "Incorrect: 24 ÷ 4 = 6."
          }
        ],
        "hint": "Subtract 3m from both sides and add 8 to both sides.",
        "conceptTag": "both-sides-variable"
      },
      {
        "id": "p-8m-4",
        "level": 3,
        "levelLabel": "NCERT Exemplar Challenge",
        "question": "NCERT Exemplar: The perimeter of a rectangular swimming pool is 154 m. Its length is 2 m more than twice its breadth. What is the length of the pool?",
        "options": [
          {
            "id": "a",
            "text": "52 metres",
            "isCorrect": true,
            "explanation": "Outstanding! Let breadth = x. Length = 2x + 2. Perimeter = 2(2x + 2 + x) = 154 => 2(3x + 2) = 154 => 6x + 4 = 154 => 6x = 150 => x = 25 m. Length = 2(25) + 2 = 52 m."
          },
          {
            "id": "b",
            "text": "25 metres",
            "isCorrect": false,
            "explanation": "Incorrect: 25 m is the breadth, the question asks for length!"
          },
          {
            "id": "c",
            "text": "50 metres",
            "isCorrect": false,
            "explanation": "Incorrect: Remember to add the extra 2 metres (2x + 2)."
          },
          {
            "id": "d",
            "text": "48 metres",
            "isCorrect": false,
            "explanation": "Incorrect: Carefully verify 2(52 + 25) = 2(77) = 154 m."
          }
        ],
        "hint": "Perimeter of rectangle = 2(length + breadth). Remember to solve for length, not just breadth.",
        "conceptTag": "perimeter-word-modeling"
      }
    ],
    "assessment": {
      "id": "test-8m-1",
      "title": "Class 8 Chapter 2 NCERT Diagnostic Test",
      "questions": [
        {
          "id": "t-8m-1",
          "question": "Which of the following is a LINEAR equation in one variable?",
          "options": [
            {
              "id": "a",
              "text": "3x² + 4 = 12",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "2x + 5y = 15",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "7x - 4 = 17",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "x³ = 27",
              "isCorrect": false
            }
          ],
          "explanation": "7x - 4 = 17 has only one variable (x) with degree (highest power) equal to 1.",
          "topicSubarea": "Equation Degree & Definition"
        },
        {
          "id": "t-8m-2",
          "question": "NCERT Exercise 2.1: Solve 6x = 12",
          "options": [
            {
              "id": "a",
              "text": "x = 6",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "x = 2",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "x = 18",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "x = 72",
              "isCorrect": false
            }
          ],
          "explanation": "Dividing both sides by 6 gives x = 12 / 6 = 2.",
          "topicSubarea": "Single Operation Isolation"
        },
        {
          "id": "t-8m-3",
          "question": "Solve for x: 5x + 9 = 5 + 3x",
          "options": [
            {
              "id": "a",
              "text": "x = 2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "x = -2",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "x = 7",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "x = -7",
              "isCorrect": false
            }
          ],
          "explanation": "5x - 3x = 5 - 9 => 2x = -4 => x = -2.",
          "topicSubarea": "Negative Integer Handling"
        },
        {
          "id": "t-8m-4",
          "question": "If 15 is subtracted from a number and then multiplied by 4, the result is 28. What is the number?",
          "options": [
            {
              "id": "a",
              "text": "22",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "20",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "18",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "24",
              "isCorrect": false
            }
          ],
          "explanation": "Equation: 4(x - 15) = 28 => x - 15 = 7 => x = 22.",
          "topicSubarea": "Real-World Word Modeling"
        },
        {
          "id": "t-8m-5",
          "question": "When transposing a term from LHS to RHS, multiplication becomes:",
          "options": [
            {
              "id": "a",
              "text": "Addition",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Division",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Subtraction",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Exponentiation",
              "isCorrect": false
            }
          ],
          "explanation": "Inverse of multiplication is division.",
          "topicSubarea": "Fundamental Rules"
        }
      ]
    },
    "classId": "8",
    "subjectId": "math"
  },
  {
    "id": "rational-num-8",
    "ncertChapterNo": "Chapter 1",
    "title": "Rational Numbers",
    "hindiTitle": "परिमेय संख्याएँ",
    "description": "Properties of closure, commutativity, associativity, additive inverse, multiplicative inverse (reciprocal), and number line representation.",
    "estimatedMinutes": 20,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "rn-c1",
        "eyebrow": "Definition & Form",
        "title": "1. What is a Rational Number?",
        "analogy": "Sharing rotis at an Indian family dinner table! If 3 rotis are shared equally among 4 siblings, each gets 3/4 roti. This is a rational number.",
        "content": "A number that can be expressed in the form **p/q**, where p and q are integers and q ≠ 0, is called a **Rational Number** (परिमेय संख्या).\nExamples: 2/3, -5/7, 0 (since 0 = 0/1), and 4 (since 4 = 4/1).",
        "workedExample": {
          "problem": "NCERT Ex 1.1: Write the additive inverse of -5/9 and multiplicative inverse of -13/19",
          "steps": [
            {
              "step": "Additive Inverse",
              "detail": "The negative of -5/9 is -(-5/9) = +5/9 (their sum is 0)."
            },
            {
              "step": "Multiplicative Inverse (Reciprocal)",
              "detail": "Reciprocal of -13/19 is -19/13 (their product is 1)."
            }
          ]
        },
        "keyFormula": "Additive Inverse of a/b is -a/b. Multiplicative Inverse (Reciprocal) of a/b is b/a.",
        "commonTrap": "Zero has NO multiplicative inverse because 1/0 is undefined in mathematics!"
      },
      {
        "id": "sec-rn8-2",
        "eyebrow": "Concept 2: Rational Numbers Between Two Rationals",
        "title": "Density of Rational Numbers & Number Line",
        "analogy": "Zooming in on a digital map: No matter how close two rational points look on a number line, zooming in reveals infinitely many more rational numbers between them.",
        "content": "1. Representation on Number Line: Positive rational numbers lie to the right of 0, negative rational numbers lie to the left of 0. Rational number p/q divides each unit length into q equal parts.\n2. Finding Rational Numbers Between Two Numbers:\n - Between any two rational numbers, there are INFINITELY many rational numbers (density property).\n - Method 1 (Mean Method): The average (a + b)/2 lies strictly between a and b.\n - Method 2 (Equivalent Fractions Method): Convert both numbers into equivalent rational numbers with a large common denominator, then pick integers between the numerators.",
        "workedExample": {
          "problem": "Find 3 rational numbers between -2/5 and 1/2.",
          "steps": [
            {
              "step": "Step 1: Find common denominator for 5 and 2 (LCM = 10)",
              "detail": "-2/5 = -4/10 and 1/2 = 5/10."
            },
            {
              "step": "Step 2: Expand denominator to allow comfortable choices",
              "detail": "-4/10 = -8/20 and 5/10 = 10/20."
            },
            {
              "step": "Step 3: Select numerators between -8 and 10",
              "detail": "Three rational numbers can be -7/20, 0/20 (0), and 3/20."
            }
          ]
        },
        "keyFormula": "Average (a + b) / 2 lies between a and b",
        "commonTrap": "Never say there are a fixed number of rationals between two numbers! Between ANY two distinct rational numbers, there are infinitely many rationals."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-rn-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Ex 1.1: What is the additive inverse of 2/8?",
        "options": [
          {
            "id": "a",
            "text": "-2/8",
            "isCorrect": true,
            "explanation": "Correct! 2/8 + (-2/8) = 0."
          },
          {
            "id": "b",
            "text": "8/2",
            "isCorrect": false,
            "explanation": "Incorrect: 8/2 is the multiplicative inverse (reciprocal), not additive inverse!"
          },
          {
            "id": "c",
            "text": "-8/2",
            "isCorrect": false,
            "explanation": "Incorrect: Change only the sign, do not flip numerator and denominator."
          },
          {
            "id": "d",
            "text": "0",
            "isCorrect": false,
            "explanation": "Incorrect: 0 is the additive identity, not the inverse of 2/8."
          }
        ],
        "hint": "Additive inverse is the number you add to get 0.",
        "conceptTag": "additive-inverse"
      },
      {
        "id": "p-rn-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "NCERT Ex 1.1: Multiply 6/13 by the reciprocal of -7/16",
        "options": [
          {
            "id": "a",
            "text": "-96/91",
            "isCorrect": true,
            "explanation": "Spot on! Reciprocal of -7/16 is -16/7. Then 6/13 × (-16/7) = (6 × -16)/(13 × 7) = -96/91."
          },
          {
            "id": "b",
            "text": "96/91",
            "isCorrect": false,
            "explanation": "Incorrect: A positive times a negative yields a negative product."
          },
          {
            "id": "c",
            "text": "-42/208",
            "isCorrect": false,
            "explanation": "Incorrect: You multiplied by -7/16 directly instead of taking its reciprocal."
          },
          {
            "id": "d",
            "text": "-13/16",
            "isCorrect": false,
            "explanation": "Incorrect: Follow fraction multiplication (numerator × numerator, denominator × denominator)."
          }
        ],
        "hint": "First invert -7/16 to -16/7, then multiply.",
        "conceptTag": "reciprocal-operations"
      },
      {
        "id": "q-rn-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Between any two distinct rational numbers, how many rational numbers exist?",
        "options": [
          {
            "id": "a",
            "text": "Infinitely many",
            "isCorrect": true,
            "explanation": "Correct! By the density property of rational numbers, between any two distinct rational numbers there exist infinitely many rational numbers."
          },
          {
            "id": "b",
            "text": "Only one",
            "isCorrect": false,
            "explanation": "There are infinite numbers."
          },
          {
            "id": "c",
            "text": "Exactly ten",
            "isCorrect": false,
            "explanation": "There are infinite."
          },
          {
            "id": "d",
            "text": "None",
            "isCorrect": false,
            "explanation": "Rational numbers are dense."
          }
        ],
        "hint": "You can always take the average of two numbers to get another number between them.",
        "conceptTag": "Density of Rational Numbers"
      },
      {
        "id": "q-rn-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "What number should be subtracted from -3/4 to get 5/6?",
        "options": [
          {
            "id": "a",
            "text": "-19/12",
            "isCorrect": true,
            "explanation": "Correct! Let number be x: -3/4 - x = 5/6 => x = -3/4 - 5/6 = (-9 - 10) / 12 = -19/12."
          },
          {
            "id": "b",
            "text": "19/12",
            "isCorrect": false,
            "explanation": "Check signs: -3/4 - 5/6 is negative."
          },
          {
            "id": "c",
            "text": "-1/12",
            "isCorrect": false,
            "explanation": "-9 - 10 = -19."
          },
          {
            "id": "d",
            "text": "1/12",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Set up equation: -3/4 - x = 5/6.",
        "conceptTag": "Rational Operations Problem"
      }
    ],
    "assessment": {
      "id": "test-rn-1",
      "title": "Class 8 Chapter 1 NCERT Diagnostic Assessment",
      "questions": [
        {
          "id": "t-rn-1",
          "question": "Which number is its own reciprocal?",
          "options": [
            {
              "id": "a",
              "text": "0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "1 and -1",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "All fractions",
              "isCorrect": false
            }
          ],
          "explanation": "1/1 = 1 and 1/(-1) = -1. Zero has no reciprocal.",
          "topicSubarea": "Reciprocal Properties"
        },
        {
          "id": "t-rn-2",
          "question": "The product of two rational numbers is always a:",
          "options": [
            {
              "id": "a",
              "text": "Whole number",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Rational number",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Irrational number",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Natural number",
              "isCorrect": false
            }
          ],
          "explanation": "Closure property: Rational numbers are closed under multiplication.",
          "topicSubarea": "Closure Property"
        },
        {
          "id": "t-rn-3",
          "question": "What is the additive identity for rational numbers?",
          "options": [
            {
              "id": "a",
              "text": "1",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "0",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "-1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Infinity",
              "isCorrect": false
            }
          ],
          "explanation": "Adding 0 to any rational number leaves it unchanged (a/b + 0 = a/b).",
          "topicSubarea": "Identities"
        },
        {
          "id": "t-rn-4",
          "question": "How many rational numbers exist between any two distinct rational numbers?",
          "options": [
            {
              "id": "a",
              "text": "Exactly 1",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Exactly 10",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Infinitely many",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "None",
              "isCorrect": false
            }
          ],
          "explanation": "The set of rational numbers is dense; infinitely many rational numbers lie between any two.",
          "topicSubarea": "Density Property"
        },
        {
          "id": "t-rn-5",
          "question": "Simplify using distributive law: 7/5 × (-3/12) + 7/5 × 5/12",
          "options": [
            {
              "id": "a",
              "text": "7/30",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "-7/30",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "14/60",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "1",
              "isCorrect": false
            }
          ],
          "explanation": "7/5 × [(-3/12) + 5/12] = 7/5 × (2/12) = 7/5 × 1/6 = 7/30.",
          "topicSubarea": "Distributive Property"
        }
      ]
    },
    "classId": "8",
    "subjectId": "math"
  },
  {
    "id": "squares-square-roots-8",
    "classId": "8",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 5",
    "title": "Squares and Square Roots",
    "hindiTitle": "वर्ग और वर्गमूल",
    "description": "Properties of perfect squares, unit digit patterns, Pythagorean triplets, finding square roots by prime factorisation and long division method, and decimal square roots.",
    "estimatedMinutes": 28,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-ssr-1",
        "eyebrow": "Concept 1: Properties of Squares",
        "title": "Perfect Squares & Pattern Rules",
        "analogy": "Tiles arranged in a perfect square floor: A floor with 7 tiles along each side contains 7 × 7 = 49 square tiles. Only certain numbers (1, 4, 9, 16, 25, 36...) form complete solid square patterns.",
        "content": "1. Definition of Square: The square of a number is the product obtained when the number is multiplied by itself: n² = n × n.\n2. Unit Digit Characteristics: A square number can only end with 0, 1, 4, 5, 6, or 9 at its units place. Numbers ending with 2, 3, 7, or 8 are NEVER perfect squares!\n3. Numbers ending in zero: If a number has n zeroes at the end, its square ends with 2n zeroes (even number of zeroes).\n4. Pythagorean Triplets: Three natural numbers m, n, p form a Pythagorean triplet if m² + n² = p². For any natural number m > 1, the triplet is given by (2m, m² - 1, m² + 1).",
        "workedExample": {
          "problem": "Find a Pythagorean triplet whose smallest member is 6.",
          "steps": [
            {
              "step": "Step 1: Set 2m equal to smallest member",
              "detail": "2m = 6 => m = 3."
            },
            {
              "step": "Step 2: Calculate m² - 1",
              "detail": "m² - 1 = 3² - 1 = 9 - 1 = 8."
            },
            {
              "step": "Step 3: Calculate m² + 1",
              "detail": "m² + 1 = 3² + 1 = 9 + 1 = 10."
            },
            {
              "step": "Step 4: Verify",
              "detail": "6² + 8² = 36 + 64 = 100 = 10². Triplet is (6, 8, 10)."
            }
          ]
        },
        "keyFormula": "Pythagorean Triplet: (2m, m² - 1, m² + 1) where m > 1",
        "commonTrap": "Do not assume a number ending in 1, 4, 5, 6, or 9 is automatically a square! For instance, 19 ends in 9 but is not a perfect square."
      },
      {
        "id": "sec-ssr-2",
        "eyebrow": "Concept 2: Computing Roots",
        "title": "Methods of Finding Square Roots",
        "analogy": "Unwrapping a present: Finding the square root √x is the inverse operation of squaring, discovering which number multiplied by itself yields x.",
        "content": "1. Prime Factorisation Method: Factorise the number into prime factors, group identical factors into pairs, take one factor from each pair, and multiply them. E.g., 576 = 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 = 2³ × 3 = 24.\n2. Long Division Method: Used for large numbers and decimals.\n - Group digits in pairs (bars) from right to left (for whole numbers).\n - Find largest integer whose square is ≤ leftmost group.\n - Double the divisor quotient, find next digit, and continue.\n3. Square root of Decimals: Place bars on integral part from right to left, and on decimal part from left to right.",
        "workedExample": {
          "problem": "Find the square root of 7056 using prime factorisation.",
          "steps": [
            {
              "step": "Step 1: Prime factorise 7056",
              "detail": "7056 = 2 × 2 × 2 × 2 × 3 × 3 × 7 × 7"
            },
            {
              "step": "Step 2: Group factors in pairs",
              "detail": "(2 × 2) × (2 × 2) × (3 × 3) × (7 × 7)"
            },
            {
              "step": "Step 3: Pick one from each pair",
              "detail": "√7056 = 2 × 2 × 3 × 7 = 84."
            }
          ]
        },
        "keyFormula": "√(a × b) = √a × √b and √(a / b) = √a / √b",
        "commonTrap": "Remember that √9 = 3 (principal positive root). When solving x² = 9, x can be ±3, but the symbol √ denotes the non-negative root."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-ssr-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following numbers CANNOT be a perfect square just by looking at its unit digit?",
        "options": [
          {
            "id": "a",
            "text": "1024",
            "isCorrect": false,
            "explanation": "Ends in 4, which can be a perfect square (32² = 1024)."
          },
          {
            "id": "b",
            "text": "2347",
            "isCorrect": true,
            "explanation": "Correct! Numbers ending in 2, 3, 7, or 8 are never perfect squares."
          },
          {
            "id": "c",
            "text": "1225",
            "isCorrect": false,
            "explanation": "Ends in 5, can be a square (35² = 1225)."
          },
          {
            "id": "d",
            "text": "4096",
            "isCorrect": false,
            "explanation": "Ends in 6, can be a square (64² = 4096)."
          }
        ],
        "hint": "Check the unit digit rules: 2, 3, 7, 8 can never end a square.",
        "conceptTag": "Unit Digit Property"
      },
      {
        "id": "q-ssr-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "What is the smallest number by which 180 must be multiplied so that the product becomes a perfect square?",
        "options": [
          {
            "id": "a",
            "text": "2",
            "isCorrect": false,
            "explanation": "180 × 2 = 360, not a square."
          },
          {
            "id": "b",
            "text": "3",
            "isCorrect": false,
            "explanation": "180 × 3 = 540, not a square."
          },
          {
            "id": "c",
            "text": "5",
            "isCorrect": true,
            "explanation": "Correct! 180 = 2² × 3² × 5. To make pairs complete, multiply by 5. 180 × 5 = 900 = 30²."
          },
          {
            "id": "d",
            "text": "6",
            "isCorrect": false,
            "explanation": "180 × 6 = 1080, not a square."
          }
        ],
        "hint": "Prime factorise 180 and see which prime factor lacks a pair.",
        "conceptTag": "Prime Factorisation"
      },
      {
        "id": "q-ssr-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "How many non-square natural numbers lie between 12² and 13²?",
        "options": [
          {
            "id": "a",
            "text": "24",
            "isCorrect": true,
            "explanation": "Correct! Between n² and (n+1)², there are exactly 2n non-square numbers. Here 2 × 12 = 24."
          },
          {
            "id": "b",
            "text": "25",
            "isCorrect": false,
            "explanation": "25 includes 169 - 144, but the difference between squares is 2n+1, so numbers between them is 2n."
          },
          {
            "id": "c",
            "text": "26",
            "isCorrect": false,
            "explanation": "Formula is 2n."
          },
          {
            "id": "d",
            "text": "12",
            "isCorrect": false,
            "explanation": "The count is 2 × n, not n."
          }
        ],
        "hint": "Between n² and (n + 1)², count = 2n.",
        "conceptTag": "Consecutive Square Gaps"
      },
      {
        "id": "q-ssr-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "The area of a square playground is 2025 m². A fence is to be put around it. What is the total length of the fence needed?",
        "options": [
          {
            "id": "a",
            "text": "45 m",
            "isCorrect": false,
            "explanation": "45 m is the side length (√2025 = 45), not perimeter."
          },
          {
            "id": "b",
            "text": "90 m",
            "isCorrect": false,
            "explanation": "Perimeter of square is 4 × side, not 2 × side."
          },
          {
            "id": "c",
            "text": "180 m",
            "isCorrect": true,
            "explanation": "Correct! Side = √2025 = 45 m. Perimeter (fence) = 4 × 45 = 180 m."
          },
          {
            "id": "d",
            "text": "225 m",
            "isCorrect": false,
            "explanation": "Check calculation: 4 × 45 = 180."
          }
        ],
        "hint": "First find the side of the square using square root, then calculate perimeter = 4 × side.",
        "conceptTag": "Square Root Application"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-ssr-1",
          "question": "If a number has 6 digits, how many digits will its square root contain?",
          "options": [
            {
              "id": "a",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "3",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "4",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "6",
              "isCorrect": false
            }
          ],
          "explanation": "For an even number of digits n, the square root contains n/2 digits. 6/2 = 3 digits.",
          "topicSubarea": "Square Root Digit Rules"
        },
        {
          "id": "t-ssr-2",
          "question": "Which of the following is a Pythagorean triplet with 8 as one of its members?",
          "options": [
            {
              "id": "a",
              "text": "(8, 15, 17)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "(8, 12, 16)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "(8, 9, 10)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "(8, 10, 12)",
              "isCorrect": false
            }
          ],
          "explanation": "8² + 15² = 64 + 225 = 289 = 17². Thus (8, 15, 17) is a valid Pythagorean triplet.",
          "topicSubarea": "Pythagorean Triplets"
        },
        {
          "id": "t-ssr-3",
          "question": "What is the value of √0.0064?",
          "options": [
            {
              "id": "a",
              "text": "0.8",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "0.08",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "0.008",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "0.0008",
              "isCorrect": false
            }
          ],
          "explanation": "√0.0064 = √(64 / 10000) = 8 / 100 = 0.08.",
          "topicSubarea": "Decimal Square Roots"
        },
        {
          "id": "t-ssr-4",
          "question": "The sum of first n odd natural numbers is always equal to:",
          "options": [
            {
              "id": "a",
              "text": "2n",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "n(n + 1)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "n²",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "2n + 1",
              "isCorrect": false
            }
          ],
          "explanation": "Sum of first n odd natural numbers = 1 + 3 + 5 + ... + (2n - 1) = n².",
          "topicSubarea": "Odd Number Patterns"
        },
        {
          "id": "t-ssr-5",
          "question": "What is the least number that must be subtracted from 130 to get a perfect square?",
          "options": [
            {
              "id": "a",
              "text": "9",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "5",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "10",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "1",
              "isCorrect": false
            }
          ],
          "explanation": "11² = 121, which is the largest square ≤ 130. 130 - 121 = 9. Subtracting 9 gives 121.",
          "topicSubarea": "Subtraction to Form Square"
        }
      ]
    }
  },
  {
    "id": "algebraic-expressions-8",
    "classId": "8",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 8",
    "title": "Algebraic Expressions and Identities",
    "hindiTitle": "बीजीय व्यंजक एवं सर्वसमिकाएँ",
    "description": "Terms, factors, coefficients, monomials, binomials, polynomials, addition and subtraction of expressions, multiplication of polynomials, and standard algebraic identities.",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-ae-1",
        "eyebrow": "Concept 1: Expression Anatomy",
        "title": "Terms, Coefficients & Polynomial Multiplication",
        "analogy": "Grouping different fruits in baskets: Apples can only be added to apples, bananas to bananas. 3x + 5x = 8x (like terms), but 3x + 5y cannot be combined into a single term.",
        "content": "1. Terms and Factors: An algebraic expression is formed from variables and constants. A term is a product of factors (e.g., in 7xy, factors are 7, x, y; 7 is the numerical coefficient).\n2. Like and Unlike Terms: Terms having the same algebraic factors are LIKE terms (e.g., 4x²y and -3x²y). Only like terms can be added or subtracted!\n3. Polynomial Classifications: Monomial (1 term), Binomial (2 terms), Trinomial (3 terms), Polynomial (one or more terms with non-negative integral exponents).\n4. Multiplication of Polynomials: Multiply each term of the first polynomial by each term of the second polynomial (distributive law): (a + b)(c + d) = ac + ad + bc + bd.",
        "workedExample": {
          "problem": "Multiply (2x + 3y) by (3x - 4y).",
          "steps": [
            {
              "step": "Step 1: Distribute first binomial",
              "detail": "2x(3x - 4y) + 3y(3x - 4y)"
            },
            {
              "step": "Step 2: Expand each term",
              "detail": "= (6x² - 8xy) + (9xy - 12y²)"
            },
            {
              "step": "Step 3: Combine like terms (-8xy + 9xy)",
              "detail": "= 6x² + xy - 12y²."
            }
          ]
        },
        "keyFormula": "Distributive Law: a(b + c) = ab + ac",
        "commonTrap": "x + x = 2x, whereas x × x = x². Do not mix addition of like terms with multiplication!"
      },
      {
        "id": "sec-ae-2",
        "eyebrow": "Concept 2: Standard Identities",
        "title": "Standard Algebraic Identities",
        "analogy": "A shortcut highway bypassing winding city streets: An identity is an equality true for every value of variables, allowing instantaneous calculation without manual expansion.",
        "content": "1. Standard Identity I: (a + b)² = a² + 2ab + b²\n2. Standard Identity II: (a - b)² = a² - 2ab + b²\n3. Standard Identity III: (a + b)(a - b) = a² - b²\n4. Standard Identity IV: (x + a)(x + b) = x² + (a + b)x + ab\n5. Mental Math Applications: Evaluate 103² as (100 + 3)² = 100² + 2(100)(3) + 3² = 10000 + 600 + 9 = 10609.",
        "workedExample": {
          "problem": "Evaluate 98 × 102 using an algebraic identity.",
          "steps": [
            {
              "step": "Step 1: Express around base 100",
              "detail": "98 = 100 - 2, 102 = 100 + 2"
            },
            {
              "step": "Step 2: Apply Identity III (a - b)(a + b) = a² - b²",
              "detail": "(100 - 2)(100 + 2) = 100² - 2²"
            },
            {
              "step": "Step 3: Calculate numerical result",
              "detail": "10000 - 4 = 9996."
            }
          ]
        },
        "keyFormula": "(a + b)² = a² + 2ab + b²  |  (a - b)(a + b) = a² - b²",
        "commonTrap": "(a + b)² is NOT a² + b²! You must never forget the middle cross-product term +2ab."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-ae-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What is the coefficient of x² in the expression 5 - 3x² + 7x?",
        "options": [
          {
            "id": "a",
            "text": "3",
            "isCorrect": false,
            "explanation": "The sign before 3 is minus, so the coefficient is negative."
          },
          {
            "id": "b",
            "text": "-3",
            "isCorrect": true,
            "explanation": "Correct! The term is -3x², so the numerical coefficient is -3."
          },
          {
            "id": "c",
            "text": "5",
            "isCorrect": false,
            "explanation": "5 is the constant term."
          },
          {
            "id": "d",
            "text": "7",
            "isCorrect": false,
            "explanation": "7 is the coefficient of x."
          }
        ],
        "hint": "Include the negative sign with the numerical factor.",
        "conceptTag": "Coefficients"
      },
      {
        "id": "q-ae-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Expand (3a - 4b)² using algebraic identities.",
        "options": [
          {
            "id": "a",
            "text": "9a² - 16b²",
            "isCorrect": false,
            "explanation": "Identity II is a² - 2ab + b², not a² - b²."
          },
          {
            "id": "b",
            "text": "9a² - 24ab + 16b²",
            "isCorrect": true,
            "explanation": "Correct! (3a)² - 2(3a)(4b) + (4b)² = 9a² - 24ab + 16b²."
          },
          {
            "id": "c",
            "text": "9a² + 24ab + 16b²",
            "isCorrect": false,
            "explanation": "The middle term has a minus sign because it is (a - b)²."
          },
          {
            "id": "d",
            "text": "9a² - 12ab + 16b²",
            "isCorrect": false,
            "explanation": "Middle term is 2 × 3a × 4b = 24ab, not 12ab."
          }
        ],
        "hint": "Use (a - b)² = a² - 2ab + b² where a = 3a, b = 4b.",
        "conceptTag": "Identity Expansion"
      },
      {
        "id": "q-ae-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Which of the following is a pair of LIKE terms?",
        "options": [
          {
            "id": "a",
            "text": "7x and 7y",
            "isCorrect": false,
            "explanation": "Variables differ (x vs y)."
          },
          {
            "id": "b",
            "text": "-2x²y and 5yx²",
            "isCorrect": true,
            "explanation": "Correct! x²y and yx² have identical variable powers, order of multiplication does not matter."
          },
          {
            "id": "c",
            "text": "3xy² and 3x²y",
            "isCorrect": false,
            "explanation": "Powers of x and y are swapped; they are unlike."
          },
          {
            "id": "d",
            "text": "14x and 14xy",
            "isCorrect": false,
            "explanation": "One contains y while the other does not."
          }
        ],
        "hint": "Like terms have exactly identical variable parts and powers.",
        "conceptTag": "Like and Unlike Terms"
      },
      {
        "id": "q-ae-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "If x + 1/x = 5, what is the numerical value of x² + 1/x²?",
        "options": [
          {
            "id": "a",
            "text": "25",
            "isCorrect": false,
            "explanation": "You forgot to subtract the 2ab term from both sides."
          },
          {
            "id": "b",
            "text": "23",
            "isCorrect": true,
            "explanation": "Correct! (x + 1/x)² = x² + 2(x)(1/x) + 1/x² = x² + 2 + 1/x² = 5² = 25 => x² + 1/x² = 25 - 2 = 23."
          },
          {
            "id": "c",
            "text": "27",
            "isCorrect": false,
            "explanation": "2 is subtracted, not added."
          },
          {
            "id": "d",
            "text": "21",
            "isCorrect": false,
            "explanation": "Check arithmetic: 25 - 2 = 23."
          }
        ],
        "hint": "Square both sides of (x + 1/x) and notice that 2 × x × (1/x) = 2.",
        "conceptTag": "Identity Manipulations"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-ae-1",
          "question": "What is the degree of the polynomial 4x³y² + 7x²y⁴ - 5x + 9?",
          "options": [
            {
              "id": "a",
              "text": "4",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "5",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "6",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "3",
              "isCorrect": false
            }
          ],
          "explanation": "The degree of a term is sum of powers: 4x³y² is 3+2=5, 7x²y⁴ is 2+4=6. Highest term degree is 6.",
          "topicSubarea": "Degree of Polynomials"
        },
        {
          "id": "t-ae-2",
          "question": "Value of (105)² - (95)² computed using identity is:",
          "options": [
            {
              "id": "a",
              "text": "2000",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "1000",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "400",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "200",
              "isCorrect": false
            }
          ],
          "explanation": "a² - b² = (a + b)(a - b) = (105 + 95)(105 - 95) = (200)(10) = 2000.",
          "topicSubarea": "Difference of Squares"
        },
        {
          "id": "t-ae-3",
          "question": "The product of a monomial 3xy and a binomial (2x - 5y) is:",
          "options": [
            {
              "id": "a",
              "text": "6x²y - 15xy²",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "6xy - 15xy",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "5x²y - 2xy²",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "6x²y + 15xy²",
              "isCorrect": false
            }
          ],
          "explanation": "3xy(2x) - 3xy(5y) = 6x²y - 15xy².",
          "topicSubarea": "Polynomial Multiplication"
        },
        {
          "id": "t-ae-4",
          "question": "An algebraic expression having exactly two non-zero terms is called a:",
          "options": [
            {
              "id": "a",
              "text": "Monomial",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Binomial",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Trinomial",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Constant",
              "isCorrect": false
            }
          ],
          "explanation": "Bi means two; an expression with two terms separated by + or - is a binomial.",
          "topicSubarea": "Terminology"
        },
        {
          "id": "t-ae-5",
          "question": "The value of (x - 2)(x + 5) expands to:",
          "options": [
            {
              "id": "a",
              "text": "x² + 3x - 10",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "x² - 3x - 10",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "x² + 7x - 10",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "x² - 10",
              "isCorrect": false
            }
          ],
          "explanation": "Using (x + a)(x + b) = x² + (a + b)x + ab with a = -2, b = 5: x² + (-2 + 5)x + (-10) = x² + 3x - 10.",
          "topicSubarea": "Identity IV Application"
        }
      ]
    }
  }
],
  science: [
  {
    "id": "force-pressure-8",
    "classId": "8",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 8",
    "title": "Force and Pressure",
    "hindiTitle": "बल तथा दाब",
    "description": "Contact and non-contact forces, concept of pressure (P = F / A), atmospheric pressure, and everyday Indian applications like porters wearing headcloths.",
    "estimatedMinutes": 25,
    "masteryTarget": 85,
    "learnSections": [
      {
        "id": "fp-1",
        "eyebrow": "Force Fundamentals",
        "title": "1. Push, Pull & Contact vs Non-Contact Forces",
        "analogy": "Pushing a stalled auto-rickshaw down the street requires physical contact, whereas a ripe mango falling from a tree to the ground is pulled by gravity without physical contact.",
        "content": "A **Force** (बल) is a push or a pull on an object resulting from its interaction with another object.\nForces can:\n1. Change the state of motion (speed up, slow down, or stop an object).\n2. Change the direction of moving objects (e.g. a cricket batsman hitting a ball).\n3. Change the shape of an object (e.g. kneading wheat dough to make rotis).\n\n**Types of Forces**:\n- **Contact Forces**: Muscular force (lifting a school bag, bullock pulling a cart) and Frictional force (slows rolling ball).\n- **Non-Contact Forces**: Magnetic force (magnet attracting iron nails), Electrostatic force (charged plastic comb attracting bits of paper), and Gravitational force (Earth pulling all objects downward).",
        "workedExample": {
          "problem": "NCERT Exemplar: When a plastic comb is rubbed vigorously against dry hair and brought near tiny paper scraps, they jump up and cling to it. What force causes this?",
          "steps": [
            {
              "step": "Step 1: Electrostatic charge formation",
              "detail": "Friction between comb and dry hair transfers electrons, accumulating static electric charge on the comb."
            },
            {
              "step": "Step 2: Non-contact electrostatic force",
              "detail": "The charged comb exerts an attractive electrostatic force on the neutral paper bits without touching them initially."
            }
          ]
        },
        "keyFormula": "Force has both magnitude and direction (Vector quantity). SI Unit = Newton (N).",
        "commonTrap": "Thinking gravity only exists on Earth: Gravitational pull is a universal attraction between ANY two masses in the universe!"
      },
      {
        "id": "fp-2",
        "eyebrow": "Pressure & Area",
        "title": "2. Pressure = Force / Area & Why Indian Porters Wear Headcloths",
        "analogy": "Ever noticed railway station porters (कुली) placing a rolled-up round piece of cloth (गमछा/पगड़ी) on their heads before lifting heavy passenger luggage trunks?",
        "content": "**Pressure (दाब)** is defined as the force acting perpendicularly per unit surface area:\n**Pressure = Force / Area (P = F / A)**\n\n- **SI Unit of Pressure**: **Pascal (Pa)** or Newtons per square metre (N/m²).\n- **Inverse Area Rule**: For a given force, **smaller contact area produces MUCH larger pressure**, while **larger contact area reduces pressure**:\n  - Why sharp knives cut vegetables easily: The cutting edge has an extremely tiny surface area, producing high pressure with little effort.\n  - Why heavy trucks have 8 or 10 broad dual wheels: Increases contact surface area with the road, reducing the ground pressure so tyres do not sink into asphalt!\n  - Why Indian porters wear cloth turbans: Rolled cloth increases contact area between luggage and head, drastically reducing pressure on the skull!",
        "workedExample": {
          "problem": "NCERT Textbook Exercise 8.5: A solid metal block exerts a perpendicular force of 100 N on a tabletop. If the area of contact is 0.02 m², find the pressure exerted.",
          "steps": [
            {
              "step": "Given values",
              "detail": "Force F = 100 N, Area A = 0.02 m²"
            },
            {
              "step": "Apply formula",
              "detail": "P = F / A = 100 N / 0.02 m² = 100 / (2/100) = 100 × 50 = 5000 N/m²"
            },
            {
              "step": "Result",
              "detail": "The pressure exerted is 5000 Pascals (5 kPa)."
            }
          ]
        },
        "keyFormula": "Pressure (P) = Force (F) / Area (A). 1 Pascal (Pa) = 1 N/m².",
        "commonTrap": "Confusing force with pressure: Force is the total push (in Newtons), while pressure accounts for how concentrated that push is over an area (N/m²)."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-fp-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Question: A force of 50 N acts on an area of 0.05 m². What is the resulting pressure?",
        "options": [
          {
            "id": "a",
            "text": "1000 Pascals (Pa)",
            "isCorrect": true,
            "explanation": "Correct! Pressure P = F / A = 50 N / 0.05 m² = 1000 Pa."
          },
          {
            "id": "b",
            "text": "250 Pascals (Pa)",
            "isCorrect": false,
            "explanation": "Incorrect: P = 50 / 0.05 = 1000, not 250."
          },
          {
            "id": "c",
            "text": "50 Pascals (Pa)",
            "isCorrect": false,
            "explanation": "Incorrect: Did not divide by area."
          },
          {
            "id": "d",
            "text": "2.5 Pascals (Pa)",
            "isCorrect": false,
            "explanation": "Incorrect: Multiplied instead of dividing."
          }
        ],
        "hint": "Use P = F / A: Divide 50 by 0.05.",
        "conceptTag": "pressure-formula"
      },
      {
        "id": "p-fp-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Why do railway station porters (कुली) place a round piece of cloth on their heads when carrying heavy loads?",
        "options": [
          {
            "id": "a",
            "text": "It increases contact area, thereby reducing pressure on the head",
            "isCorrect": true,
            "explanation": "Spot on! Pressure P = F/A. Increasing area (A) reduces pressure (P) on the porter’s head, making the load bearable."
          },
          {
            "id": "b",
            "text": "It reduces the gravitational force on the load",
            "isCorrect": false,
            "explanation": "Incorrect: Gravity remains identical regardless of head cloth."
          },
          {
            "id": "c",
            "text": "It decreases the mass of the luggage trunks",
            "isCorrect": false,
            "explanation": "Incorrect: Mass of luggage cannot change with a cloth."
          },
          {
            "id": "d",
            "text": "It increases friction so luggage doesn’t slide off",
            "isCorrect": false,
            "explanation": "Incorrect: While it aids grip, the primary physical purpose taught in NCERT is area expansion to reduce pressure."
          }
        ],
        "hint": "Remember the relationship between pressure and surface area (P = F / A).",
        "conceptTag": "porter-pressure-application"
      },
      {
        "id": "q-fp-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "When two equal and opposite forces of 50 N each act simultaneously on a block along the same line, what is the net resultant force on the block?",
        "options": [
          {
            "id": "a",
            "text": "0 N",
            "isCorrect": true,
            "explanation": "Correct! Two forces acting in opposite directions subtract: 50 N - 50 N = 0 N (balanced forces)."
          },
          {
            "id": "b",
            "text": "100 N",
            "isCorrect": false,
            "explanation": "Forces in opposite directions subtract, not add."
          },
          {
            "id": "c",
            "text": "50 N",
            "isCorrect": false,
            "explanation": "They cancel each other out."
          },
          {
            "id": "d",
            "text": "25 N",
            "isCorrect": false,
            "explanation": "Resultant is 0 N."
          }
        ],
        "hint": "Opposite direction forces cancel: F_net = F₁ - F₂.",
        "conceptTag": "Balanced Forces"
      },
      {
        "id": "q-fp-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "A force of 300 N acts perpendicular to a flat surface of area 0.05 m². What is the pressure exerted on the surface?",
        "options": [
          {
            "id": "a",
            "text": "6000 Pa",
            "isCorrect": true,
            "explanation": "Correct! Pressure = Force / Area = 300 N / 0.05 m² = 30000 / 5 = 6000 Pa (N/m²)."
          },
          {
            "id": "b",
            "text": "15 Pa",
            "isCorrect": false,
            "explanation": "Pressure is Force divided by Area, not multiplied."
          },
          {
            "id": "c",
            "text": "1500 Pa",
            "isCorrect": false,
            "explanation": "300 / 0.05 = 6000."
          },
          {
            "id": "d",
            "text": "600 Pa",
            "isCorrect": false,
            "explanation": "Check division: 300 / 0.05 = 6000."
          }
        ],
        "hint": "Use Pressure = Force / Area.",
        "conceptTag": "Pressure Formula Application"
      }
    ],
    "assessment": {
      "id": "test-fp-8",
      "title": "Class 8 Chapter 8 NCERT Diagnostic Assessment: Force and Pressure",
      "questions": [
        {
          "id": "t-fp-1",
          "question": "The SI unit of pressure is:",
          "options": [
            {
              "id": "a",
              "text": "Pascal (Pa)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Newton (N)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Joule (J)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Watt (W)",
              "isCorrect": false
            }
          ],
          "explanation": "1 Pascal = 1 Newton per square metre (1 N/m²).",
          "topicSubarea": "Pressure Units"
        },
        {
          "id": "t-fp-2",
          "question": "Which of the following is an example of a non-contact force?",
          "options": [
            {
              "id": "a",
              "text": "Gravitational Force",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Muscular Force",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Frictional Force",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Tension in a rope",
              "isCorrect": false
            }
          ],
          "explanation": "Gravity acts at a distance across space without physical contact between objects.",
          "topicSubarea": "Types of Forces"
        },
        {
          "id": "t-fp-3",
          "question": "Why does a sharp needle pierce cloth much more easily than a blunt wooden rod?",
          "options": [
            {
              "id": "a",
              "text": "Its tiny pointed tip creates huge pressure with minimal force",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "It has greater mass than the wooden rod",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "It eliminates friction entirely",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "It creates vacuum inside the fabric",
              "isCorrect": false
            }
          ],
          "explanation": "Since P = F/A, an infinitesimally small tip area produces tremendous localized pressure.",
          "topicSubarea": "Area and Pressure"
        },
        {
          "id": "t-fp-4",
          "question": "Liquid pressure at the bottom of an Indian village well or water tank depends on:",
          "options": [
            {
              "id": "a",
              "text": "Height (depth) of the water column",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Shape of the water container",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Color of the water container",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Amount of water evaporated",
              "isCorrect": false
            }
          ],
          "explanation": "Liquid pressure increases directly with the depth of the liquid column (P = hρg).",
          "topicSubarea": "Liquid Pressure"
        },
        {
          "id": "t-fp-5",
          "question": "When a rubber suction cup is pressed firmly against a smooth glass window, it sticks because:",
          "options": [
            {
              "id": "a",
              "text": "Atmospheric pressure pushes on it from the outside",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Electrostatic force glues the rubber",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Magnetic attraction between rubber and glass",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Gravitational attraction of Earth",
              "isCorrect": false
            }
          ],
          "explanation": "Pressing squeezes air out from inside the cup; atmospheric pressure outside firmly holds it against the surface.",
          "topicSubarea": "Atmospheric Pressure"
        }
      ]
    }
  },
  {
    "id": "sound-8",
    "classId": "8",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 10",
    "title": "Sound and Vibration",
    "hindiTitle": "ध्वनि एवं कंपन",
    "description": "Sound production by vibrating bodies, propagation through mediums, human hearing mechanism, pitch, loudness, and audible frequencies.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "snd-1",
        "eyebrow": "Vibration & Propagation",
        "title": "1. Sound Produced by Vibrating Indian Instruments",
        "analogy": "Touch a temple bell or school brass gong immediately after striking it—you can distinctly feel rapid vibrations! Touch a Tabla skin while it is being played.",
        "content": "**Sound** is produced by vibrating objects. A rapid to-and-fro or back-and-forth motion of an object is called **Vibration** (कंपन).\n\n**Indian Musical Instruments & Vibrating Parts**:\n- **Tabla / Mridangam**: Stretched membrane / skin (तानित झिल्ली).\n- **Sitar / Veena / Tanpura**: Stretched metallic string (तानित तार).\n- **Flute (बांसुरी) / Shehnai**: Vibrating air column (वायु स्तंभ).\n- **Manjira (झांझ) / Ghatam**: Metal vessel body itself.\n\n**Propagation of Sound**:\nSound requires a **material medium** (solid, liquid, or gas) to travel. **Sound CANNOT travel through vacuum!** Sound travels fastest in Solids, slower in Liquids, and slowest in Gases (Air).",
        "workedExample": {
          "problem": "NCERT Experiment: If an electric bell is ringing inside an airtight glass bell jar, and a vacuum pump slowly sucks all the air out, what happens to the sound?",
          "steps": [
            {
              "step": "Step 1: Observation",
              "detail": "As air is pumped out, the sound of the bell becomes increasingly faint until it becomes completely inaudible, even though the hammer is still seen striking the gong."
            },
            {
              "step": "Step 2: Conclusion",
              "detail": "Sound waves are mechanical waves requiring atomic/molecular collisions; they cannot propagate across a vacuum."
            }
          ]
        },
        "keyFormula": "Sound speed in solids > liquids > gases. Speed in air ≈ 340 m/s. Sound cannot travel in vacuum.",
        "commonTrap": "Thinking astronauts on the moon can talk directly by shouting: There is no air/atmosphere on the moon, so sound cannot travel without radio headsets!"
      },
      {
        "id": "sec-snd-2",
        "eyebrow": "Concept 2: Characteristics & Audible Range",
        "title": "Amplitude, Frequency & Audible Sound",
        "analogy": "A guitar string plucked gently vs struck hard: Plucking gently gives small amplitude (soft whisper). Struck with power gives large amplitude (booming sound). Tightening the tuning peg increases vibration frequency, turning a deep pitch into a high squeal.",
        "content": "1. Amplitude and Loudness:\n - Loudness is proportional to the SQUARE of amplitude: Loudness ∝ (Amplitude)².\n - Measured in Decibels (dB). Whispering ≈ 30 dB; normal conversation ≈ 60 dB; traffic ≈ 80 dB (above 80 dB noise becomes physically painful).\n2. Frequency and Pitch (Shrillness):\n - Frequency = Number of oscillations per second. SI unit: Hertz (Hz).\n - Higher frequency => higher pitch/shrillness (e.g. bird chirp, woman's voice).\n - Lower frequency => deeper pitch/bass (e.g. lion roar, bass drum).\n3. Audible and Inaudible Range for Human Ear:\n - Audible range: 20 Hz to 20,000 Hz (20 kHz).\n - Infrasonic: Frequencies < 20 Hz (whales, elephants, earthquakes).\n - Ultrasonic: Frequencies > 20,000 Hz (bats, dolphins, medical ultrasound scanning).\n4. Noise Pollution: Unwanted and unpleasant sounds causing hearing impairment, insomnia, and hypertension. Controlled by silencers in vehicles, tree plantation along roads (Green Muffler).",
        "workedExample": {
          "problem": "A pendulum oscillates 40 times in 4 seconds. Find its time period and frequency.",
          "steps": [
            {
              "step": "Step 1: Calculate Frequency",
              "detail": "Frequency = Total oscillations / Total time = 40 / 4 = 10 Hz."
            },
            {
              "step": "Step 2: Calculate Time Period",
              "detail": "Time Period T = 1 / Frequency = 1 / 10 = 0.1 second."
            }
          ]
        },
        "keyFormula": "Frequency f = oscillations / time (Hz)  |  T = 1/f  |  Loudness ∝ (Amplitude)²",
        "commonTrap": "Loudness depends on AMPLITUDE; Pitch (shrillness) depends on FREQUENCY. Do not interchange them!"
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-snd-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What is the audible frequency range for normal human ears?",
        "options": [
          {
            "id": "a",
            "text": "20 Hz to 20,000 Hz (20 kHz)",
            "isCorrect": true,
            "explanation": "Correct! Humans can detect sounds between 20 vibrations per second (20 Hz) and 20,000 Hz."
          },
          {
            "id": "b",
            "text": "1 Hz to 100 Hz",
            "isCorrect": false,
            "explanation": "Incorrect: Below 20 Hz is infrasound, inaudible to human ears."
          },
          {
            "id": "c",
            "text": "50,000 Hz to 100,000 Hz",
            "isCorrect": false,
            "explanation": "Incorrect: Frequencies above 20 kHz are ultrasound (audible to bats and dogs, not humans)."
          },
          {
            "id": "d",
            "text": "200 Hz to 2,000 Hz",
            "isCorrect": false,
            "explanation": "Incorrect: This is only a narrow slice of human hearing."
          }
        ],
        "hint": "Remember the lower limit is 20 Hz and upper limit is 20,000 Hz.",
        "conceptTag": "audible-range"
      },
      {
        "id": "q-snd-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "If the amplitude of a vibrating body is tripled (increased by a factor of 3), by what factor does its loudness increase?",
        "options": [
          {
            "id": "a",
            "text": "9 times",
            "isCorrect": true,
            "explanation": "Correct! Loudness is proportional to the square of amplitude: Loudness ∝ (Amplitude)². When amplitude is 3x, loudness becomes 3² = 9x."
          },
          {
            "id": "b",
            "text": "3 times",
            "isCorrect": false,
            "explanation": "Loudness depends on square of amplitude."
          },
          {
            "id": "c",
            "text": "6 times",
            "isCorrect": false,
            "explanation": "3² is 9, not 6."
          },
          {
            "id": "d",
            "text": "27 times",
            "isCorrect": false,
            "explanation": "Squared, not cubed."
          }
        ],
        "hint": "Loudness ∝ (Amplitude)².",
        "conceptTag": "Amplitude and Loudness"
      },
      {
        "id": "q-snd-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "What is the audible frequency range of sound for a normal human ear?",
        "options": [
          {
            "id": "a",
            "text": "20 Hz to 20,000 Hz",
            "isCorrect": true,
            "explanation": "Correct! The normal human ear can perceive sounds from 20 Hz up to 20,000 Hz (20 kHz)."
          },
          {
            "id": "b",
            "text": "2 Hz to 200 Hz",
            "isCorrect": false,
            "explanation": "Below 20 Hz is infrasonic."
          },
          {
            "id": "c",
            "text": "200 Hz to 200,000 Hz",
            "isCorrect": false,
            "explanation": "Above 20 kHz is ultrasonic."
          },
          {
            "id": "d",
            "text": "10 Hz to 10,000 Hz",
            "isCorrect": false,
            "explanation": "Range is 20 Hz to 20 kHz."
          }
        ],
        "hint": "Between 20 oscillations per second and 20,000 oscillations per second.",
        "conceptTag": "Human Audible Range"
      },
      {
        "id": "q-snd-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Why can two astronauts not speak directly to each other on the surface of the Moon without radio equipment?",
        "options": [
          {
            "id": "a",
            "text": "Sound is a mechanical wave and cannot travel through a vacuum (there is no atmosphere on the Moon)",
            "isCorrect": true,
            "explanation": "Correct! Sound requires a material medium (solid, liquid, or gas) to propagate. The Moon lacks an atmosphere, so sound cannot travel."
          },
          {
            "id": "b",
            "text": "The Moon has too much gravity",
            "isCorrect": false,
            "explanation": "Gravity does not stop sound."
          },
          {
            "id": "c",
            "text": "Space suits absorb all sound waves completely",
            "isCorrect": false,
            "explanation": "Radio waves (electromagnetic) are used because sound cannot travel in vacuum."
          },
          {
            "id": "d",
            "text": "The temperature on the Moon is too high for sound",
            "isCorrect": false,
            "explanation": "Medium absence is the sole reason."
          }
        ],
        "hint": "Sound requires a material medium to propagate.",
        "conceptTag": "Sound Propagation in Vacuum"
      }
    ],
    "assessment": {
      "id": "test-snd-8",
      "title": "Class 8 Chapter 10 NCERT Diagnostic Assessment: Sound",
      "questions": [
        {
          "id": "t-snd-1",
          "question": "Sound can travel through:",
          "options": [
            {
              "id": "a",
              "text": "Solids, liquids, and gases",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Solids only",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Gases only",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Vacuum only",
              "isCorrect": false
            }
          ],
          "explanation": "Sound requires any material medium (solid, liquid, or gas) to propagate.",
          "topicSubarea": "Sound Propagation"
        },
        {
          "id": "t-snd-2",
          "question": "The pitch (तारत्व) or shrillness of a sound is determined by its:",
          "options": [
            {
              "id": "a",
              "text": "Frequency of vibration",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Amplitude of vibration",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Speed of propagation",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Color of sound source",
              "isCorrect": false
            }
          ],
          "explanation": "Higher frequency produces higher pitch (e.g. bird chirping or whistle vs drum beat).",
          "topicSubarea": "Frequency and Pitch"
        },
        {
          "id": "t-snd-3",
          "question": "The loudness of a sound depends directly on the:",
          "options": [
            {
              "id": "a",
              "text": "Amplitude of vibration",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Frequency of vibration",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Time period of oscillation",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Humidity of air",
              "isCorrect": false
            }
          ],
          "explanation": "Loudness is proportional to the square of amplitude (Loudness ∝ Amplitude²).",
          "topicSubarea": "Amplitude and Loudness"
        },
        {
          "id": "t-snd-4",
          "question": "In humans, sound is produced by the voice box called the:",
          "options": [
            {
              "id": "a",
              "text": "Larynx",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Pharynx",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Windpipe",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Esophagus",
              "isCorrect": false
            }
          ],
          "explanation": "Two vocal cords stretched across the larynx vibrate as air passes through to produce human speech.",
          "topicSubarea": "Human Vocal Anatomy"
        },
        {
          "id": "t-snd-5",
          "question": "The unit of frequency is:",
          "options": [
            {
              "id": "a",
              "text": "Hertz (Hz)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Decibel (dB)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Metre (m)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Newton (N)",
              "isCorrect": false
            }
          ],
          "explanation": "Frequency is measured in Hertz (Hz), where 1 Hz = 1 oscillation per second. Decibel is for loudness.",
          "topicSubarea": "Frequency Units"
        }
      ]
    }
  },
  {
    "id": "friction-8",
    "classId": "8",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 9",
    "title": "Friction",
    "hindiTitle": "घर्षण",
    "description": "Causes of friction, interlocking of irregularities, static, sliding, and rolling friction, friction as a necessary evil, methods to increase or reduce friction, ball bearings, and fluid friction (drag).",
    "estimatedMinutes": 28,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-fric-1",
        "eyebrow": "Concept 1: Mechanism & Types",
        "title": "Causes and Types of Friction",
        "analogy": "Interlocking microscopic teeth: Even the smoothest glass has tiny microscopic hills and valleys. When two surfaces touch, these irregularities interlock like puzzle pieces, resisting relative motion.",
        "content": "1. Cause of Friction: Friction arises due to the interlocking of microscopic irregularities on two surfaces in contact. When we push an object, we must apply force to overcome this interlocking.\n2. Factors Affecting Friction:\n - Nature of surfaces (rough surfaces have more irregularities => greater friction).\n - The force pressing the two surfaces together (heavier boxes press harder => more interlocking => greater friction).\n - Friction is independent of apparent area of contact.\n3. Three Types of Friction in Order of Magnitude:\n - Static Friction: Force required to start moving an object from rest. (Maximum value = Limiting friction).\n - Sliding Friction: Force required to keep an object sliding at constant speed (slightly less than static friction because irregularities do not get enough time to interlock).\n - Rolling Friction: When an object rolls over the surface of another (much smaller than sliding friction!). Rolling friction < Sliding friction < Static friction.",
        "workedExample": {
          "problem": "Why is it easier to keep a heavy desk moving once it has already started moving, than to initiate its motion from rest?",
          "steps": [
            {
              "step": "Step 1: Identify forces at play",
              "detail": "To start motion from rest, static friction must be overcome. Once moving, sliding friction acts."
            },
            {
              "step": "Step 2: Microscopic interlocking comparison",
              "detail": "When stationary, microscopic ridges settle deeply into valleys. In motion, contact points do not get sufficient time to lock into each other."
            },
            {
              "step": "Step 3: Conclusion",
              "detail": "Sliding friction is slightly less than static friction, so less force is needed to keep it moving."
            }
          ]
        },
        "keyFormula": "Frictional Hierarchy: Rolling Friction < Sliding Friction < Static Friction",
        "commonTrap": "Friction does NOT depend on the apparent surface area of contact; it depends on the roughness and the normal force pressing them together."
      },
      {
        "id": "sec-fric-2",
        "eyebrow": "Concept 2: Practical Engineering",
        "title": "Friction in Life & Fluid Friction",
        "analogy": "A bird soaring through air or a submarine cutting through water: Both have streamlined teardrop shapes to minimize air or water resistance (drag).",
        "content": "1. Friction as a Necessary Evil:\n - Why necessary: Enables walking without slipping, writing with chalk/pen, braking cars, lighting a matchstick.\n - Why evil: Causes wear and tear of shoe soles and car tyres, generates unwanted heat in machine parts, wastes energy.\n2. Ways to Modify Friction:\n - Increasing friction: Grooves in tyres, treads on athletic shoes, gymnasts applying chalk on hands, brake pads in bicycles.\n - Reducing friction: Lubricants (oil, grease, graphite), talcum powder on carrom boards, wheels/rollers, ball bearings in ceiling fans.\n3. Fluid Friction (Drag):\n - Fluids (liquids and gases) exert frictional resistance on bodies moving through them, called drag.\n - Depends on: Speed of object relative to fluid, shape of object, and nature/viscosity of fluid.\n - Streamlined Shape: Fish and birds have special streamlined bodies; airplanes and ships mimic these shapes to cut fluid drag.",
        "workedExample": {
          "problem": "Why do gymnasts apply a coarse powder to their hands before performing on bars?",
          "steps": [
            {
              "step": "Step 1: Identify the goal",
              "detail": "The gymnast needs a firm grip to prevent accidental slipping."
            },
            {
              "step": "Step 2: Effect of powder",
              "detail": "The coarse powder absorbs sweat and increases the roughness of their palms."
            },
            {
              "step": "Step 3: Conclude mechanism",
              "detail": "Increased surface roughness increases friction, ensuring a secure and safe grip."
            }
          ]
        },
        "keyFormula": "Fluid Resistance (Drag) is minimised by Streamlined Aerodynamic Shapes",
        "commonTrap": "Lubricants reduce friction by forming a thin layer between surfaces so they do not rub directly; they do NOT eliminate friction completely (friction can never be zero)."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-fric-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following arrangements represents friction types in INCREASING order of magnitude?",
        "options": [
          {
            "id": "a",
            "text": "Rolling < Sliding < Static",
            "isCorrect": true,
            "explanation": "Correct! Rolling friction is least, sliding is intermediate, and static friction is greatest."
          },
          {
            "id": "b",
            "text": "Static < Sliding < Rolling",
            "isCorrect": false,
            "explanation": "Static is greatest, not least."
          },
          {
            "id": "c",
            "text": "Sliding < Rolling < Static",
            "isCorrect": false,
            "explanation": "Rolling is smaller than sliding."
          },
          {
            "id": "d",
            "text": "Rolling < Static < Sliding",
            "isCorrect": false,
            "explanation": "Sliding friction is less than static."
          }
        ],
        "hint": "Rolling is the easiest motion, starting from rest requires highest force.",
        "conceptTag": "Friction Types"
      },
      {
        "id": "q-fric-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Why are ball bearings installed between the axle and wheels of ceiling fans and bicycles?",
        "options": [
          {
            "id": "a",
            "text": "To convert sliding friction into rolling friction",
            "isCorrect": true,
            "explanation": "Correct! Ball bearings roll between surfaces, replacing sliding friction with much smaller rolling friction."
          },
          {
            "id": "b",
            "text": "To increase the static friction",
            "isCorrect": false,
            "explanation": "Ball bearings are designed to decrease friction, not increase it."
          },
          {
            "id": "c",
            "text": "To eliminate friction completely to zero",
            "isCorrect": false,
            "explanation": "Friction can never be made zero."
          },
          {
            "id": "d",
            "text": "To make the machine look aesthetically pleasing",
            "isCorrect": false,
            "explanation": "It is a mechanical efficiency mechanism."
          }
        ],
        "hint": "Wheels roll instead of slide to save energy.",
        "conceptTag": "Ball Bearings"
      },
      {
        "id": "q-fric-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "A box of 20 kg rests on the floor. If a force of 15 N is applied and the box DOES NOT move, what is the magnitude of the frictional force acting on it?",
        "options": [
          {
            "id": "a",
            "text": "0 N",
            "isCorrect": false,
            "explanation": "If friction were 0 N, the box would accelerate under 15 N force."
          },
          {
            "id": "b",
            "text": "15 N",
            "isCorrect": true,
            "explanation": "Correct! Since the box is stationary (balanced forces), static friction matches the applied force exactly = 15 N."
          },
          {
            "id": "c",
            "text": "20 N",
            "isCorrect": false,
            "explanation": "Static friction self-adjusts up to limiting friction."
          },
          {
            "id": "d",
            "text": "200 N",
            "isCorrect": false,
            "explanation": "200 N is the weight (mg), not the horizontal frictional force."
          }
        ],
        "hint": "Static friction is self-adjusting and balances the applied force while stationary.",
        "conceptTag": "Static Friction Balance"
      },
      {
        "id": "q-fric-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Why do aeroplanes and high-speed bullet trains have pointed, bird-like streamlined fronts?",
        "options": [
          {
            "id": "a",
            "text": "To minimize fluid friction (drag) exerted by atmospheric air",
            "isCorrect": true,
            "explanation": "Correct! Air exerts fluid friction (drag). Streamlined shapes allow air to flow smoothly past, cutting energy loss."
          },
          {
            "id": "b",
            "text": "To increase gravitational pull on the vehicle",
            "isCorrect": false,
            "explanation": "Gravitational pull depends on mass, not shape."
          },
          {
            "id": "c",
            "text": "To increase air resistance for better braking",
            "isCorrect": false,
            "explanation": "Braking requires higher resistance, but travel needs lower drag."
          },
          {
            "id": "d",
            "text": "To produce loud supersonic sound waves",
            "isCorrect": false,
            "explanation": "Noise pollution is unwanted."
          }
        ],
        "hint": "Think about fluid resistance (air drag) and aerodynamic efficiency.",
        "conceptTag": "Fluid Friction & Streamlining"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-fric-1",
          "question": "Frictional force always acts in which direction relative to the motion of an object?",
          "options": [
            {
              "id": "a",
              "text": "Opposite to the direction of relative motion",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "In the direction of motion",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Perpendicular downwards",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "At an angle of 45 degrees",
              "isCorrect": false
            }
          ],
          "explanation": "Friction opposes the relative motion or tendency of motion between contact surfaces.",
          "topicSubarea": "Direction of Friction"
        },
        {
          "id": "t-fric-2",
          "question": "Sprinkling fine talcum powder on a carrom board:",
          "options": [
            {
              "id": "a",
              "text": "Increases friction",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Reduces friction by smoothing surface irregularities",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Stops the striker immediately",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Has no effect on striker movement",
              "isCorrect": false
            }
          ],
          "explanation": "Talcum powder acts as a dry lubricant filling microscopic depressions, drastically lowering sliding friction.",
          "topicSubarea": "Reducing Friction"
        },
        {
          "id": "t-fric-3",
          "question": "Which of the following substances is used as a solid lubricant in heavy machinery?",
          "options": [
            {
              "id": "a",
              "text": "Graphite",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Sand",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Iron filings",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Salt",
              "isCorrect": false
            }
          ],
          "explanation": "Graphite layers slide easily over one another, making it an excellent dry solid lubricant under high temperatures.",
          "topicSubarea": "Lubricants"
        },
        {
          "id": "t-fric-4",
          "question": "The treads on the tyres of trucks and buses are provided to:",
          "options": [
            {
              "id": "a",
              "text": "Increase grip by increasing friction with the road",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Make tyres look stylish",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Decrease friction to save fuel",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Increase tyre weight",
              "isCorrect": false
            }
          ],
          "explanation": "Tread grooves channel water away and increase mechanical interlocking with road surface to prevent skidding.",
          "topicSubarea": "Increasing Friction"
        },
        {
          "id": "t-fric-5",
          "question": "Fluid friction exerted by liquids and gases is scientifically termed:",
          "options": [
            {
              "id": "a",
              "text": "Drag",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Thrust",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Buoyancy",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Pressure",
              "isCorrect": false
            }
          ],
          "explanation": "The frictional force exerted by fluids is known as drag.",
          "topicSubarea": "Fluid Friction Definition"
        }
      ]
    }
  },
  {
    "id": "chemical-effects-current-8",
    "classId": "8",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 11",
    "title": "Chemical Effects of Electric Current",
    "hindiTitle": "विद्युत धारा के रासायनिक प्रभाव",
    "description": "Electrical conductivity of liquids, electrolytes and non-electrolytes, testing weak currents with LED and magnetic compass, chemical changes induced by current, and electroplating principles and applications.",
    "estimatedMinutes": 28,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-ceec-1",
        "eyebrow": "Concept 1: Liquid Conductivity",
        "title": "Conduction in Liquids & Electrolytes",
        "analogy": "Water carriers vs empty carts: Pure distilled water has no dissolved minerals or free ions and cannot conduct electricity. Adding salt creates dissolved positive (Na⁺) and negative (Cl⁻) ions that act like loaded ferry boats ferrying charge across the beaker.",
        "content": "1. Conductors vs Insulators in Liquids:\n - Poor Conductors (Non-electrolytes): Distilled water, sugar solution, kerosene, alcohol, mustard oil.\n - Good Conductors (Electrolytes): Solutions of acids (dil. HCl, H₂SO₄), bases (NaOH, KOH), and salts (NaCl, CuSO₄) conduct because they dissociate into freely moving charged ions.\n2. Testing Weak Conductivity:\n - Ordinary bulbs may not glow if current is too feeble because filament does not get hot enough.\n - LED (Light Emitting Diode): Glows even with a very tiny current. Note: Longer lead is positive (+ve) and connects to positive terminal; shorter lead is negative (-ve).\n - Magnetic Compass Tester: A wire wrapped around a compass detects even micro-currents through magnetic deflection of the needle.",
        "workedExample": {
          "problem": "A student tests distilled water with an LED circuit and the LED does not glow. What can she dissolve into the water to make it conduct immediately?",
          "steps": [
            {
              "step": "Step 1: Understand why pure water fails",
              "detail": "Distilled water contains no free mobile ions to carry electric charge."
            },
            {
              "step": "Step 2: Identify ionizing solutes",
              "detail": "Common salt (NaCl), lemon juice (citric acid), or caustic soda (NaOH) dissociate into free ions in water."
            },
            {
              "step": "Step 3: Conclusion",
              "detail": "Adding common salt dissociates into Na⁺ and Cl⁻ ions, transforming the water into an electrolyte and making the LED glow brightly."
            }
          ]
        },
        "keyFormula": "Electrolyte = Water + Acid / Base / Salt (Provides mobile ions)",
        "commonTrap": "Never touch electrical appliances with wet hands! Tap water contains dissolved mineral salts, making it a good conductor and causing fatal electric shocks."
      },
      {
        "id": "sec-ceec-2",
        "eyebrow": "Concept 2: Electrolysis & Plating",
        "title": "Chemical Effects & Electroplating",
        "analogy": "Gold-plated artificial jewellery: A thin shiny film of expensive gold or chromium is electrochemically sprayed atom by atom onto a cheaper base metal like copper or iron using electric current.",
        "content": "1. Chemical Effects of Electric Current:\n - Bubbles of gas formed at electrodes (e.g., electrolysis of water produces O₂ gas at positive anode and H₂ gas at negative cathode).\n - Deposits of metal on electrodes (e.g., copper deposit on cathode).\n - Change of colour in solution (e.g., greenish-blue spot on cut potato around positive terminal wire).\n2. What is Electroplating?\n - The process of depositing a thin layer of any desired metal on another material by means of electricity.\n3. Mechanism (Copper Plating on Iron Spoon):\n - Electrolyte: Copper sulphate solution (CuSO₄).\n - Anode (+ve terminal): Plate of pure copper metal.\n - Cathode (-ve terminal): Iron spoon to be plated.\n - Current causes Cu²⁺ ions to deposit on the iron spoon (-ve), while an equal amount of copper dissolves into solution from the copper anode (+ve).\n4. Practical Uses:\n - Chromium plating on car bumpers, bicycle handlebars, and bath taps for scratch resistance and shine.\n - Gold/silver plating on artificial jewellery.\n - Tin plating on iron cans for storing food (tin is less reactive than iron, preventing food spoilage).\n - Zinc coating (galvanisation) on iron bridges to prevent rust.",
        "workedExample": {
          "problem": "In an experiment to electroplate copper onto an iron key, which electrode must the iron key be connected to, and why?",
          "steps": [
            {
              "step": "Step 1: Identify ions in copper sulphate solution",
              "detail": "CuSO₄ dissociates into positively charged Cu²⁺ ions and SO₄²⁻ ions."
            },
            {
              "step": "Step 2: Determine electrostatic attraction",
              "detail": "Positively charged copper ions (Cu²⁺) are attracted to the negative terminal (cathode)."
            },
            {
              "step": "Step 3: Assign connection",
              "detail": "The iron key must be connected to the negative terminal of the battery so copper ions deposit onto it."
            }
          ]
        },
        "keyFormula": "Electroplating: Object to be coated connects to Negative Terminal (Cathode)",
        "commonTrap": "Connecting the object to the positive terminal will cause it to dissolve rather than get plated! Always connect the target object to the negative terminal."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-ceec-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following liquids is a POOR conductor of electricity?",
        "options": [
          {
            "id": "a",
            "text": "Lemon juice",
            "isCorrect": false,
            "explanation": "Contains citric acid; conducts well."
          },
          {
            "id": "b",
            "text": "Tap water",
            "isCorrect": false,
            "explanation": "Contains dissolved mineral salts; conducts."
          },
          {
            "id": "c",
            "text": "Pure distilled water",
            "isCorrect": true,
            "explanation": "Correct! Pure distilled water is devoid of mineral ions and does not conduct electricity."
          },
          {
            "id": "d",
            "text": "Vinegar",
            "isCorrect": false,
            "explanation": "Contains acetic acid; conducts electricity."
          }
        ],
        "hint": "Look for the liquid that has no dissolved salts or acids.",
        "conceptTag": "Liquid Conductivity"
      },
      {
        "id": "q-ceec-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "In an LED, why does one wire lead come longer than the other?",
        "options": [
          {
            "id": "a",
            "text": "The longer lead is positive and must connect to positive battery terminal",
            "isCorrect": true,
            "explanation": "Correct! The longer lead is the anode (+ve) and shorter lead is the cathode (-ve)."
          },
          {
            "id": "b",
            "text": "The longer lead is negative and connects to negative terminal",
            "isCorrect": false,
            "explanation": "Shorter lead is negative."
          },
          {
            "id": "c",
            "text": "It is a manufacturing defect with no electrical purpose",
            "isCorrect": false,
            "explanation": "LEDs are polar semiconductors and must be connected correctly."
          },
          {
            "id": "d",
            "text": "To adjust the brightness of the light",
            "isCorrect": false,
            "explanation": "Polarity determines conduction, not length alone."
          }
        ],
        "hint": "Longer wire = positive (+), shorter wire = negative (-).",
        "conceptTag": "LED Polarity"
      },
      {
        "id": "q-ceec-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "When electric current is passed through water with a few drops of dilute sulphuric acid, which gases are released at the electrodes?",
        "options": [
          {
            "id": "a",
            "text": "Oxygen at anode (+), Hydrogen at cathode (-)",
            "isCorrect": true,
            "explanation": "Correct! H⁺ ions migrate to negative cathode producing H₂; O²⁻ ions migrate to positive anode producing O₂."
          },
          {
            "id": "b",
            "text": "Hydrogen at anode (+), Oxygen at cathode (-)",
            "isCorrect": false,
            "explanation": "Hydrogen ions are positive so they travel to the negative cathode."
          },
          {
            "id": "c",
            "text": "Chlorine at anode (+), Hydrogen at cathode (-)",
            "isCorrect": false,
            "explanation": "Water has H and O, not chlorine."
          },
          {
            "id": "d",
            "text": "Nitrogen at anode (+), Oxygen at cathode (-)",
            "isCorrect": false,
            "explanation": "Water contains hydrogen and oxygen."
          }
        ],
        "hint": "Positively charged hydrogen ions (H⁺) move to the negative electrode.",
        "conceptTag": "Electrolysis of Water"
      },
      {
        "id": "q-ceec-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Why is chromium electroplated onto bicycle handles and bath taps instead of making the entire object out of pure chromium?",
        "options": [
          {
            "id": "a",
            "text": "Chromium is very expensive, so coating a cheaper metal (iron/steel) is cost-effective",
            "isCorrect": true,
            "explanation": "Correct! Chromium has a shiny appearance and resists scratches/corrosion, but is too expensive to manufacture whole parts from."
          },
          {
            "id": "b",
            "text": "Pure chromium is a soft liquid metal at room temperature",
            "isCorrect": false,
            "explanation": "Chromium is a very hard solid metal."
          },
          {
            "id": "c",
            "text": "Chromium corrodes faster than iron",
            "isCorrect": false,
            "explanation": "Chromium resists corrosion."
          },
          {
            "id": "d",
            "text": "Chromium is magnetic and attracts dust",
            "isCorrect": false,
            "explanation": "This is factually incorrect."
          }
        ],
        "hint": "Consider material cost, hardness, and corrosion resistance economics.",
        "conceptTag": "Electroplating Economics"
      }
    ],
    "assessment": {
      "questions": [
        {
          "id": "t-ceec-1",
          "question": "The process of depositing a layer of desired metal on another material using electricity is called:",
          "options": [
            {
              "id": "a",
              "text": "Electroplating",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Galvanisation by dipping",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Rusting",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Crystallisation",
              "isCorrect": false
            }
          ],
          "explanation": "Depositing metal electrically is known as electroplating.",
          "topicSubarea": "Electroplating Definition"
        },
        {
          "id": "t-ceec-2",
          "question": "Which of the following will NOT conduct electricity?",
          "options": [
            {
              "id": "a",
              "text": "Sugar solution in water",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Copper sulphate solution",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Sodium chloride solution",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Dilute hydrochloric acid",
              "isCorrect": false
            }
          ],
          "explanation": "Sugar does not dissociate into charged ions in water, so sugar solution is a non-electrolyte.",
          "topicSubarea": "Electrolytes vs Non-electrolytes"
        },
        {
          "id": "t-ceec-3",
          "question": "When current was passed through a cut potato using copper wires, a greenish blue spot developed around:",
          "options": [
            {
              "id": "a",
              "text": "The wire connected to the positive terminal",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The wire connected to the negative terminal",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Both wires equally",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The centre of the potato",
              "isCorrect": false
            }
          ],
          "explanation": "Copper from the positive terminal wire reacts with chemical compounds in the potato, forming copper compounds that appear as a greenish-blue spot.",
          "topicSubarea": "Potato Conduction Experiment"
        },
        {
          "id": "t-ceec-4",
          "question": "Tin cans used for storing food items are made by electroplating tin onto iron because:",
          "options": [
            {
              "id": "a",
              "text": "Tin is less reactive than iron, preventing food from spoiling",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Tin makes iron heavier",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Tin is cheaper than iron",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Tin shines brighter than gold",
              "isCorrect": false
            }
          ],
          "explanation": "Tin is less reactive than iron and prevents food acids from coming into direct contact with iron.",
          "topicSubarea": "Tin Plating Application"
        },
        {
          "id": "t-ceec-5",
          "question": "During electroplating of copper onto an iron key, the mass of the copper anode (+ve electrode):",
          "options": [
            {
              "id": "a",
              "text": "Decreases as copper atoms dissolve into solution",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Increases continuously",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Remains completely unchanged",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "First increases then drops to zero",
              "isCorrect": false
            }
          ],
          "explanation": "Copper atoms from the anode oxidize and enter the electrolyte as Cu²⁺ ions, progressively reducing the anode mass.",
          "topicSubarea": "Electrode Mass Changes"
        }
      ]
    }
  }
]
};
