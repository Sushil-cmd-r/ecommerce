import { Link } from "react-router-dom"

type Prop = {
  products: Product[]
}
const List = ({ products }: Prop) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-4">
      {products.map((product, id) => (
        <Link to={`/collections/${id}`} key={id} className="mx-auto max-w-[300px]">
          <img src={product.img} alt={product.img} />
          <span className="text-sm font-medium text-[#494949] line-clamp-1">{product.name}</span>
          <p>{product.price}</p>
        </Link>
      ))}
    </div>
  )
}

export default List
