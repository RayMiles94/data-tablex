let server = [
    {
        id: 0,
        name: '0',
        description: 'description0',
        author: '0',
        type: 'A'
    },
    {
        id: 1,
        name: '1',
        description: 'description1',
        author: '1',
        type: 'B'
    },
    {
        id: 2,
        name: '2',
        description: 'description2',
        author: '2',
        type: 'A'
    },
    {
        id: 3,
        name: '3',
        description: 'description3',
        author: '3',
        type: 'B'
    },
    {
        id: 4,
        name: '4',
        description: 'description4',
        author: '4',
        type: 'A'
    },
    {
        id: 5,
        name: '5',
        description: 'description5',
        author: '5',
        type: 'B'
    },
    {
        id: 6,
        name: '6',
        description: 'description6',
        author: '6',
        type: 'A'
    },
    {
        id: 7,
        name: '7',
        description: 'description7',
        author: '7',
        type: 'B'
    },
    {
        id: 8,
        name: '8',
        description: 'description8',
        author: '8',
        type: 'A'
    },
    {
        id: 9,
        name: '9',
        description: 'description9',
        author: '9',
        type: 'B'
    },
    {
        id: 10,
        name: '10',
        description: 'CCCC',
        author: '9',
        type: 'C'
    }
];

const { buildSchema } = require('graphql');



function Fullserver(number) {
    let s = [];
    for (let index = 0; index < number; index++) {
        let t;
        if (index % 2 == 0) {
            t = "A";
        }
        else {
            t = "B";
        }
        s.push({
            id: index,
            name: index.toString(),
            description: 'description' + index.toString(),
            author: index.toString(),
            type: t
        });
    }
    return s;
}

function init() {
    server = Fullserver(10);
}


function getServer(args) {
    var id = args.id;
    return server.filter(s => { return s.id == id })[0];
}

function getServers(args) {
    let type = args.type;
    return server.filter(s => s.type == type);

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
    root: root,
    schema: shema
}


