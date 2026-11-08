
"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    category: "Dogs",
    price: 25,
    oldPrice: 32,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=700",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Cute Cat Toy",
    category: "Cats",
    price: 12,
    oldPrice: 16,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=700",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Comfort Pet Bed",
    category: "Dogs",
    price: 35,
    oldPrice: 42,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=700",
    tag: "New",
  },
  {
    id: 4,
    name: "Bird Food Mix",
    category: "Birds",
    price: 15,
    oldPrice: 19,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=700",
    tag: "Popular",
  },
  {
    id: 5,
    name: "Aquarium Fish",
    category: "Fish",
    price: 20,
    oldPrice: 25,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=700",
    tag: "New",
  },
  {
    id: 6,
    name: "Cat Comfort Bed",
    category: "Cats",
    price: 29,
    oldPrice: 36,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=700",
    tag: "Best Seller",
  },
  {
    id: 7,
    name: "Dog Walking Set",
    category: "Dogs",
    price: 18,
    oldPrice: 24,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=700",
    tag: "Popular",
  },
  {
    id: 8,
    name: "Bird Cage",
    category: "Birds",
    price: 45,
    oldPrice: 55,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=700",
    tag: "New",
  },
];

const categories = ["All", "Dogs", "Cats", "Birds", "Fish"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  function addToCart(id: number) {
    setCart((previous) => [...previous, id]);
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">

     

      {/* Hero Section */}
      <section className="bg-orange-50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">

          <p className="mb-4 font-bold uppercase tracking-[4px] text-orange-500">
            Welcome To Pawsome Shop
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Everything Your Pet
            <span className="block text-orange-500">Needs & Loves</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Discover premium pet food, adorable toys and everyday essentials.
            Make your pet's life happier with Pawsome.
          </p>

          <Link
            href="#products"
            className="mt-8 inline-block rounded-full bg-orange-500 px-9 py-4 font-bold text-white transition hover:bg-gray-900"
          >
            Explore Products →
          </Link>

        </div>
      </section>

      {/* Shop Section */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-orange-500">
              Our Collection
            </p>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Shop Our Products
            </h2>
            <p className="mt-3 text-gray-500">
              Find the perfect products for your lovely pets.
            </p>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 px-6 py-4 outline-none transition focus:border-orange-500 md:w-80"
          />

        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-7 py-3 font-semibold transition ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-64 overflow-hidden bg-gray-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                  {product.tag}
                </span>

              </div>

              <div className="p-5">

                <p className="text-sm font-semibold text-orange-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-yellow-500">
                  ★★★★★ <span className="text-gray-500">({product.rating})</span>
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(product.id)}
                  className="mt-5 w-full rounded-full bg-gray-900 py-3 font-bold text-white transition hover:bg-orange-500"
                >
                  + Add To Cart
                </button>

              </div>
            </div>
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-xl font-bold">No products found!</p>
            <p className="mt-2 text-gray-500">
              Try searching with another product name.
            </p>
          </div>
        )}

      </section>

      {/* Special Offer */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gray-900 px-8 py-16 text-center text-white">

          <p className="font-bold uppercase tracking-widest text-orange-400">
            Special Offer
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Get 20% OFF Your First Order!
          </h2>

          <p className="mt-5 text-gray-300">
            Give your lovely pets something special today.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-orange-500 px-9 py-4 font-bold text-white transition hover:bg-white hover:text-gray-900"
          >
            Contact Us →
          </Link>

        </div>
      </section>

      

    </main>
  );
}
