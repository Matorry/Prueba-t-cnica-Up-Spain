import { Character } from "../models/character";
import { Info } from "../models/info";

export type CharacterQuery = {
  info: Info;
  results: Character[];
};
