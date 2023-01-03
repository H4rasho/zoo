import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Animal } from "./src/animal/model";
import routes from "./src/animal/route";

import { db } from "./src/database/connection";

const server: FastifyInstance = Fastify();

db();

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
};

server.register(routes);

server.get("/ping", opts, async (request, reply) => {
  const animals = Animal.findAll();
  return { pong: "it wo", animals };
});

const start = async () => {
  try {
    await server.listen({ port: 4000 });
    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
    console.log(`server listening on ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
