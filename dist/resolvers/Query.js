"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
exports.Query = {
    hello() {
        return "Hello World";
    },
    products(parent, { filter }, { products, reviews }) {
        let filteredProducts = products;
        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale) {
                filteredProducts = filteredProducts.filter((product) => product.onSale);
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let count = 0;
                    reviews.forEach((review) => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            count++;
                        }
                    });
                    const avgProductRating = sumRating / count;
                    return avgProductRating >= avgRating;
                });
            }
        }
        return filteredProducts;
    },
    product(parent, args, context) {
        const { products } = context;
        const productId = args.id;
        const product = products.find((el) => el.id === productId);
        if (!product)
            return null;
        return product;
    },
    categoryBoolean(parent, args, context) {
        const { products } = context;
        let onSale = args.onSale;
        const category = products.filter((el) => el.onSale === onSale);
        return category;
    },
    categories(parent, args, context) {
        const { categories } = context;
        return categories;
    },
    category(parent, args, context) {
        const { categories } = context;
        const { id } = args;
        return categories.find((category) => category.id === id);
    }
};
//# sourceMappingURL=Query.js.map