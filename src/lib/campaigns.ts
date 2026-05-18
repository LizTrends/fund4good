export type Campaign = {
  id: string;
  title: string;
  category: string;
  summary: string;
  story: string;
  creator: string;
  goal: number; // XLM
  raised: number; // XLM
  backers: number;
  daysLeft: number;
  image: string;
};

export const campaigns: Campaign[] = [
  {
    id: "solar-schools-kenya",
    title: "Solar Power for Rural Schools",
    category: "Education",
    summary:
      "Bringing reliable solar electricity to twelve off-grid primary schools in western Kenya.",
    story:
      "We're partnering with local engineers to install solar arrays and battery storage at twelve schools serving over 4,000 children. Funds cover panels, batteries, installation, and a three-year maintenance plan.",
    creator: "Asha Otieno",
    goal: 50000,
    raised: 32400,
    backers: 412,
    daysLeft: 18,
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "open-source-medical",
    title: "Open-Source Medical Devices",
    category: "Health",
    summary:
      "Building affordable, open-hardware infusion pumps for clinics in low-resource regions.",
    story:
      "Our team of biomedical engineers is finalizing certification for an open-source infusion pump that costs 80% less than commercial alternatives. Pledges fund tooling and the first 200 units.",
    creator: "Dr. Marco Lévi",
    goal: 120000,
    raised: 87650,
    backers: 1284,
    daysLeft: 32,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "coral-restoration",
    title: "Coral Reef Restoration Lab",
    category: "Environment",
    summary:
      "A floating lab to grow heat-resilient coral and replant degraded reefs in the Caribbean.",
    story:
      "Working with marine biologists, we're funding a solar-powered coral nursery. Each pledge directly supports cultivation of resilient coral strains and reef replanting expeditions.",
    creator: "Reef Forward",
    goal: 80000,
    raised: 21300,
    backers: 256,
    daysLeft: 47,
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "indie-film-archive",
    title: "Independent Film Archive",
    category: "Arts",
    summary:
      "Digitizing and preserving 1,200 lost independent films from the 1970s–1990s.",
    story:
      "A nonprofit film collective is racing to digitize fragile 16mm prints before they degrade. Backers receive early access to the restored archive.",
    creator: "Reel Memory Project",
    goal: 35000,
    raised: 28940,
    backers: 689,
    daysLeft: 9,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "community-kitchen",
    title: "Community Kitchen Co-op",
    category: "Community",
    summary:
      "A worker-owned community kitchen serving 500 meals a day with locally sourced produce.",
    story:
      "We've secured a downtown space and a team of five chefs. Pledges fund equipment, the first six months of payroll, and a sliding-scale meal program.",
    creator: "Mesa Común",
    goal: 65000,
    raised: 41220,
    backers: 538,
    daysLeft: 24,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "water-sensors",
    title: "Open Water Quality Sensors",
    category: "Technology",
    summary:
      "Low-cost, open-source water sensors so communities can monitor their own rivers.",
    story:
      "A network of low-cost sensors paired with a public dashboard. Pledges manufacture and deploy the first 300 sensors across three watersheds.",
    creator: "Hydra Labs",
    goal: 42000,
    raised: 39870,
    backers: 901,
    daysLeft: 5,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

export const getCampaign = (id: string) => campaigns.find((c) => c.id === id);

export const formatXLM = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n) + " XLM";
