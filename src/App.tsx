import { useState, useEffect } from "react"

const NAV_LINKS = [
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

const PORTFOLIO = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1612928414075-bc722ade44f1?w=800&h=1000&fit=crop&auto=format",
    alt: "Grayscale fashion portrait of woman in leather jacket",
    category: "Fashion",
    tall: true,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?w=800&h=600&fit=crop&auto=format",
    alt: "Woman in black blazer with grey scarf — editorial portrait",
    category: "Editorial",
    tall: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1629511565591-a1d494ad6c58?w=800&h=600&fit=crop&auto=format",
    alt: "Woman in black blazer seated — lifestyle portrait",
    category: "Lifestyle",
    tall: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1618754580230-dc55ba127aa2?w=800&h=1100&fit=crop&auto=format",
    alt: "Grayscale fashion portrait in checked shirt",
    category: "Fashion",
    tall: true,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1727341557146-4abab94d0812?w=800&h=700&fit=crop&auto=format",
    alt: "Woman in black coat — fashion editorial",
    category: "Editorial",
    tall: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1710188091078-e1d92210b9fc?w=800&h=700&fit=crop&auto=format",
    alt: "Woman with hair blowing in the wind — artistic portrait",
    category: "Lifestyle",
    tall: false,
  },
]

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start with a free 30-minute call to discuss your vision, goals, and the story you want to tell. I listen first, advise second.",
  },
  {
    number: "02",
    title: "Creative Brief & Agreement",
    description:
      "I send a clear project proposal — scope, timeline, deliverables, and pricing — before any work begins. No surprises.",
  },
  {
    number: "03",
    title: "The Shoot",
    description:
      "On shoot day I handle direction, lighting, and creative guidance so you can focus on feeling your best in front of the lens.",
  },
  {
    number: "04",
    title: "Editing & Delivery",
    description:
      "Fully edited images are delivered via private online gallery within the agreed timeframe — typically 7–14 business days.",
  },
  {
    number: "05",
    title: "Revisions & Final Files",
    description:
      "Your package includes one round of revision requests. Final high-resolution files are yours with a personal use license.",
  },
]

