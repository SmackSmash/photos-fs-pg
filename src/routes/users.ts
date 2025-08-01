import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Users route works');
});

export default router;
