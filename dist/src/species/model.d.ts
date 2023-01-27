import { Model } from "sequelize";
import { Animal } from "../animal/model";
export declare class Species extends Model {
    id: string;
    name: string;
    animal: Animal[];
    createdAt: Date;
    updatedAt: Date;
}
