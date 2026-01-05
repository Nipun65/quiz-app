import { Option } from '@/types/exam';
import styles from './exam.module.css';

export type ExamOptionsProps = {
  options: Option[];
  selected?: string;
  onSelect: (id: string) => void;
};

export default function Options({
  options,
  selected,
  onSelect,
}: ExamOptionsProps) {
  return (
    <div className={styles.options}>
      {options.map((opt) => (
        <button
          key={opt.id}
          className={`${styles.option} ${
            selected === opt.id ? styles.selected : ''
          }`}
          onClick={() => onSelect(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
