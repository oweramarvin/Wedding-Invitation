import { useState, useEffect } from 'react';
import { WEDDING_DATE } from '../../constants';
import styles from './Countdown.module.css';

type CountdownProps = { visible?: boolean };

function useCountdown(target: Date) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ms = Math.max(0, target.getTime() - now.getTime());
      setDiff({
        days: Math.floor(ms / (1000 * 60 * 60 * 24)),
        hours: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((ms % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return diff;
}

export default function Countdown({ visible = true }: CountdownProps) {
  const c = useCountdown(WEDDING_DATE);
  return (
    <div className={styles.wrap} style={{ opacity: visible ? 1 : 0 }} aria-label="Countdown to wedding">
      <div className={styles.grid}>
        <div className={styles.unit}><span className={styles.value}>{c.days}</span><span className={styles.label}>Days</span></div>
        <div className={styles.unit}><span className={styles.value}>{c.hours}</span><span className={styles.label}>Hours</span></div>
        <div className={styles.unit}><span className={styles.value}>{c.minutes}</span><span className={styles.label}>Minutes</span></div>
        <div className={styles.unit}><span className={styles.value}>{c.seconds}</span><span className={styles.label}>Seconds</span></div>
      </div>
    </div>
  );
}
