var express = require('express');
var app = express();
var port = 8000;

app.set('models', require('./db/models'));

require('./middlewares/middleware')(app);
require('./routes/routes')(app);

app.use(express.static(__dirname + '/../dist/client'));

app.get('models').sequelize.sync().then(function () {

  /// to seed the database, enter node server/server.js seed=true;
  var models = app.get('models');
  process.argv.forEach(function(val){
    val === 'seed=true' && require('./db/seed')(models);
  });

  var server = app.listen(port, function () {
    console.log('App now listening on port: ' + server.address().port);
  });

});
