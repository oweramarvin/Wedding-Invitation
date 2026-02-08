import { VENUE } from '../../constants';
import styles from './Venue.module.css';

type VenueProps = { visible?: boolean };

export default function Venue({ visible = true }: VenueProps) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE.address)}`;
  return (
    <section className={styles.section} data-section="venue" aria-labelledby="venue-heading">
      <div className={styles.inner} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
        <h2 id="venue-heading" className={styles.title}>Venue</h2>
        <p className={styles.name}>{VENUE.name}</p>
        <p className={styles.address}>{VENUE.address}</p>
        <div className={styles.mapWrap}>
          <iframe title="Venue" src={VENUE.mapEmbedUrl} width="100%" height="260" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.map} />
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cta}>Open in Google Maps</a>
      </div>
    </section>
  );
}
