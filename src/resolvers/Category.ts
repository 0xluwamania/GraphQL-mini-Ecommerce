
export const Category = {
    productsCategory(parents: any, args: any, context: any ) {
        const {products} = context
        const {filter} = args
        const categoryProd = products.filter((product: any)=> product.categoryId === parents.id);
        let filteredCategoryProd = categoryProd
        if(filter){
            if(filter.onSale === true){
                filteredCategoryProd = filteredCategoryProd.filter((product: any)=> product.onSale)
            }
        }

        return filteredCategoryProd
    }
}