export interface Commodity {
  name: string;
  region: string;
  spec: string;
  category: "agriculture" | "mining";
}

export const AGRICULTURE_COMMODITIES: Commodity[] = [
  {
    name: "Sesame Seeds",
    region: "Benue, Jigawa, Kano",
    spec: "Nigeria is among the world's top 3 producers. Whitish, mixed, and brown grades.",
    category: "agriculture",
  },
  {
    name: "Cocoa Beans",
    region: "Cross River, Ondo, Ogun",
    spec: "Premium grades. Sun-dried, fermented, low-defect main and light crops.",
    category: "agriculture",
  },
  {
    name: "Cashew Nuts",
    region: "Kogi, Kwara, Enugu",
    spec: "Raw and processed. RCN export-grade, KOR 48–52, count 180–200.",
    category: "agriculture",
  },
  {
    name: "Ginger",
    region: "Kaduna highlands",
    spec: "Split and whole. Sun-dried, ≤10% moisture, premium pungency.",
    category: "agriculture",
  },
  {
    name: "Hibiscus Flower",
    region: "Jigawa, Bauchi, Katsina",
    spec: "Food and pharmaceutical grade. Cleaned, deep red, low foreign matter.",
    category: "agriculture",
  },
  {
    name: "Shea Butter & Nuts",
    region: "Niger, Kwara, Kebbi",
    spec: "Unrefined and refined. Cosmetic and food grades, FFA-tested.",
    category: "agriculture",
  },
  {
    name: "Soybeans",
    region: "Benue, Kaduna, Niger",
    spec: "Non-GMO, food-grade. Min 35% protein, ≤13% moisture.",
    category: "agriculture",
  },
  {
    name: "Dried Chili",
    region: "Sokoto, Kaduna",
    spec: "Multiple varieties. Bird-eye and bell, sun-dried, ASTA-graded.",
    category: "agriculture",
  },
  {
    name: "Palm Kernel",
    region: "Cross River, Imo, Edo",
    spec: "Oil and cake. PKO export-grade, FFA ≤3%.",
    category: "agriculture",
  },
];

export const MINING_COMMODITIES: Commodity[] = [
  {
    name: "Lithium Ore",
    region: "Nasarawa, Kaduna, Oyo",
    spec: "Spodumene and lepidolite. Li2O 1.5–4%, hand-sortable lots.",
    category: "mining",
  },
  {
    name: "Tin Ore",
    region: "Plateau State",
    spec: "Cassiterite. Sn 70%+, low Fe and W, traceable from ASM cooperatives.",
    category: "mining",
  },
  {
    name: "Lead & Zinc",
    region: "Ebonyi, Cross River",
    spec: "Concentrates. Pb 60–70% / Zn 50–55%, low Cd, mine-mouth verifiable.",
    category: "mining",
  },
  {
    name: "Tantalite (Coltan)",
    region: "Nasarawa, Kogi, Kaduna",
    spec: "High-grade. Ta2O5 25–35%, conflict-free traceable supply chain.",
    category: "mining",
  },
  {
    name: "Barite",
    region: "Cross River, Nasarawa",
    spec: "Drilling-grade. SG 4.20+, oil & gas API standard.",
    category: "mining",
  },
  {
    name: "Gemstones",
    region: "Oyo, Kaduna, Plateau",
    spec: "Tourmaline, sapphire, aquamarine. Rough and graded parcels.",
    category: "mining",
  },
  {
    name: "Tin Concentrate",
    region: "Plateau, Bauchi",
    spec: "Sn 65–72%. Smelter-grade with bulk shipping documentation.",
    category: "mining",
  },
  {
    name: "Iron Ore",
    region: "Kogi, Kaduna",
    spec: "Lump and fines. Fe 58–62%, magnetite and hematite blends.",
    category: "mining",
  },
];
