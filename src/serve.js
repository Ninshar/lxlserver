const httpServer = require('http');
const fs = require('fs');
  
const {IPAdress} =require('../util/index.js')
httpServer.createServer(function (req, res) {
  var pathname = req.url;
  if (pathname == '/') {
    pathname = '/index.html';
  }

  var extname = path.extname(pathname);
  if (pathname != '/favicon.ico') {
    fs.readFile('static/' + pathname, function (err, data) {
      if (err) {  
        console.log('404');
        fs.readFile('static/404.html', function (error, data404) {
          if (error) {
            console.log(error);
          }
          res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });
          res.write(data404);
          res.end(); 
        })

      } else {
        var mime = mimeModel.getMime(extname);
        res.writeHead(200, { "Content-Type": "" + mime + ";charset='utf-8'" });
        res.write(data);
        res.end(); 
      }
    })
  }
}).listen(8080);

console.log(`启动于, http://${IPAdress}:8080`)