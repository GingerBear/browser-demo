var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res, cb) => {
  var delay = 0;

  if (req.url.indexOf('slow') > -1) {
    delay = 5000;
  }

  setTimeout(() => {

    var readStream = fs.createReadStream(`.${req.url}`)
    readStream.pipe(res)
    readStream.on('error', (err) => {
      res.statusCode = 404;
      return fs.createReadStream(`example/404.html`).pipe(res)
    });

  }, delay);
});


server.listen(8080, () => {
  console.log('listening 8080')
});
