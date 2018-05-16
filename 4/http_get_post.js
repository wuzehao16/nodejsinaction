var http = require('http');
var items = [];

var server = http.createServer(function(req, res){
  if ('/' == req.url) {
    switch (req.method) {
      case 'GET':
        show(res);
        break;
      case 'POST':
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  } else {
    notFound(res);
  }
});

function add(req,res) {
  var item = '';
  req.setEncoding('utf-8')
  req.on('data', function (chunk) {
    console.log(chunk)
    item += chunk
  })
  req.on('end', function () {
    items.push(item);
    res.end('OK\n')
  })
}

server.listen(3000);
