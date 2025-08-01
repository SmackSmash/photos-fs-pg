import express from 'express';

const router = express.Router();

router.get('/', (res, req) => {
  req.send('Photos route works!');
});

export default router;
