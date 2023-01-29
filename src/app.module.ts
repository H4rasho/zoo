import { Module } from "@nestjs/common";
import { AnimalModule } from "./animal/animal.module";
import { DatabaseModule } from "./database/database.module";
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [AnimalModule, DatabaseModule, SpeciesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
