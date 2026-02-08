/**
 * RSVP — premium modal: name, attendance, guest count, meal choice,
 * email delivery via EmailJS, confirmation + subtle confetti.
 */

import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { COUPLE } from '../../constants';
import styles from './RSVP.module.css';

export interface RSVPProps {
  open: boolean;
  onClose: () => void;
}

const MEAL_OPTIONS = [
  { value: 'chicken', label: 'Chicken' },
  { value: 'beef', label: 'Beef' },
  { value: 'fish', label: 'Fish' },
  { value: 'vegetarian', label: 'Vegetarian' },
];

/* -------------------------------- Confetti -------------------------------- */

function Confetti() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.4,
    duration: 1.2 + Math.random() * 0.6,
    size: 4 + Math.random() * 6,
    color: ['#C9A962', '#F5F0E8', '#E8E2D9', '#FDFBF7'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className={styles.confetti} aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
        />
      ))}
    </div>
  );
}

/* --------------------------------- RSVP ---------------------------------- */

export default function RSVP({ open, onClose }: RSVPProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const [sending, setSending] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (sending) return;

      setSending(true);
      const form = e.currentTarget;

      emailjs
        .sendForm(
          'service_ahdkb7v',   // e.g. service_xxxxxx
          'template_p2v2nvn',  // e.g. template_xxxxxx
          form,
          '09yHkQNUkCALAneAs'    // e.g. AbC123XYZ
        )
        .then(() => {
          // 🔁 Send auto-reply to guest
          emailjs.sendForm(
            'service_ahdkb7v',
            'template_cu6h80e', // ← your auto-reply template
            form,
            {
              publicKey: '09yHkQNUkCALAneAs',
            }
          );
        
          setConfirmed(true);
        
          setTimeout(() => {
            onClose();
            setConfirmed(false);
            setSending(false);
            form.reset();
            setGuestCount(1);
          }, 2200);
        })
        
        .catch((error) => {
          console.error('EmailJS error:', error);
          alert('Sorry, something went wrong. Please try again.');
          setSending(false);
        });
    },
    [onClose, sending]
  );

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {confirmed && <Confetti />}

        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2 id="rsvp-title" className={styles.title}>
          RSVP
        </h2>

        <p className={styles.intro}>
          Please let us know if you will be able to join us for{' '}
          {COUPLE.bride} & {COUPLE.groom}'s celebration.
        </p>

        {confirmed ? (
          <div className={styles.confirmation}>
            <p className={styles.confirmationText}>
              Thank you! Your response has been recorded.
            </p>
            <p className={styles.confirmationSub}>
              We cannot wait to celebrate with you.
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
              />
            </label>

            <label>
              <span>Number of guests</span>
              <input
                type="number"
                name="guestCount"
                min={1}
                max={10}
                value={guestCount}
                onChange={(e) =>
                  setGuestCount(Number(e.target.value) || 1)
                }
              />
            </label>

            <label>
              <span>Attendance</span>
              <select name="attendance" required>
                <option value="">Select</option>
                <option value="Joyfully accept">Joyfully accept</option>
                <option value="Regretfully decline">Regretfully decline</option>
              </select>
            </label>

            <label>
              <span>Meal preference</span>
              <select name="meal" required>
                <option value="">Select</option>
                {MEAL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.label}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Message (optional)</span>
              <textarea
                name="message"
                rows={3}
                placeholder="A note for the couple…"
              />
            </label>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.btnSecondary}
                onClick={onClose}
                disabled={sending}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={sending}
              >
                {sending ? 'Sending…' : 'Send'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
