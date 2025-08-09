const DeliveryInfo = () => {
  return (
    <form className="flex flex-col gap-2">
      <p className="flex gap-2">
        <input type='text' placeholder='First Name' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
        <input type='text' placeholder='Last Name' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
      </p>
      <input type='email' placeholder='Email address' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
      <input type='text' placeholder='Street' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
      <p className="flex gap-2">
        <input type='text' placeholder='City' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
        <input type='text' placeholder='State' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
      </p>
      <p className="flex gap-2">
        <input type='text' placeholder='Zip code' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
        <input type='text' placeholder='Country' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
      </p>
      <input type='tel' placeholder='Phone' className="w-full px-4 py-3 capitalize border-[0.2px] border-[#C5C5C5] outline-none" />
    </form>
  )
}

export default DeliveryInfo
