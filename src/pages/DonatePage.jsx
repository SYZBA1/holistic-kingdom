import { motion } from "framer-motion";
import { LockKeyhole, BadgeCheck, HandCoins } from "lucide-react";
import AnimateInView from "../components/AnimateInView";

const amounts = [
  { label: "$10", text: "Support a child" },
  { label: "$50", text: "Family assistance" },
  { label: "$100", text: "Community program" },
  { label: "Custom", text: "Custom Amount" }
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-kingdom-cream via-white to-kingdom-cream px-4 py-16 dark:from-kingdom-dark dark:via-kingdom-deep dark:to-kingdom-dark sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateInView>
            <h1 className="font-serif text-5xl text-kingdom-green dark:text-kingdom-cream md:text-6xl">Your Generosity Changes Lives</h1>
            <p className="mx-auto mt-4 max-w-2xl text-kingdom-ink/80 dark:text-kingdom-cream/80">
              Every contribution helps build stronger families, resilient communities, and a more hopeful future.
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {amounts.map((item, idx) => (
            <motion.button
              key={item.label}
              className="rounded-2xl border border-kingdom-yellow/35 bg-white p-6 text-left shadow-sm transition hover:shadow-glow dark:bg-kingdom-deep/85"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-serif text-4xl text-kingdom-green dark:text-kingdom-yellow">{item.label}</p>
              <p className="mt-2 text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{item.text}</p>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-20">
        <AnimateInView className="rounded-3xl border border-kingdom-green/15 bg-white p-7 shadow-sm dark:bg-kingdom-deep/80">
          <h2 className="font-serif text-3xl text-kingdom-green dark:text-kingdom-cream">Donation Form</h2>
          <p className="mt-3 text-sm text-kingdom-ink/75 dark:text-kingdom-cream/75">
            Your giving helps provide food and care, education support, family restoration, and community development.
          </p>
          <form className="mt-5 space-y-4">
            <input placeholder="Name" className="w-full rounded-xl border border-kingdom-green/20 px-4 py-3 text-sm outline-none dark:bg-kingdom-dark dark:text-kingdom-cream" />
            <input placeholder="Email" className="w-full rounded-xl border border-kingdom-green/20 px-4 py-3 text-sm outline-none dark:bg-kingdom-dark dark:text-kingdom-cream" />
            <input placeholder="Amount" className="w-full rounded-xl border border-kingdom-green/20 px-4 py-3 text-sm outline-none dark:bg-kingdom-dark dark:text-kingdom-cream" />
            <select className="w-full rounded-xl border border-kingdom-green/20 px-4 py-3 text-sm outline-none dark:bg-kingdom-dark dark:text-kingdom-cream">
              <option>Payment Method</option>
              <option>Card</option>
              <option>Bank Transfer</option>
              <option>Mobile Money</option>
            </select>
            <button type="button" className="gold-btn w-full rounded-xl px-6 py-3 font-semibold">
              Donate Now
            </button>
          </form>
        </AnimateInView>

        <AnimateInView className="rounded-3xl bg-gradient-to-br from-kingdom-dark to-kingdom-deep p-7 text-white">
          <h3 className="font-serif text-3xl">Secure & Transparent Giving</h3>
          <p className="mt-3 text-sm text-white/80">
            We are committed to transparency and accountability in every contribution.
          </p>
          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3 text-sm text-white/85"><LockKeyhole size={16} className="text-kingdom-yellow" /> Encrypted payment handling</p>
            <p className="flex items-center gap-3 text-sm text-white/85"><BadgeCheck size={16} className="text-kingdom-yellow" /> Audited use of donated resources</p>
            <p className="flex items-center gap-3 text-sm text-white/85"><HandCoins size={16} className="text-kingdom-yellow" /> Direct support to priority programs</p>
          </div>
          <img src="/kingdom-logo.png" alt="Kingdom logo" className="mt-8 h-24 w-24 rounded-full object-cover ring-2 ring-kingdom-yellow/60" />
        </AnimateInView>
      </section>
    </>
  );
}
