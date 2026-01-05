import styles from './index.module.css';

type Props = {
  total: number;
  answered: number;
  skipped: number;
  completeness: number;
  timeTaken: number;
  onSubmit: () => void;
  onBack: () => void;
};
const ConfirmationScreen:React.FC<Props> = ( {total,
  answered,
  skipped,
  completeness,
  timeTaken,
  onSubmit,
  onBack}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={onBack} className={styles.back}>←</button>
        <h2>Confirmation</h2>
      </header>

      <div className={styles.checkWrap}>
        <div className={styles.check}>✓</div>
      </div>

      <h1 className={styles.title}>Ready to submit?</h1>
      <p className={styles.subtitle}>
        Once you submit, you will not be able to change your answers or review this session.
      </p>

      <div className={styles.stats}>
        <Stat label="Answered" value={`${answered} / ${total}`} />
        <Stat label="Time Taken" value={timeTaken} />
        <Stat label="Skipped" value={skipped.toString()} />
        <Stat label="Completeness" value={`${completeness}%`} highlight />
      </div>

      <button className={styles.submit} onClick={onSubmit}>
        Submit Exam →
      </button>

      <button className={styles.review} onClick={onBack}>
        Go Back to Review
      </button>
    </div>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) {
  return (
    <div className={styles.stat}>
      <span>{label}</span>
      <strong className={highlight ? styles.highlight : ''}>{value}</strong>
    </div>
  );
}

export default ConfirmationScreen