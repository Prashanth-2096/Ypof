import ProductCard from "../components/ProductCard";

const dogProducts = [
  {
    id: 1,
    name: "Pedigree 500gm",
    price: 300,
    original_price:600,
    image: "../pedigree.png",
  },
  {
    id: 2,
    name: "Royal Canin Dog Food",
    price: 800,
    original_price:900,
    image: "../pedigree.png",
  },
  {
    id: 3,
    name: "Drools Puppy Food",
    price: 600,
    original_price:900,
    image: "../pedigree.png",
  },
  ,
  {
    id: 4,
    name: "Drools Puppy Food",
    price: 600,
    original_price:600,
    image: "../pedigree.png",
  }
];

export default function DogSection() {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-semibold text-[#02042B] mb-4">Dog Food</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {dogProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
