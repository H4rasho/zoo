import { Sequelize, Dialect } from "sequelize";
import { DATABASE } from "../../config";

const { USER, PASS, NAME, DIALECT, PORT, HOST } = DATABASE;

export const sequelize = new Sequelize(NAME, USER, PASS, {
  host: HOST,
  dialect: DIALECT as Dialect,
  port: Number(PORT),
});

export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
