import { Geist, Geist_Mono, Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          <nav className="sticky top-0 z-50 border-b border-orange-100 bg-[#fffdf8]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="text-3xl font-black tracking-tight">
            Paws<span className="text-orange-500">ome.</span>
          </Link>

          <div className="hidden items-center gap-9 text-sm font-semibold md:flex">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <Link href="/category" className="hover:text-orange-500">
              Categories
            </Link>
            <Link href="/shop" className="hover:text-orange-500">
              Shop
            </Link>
            <Link href="/about_us" className="hover:text-orange-500">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </div>

          <a
            href="#products"
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            shop now
          </a>

        </div>
      </nav>
          {children}
          {/* Footer */}
      <footer className="bg-gray-950 px-6 py-12 text-center text-gray-400">

        <h2 className="text-3xl font-extrabold text-orange-500">
          🐾 Pawsome
        </h2>

        <p className="mt-3">
          Making Every Pet's Life Happier.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/category">Categories</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <p className="mt-8 text-xs">
          © 2026 Pawsome Pet Shop. All Rights Reserved.
        </p>

      </footer>
          </ThemeProvider>

      </body>
    </html>
  )
}
