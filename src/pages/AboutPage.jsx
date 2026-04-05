import { motion } from "framer-motion";
import {
  Users,
  HandHeart,
  ShieldCheck,
  Leaf,
  Facebook,
  Instagram,
  Linkedin,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const purposeCards = [
  {
    title: "Who We Are",
    text: "We exist to see changed lives through development in family life, economic empowerment, leadership, OVC programs, peace-building, and business development.",
    tone: "from-emerald-500/25 via-kingdom-yellow/15 to-transparent"
  },
  {
    title: "The Problem We Solve",
    text: "Many individuals and communities face poverty, broken family systems, and lack of opportunity. We address these root challenges with sustainable solutions.",
    tone: "from-kingdom-yellow/25 via-orange-500/15 to-transparent"
  },
  {
    title: "Our Why",
    text: "We believe every person deserves dignity, support, and opportunity. Our purpose is to create lasting transformation through service and compassion.",
    tone: "from-sky-500/25 via-violet-500/15 to-transparent"
  }
];

const team = [
  { name: "Sarah M.", role: "Programs Director", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80" },
  { name: "Daniel K.", role: "Community Lead", img: "https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=500&q=80" },
  { name: "Mercy N.", role: "Family Services", img: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=500&q=80" },
  { name: "Brian O.", role: "Partnerships", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" }
];

const values = [
  { title: "Holistic Approach", icon: Leaf, desc: "Whole-person care that addresses root needs." },
  { title: "Collaboration", icon: Users, desc: "Partnerships that increase reach and impact." },
  { title: "Service", icon: HandHeart, desc: "Compassionate action rooted in dignity." },
  { title: "Integrity", icon: ShieldCheck, desc: "Transparent stewardship and accountability." }
];

const timeline = [
  { year: "Foundation", text: "Kingdom Resource began with a vision to support vulnerable families with dignity." },
  { year: "Growth", text: "We expanded into leadership and economic empowerment pathways." },
  { year: "Expansion", text: "New partnerships enabled broader support across communities." },
  { year: "Current Impact", text: "Today we continue scaling sustainable, people-centered transformation." }
];

const personalTouches = [
  "We show up consistently when communities need us most.",
  "We believe service is relational, not transactional.",
  "We measure success by restored dignity and lasting hope."
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-8">
        <motion.div
          className="absolute inset-0 -z-20"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80"
            alt="Community support"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        <motion.div
          className="mx-auto max-w-5xl text-center md:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
        >
          <h1 className="font-serif text-5xl md:text-7xl">To Change Lives!!</h1>
          <p className="mt-5 max-w-3xl text-white/90">
            We are committed to transforming lives by supporting individuals and communities facing vulnerable
            conditions through holistic care and sustainable development.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="mb-10 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Who We Are, What We Do, Why We Exist</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {purposeCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${card.tone} p-6 shadow-xl backdrop-blur-lg`}
            >
              <h3 className="font-serif text-2xl text-kingdom-green dark:text-kingdom-yellow">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-kingdom-ink/85 dark:text-kingdom-cream/85">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.h2 className="text-center font-serif text-4xl text-kingdom-green dark:text-kingdom-cream" initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
          Trust & Credibility
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map((member, idx) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.07 }} className="text-center">
              <img src={member.img} alt={member.name} className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-kingdom-yellow/55" />
              <p className="mt-3 text-sm font-semibold text-kingdom-green dark:text-kingdom-cream">{member.name}</p>
              <p className="text-xs text-kingdom-ink/70 dark:text-kingdom-cream/70">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-2xl border border-kingdom-green/15 bg-white/75 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 text-kingdom-yellow" size={20} />
            <p className="text-sm text-kingdom-ink/85 dark:text-kingdom-cream/85">
              This organization truly changes lives and communities.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4">
          {values.map(({ title, icon: Icon, desc }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: idx % 2 ? 25 : -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-4 rounded-2xl border border-kingdom-green/15 bg-kingdom-cream p-5 dark:border-white/10 dark:bg-kingdom-deep/80"
            >
              <div className="rounded-xl bg-kingdom-green/10 p-3 text-kingdom-green dark:bg-white/10 dark:text-kingdom-yellow">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-kingdom-green dark:text-kingdom-cream">{title}</p>
                <p className="text-sm text-kingdom-ink/75 dark:text-kingdom-cream/75">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
          <h3 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream">Our Story</h3>
          <p className="mt-4 text-kingdom-ink/85 dark:text-kingdom-cream/85">
            If you asked us why we keep showing up, the answer is simple: people matter. We have seen families move
            from crisis to stability when practical support meets compassionate leadership.
          </p>
          <div className="relative mt-8 border-l border-kingdom-green/35 pl-6 dark:border-kingdom-yellow/40">
            {timeline.map((item, idx) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="relative mb-6 rounded-xl bg-white/75 p-4 dark:bg-white/5">
                <span className="absolute -left-[1.77rem] top-5 h-3 w-3 rounded-full bg-kingdom-yellow shadow-[0_0_10px_rgba(253,203,1,0.7)]" />
                <p className="text-sm font-semibold text-kingdom-green dark:text-kingdom-yellow">{item.year}</p>
                <p className="mt-1 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1300&q=80"
          alt="Community storytelling"
          className="h-[460px] w-full rounded-3xl object-cover"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.h3 className="text-center font-serif text-4xl text-kingdom-green dark:text-kingdom-cream" initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
          Beyond the Mission
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {personalTouches.map((item, idx) => (
            <motion.div
              key={item}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2 + idx * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-white/10 bg-white/75 p-5 shadow-lg backdrop-blur-md dark:bg-white/5"
            >
              <p className="text-sm text-kingdom-ink/85 dark:text-kingdom-cream/85">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl bg-gradient-to-r from-kingdom-dark to-kingdom-deep p-10 text-center text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
        >
          <h3 className="font-serif text-4xl">Real Impact in Numbers</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl text-kingdom-yellow">10,000+</p>
              <p className="text-sm text-white/80">Lives Changed</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-kingdom-yellow">500+</p>
              <p className="text-sm text-white/80">Families Supported</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-kingdom-yellow">50+</p>
              <p className="text-sm text-white/80">Communities</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl bg-gradient-to-r from-kingdom-green to-kingdom-teal p-10 text-center text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
        >
          <h3 className="font-serif text-4xl">Be Part of the Transformation</h3>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/donate" className="gold-btn rounded-xl px-6 py-3 font-semibold animate-pulse">
              Donate Now
            </Link>
            <Link to="/impact" className="rounded-xl border border-white/35 px-6 py-3 font-semibold transition hover:scale-105">
              View Impact
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-kingdom-green/15 bg-white/75 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <p className="font-semibold text-kingdom-green dark:text-kingdom-yellow">Contact</p>
          <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">hello@kingdomresource.org</p>
          <div className="mt-4 flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
              <button key={idx} className="text-kingdom-green transition hover:scale-110 hover:text-kingdom-yellow dark:text-kingdom-cream">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
