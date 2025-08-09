import Title from "../components/Title"
import CartItem from "../components/CartItem"
import CartTotal from "../components/CartTotal"
import { Link } from "react-router-dom"
import { getCartItems } from "../state/cartSlice"
import { useAppSelector } from "../state/store"

const Cart = () => {
  const items = useAppSelector(getCartItems)

  return (
    <main className="w-[90%] h-full max-w-7xl mx-auto py-10 flex flex-col gap-10">
      <section className="w-full flex flex-col gap-6">
        <Title title="Your Cart" />
        <ul className="w-full flex flex-col">
          {items.map((elm) => <CartItem item={elm} />)}
        </ul>
      </section>

      <div className="flex flex-col">
        <CartTotal />
        <Link to={"/checkout"} className="px-4 py-2 col-span-2 max-w-[230px] uppercase ml-auto bg-black text-white">Proceed to checkout</Link>
      </div>
    </main>
  )
}

export default Cart
