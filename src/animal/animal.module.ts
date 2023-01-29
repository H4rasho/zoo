import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AnimalService } from "./animal.service";
import { AnimalController } from "./animal.controller";
import { Animal } from "./entities/animal.entity";

@Module({
  imports: [SequelizeModule.forFeature([Animal])],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
