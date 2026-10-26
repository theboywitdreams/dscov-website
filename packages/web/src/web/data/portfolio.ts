export const projects = [
  {
    id: "sundae",
    name: "Sundae Social",
    category: "Branding",
    type: "Brand identity & packaging",
    year: "2026",
    art: "sundae",
    description:
      "A little sunshine, a lot of personality. A playful identity concept for an independent ice cream shop, designed to feel as good as the first scoop.",
    deliverables: [
      "Visual identity",
      "Colour & type system",
      "Packaging concept",
      "Social templates",
    ],
    approach:
      "A buttery yellow palette, friendly oversized lettering, and a simple sun symbol create an approachable identity that works from takeaway cups to social posts.",
  },
  {
    id: "form",
    name: "FORM Studio",
    category: "Web design",
    type: "Website concept & art direction",
    year: "2026",
    art: "form",
    description:
      "Space to think. An editorial website concept for an architecture studio, balancing expressive typography with a calm, intentional layout.",
    deliverables: [
      "Website art direction",
      "Responsive UI concept",
      "Project-page system",
      "Typography system",
    ],
    approach:
      "Muted olive tones, spacious grids, and oversized headings make the work the centre of attention. A clear navigation system keeps exploration effortless.",
  },
  {
    id: "zest",
    name: "Zest & Co.",
    category: "Branding",
    type: "Brand identity & print",
    year: "2026",
    art: "zest",
    description:
      "Fresh thinking, freshly squeezed. A vibrant concept identity for a juice brand with a confident orange-and-cream visual language.",
    deliverables: [
      "Wordmark concept",
      "Print collateral",
      "Brand colour system",
      "Campaign direction",
    ],
    approach:
      "Bold lettering and honest citrus imagery bring energy to every touchpoint. The identity was conceived to feel simple, optimistic, and instantly recognisable.",
  },
  {
    id: "field",
    name: "The Field Notes",
    category: "Print & editorial",
    type: "Editorial design & layout",
    year: "2026",
    art: "field",
    description:
      "Ideas worth putting on paper. An independent publication concept exploring creativity through expressive layouts and thoughtful type.",
    deliverables: ["Cover concept", "Editorial layout", "Type hierarchy", "Print design"],
    approach:
      "Lilac, charcoal, and a striking typographic rhythm give the publication a contemporary edge while retaining a tactile, printed feel.",
  },
] as const;
export type Project = (typeof projects)[number];
export const filters = ["All work", "Branding", "Web design", "Print & editorial"];
export const services = [
  {
    title: "Branding & identity",
    text: "A look that feels like you. Logos, colour, typography, and the details that make a brand memorable.",
    tags: "Logo design · Brand identity · Business cards",
  },
  {
    title: "Web design",
    text: "Thoughtful digital spaces that connect good design with a clear purpose. Built to work beautifully on every screen.",
    tags: "Portfolio sites · Business websites · Landing pages",
  },
  {
    title: "Print & documents",
    text: "From the first impression to the fine print. Clear, considered design for the things you put into the world.",
    tags: "Menus · CVs · Documents · Editorial design",
  },
];
