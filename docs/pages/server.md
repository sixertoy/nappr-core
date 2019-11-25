# Servers

#### createExpressServer

**Requires**

```bash
yarn add express zlib cors cookie-parser compression
```

**Usage**

```javascript
import {
  MONGOOSE_DRIVER_NAME,
  getConnectorByName,
  Logger,
  createExpressServer,
} from '@iziges/napper-core';

const port = process.env.GRAPHQL_PORT;
createExpressServer(routes, port).then(async () => {
  const connector = getConnectorByName(MONGOOSE_DRIVER_NAME);
  await connector.connect('dockers');
  Logger.ok(`Application is ready`);
});
```
