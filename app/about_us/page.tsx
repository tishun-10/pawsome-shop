
import Link from "next/link";

const values = [
  {
    icon: "❤️",
    title: "Love & Care",
    description:
      "We believe every pet deserves unconditional love, attention and the best possible care.",
  },
  {
    icon: "🌿",
    title: "Quality First",
    description:
      "We focus on quality products that support the health, comfort and happiness of pets.",
  },
  {
    icon: "🤝",
    title: "Customer Trust",
    description:
      "Building lasting relationships with pet parents through honesty and friendly service.",
  },
  {
    icon: "🐾",
    title: "Pet Happiness",
    description:
      "Everything we do is inspired by one simple goal: making pets happier every day.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700",
  },
  {
    name: "Michael Brown",
    role: "Pet Care Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700",
  },
  {
    name: "Emily Wilson",
    role: "Customer Experience",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-orange-50 px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-5 font-bold uppercase tracking-[4px] text-orange-500">
              Get To Know Us
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              We Make Pet
              <span className="block text-orange-500">Love Our Priority.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              At Pawsome, we believe pets are more than animals.
              They are family. Our goal is to make every pet's life
              healthier, happier and more comfortable.
            </p>

            <Link
              href="#our-story"
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-gray-900"
            >
              Discover Our Story →
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000"
              alt="Happy pets"
             className="h-96 w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-3xl font-extrabold text-orange-500">100%</p>
              <p className="mt-1 font-semibold text-gray-600">
                Love For Every Pet
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-14 md:grid-cols-2">

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700"
              alt="Dogs playing"
              className="h-64 w-full rounded-3xl object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700"
              alt="Cute cat"
              className="mt-10 h-64 w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <p className="mb-4 font-bold uppercase tracking-widest text-orange-500">
              Our Story
            </p>

            <h2 className="text-4xl font-extrabold leading-tight">
              A Little Love Can Make
              <span className="text-orange-500"> A Big Difference.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Pawsome was created with a simple idea: every pet deserves
              a happy and healthy life. We wanted to create a place where
              pet parents could find quality products and helpful support
              for their beloved companions.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From everyday essentials to playful accessories, we carefully
              bring together products that make pet parenting easier and
              more enjoyable.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-block rounded-full bg-gray-900 px-8 py-4 font-bold text-white transition hover:bg-orange-500"
            >
              Explore Our Shop →
            </Link>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-orange-500 p-10 text-white">
            <div className="mb-6 text-5xl">🎯</div>
            <h2 className="text-3xl font-extrabold">Our Mission</h2>
            <p className="mt-5 leading-8 text-orange-50">
              To make quality pet care accessible and convenient by offering
              trusted products and a friendly shopping experience for every
              pet parent.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-900 p-10 text-white">
            <div className="mb-6 text-5xl">🌟</div>
            <h2 className="text-3xl font-extrabold">Our Vision</h2>
            <p className="mt-5 leading-8 text-gray-300">
              To build a community where every pet receives love, proper
              care and the opportunity to live a happy and healthy life.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-14 text-center">
          <p className="mb-3 font-bold uppercase tracking-widest text-orange-500">
            Why Pawsome
          </p>

          <h2 className="text-4xl font-extrabold">
            Why Pet Parents Choose Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We care about the little things that make a big difference
            in your pet's everyday life.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-gray-100 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-50 text-4xl">
                {value.icon}
              </div>

              <h3 className="text-xl font-bold">{value.title}</h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {value.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Team Section */}
      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 font-bold uppercase tracking-widest text-orange-500">
              Meet Our Team
            </p>

            <h2 className="text-4xl font-extrabold">
              The People Behind Pawsome
            </h2>

            <p className="mt-4 text-gray-500">
              A team that believes every pet deserves the best.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-7 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 font-medium text-orange-500">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gray-900 px-8 py-16 text-center text-white">

          <p className="font-bold uppercase tracking-widest text-orange-400">
            Let's Connect
          </p>

          <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
            Be Part Of The Pawsome Family!
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
            Have questions or need help finding the perfect products
            for your pet? We would love to hear from you.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-orange-500 px-9 py-4 font-bold text-white transition hover:bg-white hover:text-gray-900"
          >
            Contact Our Team →
          </Link>

        </div>
      </section>

      

    </main>
  );
}
