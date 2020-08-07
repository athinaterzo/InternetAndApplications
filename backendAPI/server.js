var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Trial = require('./api/models/Model'), //created model loading here
  bodyParser = require('body-parser');

  
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/clinicalTrials', { useNewUrlParser: true , useUnifiedTopology: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});



app.listen(port);


console.log('RESTful API server started on: ' + port);