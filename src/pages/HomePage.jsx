import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Baby,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Cross,
  GraduationCap,
  HandCoins,
  HandHeart,
  HeartHandshake,
  Play,
  Quote,
  Scale,
  Search,
  Smile,
  Sprout,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimateInView from "../components/AnimateInView";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2200&q=80",
    alt: "Families receiving support in Ethiopia"
  },
  {
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2200&q=80",
    alt: "Women and children in an Ethiopian community"
  },
  {
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=2200&q=80",
    alt: "Local leadership and community empowerment in Ethiopia"
  }
];

const ministry = [
  { title: "Spiritual Growth", icon: Cross, desc: "Strengthening faith and hope in families and communities." },
  { title: "Emotional Support", icon: HeartHandshake, desc: "Healing and counseling for restored dignity." },
  { title: "Social Development", icon: Smile, desc: "Building stronger relationships and connected communities." },
  { title: "Economic Empowerment", icon: HandCoins, desc: "Skills and livelihood pathways for sustainability." }
];

const corePrograms = [
  { title: "Marriage & Family Life", icon: HeartHandshake },
  { title: "Economic Empowerment", icon: BriefcaseBusiness },
  { title: "Leadership Development", icon: GraduationCap },
  { title: "OVC Program", icon: Baby },
  { title: "Peace & Reconciliation", icon: Scale },
  { title: "Business Development", icon: Users }
];

const workSteps = [
  { title: "Identify Needs", detail: "We listen first and map real needs in each local context.", icon: Search },
  { title: "Empower People", detail: "We equip families and leaders with practical support and tools.", icon: HandHeart },
  { title: "Build Sustainability", detail: "We strengthen local capacity for long-term transformation.", icon: Sprout }
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
      "We transform lives through holistic development including family support, economic empowerment, leadership training, OVC care, and peace-building."
  },
  {
    question: "Who do you support?",
    answer: "We support families, individuals, and vulnerable communities in Ethiopia with sustainable programs."
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
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="mission" className="relative flex min-h-[88vh] w-full items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[heroIndex].image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25, scale: 1.05 }}
            transition={{ duration: 1 }}
          >
            <img src={heroSlides[heroIndex].image} alt={heroSlides[heroIndex].alt} className="h-full w-full object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent dark:from-black/80 dark:via-black/55 dark:to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10">
          <motion.div
            key={`hero-copy-${heroIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl text-center md:text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kingdom-yellow">To change lives !!</p>
            <h1 className="mt-4 font-serif text-4xl text-white md:text-6xl">
              Transforming Families and Communities Through Holistic Care
            </h1>
            <p className="mt-5 text-lg text-white/90">
              We exist to bring lasting change to families and vulnerable communities through empowerment, leadership,
              and sustainable development.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/donate"
                className="rounded-full bg-kingdom-yellow px-6 py-3 font-semibold text-black transition hover:shadow-[0_0_24px_rgba(253,203,1,0.45)]"
              >
                Donate Now
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-kingdom-dark"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              onClick={() => setHeroIndex(idx)}
              className={`h-2.5 rounded-full transition ${idx === heroIndex ? "w-8 bg-kingdom-yellow" : "w-2.5 bg-white/65"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-20 right-4 z-20 flex items-center gap-2 sm:right-8">
          <button
            onClick={() => setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="rounded-full bg-white/20 p-3 text-white backdrop-blur-lg transition hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setHeroIndex((prev) => (prev + 1) % heroSlides.length)}
            className="rounded-full bg-white/20 p-3 text-white backdrop-blur-lg transition hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
          <button
            className="rounded-full bg-white/20 p-3 text-white backdrop-blur-lg transition hover:scale-105"
            aria-label="Play impact video"
          >
            <Play size={18} />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 lg:py-24">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Our Holistic Ministry Approach</h2>
          <p className="mx-auto mt-4 max-w-3xl text-kingdom-ink/80 dark:text-kingdom-cream/80">
            We believe true transformation happens when the whole person is supported.
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
              whileHover={{ scale: 1.04 }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-kingdom-green/10 p-3 text-kingdom-green dark:bg-white/10 dark:text-kingdom-yellow">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-2xl text-kingdom-green dark:text-kingdom-yellow">{title}</h3>
              <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-10 lg:py-10">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Our Core Programs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-kingdom-ink/75 dark:text-kingdom-cream/75">
            Transforming lives through focused and impactful initiatives.
          </p>
        </AnimateInView>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {corePrograms.map((program, index) => {
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
              <motion.article
                key={program.title}
                className={`group relative flex h-full min-h-52 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br ${gradientSet[index % gradientSet.length]} p-7 shadow-xl backdrop-blur-lg`}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                whileHover={{ scale: 1.03, rotateY: 8 }}
              >
                <div className="inline-flex w-fit rounded-xl border border-white/10 bg-white/10 p-3 text-kingdom-yellow">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-serif text-xl text-kingdom-green dark:text-kingdom-cream">{program.title}</p>
                  <p className="mt-2 text-sm leading-relaxed line-clamp-3 text-kingdom-ink/75 dark:text-kingdom-cream/75">
                    Community-centered intervention with measurable and sustainable outcomes.
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-10 lg:py-14">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">How We Create Lasting Change</h2>
        </AnimateInView>
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-10 lg:py-14">
        <AnimateInView className="text-center">
          <h2 className="font-serif text-4xl text-kingdom-green dark:text-kingdom-cream md:text-5xl">Stories of Transformation</h2>
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-10 lg:py-14">
        <AnimateInView className="rounded-3xl bg-gradient-to-r from-kingdom-dark to-kingdom-deep p-10 text-center text-white">
          <h3 className="font-serif text-4xl">Real Impact in Numbers</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl text-kingdom-yellow">10,000+</p>
              <p className="text-sm text-white/80">Lives Changed</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-kingdom-lime">500+</p>
              <p className="text-sm text-white/80">Families Supported</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-kingdom-yellow">50+</p>
              <p className="text-sm text-white/80">Communities Served</p>
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-10 lg:py-14">
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

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:px-10 lg:py-14">
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
    </>
  );
}
