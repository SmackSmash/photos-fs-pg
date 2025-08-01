import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Albums route works');
});

export default router;
