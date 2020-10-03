let server = [];

const { buildSchema } = require('graphql'); 
  


function Fullserver(number) {
    let s = [];
    for (let index = 0; index < number; index++) {
        let t;
        if (index  % 2 == 0) {
            t = "A";
        }
        else {
            t = "B";
        }
        s.push({
            id: index,
            name : index.toString(),
            description : 'description' + index.toString(),
            author : index.toString(),
            type: t
        });
    }
}

function init() {
    server = Fullserver(10);
}


function getServer(args) {
    var id = args.id;
    return server.filter(s => { return s.id == id } )[0];
}

function getServers(args) {
    if (args.type == "A") {
        let type =  args.type;
        return server.filter(s => s.type == type);
    }
    else {
        return server;
    }
}

// defintion of graphql schema
let shema = buildSchema(`
    type Query {
        server(id: Int!): Server
        servers(type: String): [Server]
    },
    type Server {
        id: Int
        name: String
        description: String
        type: String
    }
`);


let root = {
    server: getServer,
    servers: getServers
};

module.exports = {
    init: init,
    root : root,
    schema: shema
}
