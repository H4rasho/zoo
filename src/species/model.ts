import { DataTypes, Model } from "sequelize";
import { Animal } from "../animal/model";
import { sequelize } from "../database/connection";

export class Species extends Model {
  declare id: string;
  declare name: string;
  declare animal: Animal[];
  declare createdAt: Date;
  declare updatedAt: Date;
}

Species.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nombre de la especie",
    },
  },
  { sequelize }
);
