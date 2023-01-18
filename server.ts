import app from "./src/app";

import { db } from "./src/database/connection";

db();
const server = app({
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
    },
  },
});

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
