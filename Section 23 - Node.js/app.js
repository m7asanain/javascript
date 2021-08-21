const express = require('express');
const bodyParser = require('body-parser');  // parsing the request body and adding it to the request object

const app = express();

app.set('view engine', 'ejs');  // tell expressjs to use ejs (the engine for parsing our view should be ejs)
app.set('views', 'views');  // when it find our views -> add a views setting and point at the folder that holds our views files

app.use(bodyParser.urlencoded({extended: false}));  // adding it as a middleware

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  const userName = req.body.userName || 'Unknown User!';
  res.render('index', {
    user: userName
  });
});

app.listen(3000);