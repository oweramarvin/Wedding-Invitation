/**
 * Wedding invitation — config & placeholder assets.
 * Replace with your own copy, venue, images, and video URLs.
 */

export const COUPLE = {
  bride: 'Patricia Reyes',
  groom: 'Kervin Peña',
} as const;

export const WEDDING_DATE = new Date('2026-03-22T15:00:00');
export const DATE_LABEL = 'March 22, 2026 · 3:00 PM';
export const LOCATION_LABEL = 'Iglesia Filipina Independiente - National Shrine and Cathedral of the Our Lady of Maulawin';

export const VENUE = {
  name: 'The Garden Pavilion',
  address: '123 Celebration Lane, City',
  /** Replace with your Google Maps embed URL (Share → Embed a map) */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.015892834099!2d-122.4194156846815!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890',
};

/** Hero: use image and/or silent looping video (romantic, soft). Replace with your own. */
export const HERO = {
  /** Background image (fallback or primary) */
  imageUrl:
    'https://drive.google.com/uc?export=view&id=1WtiQMBhEVnMRHNErXvhCEgwKIVeQw20D',
  /** Optional: silent looping background video. Set to '' to use only image. */
  videoUrl: '' as string,
};

/** Gallery: engagement / couple photos. Replace with your own URLs. */
export const GALLERY_IMAGES = [
  imageDriveLink('1vEZG0csmUT8b4nS0akYv0G83vyl1K-OY'),
  imageDriveLink('1m3_6Oseki09q8ML2hzuYvwe-94CXMmiH'),
  imageDriveLink('1GU6AmG4urspBHIXSbWevHGvryd9L5pzx'),
  imageDriveLink('1XiEpB2jEJNyZCiKmu4HsdGl1j9ZgiKlq'),
  imageDriveLink('1mHBx-hFwsWXZDQIUTVciHNs32KwATROG'),
  imageDriveLink('1XCI0xbd5qRRC-RcfW1sjFy9pjPud_avg',)
];

/** Video message: welcome / save-the-date embed. Replace with your YouTube or Vimeo embed URL. */
export const VIDEO_MESSAGE = {
  /** YouTube: Share → Embed → copy src. Or Vimeo embed URL. */
  embedSrc: "https://drive.google.com/file/d/1jjX9iT5xlzZp5WGMyPDYy4GR-a8n7vLJ/preview",
  caption:
    'We cannot wait to celebrate with you. Thank you for being part of our story.',
};

function imageDriveLink(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w800-h600`;
}

/** Event schedule (times and short descriptions). */
export const SCHEDULE = [
  {
    title: 'Ceremony',
    time: '3:00 PM',
    description:
      'Join us as we exchange vows. Seating begins thirty minutes prior.',
  },
  {
    title: 'Cocktail Hour',
    time: '4:00 PM',
    description: 'Light refreshments and conversation in the garden.',
  },
  {
    title: 'Reception',
    time: '5:00 PM',
    description: 'Dinner and dancing to follow.',
  },
];

/** Notes & reminders — dress code, gifts, special instructions. */
export const NOTES = {
  dressCode:
    'Formal attire. We kindly suggest cocktail or formal evening wear.',
  gifts:
    'Your presence is our greatest gift. For those who wish to honor us with a gesture, we have registered at [Registry Name].',
  special:
    'Please inform us of any dietary requirements when you RSVP. We will do our best to accommodate.',
};

/** Our Story — short romantic message from the couple. */
export const OUR_STORY =
  'Our story began with a chance meeting and grew with every laugh, every adventure, and every quiet moment in between. We are so grateful to be surrounded by the people who have shaped our journey, and we cannot wait to begin this new chapter with you by our side. Thank you for being part of our love story.';

/** Love story milestones (scroll-triggered timeline). */
export const MILESTONES = [
  { year: '2020', title: 'First met', description: 'A chance introduction that changed everything.' },
  { year: '2021', title: 'First date', description: 'Dinner under the stars and endless conversation.' },
  { year: '2023', title: 'Engagement', description: 'We said yes to forever.' },
  { year: '2026', title: 'Our wedding', description: 'The beginning of our greatest adventure.' },
];

/** Ceremony & reception (separate cards + maps). */
export const CEREMONY = {
  name: 'Iglesia Filipina Independiente - National Shrine and Cathedral of the Our Lady of Maulawin',
  address: '7CJ8+GP2, A. Mabini St, Santa Cruz, Laguna',
  time: '3:00 PM',
  mapLink: 'https://maps.app.goo.gl/tybcCuFH2Juptw6L6',
  // To get the embed URL: Open the mapLink, click Share → Embed a map, copy the src URL
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3675.2077259286016!2d121.4164341!3d14.2811976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e36c7cf3cbd9%3A0xdff2ae34296e65ea!2sIglesia%20Filipina%20Independiente%20-%20National%20Shrine%20and%20Cathedral%20of%20the%20Our%20Lady%20of%20Maulawin!5e1!3m2!1sen!2sph!4v1770533393565!5m2!1sen!2sph',
};

export const RECEPTION = {
  name: 'Gloria and roger private resort',
  address: 'Pantalan, 1410 Pedro Guevara Ave, Santa Cruz, 4009 Laguna',
  time: '5:00 PM',
  mapLink: 'https://maps.app.goo.gl/dNuQgDtiw8sL3MAA7',
  // To get the embed URL: Open the mapLink, click Share → Embed a map, copy the src URL
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1006110342137!2d121.41378619999999!3d14.2877564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e30015e1ad8b%3A0xe130cd3ba37f966e!2sGloria%20and%20Roger%20Private%20Resort!5e1!3m2!1sen!2sph!4v1770533485265!5m2!1sen!2sph',
};

/** Registry & gifts (luxury cards, optional honeymoon fund). */
export const REGISTRY = [
  { label: 'Registry One', url: 'https://m.me/patricia.zotomayor.reyes', description: 'Our curated selection of home and lifestyle gifts.' },
  { label: 'Honeymoon Fund', url: 'https://m.me/patricia.zotomayor.reyes', description: 'Contribute to our dream getaway.' },
];

/** FAQs (expandable panels). */
export const FAQS = [
  { q: 'What is the dress code?', a: 'Formal attire. We suggest cocktail or formal evening wear.' },
  { q: 'Are children welcome?', a: 'We love your little ones! Please indicate on your RSVP if you will be bringing children.' },
  { q: 'Is there parking?', a: 'Complimentary valet parking will be available at the venue.' },
  { q: 'When should I RSVP by?', a: 'Please respond by March 1, 2026.' },
];

/** Local attractions (cards for out-of-town guests). */
export const ATTRACTIONS = [
  { name: 'Downtown Gardens', description: 'A short walk from the venue. Perfect for a morning stroll.', link: '#' },
  { name: 'Historic District', description: 'Charming shops and cafés. 10 min drive.', link: '#' },
  { name: 'Sunset Point', description: 'Stunning views for golden hour. 15 min drive.', link: '#' },
];

/** Contact & footer. */
export const CONTACT = {
  email: 'patreyes0322@gmail.com',
  phone: 'penamckervin16@gmail.com',
};

export const SOCIAL = [
  { label: 'Instagram', url: '#', icon: 'instagram' },
  { label: 'Pinterest', url: '#', icon: 'pinterest' },
];

export const HASHTAG = 'PatriciaAndKervin2026';
