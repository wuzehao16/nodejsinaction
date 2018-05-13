const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const chatServer = require('./lib/chat_server');
var cache = {};


 /**
  * Handle error in callback.
  *
  * @api private
  */
function send404(res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('Error 404: Resource not found!')
  res.end();
}

/**
 * send file content
 *
 * @api private
 */
function sendFile(res, filepath, fileContents) {
  res.writeHead(
    200,{"Content-type": mime.getType(path.basename(filepath))}
  )
  res.end(fileContents)
}

/**
 * serverStatic
 *
 * @api private
 */
function serverStatic(res, cache, absPath) {
  if (cache[absPath]) {
    sendFile(res,absPath, cache[absPath]);
    return;
  }
  fs.exists(absPath, exists => {
    if (exists) {
      fs.readFile(absPath, (err, data) => {
        if (err) {
          send404(res);
        } else {
          cache[absPath] = data;
          sendFile(res, absPath, data);
        }
      })
    } else {
      send404(res);
    }
  })
}

var server = http.createServer((req, res) => {
  var filepath = false;
  if (req.url == '/') {
    filePath = 'public/index.html';
  } else {
    filePath = 'public' + req.url;
  }
  var absPath = './' + filePath;
  serverStatic(res, cache, absPath);
})

server.listen(3000, () => {
  console.log('Server listening on port 3000.')
})
chatServer.listen(server);
