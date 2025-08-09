import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./containers/Layout"
import { Home, Collections, About, Contact, Product, Login, Cart, Checkout, Orders } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />

        <Route path="collections"  >
          <Route index element={<Collections />} />
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  )
}

export default App  
