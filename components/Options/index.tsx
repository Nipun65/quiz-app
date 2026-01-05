import { Option } from '@/types/exam';
import styles from './index.module.css';

export type ExamOptionsProps = {
  options: Option[];
  selected?: string;
  onSelect: (id: string) => void;
};

const Options:React.FC<ExamOptionsProps> = ({options,
  selected,
  onSelect,}) => {
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

export default Options