import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'SportsEngine server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
