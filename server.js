// import app from './app';
import express from 'express';
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
