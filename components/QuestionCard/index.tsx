import { Question } from '@/types/exam';
import Options from '@/components/Options';
import styles from './index.module.css';
import ExamTimer from '../ExamTimer';
import { memo } from 'react';

type Props = {
  question: Question;
  current: number;
  total: number;
  progress: number;
  selectedOption?: string;
  onSelect: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
  time: string;
  startTime:number
};


export default memo(function QuestionCard({
  question,
  current,
  total,
  progress,
  selectedOption,
  onSelect,
  onNext,
  onPrev,
  isLast,
  time,
  startTime
}: Props) {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <h2>Math Final Exam</h2>
      <ExamTimer startTime={startTime} />
    </header>

      <div className={styles.progressBar}>
        <div style={{ width: `${progress}%` }} />
      </div>

      <h1 className={styles.question}>{question.question}</h1>

      <div className={styles.subject}>
        ∑ {question.subject.toUpperCase()}
      </div>

      <Options
        options={question.options}
        selected={selectedOption}
        onSelect={onSelect}
      />


     <footer className={styles.footer}>
      <button onClick={onPrev} disabled={current === 1}>
        ← Previous
      </button>

      <button className={styles.primary} onClick={onNext}>
        {isLast ? 'Submit Exam →' : 'Next →'}
      </button>
    </footer>
    </div>
  );
})
