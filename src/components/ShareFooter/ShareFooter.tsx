import { COUPLE } from '../../constants';
import styles from './ShareFooter.module.css';

function shareUrl(): string { return typeof window !== 'undefined' ? window.location.href : ''; }

function messengerUrl(): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl())}`;
}

function onGenericShare(): void {
  if (navigator.share) navigator.share({ title: COUPLE.bride + ' & ' + COUPLE.groom + ' · Wedding', text: 'March 22, 2026 · 3:00 PM — ' + shareUrl(), url: shareUrl() }).catch(() => {});
  else navigator.clipboard?.writeText(shareUrl()).then(() => alert('Link copied to clipboard.'));
}

export default function ShareFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.label}>Share this invitation</p>
      <div className={styles.buttons}>
        <a href={messengerUrl()} target="_blank" rel="noopener noreferrer" className={styles.btn} aria-label="Share on Messenger">Messenger</a>
        <button type="button" className={styles.btn} onClick={onGenericShare}>Copy link</button>
      </div>
    </footer>
  );
}
