import { SCHEDULE } from '../../constants';
import styles from './EventSchedule.module.css';

export interface EventScheduleProps {
  visible?: boolean;
}

export default function EventSchedule({ visible = true }: EventScheduleProps) {
  return (
    <section className={styles.section} data-section="schedule" aria-labelledby="schedule-heading">
      <div
        className={styles.inner}
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 id="schedule-heading" className={styles.title}>Event Schedule</h2>
        <ol className={styles.timeline}>
          {SCHEDULE.map((item, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.time} aria-hidden>{item.time}</span>
              <div className={styles.content}>
                <h3 className={styles.eventTitle}>{item.title}</h3>
                <p className={styles.eventDesc}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
