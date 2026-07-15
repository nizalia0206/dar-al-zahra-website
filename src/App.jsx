import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Snowflake,
  Stethoscope,
  Shirt,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Building2,
  FileText,
} from "lucide-react";
import {
  IMG_LOGO,
  IMG_ELECTRICAL,
  IMG_AC,
  IMG_MEDICAL,
  IMG_GARMENTS,
  IMG_COMPANY_ETS,
  IMG_COLLAB_BMEDICAL,
  IMG_COLLAB_LPITALIANA,
  IMG_COLLAB_DIAPRO,
} from "./images_data";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const DIVISIONS = [
  {
    id: "electrical",
    num: "01",
    name: "Electrical Products",
    tagline: "Every circuit, sourced right.",
    accent: "#C9A227",
    accentSoft: "#F4E9C8",
    icon: Zap,
    photo: IMG_ELECTRICAL,
    blurb:
      "A comprehensive electrical range for residential, commercial and industrial projects, sourced from globally recognised brands for safety and compliance.",
    products: [
      ["Cables & Wires", "PVC, XLPE, armored, fire-resistant — all sizes"],
      ["Switches & Sockets", "Single/double gang, USB sockets, dimmers"],
      ["Circuit Breakers", "MCB, MCCB, ELCB, RCD, RCBO"],
      ["Distribution Boards", "Consumer units, DB panels, switchgear"],
      ["LED Lighting", "Bulbs, panel lights, floodlights, street lights"],
      ["Cable Management", "Trays, conduits, trunking, glands"],
      ["Transformers & UPS", "Isolation, step-down, auto transformers"],
      ["Tools & Testers", "Multimeters, clamp meters, voltage testers"],
    ],
    brands: [
      "Schneider Electric",
      "ABB",
      "Legrand",
      "Siemens",
      "Philips",
      "Osram",
      "Ducab",
      "Hager",
      "Havells",
    ],
  },
  {
    id: "ac",
    num: "02",
    name: "Air Conditioning",
    tagline: "Cooling built for extremes.",
    accent: "#1C8C99",
    accentSoft: "#CDEBEC",
    icon: Snowflake,
    photo: IMG_AC,
    blurb:
      "Cooling solutions for villas, commercial buildings, hotels, hospitals and industrial facilities — engineered for Dubai's climate.",
    products: [
      ["Split AC Units", "1.0–4.0 ton, cooling and heat pump"],
      ["Cassette AC", "4-way and 2-way ceiling units"],
      ["Ducted Systems", "Concealed units, 2–10 ton"],
      ["VRF / VRV Systems", "Multi-indoor variable refrigerant flow"],
      ["Chillers", "Air- and water-cooled, commercial scale"],
      ["Ventilation", "Exhaust fans, HRVs, ERVs, duct fans"],
      ["Thermostat & Controls", "Smart thermostats, BMS interfaces"],
      ["Spare Parts", "Refrigerant, copper pipes, drain pumps"],
    ],
    brands: [
      "Daikin",
      "Mitsubishi Electric",
      "LG",
      "Samsung",
      "Carrier",
      "Trane",
      "Gree",
      "Midea",
      "Hitachi",
    ],
  },
  {
    id: "medical",
    num: "03",
    name: "Medical Supplies",
    tagline: "Care equipment you can trust.",
    accent: "#A62639",
    accentSoft: "#F2D6DA",
    icon: Stethoscope,
    photo: IMG_MEDICAL,
    blurb:
      "Consumables, diagnostic equipment, surgical instruments and patient-care products for hospitals, clinics and labs across the UAE.",
    products: [
      ["Surgical Instruments", "Scissors, forceps, scalpels, retractors"],
      ["Diagnostic Equipment", "BP monitors, stethoscopes, oximeters"],
      ["PPE & Protective Gear", "Masks, N95/FFP2, gloves, gowns"],
      ["Disposable Consumables", "Syringes, IV sets, bandages, gauze"],
      ["Hospital Furniture", "Beds, exam tables, wheelchairs"],
      ["Sterilization", "Autoclaves, pouches, UV sterilizers"],
      ["Laboratory Supplies", "Test tubes, microscopes, centrifuges"],
      ["Imaging & Monitoring", "ECG machines, patient monitors"],
    ],
    brands: [
      "3M",
      "Medline",
      "Hartmann",
      "Cardinal Health",
      "B. Braun",
      "Mölnlycke",
      "Dräger",
      "Welch Allyn",
    ],
  },
  {
    id: "garments",
    num: "04",
    name: "Garments & Textiles",
    tagline: "Uniforms, fabric, identity.",
    accent: "#5C3A73",
    accentSoft: "#E3D7EC",
    icon: Shirt,
    photo: IMG_GARMENTS,
    blurb:
      "Ready-to-wear and custom-designed clothing, uniforms and fabrics for corporates, retail, hospitality and institutions.",
    products: [
      ["Industrial Workwear", "Boiler suits, coveralls, hi-vis jackets"],
      ["Safety Clothing", "FR-rated, anti-static, chemical-resistant"],
      ["Hospitality Uniforms", "Hotel, restaurant, airline crew"],
      ["Healthcare Uniforms", "Scrubs, lab coats, patient gowns"],
      ["School Uniforms", "Shirts, trousers, skirts, blazers"],
      ["Traditional Wear", "Kanduras, thobes, abayas, jalabiyas"],
      ["Promotional Clothing", "Branded tees, polos, caps, bags"],
      ["Fabrics & Textiles", "Cotton, polyester, denim, twill rolls"],
    ],
    brands: ["Bangladesh", "Pakistan", "Turkey", "China", "India"],
  },
];

