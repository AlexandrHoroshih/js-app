import fastify from 'fastify';

import config from '../../app-config';

const { backPort = 5000 } = config;

const app: fastify.FastifyInstance = fastify({
  logger: true,
});

const main = async () => {
  try {
    await app.listen(backPort);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

main();
