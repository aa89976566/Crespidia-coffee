export const gallery = [
  {
    src: "/photos/ig-counter.jpg",
    alt: "Crespidia counter and coffee machine",
  },
  {
    src: "/photos/ig-brunch-bowl.jpg",
    alt: "Coconut bowl brunch with juice and coffee",
  },
  {
    src: "/photos/ig-latte.jpg",
    alt: "Latte in vintage china",
  },
  {
    src: "/photos/ig-coffee-cake.jpg",
    alt: "Coffee and homemade cake",
  },
  {
    src: "/photos/ig-drinks.jpg",
    alt: "Fresh orange juice on the table",
  },
  {
    src: "/photos/ig-flowers.jpg",
    alt: "Dried flowers in the shop",
  },
  {
    src: "/photos/ig-celebration-cake.jpg",
    alt: "Homemade celebration cake",
  },
  {
    src: "/photos/ig-interior.jpg",
    alt: "Inside Crespidia",
  },
];

/**
 * Scrapbook "need to know" cards.
 * Focused on what cafe visitors ask first: open? where? what to eat? cakes? practical tips.
 */
export const needToKnow = [
  {
    title: "hours",
    tone: "moss",
    tilt: "-3deg",
    image: "/photos/ig-counter.jpg",
    imageAlt: "Crespidia counter",
    href: "/visit/",
    points: [
      "Hill: Tue to Sat 9 to 5, Sun 10 to 5",
      "Road: from 8am, later evenings Wed to Sun",
      "Monday and holidays: check Instagram",
    ],
  },
  {
    title: "find us",
    tone: "sky",
    tilt: "2.5deg",
    image: "/photos/ig-interior.jpg",
    imageAlt: "Inside Crespidia",
    href: "/visit/",
    points: [
      "48 Anerley Hill by the park",
      "51-53 Anerley Road for coffee and bar",
      "Short walk from Crystal Palace station",
    ],
  },
  {
    title: "eat and drink",
    tone: "orange",
    tilt: "-2deg",
    image: "/photos/ig-brunch-bowl.jpg",
    imageAlt: "Brunch bowl",
    href: "/menu/",
    points: [
      "Brunch bowls, eggs, pancakes, French toast",
      "Flat whites, juices, matcha, rose mint tea",
      "Plant milks if you ask",
    ],
  },
  {
    title: "cakes",
    tone: "berry",
    tilt: "3deg",
    image: "/photos/ig-celebration-cake.jpg",
    imageAlt: "Celebration cake",
    href: "/menu/",
    points: [
      "Homemade slices on the tray every day",
      "Celebration cakes: ask Francesca",
      "Gluten free possible when you order",
    ],
  },
  {
    title: "good to know",
    tone: "cream",
    tilt: "-1.5deg",
    image: "/photos/ig-flowers.jpg",
    imageAlt: "Flowers in the shop",
    href: "https://www.instagram.com/crespidia/",
    external: true,
    points: [
      "Dogs welcome, outdoor seats when warm",
      "Today's tray and specials on Instagram",
      "Paper stamp card at the counter",
    ],
  },
] as const;

export const neighbourNotes = [
  {
    text: "One of the best coffees in Crystal Palace. Great pastries and a chilled place to sit.",
    name: "Local guest",
    meta: "Google review",
    image: "/photos/ig-latte.jpg",
  },
  {
    text: "We had pancakes, eggs on sourdough and French toast, then took home florentines, a blonde brownie and a coconut macaroon.",
    name: "Brunch visit",
    meta: "Google review",
    image: "/photos/ig-brunch-bowl.jpg",
  },
  {
    text: "Francesca made a gluten free red velvet cake for our daughter. One of the best she has tasted.",
    name: "Birthday order",
    meta: "Google review",
    image: "/photos/ig-celebration-cake.jpg",
  },
];

export const locations = [
  {
    name: "Anerley Hill",
    kind: "Coffee bakery",
    address: "48 Anerley Hill, London SE19 2AE",
    note: "The original park side room. Breakfast, cakes, flowers and gifts.",
  },
  {
    name: "Anerley Road",
    kind: "Coffee and bar",
    address: "51-53 Anerley Road, London SE19 2AS",
    note: "Coffee through the day, cakes to take home, drinks later in the evening.",
  },
];

export const social = {
  instagram: "https://www.instagram.com/crespidia/",
  facebook: "https://www.facebook.com/crespidialondon/",
  mapsHill:
    "https://www.google.com/maps/search/?api=1&query=Crespidia+48+Anerley+Hill+London+SE19+2AE",
  mapsRoad: "https://maps.app.goo.gl/vqtXvDjrXFaWsiWg6",
};
