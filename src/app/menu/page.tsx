import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Breakfast, homemade cakes and coffee at Crespidia.",
};

const sections = [
  {
    title: "Breakfast and brunch",
    note: "Through the morning. Ask what specials we have on.",
    items: [
      {
        name: "Buttermilk pancakes",
        detail: "Yoghurt, maple syrup and berries",
      },
      {
        name: "Eggs on sourdough",
        detail: "Scrambled or poached, bacon if you want it",
      },
      {
        name: "Brioche French toast",
        detail: "Bacon, banana and maple",
      },
      {
        name: "Sourdough sandwiches",
        detail: "Including the beef, gherkin and mustard mayo one people keep ordering",
      },
    ],
  },
  {
    title: "Homemade cakes",
    note: "Changes with the day. We usually have gluten free options too.",
    items: [
      { name: "Florentine", detail: "Crisp and nutty" },
      { name: "Blonde brownie", detail: "Soft in the middle" },
      { name: "Orange polenta cake", detail: "Nice with a coffee" },
      { name: "Coconut macaroon", detail: "Properly big" },
      {
        name: "Celebration cakes",
        detail: "Ask us. We can do gluten free red velvet too",
      },
    ],
  },
  {
    title: "Coffee and drinks",
    note: "Oat, soy, almond or coconut milk is fine.",
    items: [
      { name: "Flat white, latte, cappuccino", detail: "As you like it" },
      { name: "Matcha lavender", detail: "Gentle floral note" },
      { name: "Rose mint tea", detail: "Loose leaf, in a pot" },
      {
        name: "Cocktails, beer and wine",
        detail: "Later on at the Anerley Road shop",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-ink">
        Menu
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Homemade cakes, breakfast plates and a decent coffee. Prices are on the
        board in the shop, and specials change when we feel like baking
        something new.
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
        If you have an allergy or need something gluten free, just tell us when
        you order. We will sort it out.
      </p>
    </div>
  );
}