const COMPANIES = [
  {
    id: "ets",
    name: "ETS — Exquisite Products Trading Services",
    location: "Al Khobar / Dammam, Kingdom of Saudi Arabia",
    photo: IMG_COMPANY_ETS,
    description:
      "ETS is a leading distributor of premium laboratory and medical equipment, serving government hospitals, private healthcare institutions and research laboratories across the region. Its portfolio spans diagnostic analyzers, blood bank automation, cold chain equipment, laboratory disposables and laboratory furniture, all backed by factory-certified technical support and training.",
    phone: "+966 (0)13 8190064",
    email: "info@etsksa.com",
    website: "www.etsksa.com",
    profilePdf: "/ets-profile.pdf",
  },
];

const COLLABORATIONS = [
  {
    id: "bmedical",
    name: "B Medical Systems",
    location: "Luxembourg",
    photo: IMG_COLLAB_BMEDICAL,
    description:
      "A global manufacturer of medical-grade cold chain equipment — ultra-low freezers, laboratory and pharmacy refrigerators, plasma storage freezers and vaccine transport solutions engineered for reliability in extreme climates and critical healthcare logistics.",
  },
  {
    id: "lpitaliana",
    name: "LP Italiana",
    location: "Italy",
    photo: IMG_COLLAB_LPITALIANA,
    description:
      "An Italian manufacturer of laboratory disposables and diagnostic consumables, supplying blood collection, sample handling and diagnostic products trusted by laboratories and hospitals across the region.",
  },
  {
    id: "diapro",
    name: "DiaPro",
    location: "Turkey",
    photo: IMG_COLLAB_DIAPRO,
    compactImage: true,
    description:
      "A diagnostics manufacturer producing advanced immunoassay and blood-grouping automation, including the OctoHawk platform — visited on-site at their production facility as part of our ongoing supplier evaluation and partnership development.",
  },
];

const WHY_US = [
  "Wide product range across four specialized divisions",
  "Competitive pricing with bulk and wholesale options",
  "Reliable supply chain and timely delivery across the UAE",
  "Experienced team with deep industry knowledge",
  "Strong partnerships with leading global manufacturers",
  "After-sales support and technical assistance",
  "Quality-assured products meeting international standards",
  "Customer-centric approach tailored to business needs",
];

const NAVY = "#0B0908";
const NAVY_SOFT = "#171310";
const PAPER = "#F5F0E6";
const INK = "#1C1712";
const GOLD = "#C1652E";
const AMBER = "#E8A54B";

