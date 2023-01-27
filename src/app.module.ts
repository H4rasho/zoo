import { Module } from "@nestjs/common";
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [AnimalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
