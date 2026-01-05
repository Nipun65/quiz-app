'use client';

import { useEffect, useState } from 'react';

type Props = {
  startTime: number;
  onTick?: (seconds: number) => void;
};

const ExamTimer:React.FC<Props> = ({ startTime, onTick }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.floor((Date.now() - startTime) / 1000);
      setSeconds(diff);
      onTick?.(diff);
    }, 1000);

    return () => clearInterval(id);
  }, [startTime, onTick]);

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return (
    <span>
      {min}:{sec.toString().padStart(2, '0')}
    </span>
  );
}

export default ExamTimer