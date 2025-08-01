import express from 'express';
import photosRouter from './routes/photos';

const app = express();
app.use(express.json());

app.use('/photos', photosRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
