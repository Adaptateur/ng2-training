const http = require('http');
const port = 3000;

const server = http.createServer(
    (req, resp) => {
        console.log(req.url);
        resp.end('Hello Node.js Server!')
        }
        );
        
server.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});