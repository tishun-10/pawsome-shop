
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you for contacting Pawsome! We will get back to you soon.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">

      
      {/* Hero Section */}
      <section className="bg-orange-50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">

          <p className="mb-4 font-bold uppercase tracking-[4px] text-orange-500">
            We'd Love To Hear From You
          </p>

          <h1 className="text-4xl font-extrabold md:text-6xl">
            Let's Talk About
            <span className="block text-orange-500">Your Lovely Pets!</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, need assistance or looking for the perfect
            product for your pet? Our friendly team is here to help.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-gray-100 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
              📍
            </div>
            <h3 className="text-xl font-bold">Our Location</h3>
            <p className="mt-3 leading-7 text-gray-500">
              123 Pet Street, New York, USA
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
              📧
            </div>
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="mt-3 leading-7 text-gray-500">
              hello@pawsome.com
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
              📞
            </div>
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="mt-3 leading-7 text-gray-500">
              +1 (234) 567-8900
            </p>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto grid max-w-7xl items-start gap-14 md:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="mb-4 font-bold uppercase tracking-widest text-orange-500">
              Contact Us
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Send Us A
              <span className="block text-orange-500">Message</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Your pet's happiness matters to us. Whether you have a question
              about our products, need shopping assistance or simply want to
              say hello, feel free to send us a message.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
                  🕒
                </div>
                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Monday - Saturday: 9 AM - 6 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold">Friendly Support</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We're always happy to help pet parents.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
                  🐾
                </div>
                <div>
                  <h3 className="font-bold">Pet Lovers Community</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Join our journey of making pets happier.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">

            <h3 className="mb-8 text-2xl font-extrabold">
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="What is your message about?"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 py-4 font-bold text-white transition hover:bg-gray-900"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="mb-12 text-center">
          <p className="mb-3 font-bold uppercase tracking-widest text-orange-500">
            FAQs
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold">
              Do you offer delivery?
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              Yes! We offer delivery options for our customers. Contact us
              to learn more about delivery availability.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold">
              How can I choose the right food for my pet?
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              You can contact our team for general product guidance based
              on your pet's needs and preferences.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold">
              How can I track my order?
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              Please contact our support team with your order information
              for assistance.
            </p>
          </div>

        </div>
      </section>

      

    </main>
  );
}
