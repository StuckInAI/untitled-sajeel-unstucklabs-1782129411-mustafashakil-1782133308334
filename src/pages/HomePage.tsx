import CategoryStrip from '@/components/CategoryStrip';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import OrderSteps from '@/components/OrderSteps';
import RestaurantShowcase from '@/components/RestaurantShowcase';

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-orange-50 text-stone-950">
      <Navbar />
      <Hero />
      <CategoryStrip />
      <RestaurantShowcase />
      <OrderSteps />
      <Footer />
    </main>
  );
}
