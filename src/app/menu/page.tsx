import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Breakfast, cakes and coffee at Crespidia.",
};

const sections = [
  {
    title: "Breakfast",
    note: "Available through the morning.",
    items: [
      {
        name: "Buttermilk pancakes",
        detail: "With yoghurt, maple and berries",
      },
      {
        name: "Eggs on sourdough",
        detail: "Scrambled or poached. Bacon optional",
      },
      {
        name: "Brioche French toast",
        detail: "Bacon, banana and maple",
      },
      {
        name: "Sourdough sandwiches",
        detail: "Ask what fillings we have today",
      },
    ],
  },
  {
    title: "Cakes",
    note: "Baked here. The tray changes.",
    items: [
      { name: "Florentine", detail: "" },
      { name: "Blonde brownie", detail: "" },
      { name: "Orange polenta cake", detail: "" },
      { name: "Coconut macaroon", detail: "" },
      {
        name: "Celebration cakes",
        detail: "Order ahead if you can. Gluten free possible",
      },
    ],
  },
  {
    title: "Drinks",
    note: "Oat, soy, almond or coconut milk available.",
    items: [
      { name: "Flat white, latte, cappuccino", detail: "" },
      { name: "Matcha lavender", detail: "" },
      { name: "Rose mint tea", detail: "Served in a pot" },
      {
        name: "Beer, wine and cocktails",
        detail: "At the Anerley Road shop in the evening",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        Menu
      </h1>
      <p className="mt-4 text-lg text-ink-soft">
        A few favourites below. Prices are on the board inside, and we often
        have something extra on the day.
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
                  {item.detail ? (
                    <span className="text-sm text-ink-soft sm:text-right">
                      {item.detail}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-ink-soft">
        Allergies or gluten free needs? Tell us when you order and we will help.
      </p>
    </div>
  );
}
