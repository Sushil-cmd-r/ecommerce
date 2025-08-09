import { useState } from "react"
import { Dash } from "../assets/svgs"

const Login = () => {
  const [login, setLogin] = useState(false)
  return (
    <main className="w-[90%] h-[calc(100vh-64px-64px)] max-h-[1080px] max-w-7xl mx-auto flex items-center justify-center">

      <section className="w-full flex flex-col gap-6 max-w-[400px] text-[#414141]">
        <span className="font-prata text-3xl flex justify-center items-center gap-2">{login && "Log In" || "Sign Up"} <Dash /></span>

        <form className="flex flex-col items-center gap-3">
          {!login &&
            <input placeholder="name" className="w-full px-4 py-3 capitalize border-[0.2px] border-black outline-none" />
          }
          <input placeholder="email" type="email" className="w-full px-4 py-3 capitalize border-[0.2px] border-black outline-none" />
          <input placeholder="password" type="password" className="w-full px-4 py-3 capitalize border-[0.2px] border-black outline-none" />

          <div className="flex w-full justify-between text-sm font-prata">
            <span className="cursor-pointer">Forgot password</span>
            <span className="cursor-pointer capitalize" onClick={() => setLogin(prev => !prev)}>{login ? "create account" : "log in"}</span>
          </div>

          <button className="py-3 px-6 min-w-[150px] max-w-fit bg-black text-white">
            {!login && "Create" || "Log In"}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
