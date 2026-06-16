import fastify from "fastify";
import { configDotenv } from "dotenv";
import formbody from "@fastify/formbody";
import routes from "./routes/index.js";

configDotenv({ quiet: true });
const app = fastify();
const PORT = process.env.PORT;

await app.register(formbody);

app.get("/", async (_request, reply) => {
  reply.send({ message: "Ok!" });
});

app.register(routes, { prefix: "/api" });

app.setNotFoundHandler((request, reply) => {
  const { message, statusCode } = request.error || {};
  reply.status(statusCode || 500).send({ message });
});

try {
  await app.listen({ port: PORT });
  console.log(`Listening on port: ${PORT}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
