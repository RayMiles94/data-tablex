const express = require('express');
let application = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const http = require('http');
const helmet =  require('helmet');
const morgan = require('morgan')

application.use(bodyparser.json());
application.use(helmet());
application.use(cors());
application.use(morgan());

application.get('/', function (req, res) {
 res.json({
   message:'data'
 })
});

const Server = http.createServer(application);


Server.listen(3500, function() {
  console.log('Server is working fine');
});
