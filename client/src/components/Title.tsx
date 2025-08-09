import { Dash } from "../assets/svgs"

type Props = {
  title: string
}

const Title = ({ title }: Props) => {
  const parts = title.split(" ")

  return (
    <span className="text-[25px] md:text-[30px] lg:text-[35px] uppercase text-[#707070] flex flex-wrap gap-2 leading-none">
      {parts[0]}
      {
        parts[1] && <span className="flex items-center gap-2 text-black">{" " + parts[1]} <Dash /></span>
      }
    </span>
  )
}

export default Title
