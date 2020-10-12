/* express definition */
const express = require('express');
const application = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const http = require('http');
const helmet =  require('helmet');
const morgan = require('morgan');

/* graphQL definition */
var express_graphql = require('express-graphql');
const { buildSchema } = require('graphql'); 



// root resolever for graphQL
var servers = require('./graphql.js');


application.use(cors());
application.use('/graphql', express_graphql.graphqlHTTP({
  schema: servers.schema, 
  rootValue: servers.root,
  graphiql: true
}));



application.use(bodyparser.json());
application.use(helmet());

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
