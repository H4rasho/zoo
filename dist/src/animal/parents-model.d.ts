import { Model } from "sequelize";
import { Animal } from "./model";
export declare class Parents extends Model {
    animalId: Animal["id"];
    parentId: Animal["id"];
}
