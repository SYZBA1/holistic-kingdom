

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const posts = {
  "holistic-ministry": {
    category: "Community Impact",
    title: "Transforming Lives Through Holistic Ministry",
    author: "Kingdom Resource",
    date: "March 2026"
  }
};

const related = [
  {
    id: "family-restoration",
    title: "Restoring Families Through Community Care",
    desc: "How local mentorship and support networks strengthen homes.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "leadership-pathways",
    title: "Leadership Pathways for Lasting Change",
    desc: "Equipping local leaders to sustain transformation.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "economic-hope",
    title: "Economic Empowerment and Hope",
    desc: "Creating opportunity through practical livelihood programs.",
    image: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=900&q=80"
  }
];

export default function BlogPostPage() {
  const { id } = useParams();
  const post = posts[id] ?? posts["holistic-ministry"];

  return (
    <>
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2200&q=80"
            alt="Community transformation"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="mb-2 inline-block rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white">
              {post.category}
            </p>
            <h1 className="max-w-3xl font-serif text-4xl text-white md:text-6xl">{post.title}</h1>
            <p className="mt-4 text-sm text-white/85">
              Author: {post.author} • {post.date}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-7 text-kingdom-ink dark:text-kingdom-cream"
        >
          <p className="text-lg leading-relaxed">
            Many communities today face challenges that go beyond surface-level problems. True transformation requires
            a holistic approach.
          </p>

          <h2 className="font-serif text-3xl">Understanding the Need</h2>
          <p className="leading-relaxed">
            There are individuals and families living in vulnerable conditions without access to support systems.
          </p>

          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80"
            className="my-8 rounded-2xl"
            alt="Community support"
          />

          <h2 className="font-serif text-3xl">Our Holistic Approach</h2>
          <p className="leading-relaxed">We focus on:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Family and marriage development</li>
            <li>Economic empowerment</li>
            <li>Leadership training</li>
            <li>Peace and reconciliation</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80"
            className="my-8 rounded-2xl"
            alt="Leadership and transformation"
          />

          <h2 className="font-serif text-3xl">Real Impact</h2>
          <p className="leading-relaxed">
            Through our programs, we have transformed lives and restored hope in communities.
          </p>

          <h2 className="font-serif text-3xl">Conclusion</h2>
          <p className="leading-relaxed">
            Together, we can create lasting change and build a better future.
          </p>
        </motion.article>

        <motion.div
          className="mt-12 rounded-2xl border border-kingdom-green/15 bg-white/70 p-6 backdrop-blur-lg dark:border-white/10 dark:bg-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=300&q=80"
              alt="Kingdom Resource Team"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-kingdom-green dark:text-kingdom-yellow">Written by Kingdom Resource Team</p>
              <p className="text-sm text-kingdom-ink/75 dark:text-kingdom-cream/75">
                Dedicated to transforming lives through holistic care and sustainable development.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <motion.h3
          className="text-center font-serif text-4xl text-kingdom-green dark:text-kingdom-cream"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Related Articles
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {related.map((item, idx) => (
            <motion.article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-kingdom-green/15 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <p className="font-serif text-2xl text-kingdom-green dark:text-kingdom-cream">{item.title}</p>
                <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{item.desc}</p>
                <Link to={`/blog/${item.id}`} className="mt-4 inline-block text-sm font-semibold text-kingdom-green dark:text-kingdom-yellow">
                  Read article
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          className="rounded-3xl bg-gradient-to-r from-kingdom-dark to-kingdom-deep p-10 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-4xl">Be Part of the Transformation</h3>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/donate" className="gold-btn rounded-xl px-6 py-3 font-semibold">
              Donate Now
            </Link>
            <Link to="/contact" className="rounded-xl border border-white/35 px-6 py-3 font-semibold">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
