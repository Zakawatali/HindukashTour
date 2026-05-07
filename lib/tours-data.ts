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
  city: string
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

export interface City {
  id: string
  name: string
  region: string
  description: string
}

export const cities: City[] = [
  {
    id: 'gilgit',
    name: 'Gilgit',
    region: 'Gilgit-Baltistan',
    description: 'Gateway to the Karakoram, hub of mountain adventures'
  },
  {
    id: 'hunza',
    name: 'Hunza',
    region: 'Gilgit-Baltistan',
    description: 'Legendary valley known for natural beauty and longevity'
  },
  {
    id: 'chitral',
    name: 'Chitral',
    region: 'Khyber Pakhtunkhwa',
    description: 'Remote region with dramatic mountain landscapes'
  },
  {
    id: 'skardu',
    name: 'Skardu',
    region: 'Gilgit-Baltistan',
    description: 'Adventure capital surrounded by glaciers and peaks'
  },
  {
    id: 'ismail-abad',
    name: 'Ismail Abad',
    region: 'Gilgit-Baltistan',
    description: 'Pristine mountain village at the base of Hindu Kush'
  },
  {
    id: 'brogil',
    name: 'Brogil',
    region: 'Northern Pakistan',
    description: 'Remote high altitude pass area for expedition trekking'
  },
  {
    id: 'karimabad',
    name: 'Karimabad',
    region: 'Gilgit-Baltistan',
    description: 'Heart of Hunza Valley with historical forts'
  },
  {
    id: 'rawalpindi',
    name: 'Rawalpindi',
    region: 'Punjab',
    description: 'Starting point for treks to nearby alpine regions'
  }
]

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
    city: 'gilgit',
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
    city: 'hunza',
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
    city: 'rawalpindi',
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
    city: 'chitral',
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
  },
  {
    id: 'skardu-deosai-adventure',
    title: 'Skardu & Deosai Plains Trek',
    shortDescription: 'Experience the breathtaking Deosai Plains, the world\'s second highest plateau',
    description: 'Explore the spectacular Deosai plateau at 4,100m surrounded by alpine meadows and pristine mountain peaks.',
    image: '/tours/skardu-deosai.jpg',
    duration: '6 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,100m',
    season: ['June', 'July', 'August', 'September'],
    price: 899,
    rating: 4.9,
    reviews: 156,
    city: 'skardu',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Skardu',
        description: 'Arrive in Skardu and acclimatize. Visit local markets and explore the town.'
      },
      {
        day: 2,
        title: 'Skardu to Deosai Gate',
        description: 'Drive to the entrance of Deosai plateau with scenic stops along the way.'
      },
      {
        day: 3,
        title: 'Deosai Plains Trek Day 1',
        description: 'Trek through alpine meadows with breathtaking views of surrounding peaks.'
      },
      {
        day: 4,
        title: 'Deosai Plains Trek Day 2',
        description: 'Continue exploring the plateau, visit alpine lakes and wildflower meadows.'
      },
      {
        day: 5,
        title: 'Deosai to Skardu',
        description: 'Trek back to the plateau entrance and drive to Skardu.'
      },
      {
        day: 6,
        title: 'Departure from Skardu',
        description: 'Optional morning exploration before departure.'
      }
    ]
  },
  {
    id: 'skardu-k2-base-camp',
    title: 'K2 Base Camp Expedition',
    shortDescription: 'Trek to the base camp of the world\'s second highest peak',
    description: 'An epic expedition trek to K2 base camp with views of Karakoram peaks and pristine glaciers.',
    image: '/tours/k2-base-camp.jpg',
    duration: '14 Days',
    difficulty: 'Challenging',
    maxAltitude: '5,000m',
    season: ['June', 'July', 'August'],
    price: 2199,
    rating: 4.8,
    reviews: 89,
    city: 'skardu',
    itinerary: [
      {
        day: 1,
        title: 'Skardu Arrival',
        description: 'Meet team and acclimatize in Skardu.'
      },
      {
        day: 2,
        title: 'Skardu to Askole',
        description: 'Drive to the start of the trek, scenic journey through Karakoram Highway.'
      },
      {
        day: 3,
        title: 'Askole to Paiju',
        description: 'Trek to Paiju camp.'
      },
      {
        day: 4,
        title: 'Paiju to Urdokas',
        description: 'Trek through moraine fields.'
      },
      {
        day: 5,
        title: 'Urdokas to Concordia',
        description: 'Trek to Concordia with views of K2, Broad Peak, and other giants.'
      },
      {
        day: 6,
        title: 'Concordia to K2 Base Camp',
        description: 'Final trek to K2 base camp at 5,000m.'
      },
      {
        day: 7,
        title: 'K2 Base Camp Rest',
        description: 'Rest day at base camp with photography opportunities.'
      },
      {
        day: 8,
        title: 'K2 Base Camp Exploration',
        description: 'Explore the base camp and surrounding peaks.'
      },
      {
        day: 9,
        title: 'K2 Base Camp to Concordia',
        description: 'Trek back towards Concordia.'
      },
      {
        day: 10,
        title: 'Concordia to Urdokas',
        description: 'Continue descent.'
      },
      {
        day: 11,
        title: 'Urdokas to Paiju',
        description: 'Trek back to Paiju.'
      },
      {
        day: 12,
        title: 'Paiju to Askole',
        description: 'Final trek back to Askole.'
      },
      {
        day: 13,
        title: 'Askole to Skardu',
        description: 'Drive back to Skardu.'
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Departure from Skardu.'
      }
    ]
  },
  {
    id: 'karimabad-fort-valley',
    title: 'Karimabad Heritage & Culture Trek',
    shortDescription: 'Explore ancient forts and experience Hunza Valley culture in Karimabad',
    description: 'Discover the historical heritage of Karimabad including ancient forts and traditional Hunza villages.',
    image: '/tours/karimabad-fort.jpg',
    duration: '5 Days',
    difficulty: 'Easy',
    maxAltitude: '2,400m',
    season: ['April', 'May', 'June', 'September', 'October'],
    price: 749,
    rating: 4.7,
    reviews: 112,
    city: 'karimabad',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Karimabad',
        description: 'Arrive and explore the charming village. Visit local bazaar and get oriented.'
      },
      {
        day: 2,
        title: 'Baltit Fort & Altit Fort Tour',
        description: 'Explore two historic forts with panoramic views of Hunza Valley.'
      },
      {
        day: 3,
        title: 'Village Trek & Local Culture',
        description: 'Trek through local villages, visit apricot orchards, and meet local families.'
      },
      {
        day: 4,
        title: 'Valley Exploration',
        description: 'Visit ancient irrigation systems and scenic viewpoints around Karimabad.'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Depart with unforgettable memories of Hunza culture.'
      }
    ]
  },
  {
    id: 'ismail-abad-alpine',
    title: 'Ismail Abad Alpine Circuit',
    shortDescription: 'Pristine high altitude circuit trek around Ismail Abad valley',
    description: 'Trek around the scenic Ismail Abad valley with views of the Hindu Kush and pristine alpine environments.',
    image: '/tours/ismail-abad.jpg',
    duration: '7 Days',
    difficulty: 'Challenging',
    maxAltitude: '4,200m',
    season: ['July', 'August', 'September'],
    price: 1199,
    rating: 4.8,
    reviews: 78,
    city: 'ismail-abad',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ismail Abad',
        description: 'Reach the remote village and meet local guides.'
      },
      {
        day: 2,
        title: 'Alpine Circuit Day 1',
        description: 'Begin trek through pristine alpine meadows.'
      },
      {
        day: 3,
        title: 'Alpine Circuit Day 2',
        description: 'Trek to high altitude camp with views of surrounding peaks.'
      },
      {
        day: 4,
        title: 'Alpine Circuit Day 3',
        description: 'Complete circuit around the valley with photography opportunities.'
      },
      {
        day: 5,
        title: 'Alpine Circuit Day 4',
        description: 'Final high altitude trekking through pristine wilderness.'
      },
      {
        day: 6,
        title: 'Return to Ismail Abad',
        description: 'Trek back to the village.'
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Safe departure with memories of pristine mountains.'
      }
    ]
  },
  {
    id: 'brogil-pass-expedition',
    title: 'Brogil Valley Expedition',
    shortDescription: 'Explore the remote Brogil Valley with nomadic herders and pristine wilderness',
    description: 'An exclusive expedition to the remote Brogil Valley to experience nomadic culture and high altitude wilderness.',
    image: '/tours/brogil-valley.jpg',
    duration: '12 Days',
    difficulty: 'Challenging',
    maxAltitude: '3,850m',
    season: ['July', 'August'],
    price: 1899,
    rating: 4.7,
    reviews: 54,
    city: 'brogil',
    itinerary: [
      {
        day: 1,
        title: 'Brogil Valley Entry',
        description: 'Arrive at the Brogil Valley and establish base camp.'
      },
      {
        day: 2,
        title: 'Valley Exploration Day 1',
        description: 'Trek through pristine valleys and meet nomadic herders.'
      },
      {
        day: 3,
        title: 'Valley Exploration Day 2',
        description: 'Continue exploring with cultural interactions.'
      },
      {
        day: 4,
        title: 'High Altitude Trek',
        description: 'Trek to high altitude passes for panoramic views.'
      },
      {
        day: 5,
        title: 'Brogil Pass Approach',
        description: 'Approach the historic Brogil Pass.'
      },
      {
        day: 6,
        title: 'At the Pass',
        description: 'Spend a day at Brogil Pass exploring the region.'
      },
      {
        day: 7,
        title: 'Return Trek Day 1',
        description: 'Begin return journey through remote areas.'
      },
      {
        day: 8,
        title: 'Return Trek Day 2',
        description: 'Continue return journey.'
      },
      {
        day: 9,
        title: 'Return Trek Day 3',
        description: 'Trek back through pristine valleys.'
      },
      {
        day: 10,
        title: 'Return Trek Day 4',
        description: 'Final approach to civilization.'
      },
      {
        day: 11,
        title: 'Return Trek Day 5',
        description: 'Trek back to base.'
      },
      {
        day: 12,
        title: 'Departure',
        description: 'Safe departure with unforgettable expedition memories.'
      }
    ]
  },
  {
    id: 'hunza-golden-peak',
    title: 'Hunza Golden Peak Climb',
    shortDescription: 'Climbing expedition on Hunza Golden Peak with technical challenge',
    description: 'A technical climbing expedition on one of Hunza\'s most iconic and scenic peaks with rock and ice climbing sections.',
    image: '/tours/golden-peak.jpg',
    duration: '9 Days',
    difficulty: 'Challenging',
    maxAltitude: '4,800m',
    season: ['July', 'August'],
    price: 1699,
    rating: 4.9,
    reviews: 63,
    city: 'hunza',
    itinerary: [
      {
        day: 1,
        title: 'Hunza Valley Base',
        description: 'Arrive and acclimatize in Hunza Valley.'
      },
      {
        day: 2,
        title: 'Training Day',
        description: 'Training on basic climbing and alpine techniques.'
      },
      {
        day: 3,
        title: 'Approach Trek',
        description: 'Trek to advanced base camp.'
      },
      {
        day: 4,
        title: 'Acclimatization Climb',
        description: 'Acclimatization climb to prepare for main summit.'
      },
      {
        day: 5,
        title: 'Rock Climbing Day',
        description: 'Technical rock climbing training and practice.'
      },
      {
        day: 6,
        title: 'Ice Climbing Training',
        description: 'Ice climbing techniques and preparation.'
      },
      {
        day: 7,
        title: 'Summit Attempt Day 1',
        description: 'Begin summit push to high altitude camp.'
      },
      {
        day: 8,
        title: 'Summit Day',
        description: 'Final summit push on Golden Peak.'
      },
      {
        day: 9,
        title: 'Descent & Departure',
        description: 'Descend and return to Hunza Valley.'
      }
    ]
  },
  {
    id: 'gilgit-adventure-combo',
    title: 'Gilgit Adventure Combo',
    shortDescription: 'Multi-peak trekking combining several peaks around Gilgit region',
    description: 'An adventure combining multiple peak treks with glacier crossings and high altitude camping experiences.',
    image: '/tours/gilgit-combo.jpg',
    duration: '8 Days',
    difficulty: 'Challenging',
    maxAltitude: '4,600m',
    season: ['July', 'August', 'September'],
    price: 1399,
    rating: 4.8,
    reviews: 94,
    city: 'gilgit',
    itinerary: [
      {
        day: 1,
        title: 'Gilgit Base',
        description: 'Arrive in Gilgit and prepare for multi-peak adventure.'
      },
      {
        day: 2,
        title: 'Peak 1 Trek',
        description: 'Trek to first peak with views of Karakoram.'
      },
      {
        day: 3,
        title: 'Peak 1 Climb',
        description: 'Climb and summit first peak.'
      },
      {
        day: 4,
        title: 'Glacier Traverse',
        description: 'Cross pristine glacier to reach next valley.'
      },
      {
        day: 5,
        title: 'Peak 2 Trek',
        description: 'Trek to second peak.'
      },
      {
        day: 6,
        title: 'Peak 2 Climb',
        description: 'Climb and summit second peak.'
      },
      {
        day: 7,
        title: 'Return Trek',
        description: 'Trek back through the mountains.'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Return to Gilgit with adventure memories.'
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
