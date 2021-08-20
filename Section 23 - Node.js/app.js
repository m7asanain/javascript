const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  const username = req.body.username || 'Unknown User!';
  res.send(`<h1>Hi ${username}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`);
});

app.listen(3000);