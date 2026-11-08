
import Link from "next/link";

const categories = [
  {
    name: "Dogs",
    subtitle: "Everything your dog needs",
    description:
      "Discover premium food, toys, accessories and comfortable essentials for your lovely dogs.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=900",
    products: "120+ Products",
    color: "bg-orange-50",
  },
  {
    name: "Cats",
    subtitle: "Make your cat feel special",
    description:
      "Explore cozy beds, delicious treats, playful toys and everyday essentials for your cats.",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900",
    products: "95+ Products",
    color: "bg-pink-50",
  },
  {
    name: "Birds",
    subtitle: "Happy wings, happy life",
    description:
      "Find nutritious bird food, beautiful cages, toys and accessories for your feathered friends.",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=900",
    products: "60+ Products",
    color: "bg-yellow-50",
  },
  {
    name: "Fish",
    subtitle: "Create an underwater world",
    description:
      "Everything for your aquarium, from fish food to tanks and water care accessories.",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900",
    products: "80+ Products",
    color: "bg-blue-50",
  },
];

const extraCategories = [
  { icon: "🦴", name: "Pet Food", count: "150 Products" },
  { icon: "🧸", name: "Pet Toys", count: "85 Products" },
  { icon: "🛏️", name: "Pet Beds", count: "45 Products" },
  { icon: "🧴", name: "Grooming", count: "70 Products" },
  { icon: "🎀", name: "Accessories", count: "90 Products" },
  { icon: "💊", name: "Health Care", count: "35 Products" },
];

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      
      {/* Hero */}
      <section className="bg-orange-50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 font-bold uppercase tracking-[4px] text-orange-500">
            Explore Our Collection
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Find Everything Your
            <span className="block text-orange-500">Pet Deserves</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            From nutritious food to playful toys, discover everything you need
            to keep your furry and feathered friends happy and healthy.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#main-categories"
              className="rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition hover:bg-orange-500"
            >
              Explore Categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section id="main-categories" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 font-bold uppercase tracking-widest text-orange-500">
            Shop By Pet
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Browse Our Categories
          </h2>
          <p className="mt-4 text-gray-500">
            Choose your favorite pet category and explore our collection.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-orange-500 shadow">
                  {category.products}
                </span>
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-500">
                  {category.subtitle}
                </p>

                <h3 className="mb-3 text-2xl font-bold">
                  {category.name}
                </h3>

                <p className="mb-6 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold text-gray-900 transition hover:text-orange-500"
                >
                  Shop Now <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Categories */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-bold uppercase tracking-widest text-orange-500">
              More To Explore
            </p>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Everything For Your Pet
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {extraCategories.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 transition hover:border-orange-200 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.count}</p>
                </div>

                <span className="ml-auto text-xl text-orange-500">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-orange-500 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Your Pet Deserves The Best!
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-orange-50">
            Give your beloved pets the love, care and comfort they deserve.
            Explore our collection and find something special today.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-gray-900 hover:text-white"
          >
            Get In Touch →
          </Link>
        </div>
      </section>

      

    </main>
  );
}
