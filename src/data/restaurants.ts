import { Restaurant } from '../types';

export const restaurant: Restaurant[] = [
  {
    id: '0',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1752681793/d7plhdqavwnnij0gk6wd.jpg',
    name: 'Biryani Trails',
    rating: 4.1,
    time: '20-25',
    location: 'Madhapur',
    distance: '2.0 km',
    ratings: '1.5k+',
    cost_for_two: 250,
    cuisines: 'North Indian, South Indian',
    menu: [
      {
        id: '5',
        name: 'Recommended',
        items: [
          {
            id: '101',
            name: 'Paneer 65',
            price: 275,
            description:
              'E: 723.82 KCal (241.27 KCal), C: 30.89 Grams (10.30 Grams), P: 32.95 Grams (10.98 Grams), F: 51.82 Grams (17.27 Grams)',
            rating: 4.1,
            ratings: 43,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '102',
            name: 'Chilly Chicken (Boneless)',
            price: 285,
            description:
              'E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '103',
            name: 'Spl Veg Biryani',
            price: 250,
            description:
              'E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)',
            rating: 4.5,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753003536/nayc1rfutgypypo5fx0h.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '104',
            name: 'Chilly Paneer',
            price: 220,
            description:
              'E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams',
            rating: 3.8,
            ratings: 22,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '105',
            name: 'Chicken 65',
            price: 300,
            description:
              'E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)',
            rating: 4.5,
            ratings: 45,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004965/rlesp3jlsbb5zyvzpmlb.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
        ],
      },
      {
        id: '6',
        name: 'Rice',
        items: [
          {
            id: '201',
            name: 'Chicken Fried Rice',
            price: 260,
            description:
              'E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005208/da1uccflmxlxi2ml5vxu.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '202',
            name: 'Egg Fried Rice',
            price: 220,
            description:
              'E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005830/xmtzwumwydabtbcaoiln.png',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '203',
            name: 'Veg Fried Rice',
            price: 190,
            description:
              'E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)',
            rating: 4.6,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006054/dilfre5uoyipfogw1p0w.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '204',
            name: 'Jeera Rice',
            price: 195,
            description:
              'E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006521/jqhanklkqzb1kgghunq3.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '7',
        name: 'Veg Starter',
        items: [
          {
            id: '738778',
            name: 'Paneer 65',
            price: 320,
            description:
              '300 gram | Serves 1 | 12-15 pieces of paneer are marinated in our andra spice mix and pan-fried with curry leaves. It is moderately spicy.  [Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543222',
            name: 'Chilly Paneer',
            price: 320,
            description:
              '320 gram | Serves 1 |  [Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '8',
        name: 'Non-veg Starter',
        items: [
          {
            id: '46463430',
            name: 'Chilly Chicken (Boneless)',
            price: 320,
            description:
              '70 gram | Boneless pieces of chicken are cooked with a lot of green chilies and curry leaves. It is spicy and pan-fried.',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '46463434',
            name: 'Chilly Chicken(Andhra Style)',
            price: 325,
            description:
              '450 gram | 5 pieces of chicken are cooked with our andra spice mix and green chilies in a kadhai. It is a semi-gravy dish and is very spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008083/znssiufgo1fnq0n7kyi7.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },

          {
            id: '44543234',
            name: 'Chicken Lollypop',
            price: 325,
            description:
              '250 gram | 5 pieces of chicken lollypops are freshly fried in our in-house andra spice masala. It is crispy and juicy. It is moderately spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008368/bdpbs5scew201kbf2oo3.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '44559478',
            name: 'Chicken Leg Roast',
            price: 355,
            description:
              '400 gram | Serves 1 | 4 leg pieces are cooked in our special masala that is freshly made every day. It is finished in a kadhai and is spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008340/dcfb8h5eyswfezxisifg.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '9',
        name: 'Sea Food Starter',
        items: [
          {
            id: '44543220',
            name: 'Apollo Fish',
            price: 350,
            description:
              '3270 gram | Serves 1 | 7-8 pieces of tilapia fish are cooked in a spicy red chilly paste and our in-house andra spice mix. It is pan fried and moderately spicy',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008706/asmztfd1giipmd9v1xo7.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543221',
            name: 'Chilli Prawns',
            price: 325,
            description:
              '280 gram | Serves 1 | 15-16 pieces of fresh prawns are coated with our in-house andra-style spice mix and fried with lots of green chilies. It is pretty spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008810/brhffjsipqqhyohyp6dr.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    id: '1',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1753003536/j9sqgqjfjbbjt0yd9lo6.jpg',
    name: 'Sri Ruchi Foods',
    rating: 4.5,
    time: '25-30',
    location: 'Hitech City',
    distance: '2.5 km',
    ratings: '2.3k+',
    cost_for_two: 299,
    cuisines: 'North Indian, South Indian',
    menu: [
      {
        id: '5',
        name: 'Recommended',
        items: [
          {
            id: '101',
            name: 'Paneer 65',
            price: 275,
            description:
              'E: 723.82 KCal (241.27 KCal), C: 30.89 Grams (10.30 Grams), P: 32.95 Grams (10.98 Grams), F: 51.82 Grams (17.27 Grams)',
            rating: 4.1,
            ratings: 43,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '102',
            name: 'Chilly Chicken (Boneless)',
            price: 285,
            description:
              'E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '103',
            name: 'Spl Veg Biryani',
            price: 250,
            description:
              'E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)',
            rating: 4.5,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753003536/nayc1rfutgypypo5fx0h.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '104',
            name: 'Chilly Paneer',
            price: 220,
            description:
              'E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams',
            rating: 3.8,
            ratings: 22,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '105',
            name: 'Chicken 65',
            price: 300,
            description:
              'E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)',
            rating: 4.5,
            ratings: 45,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004965/rlesp3jlsbb5zyvzpmlb.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
        ],
      },
      {
        id: '6',
        name: 'Rice',
        items: [
          {
            id: '201',
            name: 'Chicken Fried Rice',
            price: 260,
            description:
              'E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005208/da1uccflmxlxi2ml5vxu.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '202',
            name: 'Egg Fried Rice',
            price: 220,
            description:
              'E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005830/xmtzwumwydabtbcaoiln.png',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '203',
            name: 'Veg Fried Rice',
            price: 190,
            description:
              'E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)',
            rating: 4.6,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006054/dilfre5uoyipfogw1p0w.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '204',
            name: 'Jeera Rice',
            price: 195,
            description:
              'E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006521/jqhanklkqzb1kgghunq3.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '7',
        name: 'Veg Starter',
        items: [
          {
            id: '738778',
            name: 'Paneer 65',
            price: 320,
            description:
              '300 gram | Serves 1 | 12-15 pieces of paneer are marinated in our andra spice mix and pan-fried with curry leaves. It is moderately spicy.  [Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543222',
            name: 'Chilly Paneer',
            price: 320,
            description:
              '320 gram | Serves 1 |  [Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '8',
        name: 'Non-veg Starter',
        items: [
          {
            id: '46463430',
            name: 'Chilly Chicken (Boneless)',
            price: 320,
            description:
              '70 gram | Boneless pieces of chicken are cooked with a lot of green chilies and curry leaves. It is spicy and pan-fried.',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '46463434',
            name: 'Chilly Chicken(Andhra Style)',
            price: 325,
            description:
              '450 gram | 5 pieces of chicken are cooked with our andra spice mix and green chilies in a kadhai. It is a semi-gravy dish and is very spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008083/znssiufgo1fnq0n7kyi7.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },

          {
            id: '44543234',
            name: 'Chicken Lollypop',
            price: 325,
            description:
              '250 gram | 5 pieces of chicken lollypops are freshly fried in our in-house andra spice masala. It is crispy and juicy. It is moderately spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008368/bdpbs5scew201kbf2oo3.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '44559478',
            name: 'Chicken Leg Roast',
            price: 355,
            description:
              '400 gram | Serves 1 | 4 leg pieces are cooked in our special masala that is freshly made every day. It is finished in a kadhai and is spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008340/dcfb8h5eyswfezxisifg.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '9',
        name: 'Sea Food Starter',
        items: [
          {
            id: '44543220',
            name: 'Apollo Fish',
            price: 350,
            description:
              '3270 gram | Serves 1 | 7-8 pieces of tilapia fish are cooked in a spicy red chilly paste and our in-house andra spice mix. It is pan fried and moderately spicy',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008706/asmztfd1giipmd9v1xo7.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543221',
            name: 'Chilli Prawns',
            price: 325,
            description:
              '280 gram | Serves 1 | 15-16 pieces of fresh prawns are coated with our in-house andra-style spice mix and fried with lots of green chilies. It is pretty spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008810/brhffjsipqqhyohyp6dr.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1752611172/xfksrh0x7hq81r6atafm.jpg',
    name: 'Biryani Point',
    rating: 3.8,
    time: '20-25',
    location: 'Madhapur',
    distance: '2.8 km',
    ratings: '2.7k+',
    cost_for_two: 340,
    cuisines: 'North Indian, South Indian',
    menu: [
      {
        id: '5',
        name: 'Recommended',
        items: [
          {
            id: '101',
            name: 'Paneer 65',
            price: 275,
            description:
              'E: 723.82 KCal (241.27 KCal), C: 30.89 Grams (10.30 Grams), P: 32.95 Grams (10.98 Grams), F: 51.82 Grams (17.27 Grams)',
            rating: 4.1,
            ratings: 43,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '102',
            name: 'Chilly Chicken (Boneless)',
            price: 285,
            description:
              'E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '103',
            name: 'Spl Veg Biryani',
            price: 250,
            description:
              'E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)',
            rating: 4.5,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753003536/nayc1rfutgypypo5fx0h.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '104',
            name: 'Chilly Paneer',
            price: 220,
            description:
              'E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams',
            rating: 3.8,
            ratings: 22,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '105',
            name: 'Chicken 65',
            price: 300,
            description:
              'E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)',
            rating: 4.5,
            ratings: 45,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004965/rlesp3jlsbb5zyvzpmlb.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
        ],
      },
      {
        id: '6',
        name: 'Rice',
        items: [
          {
            id: '201',
            name: 'Chicken Fried Rice',
            price: 260,
            description:
              'E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005208/da1uccflmxlxi2ml5vxu.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '202',
            name: 'Egg Fried Rice',
            price: 220,
            description:
              'E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005830/xmtzwumwydabtbcaoiln.png',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '203',
            name: 'Veg Fried Rice',
            price: 190,
            description:
              'E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)',
            rating: 4.6,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006054/dilfre5uoyipfogw1p0w.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '204',
            name: 'Jeera Rice',
            price: 195,
            description:
              'E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006521/jqhanklkqzb1kgghunq3.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '7',
        name: 'Veg Starter',
        items: [
          {
            id: '738778',
            name: 'Paneer 65',
            price: 320,
            description:
              '300 gram | Serves 1 | 12-15 pieces of paneer are marinated in our andra spice mix and pan-fried with curry leaves. It is moderately spicy.  [Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543222',
            name: 'Chilly Paneer',
            price: 320,
            description:
              '320 gram | Serves 1 |  [Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '8',
        name: 'Non-veg Starter',
        items: [
          {
            id: '46463430',
            name: 'Chilly Chicken (Boneless)',
            price: 320,
            description:
              '70 gram | Boneless pieces of chicken are cooked with a lot of green chilies and curry leaves. It is spicy and pan-fried.',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '46463434',
            name: 'Chilly Chicken(Andhra Style)',
            price: 325,
            description:
              '450 gram | 5 pieces of chicken are cooked with our andra spice mix and green chilies in a kadhai. It is a semi-gravy dish and is very spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008083/znssiufgo1fnq0n7kyi7.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },

          {
            id: '44543234',
            name: 'Chicken Lollypop',
            price: 325,
            description:
              '250 gram | 5 pieces of chicken lollypops are freshly fried in our in-house andra spice masala. It is crispy and juicy. It is moderately spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008368/bdpbs5scew201kbf2oo3.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '44559478',
            name: 'Chicken Leg Roast',
            price: 355,
            description:
              '400 gram | Serves 1 | 4 leg pieces are cooked in our special masala that is freshly made every day. It is finished in a kadhai and is spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008340/dcfb8h5eyswfezxisifg.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '9',
        name: 'Sea Food Starter',
        items: [
          {
            id: '44543220',
            name: 'Apollo Fish',
            price: 350,
            description:
              '3270 gram | Serves 1 | 7-8 pieces of tilapia fish are cooked in a spicy red chilly paste and our in-house andra spice mix. It is pan fried and moderately spicy',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008706/asmztfd1giipmd9v1xo7.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543221',
            name: 'Chilli Prawns',
            price: 325,
            description:
              '280 gram | Serves 1 | 15-16 pieces of fresh prawns are coated with our in-house andra-style spice mix and fried with lots of green chilies. It is pretty spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008810/brhffjsipqqhyohyp6dr.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1752611172/s6egkgb22pxec6tb5g9k.jpg',
    name: 'Balaji Tiffins',
    rating: 4.8,
    time: '25-30',
    location: 'Hitech City',
    distance: '1.5 km',
    ratings: '5k+',
    cost_for_two: 100,
    cuisines: 'North Indian, South Indian',
    menu: [
      {
        id: '5',
        name: 'Recommended',
        items: [
          {
            id: '101',
            name: 'Paneer 65',
            price: 275,
            description:
              'E: 723.82 KCal (241.27 KCal), C: 30.89 Grams (10.30 Grams), P: 32.95 Grams (10.98 Grams), F: 51.82 Grams (17.27 Grams)',
            rating: 4.1,
            ratings: 43,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '102',
            name: 'Chilly Chicken (Boneless)',
            price: 285,
            description:
              'E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '103',
            name: 'Spl Veg Biryani',
            price: 250,
            description:
              'E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)',
            rating: 4.5,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753003536/nayc1rfutgypypo5fx0h.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '104',
            name: 'Chilly Paneer',
            price: 220,
            description:
              'E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams',
            rating: 3.8,
            ratings: 22,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '105',
            name: 'Chicken 65',
            price: 300,
            description:
              'E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)',
            rating: 4.5,
            ratings: 45,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004965/rlesp3jlsbb5zyvzpmlb.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
        ],
      },
      {
        id: '6',
        name: 'Rice',
        items: [
          {
            id: '201',
            name: 'Chicken Fried Rice',
            price: 260,
            description:
              'E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005208/da1uccflmxlxi2ml5vxu.jpg',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '202',
            name: 'Egg Fried Rice',
            price: 220,
            description:
              'E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753005830/xmtzwumwydabtbcaoiln.png',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '203',
            name: 'Veg Fried Rice',
            price: 190,
            description:
              'E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)',
            rating: 4.6,
            ratings: 56,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006054/dilfre5uoyipfogw1p0w.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '204',
            name: 'Jeera Rice',
            price: 195,
            description:
              'E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753006521/jqhanklkqzb1kgghunq3.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '7',
        name: 'Veg Starter',
        items: [
          {
            id: '738778',
            name: 'Paneer 65',
            price: 320,
            description:
              '300 gram | Serves 1 | 12-15 pieces of paneer are marinated in our andra spice mix and pan-fried with curry leaves. It is moderately spicy.  [Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004422/tzuzoalmseqghonzxgoy.jpg',
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543222',
            name: 'Chilly Paneer',
            price: 320,
            description:
              '320 gram | Serves 1 |  [Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004242/jmun9mkznl6w1uy2h6dn.jpg',
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '8',
        name: 'Non-veg Starter',
        items: [
          {
            id: '46463430',
            name: 'Chilly Chicken (Boneless)',
            price: 320,
            description:
              '70 gram | Boneless pieces of chicken are cooked with a lot of green chilies and curry leaves. It is spicy and pan-fried.',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753004525/prkzaphiqpeip0nkaxja.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '46463434',
            name: 'Chilly Chicken(Andhra Style)',
            price: 325,
            description:
              '450 gram | 5 pieces of chicken are cooked with our andra spice mix and green chilies in a kadhai. It is a semi-gravy dish and is very spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008083/znssiufgo1fnq0n7kyi7.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },

          {
            id: '44543234',
            name: 'Chicken Lollypop',
            price: 325,
            description:
              '250 gram | 5 pieces of chicken lollypops are freshly fried in our in-house andra spice masala. It is crispy and juicy. It is moderately spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008368/bdpbs5scew201kbf2oo3.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: '44559478',
            name: 'Chicken Leg Roast',
            price: 355,
            description:
              '400 gram | Serves 1 | 4 leg pieces are cooked in our special masala that is freshly made every day. It is finished in a kadhai and is spicy.',
            rating: 4.5,
            ratings: 48,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008340/dcfb8h5eyswfezxisifg.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
      {
        id: '9',
        name: 'Sea Food Starter',
        items: [
          {
            id: '44543220',
            name: 'Apollo Fish',
            price: 350,
            description:
              '3270 gram | Serves 1 | 7-8 pieces of tilapia fish are cooked in a spicy red chilly paste and our in-house andra spice mix. It is pan fried and moderately spicy',
            rating: 4.3,
            ratings: 34,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008706/asmztfd1giipmd9v1xo7.png',
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: '44543221',
            name: 'Chilli Prawns',
            price: 325,
            description:
              '280 gram | Serves 1 | 15-16 pieces of fresh prawns are coated with our in-house andra-style spice mix and fried with lots of green chilies. It is pretty spicy.',
            rating: 4.3,
            ratings: 52,
            image:
              'https://res.cloudinary.com/do0sr9avm/image/upload/v1753008810/brhffjsipqqhyohyp6dr.jpg',
            veg: false,
            bestSeller: false,
            quantity: 1,
          },
        ],
      },
    ],
  },
];
