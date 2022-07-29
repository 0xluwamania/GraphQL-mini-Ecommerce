const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./typeDefs')
const{ Query} = require('./resolvers/Query')
const{ Mutation } = require('./resolvers/Mutation')
const {Category} = require('./resolvers/Category');
const {Product} = require('./resolvers/Product');
const {products, categories, reviews} = require('../products')




const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product
    },
    context: {
        products,
        categories,
        reviews
    }
    
});
const PORT: number = 4000
server.listen().then(({url}: {url: any})=> {
    console.log('server is ready at '+url)
})