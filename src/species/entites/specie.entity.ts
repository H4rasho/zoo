import { DataType, Model, Column, HasMany, Table } from "sequelize-typescript";
import { Animal } from "src/animal/entities/animal.entity";

@Table({
  tableName: "Species",
})
export class Species extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: "Nombre de la especie",
  })
  declare name: string;

  @HasMany(() => Animal, {
    foreignKey: "specieId",
  })
  declare animal: Animal[];
  declare createdAt: Date;
  declare updatedAt: Date;
}
