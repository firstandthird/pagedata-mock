'use strict';
const Hapi = require('hapi');

module.exports = (port, mockPaths) => {
  if (!mockPaths) {
    mockPaths = './data.js';
  }
  const server = new Hapi.Server();
  server.connection({ port });
  // intercept request to any route:
  server.ext({
    type: 'onPreResponse',
    method: (request, reply) => {
      const requestedPath = request.url.path;
      const method = request.method.toLowerCase();
      // if there is a mock path that matches this url and HTTP method then return that:
      if (mockPaths[requestedPath] && mockPaths[requestedPath][method]) {
        return reply(null, mockPaths[requestedPath][method]);
      }
      reply(new Error(`No mock data defined for ${method} ${requestedPath}`));
    }
  });
  server.start();
};
