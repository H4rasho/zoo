import { Model } from "sequelize";
import { Species } from "../species/model";
export declare class Animal extends Model {
    id: string;
    name: string;
    age: number;
    childrens: Animal[];
    childrensAsMother: Animal[];
    sepecies: Species;
    createdAt: Date;
    updatedAt: Date;
}
