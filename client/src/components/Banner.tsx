import bannerImg from "../assets/pngs/banner_img.png"
import { Dash } from "../assets/svgs"

const Banner = () => {
  return (
    <section className="w-full h-[calc(100vh-64px-80px)] max-h-[600px] flex flex-col md:flex-row border-1 border-[#ADADAD]">
      <div className="w-full h-1/2 flex flex-col gap-4 justify-center px-8 lg:px-14 md:w-1/2 md:h-full">
        <div className="flex items-center gap-2 uppercase text-md lg:text-lg text-[#414141]">
          <Dash />
          <span>our bestsellers</span>
        </div>

        <span className="text-5xl lg:text-6xl capitalize font-prata text-[#414141]">Latest Arrivals</span>

        <div className="flex items-center gap-2 uppercase text-md lg:text-lg text-[#414141]">
          <span>shop now</span>
          <Dash />
        </div>
      </div>
      <div className="w-full h-1/2 md:w-1/2 md:h-full">
        <img src={bannerImg} alt="banner_img" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}

export default Banner
