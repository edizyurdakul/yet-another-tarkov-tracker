// Mock data layer for the Tarkov Progression dashboard.
// All values are illustrative and replaceable with real player/API data.

export type Trader = {
  id: string;
  name: string;
  role: string;
  loyalty: number;
  standing: number;
  questsCompleted: number;
  questsTotal: number;
  nextTierLevel: number;
  nextTierSpend: number;
  nextTierStanding: number;
};

export type QuestStatus = "completed" | "in-progress" | "available" | "locked";

export type Quest = {
  id: string;
  name: string;
  trader: string;
  map: string;
  status: QuestStatus;
  level: number;
  objectives: string[];
  objectivesDone: number;
  keyItems: string[];
  prerequisites: string[];
  unlocks: string[];
  exp: number;
  description: string;
};

export type HideoutModule = {
  id: string;
  name: string;
  currentLevel: number;
  maxLevel: number;
  state: "upgradable" | "locked" | "maxed";
  requirements: { label: string; have: number; need: number }[];
  modulesRequired: string[];
  traderRequired: string | null;
};

export type Craft = {
  id: string;
  name: string;
  station: string;
  durationMin: number;
  inputs: { item: string; qty: number }[];
  inputCost: number;
  output: string;
  outputValue: number;
};

export type Activity = {
  id: string;
  type: "quest" | "hideout" | "trader" | "craft";
  text: string;
  detail: string;
  time: string;
};

export const character = {
  name: "GHOST_07",
  faction: "USEC",
  level: 42,
  edition: "Edge of Darkness",
  session: "Raid · Customs · 24:11",
};

export const traders: Trader[] = [
  {
    id: "prapor",
    name: "Prapor",
    role: "Arms Dealer",
    loyalty: 4,
    standing: 100,
    questsCompleted: 41,
    questsTotal: 41,
    nextTierLevel: 0,
    nextTierSpend: 0,
    nextTierStanding: 0,
  },
  {
    id: "therapist",
    name: "Therapist",
    role: "Medical Supply",
    loyalty: 3,
    standing: 64,
    questsCompleted: 28,
    questsTotal: 34,
    nextTierLevel: 42,
    nextTierSpend: 4800000,
    nextTierStanding: 0.45,
  },
  {
    id: "skier",
    name: "Skier",
    role: "Black Market",
    loyalty: 3,
    standing: 38,
    questsCompleted: 22,
    questsTotal: 31,
    nextTierLevel: 40,
    nextTierSpend: 3500000,
    nextTierStanding: 0.4,
  },
  {
    id: "peacekeeper",
    name: "Peacekeeper",
    role: "UN Contractor",
    loyalty: 2,
    standing: 71,
    questsCompleted: 18,
    questsTotal: 29,
    nextTierLevel: 30,
    nextTierSpend: 2900000,
    nextTierStanding: 0.3,
  },
  {
    id: "mechanic",
    name: "Mechanic",
    role: "Gunsmith",
    loyalty: 2,
    standing: 52,
    questsCompleted: 15,
    questsTotal: 26,
    nextTierLevel: 28,
    nextTierSpend: 2200000,
    nextTierStanding: 0.25,
  },
  {
    id: "ragman",
    name: "Ragman",
    role: "Gear & Apparel",
    loyalty: 2,
    standing: 19,
    questsCompleted: 11,
    questsTotal: 24,
    nextTierLevel: 24,
    nextTierSpend: 1800000,
    nextTierStanding: 0.2,
  },
  {
    id: "jaeger",
    name: "Jaeger",
    role: "Woodsman",
    loyalty: 1,
    standing: 83,
    questsCompleted: 6,
    questsTotal: 22,
    nextTierLevel: 15,
    nextTierSpend: 980000,
    nextTierStanding: 0.15,
  },
];

