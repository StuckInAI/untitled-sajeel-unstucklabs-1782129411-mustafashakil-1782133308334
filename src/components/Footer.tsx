export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-12">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-xl shadow-blue-100 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-2xl">🍽️</span>
              <div>
                <p className="text-xl font-black text-stone-950">CraveCart</p>
                <p className="text-sm font-bold text-blue-500">Food delivered with care.</p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-stone-600">
              Discover tasty local restaurants, find reliable delivery times, and enjoy the comfort meal you were thinking about all day.
            </p>
          </div>
          <div>
            <h3 className="font-black text-stone-950">Explore</h3>
            <div className="mt-4 grid gap-3 text-sm font-bold text-stone-500">
              <a className="hover:text-blue-600" href="#restaurants">Restaurants</a>
              <a className="hover:text-blue-600" href="#popular">Popular dishes</a>
              <a className="hover:text-blue-600" href="#how-it-works">How it works</a>
            </div>
          </div>
          <div>
            <h3 className="font-black text-stone-950">Delivery hours</h3>
            <p className="mt-4 text-sm font-bold leading-7 text-stone-500">Open daily<br />10:00 AM - 11:30 PM</p>
            <p className="mt-4 rounded-full bg-blue-50 px-4 py-3 text-sm font-black text-blue-600">Support in under 2 minutes</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-blue-100 pt-6 text-sm font-semibold text-stone-500 sm:flex-row">
          <p>© 2026 CraveCart. All meals served fresh.</p>
          <p>Made for hungry neighborhoods.</p>
        </div>
      </div>
    </footer>
  );
}