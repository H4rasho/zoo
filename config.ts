import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const { DB_NAME, DB_USER, DB_PASS, DB_DIALECT, DB_PORT, DB_HOST } = process.env

export const DATABASE = {
  NAME: DB_NAME || 'zoo',
  USER: DB_USER || 'postgres',
  PASS: DB_PASS || '123456',
  HOST: DB_HOST || 'localhost',
  DIALECT: DB_DIALECT || 'postgres', 
  PORT: DB_PORT || 5432,
}
