import Title from "../components/Title"
import aboutImg from "../assets/pngs/about_img.png"
import SubscriptionForm from "../components/SubscriptionForm"

const About = () => {
  return (
    <main className="w-[90%] h-full min-h-[calc(100vh-64px-64px)] max-w-7xl mx-auto py-10 flex flex-col gap-20">
      <section className="flex flex-col items-center gap-10">
        <Title title="About us" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6">

          <img src={aboutImg} alt="about_img" className="w-full my-auto max-h-[540px] max-w-[540px] object-cover" />
          <div className="py-10 text-lg text-[#6D6D6D]">
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes
            <br /> <br />
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
            <br /> <br />
            <span>Our Mission</span>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <Title title="Why Choose Us" />

        <div className="h-[230px] border-1 text-[#6D6D6D] border-[#ABABAB] grid grid-cols-1 md:grid-cols-3">
          <div className="flex px-6 py-10 flex-col gap-4 p-4">
            <span className="uppercase text-lg font-semibold text-[#2A2A2A]">
              Quality Assurance:</span>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>

          <div className="border-l border-r border-x-[#ABABAB] flex px-6 py-10 flex-col gap-4 p-4">
            <span className="uppercase text-lg font-semibold text-[#2A2A2A]">
              Convenience:</span>
            <p> With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>

          <div className="flex px-6 py-10 flex-col gap-4 p-4">
            <span className="uppercase text-lg font-semibold text-[#2A2A2A]">
              Exceptional Customer Service:</span>
            <p> Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority. </p>
          </div>
        </div>
      </section>

      <SubscriptionForm />
    </main >
  )
}

export default About
