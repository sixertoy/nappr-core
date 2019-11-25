import { MONGOOSE_DRIVER_NAME } from './constants';
import getMongooseDriver from './drivers/mongoose-driver';

function getDriverByName(str) {
  switch (str) {
    case MONGOOSE_DRIVER_NAME:
      return getMongooseDriver();
    default:
      return null;
  }
}

export default getDriverByName;
