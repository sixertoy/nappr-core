import mongoose from 'mongoose';

let driver = null;

function registerDriver(instance) {
  driver = instance;
}

function configureDriver(instance) {
  // https://mongoosejs.com/docs/deprecations.html
  instance.set('useNewUrlParser', true);
  instance.set('useUnifiedTopology', true);
}

function getMongooseDriver() {
  if (driver) return driver;
  registerDriver(mongoose);
  configureDriver(mongoose);
  return driver;
}

export default getMongooseDriver;
