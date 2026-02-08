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
        <h2 id="registry-heading" className={styles.title}>Registry & Gifts</h2>
        <p className={styles.intro}>Your presence is our greatest gift. For those who wish to honor us with a gesture:</p>
        <div className={styles.cards}>
          {REGISTRY.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <span className={styles.cardLabel}>{item.label}</span>
              <p className={styles.cardDesc}>{item.description}</p>
              <span className={styles.cardCta}>View registry →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
