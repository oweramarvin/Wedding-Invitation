import { ATTRACTIONS } from '../../constants';
import styles from './LocalAttractions.module.css';

type LocalAttractionsProps = { visible?: boolean };

export default function LocalAttractions({ visible = true }: LocalAttractionsProps) {
  return (
    <section className={styles.section} data-section="attractions" aria-labelledby="attractions-heading">
      <div className={styles.inner} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
        <h2 id="attractions-heading" className={styles.title}>Local Attractions</h2>
        <p className={styles.intro}>For our out-of-town guests — a few places to explore.</p>
        <div className={styles.cards}>
          {ATTRACTIONS.map((a, i) => (
            <a key={i} href={a.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h3 className={styles.cardTitle}>{a.name}</h3>
              <p className={styles.cardDesc}>{a.description}</p>
              <span className={styles.cardLink}>Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
