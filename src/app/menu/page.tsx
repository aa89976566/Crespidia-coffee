import type { Metadata } from "next";
import { social } from "@/data/shop";

export const metadata: Metadata = {
  title: "Menu",
  description: "Breakfast, cakes and coffee at Crespidia.",
};

const sections = [
  {
    title: "Breakfast",
    note: "Through the morning. Popular after park walks.",
    items: [
      {
        name: "Buttermilk pancakes",
        detail: "Yoghurt, maple syrup and berries",
      },
      {
        name: "Eggs on sourdough",
        detail: "Scrambled or poached, bacon if you want",
      },
      {
        name: "Brioche French toast",
        detail: "Bacon, banana and maple",
      },
      {
        name: "Sourdough sandwiches",
        detail: "Ask what is on today",
      },
    ],
  },
  {
    title: "Cakes from the kitchen",
    note: "Baked here. Guests often take a box home.",
    items: [
      { name: "Lemon cake", detail: "A local favourite" },
      { name: "Victoria sponge", detail: "" },
      { name: "Florentine", detail: "" },
      { name: "Blonde brownie", detail: "" },
      { name: "Orange polenta cake", detail: "" },
      { name: "Coconut macaroon", detail: "Properly big" },
      {
        name: "Celebration cakes",
        detail: "Ask Francesca. Gluten free possible",
      },
    ],
  },
  {
    title: "Drinks",
    note: "Oat, soy, almond or coconut milk available.",
    items: [
      { name: "Flat white, latte, cappuccino", detail: "Strong and smooth" },
      { name: "Matcha lavender", detail: "Soft floral note" },
      { name: "Rose mint tea", detail: "Loose leaf in a pot" },
      {
        name: "Beer, wine and cocktails",
        detail: "Later on at Anerley Road",
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
        A few things people keep coming back for. Prices are on the board, and
        the cake tray changes with the day. Fresh photos land on{" "}
        <a
          href={social.instagram}
          className="font-semibold text-orange-hot underline"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        .
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

      <p className="mt-12 rounded-2xl bg-mist px-5 py-4 text-sm text-ink-soft">
        Allergies or gluten free needs? Tell us when you order. We will help if
        we can.
      </p>
    </div>
  );
}
