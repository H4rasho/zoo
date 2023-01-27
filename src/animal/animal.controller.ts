import { Controller, Get } from "@nestjs/common";
import { AnimalService } from "./animal.service";

@Controller("animal")
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  @Get()
  findAll(): string {
    return "This action returns all cats";
  }
}
