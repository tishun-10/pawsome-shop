
import Link from "next/link";

const categories = [
  { icon: "🐶", name: "Dogs", count: "24 Products" },
  { icon: "🐱", name: "Cats", count: "18 Products" },
  { icon: "🐦", name: "Birds", count: "12 Products" },
  { icon: "🐠", name: "Fish", count: "16 Products" },
];

const products = [
  {
    name: "Premium Dog Food",
    category: "Nutrition",
    price: "$29.99",
    oldPrice: "$35.99",
    image: "🐕",
    bg: "bg-orange-100",
  },
  {
    name: "Cute Cat Toy",
    category: "Toys & Accessories",
    price: "$12.50",
    oldPrice: "$16.00",
    image: "🐈",
    bg: "bg-pink-100",
  },
  {
    name: "Pet Comfort Bed",
    category: "Comfort",
    price: "$45.00",
    oldPrice: "$55.00",
    image: "🛏️",
    bg: "bg-green-100",
  },
  {
    name: "Bird Food Mix",
    category: "Bird Supplies",
    price: "$18.99",
    oldPrice: "$22.00",
    image: "🦜",
    bg: "bg-yellow-100",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#26352b]">

      
      

      {/* Hero Section */}
      <section id="home" className="overflow-hidden px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-600">
              🐾 Everything Your Pet Needs
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight md:text-7xl">
              Love Your Pets.
              <span className="block text-orange-500">
                Spoil Them More.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-500">
              Discover premium food, adorable toys, cozy accessories and
              everything your furry friends need to live a happy and healthy life.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-[#26352b] px-8 py-4 font-bold text-white transition hover:bg-orange-500"
              >
                Explore Products →
              </a>

              <a
                href="#about"
                className="rounded-full border border-gray-300 px-8 py-4 font-bold transition hover:border-orange-500 hover:text-orange-500"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-3xl font-black">2.5k+</h3>
                <p className="mt-1 text-sm text-gray-500">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-black">150+</h3>
                <p className="mt-1 text-sm text-gray-500">Pet Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-black">4.9★</h3>
                <p className="mt-1 text-sm text-gray-500">Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[400px] items-center justify-center rounded-[45px] bg-[#fce8d7] p-8 md:min-h-[530px]">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-orange-200/70" />
            <div className="absolute bottom-8 left-8 h-32 w-32 rounded-full bg-yellow-200/70" />

            <div className="relative text-center">
              <div className="text-[170px] leading-none drop-shadow-xl md:text-[220px]">
                🐕
              </div>
              <div className="mt-5 rounded-2xl bg-white px-7 py-4 shadow-lg">
                <p className="text-lg font-black">Your Pet, Our Priority!</p>
                <p className="mt-1 text-sm text-gray-500">
                  Quality care for every little friend.
                </p>
              </div>
            </div>

            <div className="absolute left-5 top-20 rounded-2xl bg-white p-4 text-3xl shadow-lg">
              🦴
            </div>
            <div className="absolute bottom-20 right-5 rounded-2xl bg-white p-4 text-3xl shadow-lg">
              ❤️
            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-[#f7f5ed] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Explore Our Collection
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Shop By Category
            </h2>
            <p className="mt-4 text-gray-500">
              Find everything your lovely pets deserve.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {categories.map((item) => (
              <a
                href="#products"
                key={item.name}
                className="group rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-6xl transition group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-black">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.count}</p>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-500">
                Our Best Sellers
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Popular Products
              </h2>
            </div>

            <a href="#contact" className="font-bold text-orange-500">
              View All Products →
            </a>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`flex h-60 items-center justify-center ${product.bg}`}>
                  <span className="text-8xl transition group-hover:scale-110">
                    {product.image}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                    {product.category}
                  </p>
                  <h3 className="mt-3 text-xl font-black">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xl font-black">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 block rounded-full bg-[#26352b] py-3 text-center text-sm font-bold text-white transition hover:bg-orange-500"
                  >
                    Order Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Special Offer */}
      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 overflow-hidden rounded-[40px] bg-[#26352b] px-10 py-16 text-white md:flex-row md:px-20">

          <div>
            <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold">
              SPECIAL OFFER
            </span>
            <h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl">
              Give Your Pet
              <span className="block text-orange-400">Something Special!</span>
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-gray-300">
              Get 20% off on selected pet essentials. Because your little
              companion deserves the very best.
            </p>
            <a
              href="#products"
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-bold transition hover:bg-orange-600"
            >
              Shop The Offer →
            </a>
          </div>

          <div className="text-[150px] md:text-[190px]">
            🐱
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div className="flex min-h-[350px] items-center justify-center rounded-[40px] bg-[#fce8d7] text-[170px]">
            🐾
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">
              About Pawsome
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              More Than A Pet Shop.
              <span className="text-orange-500"> A Pet Family.</span>
            </h2>
            <p className="mt-7 leading-8 text-gray-500">
              At Pawsome, we believe pets are family. That is why we carefully
              select quality products to make every pet healthier, happier
              and more comfortable.
            </p>
            <p className="mt-4 leading-8 text-gray-500">
              From nutritious food to playful toys, we are here to make
              pet parenting easier and more enjoyable.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Discover Our Story →
            </a>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f7f5ed] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-widest text-orange-500">
            Happy Pet Parents
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            What Our Customers Say
          </h2>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                review: "Amazing quality products! My dog absolutely loves the food.",
                pet: "🐶",
              },
              {
                name: "Michael Smith",
                review: "Beautiful collection and great shopping experience.",
                pet: "🐱",
              },
              {
                name: "Emma Wilson",
                review: "My favorite place to shop for my little companions!",
                pet: "🐰",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-3xl bg-white p-8 text-left shadow-sm">
                <div className="text-2xl text-orange-500">★★★★★</div>
                <p className="mt-5 leading-8 text-gray-500">
                  "{item.review}"
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
                    {item.pet}
                  </div>
                  <div>
                    <h4 className="font-black">{item.name}</h4>
                    <p className="text-sm text-gray-400">Happy Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[40px] bg-orange-50 px-8 py-16 text-center md:px-16">
          <div className="text-6xl">🐾</div>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Let's Make Tails Wag!
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-500">
            Have questions about our products? We would love to help you
            find something special for your pet.
          </p>
          <a
            href="mailto:hello@pawsome.com"
            className="mt-8 inline-block rounded-full bg-[#26352b] px-9 py-4 font-bold text-white transition hover:bg-orange-500"
          >
            Contact Us →
          </a>
        </div>
      </section>

     
    </main>
  );
}
