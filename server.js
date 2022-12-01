var path = require('path');
var express = require('express');
var expressbars = require('express-handlebars');
var drinkData = require('./drinkData.json')


var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'handlebars')
app.use(express.static('public'));

app.engine('handlebars', expressbars.engine({
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'));

  app.get('/', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'title.html'));
    next()
  });

  app.get('/:type', function (req, res, next) {
    var type = req.params.type

    res.status(200).render('drinks', {
      drinks: drinkData
    })
  });

  app.get('*', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'public', '404.html'));
  })


app.listen(port, function () {
    console.log("Coffee Companion server is open on:", port);
  });