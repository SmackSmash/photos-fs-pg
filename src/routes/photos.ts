import express from 'express';

const router = express.Router();

router.get('/', (res, req) => {
  req.send({ name: 'Dan', age: 38 });
});

export default router;
