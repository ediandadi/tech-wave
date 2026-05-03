export interface Article {
  slug: string;
  category: "Agriculture" | "Mining" | "Sourcing";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "sesame-outlook-2026",
    category: "Agriculture",
    title: "Sesame Outlook 2026: Nigeria's Position in the Global Market",
    excerpt:
      "Nigeria is now the world's third-largest sesame producer. We map the supply chain from farms in Benue and Jigawa to international buyers — and where the leverage points sit.",
    date: "Apr 2026",
    readTime: "9 min read",
  },
  {
    slug: "lithium-nigeria-industrial-scale",
    category: "Mining",
    title: "Lithium in Nigeria: From Artisanal to Industrial Scale",
    excerpt:
      "Nigeria's lithium deposits are real, but the supply chain is fragmented. A field perspective on what it takes to source ethically and at scale.",
    date: "Mar 2026",
    readTime: "12 min read",
  },
  {
    slug: "sourcing-west-africa-buyers-guide",
    category: "Sourcing",
    title: "Sourcing West African Commodities: A Buyer's Field Guide",
    excerpt:
      "Six pitfalls international buyers consistently hit, and a practical framework for de-risking origination across Nigeria, Ghana, Côte d'Ivoire, and Cameroon.",
    date: "Mar 2026",
    readTime: "14 min read",
  },
];
