import List from "../components/List"
import Title from "../components/Title"

import { allCollections } from "../constants"

const Collections = () => {
  return (
    <main className="w-[90%] max-w-7xl h-full mx-auto">
      <section className="w-full h-full flex gap-4 py-10">
        <div className="flex-1 max-w-[220px] flex flex-col gap-6">
          <Title title="Filters" />
          <div className="flex flex-col gap-4">

            <div className="flex flex-col border-[0.2px] border-[#C8C8C8] rounded-md py-3 px-4 gap-3">
              <span className="text-base font-semibold text-[#555555] uppercase">Categories</span>
              <label className="text-base text-[#575757] flex items-center gap-2">
                <input type="checkbox" /> Men
              </label>
              <label className="text-base text-[#575757] flex items-center gap-2">
                <input type="checkbox" /> Women
              </label>
              <label className="text-base text-[#575757] flex items-center gap-2">
                <input type="checkbox" /> Kids
              </label>
            </div>
            <div className="flex flex-col border-[0.2px] border-[#C8C8C8] rounded-md py-3 px-4 gap-3">
              <span className="text-base font-semibold text-[#555555] uppercase">Type</span>
              <label className="text-base text-[#575757] flex items-center gap-2">
                <input type="checkbox" /> Topwear
              </label>
              <label className="text-base text-[#575757] flex items-center gap-2">
                <input type="checkbox" /> Bottomwear
              </label>
              <label className="text-base text-[#575757] flex items-center gap-2">
                <input type="checkbox" /> Winterwear
              </label>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <Title title={allCollections.title} />
          <List products={allCollections.products} />
        </div>
      </section>
    </main>
  )
}

export default Collections
