import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeartHandshake,
  BriefcaseBusiness,
  GraduationCap,
  Baby,
  Scale,
  Users,
  Cross,
  HandHeart,
  Smile,
  BadgeDollarSign,
  Search,
  Sprout,
  HandCoins,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimateInView from "../components/AnimateInView";

const gallery = [
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"
];

const ministry = [
  { title: "Spiritual Growth", icon: Cross, desc: "Strengthening faith, dignity, and hope." },
  { title: "Emotional Support", icon: HeartHandshake, desc: "Healing through counseling and care." },
  { title: "Social Development", icon: Smile, desc: "Building belonging and healthy relationships." },
  { title: "Economic Empowerment", icon: BadgeDollarSign, desc: "Skills and sustainability for families." }
];

const programs = [
  { title: "Marriage & Family Life", icon: HeartHandshake, amount: 5533190 },
  { title: "Economic Empowerment", icon: BriefcaseBusiness, amount: 8609100 },
  { title: "Leadership Development", icon: GraduationCap, amount: 4824550 },
  { title: "OVC Program", icon: Baby, amount: 7250910 },
  { title: "Peace & Reconciliation", icon: Scale, amount: 3910870 },
  { title: "Business Development", icon: Users, amount: 6405420 }
];

const valueCards = [
  {
    title: "Holistic Approach",
    text: "Supporting the whole person spiritually, emotionally, socially, and economically.",
    icon: Cross,
    gradient: "from-emerald-500/25 via-kingdom-yellow/15 to-transparent",
    edge: "after:from-emerald-400/70 after:to-kingdom-yellow/70"
  },
  {
    title: "Collaboration",
    text: "Working with partners to amplify impact and reach more communities.",
    icon: Users,
    gradient: "from-orange-500/25 via-red-500/15 to-transparent",
    edge: "after:from-orange-400/70 after:to-red-400/70"
  },
  {
    title: "Service",
    text: "Serving with humility, compassion, and a heart for transformation.",
    icon: HandHeart,
    gradient: "from-sky-500/25 via-violet-500/15 to-transparent",
    edge: "after:from-sky-400/70 after:to-violet-400/70"
  },
  {
    title: "Integrity",
    text: "Operating with transparency, accountability, and trust.",
    icon: HeartHandshake,
    gradient: "from-lime-500/25 via-teal-500/15 to-transparent",
    edge: "after:from-lime-400/70 after:to-teal-400/70"
  }
];

const workSteps = [
  { title: "Identify Needs", detail: "We listen first, assess context, and map real community priorities.", icon: Search },
  { title: "Empower People", detail: "We equip families and leaders with support, tools, and coaching.", icon: HandCoins },
  { title: "Build Sustainability", detail: "We strengthen systems so impact lasts beyond one intervention.", icon: Sprout }
];

const testimonials = [
  {
    name: "Grace W.",
    role: "Community Leader",
    text: "Kingdom Resource helped our families move from short-term relief to long-term hope.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Daniel M.",
    role: "Youth Mentor",
    text: "The leadership and family programs restored confidence and opened new opportunities.",
    image: "https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Amina N.",
    role: "Program Beneficiary",
    text: "I experienced practical support, emotional healing, and skills that changed my future.",
    image: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=500&q=80"
  }
];

const partnerLogos = [
  "https://logo.clearbit.com/unicef.org",
  "https://logo.clearbit.com/worldvision.org",
  "https://logo.clearbit.com/care.org",
  "https://logo.clearbit.com/savethechildren.org",
  "https://logo.clearbit.com/mercycorps.org"
];

