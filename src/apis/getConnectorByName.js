import { MONGOOSE_DRIVER_NAME } from './constants';
import getMongooseConnector from './connectors/mongoose-connector';

function getConnectorByName(str) {
  switch (str) {
    case MONGOOSE_DRIVER_NAME:
      return getMongooseConnector();
    default:
      return null;
  }
}

export default getConnectorByName;
