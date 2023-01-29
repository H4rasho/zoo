import { Species } from "src/species/entites/specie.entity";
import { Animal } from "../entities/animal.entity";

export interface CreateAnimalDto {
  [key: string]: string;
  name: string;
  age: string;
  specieId: Species["id"];
  fatherId: Animal["id"];
  motherId: Animal["id"];
}
