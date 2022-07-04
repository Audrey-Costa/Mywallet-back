import express from 'express';

const app = express();
app.use(express.json());


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('Server on');
});
