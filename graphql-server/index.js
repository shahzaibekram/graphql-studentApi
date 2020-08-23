const { ApolloServer, gql } = require('apollo-server');

const students = [
    {
        "id": 1,
        "name": "Shahzaib",
        "email": "shahzebekram2468@gmail.com",
        "age": 20
    },

    {
        "id": 2,
        "name": "Shahbaz",
        // "email": "shahzebekram2468@gmail.com",
        "age": 26
    },

    {
        "id": 3,
        "name": "Nadir",
        // "email": "shahzebekram2468@gmail.com",
        "age": 23
    }
]

const resolvers = {
    Query: {
      students: () => students,
    },
  };

const typeDefs = gql`

  type Student {
    id:Int
    name: String
    email: String
    age: Int
  }


  type Query {
    students: [Student]
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});