import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('zoo', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
});


export const db = async () => {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
