// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

const PORT = process.env.PORT || 3000;

// Declare a route
fastify.get('/', async () => {
  return { hello: 'world' };
});

// Run the server!
async function start() {
  try {
    await fastify.listen(PORT, '0.0.0.0');
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
