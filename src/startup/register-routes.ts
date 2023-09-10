import { Express } from 'express';
import router from 'routes/v1';
import { apiStatusHanlder } from 'utils/handlers';

// Register all routes with application
export default function registerRoutes(app: Express) {
  app.get('/v1/api/status', apiStatusHanlder);
  app.use('/v1/api', router);
}
