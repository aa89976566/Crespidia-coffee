import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Breakfast, brunch, homemade cakes, coffee, and drinks at Crespidia.",
};

const sections = [
  {
    title: "Breakfast & brunch",
    note: "Served through the morning — ask for today’s specials.",
    items: [
      {
        name: "Buttermilk pancakes",
        detail: "Natural yoghurt, maple syrup & berries",
      },
      {
        name: "Eggs on sourdough",
        detail: "Scrambled or poached, with crispy bacon if you like",
      },
      {
        name: "Brioche French toast",
        detail: "Bacon, banana & maple syrup",
      },
      {
        name: "Sourdough sandwiches",
        detail: "Including beef, gherkin & mustard mayo",
      },
    ],
  },
  {
    title: "Homemade bakery",
    note: "Tray bakes change with the day — gluten-free options available.",
    items: [
      { name: "Florentine", detail: "Crisp, nutty, take-home favourite" },
      { name: "Blonde brownie", detail: "Soft centre, golden top" },
      { name: "Orange polenta cake", detail: "Bright and fragrant" },
      { name: "Coconut macaroon", detail: "Generously sized" },
      {
        name: "Celebration cakes",
        detail: "Including gluten-free red velvet — ask Francesca",
      },
    ],
  },
  {
    title: "Coffee & drinks",
    note: "Oat, soy, almond & coconut milk available.",
    items: [
      { name: "Flat white / latte / cappuccino", detail: "Strong and smooth" },
      { name: "Matcha lavender", detail: "Subtle floral finish" },
      { name: "Rose mint tea", detail: "Loose leaf, served in a pot" },
      {
        name: "Cocktails, beer & wine",
        detail: "Evenings at Anerley Road Coffee & Bar",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-hot">
        Our carte
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl text-ink">
        Menu
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        A neighbourhood menu built around homemade bakery, proper coffee, and
        comforting breakfast plates. Prices and daily specials in store.
      </p>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="border-b-2 border-orange pb-3">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-ink">
                {section.title}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">{section.note}</p>
            </div>
            <ul className="mt-6 divide-y divide-ink/10">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-extrabold text-ink">{item.name}</span>
                  <span className="text-sm text-ink-soft sm:text-right">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 rounded-2xl bg-cream-deep px-5 py-4 text-sm text-ink-soft">
        Vegetarian, vegan, and gluten-free options available — please tell us
        about allergies when you order. We love looking after special requests.
      </p>
    </div>
  );
}
