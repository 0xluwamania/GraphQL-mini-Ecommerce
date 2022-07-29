

export const Query =  {
    hello() {
        return "Hello World"
    },
    products(parent: any, {filter}: {filter: any}, {products, reviews}: {products: any, reviews: any}){
        let filteredProducts = products;
        if(filter){
            const {onSale, avgRating} = filter
            if(onSale){
                filteredProducts = filteredProducts.filter((product: any)=> product.onSale)
            }
            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter((product: any)=> {
                    let sumRating = 0;
                    let count = 0
                    reviews.forEach((review: any)=>{
                        if(review.productId === product.id){
                            sumRating += review.rating 
                            count++
                        } 
                    })
                    const avgProductRating = sumRating/count;
                    return avgProductRating >= avgRating
                })
            }
        }

        return filteredProducts
    },
    product(parent: any, args: any, context: any) {
        const {products} = context
        const productId = args.id
        const product =  products.find((el: any)=> el.id === productId)
        if(!product) return null
        return product
    },
    categoryBoolean(parent: [any], args: any, context: any ) {
        const {products} = context
        let onSale = args.onSale
        const category = products.filter((el: any)=> el.onSale === onSale);
        return category;
    },
    categories(parent: any, args: any, context: any){
        const {categories} = context
        return categories
    },
    category(parent: any, args: any, context: any) {
        const {categories} = context
        const{id} = args
        return categories.find((category: any) => category.id === id)
    }
   
}