type Collection = {
  title: string,
  subtitle: string?,
  products: Product[]
}

type Product = {
  id: string,
  img: string,
  name: string,
  price: number,
}

type Size = "XS" | "S" | "M" | "L" | "XL"

type ProductDetail = {
  id: string,
  img: string[],
  name: string,
  price: number,
  sizes: Size[],
  desc: string
}

type CartItem = {
  id: string,
  img: string,
  name: string,
  price: number,
  size: Size,
  amount: number
}

type OrderItem = {
  id: string,
  img: string,
  name: string,
  price: number,
  size: Size,
  amount: number
  status: "Ready" | "Shipped"
}
