import { AnimalService } from "./animal.service";
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    findAll(): string;
}
