
export type CosmicObject = {
  slug: string;
  name: string;
  category: "Planet" | "Moon" | "Galaxy" | "Nebula" | "Star";
  subtitle: string;
  description: string;
  distance: string;
  diameter: string;
  notableFor: string;
  visual: string;
};

export const cosmicObjects: CosmicObject[] = [
  {
    slug: "earth",
    name: "Earth",
    category: "Planet",
    subtitle: "Our home in the cosmos",
    description:
      "Earth is the only world currently known to support life. Its atmosphere, liquid water, magnetic field, and dynamic surface make it a remarkable planetary system.",
    distance: "1 AU from the Sun",
    diameter: "12,742 km",
    notableFor: "Known life and liquid water on its surface",
    visual: "earth",
  },
  {
    slug: "mars",
    name: "Mars",
    category: "Planet",
    subtitle: "The red planet",
    description:
      "Mars is a rocky world with ancient river valleys, enormous volcanoes, polar ice, and evidence of a wetter past. It remains a major target for robotic exploration.",
    distance: "1.52 AU from the Sun",
    diameter: "6,779 km",
    notableFor: "Olympus Mons and evidence of ancient water",
    visual: "mars",
  },
  {
    slug: "saturn",
    name: "Saturn",
    category: "Planet",
    subtitle: "The world of rings",
    description:
      "Saturn is a gas giant surrounded by a spectacular ring system made mostly of icy particles. Its moons include worlds with fascinating environments and potential for scientific discovery.",
    distance: "9.58 AU from the Sun",
    diameter: "116,460 km",
    notableFor: "Its extensive ring system",
    visual: "saturn",
  },
  {
    slug: "andromeda",
    name: "Andromeda Galaxy",
    category: "Galaxy",
    subtitle: "Our galactic neighbor",
    description:
      "The Andromeda Galaxy is a large spiral galaxy and one of the closest major galaxies to the Milky Way. It offers a window into galactic structure and evolution.",
    distance: "About 2.5 million light-years",
    diameter: "About 220,000 light-years",
    notableFor: "A nearby major spiral galaxy",
    visual: "andromeda",
  },
  {
    slug: "pillars-of-creation",
    name: "Pillars of Creation",
    category: "Nebula",
    subtitle: "A stellar nursery",
    description:
      "The Pillars of Creation are towering columns of gas and dust in the Eagle Nebula. They are regions where stars form and where radiation shapes the surrounding material.",
    distance: "About 6,500 light-years",
    diameter: "Several light-years across",
    notableFor: "Star-forming clouds of gas and dust",
    visual: "nebula",
  },
  {
    slug: "sun",
    name: "The Sun",
    category: "Star",
    subtitle: "The star at the center of our system",
    description:
      "The Sun is a G-type main-sequence star whose energy drives Earth's climate and supports life. Its magnetic activity also produces solar flares and coronal mass ejections.",
    distance: "About 150 million km from Earth",
    diameter: "About 1.39 million km",
    notableFor: "The energy source of our Solar System",
    visual: "sun",
  },
];

export const atlasCategories = [
  "All",
  "Planet",
  "Moon",
  "Galaxy",
  "Nebula",
  "Star",
] as const;
