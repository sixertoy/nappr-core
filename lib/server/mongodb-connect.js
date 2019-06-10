/**
 * MongoDB Connecter
 *
 * Usage
 * -------------------------
 * import connect from './core/mongodb-connect'
 * await connect(
 *   process.env.MONGO_DB_PORT,
 *   process.env.MONGO_DB_NAME,
 *   process.env.MONGO_DB_DOMAIN,
 * )
 *
 */
import Mongoose from 'mongoose';

import { logger } from '../../utils';

Mongoose.Promise = global.Promise;

let timer = null;
let retriescount = 0;
const mongooseOptions = {
  // http://mongoosejs.com/docs/connections.html
  autoIndex: false,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  useNewUrlParser: true
};

const tryConnect = async (dburl, success, fail) =>
  Mongoose
    .connect(dburl, mongooseOptions)
    .then(success(dburl), fail(dburl));

const onConnectionSuccess = dburl => () => {
  if (timer) clearTimeout(timer);
  logger.ok(`MongoDB connection success on: ${dburl}`);
};

const onConnectionFailed = dburl => err => {
  const maxretries = 10;
  const retrytimeout = 1500; // ms
  if (timer) clearTimeout(timer);
  let msg = `MongoDB connection error: ${dburl} => ${err}`;
  logger.warn(msg);
  if (retriescount >= maxretries) {
    msg = `MongoDB connection max retries reached: ${dburl} => ${err}`;
    logger.error(msg);
    process.exit(1);
    return;
  }
  retriescount += 1;
  msg = `MongoDB connection retry #${retriescount}`;
  logger.info(msg);
  timer = setTimeout(
    () => tryConnect(dburl, onConnectionSuccess, onConnectionFailed),
    retrytimeout,
  );
};

async function mongodbConnect (port, name, domain) {
  const dburl = `mongodb://${domain}:${port}/${name}`;
  await tryConnect(
    dburl,
    onConnectionSuccess,
    onConnectionFailed
  );
}

export default mongodbConnect;
