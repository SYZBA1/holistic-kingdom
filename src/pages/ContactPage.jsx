import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactCards = [
  {
    title: "Email",
    value: "contact@kingdomresource.org",
    href: "mailto:contact@kingdomresource.org",
    icon: Mail
  },
  {
    title: "Phone",
    value: "+251 XXX XXX XXX",
    href: "tel:+251000000000",
    icon: Phone
  },
  {
    title: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "#map",
    icon: MapPin
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-kingdom-cream via-white to-kingdom-cream px-4 py-16 dark:from-kingdom-dark dark:via-kingdom-deep dark:to-kingdom-dark sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl text-kingdom-green dark:text-kingdom-cream">Get in Touch</h1>
              <p className="mt-4 max-w-xl text-kingdom-ink/80 dark:text-kingdom-cream/80">
                Have questions or want to be part of transforming lives? Reach out and connect with us.
              </p>

              <div className="mt-8 space-y-4">
                {contactCards.map(({ title, value, href, icon: Icon }, idx) => (
                  <motion.a
                    key={title}
                    href={href}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="block rounded-2xl border border-white/10 bg-white/70 p-5 backdrop-blur-lg transition hover:scale-105 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-kingdom-green/10 p-2 text-kingdom-green dark:bg-white/10 dark:text-kingdom-yellow">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-kingdom-green dark:text-kingdom-cream">{title}</p>
                        <p className="text-sm text-kingdom-ink/80 dark:text-kingdom-cream/80">{value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <p className="mt-6 text-sm text-kingdom-ink/75 dark:text-kingdom-cream/75">
                Need quick help? Chat with our assistant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/70 p-6 backdrop-blur-lg dark:bg-white/5"
            >
              <h2 className="font-serif text-3xl text-kingdom-green dark:text-kingdom-cream">Send a Message</h2>
              <form className="mt-5 space-y-4">
                <input
                  placeholder="Name"
                  className="w-full rounded-xl border border-kingdom-green/20 bg-white/85 px-4 py-3 text-sm outline-none dark:border-white/20 dark:bg-kingdom-dark dark:text-kingdom-cream"
                />
                <input
                  placeholder="Email"
                  className="w-full rounded-xl border border-kingdom-green/20 bg-white/85 px-4 py-3 text-sm outline-none dark:border-white/20 dark:bg-kingdom-dark dark:text-kingdom-cream"
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-xl border border-kingdom-green/20 bg-white/85 px-4 py-3 text-sm outline-none dark:border-white/20 dark:bg-kingdom-dark dark:text-kingdom-cream"
                />
                <button className="rounded-xl bg-kingdom-yellow px-6 py-3 font-semibold text-black">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="map" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/70 shadow-xl backdrop-blur-lg dark:bg-white/5"
        >
          <div className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-kingdom-green dark:text-kingdom-yellow">
            <MapPin size={16} /> Visit Us in Addis Ababa
          </div>
          <iframe
            src="https://www.google.com/maps?q=Addis+Ababa,Ethiopia&output=embed"
            className="h-[400px] w-full border-0"
            loading="lazy"
            title="Kingdom Resource location map"
          />
        </motion.div>
      </section>
    </>
  );
}
