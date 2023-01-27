import { FastifyInstance } from "fastify";
import { Optional } from "sequelize";
import { CreateAnimalDto } from "./dto/create-aminal.dto";
import { Animal } from "./model";
import {
  deleteAnimal,
  findAllAnimals,
  registerAnimal,
  updateAnimal,
} from "./service";
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
  fastify.get<{
    Querystring: { offset: number; limit: number };
  }>("/animals", async (request) => {
    const offset = request.query.offset ?? 0;
    const limit = request.query.limit ?? 10;
    return await findAllAnimals({ offset, limit });
  });

  fastify.post<{
    Body: CreateAnimalDto;
  }>("/animals", opts, async (request, reply) => {
    const animal = request.body;
    const animalRegistered = await registerAnimal(animal);
    return reply.code(201).send(animalRegistered);
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
    try {
      return deleteAnimal(request.params.id);
    } catch (error) {
      return reply.code(404).send(error);
    }
  });
}

export default routes;
