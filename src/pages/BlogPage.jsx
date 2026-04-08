import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const posts = [
  {
    id: "holistic-ministry",
    category: "Community Impact",
    title: "Transforming Lives Through Holistic Ministry",
    desc: "How holistic care restores dignity, strengthens families, and creates lasting community transformation.",
    author: "Kingdom Resource",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2200&q=80",
    content: [
      "Many communities today face challenges that go beyond surface-level problems. True transformation requires a holistic approach that sees the full person and the wider community context.",
      "At Kingdom Resource, our programs focus on family support, economic empowerment, leadership development, and peacebuilding. We believe lasting change is built through practical care and local ownership.",
      "Together with partners and communities, we are restoring hope and creating pathways for sustainability."
    ],
    inlineImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "leadership-pathways",
    category: "Leadership",
    title: "Raising Local Leaders for Lasting Change",
    desc: "Why leadership development is central to sustainability in vulnerable communities.",
    author: "Kingdom Resource",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2200&q=80",
    content: [
      "Communities grow strongest when local leaders are equipped to serve with vision, integrity, and practical skills.",
      "Our leadership track supports youth mentors, family facilitators, and peace champions who can guide long-term transformation.",
      "When leadership is local and values-driven, development is more resilient and community-owned."
    ],
    inlineImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "economic-hope",
    category: "Empowerment",
    title: "Economic Empowerment That Builds Hope",
    desc: "Practical pathways that move families from survival to stability.",
    author: "Kingdom Resource",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=2200&q=80",
    content: [
      "Economic vulnerability often weakens families and limits opportunity. Our empowerment work provides skills, mentoring, and practical support.",
      "From business development to household resilience coaching, we help communities build stable futures.",
      "Sustainable livelihoods restore dignity and open doors for the next generation."
    ],
    inlineImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
  }
];

export default function BlogPage() {
  const { id } = useParams();

  if (id) {
    const post = posts.find((item) => item.id === id) ?? posts[0];
    const related = posts.filter((item) => item.id !== post.id).slice(0, 3);

    return (
      <>
        <section className="relative h-[60vh] w-full overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-14 sm:px-6 md:px-10"
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

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:px-10">
          <Link
            to="/blog"
            className="inline-flex rounded-full border border-kingdom-green/25 px-4 py-2 text-sm font-semibold text-kingdom-green transition hover:bg-kingdom-green/10 dark:border-white/20 dark:text-kingdom-yellow"
          >
            ← Back to Blog
          </Link>
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 space-y-7 text-kingdom-ink dark:text-kingdom-cream"
          >
            {post.content.map((paragraph, idx) => (
              <p key={`${post.id}-p-${idx}`} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            <img src={post.inlineImage} className="my-8 rounded-2xl" alt={`${post.title} supporting visual`} />
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

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-10">
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
                  <Link
                    to={`/blog/${item.id}`}
                    className="mt-4 inline-block text-sm font-semibold text-kingdom-green dark:text-kingdom-yellow"
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

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-kingdom-cream to-white py-20 dark:from-kingdom-dark dark:to-kingdom-deep">
        <div className="pointer-events-none absolute -left-8 top-12 h-36 w-36 rounded-full bg-kingdom-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-kingdom-lime/20 blur-3xl" />
        <motion.div
          className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 md:px-10"
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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
