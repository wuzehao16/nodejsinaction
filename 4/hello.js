const http = require('http');
var server = http.createServer((req, res) => {
  var url = "http://www.baidu.com"
  var body = `redirect to <a href=${url}>baidu</a>`
  res.setHeader('Location', url)
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Content-Length', Buffer.byteLength(body))
  res.end(body)
})
server.listen(3000)
