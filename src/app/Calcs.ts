import { padStart } from "lodash";
import {
  BREEDING_MUTATION_RATE,
  BREEDING_PARENT_CONTRIBUTION,
  Genes,
  RARITIES,
  Rarity,
} from "./Constant";
import { Cathlete } from "./Models/CathModel";


type BreedingGene = { [key in Rarity]: number };
type BreedingGenes = { [key in Genes]: { [key in Rarity]: number } };

const INITIAL_GENE: BreedingGene = {
  [Rarity.Common]: 0,
  [Rarity.Uncommon]: 0,
  [Rarity.Rare]: 0,
  [Rarity.Epic]: 0,
  [Rarity.Legendary]: 0,
};

const mutateRarity = (rarity: Rarity, mutation: number) => {
  return RARITIES[Math.max(0, RARITIES.indexOf(rarity) + mutation)];
};

export const calcBreedingGene = (
  mother: Cathlete,
  father: Cathlete,
  gene: Genes
): BreedingGene => {
  // @ts-expect-error
  const motherContribution: number = BREEDING_PARENT_CONTRIBUTION[mother.level];
  // @ts-expect-error
  const motherGeneMutation: number = BREEDING_MUTATION_RATE[mother.level];

  // @ts-expect-error
  const fatherContribution: number = BREEDING_PARENT_CONTRIBUTION[father.level];
  // @ts-expect-error
  const fatherGeneMutation: number = BREEDING_MUTATION_RATE[father.level];

  const motherGeneRarity = (mother.genes[gene] as Rarity) ?? Rarity.Common;
  const fatherGeneRarity = (father.genes[gene] as Rarity) ?? Rarity.Common;

  const geneValue = { ...INITIAL_GENE };

  let motherMutationContribution = motherContribution;
  let fatherMutationContribution = fatherContribution;

  geneValue[motherGeneRarity] += motherContribution;
  geneValue[fatherGeneRarity] += fatherContribution;

  const geneMutationRate = Math.min(motherGeneMutation, fatherGeneMutation);

  const mutationContribution = 100 - motherContribution - fatherContribution;

  let motherMutatedRarity = mutateRarity(
    motherGeneRarity,
    geneMutationRate === 0 ? 1 : Math.min(geneMutationRate + 1, 0)
  );

  const motherNumberOfMutatedGenes = RARITIES.indexOf(motherMutatedRarity) || 1;

  let fatherMutatedRarity = mutateRarity(
    fatherGeneRarity,
    geneMutationRate === 0 ? 1 : Math.min(geneMutationRate + 1, 0)
  );

  const fatherNumberOfMutatedGenes = RARITIES.indexOf(fatherMutatedRarity) || 1;

  const numberOfMutatedGenes =
    motherGeneRarity === Rarity.Common || fatherGeneRarity === Rarity.Common
      ? Math.max(motherNumberOfMutatedGenes, fatherNumberOfMutatedGenes)
      : Math.max(motherNumberOfMutatedGenes, fatherNumberOfMutatedGenes) * 2;

  while (motherMutatedRarity !== Rarity.Common) {
    motherMutatedRarity = mutateRarity(motherMutatedRarity, -1);

    const value = mutationContribution / numberOfMutatedGenes;

    motherMutationContribution += value;
    geneValue[motherMutatedRarity] += value;
  }

  while (fatherMutatedRarity !== Rarity.Common) {
    fatherMutatedRarity = mutateRarity(fatherMutatedRarity, -1);

    const value = mutationContribution / numberOfMutatedGenes;

    fatherMutationContribution += value;
    geneValue[fatherMutatedRarity] += value;
  }

  geneValue[Rarity.Common] +=
    100 - motherMutationContribution - fatherMutationContribution;

  return geneValue;
};

export const calcBreedingGenes = (mother: Cathlete, father: Cathlete) => {
  return Object.values(Genes).reduce((genes, gene) => {
    return { ...genes, [gene]: calcBreedingGene(mother, father, gene) };
  }, {}) as BreedingGenes;
};

export const pm = (probalities: number[]) =>
  probalities.reduce((acc, cur) => acc * cur, 1);


  export const calcProbality = (probalities: number[][]) => {
    const length = probalities.length;
    const max = Math.pow(5, length);
  
    let result = [0, 0, 0, 0, 0];
  
    for (let i = 0; i < max; i++) {
      const binary = padStart(i.toString(5), length, "0").split("");
  
      const currentValue = pm(
        binary.map((bit, index) => probalities[index][parseInt(bit)] / 100)
      );
  
      const maxRarity = Math.max(...binary.map((bit) => parseInt(bit)));
  
      result[maxRarity] = result[maxRarity] + currentValue;
    }
  
    return result;
  };
  

export const calcBreeding = (
  mother: Cathlete,
  father: Cathlete
): {

  genes: BreedingGenes;
  rarity: { [key in Rarity]: number };
} => {

  const genes = calcBreedingGenes(mother, father);

  const probalities = Object.values(genes).map((gene) => Object.values(gene));

  return {
    genes,
    rarity: calcProbality(probalities).reduce(
      (acc, value, index) => ({
        ...acc,
        [RARITIES[index]]: value * 100,
      }),
      {}
    ) as any,
  };
};
