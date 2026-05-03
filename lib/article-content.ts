// Long-form content for each article. Each section is a paragraph or H2.
export interface ArticleSection {
  type: "p" | "h2" | "ul" | "quote";
  content: string | string[];
}

export const ARTICLE_CONTENT: Record<string, ArticleSection[]> = {
  "sesame-outlook-2026": [
    {
      type: "p",
      content:
        "Nigeria has quietly become one of the most important sesame producers in the world. Trailing only Sudan and India in volume, the country now exports over 250,000 metric tonnes of sesame seed annually — and the share moving directly to manufacturers in Japan, Turkey, China, and the Levant is growing every year.",
    },
    {
      type: "p",
      content:
        "Yet despite the scale, the supply chain remains fragmented. Most international buyers source through layered intermediaries who originate from a handful of producing states — Benue, Jigawa, Kano, Yobe, and Nasarawa — with no consistent quality verification at the farm gate.",
    },
    {
      type: "h2",
      content: "Where the volume comes from",
    },
    {
      type: "p",
      content:
        "Production is concentrated in three belts. The Middle Belt (primarily Benue and Nasarawa) produces a higher-oil-content seed favored by tahini and confectionery manufacturers. The Northwest (Jigawa, Kano, Katsina) produces lighter, whiter seed often preferred by Japanese and Korean buyers. The Northeast (Yobe, Gombe) is the volume corridor — bulk-grade seed for crushing and oil extraction.",
    },
    {
      type: "p",
      content:
        "Each belt has its own logistics quirks, harvest windows, and counterparty risk profile. A buyer who treats Nigerian sesame as a single market is leaving 8–12% of margin on the table, every season.",
    },
    {
      type: "h2",
      content: "Quality reality vs. claims",
    },
    {
      type: "p",
      content:
        "Three failure modes dominate. First, moisture content drift — sesame harvested late in the rains can ship at 9–11% moisture and self-heat in transit. Second, foreign matter — small stones and broken seed reduce extractable oil yield. Third, varietal blending — visually similar seeds with very different oil profiles get mixed at upcountry consolidation points.",
    },
    {
      type: "p",
      content:
        "The fix is not exotic. Pre-shipment inspection at port, combined with sample testing during consolidation upcountry, catches all three. The cost is a fraction of one shipment's worth of margin lost to off-spec delivery.",
    },
    {
      type: "h2",
      content: "Outlook for 2026",
    },
    {
      type: "p",
      content:
        "We expect Nigerian sesame to remain firm against global benchmarks through 2026, with two structural drivers. The naira's positioning makes export pricing competitive against Sudanese and East African origins. And the gradual industrialization of upcountry consolidation — driven by better roads, more bonded warehouses, and standardized contracts — is making large-volume sourcing materially less risky than it was even three years ago.",
    },
    {
      type: "p",
      content:
        "For buyers entering the Nigerian sesame market for the first time, our recommendation is unchanged: start with one verified producing region, one inspection partner, and one shipment under tight documentation discipline. Scale only after the operational pattern is proven.",
    },
  ],

  "lithium-nigeria-industrial-scale": [
    {
      type: "p",
      content:
        "Nigeria's lithium deposits are real, geographically distributed, and increasingly accessible. What they are not — yet — is a coherent supply chain. For buyers and processors looking to diversify away from concentrated origins in Australia, Chile, and the DRC, this is both an opportunity and a hazard.",
    },
    {
      type: "h2",
      content: "What's in the ground",
    },
    {
      type: "p",
      content:
        "Confirmed and prospective lithium-bearing pegmatites have been mapped across Nasarawa, Kogi, Kaduna, Oyo, and Ekiti states. The dominant minerals are spodumene and lepidolite, with secondary occurrences of petalite. Grades vary widely — from artisanal hand-sorted lots running 4–6% Li2O to bulk-grade material at 1.5–2.5% — but Nigeria's strong point is its accessibility: most deposits are within reach of existing road infrastructure and within a day's drive of either Lagos or Port Harcourt.",
    },
    {
      type: "h2",
      content: "Artisanal vs. industrial",
    },
    {
      type: "p",
      content:
        "Today, the bulk of exportable Nigerian lithium comes from artisanal and small-scale mining (ASM) cooperatives. This means the supply chain looks more like agriculture than mining: many small producers, intermediated by aggregators, with quality and quantity varying load-to-load.",
    },
    {
      type: "p",
      content:
        "For buyers, this has two implications. First, traceability is hard but not impossible — it requires a sourcing partner who knows the cooperative structure on the ground. Second, the price-quality curve is non-trivial: hand-sorted ASM material at 5%+ Li2O exists, but you have to know what you're buying and from whom.",
    },
    {
      type: "h2",
      content: "The compliance overlay",
    },
    {
      type: "p",
      content:
        "Any serious lithium buyer needs to satisfy ESG and chain-of-custody expectations from their downstream customers. Nigeria's emerging mining regulatory regime is workable but uneven. The practical path is to combine state-level mining lease verification, ASM cooperative documentation, and independent third-party chain-of-custody audits — none of which are off-the-shelf, all of which are sourceable with the right local partner.",
    },
    {
      type: "h2",
      content: "What scales next",
    },
    {
      type: "p",
      content:
        "Nigeria's federal government has signaled intent to push more lithium beneficiation onshore — concentrators, then refineries. That's still 18–36 months out from real industrial throughput, in our reading. In the interim, buyers willing to engage at the cooperative-and-aggregator level have a window: lower entry costs than industrial-only origins, less crowded competition, and the chance to build long-term producer relationships before the market formalizes.",
    },
    {
      type: "p",
      content:
        "Our advice to first-time buyers is the same as for any frontier supply chain: small, traceable, well-documented test cargo first. Volume comes later, after operational confidence is built.",
    },
  ],

  "sourcing-west-africa-buyers-guide": [
    {
      type: "p",
      content:
        "International buyers entering West African commodity markets — whether sourcing cocoa from Ghana and Côte d'Ivoire, sesame and ginger from Nigeria, or shea from Burkina Faso — consistently make the same six mistakes in their first year. This is a field guide to avoiding them.",
    },
    {
      type: "h2",
      content: "1. Treating West Africa as a single market",
    },
    {
      type: "p",
      content:
        "Nigeria, Ghana, Côte d'Ivoire, and Cameroon have very different export regimes, currency dynamics, and counterparty cultures. A single contracting standard that works in Accra will fail in Abidjan. Your sourcing playbook needs to be country-specific from day one.",
    },
    {
      type: "h2",
      content: "2. Confusing the broker for the source",
    },
    {
      type: "p",
      content:
        "Most international buyers transact, in their first deal, with someone two or three layers removed from the actual producer. Ask: who owns the farm or the mine? Who controls the warehouse? Who signs the export documentation? If the answer is unclear, you are buying from an intermediary, not a source — and the price reflects it.",
    },
    {
      type: "h2",
      content: "3. Skipping pre-shipment inspection",
    },
    {
      type: "p",
      content:
        "The single most common cause of dispute on first West African shipments is delivered goods materially differing from contracted spec. Pre-shipment inspection — by SGS, Bureau Veritas, or an equivalent accredited third party — catches this before payment. The cost is a small fraction of one off-spec shipment.",
    },
    {
      type: "h2",
      content: "4. Underestimating documentation",
    },
    {
      type: "p",
      content:
        "The export documentation chain in Nigeria alone — NEPC certificate, NXP form, Certificate of Origin, phytosanitary, fumigation certificate, pre-shipment inspection report, bill of lading — has 8–12 distinct documents per shipment. Each has a controlling authority and a validity window. Documentation handled by someone who hasn't done it before is the single largest source of last-minute delays.",
    },
    {
      type: "h2",
      content: "5. Wiring before you should",
    },
    {
      type: "p",
      content:
        "Tying full payment to a vague delivery milestone is the classic first-time-buyer mistake. The fix is straightforward: structured payment milestones tied to verifiable events (deposit on contract, balance against bill of lading), with optional escrow via independent third-party providers. Never to a sourcing agent's account.",
    },
    {
      type: "h2",
      content: "6. Treating it as one shipment",
    },
    {
      type: "p",
      content:
        "First shipments rarely make money. Second shipments break even. By the third or fourth, with the operational pattern stabilized and the right counterparties identified, the economics turn. Buyers who treat origination as a one-shot transaction lose money. Buyers who commit to building a sourcing operation across 6–12 months win.",
    },
    {
      type: "h2",
      content: "The shorter version",
    },
    {
      type: "p",
      content:
        "Verify everything. Pay against documents, not promises. Pick one country and one commodity for your first cycle, not three. Use accredited third parties for inspection. Hire local — or partner with someone who already is. And budget for the first shipment to teach you something rather than make you money.",
    },
  ],
};
