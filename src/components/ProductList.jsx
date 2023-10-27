import { ProductItem } from "./ProductItem"

export const ProductList = ({ products }) => {
    return <div className="w-4/5 flex flex-wrap gap-5 md:justify-around md:px-5 md:gap-0 md:gap-y-4 sm:w-full sm:px-0 ">
        {products.map(product => <ProductItem key={product.id} product={product} />)}
    </div>
}
