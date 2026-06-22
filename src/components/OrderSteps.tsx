const steps = [
  {
    number: '01',
    title: 'Choose your craving',
    description: 'Search by cuisine, delivery time, rating, or the dish you already have in mind.',
  },
  {
    number: '02',
    title: 'Customize your order',
    description: 'Add sides, swap ingredients, and review clear pricing before your meal is prepared.',
  },
  {
    number: '03',
    title: 'Track every minute',
    description: 'Follow the driver from pickup to your door with friendly updates along the way.',
  },
];

export default function OrderSteps() {
  return (
    <section id="how-it-works" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.75rem] bg-stone-950 p-6 text-white shadow-2xl shadow-stone-300 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
        <div className="rounded-[2.25rem] bg-orange-500 p-8 lg:p-10">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-100">How it works</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Dinner plans in three simple steps.</h2>
          <p className="mt-5 text-lg leading-8 text-orange-50">
            The experience is designed to feel quick, clear, and reassuring from the first tap to the first bite.
          </p>
          <div className="mt-8 rounded-3xl bg-white/15 p-5">
            <p className="text-5xl">🚀</p>
            <p className="mt-4 text-2xl font-black">Fast checkout, fresh arrivals.</p>
          </div>
        </div>
        <div className="grid gap-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white text-lg font-black text-stone-950">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-stone-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
