/**
 * Wedding details: animated date & time, dress code with icons, schedule with hover reveals.
 */

import { useState } from 'react';
import { SCHEDULE, NOTES } from '../../constants';
import styles from './WeddingDetails.module.css';

export interface WeddingDetailsProps {
  visible?: boolean;
}

const MONTH = 'March';
const DAY = '22';
const YEAR = '2026';
const TIME_Ceremony = 'Ceremony 1:00 PM';
const TIME_Reception = 'Reception 3:00 PM';

const DRESS_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2v4M8 6h8M6 6v14h12V6M6 6l2-2M18 6l-2-2" />
  </svg>
);

export default function WeddingDetails({ visible = true }: WeddingDetailsProps) {
  const [hoveredSchedule, setHoveredSchedule] = useState<number | null>(null);

  return (
    <section className={styles.section} data-section="details" aria-labelledby="wedding-details-heading">
      <div
        className={styles.inner}
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 id="wedding-details-heading" className={styles.title}>Wedding Details</h2>

        <div className={styles.dateBlock}>
          <div className={styles.dateRow}>
            <span className={styles.dateNum} data-animate>{MONTH}</span>
            <span className={styles.dateNum} data-animate>{DAY}</span>
            <span className={styles.dateNum} data-animate>{YEAR}</span>
          </div>
          <p className={styles.time}>{TIME_Ceremony}</p>
          <p className={styles.time}>{TIME_Reception}</p>
        </div>

        <div className={styles.dressCode}>
          <span className={styles.dressIcon} aria-hidden>{DRESS_ICON}</span>
          <p>{NOTES.dressCode}</p>
        </div>

        <ul className={styles.schedule}>
          {SCHEDULE.map((item, i) => (
            <li
              key={i}
              className={styles.scheduleItem}
              onMouseEnter={() => setHoveredSchedule(i)}
              onMouseLeave={() => setHoveredSchedule(null)}
              onFocus={() => setHoveredSchedule(i)}
              onBlur={() => setHoveredSchedule(null)}
            >
              <div className={styles.scheduleHeader}>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleTitle}>{item.title}</span>
              </div>
              <div className={`${styles.scheduleDesc} ${hoveredSchedule === i ? styles.reveal : ''}`}>
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
