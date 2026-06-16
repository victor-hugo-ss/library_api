import booksRouter from "./booksRouter.js";

async function routes(fastify, opts) {
  fastify.register(booksRouter, { prefix: "/books" });
}

export default routes;
