
export enum Rarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Epic = "Epic",
  Legendary = "Legendary",
}

export enum Genes {
  Ears = "ears",
  Face = "face",
  Body = "body",
  Tail = "tail",
  Environment = "environment",
  Color = "color",
}

export const COLOR_BY_RARITY = {
  [Rarity.Common]: "_common.main",
  [Rarity.Uncommon]: "uncommon.main",
  [Rarity.Rare]: "rare.main",
  [Rarity.Epic]: "epic.main",
  [Rarity.Legendary]: "legendary.main",
};

export const HEX_COLOR_BY_RARITY = {
  [Rarity.Common]: "#b2b7be",
  [Rarity.Uncommon]: "#81c259",
  [Rarity.Rare]: "#47acf3",
  [Rarity.Epic]: "#826dd4",
  [Rarity.Legendary]: "#ffb82f",
};

export const RARITIES = [
  Rarity.Common,
  Rarity.Uncommon,
  Rarity.Rare,
  Rarity.Epic,
  Rarity.Legendary,
];


export const BREEDING_COUNT = {
  [Rarity.Common]: 3,
  [Rarity.Uncommon]: 4,
  [Rarity.Rare]: 5,
  [Rarity.Epic]: 6,
  [Rarity.Legendary]: 7,
};

export const BREEDING_MUTATION_GENE_LIMITS = {
  [Rarity.Common]: 100,
  [Rarity.Uncommon]: 30,
  [Rarity.Rare]: 20,
  [Rarity.Epic]: 10,
  [Rarity.Legendary]: 0,
};

export const BREEDING_COSTS_WLKN = {
  [Rarity.Common]: [300, 600, 900],
  [Rarity.Uncommon]: [500, 1000, 1500, 2000],
  [Rarity.Rare]: [800, 1600, 2400, 3200, 4000],
  [Rarity.Epic]: [1200, 2400, 3600, 4800, 6000, 7200],
  [Rarity.Legendary]: [2000, 4000, 6000, 8000, 10000, 12000, 14000],
};

export const BREEDING_COSTS_GEMS = [50, 100, 150, 200, 250, 300, 350];

export const BREEDING_MUTATION_RATE = {
  6: -3,
  7: -2,
  8: -1,
  9: 0,
  10: 0,
};

export const BREEDING_PARENT_CONTRIBUTION = {
  6: 5,
  7: 10,
  8: 15,
  9: 20,
  10: 30,
};

