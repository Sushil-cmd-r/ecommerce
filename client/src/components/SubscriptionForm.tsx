const SubscriptionForm = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-[320px] ">
      <h2 className="text-[34px] text-[#373737] font-medium">Subscribe now & get 20% off</h2>
      <p className="text-lg text-[#9A9A9A]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <form className="flex w-full h-16 text-lg max-w-[700px] border-1 border-[#C7C7C7]">
        <input className="h-full flex-1 px-4" placeholder="Enter your Email" />
        <button className="bg-black text-white px-6 uppercase">Subscribe</button>
      </form>
    </section>
  )
}

export default SubscriptionForm
