
export type Project = {
  visual: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  status: "Planned" | "In progress" | "Completed" | "In exploration";
  featured: boolean;
  cover: string;
};

export const projects: Project[] = [
  {
    slug: "orbital-systems-study",
    title: "Orbital Systems Study",
    category: "Orbital Mechanics",
    description:
      "An exploration of orbital mechanics, mission parameters, and the fundamentals of designing a space mission.",
    status: "Planned",
    featured: true,
    cover: "/projects/orbital-systems.jpg",
    visual: "orbit",
  },
  {
    slug: "flight-dynamics-simulation",
    title: "Flight Dynamics Simulation",
    category: "Flight Dynamics",
    description:
      "A numerical simulation exploring motion, forces, and the dynamics of aerospace vehicles.",
    status: "Planned",
    featured: true,
    cover: "/projects/flight-dynamics.jpg",
    visual: "simulation",
  },
  {
    slug: "propulsion-fundamentals",
    title: "Propulsion Fundamentals",
    category: "Propulsion",
    description:
      "A technical study of propulsion principles, performance parameters, and rocket engine fundamentals.",
    status: "In exploration",
    featured: false,
    cover: "/projects/propulsion.jpg",
    visual: "default",
  },
];
