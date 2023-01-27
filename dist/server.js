"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const route_1 = require("./src/animal/route");
const connection_1 = require("./src/database/connection");
const server = (0, fastify_1.default)();
(0, connection_1.db)();
server.get("/", async () => {
    return { hello: "world" };
});
server.register(route_1.default);
const start = async () => {
    try {
        await server.listen({ port: 4000, host: "0.0.0.0" });
        const address = server.server.address();
        const port = typeof address === "string" ? address : address === null || address === void 0 ? void 0 : address.port;
        console.log(`server listening on ${port}`);
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map