/* ------------------------------------------------------------------ */
/*  Scroll reveal helper                                               */
/* ------------------------------------------------------------------ */

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(.2,.7,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function App() {
  const [activeDiv, setActiveDiv] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState("home");
  const current = DIVISIONS[activeDiv];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    setPage("home");
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (label) => {
    if (label === "Our Companies") {
      setPage("companies");
      setNavOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = label.toLowerCase().replace(/\s+/g, "-");
    if (page !== "home") {
      setPage("home");
      setNavOpen(false);
      setTimeout(() => scrollTo(id), 60);
    } else {
      scrollTo(id);
    }
  };

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: "'Inter', sans-serif" }} className="min-h-screen w-full overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .display { font-family: 'Fraunces', serif; }
        .display-italic { font-family: 'Fraunces', serif; font-style: italic; }
        .mono { font-family: 'IBM Plex Mono', monospace; }

        @keyframes gridDrift {
          0% { background-position: 0 0; }
          100% { background-position: 64px 64px; }
        }
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSwitch {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ribbonFloat {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(0,-16px) rotate(2deg); }
        }
        .ribbon-shape { animation: ribbonFloat 10s ease-in-out infinite; }

        .hero-list-item { transition: background-color 0.25s ease, border-color 0.25s ease; }
        .hero-list-item:hover { background-color: rgba(255,255,255,0.05); }
        .hero-list-item:hover .hero-list-arrow { transform: translateX(3px); opacity: 1; }
        .hero-list-arrow { transition: transform 0.2s ease, opacity 0.2s ease; opacity: 0.45; }
        .hero-anim > * { animation: heroFade 0.9s cubic-bezier(.2,.7,.3,1) both; }
        .hero-anim > *:nth-child(1) { animation-delay: 0.05s; }
        .hero-anim > *:nth-child(2) { animation-delay: 0.18s; }
        .hero-anim > *:nth-child(3) { animation-delay: 0.32s; }
        .hero-anim > *:nth-child(4) { animation-delay: 0.46s; }

        .div-panel { animation: fadeSwitch 0.5s cubic-bezier(.2,.7,.3,1) both; }

        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -12px rgba(11,9,8,0.22); }

        .partner-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .partner-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -12px rgba(11,9,8,0.22); }
        .partner-card:hover .partner-arrow { transform: translateX(4px); opacity: 1; }
        .partner-arrow { transition: transform 0.25s ease, opacity 0.25s ease; opacity: 0.5; }

        .collab-fade { animation: fadeSwitch 0.4s cubic-bezier(.2,.7,.3,1) both; }
        .collab-arrow-btn { transition: background-color 0.2s ease, transform 0.2s ease; }
        .collab-arrow-btn:hover { transform: scale(1.08); }

        .tab-btn { transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease; }

        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute; left: 0; bottom: -4px;
          width: 0; height: 2px; background: ${GOLD};
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .profile-btn { transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease; }
        .profile-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 22px -10px rgba(11,9,8,0.35); }

        @media (prefers-reduced-motion: reduce) {
          .hero-anim > *, .div-panel, .card-hover, .partner-card { animation: none !important; transition: none !important; }
        }

        ::selection { background: ${GOLD}; color: ${NAVY}; }
      `}</style>

      {/* --------------------------------------------------------- NAV */}
      <header
        className="fixed top-0 left-0 w-full z-50"
        style={{
          background: scrolled ? "rgba(11,9,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          transition: "all 0.35s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-20 md:h-32 gap-4">
  <button className="flex items-center gap-3 min-w-0 shrink" onClick={goHome}>
    <div className="flex items-center justify-center shrink-0 w-14 h-14 md:w-16 md:h-16">
      <img src={IMG_LOGO} alt="Dar Al Zahra logo" className="w-full h-full object-contain" />
    </div>
    <span className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wide display leading-tight truncate">
      DAR AL ZAHRA GENERAL TRADING LLC
    </span>
  </button>

  <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-white/85 display shrink-0">
    {["About", "Divisions", "Our Companies", "Why Us", "Contact"].map((label) => (
      <button key={label} onClick={() => handleNav(label)} className="nav-link whitespace-nowrap">
        {label}
      </button>
    ))}
    <button
      onClick={() => handleNav("Contact")}
      className="px-4 py-2 rounded-md text-sm font-medium display whitespace-nowrap"
      style={{ background: GOLD, color: NAVY }}
    >
      Get a Quote
    </button>
  </nav>

  <button className="lg:hidden text-white shrink-0" onClick={() => setNavOpen((v) => !v)} aria-label="Toggle menu">
    {navOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

        {navOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-4 text-white display" style={{ background: NAVY }}>
            {["About", "Divisions", "Our Companies", "Why Us", "Contact"].map((label) => (
              <button key={label} className="text-left py-1" onClick={() => handleNav(label)}>
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {page === "companies" ? (
        <CompaniesPage onBack={goHome} />
      ) : (
      <>
      {/* --------------------------------------------------------- HERO */}
      <section
        className="relative flex items-center min-h-screen px-5 md:px-8 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)`,
        }}
      >
        {/* Signature ribbon — four divisions interlocked into one company */}
        <svg
          className="ribbon-shape absolute pointer-events-none"
          style={{ right: "-6%", top: "12%", width: "min(60vw, 720px)", height: "auto", opacity: 0.9 }}
          viewBox="0 0 600 600"
          fill="none"
        >
          <defs>
            <linearGradient id="ribbonGrad" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={AMBER} />
              <stop offset="55%" stopColor={GOLD} />
              <stop offset="100%" stopColor="#7A3418" />
            </linearGradient>
            <filter id="ribbonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#ribbonGlow)" opacity="0.55">
            <path
              d="M120 460 C 40 360, 60 180, 220 110 C 380 40, 520 140, 500 260 C 480 380, 320 380, 300 300 C 280 220, 380 200, 420 260 C 460 320, 400 400, 320 420"
              stroke="url(#ribbonGrad)"
              strokeWidth="46"
              strokeLinecap="round"
            />
          </g>
          <path
            d="M120 460 C 40 360, 60 180, 220 110 C 380 40, 520 140, 500 260 C 480 380, 320 380, 300 300 C 280 220, 380 200, 420 260 C 460 320, 400 400, 320 420"
            stroke="url(#ribbonGrad)"
            strokeWidth="34"
            strokeLinecap="round"
          />
          <path
            d="M120 460 C 40 360, 60 180, 220 110 C 380 40, 520 140, 500 260 C 480 380, 320 380, 300 300 C 280 220, 380 200, 420 260 C 460 320, 400 400, 320 420"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative max-w-6xl mx-auto w-full pt-28 pb-16 grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: headline */}
          <div className="lg:col-span-3 hero-anim">
            <p className="mono text-xs md:text-sm tracking-[0.25em] uppercase" style={{ color: GOLD }}>
              Dubai · UAE — General Trading, Est. Multi-Sector
            </p>
            <h1 className="display text-white font-medium leading-[1.08] mt-6" style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.9rem)" }}>
              One trading partner
              <br />
              for <span className="display-italic" style={{ color: AMBER }}>four industries</span>,
              <br />
              perfected.
            </h1>
            <p className="text-white/65 max-w-lg mt-6 text-base md:text-lg leading-relaxed">
              Dar Al Zahra General Trading LLC supplies Electrical Products, Air Conditioning,
              Medical Supplies and Garments &amp; Textiles to businesses, contractors, hospitals
              and retailers across the UAE and GCC.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <button
                onClick={() => scrollTo("contact")}
                className="group px-6 py-3 rounded-full font-medium display flex items-center gap-2"
                style={{ background: GOLD, color: "#fff" }}
              >
                Request a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("divisions")}
                className="px-6 py-3 rounded-full font-medium display border border-white/25 text-white hover:bg-white/10 transition-colors"
              >
                Explore Divisions
              </button>
            </div>
          </div>

          {/* Right: division list panel, echoing the reference's project rail */}
          <div className="lg:col-span-2 hero-anim">
            <div
              className="rounded-2xl overflow-hidden backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              {DIVISIONS.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setActiveDiv(i);
                    scrollTo("divisions");
                  }}
                  className="hero-list-item w-full flex items-center gap-4 px-4 py-4 text-left"
                  style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="display text-white text-sm font-medium">{d.name}</p>
                    <p className="text-white/45 text-xs mt-1 leading-snug line-clamp-2">{d.tagline}</p>
                  </div>
                  <ChevronRight size={16} className="hero-list-arrow shrink-0" style={{ color: AMBER }} />
                </button>
              ))}
              <button
                onClick={() => handleNav("Our Companies")}
                className="hero-list-item w-full flex items-center gap-4 px-4 py-4 text-left"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <Building2 size={20} style={{ color: AMBER }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="display text-white text-sm font-medium">Our Companies</p>
                  <p className="text-white/45 text-xs mt-1 leading-snug">ETS &amp; our collaborations</p>
                </div>
                <ChevronRight size={16} className="hero-list-arrow shrink-0" style={{ color: AMBER }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- ABOUT */}
      <section id="about" className="px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          <Reveal className="md:col-span-3">
            <p className="mono text-sm md:text-base font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
              About Us
            </p>
            <h2 className="display font-semibold mt-4 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: NAVY }}>
              A one-stop trading partner since day one.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: "#4A4136" }}>
              Dar Al Zahra General Trading LLC is a premier multi-sector trading company
              headquartered in Dubai, United Arab Emirates. Our portfolio spans four core
              divisions, making us a comprehensive partner for businesses, contractors,
              hospitals and retailers across the UAE and wider GCC region.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="p-5 rounded-lg" style={{ background: "#fff", border: "1px solid #E6DDCC" }}>
                <p className="mono text-sm md:text-base font-bold uppercase tracking-widest" style={{ color: GOLD }}>Vision</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#4A4136" }}>
                  To be the most trusted and preferred general trading company in the UAE
                  and the GCC, recognized for quality, integrity and customer satisfaction.
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: "#fff", border: "1px solid #E6DDCC" }}>
                <p className="mono text-sm md:text-base font-bold uppercase tracking-widest" style={{ color: GOLD }}>Mission</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#4A4136" }}>
                  To deliver superior products through strong supplier relationships,
                  competitive pricing, timely delivery and exceptional after-sales support.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E6DDCC" }}>
              {[
                ["Company", "Dar Al Zahra General Trading LLC"],
                ["Location", "Dubai, United Arab Emirates"],
                ["Business Type", "General Trading Company"],
                ["Divisions", "Electrical · AC · Medical · Garments"],
                ["Markets Served", "UAE, GCC & International"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-4 text-sm"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAF6EC", borderTop: i === 0 ? "none" : "1px solid #E6DDCC" }}
                >
                  <span className="mono uppercase tracking-wide text-xs w-36 shrink-0" style={{ color: NAVY }}>{k}</span>
                  <span style={{ color: "#4A4136" }}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- DIVISIONS */}
      <section id="divisions" className="px-5 md:px-8 py-24 md:py-32" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="mono text-sm md:text-base font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
              Our Divisions
            </p>
            <h2 className="display font-semibold mt-4 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: INK }}>
              Four sectors. One point of contact.
            </h2>
          </Reveal>

          {/* Tabs */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mt-10">
              {DIVISIONS.map((d, i) => {
                const active = i === activeDiv;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveDiv(i)}
                    className="tab-btn flex items-center gap-2 px-4 py-3 rounded-lg border display text-sm"
                    style={{
                      background: active ? GOLD : "#fff",
                      borderColor: active ? GOLD : "#E6DDCC",
                      color: active ? "#fff" : INK,
                      fontWeight: active ? 600 : 500,
                    }}
                  >
                    <span className="mono text-xs opacity-70">{d.num}</span>
                    <d.icon size={16} />
                    {d.name}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Panel */}
          <div key={current.id} className="div-panel mt-10 rounded-2xl p-6 md:p-10" style={{ background: `linear-gradient(135deg, ${GOLD} 0%, #9C4A20 100%)`, border: `1px solid ${GOLD}` }}>
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <div
                  className="rounded-xl overflow-hidden mb-6"
                  style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="w-full h-44 md:h-52 object-cover"
                  />
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.18)" }}
                >
                  <current.icon size={26} style={{ color: "#fff" }} />
                </div>
                <h3 className="display text-white font-semibold text-2xl mt-5">{current.name}</h3>
                <p className="mt-1 text-sm display" style={{ color: "#fff" }}>{current.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/80">{current.blurb}</p>

                <p className="mono text-xs uppercase tracking-widest text-white/60 mt-8 mb-3">Key Brands</p>
                <div className="flex flex-wrap gap-2">
                  {current.brands.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-3 py-1.5 rounded-full text-white/90"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
                {current.products.map(([name, desc]) => (
                  <div
                    key={name}
                    className="card-hover p-4 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <p className="text-white font-medium text-sm display">{name}</p>
                    <p className="text-white/70 text-xs mt-1.5 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- WHY US */}
      <section id="why-us" className="px-5 md:px-8 py-24 md:py-32" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="mono text-sm md:text-base font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
              Why Choose Us
            </p>
            <h2 className="display font-semibold mt-4 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: INK }}>
              Built for reliability, priced for scale.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {WHY_US.map((point, i) => (
              <Reveal key={point} delay={(i % 4) * 0.08}>
                <div className="card-hover h-full p-5 rounded-lg" style={{ background: "#fff", border: "1px solid #E6DDCC" }}>
                  <CheckCircle2 size={20} style={{ color: GOLD }} />
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#4A4136" }}>{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- CONTACT */}
      <section id="contact" className="px-5 md:px-8 py-24 md:py-32" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="mono text-sm md:text-base font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
              Contact Us
            </p>
            <h2 className="display font-semibold mt-4 text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Let's build your supply chain together.
            </h2>
            <p className="mt-5 text-white/65 text-sm md:text-base leading-relaxed max-w-md">
              We welcome inquiries from businesses, contractors, institutions and individual
              clients. Our team is ready to assist with product information, pricing, bulk
              orders and customized solutions.
            </p>

            <a
              href="mailto:sales@dazllc.com"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md font-medium display"
              style={{ background: GOLD, color: NAVY }}
            >
              Email Sales <ChevronRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
              {[
                [Phone, "Phone", "+971 6 525 4255"],
                [Phone, "Mobile", "+971 50 345 1489"],
                [Mail, "Email", "sales@dazllc.com"],
                [MapPin, "Address", "Dubai, United Arab Emirates"],
                [Clock, "Working Hours", "Mon – Fri, 9:00 AM – 5:00 PM"],
              ].map(([Icon, label, value], i) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-5 py-4"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon size={18} style={{ color: AMBER }} />
                  <div>
                    <p className="mono text-[11px] uppercase tracking-wide text-white/40">{label}</p>
                    <p className="text-white text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- FOOTER */}
      <footer className="px-5 md:px-8 py-8 text-center" style={{ background: "#0A1420" }}>
        <p className="text-white/40 text-xs mono">
          © {new Date().getFullYear()} Dar Al Zahra General Trading LLC — Dubai, UAE
        </p>
      </footer>
      </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Our Companies page                                                 */
/* ------------------------------------------------------------------ */

function CompaniesPage({ onBack }) {
  const [collabIndex, setCollabIndex] = useState(0);
  const collab = COLLABORATIONS[collabIndex];

  const nextCollab = () =>
    setCollabIndex((i) => (i + 1) % COLLABORATIONS.length);
  const prevCollab = () =>
    setCollabIndex((i) => (i - 1 + COLLABORATIONS.length) % COLLABORATIONS.length);

  return (
    <div>
      {/* Page intro */}
      <section
        className="px-5 md:px-8 pt-32 pb-16 md:pt-44 md:pb-20"
        style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <p className="mono text-sm md:text-base font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
            Our Companies
          </p>
          <h1 className="display font-semibold mt-4 text-white leading-tight" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
            Beyond General Trading: our specialized businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-white/65 text-base leading-relaxed">
            Beyond our four core divisions, Dar Al Zahra operates and supports specialized
            businesses serving healthcare and laboratory markets across the region through ETS (Exquisite Products Trading Services).
          </p>
        </div>
      </section>

      {/* Company: ETS */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          {COMPANIES.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl overflow-hidden grid md:grid-cols-5"
              style={{ background: "#fff", border: "1px solid #E6DDCC" }}
            >
              <div className="md:col-span-2 h-56 md:h-auto overflow-hidden" style={{ background: NAVY }}>
                <img src={c.photo} alt={c.name} className="w-full h-full object-contain" />
              </div>
              <div className="md:col-span-3 p-6 md:p-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#F4E9C8" }}>
                  <Building2 size={22} style={{ color: GOLD }} />
                </div>
                <h2 className="display font-semibold text-2xl mt-5" style={{ color: NAVY }}>
                  {c.name}
                </h2>
                <p className="mono text-xs uppercase tracking-widest mt-1" style={{ color: GOLD }}>
                  {c.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#4A4136" }}>
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm" style={{ color: "#4A4136" }}>
                  {c.phone && (
                    <span className="flex items-center gap-2">
                      <Phone size={14} style={{ color: GOLD }} /> {c.phone}
                    </span>
                  )}
                  {c.email && (
                    <span className="flex items-center gap-2">
                      <Mail size={14} style={{ color: GOLD }} /> {c.email}
                    </span>
                  )}
                  {c.website && (
                    <span className="flex items-center gap-2">
                      <ArrowRight size={14} style={{ color: GOLD }} /> {c.website}
                    </span>
                  )}
                </div>

                {c.profilePdf && (
                  <a
                    href={c.profilePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-btn inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-md font-medium display text-sm"
                    style={{ background: GOLD, color: "#fff" }}
                  >
                    <FileText size={16} /> View Profile
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Our Collaborations carousel, nested under ETS */}
          <div className="mt-14">
            <p className="mono text-sm md:text-base font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>
              Our Collaborations
            </p>
            <h3 className="display font-semibold mt-3 leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: NAVY }}>
              Manufacturers ETS works with directly.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "#4A4136" }}>
              Met on-site at their facilities and at industry events like Arab Health —
              use the arrows to browse.
            </p>

            <div
              className="mt-8 rounded-2xl overflow-hidden grid md:grid-cols-5"
              style={{ background: NAVY, border: `1px solid ${GOLD}33` }}
            >
              <div
                className={`md:col-span-3 relative overflow-hidden ${collab.compactImage ? "h-64 md:h-96" : "h-64 md:h-auto"}`}
                style={{ background: NAVY }}
              >
                <img
                  key={collab.id}
                  src={collab.photo}
                  alt={collab.name}
                  className={`collab-fade w-full h-full ${collab.compactImage ? "object-contain" : "object-cover"}`}
                />
                <button
                  onClick={prevCollab}
                  aria-label="Previous collaboration"
                  className="collab-arrow-btn absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(11,9,8,0.65)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button
                  onClick={nextCollab}
                  aria-label="Next collaboration"
                  className="collab-arrow-btn absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(11,9,8,0.65)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>

              <div key={collab.id + "-text"} className="collab-fade md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                <p className="mono text-[11px] uppercase tracking-wide" style={{ color: GOLD }}>
                  {collab.location}
                </p>
                <h4 className="display font-semibold text-xl text-white mt-1">{collab.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{collab.description}</p>

                <div className="flex items-center gap-2 mt-6">
                  {COLLABORATIONS.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setCollabIndex(i)}
                      aria-label={`Go to ${c.name}`}
                      className="rounded-full"
                      style={{
                        width: i === collabIndex ? 20 : 8,
                        height: 8,
                        background: i === collabIndex ? GOLD : "rgba(255,255,255,0.25)",
                        transition: "all 0.25s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-8 text-center" style={{ background: "#0A1420" }}>
        <p className="text-white/40 text-xs mono">
          © {new Date().getFullYear()} Dar Al Zahra General Trading LLC — Dubai, UAE
        </p>
      </footer>
    </div>
  );
}