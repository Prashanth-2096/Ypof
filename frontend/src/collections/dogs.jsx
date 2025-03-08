import ProductCard from "../components/ProductCard";
import dogpedigree from "../assets/pedigree.png"

const dogProducts = [
  {
    id: 1,
    name: "Pedigree 500gm",
    price: 300,
    image: dogpedigree,
  },
  {
    id: 2,
    name: "Royal Canin Dog Food",
    price: 800,
    image: dogpedigree,
  },
  {
    id: 3,
    name: "Drools Puppy Food",
    price: 600,
    image: dogpedigree,
  },
  ,
  {
    id: 4,
    name: "Drools Puppy Food",
    price: 600,
    image: dogpedigree,

  },
  {
    id: 5,
    name: "Drools Puppy Food",
    price: 600,
    image: dogpedigree,
  }
];

export default function DogSection() {
  return (
    <section className="mb-12 mt-12 mr-2 flex-col">
      <div>
      <h2 className="text-4xl font-semibold text-ypof mb-4 text-center">Dog Food</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {dogProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
