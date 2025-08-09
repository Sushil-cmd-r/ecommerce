import Banner from "../components/Banner"
import Collection from "../containers/Collection"
import Offer from "../containers/Offer"
import { latestCollections, bestSellers } from "../constants"

const Home = () => {
  return (
    <main className="w-[90%] h-full max-w-7xl mx-auto flex flex-col py-10 gap-24">
      <Banner />
      <Collection collection={latestCollections} />
      <Collection collection={bestSellers} />
      <Offer />
    </main >
  )
}

export default Home
