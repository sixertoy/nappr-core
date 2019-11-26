import Logger from '../../logger';
import getMongooseDriver from '../drivers/mongoose-driver';

const logger = Logger.cloneNS('[mongodb]');

// mongoose.Promise = global.Promise;

// const connectionTimer = null;
// const currentRetriesCount = 0;
// const mongooseOptions = {
// };

// async function tryConnect(dburl, success, fail) {
//   return () =>
//     mongoose.connect(dburl, mongooseOptions).then(success(dburl), fail(dburl));
// }

// function onConnectionSuccess(dburl) {
//   console.log('onConnectionSuccess', onConnectionSuccess);
//   return () => {
//     if (connectionTimer) clearTimeout(connectionTimer);
//     Logger.ok(`MongoDB connection success on: ${dburl}`);
//   };
// }

// function onConnectionFailed(dburl) {
//   return err => {
//     const maxRetries = 10;
//     const retryTimeout = 1500; // ms
//     if (connectionTimer) clearTimeout(connectionTimer);
//     let msg = `MongoDB connection error: ${dburl} => ${err}`;
//     Logger.warn(msg);
//     if (currentRetriesCount >= maxRetries) {
//       msg = `MongoDB connection max retries reached: ${dburl} => ${err}`;
//       Logger.error(msg);
//       process.exit(1);
//       return;
//     }
//     currentRetriesCount += 1;
//     msg = `MongoDB connection retry #${currentRetriesCount}`;
//     Logger.info(msg);
//     connectionTimer = setTimeout(
//       () => tryConnect(dburl, onConnectionSuccess, onConnectionFailed),
//       retryTimeout
//     );
//   };
// }

const mongooseOptions = {
  // http://mongoosejs.com/docs/connections.html
  autoIndex: true,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

function getMongooseConnector() {
  const driver = getMongooseDriver();
  return {
    connect: (dbName, dbPort = 27017, dbHost = '127.0.0.1') => {
      return new Promise(resolve => {
        const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;
        // connection
        driver.connection.on('connecting', () => {
          logger.info('Waiting for database connection...');
        });
        driver.connection.on('connected', () => {
          logger.ok(`Connected to ${url}`);
          resolve({ driver, url });
        });
        // disconnect/close
        driver.connection.on('disconnected', () => {
          logger.error(`Disconnected from ${url}`);
        });
        driver.connection.on('close', () => {
          logger.ok(`Connection ${url} closed`);
        });
        driver.connect(url, mongooseOptions);
        // .catch(error => handleError(error));
      });
    },
    disconnect: () => {},
  };
  // return
  //
  //   //
  //   // https://mongoosejs.com/docs/connections.html#connection-events
  //   driver.connection.on('connecting', () => console.log('connecting'));
  //   driver.connection.on('connected', resolve);
  //   driver.connection.on('disconnected', () => console.log('disconnected'));
  //   driver.connection.on('close', () => console.log('close'));
  // });
  // https://mongoosejs.com/docs/deprecations.html
  // mongoose.set('useNewUrlParser', true);
  // mongoose.set('useUnifiedTopology', true);
  // connection à la DB
  // mongoose.connect(dburl, mongooseOptions);
  // .catch(error => handleError(error));
  // mongoose.connection.on('error', () => {
  // NOTE event handling after first connection
  // logError(err);
  // });
  // await tryConnect(dburl, onConnectionSuccess, onConnectionFailed);
  // };
}

export default getMongooseConnector;
