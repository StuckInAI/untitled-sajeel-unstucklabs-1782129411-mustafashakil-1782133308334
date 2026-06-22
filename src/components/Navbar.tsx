export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/60 bg-stone-50/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Go to top">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-2xl shadow-lg shadow-blue-300/50">🍽️</span>
          <span>
            <span className="block text-lg font-black tracking-tight text-stone-950">CraveCart</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">hot & fast</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 rounded-full bg-white/80 px-6 py-3 text-sm font-bold text-stone-600 shadow-sm shadow-stone-200 md:flex">
          <a className="transition hover:text-blue-600" href="#restaurants">Restaurants</a>
          <a className="transition hover:text-blue-600" href="#popular">Popular</a>
          <a className="transition hover:text-blue-600" href="#how-it-works">How it works</a>
        </div>
        <a
          href="#restaurants"
          className="rounded-full bg-stone-950 px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-stone-300 transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Order now
        </a>
      </nav>
    </header>
  );
}