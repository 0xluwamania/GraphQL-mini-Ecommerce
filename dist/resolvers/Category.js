"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
exports.Category = {
    productsCategory(parents, args, context) {
        const { products } = context;
        const { filter } = args;
        const categoryProd = products.filter((product) => product.categoryId === parents.id);
        let filteredCategoryProd = categoryProd;
        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProd = filteredCategoryProd.filter((product) => product.onSale);
            }
        }
        return filteredCategoryProd;
    }
};
//# sourceMappingURL=Category.js.map