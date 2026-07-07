import React from 'react'
import Navbar from './components/Navbar'

const categories = [
  { title: 'Electronics', color: 'bg-blue-500' },
  { title: 'Fashion', color: 'bg-pink-500' },
  { title: 'Home', color: 'bg-emerald-500' },
  { title: 'Toys', color: 'bg-orange-500' },
  { title: 'Beauty', color: 'bg-violet-500' },
  { title: 'Sports', color: 'bg-slate-500' },
]

const deals = [
  {
    name: 'Noise Cancelling Headphones',
    price: '$89',
    tag: '20% off',
    description: 'Wireless over-ear sound with long battery life.',
  },
  {
    name: 'Smart Home Speaker',
    price: '$59',
    tag: 'Best seller',
    description: 'Voice control, music, and smart home hub.',
  },
  {
    name: 'Fitness Watch',
    price: '$99',
    tag: 'Limited time',
    description: 'Heart rate, sleep tracking, and workout mode.',
  },
]

const recommended = [
  {
    name: '4K UHD Smart TV',
    price: '$399',
    description: 'Cinematic picture quality with streaming apps built in.',
  },
  {
    name: 'Kitchen Mixer',
    price: '$129',
    description: 'Powerful motor and multiple attachments.',
  },
  {
    name: 'Gaming Laptop',
    price: '$999',
    description: 'High performance for work and play.',
  },
]

const ProductCard = ({ item }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div className="h-48 rounded-3xl bg-slate-100" />
    <div className="mt-5 space-y-2">
      <p className="text-sm font-semibold text-slate-500">{item.tag || 'Featured'}</p>
      <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
      <p className="text-sm text-slate-600">{item.description}</p>
      <div className="flex items-center justify-between pt-4">
        <span className="text-xl font-bold text-slate-900">{item.price}</span>
        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-[1280px] px-4 pb-16 pt-6">
        <section className="grid gap-6 rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 px-6 py-10 text-white shadow-2xl sm:grid-cols-[1.25fr_0.9fr] sm:gap-8">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-slate-900">Prime delivery</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Shop top deals, electronics, fashion and more.</h1>
            <p className="max-w-xl text-base leading-7 text-slate-200">Discover a clean Amazon-inspired storefront with curated deals, categories, and quick shopping action.</p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300">Shop Deals</button>
              <button className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:border-white">See Categories</button>
            </div>
          </div>
          <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6">
            <div className="rounded-3xl bg-slate-900 p-6 text-left shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Today&apos;s deal</p>
              <h2 className="mt-4 text-2xl font-bold text-white">Up to 50% off tech essentials</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Save on headphones, speakers, accessories, and more with fast delivery options.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 p-5 text-white">
                <p className="text-sm text-slate-400">Popular gift</p>
                <h3 className="mt-3 text-xl font-semibold">Wireless earbuds</h3>
                <p className="mt-2 text-sm text-slate-300">Noise cancellation and long battery life.</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-5 text-white">
                <p className="text-sm text-slate-400">Hot pick</p>
                <h3 className="mt-3 text-xl font-semibold">Smart home starter kit</h3>
                <p className="mt-2 text-sm text-slate-300">Voice, streaming, and automation in one bundle.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Explore</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Shop by Category</h2>
            </div>
            <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
              Browse all
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map((category) => (
              <div key={category.title} className={`rounded-[1.75rem] p-6 text-white shadow-lg ${category.color}`}>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-100/80">Category</p>
                <h3 className="mt-4 text-2xl font-semibold">{category.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Limited time</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Deals of the Day</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {deals.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{item.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-bold text-slate-900">{item.price}</span>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Recommended</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">You may also like</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {recommended.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
