const express = require('express');
const app = express();
const port  = 8000;

app.get('/:parameter?', (request, resp) => {
  resp.send('<h1>Hello Express World!</h1> Your param:' + request.params.parameter);
});

app.listen(port, (err) => {
  console.log(`server listening on ${port}`)
});

//90min50