export const quests: Quest[] = [
  {
    id: "q1",
    name: "Debut",
    trader: "Prapor",
    map: "Customs",
    status: "completed",
    level: 1,
    objectives: ["Eliminate 5 Scavs on Customs", "Obtain 2 MP-133 shotguns"],
    objectivesDone: 2,
    keyItems: ["MP-133 12ga"],
    prerequisites: [],
    unlocks: ["Checking", "Shootout Picnic"],
    exp: 1700,
    description:
      "Prapor's introductory contract. Prove you can survive contact and pull basic kit off dead Scavs.",
  },
  {
    id: "q2",
    name: "Checking",
    trader: "Prapor",
    map: "Customs",
    status: "completed",
    level: 2,
    objectives: ["Locate the bronze pocket watch", "Hand over to Prapor"],
    objectivesDone: 2,
    keyItems: ["Bronze pocket watch"],
    prerequisites: ["Debut"],
    unlocks: ["Postman Pat - Part 1"],
    exp: 2000,
    description: "Recover a sentimental item from the dorms area of Customs.",
  },
  {
    id: "q3",
    name: "Supply Plans",
    trader: "Prapor",
    map: "Woods",
    status: "in-progress",
    level: 20,
    objectives: [
      "Survive and extract from Woods",
      "Find the Toughbook in the sawmill",
      "Hand over 3 bolts",
    ],
    objectivesDone: 1,
    keyItems: ["Toughbook", "Bolt x3"],
    prerequisites: ["Big Customer"],
    unlocks: ["No Offence"],
    exp: 14000,
    description:
      "Disrupt a rival supply route. Requires deep map knowledge of the Woods sawmill complex.",
  },
  {
    id: "q4",
    name: "Sanitary Standards - Part 1",
    trader: "Therapist",
    map: "Interchange",
    status: "in-progress",
    level: 14,
    objectives: ["Find 3 medical bags", "Locate the OLI sales register"],
    objectivesDone: 2,
    keyItems: ["Medbag SMU06", "OLI register"],
    prerequisites: ["Shortage"],
    unlocks: ["Sanitary Standards - Part 2"],
    exp: 8900,
    description: "Audit the medical supplies stored across the Interchange mall before they spoil.",
  },
  {
    id: "q5",
    name: "The Punisher - Part 3",
    trader: "Prapor",
    map: "Shoreline",
    status: "available",
    level: 30,
    objectives: ["Eliminate 15 Scavs with an SVD", "Survive 3 raids on Shoreline"],
    objectivesDone: 0,
    keyItems: ["SVD-S"],
    prerequisites: ["The Punisher - Part 2"],
    unlocks: ["The Punisher - Part 4"],
    exp: 16200,
    description: "A high-difficulty marksman contract. Reputation rewards across the board.",
  },
  {
    id: "q6",
    name: "Chemical - Part 4",
    trader: "Skier",
    map: "Factory",
    status: "available",
    level: 24,
    objectives: ["Eliminate 5 PMCs on Factory", "Retrieve the sample case"],
    objectivesDone: 0,
    keyItems: ["Sample case"],
    prerequisites: ["Chemical - Part 3"],
    unlocks: ["Out of Curiosity"],
    exp: 11500,
    description: "Close-quarters extraction of a contaminated chemical sample.",
  },
  {
    id: "q7",
    name: "Gunsmith - Part 8",
    trader: "Mechanic",
    map: "Hideout",
    status: "locked",
    level: 32,
    objectives: ["Build an M4A1 to spec", "Hand over to Mechanic"],
    objectivesDone: 0,
    keyItems: ["M4A1", "Required attachments"],
    prerequisites: ["Gunsmith - Part 7"],
    unlocks: ["Gunsmith - Part 9"],
    exp: 17800,
    description: "Assemble a weapon matching exact attachment, ergonomics and recoil requirements.",
  },
  {
    id: "q8",
    name: "The Survivalist Path - Junkie",
    trader: "Jaeger",
    map: "Woods",
    status: "locked",
    level: 20,
    objectives: ["Survive without healing", "Extract with a specific status"],
    objectivesDone: 0,
    keyItems: [],
    prerequisites: ["The Survivalist Path - Thrifty"],
    unlocks: ["The Survivalist Path - Tough"],
    exp: 9700,
    description: "Endure a raid under harsh survival constraints set by Jaeger.",
  },
];

