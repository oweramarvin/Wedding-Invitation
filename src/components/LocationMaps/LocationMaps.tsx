import { useState } from 'react';
import { CEREMONY, RECEPTION } from '../../constants';
import styles from './LocationMaps.module.css';

function DirectionsPopup({ address, name, mapLink, onClose }: { address: string; name: string; mapLink?: string; onClose: () => void }) {
  const url = mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return (
    <div className={styles.popupOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Directions">
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.popupClose} onClick={onClose} aria-label="Close">×</button>
        <h3 className={styles.popupTitle}>{name}</h3>
        <p className={styles.popupAddress}>{address}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.popupBtn}>Get directions</a>
      </div>
    </div>
  );
}

export default function LocationMaps({ visible = true }: { visible?: boolean }) {
  const [directionsFor, setDirectionsFor] = useState<'ceremony' | 'reception' | null>(null);

  const renderCard = (type: 'ceremony' | 'reception', data: typeof CEREMONY) => (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{type === 'ceremony' ? 'Ceremony' : 'Reception'}</h3>
      <p className={styles.cardName}>{data.name}</p>
      <p className={styles.cardTime}>{data.time}</p>
      <p className={styles.cardAddress}>{data.address}</p>

      {/* Google Map inside the card */}
      <div className={styles.mapContainer}>
        <iframe
          title={type}
          src={data.mapEmbedUrl}
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <button
        type="button"
        className={styles.cardBtn}
        onClick={() => setDirectionsFor(type)}
      >
        Get directions
      </button>
    </article>
  );

  return (
    <section className={styles.section} data-section="location" aria-labelledby="location-heading">
      <div className={styles.inner} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>
        <h2 id="location-heading" className={styles.title}>Venue & Location</h2>
        <div className={styles.cards}>
          {renderCard('ceremony', CEREMONY)}
          {renderCard('reception', RECEPTION)}
        </div>
      </div>

      {directionsFor === 'ceremony' && <DirectionsPopup address={CEREMONY.address} name={CEREMONY.name} mapLink={CEREMONY.mapLink} onClose={() => setDirectionsFor(null)} />}
      {directionsFor === 'reception' && <DirectionsPopup address={RECEPTION.address} name={RECEPTION.name} mapLink={RECEPTION.mapLink} onClose={() => setDirectionsFor(null)} />}
    </section>
  );
}
