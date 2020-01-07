import { default as express } from 'express';

const app = express();
const PORT = 3000;

app.use('/', (req, res): void => {
  res.send({ test: 1 });

  // this method will be highlighted as invalid,
  // with @types/node automatically catching it as non-existent in `res`:
  // res.fail({ test: 1 });
});

app.listen(PORT, () =>
  console.log(`Express.js server running on port: ${PORT}`),
);
