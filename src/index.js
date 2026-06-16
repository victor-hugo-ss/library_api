import fastify from "fastify";

const app = fastify();

const PORT = process.env.PORT;

try {
  await app.listen({ PORT });
  console.log(`Listening on port: ${PORT}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
