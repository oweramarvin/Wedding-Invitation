/**
 * Welcome / Love story: short note + scroll-triggered timeline of milestones.
 */

import { OUR_STORY, MILESTONES } from '../../constants';
import styles from './OurStory.module.css';

export interface OurStoryProps {
  visible?: boolean;
}

export default function OurStory({ visible = true }: OurStoryProps) {
  return (
    <section
      className={styles.section}
      data-section="story"
      aria-labelledby="our-story-heading"
    >
      <div
        className={styles.inner}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
        }}
      >
        <h2 id="our-story-heading" className={styles.title}>
          Our Story
        </h2>
        <span className={styles.divider} aria-hidden />
        <p className={styles.text}>{OUR_STORY}</p>

        <div className={styles.timeline}>
          {MILESTONES.map((m, i) => (
            <div key={i} className={styles.milestone} data-animate>
              <span className={styles.milestoneYear}>{m.year}</span>
              <h3 className={styles.milestoneTitle}>{m.title}</h3>
              <p className={styles.milestoneDesc}>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}