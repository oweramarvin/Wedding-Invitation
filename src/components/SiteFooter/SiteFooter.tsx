/**
 * Footer: contact info, social icons with hover glow, credits.
 */

import { CONTACT, SOCIAL, COUPLE } from '../../constants';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.contact}>
          <a href={`mailto:${CONTACT.email}`} className={styles.link}>{CONTACT.email}</a>
          <br />
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className={styles.link}>{CONTACT.phone}</a>
        </p>
        <div className={styles.social}>
          {SOCIAL.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={s.label}>
              {s.icon === 'instagram' ? '📷' : '📌'}
            </a>
          ))}
        </div>
        <p className={styles.credits}>
          {COUPLE.groom} & {COUPLE.bride} · With love
        </p>
        <p className={styles.developer}>
          Developer: Marvin Owera
        </p>
      </div>
    </footer>
  );
}

