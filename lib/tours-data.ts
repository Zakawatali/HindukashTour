export interface Tour {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  maxAltitude: string
  season: string[]
  price: number
  rating: number
  reviews: number
  itinerary: {
    day: number
    title: string
    description: string
  }[]
}

export interface Destination {
  id: string
  name: string
  description: string
  image: string
  region: string
  highlights: string[]
}

export interface HeroSlide {
  id: string
  image: string
  title: string
  subtitle: string
  alt: string
}

export const tours: Tour[] = [
  {
    id: 'rakaposhi-base-camp',
    title: 'Rakaposhi Base Camp Trek',
    shortDescription: 'Stunning views of the 7,788m Rakaposhi peak with lush alpine meadows',
    description: 'Experience breathtaking views of one of the world\'s most beautiful mountains on this challenging trek through pristine wilderness.',
    image: '/tours/rakaposhi.jpg',
    duration: '7 Days',
    difficulty: 'Challenging',
    maxAltitude: '4,500m',
    season: ['July', 'August', 'September'],
    price: 1299,
    rating: 4.8,
    reviews: 124,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Gilgit',
        description: 'Meet our guide and transfer to Gilgit. Acclimatization walk around the city.'
      },
      {
        day: 2,
        title: 'Gilgit to Astore',
        description: 'Drive to Astore valley, one of the most scenic regions in northern Pakistan.'
      },
      {
        day: 3,
        title: 'Astore to Pathare',
        description: 'Trek through oak and pine forests with stunning views of the surrounding peaks.'
      },
      {
        day: 4,
        title: 'Pathare to Rakaposhi Base Camp',
        description: 'Reach the base camp with direct views of the mighty Rakaposhi peak.'
      },
      {
        day: 5,
        title: 'Acclimatization Day at Base Camp',
        description: 'Rest day with optional exploration of nearby viewpoints.'
      },
      {
        day: 6,
        title: 'Base Camp to Pathare',
        description: 'Trek back down through alpine meadows and forests.'
      },
      {
        day: 7,
        title: 'Pathare to Gilgit',
        description: 'Final trek and drive back to Gilgit for departure.'
      }
    ]
  },
  {
    id: 'hunza-fairy-meadows',
    title: 'Hunza Valley & Fairy Meadows',
    shortDescription: 'Explore the legendary Hunza Valley and trek to pristine high altitude meadows',
    description: 'Discover one of the world\'s most mystical destinations with stunning mountain vistas and ancient culture.',
    image: '/tours/hunza.jpg',
    duration: '8 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,800m',
    season: ['June', 'July', 'August', 'September'],
    price: 1099,
    rating: 4.9,
    reviews: 186,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Hunza',
        description: 'Explore Hunza Valley, visit Karimabad fort and local markets.'
      },
      {
        day: 2,
        title: 'Hunza to Dunga Gali',
        description: 'Trek through scenic trails with views of snow-capped peaks.'
      },
      {
        day: 3,
        title: 'Dunga Gali to Fairy Meadows',
        description: 'Reach the magical Fairy Meadows, one of the most beautiful alpine pastures.'
      },
      {
        day: 4,
        title: 'Fairy Meadows Exploration',
        description: 'Rest and explore nearby viewpoints and waterfalls.'
      },
      {
        day: 5,
        title: 'Return to Dunga Gali',
        description: 'Trek back down with fresh perspectives on the landscape.'
      },
      {
        day: 6,
        title: 'Dunga Gali to Hunza',
        description: 'Final trek back to the Hunza Valley.'
      },
      {
        day: 7,
        title: 'Hunza Cultural Tour',
        description: 'Visit ancient forts, apiaries, and meet local communities.'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Safe departure with unforgettable memories.'
      }
    ]
  },
  {
    id: 'siri-paye-trek',
    title: 'Siri Paye Alpine Trek',
    shortDescription: 'Walk through enchanting pine forests and rolling alpine meadows',
    description: 'A moderate trek perfect for beginners, through stunning Himalayan landscapes filled with biodiversity.',
    image: '/tours/siri-paye.jpg',
    duration: '4 Days',
    difficulty: 'Easy',
    maxAltitude: '2,900m',
    season: ['April', 'May', 'June', 'September', 'October'],
    price: 599,
    rating: 4.7,
    reviews: 95,
    itinerary: [
      {
        day: 1,
        title: 'Rawalpindi to Siri Paye',
        description: 'Drive to Siri Paye and explore the surrounding trails.'
      },
      {
        day: 2,
        title: 'Siri Paye to Siri Paye Lake',
        description: 'Trek to a pristine alpine lake surrounded by pine forests.'
      },
      {
        day: 3,
        title: 'Lake Area Exploration',
        description: 'Explore the area, wildlife spotting, and photography opportunities.'
      },
      {
        day: 4,
        title: 'Return to Rawalpindi',
        description: 'Trek back and transfer to Rawalpindi.'
      }
    ]
  },
  {
    id: 'brogil-pass-trek',
    title: 'Brogil Pass Adventure',
    shortDescription: 'Remote high altitude pass trek with views of the Pamir and Hindu Kush',
    description: 'An expedition-style trek across one of Pakistan\'s most remote and pristine high altitude passes.',
    image: '/tours/brogil.jpg',
    duration: '10 Days',
    difficulty: 'Challenging',
    maxAltitude: '3,975m',
    season: ['July', 'August', 'September'],
    price: 1599,
    rating: 4.6,
    reviews: 67,
    itinerary: [
      {
        day: 1,
        title: 'Chitral Arrival',
        description: 'Reach Chitral and meet your expedition team.'
      },
      {
        day: 2,
        title: 'Chitral to Brogil',
        description: 'Drive to the starting point of the trek.'
      },
      {
        day: 3,
        title: 'Brogil to Shandur Pass Base',
        description: 'First stage of trekking through remote valleys.'
      },
      {
        day: 4,
        title: 'Trek to High Camp',
        description: 'Continue trek with altitude gain.'
      },
      {
        day: 5,
        title: 'Cross Brogil Pass',
        description: 'Reach the pass at 3,975m with panoramic views.'
      },
      {
        day: 6,
        title: 'Descent to Wakhan',
        description: 'Trek down to lower elevation camps.'
      },
      {
        day: 7,
        title: 'Wakhan Valley Trek',
        description: 'Explore the remote Wakhan valley.'
      },
      {
        day: 8,
        title: 'Return Trek',
        description: 'Begin return journey.'
      },
      {
        day: 9,
        title: 'Final Trek',
        description: 'Final trekking stage back to civilization.'
      },
      {
        day: 10,
        title: 'Return to Chitral',
        description: 'End of expedition and departure.'
      }
    ]
  }
]

