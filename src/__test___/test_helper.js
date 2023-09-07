const express = require('express');
const app = express();
app.disable('x-powered-by');

const createTestServer = (path, plugin) => {
  app.use(path, plugin);

  return app.listen();
};

module.exports = {
  createTestServer
};
