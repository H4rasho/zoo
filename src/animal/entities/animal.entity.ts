import {
  Model,
  DataType,
  Table,
  Column,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Species } from "src/species/entites/specie.entity";

@Table({
  tableName: "Animal",
})
export class Animal extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: "Nombre del animal",
  })
  declare name: string;

  @Column({
    type: DataType.INTEGER,
    comment: "Edad del animal",
  })
  declare age: number;

  @ForeignKey(() => Species)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare specieId: string;

  @BelongsTo(() => Species, {
    foreignKey: "specieId",
  })
  @BelongsToMany(() => Animal, {
    through: "Parents",
    foreignKey: "animalId",
    otherKey: "parentId",
    as: "parents",
  })
  declare childrens: Animal[];

  declare createdAt: Date;
  declare updatedAt: Date;
}
