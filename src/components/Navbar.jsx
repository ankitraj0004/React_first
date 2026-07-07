import React from 'react'

const mainLinks = ['Best Sellers', 'Customer Service', 'Prime', 'New Releases', 'Home', 'Electronics']

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white shadow-sm">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-black tracking-tight text-yellow-400">amazon</div>
          <div className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200">
            prime
          </div>
        </div>

        <form className="flex w-full items-center gap-2 rounded-full bg-slate-800 p-2 sm:w-[550px]">
          <select className="h-11 rounded-l-full border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-yellow-400">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
          <input
            type="search"
            placeholder="Search Amazon"
            className="flex-1 bg-slate-800 px-4 text-sm text-slate-100 outline-none placeholder:text-slate-400"
          />
          <button className="rounded-r-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300">
            Search
          </button>
        </form>

        <div className="hidden items-center gap-4 text-sm sm:flex">
          <a href="#" className="transition hover:text-yellow-300">Sign in</a>
          <a href="#" className="transition hover:text-yellow-300">Orders</a>
          <a href="#" className="transition hover:text-yellow-300">Cart</a>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950/95 py-2 text-sm text-slate-300">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-4 px-4">
          {mainLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-white">
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
