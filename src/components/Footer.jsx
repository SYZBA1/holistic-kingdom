import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-kingdom-dark text-kingdom-cream dark:bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/kingdom-logo.png" alt="Kingdom logo" className="h-10 w-10 rounded-full object-cover" />
            <p className="font-serif text-xl">Kingdom Resource</p>
          </div>
          <p className="mt-3 text-sm text-kingdom-cream/75">
            Transforming lives through holistic care and sustainable development.
          </p>
          <div className="mt-4 flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <button key={idx} className="text-kingdom-cream/80 transition hover:scale-125 hover:text-kingdom-yellow">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-kingdom-yellow">Explore</p>
          <div className="mt-3 space-y-2 text-sm text-kingdom-cream/80">
            <Link className="block" to="/">Home</Link>
            <Link className="block" to="/about">About</Link>
            <Link className="block" to="/impact">Impact</Link>
            <Link className="block" to="/donate">Donate</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-kingdom-yellow">Resources</p>
          <p className="mt-3 text-sm text-kingdom-cream/80">Programs</p>
          <p className="text-sm text-kingdom-cream/80">Partnerships</p>
          <p className="text-sm text-kingdom-cream/80">Volunteer Support</p>
          <p className="text-sm text-kingdom-cream/80">Transparency Reports</p>
        </div>
        <div>
          <p className="font-semibold text-kingdom-yellow">Contact</p>
          <p className="mt-3 text-sm text-kingdom-cream/80">hello@kingdomresource.org</p>
          <p className="text-sm text-kingdom-cream/80">+251 9XX XXX XXX</p>
          <p className="mt-2 text-sm text-kingdom-cream/80">Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
