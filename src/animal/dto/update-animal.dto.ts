import { Animal } from "../model";
import { CreateAnimalDto } from "./create-aminal.dto";

export interface UpdateAnimalDto extends Partial<CreateAnimalDto> {
  id: Animal["id"];
}
