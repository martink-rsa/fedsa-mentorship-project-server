// The products are based on a high-end furniture store
const images = [
  'chair-0.jpg',
  'chair-1.jpg',
  'chair-2.jpg',
  'chair-3.jpg',
  'chair-4.jpg',
  'chair-5.jpg',
  'chair-6.jpg',
  'chair-7.jpg',
  'chair-8.jpg',
  'chair-9.jpg',
];

const baseUrl = process.env.BASE_URL;

const generateImagePath = (imageName) => {
  return `${baseUrl}/project-1/images/${imageName}`;
};

const products = [
  {
    id: 0,
    title: 'Majesty',
    description: 'Regal regal with a modern twist.',
    price: 1129.95,
    discountedPrice: 998.99,
    image: generateImagePath(images[0]),
  },
  {
    id: 1,
    title: 'Moderna',
    description: 'Modern seating with adjustable tilt.',
    price: 699.99,
    discountedPrice: 559.99,
    image: generateImagePath(images[1]),
  },
  {
    id: 2,
    title: 'Aztec',
    description: 'An outdoor chair with a natural feel',
    price: 959.99,
    discountedPrice: 719.99,
    image: generateImagePath(images[2]),
  },
  {
    id: 3,
    title: 'Beachcomer',
    description: 'Outdoor resistant bar stool with a smooth finish.',
    price: 1024.99,
    discountedPrice: 899.99,
    image: generateImagePath(images[3]),
  },
  {
    id: 4,
    title: 'Gather',
    description: 'A stackable chair with handgrips for easy transporting.',
    price: 459.99,
    discountedPrice: 344.99,
    image: generateImagePath(images[4]),
  },
  {
    id: 5,
    title: 'Countessa',
    description: 'An elegant chair with a classic look.',
    price: 1299.95,
    discountedPrice: 929.99,
    image: generateImagePath(images[5]),
  },
  {
    id: 6,
    title: 'Supreme Dark Lotus',
    description: 'Imported velvet on a 4-pillar frame.',
    price: 3299.99,
    discountedPrice: 2599.99,
    image: generateImagePath(images[6]),
  },
  {
    id: 7,
    title: 'Recursion',
    description: 'A set of compact chairs for all family members.',
    price: 1391.99,
    discountedPrice: 1210.99,
    image: generateImagePath(images[7]),
  },
  {
    id: 8,
    title: 'Curia',
    description: 'A sleek and minimalism office chair',
    price: 849.95,
    discountedPrice: 699.99,
    image: generateImagePath(images[8]),
  },
];

module.exports = { products };
