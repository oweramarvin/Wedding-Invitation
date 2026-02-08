/**
 * Video Message — embedded welcome / save-the-date video.
 */

import { VIDEO_MESSAGE } from '../../constants';
import styles from './VideoMessage.module.css';

export interface VideoMessageProps {
  visible?: boolean;
}

export default function VideoMessage({ visible = true }: VideoMessageProps) {
  return (
    <section
      className={styles.section}
      data-section="video"
      aria-labelledby="video-heading"
    >
      <div
        className={styles.inner}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <h2 id="video-heading" className={styles.title}>
          Our Journey Together
        </h2>
        <div className={styles.frame}>
          <iframe
            src={VIDEO_MESSAGE.embedSrc}
            title="Welcome video from the couple"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className={styles.iframe}
          />
        </div>
        {VIDEO_MESSAGE.caption && (
          <p className={styles.caption}>{VIDEO_MESSAGE.caption}</p>
        )}
      </div>
    </section>
  );
}
