"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Hammer,
  Building2,
  Layers,
  Trees,
  Sun,
  ShieldCheck,
  Warehouse,
  TentTree,
  ArrowRight,
  Check,
  Image as ImageIcon,
  X,
  ExternalLink,
  Facebook,
  Quote,
  Search,
  Grid2X2,
  Volume2,
  VolumeX,
} from "lucide-react";

type IconType = any;

function SectionTitle({
  kicker,
  title,
  desc,
  right,
}: {
  kicker?: string;
  title: string;
  desc?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        {kicker ? (
          <div className="text-xs font-medium tracking-wide text-neutral-500">
            {kicker}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">
          {title}
        </h2>
        {desc ? <p className="max-w-2xl text-neutral-600">{desc}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

function Gallery({ images = [], label = "" }: { images: string[]; label?: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, i) => (
        <div
          key={`${label}-${i}`}
          className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
        >
          <img
            src={src}
            alt={`${label} photo ${i + 1}`}
            className="h-52 w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function BeforeAfter({
  beforeSrc,
  afterSrc,
  label = "",
}: {
  beforeSrc: string;
  afterSrc: string;
  label?: string;
}) {
  const [mode, setMode] = useState<"before" | "after">("after");
  const src = mode === "before" ? beforeSrc : afterSrc;
  return (
    <div className="rounded-3xl border border-black/10 overflow-hidden bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 bg-white/90 px-4 py-3">
        <div className="text-sm font-semibold text-neutral-900">Before / After</div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant={mode === "before" ? "default" : "outline"}
            className="rounded-2xl"
            onClick={() => setMode("before")}
          >
            Before
          </Button>
          <Button
            type="button"
            variant={mode === "after" ? "default" : "outline"}
            className="rounded-2xl"
            onClick={() => setMode("after")}
          >
            After
          </Button>
        </div>
      </div>
      <img src={src} alt={`${label} ${mode}`} className="h-80 w-full object-cover" loading="lazy" />
    </div>
  );
}

export default function Page() {
  const CONTENT = useMemo(
    () => ({
      name: "Lifestyle Homes & Services",
      brand: {
        logo: "/images/lifestylehs-logo.png",
        heroCollage: "/images/lifestylehs-hero-collage-clean.png",
        coverCollage: "/images/lifestylehs-cover-collage.png",
      },
      contact: {
        name: "Jeff Dunlop",
        phoneDisplay: "780-742-6579",
        phoneTel: "+17807426579",
        email: "jeff@lifestylehs.ca",
        locationLine1: "Bonnyville, AB",
        locationLine2: "T9N 2P4",
      },
      tagline: "Framing, foundations, siding, and custom builds—done right.",
      serviceAreas: ["Bonnyville", "Lakeland County", "Cold Lake", "St. Paul", "Surrounding area"],
      socials: {
        facebook: "https://www.facebook.com/", // replace with your real page URL
      },
      featuredServiceIds: ["framing", "foundations", "siding", "shops", "polebarns", "saunas", "sunrooms", "gc"],
      services: [
        {
          id: "framing",
          category: "Core construction",
          title: "Residential & Commercial Framing",
          short: "New builds, additions, and structural framing with clean lines and solid scheduling.",
          icon: Building2 as IconType,
          tags: ["Residential", "Commercial"],
          bullets: ["New construction", "Additions", "Structural framing"],
          gallery: ["/images/framing-1.jpg", "/images/framing-2.jpg", "/images/framing-3.jpg"],
          detail: {
            heading: "Framing you can trust",
            copy: "We build straight, square, and strong. Whether it’s a new home, shop, commercial space, or an addition—our framing work is planned for efficiency and built to last.",
            list: ["Wall & roof systems", "Beam installs & structural tie-ins", "Garage and shop packages", "Site-ready scheduling & coordination"],
          },
        },
        {
          id: "foundations",
          category: "Core construction",
          title: "Foundations",
          short: "Footings, forms, and foundation coordination—built for Alberta conditions.",
          icon: Layers as IconType,
          tags: ["Foundations"],
          bullets: ["Formwork", "Coordination", "Site-ready prep"],
          gallery: ["/images/foundations-1.jpg", "/images/foundations-2.jpg", "/images/foundations-3.jpg"],
          detail: {
            heading: "A strong start",
            copy: "Good builds start below grade. We help with layout, forming coordination, and making sure the foundation work is ready for the next stage—no surprises.",
            list: ["Footings and form coordination", "Garage pads & additions", "Prep for framing start", "Moisture/grade considerations"],
          },
        },
        {
          id: "siding",
          category: "Exteriors",
          title: "Siding",
          short: "Durable exterior finishes installed with attention to detail and weatherproofing.",
          icon: ShieldCheck as IconType,
          tags: ["Exteriors"],
          bullets: ["Vinyl / fiber-cement", "Trim & flashings", "Repairs"],
          gallery: ["/images/siding-1.jpg", "/images/siding-2.jpg", "/images/siding-3.jpg"],
          detail: {
            heading: "Exteriors that hold up",
            copy: "Clean lines, tight details, and proper weatherproofing. We install siding and exterior trims with the goal of looking great—and staying that way.",
            list: ["Siding installs & upgrades", "Corners, trims, soffit/fascia", "Flashing details", "Repairs and replacements"],
          },
        },
        {
          id: "shops",
          category: "Outbuildings",
          title: "Shops",
          short: "Workshops and storage buildings built for function, strength, and long-term use.",
          icon: Warehouse as IconType,
          tags: ["Outbuildings"],
          bullets: ["New shop builds", "Additions", "Build coordination"],
          gallery: ["/images/shops-1.jpg", "/images/shops-2.jpg", "/images/shops-3.jpg"],
          detail: {
            heading: "Shops built to work",
            copy: "From smaller backyard shops to larger workspaces—built to suit your needs, layout, and timeline.",
            list: ["Layout and planning support", "Foundation-to-frame coordination", "Open spans and structural planning", "Exterior finish options"],
          },
        },
        {
          id: "polebarns",
          category: "Outbuildings",
          title: "Pole Barns",
          short: "Cost-effective agricultural and storage buildings—designed for Alberta conditions.",
          icon: TentTree as IconType,
          tags: ["Agricultural"],
          bullets: ["Pole barn structures", "Storage & equipment", "Fast builds"],
          gallery: ["/images/polebarns-1.jpg", "/images/polebarns-2.jpg", "/images/polebarns-3.jpg"],
          detail: {
            heading: "Pole barns & storage",
            copy: "Pole barn construction that’s straightforward, efficient, and built with the right details for wind and snow load.",
            list: ["Agricultural and equipment storage", "Simple, strong structures", "Scheduling and trade coordination", "Exterior options: steel, siding, trim"],
          },
        },
        {
          id: "sunrooms",
          category: "Custom builds",
          title: "Custom Sunrooms",
          short: "Bright, comfortable spaces that extend your season and your square footage.",
          icon: Sun as IconType,
          tags: ["Additions"],
          bullets: ["Add-ons & conversions", "Insulated builds", "Finish carpentry"],
          gallery: ["/images/sunrooms-1.jpg", "/images/sunrooms-2.jpg", "/images/sunrooms-3.jpg"],
          detail: {
            heading: "Bring the outside in",
            copy: "Sunrooms are a high-impact upgrade—more light, more comfort, more usable months. We build them to match your home and handle Alberta weather.",
            list: ["New sunrooms & additions", "Insulated wall/roof options", "Finish carpentry and trim", "Integration with existing structure"],
          },
        },
        {
          id: "saunas",
          category: "Custom builds",
          title: "Custom Saunas",
          short: "Built to your space—heat, ventilation, and finishing handled the right way.",
          icon: Trees as IconType,
          tags: ["Wellness"],
          bullets: ["Design to build", "Moisture control", "Interior finishing"],
          gallery: ["/images/saunas-1.jpg", "/images/saunas-2.jpg", "/images/saunas-3.jpg"],
          detail: {
            heading: "Sauna",
            copy: "A proper sauna is more than heat—it’s airflow, materials, and moisture control. We can build to your layout and finish style, including cedar interiors and lighting details.",
            list: ["Custom layout to fit your space", "Ventilation & moisture control", "Cedar/wood interior finishing", "Door, bench, and lighting options"],
          },
          benefits: {
            heading: "Sauna benefits",
            intro: "People use saunas for relaxation, recovery, and overall wellness. Benefits can vary person-to-person, but common reasons clients love having a sauna include:",
            list: [
              "Deep relaxation and stress relief",
              "Post-workout recovery and muscle relaxation",
              "Improved circulation (temporary increase during heat exposure)",
              "Better sleep for many people",
              "A warm routine that supports consistent self-care",
              "A great feature for home value and lifestyle",
            ],
            note: "If you have medical conditions (heart disease, uncontrolled blood pressure, pregnancy, etc.), check with your doctor before starting regular sauna use.",
          },
        },
        {
          id: "gc",
          category: "Project management",
          title: "General Contracting",
          short: "One point of contact—from planning through trades and final walkthrough.",
          icon: Hammer as IconType,
          tags: ["Project Management"],
          bullets: ["Project management", "Trade coordination", "Quality control"],
          gallery: ["/images/gc-1.jpg", "/images/gc-2.jpg", "/images/gc-3.jpg"],
          detail: {
            heading: "One point of contact",
            copy: "We can run your build or renovation as the general contractor—keeping the trades aligned, schedules tight, and quality consistent.",
            list: ["Scope planning & budgeting", "Trade scheduling & coordination", "Material planning", "Site checks & final walkthrough"],
          },
        },
      ],
      projects: [
        {
          id: "proj-1",
          title: "New Home Framing Package",
          location: "Bonnyville, AB",
          tags: ["Framing", "Residential"],
          summary: "Full framing package with efficient scheduling and clean structural tie-ins.",
          cover: "/images/project-1-cover.jpg",
          photos: ["/images/project-1-1.jpg", "/images/project-1-2.jpg", "/images/project-1-3.jpg"],
          beforeAfter: { before: "/images/project-1-before.jpg", after: "/images/project-1-after.jpg" },
        },
        {
          id: "proj-2",
          title: "Shop / Garage Build",
          location: "Lakeland County",
          tags: ["Framing", "Foundations"],
          summary: "Garage/shop build coordination—foundation readiness through framing completion.",
          cover: "/images/project-2-cover.jpg",
          photos: ["/images/project-2-1.jpg", "/images/project-2-2.jpg", "/images/project-2-3.jpg"],
          beforeAfter: { before: "/images/project-2-before.jpg", after: "/images/project-2-after.jpg" },
        },
        {
          id: "proj-3",
          title: "Exterior Siding Upgrade",
          location: "Cold Lake area",
          tags: ["Siding", "Exteriors"],
          summary: "Exterior refresh with tight trim details and weatherproof finishing.",
          cover: "/images/project-3-cover.jpg",
          photos: ["/images/project-3-1.jpg", "/images/project-3-2.jpg", "/images/project-3-3.jpg"],
          beforeAfter: { before: "/images/project-3-before.jpg", after: "/images/project-3-after.jpg" },
        },
      ],
      testimonials: [
        { id: "t-1", name: "Local homeowner", location: "Bonnyville", text: "Great communication and solid workmanship. The crew was on time, clean, and the framing turned out perfect." },
        { id: "t-2", name: "Shop owner", location: "Lakeland County", text: "Professional start to finish. They kept the schedule tight and the quality was excellent." },
        { id: "t-3", name: "Renovation client", location: "Cold Lake area", text: "Very detail-oriented—especially on the exterior finishing. Would hire again." },
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Bonnyville,+AB+T9N+2P4&output=embed",
    }),
    []
  );

  // ---------------------------
  // Construction theme colors (in-page)
  // ---------------------------
  const THEME = {
    charcoal: "#0F172A", // deep slate
    steel: "#111827", // near-black
    safety: "#FBBF24", // safety yellow
    light: "#F8FAFC", // near-white
    panel: "rgba(255,255,255,0.92)",
  };

  // ---------------------------
  // Sound on load (with browser restrictions)
  // Put file at: public/sounds/saw.mp3
  // ---------------------------
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [soundTried, setSoundTried] = useState(false);

  const playSound = async () => {
    if (!soundEnabled) return;
    if (!audioRef.current) return;
    try {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.35;
      await audioRef.current.play();
    } catch {
      // Autoplay blocked until user interaction
    }
  };

  useEffect(() => {
    // try once on mount
    if (!soundTried) {
      setSoundTried(true);
      playSound();
    }

    // if blocked, play on first user interaction
    const onFirstUserAction = () => {
      playSound();
      window.removeEventListener("pointerdown", onFirstUserAction);
      window.removeEventListener("keydown", onFirstUserAction);
      window.removeEventListener("wheel", onFirstUserAction);
      window.removeEventListener("touchstart", onFirstUserAction);
    };

    window.addEventListener("pointerdown", onFirstUserAction, { passive: true });
    window.addEventListener("keydown", onFirstUserAction);
    window.addEventListener("wheel", onFirstUserAction, { passive: true });
    window.addEventListener("touchstart", onFirstUserAction, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstUserAction);
      window.removeEventListener("keydown", onFirstUserAction);
      window.removeEventListener("wheel", onFirstUserAction);
      window.removeEventListener("touchstart", onFirstUserAction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundEnabled]);

  const [form, setForm] = useState({ name: "", phone: "", details: "" });
  const [openService, setOpenService] = useState<any>(null);
  const [openProject, setOpenProject] = useState<any>(null);
  const [openAllServices, setOpenAllServices] = useState(false);
  const [serviceQuery, setServiceQuery] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Quote request — ${CONTENT.name}`);
    const body = encodeURIComponent(
      `Hi ${CONTENT.contact.name},\n\nMy name is ${form.name || "(your name)"}.\nPhone: ${form.phone || "(your phone)"}\n\nProject details:\n${form.details || "(describe your project)"}\n\nLocation: ${CONTENT.contact.locationLine1} ${CONTENT.contact.locationLine2}`
    );
    return `mailto:${CONTENT.contact.email}?subject=${subject}&body=${body}`;
  }, [form, CONTENT]);

  const featuredServices = useMemo(() => {
    const byId = new Map(CONTENT.services.map((s: any) => [s.id, s]));
    return CONTENT.featuredServiceIds.map((id: string) => byId.get(id)).filter(Boolean);
  }, [CONTENT]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const s of CONTENT.services as any[]) set.add(s.category || "Other");
    return Array.from(set).sort();
  }, [CONTENT]);

  const filteredServicesByCategory = useMemo(() => {
    const q = serviceQuery.trim().toLowerCase();
    const list = (CONTENT.services as any[]).filter((s) => {
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.short.toLowerCase().includes(q) ||
        (s.tags || []).join(" ").toLowerCase().includes(q) ||
        (s.category || "").toLowerCase().includes(q)
      );
    });

    const grouped: Record<string, any[]> = {};
    for (const c of categories) grouped[c] = [];
    for (const s of list) {
      const c = s.category || "Other";
      if (!grouped[c]) grouped[c] = [];
      grouped[c].push(s);
    }
    return grouped;
  }, [CONTENT, categories, serviceQuery]);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  const goToContact = () => {
    setOpenService(null);
    setOpenProject(null);
    setOpenAllServices(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen text-neutral-900"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.04) 0%, rgba(248,250,252,1) 24%, rgba(248,250,252,1) 100%)",
      }}
    >
      {/* hidden audio element */}
      <audio ref={audioRef} src="/sounds/saw.mp3" preload="auto" />

      {/* Top bar */}
      <div className="border-b border-black/10 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* FIXED: wider logo container + object-contain so it can't crop */}
            <div className="h-11 w-28 sm:w-32 rounded-2xl border border-black/10 overflow-hidden bg-white shadow-sm shrink-0">
              <img
                src={CONTENT.brand.logo}
                alt="Lifestyle logo"
                className="h-full w-full object-contain p-1"
              />
            </div>

            <div className="min-w-0">
              <div className="text-sm sm:text-base font-semibold leading-tight truncate">
                {CONTENT.name}
              </div>
              <div className="text-xs text-neutral-600 leading-tight truncate">
                {CONTENT.contact.locationLine1} • {CONTENT.contact.locationLine2}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="#services">Services</a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="#projects">Projects</a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="#testimonials">Reviews</a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="#contact">Contact</a>
            </Button>

            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={() => setOpenAllServices(true)}
            >
              <Grid2X2 className="h-4 w-4" /> All services
            </Button>

            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={() => setSoundEnabled((s) => !s)}
              title="Toggle sound"
            >
              {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              Sound
            </Button>

            {CONTENT.socials.facebook ? (
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={CONTENT.socials.facebook} target="_blank" rel="noreferrer">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </Button>
            ) : null}

            {/* Construction accent button */}
            <Button
              asChild
              className="rounded-2xl text-black"
              style={{ backgroundColor: THEME.safety }}
            >
              <a href={`tel:${CONTENT.contact.phoneTel}`}>
                <Phone className="h-4 w-4" /> Call
              </a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="rounded-2xl"
              onClick={() => setOpenAllServices(true)}
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="rounded-2xl"
              onClick={() => setSoundEnabled((s) => !s)}
              title="Toggle sound"
            >
              {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>

            <Button asChild size="sm" variant="outline" className="rounded-2xl">
              <a href={`tel:${CONTENT.contact.phoneTel}`}>
                <Phone className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="rounded-2xl text-black"
              style={{ backgroundColor: THEME.safety }}
            >
              <a href="#contact">Quote</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* subtle industrial stripe accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.06) 0%, rgba(251,191,36,0.08) 45%, rgba(248,250,252,1) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="relative"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm"
              >
                <MapPin className="h-3.5 w-3.5" />
                Serving {CONTENT.serviceAreas.join(" • ")}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl text-neutral-900"
              >
                Built straight. Built strong.
                <span className="block text-neutral-700">
                  Framing, foundations, siding, and custom spaces.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-5 max-w-prose text-base leading-relaxed text-neutral-700"
              >
                {CONTENT.tagline} We’re a local Bonnyville team focused on clear communication, clean workmanship, and reliable timelines.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="rounded-2xl text-black"
                  style={{ backgroundColor: THEME.safety }}
                >
                  <a href="#services">
                    View Services <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <Button variant="outline" className="rounded-2xl" onClick={() => setOpenAllServices(true)}>
                  <Grid2X2 className="h-4 w-4" /> All services
                </Button>

                <Button asChild variant="outline" className="rounded-2xl">
                  <a href={`tel:${CONTENT.contact.phoneTel}`}>
                    <Phone className="h-4 w-4" /> {CONTENT.contact.phoneDisplay}
                  </a>
                </Button>

                <Button asChild variant="outline" className="rounded-2xl">
                  <a href={`mailto:${CONTENT.contact.email}`}>Email</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-3 text-sm">
                {["Free estimates", "Licensed trades", "Residential + commercial"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-3 py-2 text-neutral-800 shadow-sm"
                  >
                    <Check className="h-4 w-4" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={5} className="mt-8 flex flex-wrap gap-2">
                {featuredServices.slice(0, 5).map((s: any) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setOpenService(s)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-neutral-800 hover:bg-white transition shadow-sm"
                  >
                    <ImageIcon className="h-4 w-4" /> {s.id === "saunas" ? "Sauna benefits" : s.title}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="relative">
              <motion.div variants={fadeUp} custom={1} className="rounded-3xl border border-black/10 overflow-hidden shadow-sm bg-white">
                <img
                  src={CONTENT.brand.heroCollage}
                  alt="Lifestyle Homes & Services collage"
                  className="h-[360px] w-full object-cover md:h-[420px]"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="mt-4">
                <Card className="rounded-3xl shadow-sm border-black/10 bg-white/90">
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Quote</CardTitle>
                    <CardDescription>Tell us what you’re building. We’ll get back to you fast.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <div className="text-xs text-neutral-600">Name</div>
                        <Input value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} placeholder="Your name" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="text-xs text-neutral-600">Phone</div>
                        <Input value={form.phone} onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))} placeholder="Your phone" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs text-neutral-600">Project details</div>
                      <Textarea
                        value={form.details}
                        onChange={(e) => setForm((s) => ({ ...s, details: e.target.value }))}
                        placeholder="Example: 24x32 shop framing in Bonnyville, ready-to-start date, drawings available…"
                        className="min-h-[110px]"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        asChild
                        className="rounded-2xl text-black"
                        style={{ backgroundColor: THEME.safety }}
                      >
                        <a href={mailto}>Email this request</a>
                      </Button>
                      <Button asChild variant="outline" className="rounded-2xl">
                        <a href={`tel:${CONTENT.contact.phoneTel}`}>
                          <Phone className="h-4 w-4" /> Call now
                        </a>
                      </Button>
                    </div>
                    <p className="text-xs text-neutral-600">
                      Easy updates: add services inside <span className="font-medium">CONTENT.services</span> and choose homepage ones in{" "}
                      <span className="font-medium">featuredServiceIds</span>.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <SectionTitle
              kicker="What we do"
              title="Services"
              desc="Organized by category so it stays clean even as you add more."
              right={
                <Button className="rounded-2xl" variant="outline" onClick={() => setOpenAllServices(true)}>
                  <Grid2X2 className="h-4 w-4" /> All services
                </Button>
              }
            />

            <div className="mt-8 space-y-10">
              {(() => {
                const order = ["Core construction", "Outbuildings", "Custom builds", "Project management", "Exteriors", "Other"];
                const grouped: Record<string, any[]> = {};
                for (const s of featuredServices as any[]) {
                  const c = s.category || "Other";
                  if (!grouped[c]) grouped[c] = [];
                  grouped[c].push(s);
                }
                const cats = Array.from(new Set([...order, ...Object.keys(grouped)])).filter((c) => grouped[c]?.length);
                return cats.map((cat) => (
                  <div key={cat} className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">{cat}</div>
                        <div className="mt-1 text-sm text-neutral-600">
                          {cat === "Core construction"
                            ? "Structure-first work: framing and foundations."
                            : cat === "Exteriors"
                            ? "Weatherproof, durable exterior finishes."
                            : cat === "Outbuildings"
                            ? "Shops and storage buildings built for Alberta."
                            : cat === "Custom builds"
                            ? "Lifestyle upgrades built to fit your space."
                            : cat === "Project management"
                            ? "One point of contact to coordinate your build."
                            : ""}
                        </div>
                      </div>
                      <Button className="rounded-2xl" variant="outline" onClick={() => setOpenAllServices(true)}>
                        See all <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {grouped[cat].map((s: any, i: number) => {
                        const Icon = s.icon as IconType;
                        return (
                          <motion.div key={s.id} variants={fadeUp} custom={i}>
                            <button type="button" onClick={() => setOpenService(s)} className="block w-full text-left">
                              <Card className="h-full rounded-3xl hover:shadow-md transition border-black/10 bg-white">
                                <CardHeader>
                                  <div className="flex items-start gap-3">
                                    <div
                                      className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-black/10"
                                      style={{ backgroundColor: "rgba(251,191,36,0.18)" }}
                                    >
                                      <Icon className="h-5 w-5 text-neutral-900" />
                                    </div>
                                    <div>
                                      <CardTitle className="text-base">{s.title}</CardTitle>
                                      <CardDescription className="mt-1">{s.short}</CardDescription>
                                      <div className="mt-3 flex flex-wrap gap-2">
                                        {(s.tags || []).map((t: string) => (
                                          <Badge key={t} className="rounded-2xl border border-black/10 bg-neutral-50 text-neutral-800">
                                            {t}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2 text-sm text-neutral-700">
                                    {(s.bullets || []).slice(0, 3).map((b: string) => (
                                      <li key={b} className="flex items-start gap-2">
                                        <Check className="mt-0.5 h-4 w-4" />
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="mt-4 inline-flex items-center text-sm">
                                    <span className="text-neutral-700 font-medium">View photos & details</span>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </div>
                                </CardContent>
                              </Card>
                            </button>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ));
              })()}
            </div>

            <div className="mt-10 rounded-3xl border border-black/10 p-4 text-sm text-neutral-800 bg-white shadow-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">Need something specific?</div>
                <div className="text-neutral-600">Open “All services” and search by keyword (ex: “pole”, “shop”, “sauna”).</div>
              </div>
              <Button
                className="rounded-2xl text-black"
                style={{ backgroundColor: THEME.safety }}
                onClick={() => setOpenAllServices(true)}
              >
                <Search className="h-4 w-4" /> Search all services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-black/10" style={{ backgroundColor: THEME.light }}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle kicker="Portfolio" title="Recent projects" desc="Click any project to open a larger gallery + before/after." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CONTENT.projects.map((p: any, i: number) => (
              <motion.div key={p.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} custom={i}>
                <button type="button" onClick={() => setOpenProject(p)} className="block w-full text-left">
                  <Card className="h-full overflow-hidden rounded-3xl hover:shadow-md transition border-black/10 bg-white">
                    <div className="h-44 w-full">
                      <img src={p.cover} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                      <CardDescription>{p.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t: string) => (
                          <Badge key={t} className="rounded-2xl border border-black/10 bg-neutral-50 text-neutral-800">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="mt-3 text-sm text-neutral-600">{p.summary}</p>
                      <div className="mt-4 inline-flex items-center text-sm">
                        <span className="text-neutral-800 font-medium">Open gallery</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle kicker="Reviews" title="What clients say" desc="Swap these with real reviews as you collect them." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CONTENT.testimonials.map((t: any) => (
              <Card key={t.id} className="h-full rounded-3xl border-black/10 bg-white shadow-sm">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div
                      className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10"
                      style={{ backgroundColor: "rgba(251,191,36,0.18)" }}
                    >
                      <Quote className="h-5 w-5 text-neutral-900" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{t.name}</CardTitle>
                      <CardDescription>{t.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">“{t.text}”</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {CONTENT.socials.facebook ? (
            <div className="mt-8">
              <Button
                asChild
                className="rounded-2xl text-black"
                style={{ backgroundColor: THEME.safety }}
              >
                <a href={CONTENT.socials.facebook} target="_blank" rel="noreferrer">
                  <Facebook className="h-4 w-4" /> Follow on Facebook
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ backgroundColor: THEME.light }}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <SectionTitle kicker="Contact" title="Let’s price your project" desc="Send details by email or call—we’ll line up the next steps." />

              <div className="rounded-3xl border border-black/10 p-4 bg-white shadow-sm">
                <div className="text-sm font-semibold">{CONTENT.contact.name}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button
                    asChild
                    className="rounded-2xl text-black"
                    style={{ backgroundColor: THEME.safety }}
                  >
                    <a href={`tel:${CONTENT.contact.phoneTel}`}>
                      <Phone className="h-4 w-4" /> {CONTENT.contact.phoneDisplay}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href={`mailto:${CONTENT.contact.email}`}>{CONTENT.contact.email}</a>
                  </Button>
                  {CONTENT.socials.facebook ? (
                    <Button asChild variant="outline" className="rounded-2xl">
                      <a href={CONTENT.socials.facebook} target="_blank" rel="noreferrer">
                        <Facebook className="h-4 w-4" /> Facebook
                      </a>
                    </Button>
                  ) : null}
                </div>

                <div className="mt-3 flex items-start gap-2 text-sm text-neutral-600">
                  <MapPin className="mt-0.5 h-4 w-4" />
                  <div>
                    <div>{CONTENT.contact.locationLine1}</div>
                    <div>{CONTENT.contact.locationLine2}</div>
                  </div>
                </div>
              </div>

              <Card className="rounded-3xl overflow-hidden border-black/10 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Find us</CardTitle>
                  <CardDescription>Bonnyville, AB • {CONTENT.contact.locationLine2}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-3xl border border-black/10">
                    <iframe title="Lifestyle map" src={CONTENT.mapEmbedUrl} className="h-80 w-full" loading="lazy" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button asChild variant="outline" className="rounded-2xl">
                      <a
                        href={`https://www.google.com/maps?q=${encodeURIComponent(
                          `${CONTENT.contact.locationLine1} ${CONTENT.contact.locationLine2}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open in Maps <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-3xl border-black/10 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">Send a quote request</CardTitle>
                <CardDescription>This opens an email draft on your device.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} placeholder="Your name" />
                <Input value={form.phone} onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))} placeholder="Your phone" />
                <Textarea
                  value={form.details}
                  onChange={(e) => setForm((s) => ({ ...s, details: e.target.value }))}
                  placeholder="Tell us about your project…"
                  className="min-h-[140px]"
                />
                <Button
                  asChild
                  className="w-full rounded-2xl text-black"
                  style={{ backgroundColor: THEME.safety }}
                >
                  <a href={mailto}>Open email draft</a>
                </Button>
                <div className="text-xs text-neutral-600">
                  Prefer phone? Call <span className="font-medium">{CONTENT.contact.phoneDisplay}</span>.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-11 w-28 sm:w-32 rounded-2xl border border-black/10 overflow-hidden bg-white shadow-sm shrink-0">
                <img src={CONTENT.brand.logo} alt="Logo" className="h-full w-full object-contain p-1" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold truncate">{CONTENT.name}</div>
                <div className="mt-1 text-xs text-neutral-600">
                  Framing • Foundations • Siding • Shops • Pole barns • Saunas • Sunrooms • General Contracting
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button asChild variant="outline" className="rounded-2xl"><a href="#services">Services</a></Button>
              <Button asChild variant="outline" className="rounded-2xl"><a href="#projects">Projects</a></Button>
              <Button asChild variant="outline" className="rounded-2xl"><a href="#testimonials">Reviews</a></Button>
              <Button asChild variant="outline" className="rounded-2xl"><a href="#contact">Contact</a></Button>
              <Button variant="outline" className="rounded-2xl" onClick={() => setOpenAllServices(true)}>
                <Grid2X2 className="h-4 w-4" /> All services
              </Button>
              <Button variant="outline" className="rounded-2xl" onClick={() => setSoundEnabled((s) => !s)}>
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />} Sound
              </Button>
              {CONTENT.socials.facebook ? (
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href={CONTENT.socials.facebook} target="_blank" rel="noreferrer"><Facebook className="h-4 w-4" /> Facebook</a>
                </Button>
              ) : null}
              <Button asChild className="rounded-2xl text-black" style={{ backgroundColor: THEME.safety }}>
                <a href={`tel:${CONTENT.contact.phoneTel}`}><Phone className="h-4 w-4" /> Call</a>
              </Button>
            </div>
          </div>

          <div className="mt-8 text-xs text-neutral-600">
            © {new Date().getFullYear()} {CONTENT.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ALL SERVICES MODAL */}
      <Dialog open={openAllServices} onOpenChange={(v) => setOpenAllServices(v)}>
        <DialogContent className="max-w-5xl rounded-3xl p-0 overflow-hidden">
          <div className="max-h-[85vh] overflow-auto">
            <div className="sticky top-0 z-10 border-b border-black/10 bg-white/95 backdrop-blur">
              <DialogHeader className="px-6 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <DialogTitle className="text-xl">All services</DialogTitle>
                    <DialogDescription className="mt-1">
                      Add as many services as you want—homepage stays clean using featuredServiceIds.
                    </DialogDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button className="rounded-2xl text-black" style={{ backgroundColor: THEME.safety }} onClick={goToContact}>
                      Request Quote
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-2xl" onClick={() => setOpenAllServices(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                      <Search className="h-4 w-4 text-neutral-500" />
                    </div>
                    <Input
                      value={serviceQuery}
                      onChange={(e) => setServiceQuery(e.target.value)}
                      placeholder="Search (ex: shop, pole, siding, sauna)…"
                      className="pl-9"
                    />
                  </div>
                </div>
              </DialogHeader>
            </div>

            <div className="px-6 py-6 space-y-8">
              {categories.map((c) => {
                const list = filteredServicesByCategory[c] || [];
                if (!list.length) return null;
                return (
                  <div key={c} className="space-y-3">
                    <div className="text-sm font-semibold">{c}</div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {list.map((s: any) => {
                        const Icon = s.icon as IconType;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              setOpenAllServices(false);
                              setOpenService(s);
                            }}
                            className="text-left"
                          >
                            <Card className="rounded-3xl hover:shadow-md transition border-black/10 bg-white">
                              <CardHeader>
                                <div className="flex items-start gap-3">
                                  <div
                                    className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-black/10"
                                    style={{ backgroundColor: "rgba(251,191,36,0.18)" }}
                                  >
                                    <Icon className="h-5 w-5 text-neutral-900" />
                                  </div>
                                  <div>
                                    <CardTitle className="text-base">{s.title}</CardTitle>
                                    <CardDescription className="mt-1">{s.short}</CardDescription>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                      {(s.tags || []).map((t: string) => (
                                        <Badge key={t} className="rounded-2xl border border-black/10 bg-neutral-50 text-neutral-800">
                                          {t}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                            </Card>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* SERVICE MODAL */}
      <Dialog open={!!openService} onOpenChange={(v) => !v && setOpenService(null)}>
        <DialogContent className="max-w-5xl rounded-3xl p-0 overflow-hidden">
          {openService ? (
            <div className="max-h-[85vh] overflow-auto">
              <div className="sticky top-0 z-10 border-b border-black/10 bg-white/95 backdrop-blur">
                <DialogHeader className="px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <DialogTitle className="text-xl">
                        {openService.id === "saunas" ? "Sauna" : openService.title}
                      </DialogTitle>
                      <DialogDescription className="mt-1">{openService.short}</DialogDescription>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(openService.tags || []).map((t: string) => (
                          <Badge key={t} className="rounded-2xl border border-black/10 bg-neutral-50 text-neutral-800">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button className="rounded-2xl text-black" style={{ backgroundColor: THEME.safety }} onClick={goToContact}>
                        Request Quote
                      </Button>
                      <Button asChild variant="outline" className="rounded-2xl">
                        <a href={`tel:${CONTENT.contact.phoneTel}`}>
                          <Phone className="h-4 w-4" /> Call
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-2xl" onClick={() => setOpenService(null)}>
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              <div className="px-6 py-6 space-y-6">
                <Gallery images={openService.gallery || []} label={openService.title} />
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="rounded-3xl border-black/10 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base">{openService.detail?.heading || "Details"}</CardTitle>
                      <CardDescription>{openService.detail?.copy}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        {(openService.detail?.list || []).map((x: string) => (
                          <li key={x} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {openService.id === "saunas" && openService.benefits ? (
                    <Card className="rounded-3xl border-black/10 bg-white shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-base">{openService.benefits.heading}</CardTitle>
                        <CardDescription>{openService.benefits.intro}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          {openService.benefits.list.map((x: string) => (
                            <li key={x} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 text-xs text-neutral-600">{openService.benefits.note}</div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="rounded-3xl border-black/10 bg-white shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-base">Next step</CardTitle>
                        <CardDescription>Tell us your timeline and location—we’ll price it.</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        <Button className="rounded-2xl text-black" style={{ backgroundColor: THEME.safety }} onClick={goToContact}>
                          Request Quote
                        </Button>
                        <Button asChild variant="outline" className="rounded-2xl">
                          <a href={`tel:${CONTENT.contact.phoneTel}`}>
                            <Phone className="h-4 w-4" /> Call
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      {/* PROJECT MODAL */}
      <Dialog open={!!openProject} onOpenChange={(v) => !v && setOpenProject(null)}>
        <DialogContent className="max-w-5xl rounded-3xl p-0 overflow-hidden">
          {openProject ? (
            <div className="max-h-[85vh] overflow-auto">
              <div className="sticky top-0 z-10 border-b border-black/10 bg-white/95 backdrop-blur">
                <DialogHeader className="px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <DialogTitle className="text-xl">{openProject.title}</DialogTitle>
                      <DialogDescription className="mt-1">
                        {openProject.location} • {openProject.summary}
                      </DialogDescription>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(openProject.tags || []).map((t: string) => (
                          <Badge key={t} className="rounded-2xl border border-black/10 bg-neutral-50 text-neutral-800">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className="rounded-2xl text-black" style={{ backgroundColor: THEME.safety }} onClick={goToContact}>
                        Request Quote
                      </Button>
                      <Button asChild variant="outline" className="rounded-2xl">
                        <a href={`tel:${CONTENT.contact.phoneTel}`}>
                          <Phone className="h-4 w-4" /> Call
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-2xl" onClick={() => setOpenProject(null)}>
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              <div className="px-6 py-6 space-y-6">
                {openProject.beforeAfter?.before && openProject.beforeAfter?.after ? (
                  <BeforeAfter beforeSrc={openProject.beforeAfter.before} afterSrc={openProject.beforeAfter.after} label={openProject.title} />
                ) : null}

                <Gallery images={[openProject.cover, ...(openProject.photos || [])]} label={openProject.title} />

                <div className="flex flex-wrap gap-2">
                  <Button className="rounded-2xl text-black" style={{ backgroundColor: THEME.safety }} onClick={goToContact}>
                    Request Quote
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href={`mailto:${CONTENT.contact.email}`}>Email</a>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
