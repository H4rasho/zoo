import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../database/connection'
import { Species } from '../species/model';

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

Animal.belongsTo(Animal, {
  foreignKey: 'fatherId'
})

Animal.belongsTo(Animal, {
  foreignKey: 'motherId'
})

Animal.hasMany(Animal, {
  foreignKey: 'fatherId',
  as: 'childrens'
})

Animal.hasMany(Animal, {
  foreignKey: 'motherId',
  as: 'childrensAsMother'
})

