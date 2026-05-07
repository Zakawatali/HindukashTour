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
  },
  // SKARDU TOURS
  {
    id: 'skardu-3days-express',
    title: 'Skardu Express - 3 Days',
    shortDescription: 'Quick Skardu experience with Deosai Plains and Shangrila Resort',
    description: 'A compact 3-day tour covering the highlights of Skardu including the scenic Deosai plateau and pristine Shangrila.',
    image: '/tours/skardu-express.jpg',
    duration: '3 Days',
    difficulty: 'Easy',
    maxAltitude: '4,100m',
    season: ['May', 'June', 'July', 'August', 'September'],
    price: 549,
    rating: 4.8,
    reviews: 234,
    city: 'skardu',
    itinerary: [
      {
        day: 1,
        title: 'Skardu Arrival & Shangrila',
        description: 'Arrive in Skardu, visit the beautiful Shangrila Resort with alpine meadows and lake views.'
      },
      {
        day: 2,
        title: 'Deosai Plains',
        description: 'Full day at Deosai plateau enjoying alpine meadows, wildflowers, and panoramic mountain views.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Morning exploration before departure or visit local bazaar.'
      }
    ]
  },
  {
    id: 'skardu-4days-complete',
    title: 'Skardu Complete - 4 Days',
    shortDescription: 'Comprehensive Skardu tour with Deosai, Shangrila, and local culture',
    description: 'A complete 4-day experience combining the best of Skardu including Deosai Plains, Shangrila, and traditional markets.',
    image: '/tours/skardu-complete.jpg',
    duration: '4 Days',
    difficulty: 'Easy',
    maxAltitude: '4,100m',
    season: ['May', 'June', 'July', 'August', 'September'],
    price: 699,
    rating: 4.9,
    reviews: 267,
    city: 'skardu',
    itinerary: [
      {
        day: 1,
        title: 'Skardu Arrival & Exploration',
        description: 'Arrive, acclimatize, visit local bazaars and explore the town.'
      },
      {
        day: 2,
        title: 'Deosai Plains Adventure',
        description: 'Full day at Deosai with guided nature walks and photography.'
      },
      {
        day: 3,
        title: 'Shangrila & Twin Lakes',
        description: 'Visit Shangrila Resort, explore Twin Lakes with pristine alpine scenery.'
      },
      {
        day: 4,
        title: 'Skardu Heritage & Departure',
        description: 'Visit Skardu Fort, Khardung Glacier viewpoint, and depart.'
      }
    ]
  },
  {
    id: 'skardu-5days-glacier',
    title: 'Skardu Glacier Experience - 5 Days',
    shortDescription: 'Skardu with glacier trekking including Khardung Glacier trek',
    description: 'A 5-day adventure featuring Skardu valleys and glaciers with light trekking to Khardung Glacier and ice caves.',
    image: '/tours/skardu-glacier.jpg',
    duration: '5 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,900m',
    season: ['June', 'July', 'August', 'September'],
    price: 899,
    rating: 4.8,
    reviews: 189,
    city: 'skardu',
    itinerary: [
      {
        day: 1,
        title: 'Skardu Arrival',
        description: 'Arrive and acclimatize in Skardu town.'
      },
      {
        day: 2,
        title: 'Deosai Plains Full Day',
        description: 'Explore the world\'s second highest plateau with guides.'
      },
      {
        day: 3,
        title: 'Khardung Glacier Trek',
        description: 'Trek to Khardung Glacier with views of pristine ice formations.'
      },
      {
        day: 4,
        title: 'Shangrila & Twin Lakes',
        description: 'Visit scenic Shangrila Resort and Twin Lakes region.'
      },
      {
        day: 5,
        title: 'Skardu Culture & Departure',
        description: 'Local markets, Skardu Fort, and safe departure.'
      }
    ]
  },
  {
    id: 'skardu-7days-ultimate',
    title: 'Skardu Ultimate - 7 Days',
    shortDescription: 'Ultimate Skardu tour with glaciers, plateaus, lakes and mountain treks',
    description: 'The complete 7-day Skardu experience including Deosai, Khardung Glacier, Shangrila, and remote mountain villages.',
    image: '/tours/skardu-ultimate.jpg',
    duration: '7 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,100m',
    season: ['June', 'July', 'August', 'September'],
    price: 1299,
    rating: 4.9,
    reviews: 312,
    city: 'skardu',
    itinerary: [
      {
        day: 1,
        title: 'Skardu Arrival & Acclimatization',
        description: 'Arrive, rest, and explore Skardu town bazaars.'
      },
      {
        day: 2,
        title: 'Deosai Plains Day 1',
        description: 'First day at Deosai with wildflower meadows and alpine lakes.'
      },
      {
        day: 3,
        title: 'Deosai Plains Day 2',
        description: 'Continue exploring Deosai with photography and nature walks.'
      },
      {
        day: 4,
        title: 'Khardung Glacier Trek',
        description: 'Trek to Khardung Glacier exploring ice formations and glacier landscape.'
      },
      {
        day: 5,
        title: 'Shangrila & Twin Lakes',
        description: 'Visit the serene Shangrila Resort with pristine mountain lake views.'
      },
      {
        day: 6,
        title: 'Astore Valley Trek',
        description: 'Trek to scenic Astore Valley with mountain village exploration.'
      },
      {
        day: 7,
        title: 'Skardu Heritage & Departure',
        description: 'Visit Skardu Fort and Khardung viewpoints before departure.'
      }
    ]
  },
  // HUNZA TOURS
  {
    id: 'hunza-3days-classic',
    title: 'Hunza Valley Classic - 3 Days',
    shortDescription: 'Classic Hunza experience with Karimabad forts and alpine meadows',
    description: 'A classic 3-day tour of the legendary Hunza Valley including ancient forts and scenic mountain villages.',
    image: '/tours/hunza-classic.jpg',
    duration: '3 Days',
    difficulty: 'Easy',
    maxAltitude: '2,500m',
    season: ['April', 'May', 'June', 'September', 'October'],
    price: 499,
    rating: 4.8,
    reviews: 289,
    city: 'hunza',
    itinerary: [
      {
        day: 1,
        title: 'Hunza Valley Arrival',
        description: 'Arrive in Karimabad, visit the historic Baltit Fort with panoramic valley views.'
      },
      {
        day: 2,
        title: 'Hunza Heritage Tour',
        description: 'Explore Altit Fort, traditional villages, apricot orchards and local culture.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Morning market visit or scenic drives before departure.'
      }
    ]
  },
  {
    id: 'hunza-4days-culture',
    title: 'Hunza Culture & Peaks - 4 Days',
    shortDescription: 'Hunza villages, forts, and light trekking to local peaks',
    description: 'A 4-day immersion in Hunza culture with fort visits, village treks, and beautiful mountain viewpoints.',
    image: '/tours/hunza-culture.jpg',
    duration: '4 Days',
    difficulty: 'Moderate',
    maxAltitude: '2,800m',
    season: ['April', 'May', 'June', 'September', 'October'],
    price: 649,
    rating: 4.9,
    reviews: 245,
    city: 'hunza',
    itinerary: [
      {
        day: 1,
        title: 'Karimabad & Baltit Fort',
        description: 'Arrive, explore Baltit Fort with historical significance and valley views.'
      },
      {
        day: 2,
        title: 'Altit Fort & Village Trek',
        description: 'Visit Altit Fort, trek through traditional villages and orchards.'
      },
      {
        day: 3,
        title: 'Hunza Peak Trek',
        description: 'Light trek to scenic viewpoints with Rakaposhi views.'
      },
      {
        day: 4,
        title: 'Hunza Bazaar & Departure',
        description: 'Explore local markets and artisan shops before departure.'
      }
    ]
  },
  {
    id: 'hunza-5days-adventure',
    title: 'Hunza Valley Adventure - 5 Days',
    shortDescription: 'Multi-day adventure with Gilgit, Hunza, and glacier views',
    description: 'A 5-day adventure combining Gilgit city exploration with Hunza Valley heritage and high altitude treks.',
    image: '/tours/hunza-adventure.jpg',
    duration: '5 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,200m',
    season: ['June', 'July', 'August', 'September'],
    price: 899,
    rating: 4.9,
    reviews: 267,
    city: 'hunza',
    itinerary: [
      {
        day: 1,
        title: 'Gilgit Arrival & Exploration',
        description: 'Arrive in Gilgit, explore bazaars and local culture.'
      },
      {
        day: 2,
        title: 'Gilgit to Hunza Valley',
        description: 'Scenic drive to Hunza Valley, explore Karimabad and Baltit Fort.'
      },
      {
        day: 3,
        title: 'Hunza Village Trek',
        description: 'Trek through traditional villages, orchards, and meet local communities.'
      },
      {
        day: 4,
        title: 'Altit Fort & Glacier Viewpoint',
        description: 'Explore Altit Fort and trek to viewpoints with Karakoram views.'
      },
      {
        day: 5,
        title: 'Hunza Culture & Departure',
        description: 'Final cultural exploration and departure.'
      }
    ]
  },
  {
    id: 'hunza-7days-comprehensive',
    title: 'Hunza Comprehensive - 7 Days',
    shortDescription: 'Complete Hunza experience with multiple valleys and trekking',
    description: 'A comprehensive 7-day tour of Hunza Valley including multiple forts, villages, glaciers views, and high altitude treks.',
    image: '/tours/hunza-comprehensive.jpg',
    duration: '7 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,500m',
    season: ['June', 'July', 'August', 'September'],
    price: 1299,
    rating: 4.9,
    reviews: 298,
    city: 'hunza',
    itinerary: [
      {
        day: 1,
        title: 'Gilgit Arrival',
        description: 'Arrive in Gilgit, acclimatize and explore the bazaar.'
      },
      {
        day: 2,
        title: 'Gilgit to Karimabad',
        description: 'Scenic drive to Hunza, visit Baltit Fort and explore Karimabad.'
      },
      {
        day: 3,
        title: 'Hunza Village Trek Day 1',
        description: 'Trek through traditional Hunza villages with cultural interactions.'
      },
      {
        day: 4,
        title: 'Hunza Village Trek Day 2',
        description: 'Continue trekking to apricot orchards and remote settlements.'
      },
      {
        day: 5,
        title: 'Altit Fort & Glacier Region',
        description: 'Explore Altit Fort and trek toward glacier viewpoints.'
      },
      {
        day: 6,
        title: 'Fairy Meadows Trek',
        description: 'Trek to scenic meadows with Rakaposhi and Hunza views.'
      },
      {
        day: 7,
        title: 'Hunza Heritage & Departure',
        description: 'Final cultural exploration and safe departure.'
      }
    ]
  },
  // GILGIT TOURS
  {
    id: 'gilgit-3days-highlights',
    title: 'Gilgit Highlights - 3 Days',
    shortDescription: 'Quick Gilgit tour with bazaar, Karakoram Highway views, and local culture',
    description: 'A quick 3-day exploration of Gilgit city and surrounding areas including markets and cultural sites.',
    image: '/tours/gilgit-highlights.jpg',
    duration: '3 Days',
    difficulty: 'Easy',
    maxAltitude: '1,500m',
    season: ['April', 'May', 'June', 'September', 'October', 'November'],
    price: 449,
    rating: 4.7,
    reviews: 156,
    city: 'gilgit',
    itinerary: [
      {
        day: 1,
        title: 'Gilgit Arrival & Bazaar',
        description: 'Arrive in Gilgit, explore the colorful bazaar and local markets.'
      },
      {
        day: 2,
        title: 'Karakoram Views & Culture',
        description: 'Visit viewpoints overlooking the Karakoram range, explore local museums.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Final morning exploration before safe departure.'
      }
    ]
  },
  {
    id: 'gilgit-4days-gateway',
    title: 'Gilgit Gateway - 4 Days',
    shortDescription: 'Gilgit as a base for exploring surrounding peaks and valleys',
    description: 'A 4-day tour using Gilgit as a base to explore surrounding Karakoram valleys and mountain viewpoints.',
    image: '/tours/gilgit-gateway.jpg',
    duration: '4 Days',
    difficulty: 'Moderate',
    maxAltitude: '2,800m',
    season: ['May', 'June', 'July', 'August', 'September'],
    price: 699,
    rating: 4.8,
    reviews: 198,
    city: 'gilgit',
    itinerary: [
      {
        day: 1,
        title: 'Gilgit City Exploration',
        description: 'Explore Gilgit bazaars, museums, and cultural heritage sites.'
      },
      {
        day: 2,
        title: 'Rakaposhi Viewpoint Trek',
        description: 'Trek to viewpoints with stunning Rakaposhi mountain views.'
      },
      {
        day: 3,
        title: 'Karakoram Highway Scenic Tour',
        description: 'Drive scenic portions of Karakoram Highway with multiple stops.'
      },
      {
        day: 4,
        title: 'Gilgit Heritage & Departure',
        description: 'Visit remaining heritage sites and depart.'
      }
    ]
  },
  {
    id: 'gilgit-5days-explorer',
    title: 'Gilgit Explorer - 5 Days',
    shortDescription: 'Explore Gilgit, surrounding valleys, and light mountain trekking',
    description: 'A 5-day exploration of Gilgit and surrounding Karakoram valleys with light trekking and cultural experiences.',
    image: '/tours/gilgit-explorer.jpg',
    duration: '5 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,200m',
    season: ['June', 'July', 'August', 'September'],
    price: 899,
    rating: 4.8,
    reviews: 224,
    city: 'gilgit',
    itinerary: [
      {
        day: 1,
        title: 'Gilgit Arrival & Orientation',
        description: 'Arrive in Gilgit, explore bazaars and get oriented.'
      },
      {
        day: 2,
        title: 'Rakaposhi Base Trek',
        description: 'Trek toward Rakaposhi base with stunning peak views.'
      },
      {
        day: 3,
        title: 'Gilgit Valley Exploration',
        description: 'Explore surrounding valleys and local villages.'
      },
      {
        day: 4,
        title: 'Karakoram Viewpoint Trek',
        description: 'Trek to high viewpoints with Karakoram panoramas.'
      },
      {
        day: 5,
        title: 'Gilgit Culture & Departure',
        description: 'Final market visits and safe departure.'
      }
    ]
  },
  {
    id: 'gilgit-7days-epic',
    title: 'Gilgit Epic - 7 Days',
    shortDescription: 'Epic week-long Gilgit adventure with multiple treks and Karakoram exploration',
    description: 'An epic 7-day adventure from Gilgit including multiple trekking routes, glacier views, and cultural immersion.',
    image: '/tours/gilgit-epic.jpg',
    duration: '7 Days',
    difficulty: 'Challenging',
    maxAltitude: '3,800m',
    season: ['June', 'July', 'August', 'September'],
    price: 1399,
    rating: 4.8,
    reviews: 267,
    city: 'gilgit',
    itinerary: [
      {
        day: 1,
        title: 'Gilgit Arrival',
        description: 'Arrive and acclimatize in Gilgit.'
      },
      {
        day: 2,
        title: 'Rakaposhi Base Camp Trek Day 1',
        description: 'Begin trek to Rakaposhi base with stunning views.'
      },
      {
        day: 3,
        title: 'Rakaposhi Base Camp Trek Day 2',
        description: 'Continue to higher camps with alpine meadow views.'
      },
      {
        day: 4,
        title: 'Karakoram Glacier Exploration',
        description: 'Explore pristine glaciers near Rakaposhi.'
      },
      {
        day: 5,
        title: 'Return Trek & Valley Exploration',
        description: 'Trek back exploring surrounding valleys.'
      },
      {
        day: 6,
        title: 'Gilgit City & Cultural Sites',
        description: 'Explore Gilgit city museums, bazaars, and heritage sites.'
      },
      {
        day: 7,
        title: 'Karakoram Highway Scenic Drive & Departure',
        description: 'Drive portions of Karakoram Highway and depart.'
      }
    ]
  },
  // CHITRAL TOURS
  {
    id: 'chitral-3days-compact',
    title: 'Chitral Compact - 3 Days',
    shortDescription: 'Quick Chitral experience with Peshawar valley views and local culture',
    description: 'A compact 3-day introduction to Chitral with town exploration and nearby scenic areas.',
    image: '/tours/chitral-compact.jpg',
    duration: '3 Days',
    difficulty: 'Easy',
    maxAltitude: '1,800m',
    season: ['May', 'June', 'September', 'October'],
    price: 449,
    rating: 4.6,
    reviews: 98,
    city: 'chitral',
    itinerary: [
      {
        day: 1,
        title: 'Chitral Arrival',
        description: 'Arrive in Chitral, explore the town and local bazaars.'
      },
      {
        day: 2,
        title: 'Peshawar Valley & Scenery',
        description: 'Explore nearby valleys with scenic mountain views.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Final exploration before departure.'
      }
    ]
  },
  {
    id: 'chitral-4days-valleys',
    title: 'Chitral Valleys - 4 Days',
    shortDescription: 'Explore Chitral town and surrounding remote valleys',
    description: 'A 4-day tour exploring Chitral and its beautiful surrounding valleys with hiking and cultural experiences.',
    image: '/tours/chitral-valleys.jpg',
    duration: '4 Days',
    difficulty: 'Moderate',
    maxAltitude: '2,400m',
    season: ['June', 'July', 'August', 'September'],
    price: 699,
    rating: 4.7,
    reviews: 145,
    city: 'chitral',
    itinerary: [
      {
        day: 1,
        title: 'Chitral Town Exploration',
        description: 'Explore Chitral bazaar, museums, and cultural sites.'
      },
      {
        day: 2,
        title: 'Peshawar Valley Trek',
        description: 'Trek to nearby valleys with panoramic views.'
      },
      {
        day: 3,
        title: 'Mountain Village Visit',
        description: 'Visit traditional mountain villages with cultural interactions.'
      },
      {
        day: 4,
        title: 'Scenic Drives & Departure',
        description: 'Scenic drives exploring the region and departure.'
      }
    ]
  },
  {
    id: 'chitral-5days-adventure',
    title: 'Chitral Adventure - 5 Days',
    shortDescription: 'Chitral with trekking in remote valleys and mountain communities',
    description: 'A 5-day adventure trekking through remote Chitral valleys with visits to traditional mountain communities.',
    image: '/tours/chitral-adventure.jpg',
    duration: '5 Days',
    difficulty: 'Moderate',
    maxAltitude: '2,800m',
    season: ['June', 'July', 'August', 'September'],
    price: 899,
    rating: 4.8,
    reviews: 167,
    city: 'chitral',
    itinerary: [
      {
        day: 1,
        title: 'Chitral Arrival & Orientation',
        description: 'Arrive and explore Chitral town.'
      },
      {
        day: 2,
        title: 'Remote Valley Trek Day 1',
        description: 'Begin trekking into remote valleys.'
      },
      {
        day: 3,
        title: 'Remote Valley Trek Day 2',
        description: 'Continue trekking with mountain village visits.'
      },
      {
        day: 4,
        title: 'Traditional Community Visit',
        description: 'Visit traditional settlements and cultural sites.'
      },
      {
        day: 5,
        title: 'Return to Chitral & Departure',
        description: 'Return journey and safe departure.'
      }
    ]
  },
  {
    id: 'chitral-7days-expedition',
    title: 'Chitral Expedition - 7 Days',
    shortDescription: 'Week-long Chitral expedition with multiple valleys and high altitude trekking',
    description: 'A comprehensive 7-day expedition exploring multiple Chitral valleys with high altitude trekking and cultural immersion.',
    image: '/tours/chitral-expedition.jpg',
    duration: '7 Days',
    difficulty: 'Challenging',
    maxAltitude: '3,500m',
    season: ['July', 'August', 'September'],
    price: 1399,
    rating: 4.8,
    reviews: 189,
    city: 'chitral',
    itinerary: [
      {
        day: 1,
        title: 'Chitral Arrival',
        description: 'Arrive and acclimatize in Chitral.'
      },
      {
        day: 2,
        title: 'Peshawar Valley Trek Day 1',
        description: 'Begin trekking through Peshawar Valley.'
      },
      {
        day: 3,
        title: 'Peshawar Valley Trek Day 2',
        description: 'Continue exploring pristine valleys.'
      },
      {
        day: 4,
        title: 'High Altitude Trek',
        description: 'Trek to higher elevations with panoramic views.'
      },
      {
        day: 5,
        title: 'Remote Village Exploration',
        description: 'Explore remote mountain communities and traditional culture.'
      },
      {
        day: 6,
        title: 'Return Trek',
        description: 'Trek back toward civilization.'
      },
      {
        day: 7,
        title: 'Chitral Culture & Departure',
        description: 'Final cultural exploration and safe departure.'
      }
    ]
  },
  // KARIMABAD TOURS
  {
    id: 'karimabad-3days-forts',
    title: 'Karimabad Forts - 3 Days',
    shortDescription: 'Quick tour of Baltit and Altit forts with village walks',
    description: 'A quick 3-day tour exploring the historic forts and charming villages of Karimabad in Hunza Valley.',
    image: '/tours/karimabad-forts.jpg',
    duration: '3 Days',
    difficulty: 'Easy',
    maxAltitude: '2,200m',
    season: ['April', 'May', 'June', 'September', 'October'],
    price: 499,
    rating: 4.8,
    reviews: 212,
    city: 'karimabad',
    itinerary: [
      {
        day: 1,
        title: 'Karimabad Arrival & Baltit Fort',
        description: 'Arrive and explore the historic Baltit Fort.'
      },
      {
        day: 2,
        title: 'Altit Fort & Village Walks',
        description: 'Explore Altit Fort and trek through traditional villages.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Final exploration or market visit before departure.'
      }
    ]
  },
  {
    id: 'karimabad-4days-culture',
    title: 'Karimabad Culture - 4 Days',
    shortDescription: 'Karimabad forts, orchards, and immersion in Hunza lifestyle',
    description: 'A 4-day immersion into Karimabad life including forts, orchards, and authentic Hunza cultural experiences.',
    image: '/tours/karimabad-culture.jpg',
    duration: '4 Days',
    difficulty: 'Moderate',
    maxAltitude: '2,400m',
    season: ['May', 'June', 'September', 'October'],
    price: 649,
    rating: 4.9,
    reviews: 234,
    city: 'karimabad',
    itinerary: [
      {
        day: 1,
        title: 'Karimabad & Baltit Fort',
        description: 'Explore Karimabad and the majestic Baltit Fort.'
      },
      {
        day: 2,
        title: 'Apricot Orchards Trek',
        description: 'Trek through famous apricot orchards and meet local farmers.'
      },
      {
        day: 3,
        title: 'Altit Fort & Village Life',
        description: 'Explore Altit Fort and experience traditional village life.'
      },
      {
        day: 4,
        title: 'Local Bazaar & Departure',
        description: 'Shop at local bazaars and depart with Hunza memories.'
      }
    ]
  },
  {
    id: 'karimabad-5days-explorer',
    title: 'Karimabad Explorer - 5 Days',
    shortDescription: 'Extended Karimabad tour with nearby valleys and trekking',
    description: 'A 5-day exploration of Karimabad and surrounding Hunza valleys with multiple trekking routes.',
    image: '/tours/karimabad-explorer.jpg',
    duration: '5 Days',
    difficulty: 'Moderate',
    maxAltitude: '2,800m',
    season: ['June', 'July', 'August', 'September'],
    price: 899,
    rating: 4.9,
    reviews: 256,
    city: 'karimabad',
    itinerary: [
      {
        day: 1,
        title: 'Karimabad Arrival & Forts',
        description: 'Arrive and explore both Baltit and Altit forts.'
      },
      {
        day: 2,
        title: 'Orchard Trek Day 1',
        description: 'Trek through apricot orchards and terraced fields.'
      },
      {
        day: 3,
        title: 'Hunza Valley Trek',
        description: 'Trek to scenic viewpoints around Hunza Valley.'
      },
      {
        day: 4,
        title: 'Village Exploration',
        description: 'Visit remote villages and experience local hospitality.'
      },
      {
        day: 5,
        title: 'Karimabad Culture & Departure',
        description: 'Final cultural activities and safe departure.'
      }
    ]
  },
  {
    id: 'karimabad-7days-immersion',
    title: 'Karimabad Immersion - 7 Days',
    shortDescription: 'Deep cultural immersion in Karimabad with extended trekking',
    description: 'A comprehensive 7-day deep immersion into Karimabad culture with extended valley trekking and local interactions.',
    image: '/tours/karimabad-immersion.jpg',
    duration: '7 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,000m',
    season: ['June', 'July', 'August', 'September'],
    price: 1299,
    rating: 4.9,
    reviews: 278,
    city: 'karimabad',
    itinerary: [
      {
        day: 1,
        title: 'Karimabad Arrival',
        description: 'Arrive and explore the charming town.'
      },
      {
        day: 2,
        title: 'Baltit Fort Deep Exploration',
        description: 'Detailed exploration of Baltit Fort with historical insights.'
      },
      {
        day: 3,
        title: 'Orchard Trek Day 1',
        description: 'Begin trekking through extensive apricot orchards.'
      },
      {
        day: 4,
        title: 'Orchard Trek Day 2',
        description: 'Continue trekking with farmstead visits and local interactions.'
      },
      {
        day: 5,
        title: 'Altit Fort & Surrounding Valleys',
        description: 'Explore Altit Fort and trek to nearby scenic valleys.'
      },
      {
        day: 6,
        title: 'Remote Village Trek',
        description: 'Trek to remote settlements with cultural immersion.'
      },
      {
        day: 7,
        title: 'Karimabad Farewell & Departure',
        description: 'Final cultural activities and safe departure.'
      }
    ]
  },
  // RAWALPINDI TOURS
  {
    id: 'rawalpindi-3days-nathia-gali',
    title: 'Rawalpindi to Nathia Gali - 3 Days',
    shortDescription: 'Quick alpine escape from Rawalpindi to scenic Nathia Gali meadows',
    description: 'A 3-day alpine escape from Rawalpindi to the scenic pine forests and meadows of Nathia Gali.',
    image: '/tours/nathia-gali.jpg',
    duration: '3 Days',
    difficulty: 'Easy',
    maxAltitude: '2,500m',
    season: ['April', 'May', 'June', 'September', 'October', 'November'],
    price: 399,
    rating: 4.7,
    reviews: 289,
    city: 'rawalpindi',
    itinerary: [
      {
        day: 1,
        title: 'Rawalpindi to Nathia Gali',
        description: 'Drive to scenic Nathia Gali plateau with pine forest views.'
      },
      {
        day: 2,
        title: 'Nathia Gali Exploration',
        description: 'Trek through meadows and explore the scenic plateau.'
      },
      {
        day: 3,
        title: 'Return to Rawalpindi',
        description: 'Return journey with scenic stops.'
      }
    ]
  },
  {
    id: 'rawalpindi-4days-murree-nathia',
    title: 'Murree & Nathia Gali - 4 Days',
    shortDescription: 'Combine hill stations Murree and Nathia Gali from Rawalpindi base',
    description: 'A 4-day tour combining two popular hill stations - Murree and Nathia Gali with scenic drives and light trekking.',
    image: '/tours/murree-nathia.jpg',
    duration: '4 Days',
    difficulty: 'Easy',
    maxAltitude: '2,600m',
    season: ['April', 'May', 'June', 'September', 'October', 'November'],
    price: 549,
    rating: 4.8,
    reviews: 312,
    city: 'rawalpindi',
    itinerary: [
      {
        day: 1,
        title: 'Rawalpindi to Murree',
        description: 'Drive to scenic hill station Murree with panoramic views.'
      },
      {
        day: 2,
        title: 'Murree Exploration',
        description: 'Explore Murree bazaars, viewpoints, and hiking trails.'
      },
      {
        day: 3,
        title: 'Murree to Nathia Gali',
        description: 'Drive to Nathia Gali with scenic mountain views.'
      },
      {
        day: 4,
        title: 'Nathia Gali & Return',
        description: 'Explore Nathia Gali meadows and return to Rawalpindi.'
      }
    ]
  },
  {
    id: 'rawalpindi-5days-alpine-circuit',
    title: 'Alpine Circuit - 5 Days',
    shortDescription: 'Complete alpine circuit exploring multiple hill stations from Rawalpindi',
    description: 'A 5-day alpine circuit tour from Rawalpindi covering multiple scenic hill stations and trekking routes.',
    image: '/tours/alpine-circuit.jpg',
    duration: '5 Days',
    difficulty: 'Moderate',
    maxAltitude: '2,900m',
    season: ['May', 'June', 'September', 'October'],
    price: 749,
    rating: 4.8,
    reviews: 267,
    city: 'rawalpindi',
    itinerary: [
      {
        day: 1,
        title: 'Rawalpindi to Murree',
        description: 'Drive to Murree with scenic Himalayan views.'
      },
      {
        day: 2,
        title: 'Murree Trek & Exploration',
        description: 'Trek through Murree forests and explore hill station.'
      },
      {
        day: 3,
        title: 'Murree to Nathia Gali',
        description: 'Drive through scenic routes to Nathia Gali.'
      },
      {
        day: 4,
        title: 'Nathia Gali Trek',
        description: 'Trek through alpine meadows and pine forests.'
      },
      {
        day: 5,
        title: 'Return to Rawalpindi',
        description: 'Scenic drive back with multiple stops and viewpoints.'
      }
    ]
  },
  {
    id: 'rawalpindi-7days-himalayan',
    title: 'Himalayan Adventure - 7 Days',
    shortDescription: 'Extended week exploring multiple Himalayan hills stations and valleys',
    description: 'A comprehensive 7-day Himalayan adventure exploring multiple hill stations, valleys, and trekking routes from Rawalpindi.',
    image: '/tours/himalayan-adventure.jpg',
    duration: '7 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,200m',
    season: ['June', 'July', 'August', 'September', 'October'],
    price: 1099,
    rating: 4.9,
    reviews: 289,
    city: 'rawalpindi',
    itinerary: [
      {
        day: 1,
        title: 'Rawalpindi Departure',
        description: 'Depart Rawalpindi toward hill stations.'
      },
      {
        day: 2,
        title: 'Murree Arrival & Exploration',
        description: 'Arrive in Murree, explore bazaars and viewpoints.'
      },
      {
        day: 3,
        title: 'Murree Trek Day 1',
        description: 'Trek through forest trails with Himalayan views.'
      },
      {
        day: 4,
        title: 'Murree to Nathia Gali',
        description: 'Scenic drive to Nathia Gali plateau.'
      },
      {
        day: 5,
        title: 'Nathia Gali Trek Day 1',
        description: 'Trek through alpine meadows and explore the plateau.'
      },
      {
        day: 6,
        title: 'Nathia Gali Trek Day 2',
        description: 'Continue exploring with nature walks and photography.'
      },
      {
        day: 7,
        title: 'Return to Rawalpindi',
        description: 'Scenic return drive to Rawalpindi.'
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
