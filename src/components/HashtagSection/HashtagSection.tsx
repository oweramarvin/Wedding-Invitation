import { HASHTAG } from '../../constants';
import styles from './HashtagSection.module.css';

export default function HashtagSection({ visible = true }: { visible?: boolean }) {
  const tag = `#${HASHTAG}`;
  return (
    <section className={styles.section} data-section="hashtag" aria-labelledby="hashtag-heading">
      <div className={styles.inner} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
        <h2 id="hashtag-heading" className={styles.title}>Share your moments</h2>
        <p className={styles.intro}>Use our hashtag when you post.</p>
        <button type="button" className={styles.hashtag} onClick={() => navigator.clipboard?.writeText(tag).then(() => alert('Copied!'))} aria-label={`Copy ${tag}`}>
          {tag}
        </button>
      </div>
    </section>
  );
}
