"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const animal_service_1 = require("./animal.service");
describe('AnimalService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [animal_service_1.AnimalService],
        }).compile();
        service = module.get(animal_service_1.AnimalService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=animal.service.spec.js.map