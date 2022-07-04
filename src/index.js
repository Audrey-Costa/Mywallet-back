import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config()

const app = express();
app.use(express.json(), cors(), router);


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server on ${process.env.MONGO_DATABASE}`);
});
