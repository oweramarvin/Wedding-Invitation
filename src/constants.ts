/**
 * Wedding invitation — config & placeholder assets.
 * Replace with your own copy, venue, images, and video URLs.
 */

export const COUPLE = {
  bride: 'Patricia Reyes',
  groom: 'Mc Kervin Peña',
} as const;

export const WEDDING_DATE = new Date('2026-03-22T13:00:00');
export const DATE_LABEL = 'March 22, 2026 · 1:00 PM';
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
    title: 'Church Ceremony',
    time: '1:00 PM',
    description:
      'The ceremony will begin exactly at 1:00 PM. We kindly ask everyone to arrive on time.'
  },
  {
    title: 'Reception & Dining',
    time: '2:30 PM',
    description:
      'Reception begins with food and fellowship as we gather and celebrate together.'
  },
  {
    title: 'Program Proper',
    time: '3:00 PM',
    description:
      'The official program starts, followed by special moments and presentations.'
  },
  {
    title: 'Games & Celebration',
    time: '4:00 PM',
    description:
      'Fun games, laughter, and party moments with family and friends.'
  },
  {
    title: 'Celebration Continues',
    time: '5:00 PM',
    description:
      'The celebration continues with dancing, music, and joyful moments.'
  }
];


/** Notes & reminders — dress code, gifts, special instructions. */
export const NOTES = {
  dressCode:
    'Formal attire. We kindly encourage guests to wear formal evening wear in shades of olive green.',
  gifts:
    'Your presence is our greatest gift. We are simply grateful to celebrate this day with you.',
  special:
    'We kindly ask everyone to arrive on time so we can begin the ceremony as scheduled.'
};


/** Our Story — short romantic message from the couple. */
export const OUR_STORY =
  'Our story started in the simplest way and slowly grew through laughter, challenges, and countless memories. We’re incredibly thankful for the people who walked with us along the way. Having you here as we begin this new chapter means more to us than words can say.';

/** Love story milestones (scroll-triggered timeline). */
export const MILESTONES = [
  {
    year: '2016',
    title: 'Where It All Began',
    description:
      'We met through a mutual friend. Kervin courted Patricia, she said yes, and our story officially started.'
  },
  {
    year: '2017',
    title: 'Growing Together',
    description:
      'We faced ups and downs like any real couple. Kervin met Patricia’s family, and our relationship became official.'
  },
  {
    year: '2018',
    title: 'A Special Milestone',
    description:
      'Patricia turned 18, and Kervin proudly stood as one of her 18 roses, an unforgettable moment for us.'
  },
  {
    year: '2019',
    title: 'Learning Life Together',
    description:
      'Patricia became a working student at McDonald’s while Kervin worked at Chowking. We learned responsibility and teamwork.'
  },
  {
    year: '2020',
    title: 'Through the Hardest Days',
    description:
      'The pandemic challenged us, and Patricia lost her mother. It was painful, but it made our bond even stronger.'
  },
  {
    year: '2021',
    title: 'A Beautiful Blessing',
    description:
      'Patricia became pregnant, and our hearts were filled with joy, hope, and excitement for what was coming.'
  },
  {
    year: '2022',
    title: 'Dreams and Miracles',
    description:
      'Patricia graduated from college, and our greatest blessing arrived, our daughter, Shanaiah Francine Peña.'
  },
  {
    year: '2023',
    title: 'Lessons in Love',
    description:
      'We faced challenges and separated for a short time, learning important lessons about love and understanding.'
  },
  {
    year: '2024',
    title: 'Finding Our Way Back',
    description:
      'We reconnected, healed, and grew stronger. Patricia also fulfilled her dream of becoming a public school teacher.'
  },
  {
    year: '2025',
    title: 'The Question',
    description:
      'After everything we’ve been through, Kervin proposed and Patricia said yes.'
  },
  {
    year: '2026',
    title: 'Our Forever',
    description:
      'With our family and loved ones as witnesses, we begin this new chapter together as husband and wife.'
  }
];


/** Ceremony & reception (separate cards + maps). */
export const CEREMONY = {
  name: 'National Shrine and Cathedral of the Our Lady of Maulawin (IFI)',
  address: '7CJ8+GP2, A. Mabini St, Santa Cruz, Laguna',
  time: '1:00 PM',
  mapLink: 'https://maps.app.goo.gl/tybcCuFH2Juptw6L6',
  // To get the embed URL: Open the mapLink, click Share → Embed a map, copy the src URL
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3675.2077259286016!2d121.4164341!3d14.2811976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e36c7cf3cbd9%3A0xdff2ae34296e65ea!2sIglesia%20Filipina%20Independiente%20-%20National%20Shrine%20and%20Cathedral%20of%20the%20Our%20Lady%20of%20Maulawin!5e1!3m2!1sen!2sph!4v1770533393565!5m2!1sen!2sph',
};

export const RECEPTION = {
  name: 'Gloria and Roger Private Resort',
  address: 'Pantalan, 1410 Pedro Guevara Ave, Santa Cruz, 4009 Laguna',
  time: '2:30 PM',
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
  {
    q: 'What is the dress code?',
    a: 'Formal attire. We kindly encourage guests to wear elegant evening wear, preferably in shades of olive green.'
  },
  {
    q: 'Are children invited?',
    a: 'We welcome adults for an intimate celebration. Thank you for understanding.'
  },
  {
    q: 'Is there parking at the venue?',
    a: 'Yes, complimentary parking is available at both the ceremony and reception locations.'
  },
  {
    q: 'Do I need to RSVP?',
    a: 'Your presence is our greatest joy. RSVP is optional, but if you are unable to attend, we would appreciate a kind message in advance.'
  }
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