export const destinations: Destination[] = [
  {
    id: 'hunza',
    name: 'Hunza Valley',
    description: 'A legendary destination known for the longevity of its inhabitants and stunning natural beauty.',
    image: '/destinations/hunza.jpg',
    region: 'Gilgit-Baltistan',
    highlights: ['Karimabad Fort', 'Fairy Meadows', 'Attabad Lake', 'Ultar Sar Peak', 'Local Markets']
  },
  {
    id: 'chitral',
    name: 'Chitral Region',
    description: 'A remote and pristine region with some of the world\'s most dramatic mountain landscapes.',
    image: '/destinations/chitral.jpg',
    region: 'Khyber Pakhtunkhwa',
    highlights: ['Shandur Pass', 'Kalash Valleys', 'Tirich Mir Peak', 'Brogil Pass', 'Local Culture']
  },
  {
    id: 'gilgit',
    name: 'Gilgit-Baltistan',
    description: 'The hub of Himalayan adventure, surrounded by the world\'s highest mountain ranges.',
    image: '/destinations/gilgit.jpg',
    region: 'Gilgit-Baltistan',
    highlights: ['Rakaposhi Peak', 'Deosai Plains', 'Shimshal Valley', 'Mountain Trails', 'Indigenous Culture']
  },
  {
    id: 'hindukush',
    name: 'Hindu Kush Mountains',
    description: 'Ancient mountain range with pristine wilderness and remote high altitude passes.',
    image: '/destinations/hindukush.jpg',
    region: 'Northern Pakistan',
    highlights: ['Brogil Pass', 'Alpine Meadows', 'Remote Villages', 'Mountain Photography', 'Expedition Routes']
  }
]

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/hero-slides/gilgit-1.jpg',
    title: 'Discover Gilgit Baltistan',
    subtitle: 'Where towering peaks meet pristine valleys in the heart of the Karakoram',
    alt: 'Gilgit Baltistan mountain landscape with Karakoram Highway'
  },
  {
    id: 'slide-2',
    image: '/hero-slides/gilgit-2.jpg',
    title: 'Hunza Valley Adventures',
    subtitle: 'Explore the legendary valley of apricots and timeless mountain beauty',
    alt: 'Hunza Valley panoramic view with blooming orchards'
  },
  {
    id: 'slide-3',
    image: '/hero-slides/gilgit-3.jpg',
    title: 'Alpine Expeditions',
    subtitle: 'Experience the raw power and majesty of the world\'s greatest mountain ranges',
    alt: 'Karakoram mountain range at dawn'
  },
  {
    id: 'slide-4',
    image: '/hero-slides/gilgit-4.jpg',
    title: 'Mountain Summits',
    subtitle: 'Trek to legendary peaks and uncover the secrets of the high altitude wilderness',
    alt: 'Rakaposhi mountain with trekkers on alpine meadow'
  },
  {
    id: 'slide-5',
    image: '/hero-slides/gilgit-5.jpg',
    title: 'Alpine Lakes & Peaks',
    subtitle: 'Discover untouched wilderness and crystal clear waters reflecting the sky',
    alt: 'Alpine lake surrounded by snow-capped mountains'
  }
]

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'United Kingdom',
    text: 'An absolutely incredible experience! The guides were knowledgeable, the scenery was breathtaking, and the attention to detail was outstanding.',
    rating: 5,
    image: '/testimonials/sarah.jpg'
  },
  {
    name: 'Marco Rossi',
    location: 'Italy',
    text: 'The Fairy Meadows trek changed my life. Never have I seen such pristine beauty and felt so connected to nature.',
    rating: 5,
    image: '/testimonials/marco.jpg'
  },
  {
    name: 'Lisa Chen',
    location: 'Singapore',
    text: 'Professional, safe, and unforgettable. Hindukash Trek and Tour exceeded all my expectations.',
    rating: 5,
    image: '/testimonials/lisa.jpg'
  }
]
