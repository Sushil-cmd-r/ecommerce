type Props = {
  item: OrderItem
}
const OrderItem = ({ item }: Props) => {
  return (
    <li className="w-full flex gap-3 border-t-1 border-b-1 border-[#D1D1D1] p-3" key={item.id}>
      <img src={item.img} alt={item.img} className="h-[140px] object-cover" />
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="text-lg">
          <p>{item.name}</p>
          <span>$ {item.price}</span>
        </div>

        <p className="my-auto flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00A625]" />
          {item.status}</p>
        <button className="my-auto px-4 py-2 border-1 max-h-10 cursor-pointer hover:bg-slate-100">Track Order</button>
      </div>

    </li>
  )
}

export default OrderItem
