'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';

type Props = {
  searchParams: {
    time?: string;
    answered?: string;
    total?: string;
  };
};

export default function ExamSubmittedPage({ searchParams }: Props) {
const params = useSearchParams();

const time = params.get('time');
const answered = params.get('answered');
const total = params.get('total');

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Your test has been submitted
        </h1>

        <p className={styles.subtitle}>
          Thank you for completing the exam.
        </p>

        <div className={styles.stats}>
          <p>
            <strong>Answered:</strong> {answered} / {total}
          </p>
          <p>
            <strong>Time Taken:</strong> {time}
          </p>
        </div>

        <Link href="/" className={styles.button}>
          Go to Home
        </Link>
      </div>
    </div>
  );
}
