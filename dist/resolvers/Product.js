"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
exports.Product = {
    category(parent, args, context) {
        const { categories } = context;
        const { categoryId } = parent;
        const prodCategory = categories.find((category) => category.id === categoryId);
        return prodCategory;
    },
    review(parent, args, context) {
        const { reviews } = context;
        const review = reviews.filter((review) => review.productId === parent.id);
        return review;
    }
};
//# sourceMappingURL=Product.js.map