const SERVICES = [
  {
    name: "Lifestyle Session",
    duration: "2 hrs",
    images: "20 edited images",
    price: "$350",
    note: "Perfect for personal branding and social content.",
  },
  {
    name: "Fashion Editorial",
    duration: "4 hrs",
    images: "40 edited images",
    price: "$650",
    note: "Full look-book or brand campaign, studio or location.",
  },
  {
    name: "Half-Day Shoot",
    duration: "6 hrs",
    images: "60 edited images",
    price: "$950",
    note: "Multiple outfits, locations, and full art direction.",
  },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          style={{ fontFamily: "var(--font-display)" }}
          className="text-lg tracking-wide text-black"
        >
          Vincent Russel
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-black/60 hover:text-black transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm tracking-widest uppercase border border-black px-4 py-2 text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-black transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-black transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-black transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-black/60 hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase border border-black px-4 py-2 text-center text-black hover:bg-black hover:text-white transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-20 overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1662532577856-e8ee8b138a8b?w=1600&h=1000&fit=crop&auto=format"
        alt="Fashion editorial portrait — Vincent Russel Photography"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4">
          Amarillo, Texas
        </p>
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-white text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-6"
        >
          Vincent
          <br />
          <span className="italic">Russel</span>
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-sm tracking-wide leading-relaxed">
          Lifestyle &amp; Fashion Photography — capturing the moments that define you.
        </p>
        <div className="flex items-center gap-6 mt-10">
          <a
            href="#portfolio"
            className="text-sm tracking-widest uppercase text-white border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200"
          >
            Book a Session →
          </a>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Fashion", "Lifestyle", "Editorial"]
  const visible =
    filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Selected Work</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl text-black"
            >
              Portfolio
            </h2>
          </div>
          <div className="flex gap-4 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs tracking-widest uppercase transition-colors duration-150 pb-0.5 ${
                  filter === c
                    ? "text-black border-b border-black"
                    : "text-black/40 hover:text-black"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {visible.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid overflow-hidden bg-gray-100 group relative"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs tracking-widest uppercase">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">About</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl mb-8 leading-tight"
          >
            Telling stories through{" "}
            <span className="italic">light and frame</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-5 text-sm">
            Based in Amarillo, Texas, I specialize in lifestyle and fashion photography that feels
            genuine — never forced. My work is rooted in the belief that the best images come from
            real connection, careful preparation, and a shared creative vision.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Whether it is a brand campaign, a personal look-book, or a portrait session that captures
            who you are right now, I bring the same level of care and intentionality to every shoot.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1718563072717-db22ef0c9434?w=700&h=900&fit=crop&auto=format"
            alt="Fashion portrait — Vincent Russel Photography"
            className="w-full object-cover bg-zinc-800"
          />
          <div className="absolute -bottom-4 -left-4 border border-white/20 w-full h-full pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">How It Works</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl text-black"
          >
            My Promise to Every Client
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-0 border-t border-black/10">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`py-10 pr-6 ${i !== 0 ? "md:pl-6 md:border-l border-black/10" : ""} border-b md:border-b-0 border-black/10`}
            >
              <span className="text-xs tracking-[0.3em] text-black/30 uppercase mb-4 block">
                {step.number}
              </span>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-lg mb-3 text-black"
              >
                {step.title}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-black/10 p-8 bg-black/[0.02]">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2">My Commitment</p>
          <p className="text-sm text-black/70 leading-relaxed max-w-2xl">
            I guarantee delivery of all final edited images within the timeframe specified in your
            project agreement. If circumstances beyond my control cause a delay, I will notify you
            immediately and provide a revised timeline. Your satisfaction — and your deadline — matter.
          </p>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Packages</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl text-black"
          >
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-black/10">
          {SERVICES.map((s) => (
            <div key={s.name} className="bg-white p-10 flex flex-col gap-4">
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl text-black"
              >
                {s.name}
              </h3>
              <div className="flex gap-6 text-xs tracking-widest uppercase text-black/40">
                <span>{s.duration}</span>
                <span>{s.images}</span>
              </div>
              <p className="text-sm text-black/50 leading-relaxed flex-1">{s.note}</p>
              <div className="flex items-center justify-between pt-4 border-t border-black/10">
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-3xl text-black"
                >
                  {s.price}
                </span>
                <a
                  href="#contact"
                  className="text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
                >
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-black/40 mt-6 leading-relaxed">
          All packages require a 50% non-refundable deposit to secure your booking date. The remaining balance is due on shoot day. Custom packages available upon request.
          Payment is processed securely. By booking you agree to the{" "}
          <a href="#terms" className="underline hover:text-black transition-colors">
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a href="#terms" className="underline hover:text-black transition-colors">
            Cancellation Policy
          </a>
          .
        </p>
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
    agree: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    setForm((f) => ({
      ...f,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    "w-full border-b border-black/20 bg-transparent py-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors duration-150"

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Message Received</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl mb-4"
          >
            Thank you, {form.name.split(" ")[0]}.
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            I will review your inquiry and get back to you within 24 hours. Looking forward to working together.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Get in Touch</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl mb-6 leading-tight"
          >
            Let"s create something{" "}
            <span className="italic">memorable</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-sm">
            Fill out the form and I will personally review your request and respond within 24 hours.
            No automated replies — every message is read by me.
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/50">
            <span>📍 Amarillo, Texas — available statewide</span>
            <span>✉️ hello@vincentrussel.com</span>
            <span>📞 (806) 555-0192</span>
          </div>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-widest uppercase text-white/30 block mb-2">Full Name *</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handle}
                placeholder="Jane Smith"
                className={inputClass + " text-white placeholder:text-white/20 border-white/20 focus:border-white"}
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-white/30 block mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handle}
                placeholder="jane@example.com"
                className={inputClass + " text-white placeholder:text-white/20 border-white/20 focus:border-white"}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-widest uppercase text-white/30 block mb-2">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handle}
                placeholder="(806) 555-0100"
                className={inputClass + " text-white placeholder:text-white/20 border-white/20 focus:border-white"}
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-white/30 block mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handle}
                className={inputClass + " text-white border-white/20 focus:border-white"}
                style={{ colorScheme: "dark" }}
              />
            </div>
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-white/30 block mb-2">Service *</label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handle}
              className={inputClass + " text-white border-white/20 focus:border-white appearance-none cursor-pointer"}
              style={{ background: "transparent" }}
            >
              <option value="" disabled style={{ background: "#0a0a0a" }}>Select a package…</option>
              <option value="lifestyle" style={{ background: "#0a0a0a" }}>Lifestyle Session — $350</option>
              <option value="fashion" style={{ background: "#0a0a0a" }}>Fashion Editorial — $650</option>
              <option value="halfday" style={{ background: "#0a0a0a" }}>Half-Day Shoot — $950</option>
              <option value="custom" style={{ background: "#0a0a0a" }}>Custom Package</option>
            </select>
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-white/30 block mb-2">Tell me about your vision</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handle}
              placeholder="Describe what you have in mind — mood, location, references..."
              className={inputClass + " resize-none text-white placeholder:text-white/20 border-white/20 focus:border-white"}
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="agree"
              required
              checked={form.agree}
              onChange={handle}
              className="mt-0.5 accent-white"
            />
            <span className="text-xs text-white/40 leading-relaxed">
              I have read and agree to the{" "}
              <a href="#terms" className="underline text-white/60 hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
              ,{" "}
              <a href="#terms" className="underline text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              , and{" "}
              <a href="#terms" className="underline text-white/60 hover:text-white transition-colors">
                Cancellation Policy
              </a>
              . I understand a 50% deposit is required to confirm my booking.
            </span>
          </label>

          <button
            type="submit"
            className="w-full border border-white text-white text-sm tracking-widest uppercase py-4 hover:bg-white hover:text-black transition-colors duration-200 mt-2"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

function Terms() {
  const [open, setOpen] = useState(false)

  return (
    <section id="terms" className="bg-white border-t border-black/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-left group"
        >
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl text-black"
          >
            Terms, Policies &amp; Client Agreement
          </span>
          <span className="text-2xl text-black/40 group-hover:text-black transition-colors">
            {open ? "−" : "+"}
          </span>
        </button>

        {open && (
          <div className="mt-10 grid md:grid-cols-3 gap-10 text-sm text-black/60 leading-relaxed border-t border-black/10 pt-10">
            <div>
              <h4 className="text-black font-medium tracking-widest uppercase text-xs mb-4">Booking & Payment</h4>
              <p className="mb-3">
                A 50% non-refundable booking deposit is required to secure your session date. The remaining balance is due on the day of the shoot prior to commencement.
              </p>
              <p className="mb-3">
                Accepted payment methods include major credit/debit cards, ACH bank transfer, and Cash App Pay. All card payments are processed securely through Stripe. Vincent Russel Photography does not store payment information.
              </p>
              <p>
                Prices are quoted in USD. Applicable Texas sales tax may be added at checkout where required by law.
              </p>
            </div>

            <div>
              <h4 className="text-black font-medium tracking-widest uppercase text-xs mb-4">Cancellation & Rescheduling</h4>
              <p className="mb-3">
                Cancellations made more than 7 days before the session date: deposit is non-refundable but may be applied to one rescheduled date within 90 days.
              </p>
              <p className="mb-3">
                Cancellations within 7 days of the session: the deposit is forfeited and the full balance is due if notice is given fewer than 48 hours in advance.
              </p>
              <p>
                Vincent Russel Photography reserves the right to reschedule due to severe weather, illness, or force majeure. A full rescheduling credit will be offered in such cases.
              </p>
            </div>

            <div>
              <h4 className="text-black font-medium tracking-widest uppercase text-xs mb-4">Delivery & Privacy</h4>
              <p className="mb-3">
                Final edited images are delivered via private online gallery within 7–14 business days of the shoot date unless otherwise agreed in writing.
              </p>
              <p className="mb-3">
                Images are licensed for personal use. Commercial licensing is available and must be agreed upon in the project proposal.
              </p>
              <p className="mb-3">
                Vincent Russel Photography may use final images for portfolio and promotional purposes unless a privacy agreement is signed prior to the session.
              </p>
              <p>
                Personal data collected via this form (name, email, phone) is used solely to respond to your inquiry and manage your booking. Data is never sold to third parties. See our full{" "}
                <button
                  onClick={() => {}}
                  className="underline hover:text-black transition-colors"
                >
                  Privacy Policy
                </button>{" "}
                for details.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-base text-black"
          >
            Vincent Russel Photography
          </p>
          <p className="text-xs text-black/40 mt-1">Amarillo, Texas · Lifestyle &amp; Fashion</p>
        </div>

        <div className="flex gap-6 flex-wrap">
          {[
            ["Instagram", "#"],
            ["Portfolio", "#portfolio"],
            ["Terms", "#terms"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs tracking-widest uppercase text-black/40 hover:text-black transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-black/30">
          © {new Date().getFullYear()} Vincent Russel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <Process />
      <Services />
      <ContactForm />
      <Terms />
      <Footer />
    </div>
  )
}
