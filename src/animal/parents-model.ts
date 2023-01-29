import { DataTypes, Model } from "sequelize";
import { Animal } from "./entities/animal.entity";

import { sequelize } from "../database/connection";

export class Parents extends Model {
  declare animalId: Animal["id"];
  declare parentId: Animal["id"];
}

Parents.init(
  {
    animalId: {
      type: DataTypes.UUID,
    },
    parentId: {
      type: DataTypes.UUID,
    },
  },
  { sequelize }
);
