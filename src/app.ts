import express, { Express } from 'express';
import { registerErrorHandlers } from 'middlewares/error-handler.middleware';
import bootstrap from 'startup/bootstrap';
import registerRoutes from 'startup/register-routes';

const app: Express = express();

// Initialize application
bootstrap(app);

// Register routes
registerRoutes(app);

// Register global handlers
registerErrorHandlers(app);

export default app;
