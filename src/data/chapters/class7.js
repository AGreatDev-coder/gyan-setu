// class7.js NCERT Curriculum Chapters (Mathematics and Science)
// 4 chapters per subject, fully aligned with official NCERT / CBSE curriculum.

export const class7Chapters = {
  math: [
  {
    "id": "integers-7",
    "ncertChapterNo": "Chapter 1",
    "title": "Integers",
    "hindiTitle": "पूर्णांक",
    "description": "Multiplication and division of positive and negative integers, properties on number line, and distributive law.",
    "estimatedMinutes": 20,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "int-1",
        "eyebrow": "Sign Rules",
        "title": "1. Rules for Multiplying Negative Numbers",
        "analogy": "Bank balance credits (+) and debits (-)! If you owe ₹500 (debit of -500) 3 times, your total debt is 3 × (-500) = -1500.",
        "content": "The golden rules of integer multiplication:\n- Positive × Positive = Positive: (+3) × (+4) = +12\n- Positive × Negative = Negative: (+3) × (-4) = -12\n- Negative × Negative = Positive: (-3) × (-4) = +12",
        "workedExample": {
          "problem": "NCERT Ex 1.2: Evaluate (-15) × (-10) × 6",
          "steps": [
            {
              "step": "Step 1: Multiply first two numbers",
              "detail": "(-15) × (-10) = +150 (minus × minus = plus)"
            },
            {
              "step": "Step 2: Multiply with 6",
              "detail": "150 × 6 = 900."
            }
          ]
        },
        "keyFormula": "Even number of negative factors = Positive product. Odd number of negative factors = Negative product.",
        "commonTrap": "Confusing addition of integers with multiplication: -3 + (-4) = -7, but (-3) × (-4) = +12!"
      },
      {
        "id": "sec-int-2",
        "eyebrow": "Concept 2: Multiplication & Division Rules",
        "title": "Multiplication & Division of Integers",
        "analogy": "Friend and enemy signs rule: The friend (+) of my friend (+) is my friend (+). The enemy (-) of my enemy (-) is my friend (+). The enemy (-) of my friend (+) is my enemy (-).",
        "content": "1. Multiplication Rules:\n - Positive × Positive = Positive: (+a) × (+b) = +(ab)\n - Negative × Negative = Positive: (-a) × (-b) = +(ab)\n - Positive × Negative = Negative: (+a) × (-b) = -(ab)\n - Product of an EVEN number of negative integers is POSITIVE; product of an ODD number of negative integers is NEGATIVE.\n2. Division Rules:\n - When positive integer is divided by negative integer (or vice versa), quotient is negative: (-a) ÷ b = -(a ÷ b).\n - When negative integer is divided by negative integer, quotient is positive: (-a) ÷ (-b) = +(a ÷ b).\n - For any integer a, a ÷ 1 = a; a ÷ 0 is NOT DEFINED; 0 ÷ a = 0 (for a ≠ 0).\n3. Distributive Property: a × (b + c) = (a × b) + (a × c).",
        "workedExample": {
          "problem": "Evaluate: (-20) × (-2) + (-20) × (-8) using properties.",
          "steps": [
            {
              "step": "Step 1: Identify common factor",
              "detail": "(-20) is common to both products."
            },
            {
              "step": "Step 2: Apply distributive law",
              "detail": "(-20) × [(-2) + (-8)] = (-20) × (-10)"
            },
            {
              "step": "Step 3: Multiply two negative integers",
              "detail": "(-20) × (-10) = +200."
            }
          ]
        },
        "keyFormula": "(-a) × (-b) = ab  |  Distributive Law: a(b + c) = ab + ac",
        "commonTrap": "Division by zero is undefined! a ÷ 0 is NOT 0 and NOT a."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-int-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Ex 1.2: What is the value of (-20) × (-5)?",
        "options": [
          {
            "id": "a",
            "text": "+100",
            "isCorrect": true,
            "explanation": "Correct! Negative × Negative = Positive: 20 × 5 = 100."
          },
          {
            "id": "b",
            "text": "-100",
            "isCorrect": false,
            "explanation": "Incorrect: Two negative signs cancel each other out in multiplication."
          },
          {
            "id": "c",
            "text": "-25",
            "isCorrect": false,
            "explanation": "Incorrect: Multiply, do not add."
          },
          {
            "id": "d",
            "text": "+25",
            "isCorrect": false,
            "explanation": "Incorrect: Check multiplication 20 × 5 = 100."
          }
        ],
        "hint": "Negative multiplied by negative gives positive.",
        "conceptTag": "sign-rules"
      },
      {
        "id": "q-int-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Evaluate: (-30) × [13 + (-3)].",
        "options": [
          {
            "id": "a",
            "text": "-300",
            "isCorrect": true,
            "explanation": "Correct! 13 + (-3) = 10. Then (-30) × 10 = -300."
          },
          {
            "id": "b",
            "text": "300",
            "isCorrect": false,
            "explanation": "Negative × positive is negative."
          },
          {
            "id": "c",
            "text": "-480",
            "isCorrect": false,
            "explanation": "Incorrect."
          },
          {
            "id": "d",
            "text": "480",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "First evaluate inside the brackets: 13 - 3 = 10.",
        "conceptTag": "Integer Multiplication"
      },
      {
        "id": "q-int-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "What is the sign of the product if we multiply 19 negative integers and 5 positive integers together?",
        "options": [
          {
            "id": "a",
            "text": "Negative",
            "isCorrect": true,
            "explanation": "Correct! The product of an odd number (19) of negative integers is negative. Multiplying by positive integers preserves the negative sign."
          },
          {
            "id": "b",
            "text": "Positive",
            "isCorrect": false,
            "explanation": "Odd number of negatives yields negative."
          },
          {
            "id": "c",
            "text": "Zero",
            "isCorrect": false,
            "explanation": "None of the integers is zero."
          },
          {
            "id": "d",
            "text": "Depends on their values",
            "isCorrect": false,
            "explanation": "Sign depends purely on parity of negative factors."
          }
        ],
        "hint": "Count the negative integers: 19 is odd.",
        "conceptTag": "Sign Rules for Multiplication"
      },
      {
        "id": "q-int-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "In a class test, (+5) marks are given for every correct answer and (-2) marks are given for every incorrect answer. Radhika scored 20 marks. If she got 8 correct answers, how many questions did she answer incorrectly?",
        "options": [
          {
            "id": "a",
            "text": "10",
            "isCorrect": true,
            "explanation": "Correct! Marks for 8 correct = 8 × 5 = 40. Total score = 20 => Marks lost = 40 - 20 = 20. Number of incorrect answers = 20 / 2 = 10."
          },
          {
            "id": "b",
            "text": "5",
            "isCorrect": false,
            "explanation": "5 incorrect answers would lose only 10 marks (40 - 10 = 30)."
          },
          {
            "id": "c",
            "text": "12",
            "isCorrect": false,
            "explanation": "12 would lose 24 marks."
          },
          {
            "id": "d",
            "text": "8",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Total score = (correct × 5) - (incorrect × 2) = 20.",
        "conceptTag": "Real-Life Integer Problem"
      }
    ],
    "assessment": {
      "id": "test-int-1",
      "title": "Class 7 Chapter 1 NCERT Diagnostic Assessment",
      "questions": [
        {
          "id": "t-int-1",
          "question": "The product of any integer with (-1) is:",
          "options": [
            {
              "id": "a",
              "text": "Its additive inverse",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Its reciprocal",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Zero",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Always positive",
              "isCorrect": false
            }
          ],
          "explanation": "a × (-1) = -a, which is the additive inverse of a.",
          "topicSubarea": "Multiplication by -1"
        },
        {
          "id": "t-int-2",
          "question": "Evaluate: (-30) ÷ 10",
          "options": [
            {
              "id": "a",
              "text": "-3",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "3",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "-300",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "1/3",
              "isCorrect": false
            }
          ],
          "explanation": "-30 / 10 = -3.",
          "topicSubarea": "Division of Integers"
        },
        {
          "id": "t-int-3",
          "question": "Which of the following does NOT equal 0?",
          "options": [
            {
              "id": "a",
              "text": "0 ÷ (-5)",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "(-5) ÷ 0",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "0 × (-5)",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "5 + (-5)",
              "isCorrect": false
            }
          ],
          "explanation": "Division by zero is undefined, not zero.",
          "topicSubarea": "Division by Zero"
        },
        {
          "id": "t-int-4",
          "question": "Evaluate using distributive property: 26 × (-48) + (-48) × (-36)",
          "options": [
            {
              "id": "a",
              "text": "480",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "-480",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "520",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "-520",
              "isCorrect": false
            }
          ],
          "explanation": "(-48) × [26 + (-36)] = (-48) × (-10) = +480.",
          "topicSubarea": "Distributive Property"
        },
        {
          "id": "t-int-5",
          "question": "If the temperature drops by 3°C every hour, what is the change after 6 hours?",
          "options": [
            {
              "id": "a",
              "text": "-18°C",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "+18°C",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "-9°C",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "+9°C",
              "isCorrect": false
            }
          ],
          "explanation": "6 × (-3°C) = -18°C.",
          "topicSubarea": "Word Modeling with Negative Numbers"
        }
      ]
    },
    "classId": "7",
    "subjectId": "math"
  },
  {
    "id": "fractions-decimals-7",
    "classId": "7",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 2",
    "title": "Fractions and Decimals",
    "hindiTitle": "भिन्न एवं दशमलव",
    "description": "Multiplication and division of fractions, reciprocals, representation and operations on decimal numbers, shifting decimal points, and practical measurement problems.",
    "estimatedMinutes": 28,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-fd-1",
        "eyebrow": "Concept 1: Fractional Operations",
        "title": "Multiplication & Division of Fractions",
        "analogy": "Taking half of a 3/4th cup of sugar when baking half a recipe: 1/2 × 3/4 = 3/8th of a cup. The word \"of\" in mathematics means multiplication.",
        "content": "1. Multiplication of Fraction by a Whole Number: Multiply numerator by the whole number and keep denominator unchanged (e.g., 3 × 2/7 = 6/7).\n2. Multiplication of Two Fractions: Product of Fractions = (Product of Numerators) / (Product of Denominators). e.g., (2/3) × (5/7) = 10/21.\n3. Reciprocal of a Fraction: Inverting numerator and denominator. The non-zero numbers whose product is 1 are reciprocals of each other (Reciprocal of a/b is b/a). Reciprocal of 0 does not exist!\n4. Division of Fractions: To divide a fraction by another, multiply the first fraction by the reciprocal of the second fraction: a/b ÷ c/d = a/b × d/c.",
        "workedExample": {
          "problem": "Find the value of: 3/5 ÷ 2/7.",
          "steps": [
            {
              "step": "Step 1: Find reciprocal of divisor 2/7",
              "detail": "Reciprocal of 2/7 is 7/2."
            },
            {
              "step": "Step 2: Change division to multiplication",
              "detail": "3/5 × 7/2"
            },
            {
              "step": "Step 3: Multiply numerators and denominators",
              "detail": "(3 × 7) / (5 × 2) = 21/10 = 2 ⅒."
            }
          ]
        },
        "keyFormula": "Division Rule: (a/b) ÷ (c/d) = (a/b) × (d/c)",
        "commonTrap": "Do not flip the first fraction! Only the divisor (the fraction following the division symbol) is inverted."
      },
      {
        "id": "sec-fd-2",
        "eyebrow": "Concept 2: Decimal Mechanics",
        "title": "Operations on Decimal Numbers",
        "analogy": "Converting rupee and paise: Rs 5.75 × 10 = Rs 57.50. Multiplying by 10 moves the decimal point 1 place to the right; dividing moves it left.",
        "content": "1. Multiplying Decimals by Powers of 10:\n - Multiplying by 10, 100, 1000 shifts the decimal point to the RIGHT by as many places as there are zeroes (e.g., 2.39 × 10 = 23.9; 0.05 × 100 = 5).\n2. Multiplying Two Decimals:\n - Multiply numbers ignoring decimal points.\n - Count total decimal places in both factors.\n - Place the decimal point in product counting that total number of digits from the right (e.g., 0.3 × 0.4: 3 × 4 = 12, two decimal places => 0.12).\n3. Dividing Decimals by Whole Numbers and Decimals:\n - Convert decimal divisor to whole number by multiplying numerator and denominator by appropriate power of 10: 7.2 ÷ 0.9 = 72 ÷ 9 = 8.",
        "workedExample": {
          "problem": "Evaluate: 0.15 × 0.4 and 5.6 ÷ 0.08.",
          "steps": [
            {
              "step": "Step 1: Multiply 0.15 by 0.4",
              "detail": "15 × 4 = 60. Decimal places: 2 (in 0.15) + 1 (in 0.4) = 3 places. Result = 0.060 = 0.06."
            },
            {
              "step": "Step 2: Divide 5.6 by 0.08",
              "detail": "Multiply numerator and denominator by 100: (5.6 × 100) / (0.08 × 100) = 560 / 8 = 70."
            }
          ]
        },
        "keyFormula": "Total decimal places in product = Sum of decimal places in multipliers",
        "commonTrap": "0.2 × 0.2 is 0.04, NOT 0.4! Be very careful with leading zeroes."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-fd-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What is the reciprocal of the mixed fraction 2 ¾?",
        "options": [
          {
            "id": "a",
            "text": "4/11",
            "isCorrect": true,
            "explanation": "2 ¾ = (2 × 4 + 3) / 4 = 11/4. Reciprocal of 11/4 is 4/11."
          },
          {
            "id": "b",
            "text": "11/4",
            "isCorrect": false,
            "explanation": "11/4 is the improper fraction, not its reciprocal."
          },
          {
            "id": "c",
            "text": "2 ⁴/₃",
            "isCorrect": false,
            "explanation": "Invalid mixed fraction notation."
          },
          {
            "id": "d",
            "text": "4/8",
            "isCorrect": false,
            "explanation": "Calculation error."
          }
        ],
        "hint": "First convert the mixed fraction into an improper fraction, then invert it.",
        "conceptTag": "Reciprocal of Mixed Fractions"
      },
      {
        "id": "q-fd-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Calculate: 3.25 × 0.8.",
        "options": [
          {
            "id": "a",
            "text": "2.6",
            "isCorrect": true,
            "explanation": "325 × 8 = 2600. Total decimal places = 2 + 1 = 3 places from right: 2.600 = 2.6."
          },
          {
            "id": "b",
            "text": "26",
            "isCorrect": false,
            "explanation": "Missed decimal placement."
          },
          {
            "id": "c",
            "text": "0.26",
            "isCorrect": false,
            "explanation": "Placed decimal point one place too far to the left."
          },
          {
            "id": "d",
            "text": "2.4",
            "isCorrect": false,
            "explanation": "Arithmetic error."
          }
        ],
        "hint": "Multiply 325 by 8, then insert 3 decimal places.",
        "conceptTag": "Decimal Multiplication"
      },
      {
        "id": "q-fd-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "Solve: (4/9) ÷ (2/3).",
        "options": [
          {
            "id": "a",
            "text": "2/3",
            "isCorrect": true,
            "explanation": "(4/9) × (3/2) = (4 × 3) / (9 × 2) = 12/18 = 2/3."
          },
          {
            "id": "b",
            "text": "8/27",
            "isCorrect": false,
            "explanation": "Multiplied directly without taking reciprocal of divisor."
          },
          {
            "id": "c",
            "text": "3/2",
            "isCorrect": false,
            "explanation": "Inverted the wrong fraction."
          },
          {
            "id": "d",
            "text": "1/3",
            "isCorrect": false,
            "explanation": "Arithmetic slip."
          }
        ],
        "hint": "Multiply 4/9 by the reciprocal of 2/3 (which is 3/2).",
        "conceptTag": "Division of Fractions"
      },
      {
        "id": "q-fd-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "A two-wheeler covers a distance of 55.3 km in 1 liter of petrol. How much distance will it cover in 10 liters of petrol?",
        "options": [
          {
            "id": "a",
            "text": "553 km",
            "isCorrect": true,
            "explanation": "Distance = 55.3 × 10. Multiplying by 10 shifts decimal 1 place to right = 553 km."
          },
          {
            "id": "b",
            "text": "55.30 km",
            "isCorrect": false,
            "explanation": "Did not multiply by 10."
          },
          {
            "id": "c",
            "text": "5,530 km",
            "isCorrect": false,
            "explanation": "Multiplied by 100 instead of 10."
          },
          {
            "id": "d",
            "text": "5.53 km",
            "isCorrect": false,
            "explanation": "Divided by 10 instead of multiplying."
          }
        ],
        "hint": "Multiply distance per liter by total liters (shift decimal right by 1 zero).",
        "conceptTag": "Decimal Word Problems"
      }
    ],
    "assessment": {
      "id": "test-fd-7",
      "title": "Class 7 Chapter 2 Diagnostic: Fractions and Decimals",
      "questions": [
        {
          "id": "t-fd-1",
          "question": "What is 1/2 of 4 2/9?",
          "options": [
            {
              "id": "a",
              "text": "19/9 = 2 ⅑",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "38/9",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "2 ⅖",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "1/9",
              "isCorrect": false
            }
          ],
          "explanation": "4 2/9 = 38/9. 1/2 × 38/9 = 19/9 = 2 ⅑.",
          "topicSubarea": "Fraction of an Operator"
        },
        {
          "id": "t-fd-2",
          "question": "Which of the following is the largest decimal number?",
          "options": [
            {
              "id": "a",
              "text": "0.5",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "0.05",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "0.55",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "0.055",
              "isCorrect": false
            }
          ],
          "explanation": "Comparing tenths and hundredths: 0.55 > 0.50 > 0.055 > 0.050.",
          "topicSubarea": "Comparison of Decimals"
        },
        {
          "id": "t-fd-3",
          "question": "Evaluate: 7 ÷ 3.5.",
          "options": [
            {
              "id": "a",
              "text": "2",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "0.2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "24.5",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "20",
              "isCorrect": false
            }
          ],
          "explanation": "7 ÷ (35/10) = 7 × 10/35 = 70/35 = 2.",
          "topicSubarea": "Decimal Division"
        },
        {
          "id": "t-fd-4",
          "question": "The reciprocal of a proper fraction is always:",
          "options": [
            {
              "id": "a",
              "text": "A proper fraction",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "An improper fraction",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Equal to 1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "A negative number",
              "isCorrect": false
            }
          ],
          "explanation": "Since proper fractions have numerator < denominator, inverting yields numerator > denominator (improper).",
          "topicSubarea": "Reciprocal Properties"
        },
        {
          "id": "t-fd-5",
          "question": "Multiply: 0.03 × 1,000.",
          "options": [
            {
              "id": "a",
              "text": "30",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "3",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "300",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "0.3",
              "isCorrect": false
            }
          ],
          "explanation": "Multiplying by 1000 shifts decimal 3 places to the right: 0.03 -> 0.3 -> 3 -> 30.",
          "topicSubarea": "Decimal Shifting by 1000"
        }
      ]
    }
  },
  {
    "id": "simple-equations-7",
    "classId": "7",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 4",
    "title": "Simple Equations",
    "hindiTitle": "सरल समीकरण",
    "description": "Concept of an algebraic equation as a balanced scale, solving equations through inverse operations and transposition, and translating everyday word statements into equations.",
    "estimatedMinutes": 26,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-se-1",
        "eyebrow": "Concept 1: Balance & Inverses",
        "title": "What is an Equation? The Balance Scale Principle",
        "analogy": "A vegetable seller's weighing balance (tarazu): if both pans are in balance, adding 200 grams to the left pan requires adding 200 grams to the right pan to keep it level.",
        "content": "1. An equation is a condition on a variable where two expressions have equal value separated by an '=' sign.\n2. In an equation, the left-hand side (LHS) is equal to the right-hand side (RHS).\n3. Any mathematical operation performed on one side must also be performed on the other side to maintain equality:\n - Add the same number to both sides.\n - Subtract the same number from both sides.\n - Multiply both sides by the same non-zero number.\n - Divide both sides by the same non-zero number.",
        "workedExample": {
          "problem": "Solve for x: x - 7 = 15 by the balancing method.",
          "steps": [
            {
              "step": "Step 1: Identify the operation applied to x",
              "detail": "7 is subtracted from x."
            },
            {
              "step": "Step 2: Apply inverse operation to both sides",
              "detail": "Add 7 to both LHS and RHS: x - 7 + 7 = 15 + 7."
            },
            {
              "step": "Step 3: Simplify",
              "detail": "x = 22. Check: 22 - 7 = 15 (Verified)."
            }
          ]
        },
        "keyFormula": "LHS = RHS: Equality is preserved if identical operations are performed on both sides",
        "commonTrap": "Never perform an operation on only one side of the equals sign."
      },
      {
        "id": "sec-se-2",
        "eyebrow": "Concept 2: Transposition",
        "title": "Solving by Transposition & Word Problems",
        "analogy": "Passing through a security gate: when a term crosses the equals sign (=) boundary, its operation flips to its opposite (+ becomes -, - becomes +, × becomes ÷, ÷ becomes ×).",
        "content": "1. Transposition means moving a term from one side of the equation to the other.\n2. When transposing a term:\n - '+' changes to '-'\n - '-' changes to '+'\n - '×' changes to '÷'\n - '÷' changes to '×'\n3. Setting up Word Problems:\n - Identify the unknown quantity and assign a variable (e.g., let age = y).\n - Translate the English statement into mathematical relations.\n - Solve using transposition.",
        "workedExample": {
          "problem": "Solve: 4m + 5 = 25.",
          "steps": [
            {
              "step": "Step 1: Transpose +5 to RHS",
              "detail": "4m = 25 - 5 = 20"
            },
            {
              "step": "Step 2: Transpose multiplying coefficient 4 to RHS as division",
              "detail": "m = 20 / 4"
            },
            {
              "step": "Step 3: State final solution",
              "detail": "m = 5. Check: 4(5) + 5 = 20 + 5 = 25."
            }
          ]
        },
        "keyFormula": "Transposition Rule: Transposing changes operation to its inverse",
        "commonTrap": "When transposing -7, do not write -7 on the other side! It becomes +7."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-se-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Solve for y: y + 9 = 24.",
        "options": [
          {
            "id": "a",
            "text": "y = 15",
            "isCorrect": true,
            "explanation": "Transpose +9 to RHS: y = 24 - 9 = 15."
          },
          {
            "id": "b",
            "text": "y = 33",
            "isCorrect": false,
            "explanation": "Added 9 instead of subtracting."
          },
          {
            "id": "c",
            "text": "y = 216",
            "isCorrect": false,
            "explanation": "Multiplied instead of subtracting."
          },
          {
            "id": "d",
            "text": "y = 13",
            "isCorrect": false,
            "explanation": "Arithmetic error."
          }
        ],
        "hint": "Subtract 9 from 24.",
        "conceptTag": "Single Step Transposition"
      },
      {
        "id": "q-se-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Solve for p: 3p - 4 = 17.",
        "options": [
          {
            "id": "a",
            "text": "p = 7",
            "isCorrect": true,
            "explanation": "3p = 17 + 4 = 21 => p = 21 / 3 = 7."
          },
          {
            "id": "b",
            "text": "p = 5",
            "isCorrect": false,
            "explanation": "Subtracted 4 instead of adding: (17-4)/3 ≠ integer."
          },
          {
            "id": "c",
            "text": "p = 21",
            "isCorrect": false,
            "explanation": "Did not divide by 3."
          },
          {
            "id": "d",
            "text": "p = 9",
            "isCorrect": false,
            "explanation": "Arithmetic slip."
          }
        ],
        "hint": "First transpose -4 as +4, then divide by 3.",
        "conceptTag": "Two Step Equation"
      },
      {
        "id": "q-se-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "Which equation correctly represents: \"Sum of three times x and 11 is 32\"?",
        "options": [
          {
            "id": "a",
            "text": "3x + 11 = 32",
            "isCorrect": true,
            "explanation": "Three times x is 3x; sum with 11 is 3x + 11; \"is 32\" means = 32."
          },
          {
            "id": "b",
            "text": "x/3 + 11 = 32",
            "isCorrect": false,
            "explanation": "x/3 is one-third, not three times."
          },
          {
            "id": "c",
            "text": "3(x + 11) = 32",
            "isCorrect": false,
            "explanation": "This means three times the sum of x and 11."
          },
          {
            "id": "d",
            "text": "3x - 11 = 32",
            "isCorrect": false,
            "explanation": "Question states sum (+), not difference."
          }
        ],
        "hint": "Break statement into algebraic pieces: \"3 times x\" + \"11\" = \"32\".",
        "conceptTag": "Translating Statements to Equations"
      },
      {
        "id": "q-se-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "Raju's father's age is 5 years more than three times Raju's age. If father is 44 years old, what is Raju's age?",
        "options": [
          {
            "id": "a",
            "text": "13 years",
            "isCorrect": true,
            "explanation": "Let Raju's age = x. 3x + 5 = 44 => 3x = 39 => x = 13."
          },
          {
            "id": "b",
            "text": "15 years",
            "isCorrect": false,
            "explanation": "3(15) + 5 = 50 ≠ 44."
          },
          {
            "id": "c",
            "text": "11 years",
            "isCorrect": false,
            "explanation": "3(11) + 5 = 38 ≠ 44."
          },
          {
            "id": "d",
            "text": "14 years",
            "isCorrect": false,
            "explanation": "3(14) + 5 = 47 ≠ 44."
          }
        ],
        "hint": "Set up 3x + 5 = 44 and solve for x.",
        "conceptTag": "Age Word Problem"
      }
    ],
    "assessment": {
      "id": "test-se-7",
      "title": "Class 7 Chapter 4 Diagnostic: Simple Equations",
      "questions": [
        {
          "id": "t-se-1",
          "question": "If 7x = 42, what is the value of x?",
          "options": [
            {
              "id": "a",
              "text": "6",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "7",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "35",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "49",
              "isCorrect": false
            }
          ],
          "explanation": "x = 42 / 7 = 6.",
          "topicSubarea": "Multiplicative Inverse"
        },
        {
          "id": "t-se-2",
          "question": "In the equation 2q + 6 = 12, what is the first step to isolate 2q?",
          "options": [
            {
              "id": "a",
              "text": "Subtract 6 from both sides",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Add 6 to both sides",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Divide both sides by 6",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Multiply both sides by 2",
              "isCorrect": false
            }
          ],
          "explanation": "Inverse of +6 is subtracting 6 from both sides.",
          "topicSubarea": "Isolation Strategy"
        },
        {
          "id": "t-se-3",
          "question": "What is the solution of: m/4 = 7?",
          "options": [
            {
              "id": "a",
              "text": "m = 28",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "m = 11",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "m = 3",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "m = 7/4",
              "isCorrect": false
            }
          ],
          "explanation": "m = 7 × 4 = 28.",
          "topicSubarea": "Division Transposition"
        },
        {
          "id": "t-se-4",
          "question": "Which of the following values satisfies the equation 5x - 3 = 12?",
          "options": [
            {
              "id": "a",
              "text": "x = 3",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "x = 2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "x = 4",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "x = 5",
              "isCorrect": false
            }
          ],
          "explanation": "5(3) - 3 = 15 - 3 = 12 (Holds true).",
          "topicSubarea": "Verification of Solution"
        },
        {
          "id": "t-se-5",
          "question": "The perimeter of a square is 36 cm. If side is s, the equation and side length are:",
          "options": [
            {
              "id": "a",
              "text": "4s = 36 => s = 9 cm",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "s + 4 = 36 => s = 32 cm",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "s² = 36 => s = 6 cm",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "2s = 36 => s = 18 cm",
              "isCorrect": false
            }
          ],
          "explanation": "Perimeter of a square = 4 × side. 4s = 36 => s = 9 cm.",
          "topicSubarea": "Geometric Equation Modeling"
        }
      ]
    }
  },
  {
    "id": "lines-angles-7",
    "classId": "7",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 5",
    "title": "Lines and Angles",
    "hindiTitle": "रेखा एवं कोण",
    "description": "Complementary and supplementary angles, adjacent angles, linear pairs, vertically opposite angles, transversals, and angles formed by parallel lines.",
    "estimatedMinutes": 26,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-la-1",
        "eyebrow": "Concept 1: Angle Pairs",
        "title": "Complementary, Supplementary & Vertically Opposite Angles",
        "analogy": "Two bookends opening up from a flat table: if two angles together make a straight line, they are supplementary (180°), like a open flat laptop.",
        "content": "1. Complementary Angles: Two angles whose sum is 90° (e.g., 30° and 60°). Each is called the complement of the other.\n2. Supplementary Angles: Two angles whose sum is 180° (e.g., 110° and 70°). Each is called the supplement of the other.\n3. Adjacent Angles: Two angles that have a common vertex, a common arm, and their non-common arms are on different sides of the common arm.\n4. Linear Pair: A pair of adjacent angles whose non-common arms are opposite rays. The sum of angles in a linear pair is ALWAYS 180°.\n5. Vertically Opposite Angles: When two lines intersect at a point, the vertically opposite angles are ALWAYS equal!",
        "workedExample": {
          "problem": "Find the angle which is equal to its complement, and find vertically opposite angles when two lines intersect and one angle is 55°.",
          "steps": [
            {
              "step": "Step 1: Equal complement",
              "detail": "Let angle = x. x + x = 90° => 2x = 90° => x = 45°."
            },
            {
              "step": "Step 2: Vertically opposite",
              "detail": "If one angle is 55°, the angle vertically opposite to it is also 55°."
            },
            {
              "step": "Step 3: Find adjacent linear pair angle",
              "detail": "180° - 55° = 125°."
            }
          ]
        },
        "keyFormula": "Complementary: A + B = 90° | Supplementary: A + B = 180°",
        "commonTrap": "Complementary is 90°, Supplementary is 180°. Memory tip: \"C\" comes before \"S\", and 90 comes before 180."
      },
      {
        "id": "sec-la-2",
        "eyebrow": "Concept 2: Parallel Lines",
        "title": "Transversals & Parallel Line Angle Relationships",
        "analogy": "Railway tracks crossed by a pedestrian walking bridge: the bridge acts as a transversal crossing two parallel lines, creating identical patterns of angles at both tracks.",
        "content": "When a transversal intersects two parallel lines:\n1. Corresponding Angles are equal (F-shape angles).\n2. Alternate Interior Angles are equal (Z-shape angles, on opposite sides of transversal between parallel lines).\n3. Alternate Exterior Angles are equal.\n4. Interior Angles on the same side of the transversal (consecutive interior / allied angles) are SUPPLEMENTARY (their sum is 180°).",
        "workedExample": {
          "problem": "Line l is parallel to line m. A transversal cuts them. If an interior angle is 70°, find the consecutive interior angle on the same side.",
          "steps": [
            {
              "step": "Step 1: Recall allied angle rule",
              "detail": "Interior angles on the same side of transversal add up to 180°."
            },
            {
              "step": "Step 2: Calculate",
              "detail": "Angle = 180° - 70° = 110°."
            }
          ]
        },
        "keyFormula": "Parallel Lines: Alternate Interior = Equal | Same-side Interior Sum = 180°",
        "commonTrap": "Alternate interior angles are equal ONLY when the lines are parallel. If lines are not parallel, they are not equal."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-la-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Find the complement of an angle of 65°.",
        "options": [
          {
            "id": "a",
            "text": "25°",
            "isCorrect": true,
            "explanation": "Complementary sum is 90°. Complement = 90° - 65° = 25°."
          },
          {
            "id": "b",
            "text": "115°",
            "isCorrect": false,
            "explanation": "115° is the supplement (180° - 65°), not the complement."
          },
          {
            "id": "c",
            "text": "35°",
            "isCorrect": false,
            "explanation": "Arithmetic error."
          },
          {
            "id": "d",
            "text": "45°",
            "isCorrect": false,
            "explanation": "Arithmetic slip."
          }
        ],
        "hint": "Complementary angles add up to 90 degrees.",
        "conceptTag": "Complementary Angles"
      },
      {
        "id": "q-la-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Two angles forming a linear pair are in the ratio 2 : 3. Find the measure of the smaller angle.",
        "options": [
          {
            "id": "a",
            "text": "72°",
            "isCorrect": true,
            "explanation": "2x + 3x = 180° => 5x = 180° => x = 36°. Smaller angle = 2(36°) = 72°."
          },
          {
            "id": "b",
            "text": "108°",
            "isCorrect": false,
            "explanation": "108° is the larger angle."
          },
          {
            "id": "c",
            "text": "36°",
            "isCorrect": false,
            "explanation": "36° is the unit ratio, not the angle."
          },
          {
            "id": "d",
            "text": "60°",
            "isCorrect": false,
            "explanation": "Calculation error."
          }
        ],
        "hint": "Linear pair adds to 180°. Divide 180 by total parts (2+3=5).",
        "conceptTag": "Linear Pair Ratio"
      },
      {
        "id": "q-la-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "If two parallel lines are cut by a transversal, and one alternate interior angle is 85°, the other alternate interior angle is:",
        "options": [
          {
            "id": "a",
            "text": "85°",
            "isCorrect": true,
            "explanation": "Alternate interior angles formed by parallel lines and a transversal are equal."
          },
          {
            "id": "b",
            "text": "95°",
            "isCorrect": false,
            "explanation": "95° is the interior angle on the same side."
          },
          {
            "id": "c",
            "text": "180°",
            "isCorrect": false,
            "explanation": "Not equal to sum."
          },
          {
            "id": "d",
            "text": "42.5°",
            "isCorrect": false,
            "explanation": "Half angle is irrelevant."
          }
        ],
        "hint": "Alternate interior angles in parallel lines are equal.",
        "conceptTag": "Alternate Interior Angles"
      },
      {
        "id": "q-la-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "Two lines intersect at point O. If angle AOD = 130°, find the reflex angle of vertically opposite angle BOC.",
        "options": [
          {
            "id": "a",
            "text": "230°",
            "isCorrect": true,
            "explanation": "Angle BOC is vertically opposite to angle AOD, so BOC = 130°. Reflex angle = 360° - 130° = 230°."
          },
          {
            "id": "b",
            "text": "130°",
            "isCorrect": false,
            "explanation": "130° is the internal angle, not reflex."
          },
          {
            "id": "c",
            "text": "50°",
            "isCorrect": false,
            "explanation": "50° is the linear pair angle."
          },
          {
            "id": "d",
            "text": "310°",
            "isCorrect": false,
            "explanation": "Subtracted from 360° incorrectly."
          }
        ],
        "hint": "Reflex angle = 360° - interior angle.",
        "conceptTag": "Vertically Opposite and Reflex Angles"
      }
    ],
    "assessment": {
      "id": "test-la-7",
      "title": "Class 7 Chapter 5 Diagnostic: Lines and Angles",
      "questions": [
        {
          "id": "t-la-1",
          "question": "What is the angle which is equal to its supplement?",
          "options": [
            {
              "id": "a",
              "text": "90°",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "45°",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "180°",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "60°",
              "isCorrect": false
            }
          ],
          "explanation": "x + x = 180° => 2x = 180° => x = 90°.",
          "topicSubarea": "Supplementary Angle Relationships"
        },
        {
          "id": "t-la-2",
          "question": "Vertically opposite angles are always:",
          "options": [
            {
              "id": "a",
              "text": "Equal in measure",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Complementary",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Supplementary",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Obtuse",
              "isCorrect": false
            }
          ],
          "explanation": "When two straight lines cross, opposite vertical angles have identical measure.",
          "topicSubarea": "Vertically Opposite Theorem"
        },
        {
          "id": "t-la-3",
          "question": "If a transversal cuts two parallel lines, the sum of interior angles on the same side is:",
          "options": [
            {
              "id": "a",
              "text": "90°",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "180°",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "360°",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "270°",
              "isCorrect": false
            }
          ],
          "explanation": "Consecutive interior angles are supplementary (add up to 180°).",
          "topicSubarea": "Parallel Lines Allied Angles"
        },
        {
          "id": "t-la-4",
          "question": "An angle measures 38°. Its complement and supplement respectively are:",
          "options": [
            {
              "id": "a",
              "text": "52° and 142°",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "62° and 152°",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "42° and 132°",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "52° and 152°",
              "isCorrect": false
            }
          ],
          "explanation": "Complement = 90° - 38° = 52°. Supplement = 180° - 38° = 142°.",
          "topicSubarea": "Complement vs Supplement Calculations"
        },
        {
          "id": "t-la-5",
          "question": "Which of the following pairs of lines never meet, no matter how far extended?",
          "options": [
            {
              "id": "a",
              "text": "Parallel lines",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Intersecting lines",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Perpendicular lines",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Transversal lines",
              "isCorrect": false
            }
          ],
          "explanation": "Parallel lines remain equidistant throughout their length and never intersect.",
          "topicSubarea": "Geometric Definitions"
        }
      ]
    }
  }
],
  science: [
  {
    "id": "heat-7",
    "classId": "7",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 4",
    "title": "Heat and Temperature",
    "hindiTitle": "ऊष्मा एवं तापमान",
    "description": "Conduction, convection, radiation, clinical vs laboratory thermometers, and heat transfer mechanisms in everyday Indian life.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "heat-1",
        "eyebrow": "Modes of Heat Transfer",
        "title": "1. Conduction, Convection & Coastal Sea Breeze",
        "analogy": "Heating milk in a stainless steel saucepan with a Bakelite plastic handle (Conduction blocked by insulator), boiling water where hot water rises (Convection), and coastal sea breeze in Mumbai or Chennai.",
        "content": "Heat is a form of energy that always flows from a body at a higher temperature to a body at a lower temperature.\n\n**Three Primary Modes of Heat Transfer**:\n1. **Conduction** (चालन): The transfer of heat from hotter part to colder part through direct particle collisions without bulk movement of the medium (mostly in Solids). Good conductors: Iron, Copper, Aluminium. Insulators: Wood, Plastic, Bakelite.\n2. **Convection** (संवहन): Heat transfer by the physical movement of the fluid (liquids and gases) itself. Warm fluid expands, becomes lighter and rises; cooler dense fluid sinks. Causes Sea Breeze and Land Breeze in coastal areas!\n3. **Radiation** (विकिरण): Heat transfer that requires **no medium** at all (e.g. Sun's heat reaching Earth across the vacuum of space). Dark surfaces absorb more radiant heat than light-colored surfaces.",
        "workedExample": {
          "problem": "NCERT Question: Why do cooking pans have stainless steel or copper bottoms but wooden or Bakelite plastic handles?",
          "steps": [
            {
              "step": "Step 1: Pan bottom function",
              "detail": "Metals (copper and steel) are excellent conductors of heat, quickly distributing thermal energy to cook the food evenly."
            },
            {
              "step": "Step 2: Handle function",
              "detail": "Wood and Bakelite are thermal insulators (poor conductors). They remain cool to touch, allowing safe handling without burning hands."
            }
          ]
        },
        "keyFormula": "Heat flows spontaneously from Higher Temperature to Lower Temperature until Thermal Equilibrium is reached.",
        "commonTrap": "Thinking heat and temperature are identical: Heat is total thermal energy (Joules), while Temperature is the degree of hotness (Celsius or Kelvin)."
      },
      {
        "id": "heat-2",
        "eyebrow": "Measuring Temperature",
        "title": "2. Clinical vs Laboratory Thermometers",
        "analogy": "Visiting the family doctor when suffering from seasonal fever: The doctor places a clinical thermometer under your tongue to check whether your temperature exceeds 37°C (98.6°F).",
        "content": "Temperature is measured using a device called a **Thermometer**:\n- **Clinical Thermometer**: Specially designed to measure human body temperature. Range: **35°C to 42°C** (or 94°F to 108°F). It features a unique **kink (constriction)** in the capillary tube near the bulb that prevents the mercury level from falling on its own when removed from the mouth.\n- **Laboratory Thermometer**: Used in science labs to measure boiling water, chemical reactions, etc. Range: **-10°C to 110°C**. It has **no kink**, so the reading must be noted while the thermometer bulb is still immersed in the substance!\n- **Normal Human Body Temperature**: 37°C (or 98.6°F).",
        "workedExample": {
          "problem": "NCERT Exemplar: Why can a clinical thermometer not be used to measure the boiling point of milk or water?",
          "steps": [
            {
              "step": "Step 1: Compare temperature ranges",
              "detail": "Water boils at 100°C. The maximum range of a clinical thermometer is only 42°C."
            },
            {
              "step": "Step 2: Consequence of overheating",
              "detail": "Subjecting a clinical thermometer to 100°C will cause the mercury to expand beyond the tube limit, shattering the glass bulb!"
            }
          ]
        },
        "keyFormula": "Normal Body Temperature = 37°C. Formula: °F = (°C × 9/5) + 32.",
        "commonTrap": "Reading a laboratory thermometer after taking it out of hot water: The mercury immediately starts dropping because it lacks a kink!"
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-ht-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What is the temperature range of a standard NCERT clinical thermometer?",
        "options": [
          {
            "id": "a",
            "text": "35°C to 42°C",
            "isCorrect": true,
            "explanation": "Correct! Clinical thermometers are calibrated strictly for human body temperature between 35°C and 42°C."
          },
          {
            "id": "b",
            "text": "-10°C to 110°C",
            "isCorrect": false,
            "explanation": "Incorrect: -10°C to 110°C is the range of a laboratory thermometer."
          },
          {
            "id": "c",
            "text": "0°C to 100°C",
            "isCorrect": false,
            "explanation": "Incorrect: 0°C to 100°C is standard metric freezing-to-boiling scale."
          },
          {
            "id": "d",
            "text": "20°C to 50°C",
            "isCorrect": false,
            "explanation": "Incorrect: The clinical range is specifically 35°C to 42°C."
          }
        ],
        "hint": "Think of the narrow range around normal human body temperature (37°C).",
        "conceptTag": "thermometer-range"
      },
      {
        "id": "p-ht-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "In coastal areas like Goa or Chennai, a cool breeze blows from the sea towards the land during daytime. This is called:",
        "options": [
          {
            "id": "a",
            "text": "Sea Breeze (caused by convection currents)",
            "isCorrect": true,
            "explanation": "Correct! Land heats up faster than water during the day. Warm air over land rises, and cooler dense air from the sea rushes in as a Sea Breeze."
          },
          {
            "id": "b",
            "text": "Land Breeze",
            "isCorrect": false,
            "explanation": "Incorrect: Land breeze occurs at night when land cools faster than the sea."
          },
          {
            "id": "c",
            "text": "Radiant Heat Wave",
            "isCorrect": false,
            "explanation": "Incorrect: Radiation does not involve circulating air currents."
          },
          {
            "id": "d",
            "text": "Conductive Thermal Transfer",
            "isCorrect": false,
            "explanation": "Incorrect: Conduction requires solid particle contact, not bulk air motion."
          }
        ],
        "hint": "Daytime air moves from the cooler sea to the warm land.",
        "conceptTag": "convection-sea-breeze"
      },
      {
        "id": "q-heat-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Sea breeze during the day and land breeze at night along coastal regions are driven by which mode of heat transfer?",
        "options": [
          {
            "id": "a",
            "text": "Convection currents in air",
            "isCorrect": true,
            "explanation": "Correct! Unequal heating of land and sea creates warm air rising and cooler air rushing in, forming convection currents."
          },
          {
            "id": "b",
            "text": "Conduction through rocks",
            "isCorrect": false,
            "explanation": "Air is a poor conductor of heat."
          },
          {
            "id": "c",
            "text": "Direct thermal radiation only",
            "isCorrect": false,
            "explanation": "Breeze involves mass movement of air (convection)."
          },
          {
            "id": "d",
            "text": "Evaporation only",
            "isCorrect": false,
            "explanation": "It is driven by convection currents."
          }
        ],
        "hint": "Warm air expands and rises, cool air rushes in to take its place.",
        "conceptTag": "Convection in Coastal Breezes"
      },
      {
        "id": "q-heat-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "Stainless steel cooking pans are frequently provided with a copper bottom. What is the scientific reason for this?",
        "options": [
          {
            "id": "a",
            "text": "Copper is a much better conductor of heat than stainless steel",
            "isCorrect": true,
            "explanation": "Correct! Copper distributes heat quickly and evenly across the base of the pan, cooking food faster and preventing hotspots."
          },
          {
            "id": "b",
            "text": "Copper makes the pan more durable",
            "isCorrect": false,
            "explanation": "Steel is more durable than copper."
          },
          {
            "id": "c",
            "text": "Copper prevents all chemical reactions with food",
            "isCorrect": false,
            "explanation": "The inside is stainless steel."
          },
          {
            "id": "d",
            "text": "Copper is cheaper than steel",
            "isCorrect": false,
            "explanation": "Copper is more expensive than steel."
          }
        ],
        "hint": "Think about thermal conductivity of metals.",
        "conceptTag": "Thermal Conductivity of Copper"
      }
    ],
    "assessment": {
      "id": "test-ht-7",
      "title": "Class 7 Chapter 4 NCERT Diagnostic Assessment: Heat",
      "questions": [
        {
          "id": "t-ht-1",
          "question": "The transfer of heat from the Sun to the Earth occurs via:",
          "options": [
            {
              "id": "a",
              "text": "Radiation",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Conduction",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Convection",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Advection",
              "isCorrect": false
            }
          ],
          "explanation": "Space is a vacuum. Only radiation can propagate heat through empty vacuum without any physical medium.",
          "topicSubarea": "Modes of Heat Transfer"
        },
        {
          "id": "t-ht-2",
          "question": "Why does a clinical thermometer have a small kink (constriction) in its stem?",
          "options": [
            {
              "id": "a",
              "text": "To prevent mercury from falling back before the temperature is read",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "To make the thermometer look stylish",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "To increase the speed of mercury expansion",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "To allow measuring boiling water",
              "isCorrect": false
            }
          ],
          "explanation": "The constriction holds the mercury thread in place so the doctor can read it accurately after removing it from the patient.",
          "topicSubarea": "Clinical Thermometer"
        },
        {
          "id": "t-ht-3",
          "question": "Which of the following is an insulator of heat?",
          "options": [
            {
              "id": "a",
              "text": "Wood",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Copper",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Aluminium",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Iron",
              "isCorrect": false
            }
          ],
          "explanation": "Wood does not allow heat to pass through easily, making it a poor conductor (insulator).",
          "topicSubarea": "Conductors and Insulators"
        },
        {
          "id": "t-ht-4",
          "question": "Dark colored clothes are preferred in winter because they:",
          "options": [
            {
              "id": "a",
              "text": "Absorb more heat from sunlight",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Reflect most of the sunlight",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Are lighter in weight",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Block air circulation completely",
              "isCorrect": false
            }
          ],
          "explanation": "Dark surfaces are superior absorbers of thermal radiation, keeping the body warm.",
          "topicSubarea": "Radiation Absorption"
        },
        {
          "id": "t-ht-5",
          "question": "A stainless steel spoon is dipped in a cup of hot kheer. Its other end becomes hot through:",
          "options": [
            {
              "id": "a",
              "text": "Conduction",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Convection",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Radiation",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Evaporation",
              "isCorrect": false
            }
          ],
          "explanation": "Heat transfers through the metallic spoon from particle to particle by conduction.",
          "topicSubarea": "Conduction in Solids"
        }
      ]
    }
  },
  {
    "id": "motion-time-7",
    "classId": "7",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 9",
    "title": "Motion and Time",
    "hindiTitle": "गति एवं समय",
    "description": "Concept of speed, distance-time graphs, simple pendulum, periodic motion, and units of time in Indian contexts.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "mt-1",
        "eyebrow": "Speed & Motion",
        "title": "1. Speed and the Indian Railways Journey",
        "analogy": "The Vande Bharat Express travels 400 km between New Delhi and Kanpur in exactly 4 hours. What is its average speed?",
        "content": "The distance covered by an object in a unit time is defined as the **Speed** of the object:\n**Speed = Total Distance Covered / Total Time Taken**\n\n- **SI Unit of Speed**: Metres per second (m/s). In everyday transportation, it is commonly expressed in kilometres per hour (km/h).\n- **Uniform Motion**: An object moving along a straight line with a constant speed.\n- **Non-Uniform Motion**: If the speed of an object moving along a straight line keeps changing (e.g. an auto-rickshaw navigating Indian city traffic).",
        "workedExample": {
          "problem": "NCERT Calculation: Vande Bharat Express covers 400 km in 4 hours. Calculate its speed in (a) km/h and (b) m/s.",
          "steps": [
            {
              "step": "Step 1: Formula for speed",
              "detail": "Speed = Distance / Time = 400 km / 4 h = 100 km/h."
            },
            {
              "step": "Step 2: Convert km/h to m/s",
              "detail": "Multiply by 5/18 (since 1000 m / 3600 s = 5/18): 100 × (5/18) = 500 / 18 ≈ 27.78 m/s."
            }
          ]
        },
        "keyFormula": "Speed = Distance / Time. Distance = Speed × Time. Time = Distance / Speed.",
        "commonTrap": "Forgetting to match units: If distance is in km, time must be in hours; if distance is in metres, time must be in seconds."
      },
      {
        "id": "sec-mt-2",
        "eyebrow": "Concept 2: Distance-Time Graphs",
        "title": "Distance-Time Graphs & Speed Calculation",
        "analogy": "Slope of a slide: A steeper playground slide means a faster ride. On a distance-time graph, the steeper the slope of the line, the greater the speed of the moving object.",
        "content": "1. Distance-Time Graph Basics:\n - Time is plotted along the horizontal X-axis, distance along the vertical Y-axis.\n - Uniform Speed: The distance-time graph of an object moving with constant speed is a straight line sloping upwards.\n - Non-Uniform Speed: The graph is a curved line.\n - Stationary Object (At Rest): The graph is a horizontal straight line parallel to the time axis (distance remains constant as time passes).\n2. Calculating Speed from Graph:\n - Speed = (Distance travelled) / (Time taken) = (y₂ - y₁) / (x₂ - x₁) = Slope of the line.\n3. Units Conversion:\n - 1 km/h = 1000 m / 3600 s = 5/18 m/s.\n - To convert km/h to m/s, multiply by 5/18; to convert m/s to km/h, multiply by 18/5.",
        "workedExample": {
          "problem": "A bus moves with a speed of 54 km/h. Express this speed in metres per second (m/s).",
          "steps": [
            {
              "step": "Step 1: Conversion factor",
              "detail": "Multiply km/h by 5/18 to get m/s."
            },
            {
              "step": "Step 2: Perform multiplication",
              "detail": "Speed = 54 × (5 / 18) = 3 × 5 = 15 m/s."
            }
          ]
        },
        "keyFormula": "Speed = Slope of Distance-Time Graph  |  1 km/h = 5/18 m/s",
        "commonTrap": "A horizontal line on a distance-time graph does NOT mean uniform speed; it means the object is stationary (speed = 0)!"
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-mt-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Exercise: A school bus covers a distance of 18 kilometres in 30 minutes. What is the speed of the bus in km/h?",
        "options": [
          {
            "id": "a",
            "text": "36 km/h",
            "isCorrect": true,
            "explanation": "Correct! 30 minutes = 0.5 hours. Speed = 18 km / 0.5 h = 36 km/h."
          },
          {
            "id": "b",
            "text": "18 km/h",
            "isCorrect": false,
            "explanation": "Incorrect: 18 km in 30 mins means it would travel 36 km in a full 60 mins."
          },
          {
            "id": "c",
            "text": "9 km/h",
            "isCorrect": false,
            "explanation": "Incorrect: Check division by 0.5 h."
          },
          {
            "id": "d",
            "text": "54 km/h",
            "isCorrect": false,
            "explanation": "Incorrect: Calculate Distance / Time."
          }
        ],
        "hint": "Convert 30 minutes to hours (30/60 = 0.5 hours) first.",
        "conceptTag": "speed-calculation"
      },
      {
        "id": "q-mt-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "A car covers a distance of 180 km in 3 hours. What is its speed in metres per second (m/s)?",
        "options": [
          {
            "id": "a",
            "text": "16.67 m/s",
            "isCorrect": true,
            "explanation": "Correct! Speed = 180 km / 3 h = 60 km/h. In m/s: 60 × (5/18) = 300 / 18 = 16.67 m/s."
          },
          {
            "id": "b",
            "text": "60 m/s",
            "isCorrect": false,
            "explanation": "60 is speed in km/h, not m/s."
          },
          {
            "id": "c",
            "text": "20 m/s",
            "isCorrect": false,
            "explanation": "60 × 5/18 = 16.67."
          },
          {
            "id": "d",
            "text": "25 m/s",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "First find speed in km/h, then multiply by 5/18.",
        "conceptTag": "Speed Units Conversion"
      },
      {
        "id": "q-mt-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "What does a horizontal straight line parallel to the time axis on a distance-time graph indicate?",
        "options": [
          {
            "id": "a",
            "text": "The body is stationary (at rest)",
            "isCorrect": true,
            "explanation": "Correct! Distance does not change as time increases; speed = 0."
          },
          {
            "id": "b",
            "text": "The body is moving with uniform acceleration",
            "isCorrect": false,
            "explanation": "Acceleration graph is curved on distance-time."
          },
          {
            "id": "c",
            "text": "The body is moving with maximum speed",
            "isCorrect": false,
            "explanation": "Speed is zero."
          },
          {
            "id": "d",
            "text": "The body is in circular motion",
            "isCorrect": false,
            "explanation": "Body is at rest."
          }
        ],
        "hint": "If distance is not increasing as time ticks forward, is the object moving?",
        "conceptTag": "Distance-Time Graph Interpretation"
      },
      {
        "id": "q-mt-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "The odometer of a car reads 57321.0 km at 08:30 AM. At 08:50 AM, the odometer reads 57336.0 km. What is the speed of the car in km/h?",
        "options": [
          {
            "id": "a",
            "text": "45 km/h",
            "isCorrect": true,
            "explanation": "Correct! Distance = 57336 - 57321 = 15 km. Time = 20 min = 20/60 = 1/3 hour. Speed = 15 / (1/3) = 45 km/h."
          },
          {
            "id": "b",
            "text": "60 km/h",
            "isCorrect": false,
            "explanation": "15 km in 20 min is 45 km/h."
          },
          {
            "id": "c",
            "text": "30 km/h",
            "isCorrect": false,
            "explanation": "Check calculation: 15 / (1/3) = 45."
          },
          {
            "id": "d",
            "text": "75 km/h",
            "isCorrect": false,
            "explanation": "Incorrect."
          }
        ],
        "hint": "Distance = 15 km, Time = 20 minutes = 1/3 hour.",
        "conceptTag": "Odometer Calculations"
      }
    ],
    "assessment": {
      "id": "test-mt-7",
      "title": "Class 7 Chapter 9 NCERT Diagnostic Assessment: Motion & Time",
      "questions": [
        {
          "id": "t-mt-1",
          "question": "The basic SI unit of speed is:",
          "options": [
            {
              "id": "a",
              "text": "m/s (metre/second)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "km/h",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "m/min",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "km/s",
              "isCorrect": false
            }
          ],
          "explanation": "The International System of Units (SI) standard for distance is metre and for time is second, so speed is m/s.",
          "topicSubarea": "SI Units"
        },
        {
          "id": "t-mt-2",
          "question": "The meter installed in a car or motorcycle that records total distance travelled is called an:",
          "options": [
            {
              "id": "a",
              "text": "Odometer",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Speedometer",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Anemometer",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Chronometer",
              "isCorrect": false
            }
          ],
          "explanation": "An odometer records distance travelled in kilometres, while a speedometer indicates instantaneous speed.",
          "topicSubarea": "Measurement Devices"
        },
        {
          "id": "t-mt-3",
          "question": "A simple pendulum takes 32 seconds to complete 20 oscillations. What is its time period?",
          "options": [
            {
              "id": "a",
              "text": "1.6 seconds",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "0.625 seconds",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "3.2 seconds",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "2.0 seconds",
              "isCorrect": false
            }
          ],
          "explanation": "Time period = Total time taken / Number of oscillations = 32 s / 20 = 1.6 s.",
          "topicSubarea": "Simple Pendulum"
        },
        {
          "id": "t-mt-4",
          "question": "The distance-time graph for a vehicle moving with constant speed is a:",
          "options": [
            {
              "id": "a",
              "text": "Straight line inclined to the time axis",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Curved parabolic line",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Horizontal line parallel to time axis",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Vertical line parallel to distance axis",
              "isCorrect": false
            }
          ],
          "explanation": "Equal distance in equal intervals of time produces a linear straight line graph with constant slope.",
          "topicSubarea": "Distance-Time Graphs"
        },
        {
          "id": "t-mt-5",
          "question": "Which historical astronomical observatory in India features stone sundials designed to measure time from shadows?",
          "options": [
            {
              "id": "a",
              "text": "Jantar Mantar (Jaipur / New Delhi)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Qutub Minar",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Red Fort",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Gol Gumbaz",
              "isCorrect": false
            }
          ],
          "explanation": "Maharaja Jai Singh II built the iconic Jantar Mantar observatories with massive precision stone sundials.",
          "topicSubarea": "Historical Timekeeping"
        }
      ]
    }
  },
  {
    "id": "nutrition-plants-7",
    "classId": "7",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 1",
    "title": "Nutrition in Plants",
    "hindiTitle": "पादपों में पोषण",
    "description": "Autotrophic nutrition, photosynthesis mechanism, chloroplasts, stomata, heterotrophic nutrition (parasites, insectivorous plants, saprotrophs, symbiotic relationships), and soil nutrient replenishment.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-np-1",
        "eyebrow": "Concept 1: Photosynthesis",
        "title": "Autotrophic Nutrition & The Mechanism of Photosynthesis",
        "analogy": "Leaves are the \"kitchens of the plant\". Just as a kitchen requires gas, water, and raw vegetables, a leaf requires sunlight (energy), water from roots, and carbon dioxide from air to prepare starch.",
        "content": "1. Autotrophic Nutrition: Mode of nutrition in which organisms make food themselves from simple substances (Green plants are autotrophs).\n2. Photosynthesis Equation:\n Carbon dioxide + Water --[Sunlight / Chlorophyll]--> Carbohydrate (Glucose) + Oxygen\n 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂\n3. Key Components:\n - Chlorophyll: Green pigment in leaves that captures solar energy.\n - Stomata: Tiny pores on leaf surface guarded by guard cells; take in CO₂ and release O₂.\n - Vessels: Tube-like xylem vessels transporting water and minerals from roots to leaves.\n4. Starch is stored carbohydrate; presence of starch in leaves confirms photosynthesis (tested with iodine solution).",
        "workedExample": {
          "problem": "Why do variegated leaves (leaves with patches of green and white) turn blue-black only in green patches when tested with iodine?",
          "steps": [
            {
              "step": "Step 1: Understand the iodine test",
              "detail": "Iodine reacts with starch to produce a blue-black complex."
            },
            {
              "step": "Step 2: Connect starch to chlorophyll",
              "detail": "Only green patches contain chlorophyll capable of photosynthesis to synthesize starch."
            },
            {
              "step": "Step 3: Conclusion",
              "detail": "White patches lack chlorophyll, so no starch was formed; hence only green patches turn blue-black."
            }
          ]
        },
        "keyFormula": "CO₂ + H₂O + Solar Energy --[Chlorophyll]--> Glucose + O₂",
        "commonTrap": "Sunlight is not a chemical reactant; it is the energy source driving the chemical transformation."
      },
      {
        "id": "sec-np-2",
        "eyebrow": "Concept 2: Heterotrophic Modes",
        "title": "Parasites, Insectivorous Plants, Saprotrophs & Symbiosis",
        "analogy": "A paying guest sharing rent: in lichens, fungus provides shelter, water, and minerals, while green alga prepares food by photosynthesis. Both help each other survive (Symbiosis).",
        "content": "Plants without chlorophyll adapt alternate nutritional strategies:\n1. Parasitic Plants: Cuscuta (Amarbel) is a yellow tubular vine lacking chlorophyll. It climbs trees and derives ready-made food using suckers (haustoria).\n2. Insectivorous Plants: Pitcher plant and Venus flytrap grow in nitrogen-deficient soils. Leaves are modified into pitchers to trap insects and digest them with enzymes to obtain nitrogen.\n3. Saprotrophs: Fungi (mushrooms, bread mould) secrete digestive juices on dead and decaying matter and absorb nutrients in solution form.\n4. Symbiosis: Organisms living together sharing shelter and nutrients (e.g., Lichen = alga + fungus; Rhizobium bacteria in leguminous root nodules fixing atmospheric nitrogen).",
        "workedExample": {
          "problem": "Why do farmers not need to add nitrogenous fertilizer when growing pulses (gram, peas, moong)?",
          "steps": [
            {
              "step": "Step 1: Identify plant family",
              "detail": "Pulses are leguminous plants."
            },
            {
              "step": "Step 2: Identify root symbiont",
              "detail": "Root nodules harbor Rhizobium bacteria that fix atmospheric nitrogen gas into soluble nitrates."
            },
            {
              "step": "Step 3: Result",
              "detail": "The soil is naturally enriched with nitrogen, reducing fertilizer need."
            }
          ]
        },
        "keyFormula": "Symbiosis: Mutual benefit (Nutrients + Shelter)",
        "commonTrap": "Pitcher plants are green and perform photosynthesis; they trap insects specifically to obtain nitrogen, not carbon energy."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-np-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which gas is released by green plants during the process of photosynthesis?",
        "options": [
          {
            "id": "a",
            "text": "Carbon dioxide",
            "isCorrect": false,
            "explanation": "Carbon dioxide is absorbed, not released."
          },
          {
            "id": "b",
            "text": "Oxygen",
            "isCorrect": true,
            "explanation": "Photosynthesis splits water molecules to release oxygen (O₂) into the atmosphere."
          },
          {
            "id": "c",
            "text": "Nitrogen",
            "isCorrect": false,
            "explanation": "Nitrogen is not produced in photosynthesis."
          },
          {
            "id": "d",
            "text": "Hydrogen",
            "isCorrect": false,
            "explanation": "Hydrogen is incorporated into carbohydrates."
          }
        ],
        "hint": "This gas is essential for human and animal respiration.",
        "conceptTag": "Photosynthesis Products"
      },
      {
        "id": "q-np-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Cuscuta (Amarbel) is an example of a:",
        "options": [
          {
            "id": "a",
            "text": "Parasite",
            "isCorrect": true,
            "explanation": "Cuscuta lacks chlorophyll and derives ready-made food from its host tree."
          },
          {
            "id": "b",
            "text": "Autotroph",
            "isCorrect": false,
            "explanation": "It cannot synthesize its own food."
          },
          {
            "id": "c",
            "text": "Saprotroph",
            "isCorrect": false,
            "explanation": "It feeds on living host trees, not dead matter."
          },
          {
            "id": "d",
            "text": "Host",
            "isCorrect": false,
            "explanation": "The tree on which it climbs is the host."
          }
        ],
        "hint": "It lives on another living organism and deprives it of valuable nutrients.",
        "conceptTag": "Parasitic Nutrition"
      },
      {
        "id": "q-np-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "Why does a pitcher plant trap and digest insects even though its leaves are green and perform photosynthesis?",
        "options": [
          {
            "id": "a",
            "text": "Because it grows in soil that is deficient in nitrogen",
            "isCorrect": true,
            "explanation": "It photosynthesizes for carbohydrates, but requires insects to meet nitrogen requirements in boggy soils."
          },
          {
            "id": "b",
            "text": "Because it cannot absorb water from roots",
            "isCorrect": false,
            "explanation": "Roots absorb water normally."
          },
          {
            "id": "c",
            "text": "Because it has no chlorophyll",
            "isCorrect": false,
            "explanation": "Its leaves are green and contain chlorophyll."
          },
          {
            "id": "d",
            "text": "Because insects provide sunlight",
            "isCorrect": false,
            "explanation": "Nonsensical premise."
          }
        ],
        "hint": "Think about what essential mineral is missing in marshy soils.",
        "conceptTag": "Insectivorous Plants"
      },
      {
        "id": "q-np-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "In a lichen, what is the symbiotic exchange between the alga and the fungus?",
        "options": [
          {
            "id": "a",
            "text": "Alga provides food via photosynthesis; fungus provides shelter, water, and minerals",
            "isCorrect": true,
            "explanation": "The autotrophic alga prepares food; the heterotrophic fungus provides physical protection, anchorage, and water."
          },
          {
            "id": "b",
            "text": "Fungus prepares food; alga absorbs water",
            "isCorrect": false,
            "explanation": "Fungi cannot perform photosynthesis."
          },
          {
            "id": "c",
            "text": "Both prepare food independently",
            "isCorrect": false,
            "explanation": "Fungi lack chlorophyll."
          },
          {
            "id": "d",
            "text": "Fungus is a parasite on the alga",
            "isCorrect": false,
            "explanation": "The relationship is mutually beneficial, not parasitic."
          }
        ],
        "hint": "One partner is green and photosynthetic, while the other is a fungal mycelium.",
        "conceptTag": "Symbiosis in Lichens"
      }
    ],
    "assessment": {
      "id": "test-np-7",
      "title": "Class 7 Chapter 1 Diagnostic: Nutrition in Plants",
      "questions": [
        {
          "id": "t-np-1",
          "question": "Tiny pores on the surface of leaves through which gas exchange occurs are called:",
          "options": [
            {
              "id": "a",
              "text": "Stomata",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Chloroplasts",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Xylem",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Haustoria",
              "isCorrect": false
            }
          ],
          "explanation": "Stomata are pores bordered by guard cells that regulate intake of CO₂ and loss of water vapor.",
          "topicSubarea": "Stomatal Function"
        },
        {
          "id": "t-np-2",
          "question": "The presence of which substance in leaves indicates the occurrence of photosynthesis?",
          "options": [
            {
              "id": "a",
              "text": "Starch",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Protein",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Fats",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Iodine",
              "isCorrect": false
            }
          ],
          "explanation": "Glucose produced during photosynthesis is immediately converted and stored as starch.",
          "topicSubarea": "Starch Iodine Test"
        },
        {
          "id": "t-np-3",
          "question": "Fungi like bread mould obtain nutrients by which mode of nutrition?",
          "options": [
            {
              "id": "a",
              "text": "Saprotrophic",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Autotrophic",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Parasitic",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Holozoic",
              "isCorrect": false
            }
          ],
          "explanation": "Saprotrophs secrete digestive juices onto dead organic matter and absorb dissolved nutrients.",
          "topicSubarea": "Saprotrophic Nutrition"
        },
        {
          "id": "t-np-4",
          "question": "Which bacterium lives in the root nodules of leguminous plants to fix atmospheric nitrogen?",
          "options": [
            {
              "id": "a",
              "text": "Rhizobium",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Lactobacillus",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "E. coli",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Yeast",
              "isCorrect": false
            }
          ],
          "explanation": "Rhizobium converts gaseous nitrogen into water-soluble nitrates in exchange for plant food.",
          "topicSubarea": "Nitrogen Fixation Symbiosis"
        },
        {
          "id": "t-np-5",
          "question": "The solar energy trapped by leaves during photosynthesis is stored as:",
          "options": [
            {
              "id": "a",
              "text": "Chemical energy in carbohydrates",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Thermal energy in roots",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Nuclear energy in cells",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Electrical energy in stems",
              "isCorrect": false
            }
          ],
          "explanation": "Solar radiant energy is transformed into chemical bond energy stored in glucose/starch molecules.",
          "topicSubarea": "Energy Transformation"
        }
      ]
    }
  },
  {
    "id": "acids-bases-salts-7",
    "classId": "7",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 4",
    "title": "Acids, Bases and Salts",
    "hindiTitle": "अम्ल, क्षारक और लवण",
    "description": "Characteristics of acids and bases, natural indicators (litmus, turmeric, China rose), neutralization reactions, and practical applications in treating ant stings, indigestion, and factory waste.",
    "estimatedMinutes": 24,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-abs-1",
        "eyebrow": "Concept 1: Identification & Indicators",
        "title": "Acids, Bases and Natural Indicators",
        "analogy": "Lemon juice tastes sour because it contains citric acid; baking soda tastes bitter and feels slippery/soapy because it is a base.",
        "content": "1. Acids: Taste sour, corrosive to metals. Contain hydrogen ions. (e.g., Acetic acid in vinegar, Citric acid in lemons, Lactic acid in curd, Tartaric acid in tamarind).\n2. Bases: Taste bitter, feel soapy/slippery to touch (e.g., Sodium hydroxide in soap, Calcium hydroxide in lime water, Magnesium hydroxide in milk of magnesia).\n3. Indicators: Special substances that change color in acidic or basic solutions.\n - Litmus (extracted from lichens): Turns RED in acidic solution, BLUE in basic solution, and PURPLE in neutral water.\n - Turmeric: Stays yellow in acid/neutral, turns REDDISH-BROWN in base (soap on curry stain turns red!).\n - China Rose (Gudhal): Turns dark pink (magenta) in acid, GREEN in base.",
        "workedExample": {
          "problem": "A yellow curry stain on a white shirt turns reddish-brown when washed with laundry soap, then yellow again after rinsing with lemon juice. Explain.",
          "steps": [
            {
              "step": "Step 1: Identify the indicator",
              "detail": "Curry contains turmeric, a natural indicator."
            },
            {
              "step": "Step 2: Explain soap reaction",
              "detail": "Laundry soap is basic; turmeric turns reddish-brown in basic medium."
            },
            {
              "step": "Step 3: Explain lemon juice rinsing",
              "detail": "Lemon juice contains citric acid that neutralizes the base, restoring turmeric's original yellow color."
            }
          ]
        },
        "keyFormula": "Litmus: Acid = Red | Base = Blue",
        "commonTrap": "Distilled water is neutral. It does not change the color of either red or blue litmus paper."
      },
      {
        "id": "sec-abs-2",
        "eyebrow": "Concept 2: Neutralization",
        "title": "Neutralization Reactions & Everyday Applications",
        "analogy": "Applying Calamine lotion on an ant bite: ant venom is acidic (formic acid), while Calamine contains zinc carbonate (base). The base neutralizes the acid, giving instant pain relief.",
        "content": "1. Neutralization Reaction: Reaction between an acid and a base to produce salt and water with the evolution of heat:\n Acid + Base -> Salt + Water + Heat\n Example: HCl + NaOH -> NaCl + H₂O + Heat\n2. Real-World Applications:\n - Indigestion: Stomach produces excess HCl; taking antacid tablets (Milk of Magnesia containing Magnesium hydroxide) neutralizes acid.\n - Ant Bite: Injects formic acid; applying moist baking soda (sodium hydrogen carbonate) or calamine solution (zinc carbonate) neutralizes it.\n - Soil Treatment: Acidic soil is treated with quicklime (calcium oxide) or slaked lime; basic soil is treated with organic matter which releases acids.\n - Factory Wastes: Acidic industrial effluents are neutralized with basic substances before discharging into water bodies to protect aquatic life.",
        "workedExample": {
          "problem": "Write the word equation for hydrochloric acid reacting with sodium hydroxide.",
          "steps": [
            {
              "step": "Step 1: Identify reactants",
              "detail": "Hydrochloric acid (Acid) + Sodium hydroxide (Base)"
            },
            {
              "step": "Step 2: Identify products",
              "detail": "Sodium chloride (Salt) + Water"
            },
            {
              "step": "Step 3: Note energy change",
              "detail": "Heat is evolved, warming the container."
            }
          ]
        },
        "keyFormula": "Acid + Base -> Salt + Water + Heat",
        "commonTrap": "A salt is not always neutral! Salts can be acidic, basic, or neutral depending on parent acids and bases."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-abs-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Blue litmus paper turns red when dipped into which of the following solutions?",
        "options": [
          {
            "id": "a",
            "text": "Soap solution",
            "isCorrect": false,
            "explanation": "Soap is basic; it turns red litmus blue."
          },
          {
            "id": "b",
            "text": "Lemon juice",
            "isCorrect": true,
            "explanation": "Lemon juice is acidic (citric acid); acids turn blue litmus red."
          },
          {
            "id": "c",
            "text": "Lime water",
            "isCorrect": false,
            "explanation": "Lime water is basic (calcium hydroxide)."
          },
          {
            "id": "d",
            "text": "Common salt solution",
            "isCorrect": false,
            "explanation": "Salt solution is neutral; no color change."
          }
        ],
        "hint": "Acids turn blue litmus red.",
        "conceptTag": "Litmus Test"
      },
      {
        "id": "q-abs-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "When an ant bites, it injects which acid into the skin, causing burning irritation?",
        "options": [
          {
            "id": "a",
            "text": "Acetic acid",
            "isCorrect": false,
            "explanation": "Acetic acid is found in vinegar."
          },
          {
            "id": "b",
            "text": "Formic acid (methanoic acid)",
            "isCorrect": true,
            "explanation": "Ant stings inject formic acid into subcutaneous tissue."
          },
          {
            "id": "c",
            "text": "Lactic acid",
            "isCorrect": false,
            "explanation": "Lactic acid is in curd/milk."
          },
          {
            "id": "d",
            "text": "Ascorbic acid",
            "isCorrect": false,
            "explanation": "Ascorbic acid is Vitamin C."
          }
        ],
        "hint": "This acid can be neutralized by moist baking soda.",
        "conceptTag": "Natural Acids"
      },
      {
        "id": "q-abs-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "In a neutralization reaction between an acid and a base, what are the products formed?",
        "options": [
          {
            "id": "a",
            "text": "Salt and Water, with release of heat",
            "isCorrect": true,
            "explanation": "Acid + Base -> Salt + Water + Heat."
          },
          {
            "id": "b",
            "text": "Another acid and hydrogen gas",
            "isCorrect": false,
            "explanation": "Produced when acids react with metals."
          },
          {
            "id": "c",
            "text": "Oxygen and carbon dioxide",
            "isCorrect": false,
            "explanation": "Incorrect products."
          },
          {
            "id": "d",
            "text": "Pure metal and water",
            "isCorrect": false,
            "explanation": "Nonsensical chemical equation."
          }
        ],
        "hint": "Recall the classic reaction of HCl with NaOH.",
        "conceptTag": "Neutralization Products"
      },
      {
        "id": "q-abs-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "If soil in a farmland becomes excessively acidic due to excessive chemical fertilizers, what should the farmer add to restore soil fertility?",
        "options": [
          {
            "id": "a",
            "text": "Quicklime (Calcium oxide) or Slaked lime",
            "isCorrect": true,
            "explanation": "Quicklime and slaked lime are bases that neutralize excess soil acidity."
          },
          {
            "id": "b",
            "text": "Hydrochloric acid",
            "isCorrect": false,
            "explanation": "Would make soil dangerously more acidic."
          },
          {
            "id": "c",
            "text": "Vinegar",
            "isCorrect": false,
            "explanation": "Vinegar is acidic."
          },
          {
            "id": "d",
            "text": "Common salt",
            "isCorrect": false,
            "explanation": "Salt does not neutralize acids and would salinize soil."
          }
        ],
        "hint": "To neutralize acid, you must add an appropriate base.",
        "conceptTag": "Agricultural Neutralization"
      }
    ],
    "assessment": {
      "id": "test-abs-7",
      "title": "Class 7 Chapter 4 Diagnostic: Acids, Bases and Salts",
      "questions": [
        {
          "id": "t-abs-1",
          "question": "China rose indicator turns a basic solution to which color?",
          "options": [
            {
              "id": "a",
              "text": "Green",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Dark pink (magenta)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Red",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Colorless",
              "isCorrect": false
            }
          ],
          "explanation": "China rose turns acidic solutions magenta and basic solutions green.",
          "topicSubarea": "China Rose Indicator"
        },
        {
          "id": "t-abs-2",
          "question": "Which base is commonly used in antacid syrups (Milk of Magnesia) to treat acidity?",
          "options": [
            {
              "id": "a",
              "text": "Magnesium hydroxide",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Sodium chloride",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Hydrochloric acid",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Copper sulphate",
              "isCorrect": false
            }
          ],
          "explanation": "Milk of Magnesia contains mild magnesium hydroxide to neutralize stomach acid safely.",
          "topicSubarea": "Antacids Chemistry"
        },
        {
          "id": "t-abs-3",
          "question": "Turmeric paper turns reddish-brown when touched with:",
          "options": [
            {
              "id": "a",
              "text": "Soap water",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Lemon juice",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Vinegar",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Pure water",
              "isCorrect": false
            }
          ],
          "explanation": "Turmeric changes color from yellow to reddish-brown in basic solutions like soap.",
          "topicSubarea": "Turmeric Indicator"
        },
        {
          "id": "t-abs-4",
          "question": "What is the characteristic taste of acids and bases respectively?",
          "options": [
            {
              "id": "a",
              "text": "Sour and Bitter",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Bitter and Sour",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Sweet and Salty",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Salty and Sweet",
              "isCorrect": false
            }
          ],
          "explanation": "Acids taste sour (Latin: acidus); bases taste bitter and feel soapy.",
          "topicSubarea": "Taste Properties"
        },
        {
          "id": "t-abs-5",
          "question": "Why are factory wastes treated with basic substances before being discharged into rivers?",
          "options": [
            {
              "id": "a",
              "text": "Because untreated factory wastes are often acidic and would kill fish and aquatic life",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "To make the water salty for drinking",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "To dye the river blue",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "To generate electricity in the river",
              "isCorrect": false
            }
          ],
          "explanation": "Neutralizing industrial acids protects delicate river pH and aquatic biomes.",
          "topicSubarea": "Industrial Environmental Neutralization"
        }
      ]
    }
  }
]
};
