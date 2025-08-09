import ProductDetail from "../components/ProductDetail"
import Collection from "../containers/Collection"
import { relatedProducts } from "../constants"

const Product = () => {

  return (
    <main className="w-[90%] h-full max-w-7xl mx-auto py-10 flex flex-col gap-20">
      <ProductDetail />
      <Collection collection={relatedProducts} />
    </main>
  )
}

export default Product
