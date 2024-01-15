import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Sakura: Emblem = {
  id: EmblemId.SAKURA,
  name: "Sakura",
  contracts: [Collection.AZUKI],
  icon: "/images/sakura-emblem.webp",
  points: [
    {
      description: "Own one Azuki with the Sakura Trait",
      value: 900,
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Special",
          value: "Sakura",
        },
      ],
    });
  },
};
