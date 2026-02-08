/**
 * Wedding Invitation — Patricia Reyes & Kervin Peña
 * Luxury, premium, interactive single-page experience.
 * Envelope landing → Hero → Story → Gallery → Details → Location → RSVP → Registry → Guestbook → FAQs → Footer
 */

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import EnvelopeLanding from './components/EnvelopeLanding/EnvelopeLanding';
import Hero from './components/Hero/Hero';
import OurStory from './components/OurStory/OurStory';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import VideoMessage from './components/VideoMessage/VideoMessage';
import EventSchedule from './components/EventSchedule/EventSchedule';
import NotesReminders from './components/NotesReminders/NotesReminders';
import RSVP from './components/RSVP/RSVP';
import Countdown from './components/Countdown/Countdown';
import AddToCalendar from './components/AddToCalendar/AddToCalendar';
import ShareFooter from './components/ShareFooter/ShareFooter';
import WeddingDetails from './components/WeddingDetails/WeddingDetails';
import LocationMaps from './components/LocationMaps/LocationMaps';
import RegistryGifts from './components/RegistryGifts/RegistryGifts';
import Guestbook from './components/Guestbook/Guestbook';
import FAQs from './components/FAQs/FAQs';
import HashtagSection from './components/HashtagSection/HashtagSection';
import LocalAttractions from './components/LocalAttractions/LocalAttractions';
import SiteFooter from './components/SiteFooter/SiteFooter';
import './App.css';

const SECTION_IDS = [
  'hero',
  'story',
  'gallery',
  'video',
  'schedule',
  'details',
  'location',
  'notes',
  'rsvp',
  'registry',
  'guestbook',
  'faqs',
  'hashtag',
  'attractions',
  'closing',
] as const;

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState<Set<string>>(new Set(['hero']));
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* Optional background music on first tap (add /public/sound.mp3) */
  useEffect(() => {
    if (muted) return;
    const audio = new Audio('/sound.mp3');
    audio.volume = 0.35;
    const play = () => {
      audio.play().catch(() => {});
      document.removeEventListener('click', play);
      document.removeEventListener('touchstart', play);
    };
    document.addEventListener('click', play, { once: true });
    document.addEventListener('touchstart', play, { once: true });
    return () => {
      audio.pause();
      document.removeEventListener('click', play);
      document.removeEventListener('touchstart', play);
    };
  }, [muted]);

  /* Scroll-triggered fade-in for sections */
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-section');
          if (id && entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(id));
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );
    const refs = sectionRefs.current;
    SECTION_IDS.forEach((id) => {
      const el = refs[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <EnvelopeLanding open={envelopeOpened} onOpen={handleEnvelopeOpen} />

      <div className={`invitation ${envelopeOpened ? 'invitation-visible' : ''}`}>
        <button
          type="button"
          className="sound-toggle"
          onClick={() => setMuted(!muted)}
          aria-label={muted ? 'Enable sound' : 'Mute sound'}
          title={muted ? 'Play music on first tap' : 'Mute'}
        >
          {muted ? '🔇' : '🔊'}
        </button>

        <div ref={setRef('hero')} data-section="hero">
        <Hero visible={visible.has('hero')}>
          <Countdown visible={visible.has('hero')} />
          <AddToCalendar />
        </Hero>
      </div>

      <div ref={setRef('story')} data-section="story">
        <OurStory visible={visible.has('story')} />
      </div>

      <div ref={setRef('gallery')} data-section="gallery">
        <PhotoGallery visible={visible.has('gallery')} />
      </div>

      <div ref={setRef('video')} data-section="video">
        <VideoMessage visible={visible.has('video')} />
      </div>

      <div ref={setRef('schedule')} data-section="schedule">
        <EventSchedule visible={visible.has('schedule')} />
      </div>

      <div ref={setRef('details')} data-section="details">
        <WeddingDetails visible={visible.has('details')} />
      </div>

      <div ref={setRef('location')} data-section="location">
        <LocationMaps visible={visible.has('location')} />
      </div>

      <div ref={setRef('notes')} data-section="notes">
        <NotesReminders visible={visible.has('notes')} />
      </div>

      <section
        className="rsvp-section"
        ref={setRef('rsvp')}
        data-section="rsvp"
        aria-labelledby="rsvp-heading"
      >
        <div
          className="rsvp-section-inner"
          style={{
            opacity: visible.has('rsvp') ? 1 : 0,
            transform: visible.has('rsvp') ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 id="rsvp-heading" className="rsvp-section-title">RSVP</h2>
          <p className="rsvp-section-intro">
            Please let us know if you will be able to join us. We cannot wait to celebrate with you.
          </p>
          <button
            type="button"
            className="rsvp-section-btn"
            onClick={() => setRsvpOpen(true)}
          >
            Respond
          </button>
        </div>
      </section>

      <RSVP open={rsvpOpen} onClose={() => setRsvpOpen(false)} />

      <div ref={setRef('registry')} data-section="registry">
        <RegistryGifts visible={visible.has('registry')} />
      </div>

      <div ref={setRef('guestbook')} data-section="guestbook">
        <Guestbook visible={visible.has('guestbook')} />
      </div>

      <div ref={setRef('faqs')} data-section="faqs">
        <FAQs visible={visible.has('faqs')} />
      </div>

      <div ref={setRef('hashtag')} data-section="hashtag">
        <HashtagSection visible={visible.has('hashtag')} />
      </div>

      <div ref={setRef('attractions')} data-section="attractions">
        <LocalAttractions visible={visible.has('attractions')} />
      </div>

      <section
        className="closing-section"
        ref={setRef('closing')}
        data-section="closing"
        aria-label="Closing message"
      >
        <div
          className="closing-inner"
          style={{
            opacity: visible.has('closing') ? 1 : 0,
            transform: visible.has('closing') ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <blockquote className="closing-quote">
            “In the arithmetic of love, one plus one equals everything.”
          </blockquote>
          <p className="closing-signature">We cannot wait to celebrate with you.</p>
        </div>
      </section>

      <ShareFooter />
      <SiteFooter />
    </div>
    </>
  );
}
