import Title from './Title'

const CartTotal = () => {
  // fetch price from redux
  const price = 60.10
  return (
    <section className="md:ml-auto w-full max-w-[520px] flex flex-col gap-5">
      <Title title="Cart Totals" />

      <div className="w-full grid grid-cols-2 grid-rows-4 gap-y-4 text-base text-[#454545]">
        <span>Subtotal</span>
        <span className="ml-auto">${price}</span>

        <span>Shipping Fee</span>
        <span className="ml-auto">$10.00</span>

        <span className="text-black font-semibold">Total</span>
        <span className="text-black font-semibold ml-auto">$70.00</span>
      </div>
    </section>
  )
}

export default CartTotal
