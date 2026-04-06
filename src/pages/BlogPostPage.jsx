import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "holistic-ministry",
    category: "Community Impact",
    title: "Transforming Lives Through Holistic Ministry",
    desc: "How holistic care restores dignity, strengthens families, and creates lasting community transformation.",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "leadership-pathways",
    category: "Leadership",
    title: "Raising Local Leaders for Lasting Change",
    desc: "Why leadership development is central to sustainability in vulnerable communities.",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "economic-hope",
    category: "Empowerment",
    title: "Economic Empowerment That Builds Hope",
    desc: "Practical pathways that move families from survival to stability.",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=1400&q=80"
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-kingdom-cream to-white py-20 dark:from-kingdom-dark dark:to-kingdom-deep">
        <div className="pointer-events-none absolute -left-8 top-12 h-36 w-36 rounded-full bg-kingdom-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-kingdom-lime/20 blur-3xl" />
        <motion.div
          className="relative z-10 mx-auto max-w-6xl px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex rounded-full border border-kingdom-green/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-kingdom-green dark:border-white/20 dark:bg-white/10 dark:text-kingdom-yellow">
            Kingdom Resource Blog
          </p>
          <h1 className="mt-5 font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-6xl">
            Stories, Insights, and Impact
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-kingdom-ink/80 dark:text-kingdom-cream/80">
            Explore mission-driven stories from the field and discover how holistic ministry is transforming lives.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-2xl border border-kingdom-green/15 bg-white/75 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-kingdom-green/80 dark:text-kingdom-yellow/85">
                  {post.category} • {post.date}
                </p>
                <h2 className="mt-3 font-serif text-2xl text-kingdom-green dark:text-kingdom-cream">{post.title}</h2>
                <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{post.desc}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-flex text-sm font-semibold text-kingdom-green transition hover:text-kingdom-yellow dark:text-kingdom-yellow"
                >
                  Read article
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}