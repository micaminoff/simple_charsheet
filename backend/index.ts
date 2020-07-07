import express from 'express';
const app = express();
app.use(express.json());

const PORT = 5000;

app.get('/', (_req, res) => { 
  console.log('request received');
  res.send('Hello.');
});
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});