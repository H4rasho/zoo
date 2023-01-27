"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
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
async function routes(fastify) {
    fastify.get("/animals", async () => {
        return await (0, service_1.findAllAnimals)();
    });
    fastify.post("/animals", opts, async (request) => {
        const animal = request.body;
        return await (0, service_1.registerAnimal)(animal);
    });
    fastify.put("/animals/:id", opts, async (request, reply) => {
        try {
            const animal = request.body;
            const id = request.params.id;
            const animalUpdated = await (0, service_1.updateAnimal)({
                ...animal,
                id,
            });
            return { animalUpdated };
        }
        catch (error) {
            reply.code(404).send(error);
        }
    });
    fastify.delete("/animals/:id", opts, async (request, reply) => {
        try {
            return (0, service_1.deleteAnimal)(request.params.id);
        }
        catch (error) {
            return reply.code(404).send(error);
        }
    });
}
exports.default = routes;
//# sourceMappingURL=route.js.map