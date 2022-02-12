const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }
    type Post {
        id: ID
        title: String
        content: String
    }
    input userInput {
        id: ID
        username: String!
        age: String!
        posts: [postInput]
    }
    input postInput {
        id: ID
        title: String!
        content: String!
    }
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }
    type Mutation{
        createUser(input: userInput): User
    }
`)

module.exports = schema