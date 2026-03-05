import express from 'express';
import { matchRouter } from './routes/matches.js';

const app = express();
const PORT = 8000;

// enables Middleware to parse JSON bodies in requests
app.use(express.json());

app.get('/', (_, res) => {
  res.send({ message: 'SportsEngine server is running!' });
});

app.use('/matches', matchRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
