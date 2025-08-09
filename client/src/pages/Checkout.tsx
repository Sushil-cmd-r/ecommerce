import { Razorpay, Stripe } from "../assets/svgs"
import CartTotal from "../components/CartTotal"
import DeliveryInfo from "../components/DeliveryInfo"
import Title from "../components/Title"

const Checkout = () => {
  return (
    <main className="w-[90%] min-h-[calc(100vh-64px-64px)] max-w-7xl mx-auto py-10 grid gap-10 md:grid-cols-2">
      <section className="w-full flex flex-col gap-6">
        <Title title="Delivery Information" />
        <DeliveryInfo />
      </section>

      <section className="flex flex-col gap-6">
        <CartTotal />
        <div className="md:ml-auto w-full max-w-[520px] flex flex-col gap-6">
          <Title title={"Payment Method"} />

          <div className="grid grid-cols-3 gap-3">

            <div className=" flex justify-center items-center px-4 py-2 w-full border-1 uppercase cursor-pointer text-[#B3B3B3]">
              <Stripe />
            </div>
            <div className=" flex justify-center items-center px-4 py-2 w-full border-1 uppercase cursor-pointer text-[#B3B3B3]">
              <Razorpay />
            </div>
            <div className="text-center text-sm font-semibold px-4 py-2 w-full border-1 uppercase cursor-pointer text-[#B3B3B3]">
              cash on delivery
            </div>
          </div>


          <button className="px-4 py-2 col-span-2 max-w-[230px] uppercase ml-auto bg-black text-white">Place order</button>

        </div>
      </section>
    </main>
  )

}

export default Checkout
