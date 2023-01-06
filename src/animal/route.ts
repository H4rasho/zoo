import { FastifyInstance } from "fastify";
import { Optional } from "sequelize";
import { Species } from "../species/model";
import { CreateAnimalDto } from "./dto/create-aminal.dto";
import { Animal } from "./model";
import { registerAnimal, updateAnimal } from "./service";
import { UpdateAnimalDto } from "./dto/update-animal.dto";

const opts = {
  schema: {
    response: {
      201: {
        type: "object",
        properties: {
          name: { type: "string" },
          id: { type: "string" },
        },
      },
    },
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
    },
  },
};

async function routes(fastify: FastifyInstance) {
  fastify.get("/animals", async () => {
    const animals = await Animal.findAll({
      include: [Species, { model: Animal, as: "parents" }],
    });
    return { animals };
  });

  fastify.post<{
    Body: CreateAnimalDto;
  }>("/animals", opts, async (request) => {
    const animal = request.body;
    return await registerAnimal(animal);
  });

  fastify.put<{
    Body: Optional<UpdateAnimalDto, "fatherId" | "motherId" | "id">;
    Params: { id: Animal["id"] };
  }>("/animals/:id", opts, async (request, reply) => {
    try {
      const animal = request.body;
      const id = request.params.id;
      const animalUpdated = await updateAnimal({
        ...animal,
        id,
      });
      return { animalUpdated };
    } catch (error) {
      reply.code(404).send(error);
    }
  });

  fastify.delete<{
    Params: { id: Animal["id"] };
  }>("/animals/:id", opts, async (request, reply) => {
    const exitAnimal = await Animal.findByPk(request.params.id);
    if (!exitAnimal) {
      reply.code(404).send();
      return;
    }
    await exitAnimal.destroy();
    return { animalDeleted: exitAnimal };
  });
}

export default routes;