export const hideoutModules: HideoutModule[] = [
  {
    id: "generator",
    name: "Generator",
    currentLevel: 2,
    maxLevel: 3,
    state: "upgradable",
    requirements: [
      { label: "Crickent lighter", have: 1, need: 1 },
      { label: "Spark plug", have: 2, need: 3 },
      { label: "Energy-saving lamp", have: 4, need: 5 },
    ],
    modulesRequired: ["Lavatory L1"],
    traderRequired: null,
  },
  {
    id: "medstation",
    name: "Medstation",
    currentLevel: 1,
    maxLevel: 3,
    state: "upgradable",
    requirements: [
      { label: "Ophthalmoscope", have: 1, need: 1 },
      { label: "Medical bloodset", have: 0, need: 2 },
    ],
    modulesRequired: ["Generator L1"],
    traderRequired: "Therapist LL2",
  },
  {
    id: "workbench",
    name: "Workbench",
    currentLevel: 2,
    maxLevel: 3,
    state: "locked",
    requirements: [
      { label: "Pack of nails", have: 0, need: 2 },
      { label: "Ratchet wrench", have: 1, need: 2 },
    ],
    modulesRequired: ["Lavatory L2"],
    traderRequired: "Mechanic LL3",
  },
  {
    id: "intel",
    name: "Intelligence Center",
    currentLevel: 1,
    maxLevel: 3,
    state: "upgradable",
    requirements: [
      { label: "Military COFDM", have: 1, need: 1 },
      { label: "Phased array element", have: 1, need: 2 },
    ],
    modulesRequired: ["Generator L2"],
    traderRequired: "Therapist LL2",
  },
  {
    id: "watercollector",
    name: "Water Collector",
    currentLevel: 0,
    maxLevel: 3,
    state: "locked",
    requirements: [
      { label: "Water filter", have: 0, need: 4 },
      { label: "Silicone tube", have: 2, need: 4 },
    ],
    modulesRequired: ["Generator L2", "Vents L1"],
    traderRequired: null,
  },
  {
    id: "nutrition",
    name: "Nutrition Unit",
    currentLevel: 1,
    maxLevel: 3,
    state: "maxed",
    requirements: [],
    modulesRequired: [],
    traderRequired: null,
  },
  {
    id: "shooting",
    name: "Shooting Range",
    currentLevel: 0,
    maxLevel: 3,
    state: "upgradable",
    requirements: [
      { label: "Wires", have: 6, need: 6 },
      { label: "Metal spare parts", have: 3, need: 5 },
    ],
    modulesRequired: ["Workbench L1"],
    traderRequired: null,
  },
  {
    id: "security",
    name: "Security",
    currentLevel: 1,
    maxLevel: 3,
    state: "locked",
    requirements: [
      { label: "Bolts", have: 1, need: 4 },
      { label: "Electric drill", have: 0, need: 1 },
    ],
    modulesRequired: ["Generator L1"],
    traderRequired: "Prapor LL2",
  },
];

export const crafts: Craft[] = [
  {
    id: "c1",
    name: "Bottled water craft",
    station: "Water Collector",
    durationMin: 165,
    inputs: [{ item: "Empty bottle", qty: 4 }],
    inputCost: 12000,
    output: "Bottled water x4",
    outputValue: 38000,
  },
  {
    id: "c2",
    name: "Propital craft",
    station: "Medstation",
    durationMin: 480,
    inputs: [
      { item: "Saline", qty: 2 },
      { item: "Syringe", qty: 1 },
    ],
    inputCost: 41000,
    output: "Propital",
    outputValue: 39000,
  },
  {
    id: "c3",
    name: "Gunpowder Kite",
    station: "Lavatory",
    durationMin: 145,
    inputs: [
      { item: "Sodium", qty: 1 },
      { item: "Mol. nitric acid", qty: 1 },
    ],
    inputCost: 22000,
    output: "Gunpowder Kite x4",
    outputValue: 64000,
  },
  {
    id: "c4",
    name: "7.62x39 BP craft",
    station: "Workbench",
    durationMin: 210,
    inputs: [
      { item: "Gunpowder Kite", qty: 2 },
      { item: "Brass", qty: 1 },
    ],
    inputCost: 48000,
    output: "7.62x39 BP x60",
    outputValue: 96000,
  },
  {
    id: "c5",
    name: "Graphics card mining",
    station: "Bitcoin Farm",
    durationMin: 2400,
    inputs: [{ item: "GPU uptime", qty: 1 }],
    inputCost: 0,
    output: "Physical Bitcoin",
    outputValue: 210000,
  },
  {
    id: "c6",
    name: "Military cable craft",
    station: "Intelligence Center",
    durationMin: 320,
    inputs: [
      { item: "PCB", qty: 2 },
      { item: "Wires", qty: 3 },
    ],
    inputCost: 58000,
    output: "Military cable x2",
    outputValue: 51000,
  },
  {
    id: "c7",
    name: "Salewa craft",
    station: "Medstation",
    durationMin: 200,
    inputs: [
      { item: "AI-2 medkit", qty: 2 },
      { item: "Painkillers", qty: 1 },
    ],
    inputCost: 19000,
    output: "Salewa",
    outputValue: 33000,
  },
];

export const activity: Activity[] = [
  {
    id: "a1",
    type: "quest",
    text: "Completed Checking",
    detail: "Prapor · +2,000 EXP · +0.03 rep",
    time: "12m ago",
  },
  {
    id: "a2",
    type: "hideout",
    text: "Upgraded Nutrition Unit to L1",
    detail: "Consumed 4 items",
    time: "1h ago",
  },
  {
    id: "a3",
    type: "trader",
    text: "Reached Loyalty Tier 3 with Therapist",
    detail: "Unlocked new med supplies",
    time: "3h ago",
  },
  {
    id: "a4",
    type: "craft",
    text: "Collected 7.62x39 BP x60",
    detail: "Workbench · +48,000 ₽ profit",
    time: "5h ago",
  },
  {
    id: "a5",
    type: "quest",
    text: "Started Supply Plans",
    detail: "Prapor · Woods",
    time: "7h ago",
  },
];

export function formatRubles(value: number) {
  return `${value.toLocaleString("en-US")} ₽`;
}

export function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}
