"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require('apollo-server');
exports.typeDefs = gql `
type Query {
    hello: String
    products(filter: ProductFilter): [Product!]!
    product(id: ID!): Product
    categoryBoolean(onSale: Boolean): [Product]
    categories: [Category!]!
    category(id: ID!): Category
   
},
type Mutation {
    addCategory(input: addCategoryInput): Category!
    addProduct(input: addProductInput): Product!
    addReview(input: addReviewInput): Review!
}
type Product {
    id: ID!
    name: String
    description: String
    quantity: Int
    price: Float
    onSale: Boolean
    image: String
    category: Category
    review: [Review]
},
type Category {
    id: ID!
    name: String!
    productsCategory(filter: ProductFilter): [Product!]!
},
type Review {
    id: ID!
    date: String
    title: String
    comment: String
    rating: Int
    productId: String
},
input ProductFilter {
    onSale: Boolean
    avgRating: Int
},
input addCategoryInput {
    name: String!
}
input addProductInput {
    name: String
    description: String
    quantity: Int
    price: Float
    onSale: Boolean
    image: String
    categoryId: String
},
input addReviewInput {
    date: String
    title: String
    comment: String
    rating: Int
    productId: String
}
`;
//# sourceMappingURL=typeDefs.js.map