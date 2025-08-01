import express from 'express';
import photosRouter from './routes/photos';
import usersRouter from './routes/users';
import albumsRouter from './routes/albums';

const app = express();
app.use(express.json());

app.use('/photos', photosRouter);
app.use('/users', usersRouter);
app.use('/albums', albumsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
