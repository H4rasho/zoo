import Fastify, { FastifyInstance } from "fastify";
import routes from "./src/animal/route";

import { db } from "./src/database/connection";

const server: FastifyInstance = Fastify();

db();

server.get("/", async () => {
  return { hello: "world" };
});

server.register(routes);

const start = async () => {
  try {
    await server.listen({ port: 4000, host: "0.0.0.0" });
    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
    console.log(`server listening on ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
