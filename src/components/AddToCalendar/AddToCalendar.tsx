import { COUPLE, WEDDING_DATE, VENUE } from '../../constants';
import styles from './AddToCalendar.module.css';

function googleUrl(): string {
  const start = WEDDING_DATE.toISOString().replace(/[-:]/g, '').slice(0, 15);
  const end = new Date(WEDDING_DATE.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').slice(0, 15);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${start}/${end}&text=${encodeURIComponent(COUPLE.bride + ' & ' + COUPLE.groom + ' — Wedding')}&details=${encodeURIComponent('Wedding celebration')}&location=${encodeURIComponent(VENUE.address)}`;
}

function appleUrl(): string {
  const start = WEDDING_DATE.toISOString().replace(/[-.]\d{3}/, '');
  const end = new Date(WEDDING_DATE.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-.]\d{3}/, '');
  return `https://calendar.apple.com/event?title=${encodeURIComponent(COUPLE.bride + ' & ' + COUPLE.groom + ' — Wedding')}&start=${start}&end=${end}&location=${encodeURIComponent(VENUE.address)}`;
}

export default function AddToCalendar() {
  return (
    <div className={styles.wrap}>
      <a href={googleUrl()} target="_blank" rel="noopener noreferrer" className={styles.btn}>Add to Google Calendar</a>
      <a href={appleUrl()} target="_blank" rel="noopener noreferrer" className={styles.btn}>Add to Apple Calendar</a>
    </div>
  );
}
