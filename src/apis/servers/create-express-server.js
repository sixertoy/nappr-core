import http from 'http';
import zlib from 'zlib';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import Logger from '../../logger';
import { isString } from '../../strings';
import { merge } from '../../objects';
import { isEmpty } from '../../utils';

const DEFAULT_PORT = 3001;
const DEFAULT_URL_EXTENDED = true;
const DEFAULT_REQUEST_LIMIT = '2mb';
const DEFAULT_PARAMETER_LIMIT = 100000;
// const DEFAULT_STATIC_PATH = path.join(process.cwd(), '..', 'public');
const DEFAULT_ROUTES = {
  '*': {
    all: (req, res, next) => {
      Logger.log(`request ${req.method} ${req.url}`);
      next();
    },
  },
  '/': { get: (req, res) => res.send('<h1>Hello world !</h1>') },
};

function createExpressApplication() {
  const app = express();
  app.use(cors());
  app.use(cookieParser());
  app.use(compression({ level: zlib.Z_DEFAULT_COMPRESSION }));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: DEFAULT_URL_EXTENDED,
      limit: DEFAULT_REQUEST_LIMIT,
      parameterLimit: DEFAULT_PARAMETER_LIMIT,
    })
  );
  // app.use((req, res, next) => {
  //   if (req.user) return next();
  //   return next(createError(401, 'Please login to view this page.'));
  // });
  // app.use(express.static(staticPath));
  return app;
}

function parseApplicationRoutes(app, routes) {
  Object.keys(routes).forEach(routePath => {
    const routeIsValid = isString(routePath) && !isEmpty(routePath);
    // TODO check de la validite du path
    if (!routeIsValid) return;
    const methods = routes[routePath];
    Object.keys(methods).forEach(method => {
      const callback = routes[routePath][method];
      app[method](routePath, callback);
    });
  });
}

function createHTTPServer() {
  const server = http.createServer();
  process.on('SIGINT', () => {
    Logger.info('[Express] Stop signal received');
    server.close(() => {
      // FIXME -> cleanup DB connections
      Logger.ok('[Express] Server closed');
    });
  });
  return server;
}

function createExpressServer(routes = {}, port = DEFAULT_PORT) {
  const endpoint = `http://localhost:${port}`;
  const mergedRoutes = merge(DEFAULT_ROUTES, routes);

  const app = createExpressApplication();

  // create routes before app.listen
  parseApplicationRoutes(app, mergedRoutes);

  const httpServer = createHTTPServer(app);
  return new Promise(resolve => {
    httpServer.listen(port, () => {
      Logger.ok(`[Express] Server listening under ${endpoint}`);
      resolve(httpServer, endpoint);
    });
  });
}

export default createExpressServer;
