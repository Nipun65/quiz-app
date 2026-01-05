'use client'

import styles from './index.module.css';
import { useRouter } from 'next/navigation';
import { EXAM_QUESTIONS, EXAM_CONFIG } from '@/constants/constants.utils';

const ExamPreview = () => {
  const router = useRouter();

  const totalQuestions = EXAM_QUESTIONS.length;

  const startExam = () => {
    router.push('/exam/test');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.hero}>
          🎓
          <span>Final Assessment</span>
        </div>

        <h1 className={styles.title}>
          {EXAM_CONFIG.title}: <br /> {EXAM_CONFIG.subtitle}
        </h1>

        <p className={styles.subtitle}>
          {EXAM_CONFIG.chapter} • {EXAM_CONFIG.level}
        </p>

        <div className={styles.stats}>
          <Stat
            label="Duration"
            value={`${EXAM_CONFIG.durationMinutes}m`}
          />
          <Stat
            label="Questions"
            value={totalQuestions.toString()}
          />
          <Stat
            label="Pass Mark"
            value={`${EXAM_CONFIG.passMark}%`}
          />
        </div>

        <section>
          <h3 className={styles.sectionTitle}>Overview</h3>
          <p>
            This exam covers the fundamental principles of Newtonian mechanics,
            including kinematics, dynamics, and energy conservation.
          </p>
        </section>

        <button
          className={styles.startBtn}
          onClick={startExam}
        >
          Start Exam →
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.stat}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export default ExamPreview