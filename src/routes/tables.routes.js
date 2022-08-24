import * as tablesMysqlControllers from '../controllers/tables-mysql.controllers';
import { Router } from 'express';

const router = Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

router.post('/', tablesMysqlControllers.selectAllTables);

export default router;
