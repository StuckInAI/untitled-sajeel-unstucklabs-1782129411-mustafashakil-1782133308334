const categories = [
  { icon: '🍔', name: 'Burgers', count: '34 spots' },
  { icon: '🍣', name: 'Sushi', count: '18 spots' },
  { icon: '🌮', name: 'Tacos', count: '22 spots' },
  { icon: '🍝', name: 'Pasta', count: '27 spots' },
  { icon: '🍩', name: 'Desserts', count: '15 spots' },
];

export default function CategoryStrip() {
  return (
    <section id="popular" className="px-6 py-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-5 shadow-xl shadow-orange-100">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group rounded-[2rem] border border-orange-100 bg-orange-50/70 p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-4xl shadow-sm transition group-hover:scale-110">
                {category.icon}
              </div>
              <h2 className="mt-5 text-xl font-black text-stone-950">{category.name}</h2>
              <p className="mt-1 text-sm font-bold text-stone-500">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
