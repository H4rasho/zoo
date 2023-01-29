import { Global, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { DATABASE } from "config";
import { Dialect } from "sequelize/types/sequelize";

const { DIALECT, HOST, NAME, PASS, PORT, USER } = DATABASE;

@Global()
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: DIALECT as Dialect,
      host: HOST,
      port: Number(PORT),
      username: USER,
      password: PASS,
      database: NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
