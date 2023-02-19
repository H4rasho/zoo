import { Test } from "@nestjs/testing";
import { getModelToken } from "@nestjs/sequelize";
import { AnimalService } from "./animal.service";
import { Animal } from "./entities/animal.entity";

const testAnimal = { name: "Test", age: 5, breed: "Russian Blue" };

describe("AnimalSerive", () => {
  let service: AnimalService;
  let model: typeof Animal;

  beforeEach(async () => {
    const modRef = await Test.createTestingModule({
      providers: [
        AnimalService,
        {
          provide: getModelToken(Animal),
          useValue: {
            findAll: jest.fn(() => [testAnimal]),
            findByPk: jest.fn(() => testAnimal),
            create: jest.fn(() => testAnimal),
            destroy: jest.fn(() => Promise.resolve(1)),
            update: jest.fn(() => Promise.resolve([1])),
          },
        },
      ],
    }).compile();
    service = modRef.get(AnimalService);
    model = modRef.get<typeof Animal>(getModelToken(Animal));
  });

  it("should get the animals", async () => {
    expect(await service.findAllAnimals()).toEqual([testAnimal]);
  });

  it("should add a animal", async () => {
    expect(
      await service.registerAnimal({
        name: "Test",
        age: "5",
        specieId: "1",
      })
    ).toEqual(testAnimal);
  });

  it("should update a animal", async () => {
    const updateSpy = jest.spyOn(model, "update");
    const retVal = await service.updateAnimal({
      id: "1",
      name: "Test",
      age: "5",
      specieId: "1",
    });
    expect(updateSpy).toBeCalledWith(
      { name: "Test", age: "5", specieId: "1" },
      { where: { id: "1" } }
    );
    expect(retVal).toEqual([1]);
  });

  it("should remove a animal", async () => {
    const destroySpy = jest.spyOn(model, "destroy");
    const retVal = await service.deleteAnimal("id");
    expect(destroySpy).toBeCalledWith({ where: { id: "id" } });
    expect(retVal).toEqual(1);
  });
});
