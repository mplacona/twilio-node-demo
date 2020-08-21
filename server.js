import express, { static } from 'express';
const app = express();

app.use((req, res, next) => {
  req.method = 'GET';
  next();
});

app.use(static(__dirname));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});