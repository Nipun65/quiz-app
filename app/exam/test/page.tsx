'use client';

import { useState, useMemo, useEffect } from 'react';
import { EXAM_QUESTIONS } from '@/constants/constants.utils';
import QuestionCard from '@/components/QuestionCard';
import ConfirmationScreen from '@/components/ConfirmationScreen';
import { formatTime } from '@/utils/functions';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

type ExamState = {
  currentIndex: number;
  answers: Record<string, string>;
  startTime: number;
  endTime?: number;
};
const ExamContainer = () => {
  const total = EXAM_QUESTIONS.length;
  const router = useRouter()

  const [exam, setExam] = useState<ExamState>({
    currentIndex: 0,
    answers: {},
    startTime: Date.now(),
  });

  const [isConfirming, setIsConfirming] = useState(false);

  const [elapsed, setElapsed] = useState(0);

  const question = EXAM_QUESTIONS[exam.currentIndex];

  const answered = Object.keys(exam.answers).length;
  const skipped = total - answered;
  const completeness = Math.round((answered / total) * 100);
  const progress = Math.round(((exam.currentIndex + 1) / total) * 100);

  const timeTaken = exam.endTime
    ? Math.floor((exam.endTime - exam.startTime) / 1000)
    : Math.floor((Date.now() - exam.startTime) / 1000);

  const selectOption = (optionId: string) => {
    setExam((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [question.id]: optionId,
      },
    }));
  };

  const next = () => {
    if (exam.currentIndex === total - 1) {
      setIsConfirming(true);
      return;
    }

    setExam((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex + 1,
    }));
  };

  const prev = () => {
    setExam((prev) => ({
      ...prev,
      currentIndex: Math.max(prev.currentIndex - 1, 0),
    }));
  };

const submitExam = () => {
  const endTime = Date.now();
  const timeTakenSec = Math.floor((endTime - exam.startTime) / 1000);
  const formattedTime = formatTime(timeTakenSec);

  const answered = Object.keys(exam.answers).length;
  const total = EXAM_QUESTIONS.length;

  router.push(
    `/exam/submitted?time=${formattedTime}&answered=${answered}&total=${total}`
  );
};


  useEffect(() => {
    if (exam.endTime) return; 

    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - exam.startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [exam.startTime, exam.endTime]);


  if (isConfirming) {
    return (
      <ConfirmationScreen
        total={total}
        answered={answered}
        skipped={skipped}
        completeness={completeness}
        timeTaken={timeTaken}
        onSubmit={submitExam}
        onBack={() => setIsConfirming(false)}
      />
    );
  }

  return (
        <QuestionCard
        question={question}
        current={exam.currentIndex + 1}
        total={total}
        progress={progress}
        selectedOption={exam.answers[question.id]}
        onSelect={selectOption}
        onNext={next}
        onPrev={prev}
        isLast={exam.currentIndex === total - 1}
        time={formatTime(timeTaken)}
        startTime={exam.startTime}
        />
  );
}

export default ExamContainer