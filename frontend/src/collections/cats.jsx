import ProductCard from "../components/ProductCard";

const catProducts = [
  {
    id: 5,
    name: "Whiskas Cat Food",
    price: 450,
    image: "../public/pedigree.png",
  },
  {
    id: 6,
    name: "Meo Cat Food",
    price: 550,
    image: "../public/pedigree.png",
  },
  ,
  {
    id: 7,
    name: "Meo Cat Food",
    price: 550,
    image: "../public/pedigree.png",
  },
  ,
  {
    id: 8,
    name: "Meo Cat Food",
    price: 550,
    image: "../public/pedigree.png",
  },
];

export default function CatSection() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-[#02042B] mb-4">Cat Food</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {catProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
