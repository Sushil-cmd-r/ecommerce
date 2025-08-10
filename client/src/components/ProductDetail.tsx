import { Star } from "../assets/svgs"
import image from "../assets/pngs/p_img4.png"
import { useAppDispatch } from "../state/store"
import { addCartItem } from "../state/cartSlice"
import { useParams } from "react-router-dom"
import { useState } from "react"

const ProductDetail = () => {
  const { id } = useParams()

  // use id to fetch product from server
  const product: ProductDetail = {
    id: id || "1",
    img: [image, image, image, image],
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 149,
    sizes: ["M", "L", "XL"],
    desc: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment."
  }

  const [size, setSize] = useState<Size>(product.sizes[0])

  const dispatch = useAppDispatch()

  const addToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      cartId: product.id + "_" + size,
      img: product.img[0],
      name: product.name,
      price: product.price,
      amount: 1,
      size: size,
    }

    dispatch(addCartItem(cartItem))
  }

  return (
    <>
      <section className="w-full flex flex-col justify-center md:flex-row gap-6">
        <div className="max-h-[500px] max-w-[500px] grid grid-cols-4 grid-rows-4 gap-2" >
          <img src={image} alt={image} className="col-span-3 col-end-5 row-span-4 h-full object-cover" />
          {
            product.img.map((_, i) => (
              <img key={i} src={image} alt={image} className={`${i == 1 && "row-start-1"} w-full h-full object-contain`} />
            ))
          }
        </div>

        <div className="flex flex-col max-h-fit gap-4">
          <h2 className="text-[34px] font-medium text-[#3D3D3D]">{product.name}</h2>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5" fill="#000000" />
            ))}
          </div>
          <span className="text-[32px] text-[#2A2A2A]">${product.price}</span>
          <p className="text-md text-[#555555]">{product.desc}</p>

          <div className="flex flex-col gap-2">
            <span className="text-xl">Select size</span>
            <ul className="flex gap-2">
              {
                product.sizes.map((sz, i) => (
                  <li key={i} className={`w-10 h-10 flex items-center justify-center cursor-pointer bg-[#FBFBFB] border-1 border-[#EBEBEB] ${(sz === size) && "border-[#FF8551]"} `} onClick={() => setSize(sz)}>{sz}</li>
                ))
              }
            </ul>
          </div>

          <button className="text-md uppercase bg-black hover:scale-105 transition-transform cursor-pointer text-white py-2 w-full max-w-[150px] active:scale-100" onClick={addToCart}>Add to Cart</button>
          <hr />
          <p className="text-md text-[#555555]">
            100% Original product. <br />
            Cash on delivery is available on this product. <br />
            Easy return and exchange policy within 7 days. <br />
          </p>
        </div>

      </section>

      <section>

        {/* description */}
        <div className="flex flex-col ">
          <div className="flex text-md">
            <span className="px-6 py-4 border-[#D0D0D0] border-1 border-b-0 border-r-0">Description</span>
            <span className="px-6 py-4 border-[#D0D0D0] border-1 border-b-0">Review</span>
          </div>

          <div className="p-6 border-1 border-[#D0D0D0] max-h-[500px] text-md text-[#555555]">
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            <br />
            <br />
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
