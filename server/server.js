const { ApolloServer, gql } = require('apollo-server')

// Schema Definition
const typeDefs = gql`

type Query {
    greeting: String
}
`
// Internally mapped to
// schema {
//     query: Query
// }

// to resolve value of greeting
const resolvers = {
    Query: {
        greeting: () => 'Hello Graphql'
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen({port:9000})
.then((serverInfo) => console.log(`Server running at ${serverInfo.url}`))