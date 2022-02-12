const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const users = [{id: 1, username: 'Alex', age: 25}, {id: 2, username: 'Kris', age: 22}]

const app = express()

const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(user => user.id == id)
    },
    createUser: ({input}) => {
        const user = {id: Date.now(), ...input}
        users.push(user)
        return user
    }
}

app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server started on 5000 port'))