import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Optional } from "sequelize";
import { Species } from "../species/model";
import { CreateAnimalDto } from "./dto/create-aminal.dto";
import { Animal } from "./model";

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

async function routes(
  fastify: FastifyInstance,
  options: RouteShorthandOptions
) {
  fastify.get("/animals", async (request, reply) => {
    const animals = await Animal.findAll({
      include: [
        Species,
        { model: Animal, as: "childrens" },
        { model: Animal, as: "childrensAsMother" },
      ],
    });
    return { animals };
  });

  fastify.post<{
    Body: Optional<CreateAnimalDto, "fatherId" | "motherId">;
  }>("/animals", opts, async (request, reply) => {
    const animal = request.body;
    const animalCreated = await Animal.create(animal);
    return { animalCreated };
  });

  fastify.put<{
    Body: Optional<CreateAnimalDto, "fatherId" | "motherId">;
    Params: { id: Animal["id"] };
  }>("/animals/:id", opts, async (request, reply) => {
    const animal = request.body;
    const exitAnimal = await Animal.findByPk(request.params.id);
    if (!exitAnimal) {
      reply.code(404).send();
      return;
    }
    const animalUpdated = await exitAnimal.update(animal);
    return { animalUpdated };
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
