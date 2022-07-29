"use strict";
Product: {
    category(parent, any, args, any, context, any);
    {
        const { categoryId } = parent;
        const prodCategory = categories.find((category) => category.id === categoryId);
        return prodCategory;
    }
}
//# sourceMappingURL=Products.js.map