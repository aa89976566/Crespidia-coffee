export const gallery = [
  {
    src: "/photos/ta-1.jpg",
    alt: "Inside Crespidia",
    credit: "Guest photo",
  },
  {
    src: "/photos/ta-0.jpg",
    alt: "Food at Crespidia",
    credit: "Guest photo",
  },
  {
    src: "/photos/bright-0.jpg",
    alt: "Fresh bakery tray",
    credit: "",
  },
  {
    src: "/photos/bright-1.jpg",
    alt: "Cake slice",
    credit: "",
  },
  {
    src: "/photos/bright-6.jpg",
    alt: "Cookies and sweets",
    credit: "",
  },
  {
    src: "/photos/bright-4.jpg",
    alt: "Coffee cup",
    credit: "",
  },
  {
    src: "/photos/bright-8.jpg",
    alt: "Bakery counter",
    credit: "",
  },
  {
    src: "/photos/bright-2.jpg",
    alt: "Morning coffee",
    credit: "",
  },
];

export const neighbourNotes = [
  {
    text: "One of the best coffees in Crystal Palace. Great pastries and a chilled place to sit.",
    about: "google review",
    tone: "moss",
    image: "/photos/bright-4.jpg",
    imageAlt: "Coffee cup",
    tilt: "-3deg",
  },
  {
    text: "We had pancakes, eggs on sourdough and French toast, then took home florentines, a blonde brownie and a coconut macaroon.",
    about: "brunch regulars",
    tone: "sky",
    image: "/photos/ta-0.jpg",
    imageAlt: "Brunch plate at Crespidia",
    tilt: "2.5deg",
  },
  {
    text: "Francesca made a gluten free red velvet cake for our daughter. One of the best she has tasted.",
    about: "birthday cake",
    tone: "orange",
    image: "/photos/bright-1.jpg",
    imageAlt: "Cake slice",
    tilt: "-2deg",
  },
  {
    text: "Dog friendly, and lovely to sit outside watching the world go by.",
    about: "park visitors",
    tone: "berry",
    image: "/photos/ta-1.jpg",
    imageAlt: "Inside Crespidia near the park",
    tilt: "3deg",
  },
  {
    text: "Feels like a cozy front room full of vintage finds. Great lattes, and the home baked cakes are hard to leave behind.",
    about: "local guest",
    tone: "cream",
    image: "/photos/crespidia-fb.jpg",
    imageAlt: "Crespidia bakery room",
    tilt: "-1.5deg",
  },
] as const;

/** Real favourites named in Google / guest write-ups */
export const fromTheShop = [
  {
    title: "brunch plates",
    detail:
      "Buttermilk pancakes, eggs on sourdough, brioche French toast with bacon and maple.",
    image: "/photos/ta-0.jpg",
    imageAlt: "Brunch at Crespidia",
    tone: "sky",
    tilt: "-2.5deg",
  },
  {
    title: "cake tray",
    detail:
      "Florentines, blonde brownie, orange polenta, coconut macaroon, lemon cake and Victoria sponge.",
    image: "/photos/bright-1.jpg",
    imageAlt: "Cake slice",
    tone: "orange",
    tilt: "2deg",
  },
  {
    title: "coffee and pots",
    detail:
      "Strong flat whites and lattes, matcha lavender, rose mint tea, plant milks if you ask.",
    image: "/photos/bright-4.jpg",
    imageAlt: "Coffee",
    tone: "moss",
    tilt: "-1.5deg",
  },
  {
    title: "little shop bits",
    detail:
      "Vintage finds, flowers, plants and gifts around the room. Feels like a front room by the park.",
    image: "/photos/ta-1.jpg",
    imageAlt: "Inside Crespidia",
    tone: "berry",
    tilt: "3deg",
  },
  {
    title: "family kitchen",
    detail:
      "Francesca and family. Turkish white cherry jam on the table. Gluten free celebration cakes if you ask.",
    image: "/photos/crespidia-fb.jpg",
    imageAlt: "Crespidia bakery",
    tone: "cream",
    tilt: "-2deg",
  },
] as const;

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
