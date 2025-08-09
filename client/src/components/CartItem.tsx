import { Bin } from "../assets/svgs"

type Props = {
  item: CartItem
}

const CartItem = ({ item }: Props) => {
  return (
    <li className="w-full flex gap-3 border-t-1 border-b-1 border-[#D1D1D1] p-3" key={item.id}>
      <img src={item.img} alt={item.img} className="w-[140px] object-cover" />
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="text-lg">
          <p>{item.name}</p>
          <span>$ {item.price}</span>
        </div>

        <input
          value={item.amount}
          className="outline-none border-1 border-[#ccc] max-h-fit max-w-[120px] px-2 py-1"
          type="number"
          min={1}
        />
        <span className="w-8 h-8 cursor-pointer flex items-center justify-center hover:bg-slate-200 rounded-full">
          <Bin className="w-[50%]" />
        </span>
      </div>

    </li>
  )
}

export default CartItem
