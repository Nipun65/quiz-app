import { Question } from '@/types/exam';

export const EXAM_QUESTIONS: Question[] = [
  {
    id: 'q1',
    subject: 'Mathematics',
    question: 'What is the value of Pi rounded to two decimal places?',
    options: [
      { id: 'a', label: '3.12' },
      { id: 'b', label: '3.14' },
      { id: 'c', label: '3.16' },
      { id: 'd', label: '3.18' },
    ],
    answer: 'b',
  },
  {
    id: 'q2',
    subject: 'Mathematics',
    question: 'What is the square root of 144?',
    options: [
      { id: 'a', label: '10' },
      { id: 'b', label: '11' },
      { id: 'c', label: '12' },
      { id: 'd', label: '13' },
    ],
    answer: 'c',
  },
  {
    id: 'q3',
    subject: 'Mathematics',
    question: 'Solve: 8 × 7 − 12 = ?',
    options: [
      { id: 'a', label: '44' },
      { id: 'b', label: '46' },
      { id: 'c', label: '52' },
      { id: 'd', label: '56' },
    ],
    answer: 'b',
  },
  {
    id: 'q4',
    subject: 'Mathematics',
    question: 'What is 25% of 200?',
    options: [
      { id: 'a', label: '25' },
      { id: 'b', label: '40' },
      { id: 'c', label: '50' },
      { id: 'd', label: '75' },
    ],
    answer: 'c',
  },
  {
    id: 'q5',
    subject: 'Mathematics',
    question: 'Which of the following numbers is a prime number?',
    options: [
      { id: 'a', label: '21' },
      { id: 'b', label: '29' },
      { id: 'c', label: '35' },
      { id: 'd', label: '49' },
    ],
    answer: 'b',
  },
  {
    id: 'q6',
    subject: 'Mathematics',
    question: 'What is the value of 3² + 4²?',
    options: [
      { id: 'a', label: '25' },
      { id: 'b', label: '14' },
      { id: 'c', label: '49' },
      { id: 'd', label: '7' },
    ],
    answer: 'a',
  },
  {
    id: 'q7',
    subject: 'Mathematics',
    question: 'If x = 5, what is the value of 2x + 3?',
    options: [
      { id: 'a', label: '10' },
      { id: 'b', label: '11' },
      { id: 'c', label: '13' },
      { id: 'd', label: '15' },
    ],
    answer: 'c',
  },
  {
    id: 'q8',
    subject: 'Mathematics',
    question: 'What is the perimeter of a square with side length 6?',
    options: [
      { id: 'a', label: '12' },
      { id: 'b', label: '18' },
      { id: 'c', label: '24' },
      { id: 'd', label: '36' },
    ],
    answer: 'c',
  },
  {
    id: 'q9',
    subject: 'Mathematics',
    question: 'What is the next number in the sequence: 2, 4, 8, 16, ?',
    options: [
      { id: 'a', label: '18' },
      { id: 'b', label: '24' },
      { id: 'c', label: '32' },
      { id: 'd', label: '64' },
    ],
    answer: 'c',
  },
  {
    id: 'q10',
    subject: 'Mathematics',
    question: 'Which fraction is equivalent to 0.75?',
    options: [
      { id: 'a', label: '1/2' },
      { id: 'b', label: '3/4' },
      { id: 'c', label: '2/3' },
      { id: 'd', label: '4/5' },
    ],
    answer: 'b',
  },
];

export const EXAM_CONFIG = {
  title: 'Math Final',
  subtitle: 'Geometry',
  chapter: 'Chapter 4 Assessment',
  level: 'Advanced Level',
  durationMinutes: 45,
  passMark: 80,
};