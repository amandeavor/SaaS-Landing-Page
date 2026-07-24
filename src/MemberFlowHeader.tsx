"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Play,
  Star,
  Menu,
  X,
  Users,
  CreditCard,
  Layout,
} from "lucide-react";

// ==========================================
// 4. INLINE PRIMITIVES
// ==========================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  const variantClasses =
    variant === "default"
      ? "bg-[#FF4F00] text-white hover:bg-[#E64600]"
      : "border-[#E6E6E6] bg-white text-[#0F0F0F] hover:bg-gray-50";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: { label: string; onClick?: () => void }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="cursor-pointer flex items-center gap-1 font-medium text-sm text-[#525252] hover:text-[#0F0F0F] transition-colors py-1.5 px-3 rounded-full">
        {trigger}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 z-50 w-56 p-2 rounded-2xl bg-white shadow-xl border border-[#E2DDD8]"
          >
            {items.map((item, index) => (
              <div
                key={index}
                onClick={item.onClick}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 text-[#0F0F0F] rounded-lg transition-colors font-medium"
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 1. TEXT REVEAL ANIMATION (Apple-Style Word-by-Word)
// ==========================================

const TextReveal = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0.1, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block will-change-transform">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// ==========================================
// LOGO ASSET & COMPANY LOGOS
// ==========================================

const companyLogos = [
  { name: "Unbounce", src: "https://cdn.jiro.build/Fable/Company%20Logo/unbounce.svg" },
  { name: "Hubspot", src: "https://cdn.jiro.build/Fable/Company%20Logo/Hubspot.svg" },
  { name: "Outsystems", src: "https://cdn.jiro.build/Fable/Company%20Logo/outsystems.svg" },
  { name: "Autodesk", src: "https://cdn.jiro.build/Fable/Company%20Logo/AUTODESK.svg" },
  { name: "Vermeer", src: "https://cdn.jiro.build/Fable/Company%20Logo/Vermeer.svg" },
  { name: "Typeform", src: "https://cdn.jiro.build/Fable/Company%20Logo/Typeform.svg" },
];

export default function MemberFlowHeader() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const featureDropdownItems = [
    { label: "AI Content Studio" },
    { label: "Automated Subscriptions" },
    { label: "Community Analytics" },
    { label: "Custom Domain Integration" },
  ];

  const useCasesDropdownItems = [
    { label: "For Course Creators" },
    { label: "For SaaS Founders" },
    { label: "For Digital Communities" },
    { label: "For Paid Newsletters" },
  ];

  return (
    <div
      style={{ fontFamily: "'Archivo', sans-serif" }}
      className="h-screen w-full overflow-y-auto snap-y snap-proximity overflow-x-hidden scroll-smooth bg-white text-[#0F0F0F] relative selection:bg-[#FF4F00] selection:text-white"
    >
      {/* 5. NAVBAR (Fixed top-0) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full max-w-[1248px] mx-auto flex pt-4 sm:pt-6 px-4 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex p-2.5 sm:p-3 items-center justify-between rounded-full bg-[#F8F4F0]/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md border border-[#E2DDD8]/80 pointer-events-auto"
        >
          {/* Mobile/Tablet Layout */}
          <div className="flex lg:hidden w-full justify-between items-center px-2">
            <a href="#" className="flex items-center">
              <img
                src="https://cdn.jiro.build/Fable/All%20SVG/Logomark.svg"
                alt="MemberFlow Logo"
                className="w-[36px] h-[30px]"
                referrerPolicy="no-referrer"
              />
              <span className="font-archivo font-extrabold text-base text-[#0F0F0F] ml-2 tracking-tight">
                MemberFlow
              </span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#0F0F0F] cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex w-full items-center justify-between">
            {/* Left Nav Links */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab("Home")}
                className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all cursor-pointer ${
                  activeTab === "Home"
                    ? "bg-white shadow-sm text-[#0F0F0F]"
                    : "text-[#525252] hover:text-[#0F0F0F]"
                }`}
              >
                Home
              </button>

              <DropdownMenu
                trigger={
                  <>
                    Features <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70" />
                  </>
                }
                items={featureDropdownItems}
              />

              <button
                onClick={() => setActiveTab("Pricing")}
                className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all cursor-pointer ${
                  activeTab === "Pricing"
                    ? "bg-white shadow-sm text-[#0F0F0F]"
                    : "text-[#525252] hover:text-[#0F0F0F]"
                }`}
              >
                Pricing
              </button>

              <DropdownMenu
                trigger={
                  <>
                    Use Cases <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70" />
                  </>
                }
                items={useCasesDropdownItems}
              />
            </div>

            {/* Center Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img
                src="https://cdn.jiro.build/Fable/All%20SVG/Logomark.svg"
                alt="MemberFlow Logo"
                className="w-[44px] h-[36px] transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="font-archivo font-black text-xl tracking-tight text-[#0F0F0F]">
                MemberFlow
              </span>
            </a>

            {/* Right CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="#login"
                className="text-sm font-medium text-[#404040] hover:text-[#0F0F0F] transition-colors"
              >
                Login
              </a>
              <Button
                variant="default"
                className="rounded-full px-5 py-2 bg-[#FF4F00] text-white hover:bg-[#E64600] font-semibold text-sm shadow-md shadow-[#FF4F00]/20"
              >
                Build for free
              </Button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* 6. MOBILE MENU (AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[76px] left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-[#E2DDD8] px-8 py-6 flex flex-col gap-4 overflow-hidden shadow-2xl"
          >
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F0F0F] py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F0F0F] py-2 border-b border-gray-100"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F0F0F] py-2 border-b border-gray-100"
            >
              Pricing
            </a>
            <a
              href="#use-cases"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F0F0F] py-2 border-b border-gray-100"
            >
              Use Cases
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center py-2.5 text-sm font-medium text-[#404040]"
              >
                Login
              </a>
              <Button
                variant="default"
                className="w-full rounded-full py-3 bg-[#FF4F00] text-white hover:bg-[#E64600] font-semibold text-base"
              >
                Build for free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          7. HERO SECTION
         ========================================== */}
      <section className="min-h-screen w-full snap-start relative flex flex-col items-center justify-start pt-28 sm:pt-32 md:pt-36 pb-16 px-4 bg-white">
        {/* Ambient background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FF4F00]/10 via-[#FF4F00]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ amount: 0.3, once: true }}
          className="inline-flex items-center gap-2 sm:gap-2.5 p-1 pr-3 rounded-full bg-[#F8F4F0] border border-[#E2DDD8] text-sm text-[#0F0F0F] mb-3 sm:mb-4 shadow-sm hover:border-[#FF4F00]/40 transition-colors cursor-pointer group"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-[#FF4F00] text-white text-[11px] font-bold uppercase tracking-wider">
            New
          </span>
          <span className="font-medium text-xs sm:text-sm text-[#0F0F0F]">
            AI-Powered Membership Platform
          </span>
          <span className="w-px h-3.5 bg-[#E2DDD8]" />
          <span className="flex items-center gap-0.5 text-xs font-semibold text-[#404040] bg-[#F5F5F5] px-2 py-0.5 rounded-full group-hover:text-[#FF4F00] transition-colors">
            Get Early Access
            <ChevronRight className="w-3.5 h-3.5 text-[#FF4F00] transition-transform group-hover:translate-x-0.5" />
          </span>
        </motion.div>

        {/* Heading: Word-by-Word Opacity Reveal */}
        <TextReveal
          text="Build, Launch & Scale Your Membership Business"
          className="font-archivo font-extrabold text-[32px] sm:text-[48px] md:text-[62px] lg:text-[76px] leading-[0.95] tracking-[-0.04em] text-[#0F0F0F] text-center max-w-[900px] mb-3 sm:mb-5 flex flex-wrap justify-center gap-x-2.5 gap-y-1"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ amount: 0.3, once: true }}
          className="font-archivo text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed tracking-normal text-[#404040] text-center max-w-[660px] mb-5 sm:mb-6"
        >
          Create courses, manage members, accept payments, and grow your community  all from one powerful platform.
        </motion.p>

        {/* Button Row & Perfectly Aligned Handcrafted Annotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ amount: 0.3, once: true }}
          className="relative flex flex-col sm:flex-row items-center gap-3.5 mb-14 sm:mb-16 md:mb-20"
        >
          <Button
            variant="default"
            className="group flex px-6 sm:px-7 py-3 rounded-full bg-[#FF4F00] text-white hover:bg-[#E64600] font-semibold text-sm sm:text-base shadow-lg shadow-[#FF4F00]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF4F00]/35 cursor-pointer"
          >
            Get Started Free
            <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            className="group flex px-6 sm:px-7 py-3 rounded-full border-[#E6E6E6] bg-white text-[#0F0F0F] hover:bg-gray-50 font-semibold text-sm sm:text-base shadow-sm transition-all duration-300 cursor-pointer"
          >
            Schedule a Demo
            <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Handcrafted Annotation - Clean Vertical Alignment & Margin */}
          <div className="absolute -left-[230px] lg:-left-[250px] top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 pointer-events-none select-none">
            <span className="font-archivo italic text-[18px] text-[#6B7280] -rotate-3 inline-block font-normal whitespace-nowrap">
              Try it Free for 7 days
            </span>
            <img
              src="https://cdn.jiro.build/Fable/Other%20IMG/arrow.png"
              alt="Arrow annotation"
              className="w-[56px] h-[30px] object-contain brightness-75 inline-block -rotate-6 -mt-1"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Dashboard Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.2, once: true }}
          className="w-full max-w-[1080px] relative rounded-[20px] overflow-hidden shadow-2xl border border-[#E2DDD8] group cursor-pointer bg-white"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src="https://cdn.jiro.build/Fable/Other%20IMG/header%203%20dashboard.png"
            alt="MemberFlow Dashboard Preview"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
          {/* Centered Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-opacity group-hover:bg-black/15">
            <div className="p-3.5 sm:p-4 rounded-full bg-[#FAFAFA]/90 backdrop-blur-sm shadow-xl border border-white/60">
              <div className="p-3 sm:p-3.5 rounded-full bg-white shadow-inner flex items-center justify-center text-[#FF4F00]">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#FF4F00] translate-x-0.5 text-[#FF4F00]" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          8. FEATURES & SOCIAL-PROOF GRID
         ========================================== */}
      <section className="min-h-screen w-full snap-start relative flex items-center justify-center px-4 py-16 sm:py-24 bg-white">
        <div className="w-full max-w-[1248px] mx-auto border border-[#E2DDD8] bg-white relative rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
          
          {/* Top Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 border-[#E2DDD8] md:border-r hover:bg-gray-50/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF4F00] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(255,79,0,0.2)] mb-4 sm:mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-archivo font-extrabold text-[20px] sm:text-[24px] tracking-tight text-[#0F0F0F] mb-2 sm:mb-3">
                Membership Management
              </h3>
              <p className="font-archivo font-normal text-[15px] sm:text-[16px] leading-relaxed text-[#525252]">
                Easily manage members, access levels, and permissions from one dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 border-[#E2DDD8] md:border-r hover:bg-gray-50/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF4F00] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(255,79,0,0.2)] mb-4 sm:mb-6">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-archivo font-extrabold text-[20px] sm:text-[24px] tracking-tight text-[#0F0F0F] mb-2 sm:mb-3">
                Recurring Subscriptions
              </h3>
              <p className="font-archivo font-normal text-[15px] sm:text-[16px] leading-relaxed text-[#525252]">
                Create flexible pricing plans and automate recurring payments effortlessly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 border-[#E2DDD8] hover:bg-gray-50/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF4F00] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(255,79,0,0.2)] mb-4 sm:mb-6">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="font-archivo font-extrabold text-[20px] sm:text-[24px] tracking-tight text-[#0F0F0F] mb-2 sm:mb-3">
                Course & Content Builder
              </h3>
              <p className="font-archivo font-normal text-[15px] sm:text-[16px] leading-relaxed text-[#525252]">
                Launch courses, gated content, and digital products in minutes  effortlessly.
              </p>
            </div>
          </div>

          {/* Bottom Social Proof Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border-t border-[#E2DDD8]">
            {/* Trusted by Box */}
            <div className="p-6 sm:p-8 md:p-10 lg:border-r border-[#E2DDD8] flex flex-col justify-center bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-1">
                Trusted by
              </span>
              <h4 className="font-archivo font-extrabold text-[28px] sm:text-[32px] text-[#0F0F0F] mb-3 leading-tight">
                127K+ Creators
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                {/* 11. Google "G" SVG */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>

                {/* 5 Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF4F00] text-[#FF4F00]" />
                  ))}
                </div>

                <span className="text-sm font-medium text-[#404040] ml-1">
                  4.9 Average user rating
                </span>
              </div>
            </div>

            {/* Scrolling Logos Marquee Box */}
            <div className="overflow-hidden bg-[#FAFAFA]/30 relative flex flex-col justify-center gap-6 py-6 sm:py-8 px-4">
              {/* Left & Right Gradient Fade Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Row 1: Leftward Infinite Marquee */}
              <div className="flex overflow-hidden w-full">
                <motion.div
                  className="flex gap-14 shrink-0 items-center pr-14 will-change-transform"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {[...companyLogos, ...companyLogos].map((logo, idx) => (
                    <img
                      key={`r1-${idx}`}
                      src={logo.src}
                      alt={logo.name}
                      className="h-7 sm:h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </motion.div>
              </div>

              {/* Row 2: Rightward Infinite Marquee */}
              <div className="flex overflow-hidden w-full">
                <motion.div
                  className="flex gap-14 shrink-0 items-center pr-14 will-change-transform"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {[...companyLogos, ...companyLogos].map((logo, idx) => (
                    <img
                      key={`r2-${idx}`}
                      src={logo.src}
                      alt={logo.name}
                      className="h-7 sm:h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          9. VIDEO MODAL (AnimatePresence)
         ========================================== */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src="https://cdn.jiro.build/Landing%20Page/videos/Website%20header%20video%20(convert%20version).mp4"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
