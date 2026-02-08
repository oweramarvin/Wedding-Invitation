import { useState } from 'react';
import { FAQS } from '../../constants';
import styles from './FAQs.module.css';

type FAQsProps = { visible?: boolean };

export default function FAQs({ visible = true }: FAQsProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <section className={styles.section} data-section="faqs" aria-labelledby="faqs-heading">
      <div className={styles.inner} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
        <h2 id="faqs-heading" className={styles.title}>FAQs</h2>
        <div className={styles.list}>
          {FAQS.map((faq, i) => (
            <div key={i} className={styles.item}>
              <button type="button" className={styles.trigger} onClick={() => setOpenId(openId === i ? null : i)} aria-expanded={openId === i} aria-controls={`faq-${i}`} id={`faq-btn-${i}`}>
                <span>{faq.q}</span>
                <span className={styles.icon} aria-hidden>{openId === i ? '−' : '+'}</span>
              </button>
              <div id={`faq-${i}`} className={`${styles.answer} ${openId === i ? styles.open : ''}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
