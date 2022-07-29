

 export const Product = {
    category(parent: any, args: any, context: any){
        const {categories} = context
        const {categoryId} = parent;
        const prodCategory = categories.find((category: any)=> category.id === categoryId);
        return prodCategory;
    },
    review(parent: any, args: any, context: any){
        const {reviews} = context;
        const review = reviews.filter((review: any)=> review.productId === parent.id);
        return review;
    }
}