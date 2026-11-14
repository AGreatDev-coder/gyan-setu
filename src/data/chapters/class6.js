// class6.js NCERT Curriculum Chapters (Mathematics and Science)
// 4 chapters per subject, fully aligned with official NCERT / CBSE curriculum.

export const class6Chapters = {
  math: [
  {
    "id": "knowing-numbers-6",
    "ncertChapterNo": "Chapter 1",
    "title": "Knowing Our Numbers",
    "hindiTitle": "अपनी संख्याओं की जानकारी",
    "description": "Indian and International place value systems, comparing large numbers, estimation to nearest tens/hundreds, and Roman numerals.",
    "estimatedMinutes": 20,
    "masteryTarget": 85,
    "learnSections": [
      {
        "id": "num-1",
        "eyebrow": "Place Value Systems",
        "title": "1. Indian vs International Number Systems",
        "analogy": "Lakhs and Crores vs Millions and Billions in Indian newspapers! When India’s population is stated as 140 Crore, in international notation it is 1.4 Billion.",
        "content": "**Indian System**: Units, Tens, Hundreds, Thousands, Ten Thousands, Lakhs, Ten Lakhs, Crores, Ten Crores.\n- Commas: First after 3 digits from right, then every 2 digits (e.g. 5,43,21,000 = 5 Crore, 43 Lakh, 21 Thousand).\n\n**International System**: Units, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions, Ten Millions, Hundred Millions.\n- Commas: Every 3 digits (e.g. 54,321,000 = 54 Million, 321 Thousand).\n- Relationship: 1 Million = 10 Lakhs; 1 Crore = 10 Millions.",
        "workedExample": {
          "problem": "NCERT Ex 1.1: Fill in the blanks: (a) 1 Lakh = _____ Ten Thousand. (b) 1 Crore = _____ Million.",
          "steps": [
            {
              "step": "(a) 1 Lakh in Ten Thousands",
              "detail": "1,00,000 / 10,000 = 10. So 1 Lakh = 10 Ten Thousand."
            },
            {
              "step": "(b) 1 Crore in Millions",
              "detail": "1,00,00,000 / 1,000,000 = 10. So 1 Crore = 10 Million."
            }
          ]
        },
        "keyFormula": "1 Million = 10 Lakhs. 1 Crore = 10 Millions. 1 Billion = 100 Crores.",
        "commonTrap": "Putting commas every 2 digits in international format or every 3 digits in Indian format."
      },
      {
        "id": "sec-kn-2",
        "eyebrow": "Concept 2: Estimation & Roman Numerals",
        "title": "Estimation, Rounding Off & Roman Numerals",
        "analogy": "Rounding off when buying groceries: If an item costs 98 rupees, we estimate it around 100 rupees. Rounding makes mental estimation rapid and practical.",
        "content": "1. Rounding off to nearest tens: Look at units digit. If 1-4, round down to 0. If 5-9, round up to next ten.\n2. Rounding off to hundreds and thousands: Look at tens or hundreds digit respectively.\n3. General Rule for Estimation: Round off each factor to its greatest place value, then perform the operation.\n4. Roman Numerals: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Symbols V, L, D are never repeated or subtracted. I can be subtracted from V and X only. X can be subtracted from L, M and C only.",
        "workedExample": {
          "problem": "Estimate the product 578 × 161 using the general rule.",
          "steps": [
            {
              "step": "Step 1: Round 578 to greatest place (hundreds)",
              "detail": "578 rounds up to 600."
            },
            {
              "step": "Step 2: Round 161 to greatest place (hundreds)",
              "detail": "161 rounds up to 200."
            },
            {
              "step": "Step 3: Multiply rounded numbers",
              "detail": "600 × 200 = 1,20,000."
            }
          ]
        },
        "keyFormula": "Estimate by rounding each number to its highest place value",
        "commonTrap": "V, L, D are NEVER written to the left of a greater number (they cannot be subtracted)."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-kn-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Ex 1.1: 1 Crore is equal to how many Millions?",
        "options": [
          {
            "id": "a",
            "text": "10 Million",
            "isCorrect": true,
            "explanation": "Correct! 1 Crore (1,00,00,000) = 10 Million (10,000,000)."
          },
          {
            "id": "b",
            "text": "100 Million",
            "isCorrect": false,
            "explanation": "Incorrect: 100 Million is 10 Crores."
          },
          {
            "id": "c",
            "text": "1 Million",
            "isCorrect": false,
            "explanation": "Incorrect: 1 Million is 10 Lakhs."
          },
          {
            "id": "d",
            "text": "1000 Million",
            "isCorrect": false,
            "explanation": "Incorrect: 1000 Million is 1 Billion."
          }
        ],
        "hint": "1 Crore = 100 Lakhs. 1 Million = 10 Lakhs. 100 ÷ 10 = 10.",
        "conceptTag": "place-value-conversion"
      },
      {
        "id": "q-kn-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Estimate 730 + 998 by rounding off each number to the nearest hundreds.",
        "options": [
          {
            "id": "a",
            "text": "1700",
            "isCorrect": true,
            "explanation": "Correct! 730 rounds to 700 and 998 rounds to 1000. Sum = 700 + 1000 = 1700."
          },
          {
            "id": "b",
            "text": "1600",
            "isCorrect": false,
            "explanation": "998 rounds to 1000, not 900."
          },
          {
            "id": "c",
            "text": "1728",
            "isCorrect": false,
            "explanation": "1728 is exact sum, not estimated."
          },
          {
            "id": "d",
            "text": "1800",
            "isCorrect": false,
            "explanation": "700 + 1000 = 1700."
          }
        ],
        "hint": "Round 730 to 700 and 998 to 1000.",
        "conceptTag": "Rounding to Hundreds"
      },
      {
        "id": "q-kn-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "What is the correct Roman numeral representation of the number 69?",
        "options": [
          {
            "id": "a",
            "text": "LXIX",
            "isCorrect": true,
            "explanation": "Correct! 60 is LX (50 + 10) and 9 is IX (10 - 1). 69 = LXIX."
          },
          {
            "id": "b",
            "text": "LXXIX",
            "isCorrect": false,
            "explanation": "LXXIX is 79."
          },
          {
            "id": "c",
            "text": "LVIIII",
            "isCorrect": false,
            "explanation": "Roman numerals cannot repeat I four times."
          },
          {
            "id": "d",
            "text": "XLIX",
            "isCorrect": false,
            "explanation": "XLIX is 49."
          }
        ],
        "hint": "60 is LX and 9 is IX.",
        "conceptTag": "Roman Numerals"
      },
      {
        "id": "q-kn-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "How many milligrams (mg) are there in one kilogram (kg)?",
        "options": [
          {
            "id": "a",
            "text": "1,000,000 mg",
            "isCorrect": true,
            "explanation": "Correct! 1 kg = 1000 g and 1 g = 1000 mg. So 1 kg = 1000 × 1000 = 1,000,000 mg."
          },
          {
            "id": "b",
            "text": "10,000 mg",
            "isCorrect": false,
            "explanation": "Too small."
          },
          {
            "id": "c",
            "text": "100,000 mg",
            "isCorrect": false,
            "explanation": "1 kg has 10⁶ mg."
          },
          {
            "id": "d",
            "text": "1,000 mg",
            "isCorrect": false,
            "explanation": "1000 mg is 1 gram."
          }
        ],
        "hint": "Multiply 1000 grams by 1000 milligrams per gram.",
        "conceptTag": "Metric Unit Conversions"
      }
    ],
    "assessment": {
      "id": "test-kn-1",
      "title": "Class 6 Chapter 1 NCERT Diagnostic Assessment",
      "questions": [
        {
          "id": "t-kn-1",
          "question": "Write 73,75,307 in words (Indian System):",
          "options": [
            {
              "id": "a",
              "text": "Seventy three lakh seventy five thousand three hundred seven",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Seven million three hundred seventy five thousand three hundred seven",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Seventy three crore seventy five thousand",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Seven lakh thirty seven thousand",
              "isCorrect": false
            }
          ],
          "explanation": "Commas are at 73, 75, and 307: 73 Lakh, 75 Thousand, 307.",
          "topicSubarea": "Indian Number Naming"
        },
        {
          "id": "t-kn-2",
          "question": "Estimate 730 + 998 by rounding off to nearest hundreds:",
          "options": [
            {
              "id": "a",
              "text": "1700",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "1728",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "1800",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "1600",
              "isCorrect": false
            }
          ],
          "explanation": "730 rounds to 700. 998 rounds to 1000. 700 + 1000 = 1700.",
          "topicSubarea": "Estimation"
        },
        {
          "id": "t-kn-3",
          "question": "In Roman numerals, the symbol for 50 is:",
          "options": [
            {
              "id": "a",
              "text": "L",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "C",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "D",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "X",
              "isCorrect": false
            }
          ],
          "explanation": "X = 10, L = 50, C = 100, D = 500, M = 1000.",
          "topicSubarea": "Roman Numerals"
        },
        {
          "id": "t-kn-4",
          "question": "The greatest 4-digit number made using digits 7, 8, 3, 5 without repetition is:",
          "options": [
            {
              "id": "a",
              "text": "8753",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "8735",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "7853",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "8573",
              "isCorrect": false
            }
          ],
          "explanation": "Arrange the digits in descending order: 8, 7, 5, 3 gives 8753.",
          "topicSubarea": "Number Formation"
        },
        {
          "id": "t-kn-5",
          "question": "How many milligrams make one kilogram?",
          "options": [
            {
              "id": "a",
              "text": "10,00,000 (10 Lakh)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "1,000",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "1,00,000",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "10,000",
              "isCorrect": false
            }
          ],
          "explanation": "1 kg = 1000 g; 1 g = 1000 mg. So 1 kg = 1000 × 1000 = 1,000,000 mg.",
          "topicSubarea": "Metric Units"
        }
      ]
    },
    "classId": "6",
    "subjectId": "math"
  },
  {
    "id": "whole-numbers-6",
    "classId": "6",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 2",
    "title": "Whole Numbers",
    "hindiTitle": "पूर्ण संख्याएँ",
    "description": "Natural numbers along with zero form the collection of whole numbers. Representation on number line, predecessor and successor, and fundamental properties.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-wn-1",
        "eyebrow": "Concept 1: Foundations",
        "title": "Natural Numbers vs Whole Numbers & Number Line",
        "analogy": "Imagine counting mangoes in a tokri (basket): 1, 2, 3... When the basket is completely empty, you have 0 mangoes. Combining 0 with counting numbers gives Whole Numbers (0, 1, 2, 3...).",
        "content": "1. Natural numbers are the counting numbers: 1, 2, 3, 4, 5...\n2. Whole numbers include zero along with all natural numbers: W = {0, 1, 2, 3, 4, 5...}.\n3. Every natural number is a whole number, but 0 is a whole number that is not a natural number.\n4. Successor: Adding 1 to any whole number gives its successor (e.g., successor of 19 is 20).\n5. Predecessor: Subtracting 1 gives its predecessor (e.g., predecessor of 20 is 19). The number 0 has no predecessor in whole numbers.\n6. Number Line: On a horizontal line, 0 is the starting point. Moving to the right increases value (addition), and moving to the left decreases value (subtraction).",
        "workedExample": {
          "problem": "Find the predecessor of the smallest 4-digit number and the successor of 999.",
          "steps": [
            {
              "step": "Step 1: Identify smallest 4-digit number",
              "detail": "The smallest 4-digit number is 1000."
            },
            {
              "step": "Step 2: Calculate predecessor of 1000",
              "detail": "Predecessor = 1000 - 1 = 999."
            },
            {
              "step": "Step 3: Calculate successor of 999",
              "detail": "Successor = 999 + 1 = 1000."
            }
          ]
        },
        "keyFormula": "Successor = N + 1 | Predecessor = N - 1 (for N > 0 in Whole Numbers)",
        "commonTrap": "Zero (0) does not have any predecessor in the set of whole numbers. Do not confuse natural numbers with whole numbers."
      },
      {
        "id": "sec-wn-2",
        "eyebrow": "Concept 2: Algebraic Properties",
        "title": "Properties of Operations on Whole Numbers",
        "analogy": "Arranging sweets in boxes: whether you add 3 laddus to 5 laddus (3+5=8) or 5 laddus to 3 (5+3=8), the total remains the same. This is commutativity.",
        "content": "Whole numbers follow essential arithmetic laws:\n1. Closure Property: The sum or product of any two whole numbers is always a whole number (a + b ∈ W, a × b ∈ W). Subtraction and division are NOT closed.\n2. Commutative Property: a + b = b + a and a × b = b × a.\n3. Associative Property: (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c).\n4. Distributive Property of Multiplication over Addition: a × (b + c) = (a × b) + (a × c).\n5. Identity Elements: 0 is the additive identity (a + 0 = a), and 1 is the multiplicative identity (a × 1 = a).\n6. Division by zero is undefined!",
        "workedExample": {
          "problem": "Evaluate 12 × 35 using the distributive property.",
          "steps": [
            {
              "step": "Step 1: Split 35 into friendly addends",
              "detail": "35 = 30 + 5"
            },
            {
              "step": "Step 2: Apply a × (b + c) = (a × b) + (a × c)",
              "detail": "12 × (30 + 5) = (12 × 30) + (12 × 5)"
            },
            {
              "step": "Step 3: Compute sub-products",
              "detail": "= 360 + 60 = 420."
            }
          ]
        },
        "keyFormula": "Distributive Law: a × (b + c) = (a × b) + (a × c)",
        "commonTrap": "Division by 0 has no mathematical meaning. 7 ÷ 0 is NOT 0; it is undefined."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-wn-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following whole numbers does NOT have a predecessor in the set of whole numbers?",
        "options": [
          {
            "id": "a",
            "text": "1",
            "isCorrect": false,
            "explanation": "1 has predecessor 1 - 1 = 0, which is a whole number."
          },
          {
            "id": "b",
            "text": "0",
            "isCorrect": true,
            "explanation": "Correct. 0 - 1 = -1, which is not a whole number; hence 0 has no predecessor in whole numbers."
          },
          {
            "id": "c",
            "text": "10",
            "isCorrect": false,
            "explanation": "10 has predecessor 9."
          },
          {
            "id": "d",
            "text": "100",
            "isCorrect": false,
            "explanation": "100 has predecessor 99."
          }
        ],
        "hint": "Recall the starting number on the whole number line.",
        "conceptTag": "Predecessor and Successor"
      },
      {
        "id": "q-wn-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Using suitable rearrangement, calculate: 25 × 83 × 4.",
        "options": [
          {
            "id": "a",
            "text": "8,300",
            "isCorrect": true,
            "explanation": "Rearrange as (25 × 4) × 83 = 100 × 83 = 8,300."
          },
          {
            "id": "b",
            "text": "830",
            "isCorrect": false,
            "explanation": "Underestimated by a factor of 10."
          },
          {
            "id": "c",
            "text": "8,030",
            "isCorrect": false,
            "explanation": "Calculation error."
          },
          {
            "id": "d",
            "text": "7,500",
            "isCorrect": false,
            "explanation": "Incorrect product."
          }
        ],
        "hint": "Group 25 and 4 first to get 100.",
        "conceptTag": "Associative Property"
      },
      {
        "id": "q-wn-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "Solve using the distributive property: 728 × 101.",
        "options": [
          {
            "id": "a",
            "text": "73,528",
            "isCorrect": true,
            "explanation": "728 × (100 + 1) = (728 × 100) + (728 × 1) = 72,800 + 728 = 73,528."
          },
          {
            "id": "b",
            "text": "72,801",
            "isCorrect": false,
            "explanation": "Added 1 instead of 728."
          },
          {
            "id": "c",
            "text": "74,280",
            "isCorrect": false,
            "explanation": "Addition slip."
          },
          {
            "id": "d",
            "text": "73,000",
            "isCorrect": false,
            "explanation": "Approximation rather than exact value."
          }
        ],
        "hint": "Express 101 as (100 + 1).",
        "conceptTag": "Distributive Property"
      },
      {
        "id": "q-wn-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "If the product of two whole numbers is zero, what can we definitively conclude?",
        "options": [
          {
            "id": "a",
            "text": "Both numbers must be non-zero",
            "isCorrect": false,
            "explanation": "The product of two non-zero numbers is always non-zero."
          },
          {
            "id": "b",
            "text": "At least one of them must be zero",
            "isCorrect": true,
            "explanation": "Correct. If a × b = 0, then either a = 0, or b = 0, or both a and b are 0."
          },
          {
            "id": "c",
            "text": "Both numbers must be 1",
            "isCorrect": false,
            "explanation": "1 × 1 = 1, not 0."
          },
          {
            "id": "d",
            "text": "The numbers must be negative",
            "isCorrect": false,
            "explanation": "Whole numbers cannot be negative."
          }
        ],
        "hint": "Can you multiply two positive numbers and get 0?",
        "conceptTag": "Zero Product Property"
      }
    ],
    "assessment": {
      "id": "test-wn-6",
      "title": "Class 6 Chapter 2 Diagnostic: Whole Numbers",
      "questions": [
        {
          "id": "t-wn-1",
          "question": "What is the sum of the smallest natural number and the smallest whole number?",
          "options": [
            {
              "id": "a",
              "text": "0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "1",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "undefined",
              "isCorrect": false
            }
          ],
          "explanation": "Smallest natural number is 1; smallest whole number is 0. 1 + 0 = 1.",
          "topicSubarea": "Definitions of Number Sets"
        },
        {
          "id": "t-wn-2",
          "question": "Which property is demonstrated by: 245 + 0 = 245?",
          "options": [
            {
              "id": "a",
              "text": "Additive Identity",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Multiplicative Identity",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Commutative Property",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Closure Property",
              "isCorrect": false
            }
          ],
          "explanation": "0 is called the identity for addition of whole numbers.",
          "topicSubarea": "Identity Elements"
        },
        {
          "id": "t-wn-3",
          "question": "Find the value of 54,279 × 92 + 8 × 54,279.",
          "options": [
            {
              "id": "a",
              "text": "5,427,900",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "542,790",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "54,279,000",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "5,000,000",
              "isCorrect": false
            }
          ],
          "explanation": "54,279 × (92 + 8) = 54,279 × 100 = 5,427,900.",
          "topicSubarea": "Distributive Law in Computation"
        },
        {
          "id": "t-wn-4",
          "question": "How many whole numbers lie between 32 and 53?",
          "options": [
            {
              "id": "a",
              "text": "21",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "20",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "19",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "22",
              "isCorrect": false
            }
          ],
          "explanation": "Numbers strictly between 32 and 53 = 53 - 32 - 1 = 20.",
          "topicSubarea": "Whole Numbers Interval Counting"
        },
        {
          "id": "t-wn-5",
          "question": "What is the result of 15 ÷ 0?",
          "options": [
            {
              "id": "a",
              "text": "0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "15",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Undefined",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "1",
              "isCorrect": false
            }
          ],
          "explanation": "Division of any whole number by zero is not defined in mathematics.",
          "topicSubarea": "Division by Zero"
        }
      ]
    }
  },
  {
    "id": "playing-numbers-6",
    "classId": "6",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 3",
    "title": "Playing with Numbers",
    "hindiTitle": "संख्याओं के साथ खेलना",
    "description": "Factors, multiples, prime and composite numbers, divisibility tests, prime factorization, Highest Common Factor (HCF) and Lowest Common Multiple (LCM).",
    "estimatedMinutes": 30,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-pwn-1",
        "eyebrow": "Concept 1: Factors & Multiples",
        "title": "Factors, Multiples, Prime & Composite Numbers",
        "analogy": "Dividing 12 marbles into equal bags: you can make 1 bag of 12, 2 bags of 6, 3 bags of 4, 4 bags of 3, 6 bags of 2, or 12 bags of 1. So 1, 2, 3, 4, 6, 12 are exact divisors or factors of 12.",
        "content": "1. A factor of a number is an exact divisor of that number. 1 is a factor of every number.\n2. A multiple of a number is obtained by multiplying it by natural numbers (Multiples of 4: 4, 8, 12, 16...).\n3. Prime Numbers: Numbers greater than 1 with exactly two distinct factors (1 and the number itself): 2, 3, 5, 7, 11, 13, 17, 19, 23...\n4. 2 is the smallest prime number and the ONLY even prime number!\n5. Composite Numbers: Numbers having more than two factors: 4, 6, 8, 9, 10...\n6. 1 is neither prime nor composite!\n7. Co-prime Numbers: Two numbers are co-prime if they have only 1 as a common factor (e.g., 4 and 9).",
        "workedExample": {
          "problem": "Find all factors of 36 and classify whether 36 is prime or composite.",
          "steps": [
            {
              "step": "Step 1: Write pairs of numbers whose product is 36",
              "detail": "1 × 36 = 36, 2 × 18 = 36, 3 × 12 = 36, 4 × 9 = 36, 6 × 6 = 36."
            },
            {
              "step": "Step 2: Collect unique factors in ascending order",
              "detail": "Factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36."
            },
            {
              "step": "Step 3: Classify",
              "detail": "Since 36 has 9 factors (more than 2), it is a composite number."
            }
          ]
        },
        "keyFormula": "Prime Number: Exactly 2 factors (1 and itself) | Composite: > 2 factors",
        "commonTrap": "1 is NOT a prime number because it has only 1 factor, not 2."
      },
      {
        "id": "sec-pwn-2",
        "eyebrow": "Concept 2: HCF & LCM",
        "title": "Divisibility Tests, HCF and LCM",
        "analogy": "Traffic lights at two crossroads blink every 6 seconds and 8 seconds. When do they blink together? At the multiples of both: 24 seconds! That is the Least Common Multiple (LCM).",
        "content": "1. Divisibility Tests:\n - By 2: Last digit is 0, 2, 4, 6, 8.\n - By 3: Sum of digits is divisible by 3.\n - By 5: Last digit is 0 or 5.\n - By 9: Sum of digits is divisible by 9.\n - By 11: Difference between sum of odd position digits and even position digits is 0 or divisible by 11.\n2. Highest Common Factor (HCF): The greatest number that divides two or more given numbers without remainder.\n3. Lowest Common Multiple (LCM): The smallest common multiple of two or more given numbers.\n4. Fundamental Rule for two numbers: Product of two numbers = HCF × LCM.",
        "workedExample": {
          "problem": "Find the HCF and LCM of 12 and 18.",
          "steps": [
            {
              "step": "Step 1: Prime factorization of 12",
              "detail": "12 = 2 × 2 × 3 = 2² × 3"
            },
            {
              "step": "Step 2: Prime factorization of 18",
              "detail": "18 = 2 × 3 × 3 = 2 × 3²"
            },
            {
              "step": "Step 3: Calculate HCF (lowest power of common primes)",
              "detail": "HCF = 2¹ × 3¹ = 6"
            },
            {
              "step": "Step 4: Calculate LCM (highest power of all primes)",
              "detail": "LCM = 2² × 3² = 4 × 9 = 36"
            }
          ]
        },
        "keyFormula": "Product of two numbers = HCF × LCM",
        "commonTrap": "HCF is always less than or equal to the given numbers; LCM is always greater than or equal to them."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-pwn-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following numbers is prime?",
        "options": [
          {
            "id": "a",
            "text": "21",
            "isCorrect": false,
            "explanation": "21 has factors 1, 3, 7, 21."
          },
          {
            "id": "b",
            "text": "29",
            "isCorrect": true,
            "explanation": "29 has exactly two factors: 1 and 29."
          },
          {
            "id": "c",
            "text": "39",
            "isCorrect": false,
            "explanation": "39 has factors 1, 3, 13, 39."
          },
          {
            "id": "d",
            "text": "49",
            "isCorrect": false,
            "explanation": "49 = 7 × 7."
          }
        ],
        "hint": "Check divisibility by 2, 3, 5, 7.",
        "conceptTag": "Prime Numbers"
      },
      {
        "id": "q-pwn-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Using divisibility tests, determine which number is divisible by 11:",
        "options": [
          {
            "id": "a",
            "text": "1,331",
            "isCorrect": true,
            "explanation": "Sum of odd digits (1+3=4), sum of even digits (3+1=4). Difference = 4 - 4 = 0. Divisible by 11."
          },
          {
            "id": "b",
            "text": "1,341",
            "isCorrect": false,
            "explanation": "(1+4) - (3+1) = 5 - 4 = 1 ≠ 0 or 11."
          },
          {
            "id": "c",
            "text": "1,221",
            "isCorrect": false,
            "explanation": "(1+2) - (2+1) = 0, wait: 1221 / 11 = 111, but 1331 is 11^3."
          },
          {
            "id": "d",
            "text": "1,000",
            "isCorrect": false,
            "explanation": "Not divisible by 11."
          }
        ],
        "hint": "Find the difference between alternate digit sums.",
        "conceptTag": "Divisibility Rule of 11"
      },
      {
        "id": "q-pwn-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "The HCF of 24 and 36 is:",
        "options": [
          {
            "id": "a",
            "text": "6",
            "isCorrect": false,
            "explanation": "6 is a common factor, but not the greatest."
          },
          {
            "id": "b",
            "text": "12",
            "isCorrect": true,
            "explanation": "24 = 12 × 2, 36 = 12 × 3. 12 is the Highest Common Factor."
          },
          {
            "id": "c",
            "text": "72",
            "isCorrect": false,
            "explanation": "72 is the LCM, not HCF."
          },
          {
            "id": "d",
            "text": "4",
            "isCorrect": false,
            "explanation": "Not the highest common divisor."
          }
        ],
        "hint": "Find the largest integer that divides both 24 and 36 without remainder.",
        "conceptTag": "Highest Common Factor"
      },
      {
        "id": "q-pwn-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "Two ropes of lengths 16 m and 24 m are to be cut into equal pieces of maximum possible length. What should be the length of each piece?",
        "options": [
          {
            "id": "a",
            "text": "8 meters",
            "isCorrect": true,
            "explanation": "Maximum equal length requires HCF(16, 24). 16 = 8 × 2, 24 = 8 × 3. HCF = 8 m."
          },
          {
            "id": "b",
            "text": "4 meters",
            "isCorrect": false,
            "explanation": "4 is a common factor, but 8 is larger."
          },
          {
            "id": "c",
            "text": "12 meters",
            "isCorrect": false,
            "explanation": "12 does not divide 16."
          },
          {
            "id": "d",
            "text": "48 meters",
            "isCorrect": false,
            "explanation": "48 is the LCM."
          }
        ],
        "hint": "When dividing lengths into maximal equal segments, find the HCF.",
        "conceptTag": "Real-Life HCF Applications"
      }
    ],
    "assessment": {
      "id": "test-pwn-6",
      "title": "Class 6 Chapter 3 Diagnostic: Playing with Numbers",
      "questions": [
        {
          "id": "t-pwn-1",
          "question": "What is the only even prime number?",
          "options": [
            {
              "id": "a",
              "text": "0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "2",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "4",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "There are no even prime numbers",
              "isCorrect": false
            }
          ],
          "explanation": "2 is the only even prime number because all other even numbers are divisible by 2.",
          "topicSubarea": "Prime Number Classification"
        },
        {
          "id": "t-pwn-2",
          "question": "A number is divisible by 6 if it is divisible by:",
          "options": [
            {
              "id": "a",
              "text": "2 only",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "3 only",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Both 2 and 3",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Neither 2 nor 3",
              "isCorrect": false
            }
          ],
          "explanation": "Since 6 = 2 × 3 (and 2 and 3 are co-prime), divisibility by 6 requires divisibility by both 2 and 3.",
          "topicSubarea": "Composite Divisibility Rules"
        },
        {
          "id": "t-pwn-3",
          "question": "If HCF of two numbers is 5 and their product is 150, what is their LCM?",
          "options": [
            {
              "id": "a",
              "text": "30",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "750",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "25",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "15",
              "isCorrect": false
            }
          ],
          "explanation": "Product = HCF × LCM => 150 = 5 × LCM => LCM = 150 / 5 = 30.",
          "topicSubarea": "HCF and LCM Product Relationship"
        },
        {
          "id": "t-pwn-4",
          "question": "Which of the following pairs is co-prime?",
          "options": [
            {
              "id": "a",
              "text": "18 and 35",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "15 and 35",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "21 and 28",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "16 and 64",
              "isCorrect": false
            }
          ],
          "explanation": "Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 35: 1, 5, 7, 35. Common factor is only 1.",
          "topicSubarea": "Co-prime Numbers"
        },
        {
          "id": "t-pwn-5",
          "question": "The LCM of 15 and 20 is:",
          "options": [
            {
              "id": "a",
              "text": "5",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "60",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "300",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "35",
              "isCorrect": false
            }
          ],
          "explanation": "Multiples of 15: 15, 30, 45, 60... Multiples of 20: 20, 40, 60... Smallest common multiple is 60.",
          "topicSubarea": "Least Common Multiple Calculation"
        }
      ]
    }
  },
  {
    "id": "fractions-6",
    "classId": "6",
    "subjectId": "math",
    "ncertChapterNo": "Chapter 7",
    "title": "Fractions",
    "hindiTitle": "भिन्न",
    "description": "Representation of fractions on a number line, proper, improper and mixed fractions, equivalent fractions, simplest form, and addition and subtraction of like/unlike fractions.",
    "estimatedMinutes": 28,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-fr-1",
        "eyebrow": "Concept 1: Fractional Units",
        "title": "Fractions as Part of a Whole & Fraction Types",
        "analogy": "Sharing a round chapati equally among 4 siblings: each child receives 1 piece out of 4 equal parts, written mathematically as 1/4 (one-fourth).",
        "content": "1. A fraction is a number representing a part of a whole. The whole may be a single object or a group of objects.\n2. In a fraction a/b, 'a' is the Numerator (number of parts considered) and 'b' is the Denominator (total equal parts into which the whole is divided). Denominator b ≠ 0.\n3. Proper Fraction: Numerator < Denominator (e.g., 3/5, 7/10). Value is always less than 1.\n4. Improper Fraction: Numerator ≥ Denominator (e.g., 7/4, 9/2). Value is greater than or equal to 1.\n5. Mixed Fraction: Combination of a whole number and a proper fraction (e.g., 1 ¾ = 7/4).\n6. To convert improper to mixed: Divide numerator by denominator. Quotient = Whole number, Remainder = Numerator, Divisor = Denominator.",
        "workedExample": {
          "problem": "Express 17/5 as a mixed fraction and 3 ⅖ as an improper fraction.",
          "steps": [
            {
              "step": "Step 1: Divide 17 by 5",
              "detail": "17 ÷ 5 gives Quotient = 3, Remainder = 2."
            },
            {
              "step": "Step 2: Write mixed fraction form",
              "detail": "17/5 = 3 ⅖ (three whole and two-fifths)."
            },
            {
              "step": "Step 3: Convert 3 ⅖ back to improper",
              "detail": "(3 × 5 + 2) / 5 = (15 + 2) / 5 = 17/5."
            }
          ]
        },
        "keyFormula": "Mixed Fraction = Quotient (Remainder / Divisor)",
        "commonTrap": "In a proper fraction, the numerator must always be strictly less than the denominator."
      },
      {
        "id": "sec-fr-2",
        "eyebrow": "Concept 2: Comparison & Operations",
        "title": "Equivalent Fractions & Operations",
        "analogy": "Eating 2 slices of an 8-slice pizza gives the exact same quantity of pizza as eating 1 slice of a 4-slice pizza: 2/8 = 1/4.",
        "content": "1. Equivalent Fractions: Fractions that represent the same value (e.g., 1/2 = 2/4 = 3/6 = 4/8). Obtained by multiplying or dividing numerator and denominator by the same non-zero number.\n2. Simplest Form: A fraction is in simplest (or lowest) form if its numerator and denominator have no common factor other than 1 (HCF = 1).\n3. Like Fractions: Fractions with the same denominator (e.g., 2/7 and 5/7). Addition: (2+5)/7 = 7/7 = 1.\n4. Unlike Fractions: Fractions with different denominators (e.g., 1/3 and 2/5). To add/subtract, find LCM of denominators to convert them to like fractions first.",
        "workedExample": {
          "problem": "Solve: 2/5 + 1/3.",
          "steps": [
            {
              "step": "Step 1: Find LCM of denominators 5 and 3",
              "detail": "LCM(5, 3) = 15."
            },
            {
              "step": "Step 2: Convert both to equivalent fractions with denominator 15",
              "detail": "2/5 = (2 × 3)/(5 × 3) = 6/15; 1/3 = (1 × 5)/(3 × 5) = 5/15."
            },
            {
              "step": "Step 3: Add the numerators",
              "detail": "6/15 + 5/15 = 11/15."
            }
          ]
        },
        "keyFormula": "Addition of Unlike Fractions: a/b + c/d = (a·d + b·c) / (b·d)",
        "commonTrap": "Never add denominators directly! 1/2 + 1/3 is NOT 2/5."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-fr-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "What fraction of a day is 8 hours?",
        "options": [
          {
            "id": "a",
            "text": "1/3",
            "isCorrect": true,
            "explanation": "1 day = 24 hours. Fraction = 8/24 = 1/3."
          },
          {
            "id": "b",
            "text": "1/4",
            "isCorrect": false,
            "explanation": "8/24 simplifies to 1/3, not 1/4."
          },
          {
            "id": "c",
            "text": "1/2",
            "isCorrect": false,
            "explanation": "12 hours is half a day."
          },
          {
            "id": "d",
            "text": "8/12",
            "isCorrect": false,
            "explanation": "A day has 24 hours, not 12."
          }
        ],
        "hint": "Divide 8 by the total hours in a full 24-hour day.",
        "conceptTag": "Fraction of a Quantity"
      },
      {
        "id": "q-fr-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Which of the following is in simplest form?",
        "options": [
          {
            "id": "a",
            "text": "15/20",
            "isCorrect": false,
            "explanation": "Divisible by 5 (simplifies to 3/4)."
          },
          {
            "id": "b",
            "text": "9/15",
            "isCorrect": false,
            "explanation": "Divisible by 3 (simplifies to 3/5)."
          },
          {
            "id": "c",
            "text": "7/11",
            "isCorrect": true,
            "explanation": "7 and 11 are co-prime (HCF = 1), so 7/11 is in simplest form."
          },
          {
            "id": "d",
            "text": "18/24",
            "isCorrect": false,
            "explanation": "Divisible by 6 (simplifies to 3/4)."
          }
        ],
        "hint": "A fraction is in simplest form when numerator and denominator have no common factor except 1.",
        "conceptTag": "Simplest Form"
      },
      {
        "id": "q-fr-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "Calculate: 5/8 - 1/4.",
        "options": [
          {
            "id": "a",
            "text": "3/8",
            "isCorrect": true,
            "explanation": "1/4 = 2/8. 5/8 - 2/8 = 3/8."
          },
          {
            "id": "b",
            "text": "4/4 = 1",
            "isCorrect": false,
            "explanation": "Incorrect denominator subtraction."
          },
          {
            "id": "c",
            "text": "1/8",
            "isCorrect": false,
            "explanation": "Calculation error."
          },
          {
            "id": "d",
            "text": "1/2",
            "isCorrect": false,
            "explanation": "1/2 = 4/8, not 3/8."
          }
        ],
        "hint": "Convert 1/4 to an equivalent fraction with denominator 8.",
        "conceptTag": "Subtraction of Fractions"
      },
      {
        "id": "q-fr-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "Rohit read 25 pages of a 100-page book. Lalita read 2/5 of the same book. Who read more and by what fraction of the book?",
        "options": [
          {
            "id": "a",
            "text": "Lalita read more by 3/20 of the book",
            "isCorrect": true,
            "explanation": "Rohit read 25/100 = 1/4 = 5/20 of the book. Lalita read 2/5 = 8/20. Lalita read more by 8/20 - 5/20 = 3/20."
          },
          {
            "id": "b",
            "text": "Rohit read more by 1/4",
            "isCorrect": false,
            "explanation": "Lalita read 40 pages while Rohit read 25 pages."
          },
          {
            "id": "c",
            "text": "Both read the exact same amount",
            "isCorrect": false,
            "explanation": "25 pages ≠ 40 pages."
          },
          {
            "id": "d",
            "text": "Lalita read more by 1/10",
            "isCorrect": false,
            "explanation": "Difference is 15 pages = 15/100 = 3/20."
          }
        ],
        "hint": "Convert both Rohit's and Lalita's reading into fractions with common denominator 20 or 100.",
        "conceptTag": "Comparison of Fractions Word Problem"
      }
    ],
    "assessment": {
      "id": "test-fr-6",
      "title": "Class 6 Chapter 7 Diagnostic: Fractions",
      "questions": [
        {
          "id": "t-fr-1",
          "question": "An improper fraction is one where:",
          "options": [
            {
              "id": "a",
              "text": "Numerator is strictly less than denominator",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Numerator is greater than or equal to denominator",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Denominator is zero",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Numerator is 1",
              "isCorrect": false
            }
          ],
          "explanation": "In improper fractions (like 7/4 or 5/5), numerator ≥ denominator.",
          "topicSubarea": "Fraction Definitions"
        },
        {
          "id": "t-fr-2",
          "question": "Which of the following is equivalent to 3/5?",
          "options": [
            {
              "id": "a",
              "text": "6/10",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "9/20",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "12/15",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "15/20",
              "isCorrect": false
            }
          ],
          "explanation": "(3 × 2) / (5 × 2) = 6/10.",
          "topicSubarea": "Equivalent Fractions"
        },
        {
          "id": "t-fr-3",
          "question": "Simplify to lowest terms: 48/60.",
          "options": [
            {
              "id": "a",
              "text": "4/5",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "24/30",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "8/10",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "12/15",
              "isCorrect": false
            }
          ],
          "explanation": "Dividing both numerator and denominator by HCF 12 yields 4/5.",
          "topicSubarea": "Simplest Form"
        },
        {
          "id": "t-fr-4",
          "question": "Evaluate: 3/7 + 4/7.",
          "options": [
            {
              "id": "a",
              "text": "7/14",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "1",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "7/7 = 0",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "12/49",
              "isCorrect": false
            }
          ],
          "explanation": "(3 + 4) / 7 = 7/7 = 1.",
          "topicSubarea": "Like Fraction Addition"
        },
        {
          "id": "t-fr-5",
          "question": "What is 2 ¾ expressed as an improper fraction?",
          "options": [
            {
              "id": "a",
              "text": "11/4",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "9/4",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "6/4",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "10/3",
              "isCorrect": false
            }
          ],
          "explanation": "(2 × 4 + 3) / 4 = (8 + 3) / 4 = 11/4.",
          "topicSubarea": "Mixed to Improper Conversion"
        }
      ]
    }
  }
],
  science: [
  {
    "id": "food-components-6",
    "classId": "6",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 1",
    "title": "Components of Food",
    "hindiTitle": "भोजन के घटक",
    "description": "Major nutrients (carbohydrates, proteins, fats, vitamins, minerals), balanced diet, and nutritional deficiency diseases in India.",
    "estimatedMinutes": 25,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "fc-1",
        "eyebrow": "Major Nutrients & Testing",
        "title": "1. Nutrients and the Balanced Indian Thali",
        "analogy": "Think of a traditional Indian thali: Roti and Rice (Carbohydrates for energy), Dal and Paneer (Proteins for body growth), Ghee and Mustard Oil (Fats for concentrated energy), and Sabzi/Salad (Vitamins and Minerals for immunity).",
        "content": "Food consists of essential components needed by our body, known as **Nutrients** (पोषक तत्व):\n- **Carbohydrates & Fats**: Provide energy. Fats provide almost twice as much energy as carbohydrates of the same mass.\n- **Proteins**: Required for the growth and repair of body cells (often called 'body-building foods').\n- **Vitamins & Minerals**: Protect our bodies against diseases. Vitamin A keeps our eyes and skin healthy; Vitamin C helps fight infections; Vitamin D helps our bones use calcium.\n\n**Standard NCERT Laboratory Tests**:\n1. **Starch Test**: Add 2-3 drops of dilute Iodine solution to food sample. A **blue-black color** confirms the presence of starch.\n2. **Protein Test**: Make a paste of food, add 10 drops of water, 2 drops of Copper Sulphate (CuSO₄) solution, and 10 drops of Caustic Soda (NaOH). A **violet color** indicates proteins.",
        "workedExample": {
          "problem": "NCERT Textbook Activity: A student adds 3 drops of dilute iodine solution to mashed boiled potato. What color change is observed and what does it conclude?",
          "steps": [
            {
              "step": "Step 1: Observation",
              "detail": "The mashed potato turns a distinct blue-black color."
            },
            {
              "step": "Step 2: Chemical inference",
              "detail": "Iodine reacts specifically with starch (a complex carbohydrate) to form a blue-black iodine-starch complex."
            },
            {
              "step": "Step 3: Conclusion",
              "detail": "Potatoes are rich in starch (energy-giving carbohydrate)."
            }
          ]
        },
        "keyFormula": "Nutrients = Carbohydrates + Fats + Proteins + Vitamins + Minerals + Roughage (Dietary Fibre) + Water.",
        "commonTrap": "Exam Warning: Confusing the test for starch (Iodine → Blue-Black) with the test for protein (Copper Sulphate + Caustic Soda → Violet)."
      },
      {
        "id": "fc-2",
        "eyebrow": "Deficiency Diseases",
        "title": "2. Deficiency Diseases and Prevention",
        "analogy": "In many rural areas, iodised salt was introduced nationally by the Government of India to prevent swelling of the neck thyroid gland known as Goitre (घेंघा).",
        "content": "A person may get enough food to eat, but sometimes the food may not contain a specific nutrient. If this continues over a long period, the person suffers from a **Deficiency Disease** (अभावजन्य रोग):\n- **Vitamin A deficiency**: Loss of vision / Night blindness (कमज़ोर दृष्टि / रतौंधी). Symptoms: Poor night vision, sometimes complete loss of sight.\n- **Vitamin B1 deficiency**: Beriberi (बेरीबेरी). Symptoms: Weak muscles and very little energy to work.\n- **Vitamin C deficiency**: Scurvy (स्कर्वी). Symptoms: Bleeding gums, wounds take longer time to heal. Note: Vitamin C gets easily destroyed by heat during cooking!\n- **Vitamin D / Calcium deficiency**: Rickets (रिकेट्स). Symptoms: Bones become soft and bent.\n- **Iodine deficiency**: Goitre (घेंघा). Symptoms: Glands in the neck appear swollen, mental disability in children.\n- **Iron deficiency**: Anaemia (अराक्तता/एनीमिया). Symptoms: General fatigue and weakness.",
        "workedExample": {
          "problem": "NCERT Exercise Question: Why should citrus fruits like Amla, Oranges, and Lemons be consumed raw rather than boiled in hot curry?",
          "steps": [
            {
              "step": "Step 1: Identify key nutrient",
              "detail": "Citrus fruits and Amla are extremely rich in Vitamin C (Ascorbic acid)."
            },
            {
              "step": "Step 2: Property of Vitamin C",
              "detail": "Vitamin C is water-soluble and thermolabile—it gets rapidly denatured and destroyed by heat during cooking."
            },
            {
              "step": "Step 3: Recommendation",
              "detail": "Eating fresh raw fruits preserves full Vitamin C potency and prevents scurvy."
            }
          ]
        },
        "keyFormula": "A Balanced Diet (संतुलित आहार) must contain all nutrients in proper proportions along with sufficient roughage and water.",
        "commonTrap": "Assuming that eating only ghee and butter makes you strongest: Excess fat intake causes obesity (मोटापा) and lacks proteins/vitamins."
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-fc-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Question: Which solution is used to test the presence of starch in raw rice or potato?",
        "options": [
          {
            "id": "a",
            "text": "Dilute Iodine Solution",
            "isCorrect": true,
            "explanation": "Correct! Dilute iodine turns blue-black in the presence of starch."
          },
          {
            "id": "b",
            "text": "Copper Sulphate Solution",
            "isCorrect": false,
            "explanation": "Incorrect: Copper sulphate is used along with caustic soda to test for proteins."
          },
          {
            "id": "c",
            "text": "Salt Water Solution",
            "isCorrect": false,
            "explanation": "Incorrect: Salt solution does not show a color change with starch."
          },
          {
            "id": "d",
            "text": "Lemon Juice",
            "isCorrect": false,
            "explanation": "Incorrect: Lemon juice is rich in citric acid and does not indicate starch."
          }
        ],
        "hint": "Recall the laboratory test that turns the sample into a deep blue-black shade.",
        "conceptTag": "starch-iodine-test"
      },
      {
        "id": "p-fc-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "A child exhibits swollen glands in the neck and reduced energy. Which nutrient deficiency is the most probable cause?",
        "options": [
          {
            "id": "a",
            "text": "Iodine deficiency (Goitre)",
            "isCorrect": true,
            "explanation": "Excellent! Swelling in the thyroid gland of the neck is the hallmark symptom of Goitre caused by iodine deficiency."
          },
          {
            "id": "b",
            "text": "Vitamin A deficiency",
            "isCorrect": false,
            "explanation": "Incorrect: Vitamin A deficiency primarily causes night blindness and eye trouble."
          },
          {
            "id": "c",
            "text": "Vitamin C deficiency",
            "isCorrect": false,
            "explanation": "Incorrect: Vitamin C deficiency causes bleeding gums (scurvy)."
          },
          {
            "id": "d",
            "text": "Calcium deficiency",
            "isCorrect": false,
            "explanation": "Incorrect: Calcium deficiency primarily affects bone density and tooth decay."
          }
        ],
        "hint": "Think about why iodised salt is recommended in Indian cooking.",
        "conceptTag": "iodine-goitre-deficiency"
      },
      {
        "id": "q-fc-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "Which essential vitamin is synthesized in the human body when the skin is exposed to sunlight?",
        "options": [
          {
            "id": "a",
            "text": "Vitamin D",
            "isCorrect": true,
            "explanation": "Correct! Exposure to sunlight stimulates the skin to synthesize Vitamin D."
          },
          {
            "id": "b",
            "text": "Vitamin A",
            "isCorrect": false,
            "explanation": "Vitamin A is obtained from carrots, papaya, milk."
          },
          {
            "id": "c",
            "text": "Vitamin C",
            "isCorrect": false,
            "explanation": "Vitamin C is found in citrus fruits."
          },
          {
            "id": "d",
            "text": "Vitamin B1",
            "isCorrect": false,
            "explanation": "Vitamin B1 is found in whole grains."
          }
        ],
        "hint": "Known as the sunshine vitamin.",
        "conceptTag": "Vitamins Synthesis"
      },
      {
        "id": "q-fc-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "A child exhibits bleeding gums, loose teeth, and wounds take a very long time to heal. Which deficiency disease is this, and what food will cure it?",
        "options": [
          {
            "id": "a",
            "text": "Scurvy; Citrus fruits like amla, lemon, and oranges",
            "isCorrect": true,
            "explanation": "Correct! Bleeding gums is a classic symptom of Scurvy caused by Vitamin C deficiency. Citrus fruits and amla cure it."
          },
          {
            "id": "b",
            "text": "Beriberi; Whole grain cereals",
            "isCorrect": false,
            "explanation": "Beriberi affects muscles and nervous system."
          },
          {
            "id": "c",
            "text": "Rickets; Milk and butter",
            "isCorrect": false,
            "explanation": "Rickets causes soft bones."
          },
          {
            "id": "d",
            "text": "Goitre; Iodised salt",
            "isCorrect": false,
            "explanation": "Goitre causes swollen neck gland."
          }
        ],
        "hint": "Bleeding gums indicate Vitamin C deficiency.",
        "conceptTag": "Deficiency Diseases"
      }
    ],
    "assessment": {
      "id": "test-fc-6",
      "title": "Class 6 Chapter 1 NCERT Diagnostic Assessment: Components of Food",
      "questions": [
        {
          "id": "t-fc-1",
          "question": "Which of the following food nutrients are known as \"body-building foods\"?",
          "options": [
            {
              "id": "a",
              "text": "Proteins",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Carbohydrates",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Fats",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Roughage",
              "isCorrect": false
            }
          ],
          "explanation": "Proteins are required for growth and tissue repair, hence called body-building foods.",
          "topicSubarea": "Nutrient Functions"
        },
        {
          "id": "t-fc-2",
          "question": "Which vitamin is easily destroyed by heating during cooking?",
          "options": [
            {
              "id": "a",
              "text": "Vitamin C",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Vitamin A",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Vitamin D",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Vitamin K",
              "isCorrect": false
            }
          ],
          "explanation": "Vitamin C (ascorbic acid) is heat-sensitive and easily destroyed by cooking temperatures.",
          "topicSubarea": "Vitamin Properties"
        },
        {
          "id": "t-fc-3",
          "question": "Night blindness (रतौंधी) is caused by the deficiency of:",
          "options": [
            {
              "id": "a",
              "text": "Vitamin A",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Vitamin B1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Vitamin C",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Vitamin D",
              "isCorrect": false
            }
          ],
          "explanation": "Deficiency of Vitamin A leads to poor night vision and eye health degradation.",
          "topicSubarea": "Deficiency Diseases"
        },
        {
          "id": "t-fc-4",
          "question": "What is the primary function of dietary fibres (Roughage) in our diet?",
          "options": [
            {
              "id": "a",
              "text": "Helps our body get rid of undigested food",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Provides maximum energy to muscles",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Builds strong bones and teeth",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Destroys harmful bacteria in blood",
              "isCorrect": false
            }
          ],
          "explanation": "Roughage adds bulk to food and aids in smooth bowel movements and healthy digestion.",
          "topicSubarea": "Dietary Fibres"
        },
        {
          "id": "t-fc-5",
          "question": "A food sample produces a violet color when treated with copper sulphate and caustic soda. This indicates the presence of:",
          "options": [
            {
              "id": "a",
              "text": "Proteins",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Starch",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Fats",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Sugar",
              "isCorrect": false
            }
          ],
          "explanation": "The Biuret reaction (copper sulphate + caustic soda) produces a violet color specifically in the presence of proteins.",
          "topicSubarea": "Nutrient Chemical Tests"
        }
      ]
    }
  },
  {
    "id": "light-shadows-6",
    "classId": "6",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 8",
    "title": "Light, Shadows and Reflections",
    "hindiTitle": "प्रकाश, छायाएं एवं परावर्तन",
    "description": "Transparent, translucent, opaque materials, rectilinear propagation of light, pinhole cameras, and reflection off smooth surfaces.",
    "estimatedMinutes": 20,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "ls-1",
        "eyebrow": "Classification of Materials",
        "title": "1. Transparent, Opaque and Translucent Objects",
        "analogy": "Looking through a clear glass window (Transparent), an oiled sheet of notebook paper (Translucent), versus a brick wall in your school (Opaque).",
        "content": "Light allows us to see things. An object that emits light of its own is called a **Luminous object** (e.g. the Sun, a glowing diya, an electric bulb).\n\nMaterials behave differently when light falls on them:\n- **Transparent**: Allows light to pass through completely, so we can see clearly through them (e.g. clean air, clear water, clear glass pane).\n- **Opaque**: Does not allow any light to pass through; we cannot see through them at all (e.g. wooden door, brick wall, metal thali). **Only opaque objects cast dark shadows!**\n- **Translucent**: Allows light to pass partially; things seen through them appear blurred (e.g. butter paper, frosted bathroom glass, thin tracing paper).",
        "workedExample": {
          "problem": "NCERT Activity: Why is a shadow formed only when an opaque object is placed in the path of light?",
          "steps": [
            {
              "step": "Step 1: Light travels in straight lines",
              "detail": "Light travels strictly along straight paths (Rectilinear propagation)."
            },
            {
              "step": "Step 2: Opaque obstacle blocks the rays",
              "detail": "An opaque object obstructs the straight rays and prevents them from reaching the screen behind it."
            },
            {
              "step": "Step 3: Resulting shadow",
              "detail": "The dark patch formed where light cannot reach is the shadow."
            }
          ]
        },
        "keyFormula": "Essential requirements to form a shadow: 1. Source of light, 2. Opaque object, 3. Screen (ground, wall, or cloth).",
        "commonTrap": "Thinking shadows give the true color of an object: Shadows only give the 2D silhouette/outline, never the color or surface details!"
      },
      {
        "id": "sec-ls-2",
        "eyebrow": "Concept 2: Pinhole Camera & Mirrors",
        "title": "Pinhole Camera and Plane Mirror Reflections",
        "analogy": "Light traveling in perfectly straight rays like laser pointers: In a pinhole camera, light rays from the top and bottom of an object cross each other through a tiny aperture, creating an upside-down (inverted) image on the screen.",
        "content": "1. Rectilinear Propagation of Light: Light travels in straight lines. This fundamental property explains shadow formation and pinhole camera imagery.\n2. Pinhole Camera: A simple camera without a lens. Produces an inverted, real image. Image size changes with distance between object and pinhole.\n3. Mirrors and Reflection: When light falls on a polished plane mirror, it changes direction. The image formed by a plane mirror is erect, laterally inverted (left appears right and right appears left), and of the same size as the object.",
        "workedExample": {
          "problem": "Why does an ambulance write its name laterally inverted on the front bumper?",
          "steps": [
            {
              "step": "Step 1: Understand plane mirror reflection",
              "detail": "Plane mirrors form laterally inverted images (left appears right)."
            },
            {
              "step": "Step 2: Effect on vehicle ahead",
              "detail": "When a driver ahead looks in the rear-view mirror, the inverted lettering flips laterally and reads clearly as \"AMBULANCE\"."
            },
            {
              "step": "Step 3: Result",
              "detail": "The driver can quickly give way to the emergency vehicle."
            }
          ]
        },
        "keyFormula": "Pinhole Camera: Inverted image  |  Plane Mirror: Erect, same size, laterally inverted",
        "commonTrap": "Shadows are always black/dark regardless of the color of the object, whereas images show the actual colors of the object!"
      }
    ],
    "practiceQuestions": [
      {
        "id": "p-ls-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "NCERT Question: Which of the following objects will form a dark, well-defined shadow in bright sunlight?",
        "options": [
          {
            "id": "a",
            "text": "A solid wooden block (Opaque)",
            "isCorrect": true,
            "explanation": "Correct! Only opaque objects completely block light to form dark shadows."
          },
          {
            "id": "b",
            "text": "A clean glass sheet (Transparent)",
            "isCorrect": false,
            "explanation": "Incorrect: Light passes through transparent glass, casting almost no shadow."
          },
          {
            "id": "c",
            "text": "Clear clean water in a glass beaker",
            "isCorrect": false,
            "explanation": "Incorrect: Clear water transmits light and does not block it."
          },
          {
            "id": "d",
            "text": "A thin sheet of clear polythene",
            "isCorrect": false,
            "explanation": "Incorrect: Transparent sheets do not obstruct light."
          }
        ],
        "hint": "Pick the material that does not allow any light to pass through it.",
        "conceptTag": "shadow-formation"
      },
      {
        "id": "q-ls-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "Which of the following conditions is essential for the formation of a shadow?",
        "options": [
          {
            "id": "a",
            "text": "A light source, an opaque object, and a screen behind it",
            "isCorrect": true,
            "explanation": "Correct! A shadow requires a source of light, an opaque obstacle to block rays, and a screen (or ground/wall) for the shadow to be cast upon."
          },
          {
            "id": "b",
            "text": "Only a light source",
            "isCorrect": false,
            "explanation": "Without an opaque object, no shadow is formed."
          },
          {
            "id": "c",
            "text": "A completely transparent glass sheet",
            "isCorrect": false,
            "explanation": "Transparent sheets let light pass through without forming a dark shadow."
          },
          {
            "id": "d",
            "text": "A plane mirror and magnifying lens",
            "isCorrect": false,
            "explanation": "Not needed for shadows."
          }
        ],
        "hint": "Think about what is needed to block light and catch the dark outline.",
        "conceptTag": "Shadow Formation Requirements"
      },
      {
        "id": "q-ls-3",
        "level": 2,
        "levelLabel": "Conceptual",
        "question": "What type of image is formed on the tracing paper screen of a simple pinhole camera?",
        "options": [
          {
            "id": "a",
            "text": "Real and inverted (upside down)",
            "isCorrect": true,
            "explanation": "Correct! Rays crossing through the pinhole invert top and bottom, producing an inverted real image."
          },
          {
            "id": "b",
            "text": "Virtual and erect",
            "isCorrect": false,
            "explanation": "Pinhole images are inverted."
          },
          {
            "id": "c",
            "text": "Always circular regardless of object",
            "isCorrect": false,
            "explanation": "Image resembles the object."
          },
          {
            "id": "d",
            "text": "Completely pitch black shadow",
            "isCorrect": false,
            "explanation": "It is a colored image, not a shadow."
          }
        ],
        "hint": "Light rays from top travel down through the pinhole, rays from bottom travel up.",
        "conceptTag": "Pinhole Camera Imagery"
      },
      {
        "id": "q-ls-4",
        "level": 3,
        "levelLabel": "HOTs",
        "question": "If you raise your right hand while standing in front of a plane mirror, your mirror image appears to raise its:",
        "options": [
          {
            "id": "a",
            "text": "Left hand",
            "isCorrect": true,
            "explanation": "Correct! Reflection in a plane mirror exhibits lateral inversion, where left appears right and right appears left."
          },
          {
            "id": "b",
            "text": "Right hand",
            "isCorrect": false,
            "explanation": "Lateral inversion flips left and right."
          },
          {
            "id": "c",
            "text": "Both hands",
            "isCorrect": false,
            "explanation": "Only the corresponding hand is raised."
          },
          {
            "id": "d",
            "text": "Neither hand",
            "isCorrect": false,
            "explanation": "The image mirrors your actions."
          }
        ],
        "hint": "Think about lateral inversion.",
        "conceptTag": "Lateral Inversion"
      }
    ],
    "assessment": {
      "id": "test-ls-6",
      "title": "Class 6 Chapter 8 NCERT Diagnostic Assessment: Light & Shadows",
      "questions": [
        {
          "id": "t-ls-1",
          "question": "Light travels in a:",
          "options": [
            {
              "id": "a",
              "text": "Straight line",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Curved path",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Zig-zag path",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Circular loop",
              "isCorrect": false
            }
          ],
          "explanation": "Light undergoes rectilinear propagation, meaning it travels in straight lines in a uniform medium.",
          "topicSubarea": "Light Propagation"
        },
        {
          "id": "t-ls-2",
          "question": "In a pinhole camera, the image formed on the translucent screen is always:",
          "options": [
            {
              "id": "a",
              "text": "Inverted (upside-down)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Erect (right-side up)",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Magnified and blurry",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Same size and upright",
              "isCorrect": false
            }
          ],
          "explanation": "Because light rays from top and bottom cross each other at the tiny pinhole, the image is inverted.",
          "topicSubarea": "Pinhole Camera"
        },
        {
          "id": "t-ls-3",
          "question": "Which of the following is a non-luminous object?",
          "options": [
            {
              "id": "a",
              "text": "The Moon",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The Sun",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "A burning candle",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "A lit electric bulb",
              "isCorrect": false
            }
          ],
          "explanation": "The Moon does not emit its own light; it merely reflects sunlight falling upon it.",
          "topicSubarea": "Luminous vs Non-Luminous"
        },
        {
          "id": "t-ls-4",
          "question": "A sheet of tracing paper or butter paper is classified as:",
          "options": [
            {
              "id": "a",
              "text": "Translucent",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Transparent",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Opaque",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Luminous",
              "isCorrect": false
            }
          ],
          "explanation": "Tracing paper allows light to pass partially, categorizing it as translucent.",
          "topicSubarea": "Optical Classification"
        },
        {
          "id": "t-ls-5",
          "question": "When light strikes a shiny, smooth stainless steel plate or mirror, it changes its direction. This phenomenon is called:",
          "options": [
            {
              "id": "a",
              "text": "Reflection of Light",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Refraction of Light",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Dispersion of Light",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Absorption of Light",
              "isCorrect": false
            }
          ],
          "explanation": "The bouncing back of light from a polished or shiny surface is known as reflection.",
          "topicSubarea": "Reflection"
        }
      ]
    }
  },
  {
    "id": "sorting-materials-6",
    "classId": "6",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 2",
    "title": "Sorting Materials into Groups",
    "hindiTitle": "वस्तुओं के समूह बनाना",
    "description": "Grouping objects based on properties such as appearance (lustre), hardness, solubility in water, buoyancy (float or sink), and transparency (transparent, translucent, opaque).",
    "estimatedMinutes": 22,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-sm-1",
        "eyebrow": "Concept 1: Physical Properties",
        "title": "Appearance, Hardness, and Solubility",
        "analogy": "In a grocery shop (kirana store), soaps are kept together, biscuits in another rack, and grains in sacks. Grouping materials by properties makes them easy to identify and study.",
        "content": "1. Lustre: Materials that shine freshly cut or polished are lustrous (e.g., gold, silver, copper, iron). Non-lustrous materials include wood, chalk, and paper.\n2. Hardness: Materials easily compressed or scratched are soft (e.g., cotton, sponge, candle wax). Materials difficult to compress are hard (e.g., iron, stone, diamond).\n3. Solubility: Substances that dissolve completely in water are soluble (e.g., salt, sugar). Substances that do not dissolve even after stirring are insoluble (e.g., sand, chalk powder, sawdust).\n4. Miscibility of Liquids: Vinegar and lemon juice mix well with water (miscible); mustard oil and kerosene form a separate layer (immiscible).",
        "workedExample": {
          "problem": "Classify whether cooking oil and sugar are soluble in water.",
          "steps": [
            {
              "step": "Step 1: Test sugar in water",
              "detail": "Sugar dissolves completely to form a uniform solution. Sugar is soluble."
            },
            {
              "step": "Step 2: Test cooking oil in water",
              "detail": "Oil does not dissolve; it floats on the surface forming an immiscible layer. Oil is insoluble in water."
            }
          ]
        },
        "keyFormula": "Soluble: dissolves completely | Insoluble: remains visible as separate phase",
        "commonTrap": "Do not confuse transparency with solubility. Clear water with salt looks clear, but muddy water is an insoluble suspension."
      },
      {
        "id": "sec-sm-2",
        "eyebrow": "Concept 2: Light Transmission & Flotation",
        "title": "Floatation and Transparency",
        "analogy": "Frosted glass in bathroom windows lets light through but hides details (translucent), while clear window glass lets you see everything clearly (transparent).",
        "content": "1. Buoyancy (Float or Sink in water):\n - Materials lighter than water float: dry leaves, cork, plastic ball, ice, oil.\n - Materials heavier than water sink: iron nail, coin, stone, key.\n2. Transparency Categories:\n - Transparent: Objects through which things can be seen clearly (e.g., clean air, clear water, plain glass).\n - Translucent: Materials through which objects can be seen, but not clearly (e.g., butter paper, oiled paper, frosted glass).\n - Opaque: Materials through which you cannot see at all (e.g., wooden door, cardboard box, brick wall, steel plate).",
        "workedExample": {
          "problem": "You drop a coin, a cork, and an iron key in a glass of water. Predict their behavior.",
          "steps": [
            {
              "step": "Step 1: Analyze densities relative to water",
              "detail": "Iron key and coin have higher density than water; cork has lower density."
            },
            {
              "step": "Step 2: Predict",
              "detail": "Cork floats on top; iron key and coin sink to the bottom."
            }
          ]
        },
        "keyFormula": "Transparent: clear view | Translucent: blurry view | Opaque: no view",
        "commonTrap": "Oiled paper becomes translucent, not transparent. You cannot read fine print through it clearly."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-sm-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following materials is lustrous (possesses shiny appearance)?",
        "options": [
          {
            "id": "a",
            "text": "Wood",
            "isCorrect": false,
            "explanation": "Wood is dull and non-lustrous."
          },
          {
            "id": "b",
            "text": "Copper wire",
            "isCorrect": true,
            "explanation": "Freshly exposed metals like copper possess metallic lustre."
          },
          {
            "id": "c",
            "text": "Cardboard",
            "isCorrect": false,
            "explanation": "Cardboard does not shine."
          },
          {
            "id": "d",
            "text": "Chalk",
            "isCorrect": false,
            "explanation": "Chalk is matte and non-lustrous."
          }
        ],
        "hint": "Metals typically reflect light when clean and polished.",
        "conceptTag": "Lustre in Materials"
      },
      {
        "id": "q-sm-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "An oiled paper sheet is an example of which type of medium?",
        "options": [
          {
            "id": "a",
            "text": "Transparent",
            "isCorrect": false,
            "explanation": "You cannot see clearly through it."
          },
          {
            "id": "b",
            "text": "Translucent",
            "isCorrect": true,
            "explanation": "Oil fills paper pores allowing partial, diffused light transmission (translucent)."
          },
          {
            "id": "c",
            "text": "Opaque",
            "isCorrect": false,
            "explanation": "Light passes partially through oiled paper."
          },
          {
            "id": "d",
            "text": "Luminous",
            "isCorrect": false,
            "explanation": "It does not emit its own light."
          }
        ],
        "hint": "Light passes through partially but fine details cannot be resolved.",
        "conceptTag": "Transparency Classification"
      },
      {
        "id": "q-sm-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "Which pair of liquids is completely miscible with water?",
        "options": [
          {
            "id": "a",
            "text": "Vinegar and Lemon juice",
            "isCorrect": true,
            "explanation": "Both vinegar (acetic acid) and lemon juice (citric acid) mix homogeneously with water."
          },
          {
            "id": "b",
            "text": "Mustard oil and Kerosene",
            "isCorrect": false,
            "explanation": "Neither mixes with water."
          },
          {
            "id": "c",
            "text": "Cooking oil and Vinegar",
            "isCorrect": false,
            "explanation": "Cooking oil does not mix with water."
          },
          {
            "id": "d",
            "text": "Petrol and Alcohol",
            "isCorrect": false,
            "explanation": "Petrol is immiscible in water."
          }
        ],
        "hint": "Look for kitchen liquids that blend without forming oil droplets.",
        "conceptTag": "Miscibility in Liquids"
      },
      {
        "id": "q-sm-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "Why are shopkeepers generally displaying candies and biscuits in clear glass or transparent plastic jars rather than wooden boxes?",
        "options": [
          {
            "id": "a",
            "text": "Because transparent jars allow customers to see the items easily without opening the container",
            "isCorrect": true,
            "explanation": "Transparency allows light transmission so contents are immediately visible and appetizing."
          },
          {
            "id": "b",
            "text": "Because glass is softer than wood",
            "isCorrect": false,
            "explanation": "Glass is hard, not soft."
          },
          {
            "id": "c",
            "text": "Because glass makes the biscuits lighter in weight",
            "isCorrect": false,
            "explanation": "Container material does not change biscuit weight."
          },
          {
            "id": "d",
            "text": "Because wood dissolves in water",
            "isCorrect": false,
            "explanation": "Wood is insoluble."
          }
        ],
        "hint": "Think about how light interacts with clear glass versus wood.",
        "conceptTag": "Functional Application of Transparency"
      }
    ],
    "assessment": {
      "id": "test-sm-6",
      "title": "Class 6 Chapter 2 Diagnostic: Sorting Materials",
      "questions": [
        {
          "id": "t-sm-1",
          "question": "Which of the following substances completely dissolves in water?",
          "options": [
            {
              "id": "a",
              "text": "Sand",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Chalk powder",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Common salt",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Sawdust",
              "isCorrect": false
            }
          ],
          "explanation": "Common salt (sodium chloride) dissolves completely in water to form a true solution.",
          "topicSubarea": "Solubility"
        },
        {
          "id": "t-sm-2",
          "question": "A material through which you cannot see anything at all is called:",
          "options": [
            {
              "id": "a",
              "text": "Opaque",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Transparent",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Translucent",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Lustrous",
              "isCorrect": false
            }
          ],
          "explanation": "Opaque materials (like wood, metals, cardboard) block all light transmission.",
          "topicSubarea": "Opaque Materials"
        },
        {
          "id": "t-sm-3",
          "question": "Which of the following objects will float on the surface of water?",
          "options": [
            {
              "id": "a",
              "text": "Iron nail",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Dry leaf",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Stone marble",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Copper coin",
              "isCorrect": false
            }
          ],
          "explanation": "Dry leaves have density lower than water and float on the surface.",
          "topicSubarea": "Flotation and Density"
        },
        {
          "id": "t-sm-4",
          "question": "Why does an iron key feel much harder than a piece of candle wax?",
          "options": [
            {
              "id": "a",
              "text": "Because iron cannot be easily scratched or compressed by hand",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Because iron is opaque",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Because iron dissolves in water",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Because wax is a metal",
              "isCorrect": false
            }
          ],
          "explanation": "Hardness is defined by resistance to scratching, deformation, and compression.",
          "topicSubarea": "Hardness vs Softness"
        },
        {
          "id": "t-sm-5",
          "question": "Tumblers (drinking glasses) are never made of cloth because:",
          "options": [
            {
              "id": "a",
              "text": "Cloth does not hold liquids and allows them to leak through pores",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Cloth is too lustrous",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Cloth is too heavy",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Cloth is a transparent material",
              "isCorrect": false
            }
          ],
          "explanation": "Material choice depends on function: containers for liquids must be non-porous and impermeable.",
          "topicSubarea": "Purpose-Driven Material Selection"
        }
      ]
    }
  },
  {
    "id": "body-movements-6",
    "classId": "6",
    "subjectId": "science",
    "ncertChapterNo": "Chapter 5",
    "title": "Body Movements",
    "hindiTitle": "शरीर में गति",
    "description": "Human skeletal system, types of joints (ball and socket, hinge, pivotal, fixed), cartilages, muscles, and gaits of animals (earthworm, snail, cockroach, fish, bird, snake).",
    "estimatedMinutes": 24,
    "masteryTarget": 80,
    "learnSections": [
      {
        "id": "sec-bm-1",
        "eyebrow": "Concept 1: Skeletal Joints",
        "title": "Bones, Cartilage and Joints in Human Body",
        "analogy": "The door of your house opens and closes in one direction due to metal hinges. Similarly, your elbow and knee bend back and forth using hinge joints.",
        "content": "1. The framework of bones that gives shape to our body is the Human Skeleton (206 bones in adult human).\n2. Bones cannot bend; movement occurs at Joints where two or more bones meet.\n3. Types of Joints:\n - Ball and Socket Joint: Allows movement in ALL directions (e.g., shoulder joint, hip joint).\n - Hinge Joint: Allows movement only back and forth in one plane (e.g., elbow, knee).\n - Pivotal Joint: A cylindrical bone rotates in a ring; allows head to bend forward/backward and turn right/left (neck joint).\n - Fixed Joints: Bones cannot move at all (e.g., upper jaw to the rest of the skull, skull bones).\n4. Cartilage: Softer and more flexible than bone (e.g., upper part of the ear and tip of the nose).\n5. Muscles work in pairs: when one contracts, it pulls the bone; to move back, the partner muscle contracts while the first relaxes. Muscles only PULL, they cannot push!",
        "workedExample": {
          "problem": "Which joint allows a bowler in cricket to rotate their arm in a full circle?",
          "steps": [
            {
              "step": "Step 1: Identify movement required",
              "detail": "Full 360-degree rotational movement in all directions."
            },
            {
              "step": "Step 2: Match with joint type",
              "detail": "The shoulder is a Ball and Socket joint where the rounded head of the humerus fits into the glenoid cavity of the pectoral girdle."
            }
          ]
        },
        "keyFormula": "Ball & Socket: all directions | Hinge: single plane | Pivotal: rotation | Fixed: zero movement",
        "commonTrap": "Muscles cannot push; they can only contract and pull. That is why two muscles (biceps and triceps) are needed to move a joint back and forth."
      },
      {
        "id": "sec-bm-2",
        "eyebrow": "Concept 2: Animal Locomotion",
        "title": "Gait of Animals: How Earthworms, Birds, and Fish Move",
        "analogy": "Rowing a boat with oars: a fish uses its streamlined body and fins like flexible oars, curving from side to side in water to push itself forward.",
        "content": "Different animals have adapted unique locomotion mechanisms:\n1. Earthworm: Has no bones; body made of many rings. Uses tiny bristles (setae) and alternating contraction/expansion of circular and longitudinal muscles to crawl.\n2. Snail: Moves using a muscular foot that secretes a slimy mucus trail.\n3. Cockroach: Has 3 pairs of jointed legs for walking and 2 pairs of wings for flying; covered by a hard outer exoskeleton.\n4. Birds: Streamlined body, hollow light bones (pneumatic), and breast muscles modified into powerful wings for flight.\n5. Fish: Streamlined spindle-shaped body reduces water resistance. Moves by forming alternating curves on opposite sides using tail fin.\n6. Snake: Has a long backbone and many thin muscles. Loops its body into multiple curves; each loop pushes against ground, moving snake forward in a wave-like slither.",
        "workedExample": {
          "problem": "Why do birds have hollow bones?",
          "steps": [
            {
              "step": "Step 1: Consider requirements for flight",
              "detail": "Flight requires high strength combined with minimal weight to reduce energy expenditure."
            },
            {
              "step": "Step 2: Connect to bone anatomy",
              "detail": "Hollow (pneumatic) bones filled with air cavities provide maximum structural strength with minimal body mass."
            }
          ]
        },
        "keyFormula": "Streamlined shape minimizes friction in air and water",
        "commonTrap": "Snakes do not move in a straight line; they curve in serpentine loops that push sideways against ground friction to propel forward."
      }
    ],
    "practiceQuestions": [
      {
        "id": "q-bm-1",
        "level": 1,
        "levelLabel": "Foundational",
        "question": "Which of the following joints is a hinge joint?",
        "options": [
          {
            "id": "a",
            "text": "Shoulder joint",
            "isCorrect": false,
            "explanation": "Shoulder is a ball and socket joint."
          },
          {
            "id": "b",
            "text": "Elbow joint",
            "isCorrect": true,
            "explanation": "The elbow allows back-and-forth movement like a door hinge."
          },
          {
            "id": "c",
            "text": "Neck joint",
            "isCorrect": false,
            "explanation": "Neck joint is pivotal."
          },
          {
            "id": "d",
            "text": "Upper jaw joint",
            "isCorrect": false,
            "explanation": "Upper jaw is a fixed joint."
          }
        ],
        "hint": "Think of a door that only swings in one plane.",
        "conceptTag": "Joint Classification"
      },
      {
        "id": "q-bm-2",
        "level": 2,
        "levelLabel": "Application",
        "question": "How do muscles produce movement in our arm?",
        "options": [
          {
            "id": "a",
            "text": "A single muscle both pushes and pulls the bone",
            "isCorrect": false,
            "explanation": "Muscles can only pull; they cannot push."
          },
          {
            "id": "b",
            "text": "Two muscles work as an antagonistic pair: when one contracts, the other relaxes",
            "isCorrect": true,
            "explanation": "Muscles work in pairs (e.g. biceps contracts to bend, triceps contracts to straighten)."
          },
          {
            "id": "c",
            "text": "Bones expand and push the muscles",
            "isCorrect": false,
            "explanation": "Bones are rigid and do not expand."
          },
          {
            "id": "d",
            "text": "Cartilage pushes the joint open",
            "isCorrect": false,
            "explanation": "Cartilage cushions joints, it does not move them."
          }
        ],
        "hint": "Remember that muscles can only pull by contracting.",
        "conceptTag": "Muscular Action"
      },
      {
        "id": "q-bm-3",
        "level": 2,
        "levelLabel": "Application",
        "question": "An earthworm moves forward across soil by using:",
        "options": [
          {
            "id": "a",
            "text": "Jointed legs and claws",
            "isCorrect": false,
            "explanation": "Earthworms have no legs."
          },
          {
            "id": "b",
            "text": "Alternating contraction of body segments anchored by tiny bristles (setae)",
            "isCorrect": true,
            "explanation": "Circular and longitudinal muscles alternate contractions while setae anchor into soil."
          },
          {
            "id": "c",
            "text": "Hollow bones and wings",
            "isCorrect": false,
            "explanation": "Earthworms have no bones."
          },
          {
            "id": "d",
            "text": "A single muscular foot like a snail",
            "isCorrect": false,
            "explanation": "Snails have a muscular foot, not earthworms."
          }
        ],
        "hint": "Earthworms have ring-like segments and microscopic bristles.",
        "conceptTag": "Earthworm Locomotion"
      },
      {
        "id": "q-bm-4",
        "level": 3,
        "levelLabel": "Higher Order",
        "question": "Why does a fish have a \"streamlined\" body shape where both ends are narrow and the middle portion is broad?",
        "options": [
          {
            "id": "a",
            "text": "To minimize water resistance (drag) so water flows around it smoothly",
            "isCorrect": true,
            "explanation": "Streamlined shape minimizes fluid drag, allowing efficient movement through water."
          },
          {
            "id": "b",
            "text": "To store more food in its stomach",
            "isCorrect": false,
            "explanation": "Body shape is an aerodynamic/hydrodynamic adaptation, not storage."
          },
          {
            "id": "c",
            "text": "To sink quickly to the ocean floor",
            "isCorrect": false,
            "explanation": "Fish need to swim freely at various depths."
          },
          {
            "id": "d",
            "text": "Because its bones are made of cartilage only",
            "isCorrect": false,
            "explanation": "Bony fishes have true bones."
          }
        ],
        "hint": "Think about why aeroplanes and boats are shaped similarly.",
        "conceptTag": "Streamlined Hydrodynamics"
      }
    ],
    "assessment": {
      "id": "test-bm-6",
      "title": "Class 6 Chapter 5 Diagnostic: Body Movements",
      "questions": [
        {
          "id": "t-bm-1",
          "question": "The only movable bone in the human skull is the:",
          "options": [
            {
              "id": "a",
              "text": "Upper jaw",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Lower jaw (mandible)",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Forehead bone",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Nasal bone",
              "isCorrect": false
            }
          ],
          "explanation": "The lower jaw is movable to allow chewing, speaking, and biting; upper skull bones are fixed.",
          "topicSubarea": "Skull Anatomy"
        },
        {
          "id": "t-bm-2",
          "question": "What type of joint connects our head to the neck and allows pivoting rotation?",
          "options": [
            {
              "id": "a",
              "text": "Pivotal joint",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Hinge joint",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Ball and socket joint",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Gliding joint",
              "isCorrect": false
            }
          ],
          "explanation": "The atlantoaxial joint in the neck is a pivotal joint.",
          "topicSubarea": "Pivotal Joint Function"
        },
        {
          "id": "t-bm-3",
          "question": "Which of the following body parts contains flexible cartilage rather than rigid bone?",
          "options": [
            {
              "id": "a",
              "text": "Femur (thigh bone)",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Upper part of the ear (pinna)",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Rib cage bones",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Humerus (upper arm)",
              "isCorrect": false
            }
          ],
          "explanation": "The ear pinna and tip of the nose are formed by elastic cartilage.",
          "topicSubarea": "Cartilage vs Bone"
        },
        {
          "id": "t-bm-4",
          "question": "How does a snake move across the ground?",
          "options": [
            {
              "id": "a",
              "text": "By walking on tiny hidden feet",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "By curving into side loops that push against the ground",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "By rolling into a round ball",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "By hopping using its tail",
              "isCorrect": false
            }
          ],
          "explanation": "Each loop of the snake gives it a forward push by pressing against ground irregularities.",
          "topicSubarea": "Serpentine Locomotion"
        },
        {
          "id": "t-bm-5",
          "question": "The rib cage primarily protects which vital organs?",
          "options": [
            {
              "id": "a",
              "text": "Heart and lungs",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Brain and eyes",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Stomach and intestines only",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Kidneys only",
              "isCorrect": false
            }
          ],
          "explanation": "The 12 pairs of ribs form a cage protecting the thoracic cavity containing heart and lungs.",
          "topicSubarea": "Skeletal Protection"
        }
      ]
    }
  }
]
};
