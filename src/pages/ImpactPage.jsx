import { motion } from "framer-motion";
import AnimateInView from "../components/AnimateInView";

const stories = [
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
];

export default function ImpactPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-kingdom-dark to-kingdom-deep text-white dark-blob">
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <AnimateInView>
          <h1 className="font-serif text-5xl md:text-6xl">Impact That Restores Hope</h1>
          <p className="mt-4 text-white/80">Real stories. Real transformation. Real partnerships for long-term change.</p>
        </AnimateInView>
        <motion.img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
          alt="Impact hero"
          className="h-[380px] w-full rounded-3xl object-cover"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="glass-panel rounded-3xl bg-black/35 p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <p className="font-serif text-5xl text-kingdom-yellow">27k+</p>
              <p className="mt-1 text-sm text-white/75">Impacted</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-kingdom-yellow">25k+</p>
              <p className="mt-1 text-sm text-white/75">Partners</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-kingdom-yellow">12k+</p>
              <p className="mt-1 text-sm text-white/75">OVC Supported</p>
            </div>
          </div>
        </AnimateInView>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateInView className="mb-8 text-center">
          <h2 className="font-serif text-4xl">Success Stories</h2>
        </AnimateInView>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {stories.map((src, idx) => (
            <motion.article
              key={src}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
            >
              <img src={src} alt={`Success story ${idx + 1}`} className="h-52 w-full object-cover" />
              <div className="p-4 text-sm text-white/80">Community story #{idx + 1}: dignity restored through collaboration.</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <AnimateInView className="rounded-2xl border border-white/15 bg-black/30 p-7 text-center">
          <h3 className="font-serif text-3xl">Stay Connected</h3>
          <p className="mt-2 text-sm text-white/75">Receive stories, progress updates, and partnership opportunities.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input className="w-full rounded-xl border border-white/20 bg-kingdom-dark px-4 py-3 text-sm text-white outline-none" placeholder="Enter your email" />
            <button className="rounded-xl bg-kingdom-lime px-6 py-3 text-sm font-semibold text-kingdom-dark">Subscribe</button>
          </div>
        </AnimateInView>
      </section>
    </div>
  );
}
