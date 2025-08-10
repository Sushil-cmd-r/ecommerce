import { Bin } from "../assets/svgs"
import { useAppDispatch } from "../state/store"
import { deleteCartItem } from "../state/cartSlice"

type Props = {
  item: CartItem
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch()

  const removeCartItem = () => {
    dispatch(deleteCartItem(item.cartId))
  }

  return (
    <li className="w-full flex gap-3 border-t-1 border-b-1 border-[#D1D1D1] p-3" key={item.id}>
      <img src={item.img} alt={item.img} className="w-[140px] object-cover" />
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="text-lg">
          <p>{item.name}</p>

          <span>$ {item.price}</span>
          <span className={`w-10 h-10 mt-1 flex items-center justify-center cursor-pointer bg-[#FBFBFB] border-1 border-[#EBEBEB]`}>{item.size}</span>
        </div>

        <input
          value={item.amount}
          className="outline-none border-1 border-[#ccc] max-h-fit max-w-[120px] px-2 py-1"
          type="number"
          min={1}
        />

        <span className="w-8 h-8 cursor-pointer flex items-center justify-center hover:bg-slate-200 rounded-full">
          <Bin className="w-[50%]" onClick={removeCartItem} />
        </span>
      </div>

    </li>
  )
}

export default CartItem
