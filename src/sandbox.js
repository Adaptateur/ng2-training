const http = require('http');
const fs = require('fs');
const port = 8000;

const server = http.createServer(
    (req, resp) => {
      console.log(req.url);
      if (req.url === '/hello') {
        resp.end('Hello Node.js Server!')
      }else if (req.url === '/data'){
        fs.readFile('../data/plates.json', 'utf-8', (err, data) => {
          if (err) throw  err;
          console.log(data);
          resp.end(data);
        });

      }else{
        resp.end('Nothing to do here')
      }
    }
        );

server.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});
