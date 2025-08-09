import List from "../components/List"
import Title from "../components/Title"

type Props = {
  collection: Collection
}

const Collection = ({ collection }: Props) => {
  return (
    <section className="flex flex-col gap-6 items-center">
      <Title title={collection.title} />
      {collection.subtitle &&
        <p className="text-sm text-[#868686] text-center leading-none">{collection.subtitle}</p>}
      <List products={collection.products} />
    </section>
  )
}

export default Collection
