import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  const { data: products } = await supabase.from('products').select('*').limit(20);
  
  return (
    <main>
      <section className="h-screen flex items-center justify-center bg-[#0E0C09]">
        <div className="text-center">
          <h1 className="text-7xl font-serif mb-4">灯</h1>
          <h2 className="text-4xl mb-6">Artisanat japonais, direct de l'atelier</h2>
          <button className="px-8 py-3 bg-[#D46A53] text-[#161410]">Découvrir</button>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {products?.map(p => <ProductCard key={p.id} product={p} />)}
      </section>
    </main>
  );
}
