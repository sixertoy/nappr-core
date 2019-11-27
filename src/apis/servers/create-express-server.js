import path from 'path';
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

const logger = Logger.cloneNS('[express]');

const DEFAULT_PORT = 3001;
const DEFAULT_HOST = 'localhost';
const DEFAULT_URL_EXTENDED = true;
const DEFAULT_REQUEST_LIMIT = '2mb';
const DEFAULT_PARAMETER_LIMIT = 100000;
const DEFAULT_STATIC_PATH = path.join(process.cwd(), '..', 'public');
const DEFAULT_ROUTES = {
  '*': {
    all: (req, res, next) => {
      logger.log(`request ${req.method} ${req.url}`);
      next();
    },
  },
  '/': { get: (req, res) => res.send('<h1>Hello world !</h1>') },
};

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

function createExpressApplication() {
  const app = express();
  app.use(cors(corsOptions));
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
  app.use(express.static(DEFAULT_STATIC_PATH));
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

function createHTTPServer(app) {
  const server = http.createServer(app);
  process.on('SIGINT', () => {
    logger.info('Stop signal received');
    server.close(() => {
      // FIXME -> cleanup DB connections
      logger.ok('Server closed');
    });
  });
  return server;
}

function createExpressServer(
  routes = {},
  port = DEFAULT_PORT,
  host = DEFAULT_HOST
) {
  const endpoint = `http://${host}:${port}`;
  const mergedRoutes = merge(DEFAULT_ROUTES, routes);

  const app = createExpressApplication();
  parseApplicationRoutes(app, mergedRoutes);
  const httpServer = createHTTPServer(app);

  return new Promise(resolve => {
    httpServer.on('close', () => {
      logger.ok('closing server');
    });
    httpServer.listen(port, () => {
      logger.ok(`Server listening under ${endpoint}`);
      resolve(httpServer, endpoint);
    });
  });
}

export default createExpressServer;
