import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { AnimalController } from "./animal.controller";
import { Animal } from "./entities/animal.entity";
import { AnimalService } from "./animal.service";

@Module({
  imports: [SequelizeModule.forFeature([Animal])],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
