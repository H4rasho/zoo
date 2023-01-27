"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const animal_controller_1 = require("./animal.controller");
const animal_service_1 = require("./animal.service");
describe('AnimalController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [animal_controller_1.AnimalController],
            providers: [animal_service_1.AnimalService],
        }).compile();
        controller = module.get(animal_controller_1.AnimalController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=animal.controller.spec.js.map