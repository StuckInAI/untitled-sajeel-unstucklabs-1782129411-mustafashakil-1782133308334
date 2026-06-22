export default function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-32 lg:pt-36">
      <div className="absolute left-1/2 top-16 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-extrabold text-orange-600 shadow-sm">
            <span>⚡</span>
            Average delivery in 24 minutes
          </div>
          <h1 className="mt-7 max-w-4xl text-6xl font-black leading-[0.95] tracking-tight text-stone-950 md:text-7xl">
            Delicious food delivered to your door.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-600">
            Browse neighborhood favorites, find crave-worthy deals, and track a fresh meal from kitchen to doorstep.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#restaurants"
              className="rounded-full bg-orange-500 px-8 py-4 text-center text-base font-black text-white shadow-2xl shadow-orange-300 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Browse restaurants
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-stone-200 bg-white px-8 py-4 text-center text-base font-black text-stone-950 shadow-sm transition hover:-translate-y-1 hover:border-orange-300"
            >
              See how it works
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              ['120+', 'restaurants'],
              ['4.9★', 'top rated'],
              ['18k', 'orders delivered'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl bg-white p-5 shadow-lg shadow-orange-100">
                <p className="text-2xl font-black text-stone-950">{value}</p>
                <p className="mt-1 text-sm font-semibold text-stone-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-amber-300/50 blur-2xl" />
          <div className="relative rounded-[2.5rem] bg-stone-950 p-4 shadow-2xl shadow-orange-200">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-100 via-white to-amber-100 p-6">
              <div className="flex items-center justify-between rounded-3xl bg-white/80 p-4 shadow-sm">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">Arriving now</p>
                  <p className="mt-1 text-xl font-black text-stone-950">Spicy ramen bowl</p>
                </div>
                <span className="text-4xl">🍜</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] bg-white p-5 shadow-lg shadow-orange-100">
                  <div className="text-6xl">🍕</div>
                  <p className="mt-4 text-lg font-black">Margherita</p>
                  <p className="text-sm font-semibold text-stone-500">12 min away</p>
                </div>
                <div className="rounded-[2rem] bg-orange-500 p-5 text-white shadow-lg shadow-orange-300">
                  <div className="text-6xl">🥗</div>
                  <p className="mt-4 text-lg font-black">Fresh salad</p>
                  <p className="text-sm font-semibold text-orange-100">Free delivery</p>
                </div>
              </div>
              <div className="mt-5 rounded-[2rem] bg-white p-5 shadow-lg shadow-orange-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">🛵</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-black text-stone-950">
                      <span>Driver nearby</span>
                      <span>82%</span>
                    </div>
                    <div className="mt-3 h-3 rounded-full bg-stone-100">
                      <div className="h-3 w-4/5 rounded-full bg-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
