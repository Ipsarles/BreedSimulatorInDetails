import { Genes, Rarity } from "../Constant";

export class Cathlete {
    // id!:number;
    level!: number;
    rarity!:Rarity;
    genes!:{ [key in Genes]: Rarity };
}

// export interface Cathlete {
//     id?: string;
//     rarity: Rarities;
//     name: string;
//     level: number;
//     breadCount: number;
//     genes: { [key in Genes]: Rarities };
//     url?: string;
//     maxStamina?: number;
//     maxStrength?: number;
//     maxSpeed?: number;
//     walkenHash?: string;
//   }
  