var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var jsonfile = require('jsonfile')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
//app.use('/data', express.static('data'))

app.get('*', function(req, res) {
  var isJSON = req.url.match(/([.json])/g)
  
  if (isJSON) {
    console.log(req.originalUrl, req.url)
    var file = path.normalize(__dirname + req.originalUrl);
    console.log('path: ' + file);

    jsonfile.readFile(file, function(err, obj) {
      if(err) {
        res.json({status: 'error', reason: err.toString()});
        return;
      }

      res.json(obj);
    });
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
  
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