const faqs = [
  {
    question: "What does Kingdom Resource do?",
    answer:
      "We transform lives through holistic development including family support, economic empowerment, and leadership training."
  },
  {
    question: "Who do you support?",
    answer: "Individuals, families, and vulnerable communities in need of sustainable support."
  },
  {
    question: "How can I contribute?",
    answer: "You can donate, partner with us, or volunteer to support our mission."
  },
  {
    question: "How is my donation used?",
    answer: "Donations are used transparently to fund programs that directly impact lives and communities."
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section id="mission" className="relative h-screen w-full overflow-hidden flex items-center">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=80"
            alt="Community transformation"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-transparent dark:from-black/70 dark:via-black/45 dark:to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center md:text-left"
          >
            <h1 className="font-serif text-4xl text-white md:text-6xl">Transforming Lives Through Holistic Care</h1>
            <p className="mt-5 text-lg text-white/90">
              We exist to bring lasting change to individuals and communities through compassion, empowerment, and
              sustainable development.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              There are many people living in vulnerable conditions who deserve dignity and opportunity. Kingdom
              Resource is committed to creating meaningful transformation through service and leadership.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link to="/donate" className="rounded-full bg-kingdom-yellow px-6 py-3 font-semibold text-black transition hover:shadow-[0_0_24px_rgba(253,203,1,0.45)]">
                Donate Now
              </Link>
              <Link to="/about" className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-kingdom-dark">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute left-10 top-24 h-40 w-40 rounded-full bg-kingdom-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

        <button className="absolute bottom-20 right-10 rounded-full bg-white/20 p-4 text-white backdrop-blur-lg transition hover:scale-110">
          ▶
        </button>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/80">
          <div className="mx-auto h-10 w-6 rounded-full border border-white/60 p-1">
            <motion.div
              className="h-2 w-2 rounded-full bg-white"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto mt-8 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {gallery.map((src, idx) => (
            <motion.div
              key={src}
              className="relative"
              style={{ rotate: idx % 2 === 0 ? -4 : 4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <img src={src} alt={`Kingdom impact ${idx + 1}`} className="h-40 w-full rounded-2xl object-cover sm:h-56" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-kingdom-dark/35 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">
            Our Holistic Ministry Approach
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-kingdom-ink/80 dark:text-kingdom-cream/80">
            We believe true transformation happens when the whole person is supported, not just one need.
          </p>
        </AnimateInView>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ministry.map(({ title, icon: Icon, desc }, idx) => (
            <motion.article
              key={title}
              className="rounded-3xl bg-white p-6 shadow-md dark:bg-kingdom-deep/85 dark:text-kingdom-cream"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}
                className="mb-4 inline-flex rounded-xl bg-kingdom-green/10 p-3 text-kingdom-green dark:bg-white/10 dark:text-kingdom-yellow"
              >
                <Icon size={22} />
              </motion.div>
              <h3 className="font-serif text-2xl text-kingdom-green dark:text-kingdom-yellow">{title}</h3>
              <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Our Core Programs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-kingdom-ink/75 dark:text-kingdom-cream/75">
            Transforming lives through focused and impactful initiatives.
          </p>
        </AnimateInView>
        <div className="relative mt-8 min-h-[500px] w-full [perspective:1000px]">
          <div className="pointer-events-none absolute -left-6 top-20 h-40 w-40 rounded-full bg-kingdom-lime/20 blur-3xl opacity-20" />
          <div className="pointer-events-none absolute -right-8 bottom-16 h-44 w-44 rounded-full bg-kingdom-yellow/20 blur-3xl opacity-20" />
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const gradientSet = [
                "from-emerald-500/25 via-kingdom-yellow/10 to-transparent",
                "from-orange-500/25 via-red-500/10 to-transparent",
                "from-sky-500/25 via-violet-500/10 to-transparent",
                "from-lime-500/25 via-teal-500/10 to-transparent",
                "from-kingdom-green/25 via-kingdom-lime/10 to-transparent",
                "from-kingdom-yellow/20 via-emerald-500/10 to-transparent"
              ];
              return (
                <motion.div
                  key={program.title}
                  className={`group relative flex h-44 w-72 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br ${gradientSet[index % gradientSet.length]} p-6 shadow-xl backdrop-blur-lg [transform-style:preserve-3d]`}
                  initial={{ rotateY: 90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  animate={{ rotateY: [0, 10, -10, 0] }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_0_rgba(74,222,128,0)] transition-all duration-300 group-hover:shadow-[0_0_26px_rgba(74,222,128,0.35)]" />
                  <div className="inline-flex w-fit rounded-xl border border-white/10 bg-white/10 p-3 text-kingdom-yellow">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-kingdom-green dark:text-kingdom-cream">{program.title}</p>
                    <p className="mt-1 text-sm text-kingdom-ink/75 dark:text-kingdom-cream/75">
                      Focused intervention with measurable impact.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-10 top-16 h-32 w-32 rounded-full bg-kingdom-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-kingdom-lime/20 blur-3xl" />
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Core Values</h2>
          <p className="mx-auto mt-3 max-w-2xl text-kingdom-ink/80 dark:text-kingdom-cream/80">
            Built to match our identity: warm gold hope, deep green trust, and modern humanitarian clarity.
          </p>
        </AnimateInView>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {valueCards.map(({ title, text, icon: Icon, gradient, edge }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? -1 : 1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} p-6 backdrop-blur-lg shadow-xl dark:bg-white/5`}
            >
              <div className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r ${edge} after:absolute`} />
              <div className="absolute right-5 top-4 h-14 w-14 rounded-full bg-white/10 blur-2xl" />
              <div className="mb-4 inline-flex rounded-xl border border-white/15 bg-white/10 p-3 text-kingdom-yellow">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-2xl text-kingdom-green dark:text-kingdom-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-kingdom-ink/80 dark:text-kingdom-cream/80">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">
            How We Create Lasting Change
          </h2>
        </AnimateInView>
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
        >
          {workSteps.map(({ title, detail, icon: Icon }) => (
            <motion.article
              key={title}
              variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
              className="rounded-2xl border border-kingdom-green/15 bg-white p-6 dark:border-white/10 dark:bg-kingdom-deep/80"
            >
              <div className="mb-4 inline-flex rounded-xl bg-kingdom-green/10 p-3 text-kingdom-green dark:bg-white/10 dark:text-kingdom-yellow">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-2xl text-kingdom-green dark:text-kingdom-cream">{title}</h3>
              <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">
            Stories of Transformation
          </h2>
        </AnimateInView>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.09 }}
              className="rounded-xl border border-white/15 bg-white/70 p-5 backdrop-blur-lg dark:bg-white/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-kingdom-green dark:text-kingdom-cream">{item.name}</p>
                  <p className="text-xs text-kingdom-ink/65 dark:text-kingdom-cream/70">{item.role}</p>
                </div>
              </div>
              <Quote className="text-kingdom-yellow" size={18} />
              <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <AnimateInView className="rounded-3xl bg-gradient-to-r from-kingdom-dark to-kingdom-deep p-10 text-center text-white">
          <h3 className="font-serif text-4xl">Real Impact in Numbers</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl text-kingdom-yellow drop-shadow-[0_0_10px_rgba(253,203,1,0.45)]">10,000+</p>
              <p className="text-sm text-white/80">Lives Changed</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-kingdom-lime drop-shadow-[0_0_10px_rgba(74,222,128,0.45)]">500+</p>
              <p className="text-sm text-white/80">Families Supported</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-kingdom-yellow drop-shadow-[0_0_10px_rgba(253,203,1,0.45)]">50+</p>
              <p className="text-sm text-white/80">Communities</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/impact" className="rounded-xl border border-white/35 px-6 py-3 font-semibold text-white">
              View Impact
            </Link>
            <Link to="/donate" className="gold-btn rounded-xl px-6 py-3 font-semibold">
              Donate
            </Link>
          </div>
        </AnimateInView>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Our Partners</h2>
        </AnimateInView>
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-kingdom-green/15 bg-white/65 py-6 dark:border-white/10 dark:bg-kingdom-deep/70">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-kingdom-deep" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-kingdom-deep" />
          <div className="flex w-max gap-12 whitespace-nowrap animate-scroll">
            {partnerLogos.concat(partnerLogos).map((logo, idx) => (
              <img
                src={logo}
                key={`${logo}-${idx}`}
                className="h-12 rounded-md object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
                alt="Partner logo"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Frequently Asked Questions</h2>
        </AnimateInView>
        <div className="mt-8 rounded-2xl border border-kingdom-green/15 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-kingdom-deep/75">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="border-b border-kingdom-green/10 py-4 last:border-b-0 dark:border-white/10">
              <button
                onClick={() => setOpenFaq((prev) => (prev === idx ? -1 : idx))}
                className="w-full text-left text-base font-semibold text-kingdom-green dark:text-kingdom-cream"
              >
                {faq.question}
              </button>
              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.p
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 overflow-hidden text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <AnimateInView className="rounded-2xl border border-white/15 bg-white/70 p-8 text-center backdrop-blur-lg dark:bg-white/5">
          <h3 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream">Stay Connected</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-kingdom-ink/75 dark:text-kingdom-cream/75">
            Receive impact stories, ministry updates, and new partnership opportunities.
          </p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-kingdom-green/20 bg-white/85 px-4 py-3 text-sm outline-none dark:border-white/20 dark:bg-kingdom-dark dark:text-kingdom-cream"
            />
            <button className="gold-btn rounded-xl px-6 py-3 font-semibold shadow-glow">Subscribe</button>
          </div>
        </AnimateInView>
      </section>
    </>
  );
}
