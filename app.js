import express from 'express';
import debug from 'debug';
import * as server from './config/server.js';
import { dashboardRouter } from './routes/dashboard.js';

// Setup debug module to spit out all messages
// Do `npn start` to see the debug messages
export const codeTrace = debug('first-repo:server');

// Start the app
export const app = express();
server.setup(app)

// Register any middleware here

// Register routers here
app.use('/dashboard', dashboardRouter);

// ####################################### No need to modify below this line #######################################
// Start the server
server.errorHandling(app);
export const runningServer = app.listen(server.port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${server.port}`);
  debug('testing');
});