/**
 * Guestbook: animated text reveal + private email delivery via EmailJS.
 */

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Guestbook.module.css';

export interface GuestbookProps {
  visible?: boolean;
}

export default function Guestbook({ visible = true }: GuestbookProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!visible || !inputRef.current) return;
    inputRef.current.focus();
  }, [visible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = message.trim();
    if (!trimmed || sending) return;

    setSending(true);

    // Send message to your email (private guestbook)
    emailjs
      .send(
        'service_ahdkb7v',          // your service ID
        'template_brsa1sr',    // create this template
        {
          name: name || 'Anonymous',
          message: trimmed,
        },
        '09yHkQNUkCALAneAs'          // your public key
      )
      .then(() => {
        // Local animated reveal
        setSubmitted((prev) => [
          ...prev,
          `${name ? `${name}: ` : ''}${trimmed}`,
        ]);

        setName('');
        setMessage('');
        setSending(false);
      })
      .catch((err) => {
        console.error('Guestbook email failed:', err);
        alert('Sorry, something went wrong. Please try again.');
        setSending(false);
      });
  };

  return (
    <section
      className={styles.section}
      data-section="guestbook"
      aria-labelledby="guestbook-heading"
    >
      <div
        className={styles.inner}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <h2 id="guestbook-heading" className={styles.title}>
          Guestbook
        </h2>

        <p className={styles.intro}>
          Leave a note for the couple. Your message will appear with a gentle
          reveal.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className={styles.input}
            aria-label="Guest name"
          />

          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here…"
            rows={3}
            className={styles.input}
            aria-label="Guestbook message"
          />

          <button
            type="submit"
            className={styles.btn}
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Leave message'}
          </button>
        </form>

        <div className={styles.messages}>
          {submitted.map((text, i) => (
            <div key={i} className={styles.message} data-animate>
              {text.split('').map((char, j) => (
                <span
                  key={j}
                  className={styles.char}
                  style={{ animationDelay: `${j * 0.02}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
