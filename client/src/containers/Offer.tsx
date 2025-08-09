import { Exchange, Quality, Support } from "../assets/svgs"
import SubscriptionForm from "../components/SubscriptionForm"

const Offer = () => {
  return (
    <section className="flex flex-col">
      <ul className="w-full flex flex-col md:flex-row md:justify-around text-center">
        <li className="h-[250px] aspect-square flex flex-col items-center gap-3">
          <Exchange className="h-20 aspect-square" />
          <h2 className="text-lg text-[#373737] font-semibold">Easy Exchange Policy</h2>
          <p className="text-lg text-[#898989] font-normal">We offer hassle free exchange policy</p>
        </li>
        <li className="h-[250px] aspect-square flex flex-col items-center gap-3">
          <Quality className="h-20 aspect-square" />
          <h2 className="text-lg text-[#373737] font-semibold">7 Days Return Policy</h2>
          <p className="text-lg text-[#898989] font-normal">We provide 7 days free return policy</p>
        </li>
        <li className="h-[250px] aspect-square flex flex-col items-center gap-3">
          <Support className="h-20 aspect-square" />
          <h2 className="text-lg text-[#373737] font-semibold">Best Customer Support</h2>
          <p className="text-lg text-[#898989] font-normal">We provide 24/7 customer support</p>
        </li>
      </ul>

      <SubscriptionForm />
    </section>
  )
}

export default Offer
