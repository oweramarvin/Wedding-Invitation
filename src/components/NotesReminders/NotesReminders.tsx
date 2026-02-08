import { useState } from 'react';
import { NOTES } from '../../constants';
import styles from './NotesReminders.module.css';

export interface NotesRemindersProps {
  visible?: boolean;
}

const SECTIONS = [
  { id: 'dress', label: 'Dress code', content: NOTES.dressCode },
  { id: 'gifts', label: 'Gifts & registry', content: NOTES.gifts },
  { id: 'special', label: 'Special notes', content: NOTES.special },
] as const;

export default function NotesReminders({ visible = true }: NotesRemindersProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section className={styles.section} data-section="notes" aria-labelledby="notes-heading">
      <div
        className={styles.inner}
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 id="notes-heading" className={styles.title}>Notes & Reminders</h2>
        <div className={styles.list}>
          {SECTIONS.map(({ id, label, content }) => (
            <div key={id} className={styles.card}>
              <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpenId(openId === id ? null : id)}
                aria-expanded={openId === id}
                aria-controls={`notes-${id}`}
                id={`notes-${id}-btn`}
              >
                <span>{label}</span>
                <span className={styles.icon} aria-hidden>{openId === id ? '−' : '+'}</span>
              </button>
              <div
                id={`notes-${id}`}
                className={`${styles.content} ${openId === id ? styles.open : ''}`}
                role="region"
                aria-labelledby={`notes-${id}-btn`}
              >
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
