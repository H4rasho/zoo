import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../database/connection'
import { Species } from '../species/model';
import { Parents } from './parents-model';

export class Animal extends Model {
 declare id: string;
 declare name: string;
 declare age: number;
 declare childrens: Animal[];
 declare childrensAsMother: Animal[];
 declare sepecies: Species
 declare createdAt: Date;
 declare updatedAt: Date;
}

Animal.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Nombre del animal",
  },
  age: {
    type: DataTypes.INTEGER,
    comment: 'Edad del animal'
  }, 
}, {sequelize})


Animal.belongsTo(Species, {
  foreignKey: 'specieId',
})

Species.hasMany(Animal, {
  foreignKey: 'specieId'
})

Animal.belongsToMany(Animal, {
  through: Parents,
  foreignKey: "animalId",
  otherKey: "parentId",
  as: 'parents'
})
