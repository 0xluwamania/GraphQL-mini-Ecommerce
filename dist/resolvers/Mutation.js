"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const { v4: uuid } = require('uuid');
exports.Mutation = {
    addCategory: (parent, args, context) => {
        const { input } = args;
        const { name } = input;
        const { categories } = context;
        const newCategory = {
            id: uuid(),
            name
        };
        categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, args, context) => {
        const { input } = args;
        const { name, description, quantity, price, onSale, image, categoryId } = input;
        const { products } = context;
        const newProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            price,
            onSale,
            image,
            categoryId
        };
        products.push(newProduct);
        return newProduct;
    },
    addReview: (parent, args, context) => {
        const { input } = args;
        const { title, comment, rating, productId } = input;
        const { reviews } = context;
        const newReview = {
            id: uuid(),
            date: new Date().toISOString(),
            title,
            comment,
            rating,
            productId
        };
        reviews.push(newReview);
        return newReview;
    }
};
//# sourceMappingURL=Mutation.js.map