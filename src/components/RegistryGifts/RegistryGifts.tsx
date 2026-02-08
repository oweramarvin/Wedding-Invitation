/**
 * Registry / gifts: luxury cards with hover lift and glow, optional honeymoon fund.
 */

import { REGISTRY } from '../../constants';
import styles from './RegistryGifts.module.css';

export interface RegistryGiftsProps {
  visible?: boolean;
}

export default function RegistryGifts({ visible = true }: RegistryGiftsProps) {
  return (
    <section className={styles.section} data-section="registry" aria-labelledby="registry-heading">
      <div
        className={styles.inner}
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 id="registry-heading" className={styles.title}>
  Gifts & Well Wishes
</h2>

<p className={styles.intro}>
  Your presence on our special day means the world to us.
  For those who wish to share a gift or send their love, you may reach out to us directly.
</p>

<div className={styles.cards}>
  {REGISTRY.map((item, i) => (
    <a
      key={i}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      aria-label={`Open ${item.label} in Messenger`}
    >
      <span className={styles.cardLabel}>{item.label}</span>
      <p className={styles.cardDesc}>{item.description}</p>
      <span className={styles.cardCta}>Message us →</span>
    </a>
  ))}
</div>

      </div>
    </section>
  );
}
