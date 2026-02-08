/**
 * Landing: Premium luxury olive envelope with elegant design.
 * Click to open flap and reveal invitation.
 */

import { COUPLE } from '../../constants';
import styles from './EnvelopeLanding.module.css';

export interface EnvelopeLandingProps {
  open: boolean;
  onOpen: () => void;
}

export default function EnvelopeLanding({ open, onOpen }: EnvelopeLandingProps) {
  return (
    <div className={`${styles.wrap} ${open ? styles.opened : ''}`} aria-hidden={open}>
      <div className={styles.envelopeContainer}>
        <button
          type="button"
          className={styles.envelopeBtn}
          onClick={onOpen}
          aria-label="Open invitation"
        >
          <div className={styles.envelope}>
            {/* Envelope body */}
            <div className={styles.body}>
              <div className={styles.content}>
                {/* Top quote */}
                <p className={styles.topQuote}>
                  "We decided on forever"
                </p>

                {/* Groom name */}
                <h2 className={styles.groomName}>{COUPLE.groom}</h2>

                {/* Wax seal */}
                <div className={styles.waxSeal}>
                  <div className={styles.sealInner}>
                    <svg
                      className={styles.sealIcon}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M50 30 L60 50 L50 70 L40 50 Z"
                        fill="currentColor"
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bride name */}
                <h2 className={styles.brideName}>{COUPLE.bride}</h2>

                {/* Bottom quote */}
                <p className={styles.bottomQuote}>
                  "Happily ever after starts here"
                </p>
              </div>
            </div>

            {/* Envelope flap */}
            <div className={styles.flap} aria-hidden />
          </div>
        </button>

        {/* Hint text */}
        <p className={styles.hint}>Click the envelope to open</p>
      </div>
    </div>
  );
}
