const{ v4: uuid} = require('uuid')

export const Mutation = {
        addCategory: (parent: any, args: any, context: any) => {
            const {input} = args;
            const {name} = input
            const {categories} = context
            const newCategory = {
                id: uuid(),
                name
            }
            categories.push(newCategory);
            return newCategory;
        },
        addProduct: (parent: any, args: any, context: any) => {
            const {input} = args;
            const {name, description, quantity, price, onSale, image, categoryId} = input
            const {products} = context
            const newProduct = {
                id: uuid(),
                name,
                description,
                quantity,
                price,
                onSale,
                image,
                categoryId
                }
            products.push(newProduct);
            return newProduct;
        },
        addReview: (parent: any, args: any, context: any) => {
            const {input} = args;
            const {title, comment, rating, productId} = input
            const {reviews} = context
            const newReview = {
                id: uuid(),
                date: new Date().toISOString(),
                title,
                comment,
                rating,
                productId
            }
            reviews.push(newReview);
            return newReview
        }
}