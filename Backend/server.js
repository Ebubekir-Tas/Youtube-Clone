const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.json('hello world');
})

app.listen(port, () => {
  console.log('server started on port ' + port);
})