import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { SpeciesService } from "./species.service";
import { SpeciesController } from "./species.controller";
import { Species } from "./entites/specie.entity";

@Module({
  imports: [SequelizeModule.forFeature([Species])],
  controllers: [SpeciesController],
  providers: [SpeciesService],
})
export class SpeciesModule {}
