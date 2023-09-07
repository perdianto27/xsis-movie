const express = require('express');
const app = express();
app.disable('x-powered-by');

const createTestServer = (path, plugin) => {
  // Middleware
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(path, plugin);
  
  return app.listen();
};

module.exports = {
  createTestServer
};
