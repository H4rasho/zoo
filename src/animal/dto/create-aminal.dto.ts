import { Species } from "../../species/model";
import { Animal } from "../model";

export interface CreateAnimalDto {
  [key: string]: string;
  name: string;
  age: string;
  specieId: Species["id"];
  fatherId: Animal["id"];
  motherId: Animal["id"];
}
