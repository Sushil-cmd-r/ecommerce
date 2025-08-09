import { useState } from "react"
import Title from "../components/Title"
import img from "../assets/pngs/p_img12.png"
import OrderItem from "../components/OrderItem"

const Orders = () => {
  const [orders, _] = useState<OrderItem[]>([
    {
      id: "1",
      img: img,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
      size: "L",
      amount: 4,
      status: "Ready",
    },
    {
      id: "2",
      img: img,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
      size: "L",
      amount: 4,
      status: "Shipped"
    }
  ])

  return (
    <main className="w-[90%] h-full min-h-[calc(100vh-64px-64px)] max-w-7xl mx-auto py-10 flex flex-col gap-10">
      <section className="w-full flex flex-col gap-6">
        <Title title="My Orders" />
        <ul className="w-full flex flex-col">
          {orders.map((elm) => <OrderItem item={elm} />)}
        </ul>
      </section>
    </main>
  )
}

export default Orders
