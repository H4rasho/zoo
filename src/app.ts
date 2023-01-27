import fastify, { FastifyInstance } from "fastify";
import routes from "./animal/route";

export default function build(opts = {}): FastifyInstance {
  const app = fastify(opts);

  app.get("/", async () => {
    return { hello: "world" };
  });

  app.register(routes);

  return app;
}
