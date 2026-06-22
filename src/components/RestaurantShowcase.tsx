const restaurants = [
  {
    name: 'Urban Wok House',
    dish: 'Honey chili noodles',
    rating: '4.9',
    time: '20-25 min',
    tag: 'Free delivery',
    emoji: '🥡',
    accent: 'bg-red-100',
  },
  {
    name: 'Mama Rosa Kitchen',
    dish: 'Wood-fired pizza',
    rating: '4.8',
    time: '18-22 min',
    tag: 'Popular',
    emoji: '🍕',
    accent: 'bg-orange-100',
  },
  {
    name: 'Green Garden',
    dish: 'Avocado grain bowl',
    rating: '4.7',
    time: '15-20 min',
    tag: 'Healthy',
    emoji: '🥑',
    accent: 'bg-green-100',
  },
];

export default function RestaurantShowcase() {
  return (
    <section id="restaurants" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-500">Restaurants near you</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
              Fresh picks ready for tonight.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-stone-600">
            A curated menu of local favorites with clear delivery times, ratings, and tasty highlights.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className="overflow-hidden rounded-[2.25rem] bg-white shadow-xl shadow-orange-100 transition hover:-translate-y-2"
            >
              <div className={`${restaurant.accent} relative flex h-56 items-center justify-center`}>
                <span className="text-8xl drop-shadow-sm">{restaurant.emoji}</span>
                <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-black text-orange-600 shadow-sm">
                  {restaurant.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-stone-950">{restaurant.name}</h3>
                    <p className="mt-1 font-semibold text-stone-500">{restaurant.dish}</p>
                  </div>
                  <div className="rounded-2xl bg-stone-950 px-3 py-2 text-sm font-black text-white">★ {restaurant.rating}</div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-orange-50 px-4 py-3 text-sm font-black text-stone-700">
                  <span>🕒 {restaurant.time}</span>
                  <span>From $4.99</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
