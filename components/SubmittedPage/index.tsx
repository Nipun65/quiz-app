  'use client';

  import Link from 'next/link';
  import styles from './index.module.css';
  import { useSearchParams } from 'next/navigation';

  const ExamSubmittedPage = () => {
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

  export default ExamSubmittedPage