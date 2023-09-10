import { Router } from 'express';
import personRouter from './person.route';

const router = Router();

router.use('/person', personRouter);

export default router;
