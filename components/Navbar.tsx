"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StaggeredMenu } from "@/components/ui/StaggeredMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-ink-900 backdrop-blur border-b border-white/10"
            : "bg-ink-900 lg:bg-transparent backdrop-blur border-b border-white/10"
        }`}
      >
        <div className="container h-16 flex items-center justify-between px-4 lg:px-0">
          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-2 group">
            <motion.div
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-primary-500/25"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <img
                src="/images/logo.jpg"
                alt="Next Riser Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <span className="font-semibold tracking-wide text-sm lg:text-base">
              Next <span className="text-primary-400">Riser</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {["Home", "Services", "Case Studies", "Contact"].map((item) => {
              const href = item === "Home" 
                ? "/" 
                : item === "Case Studies"
                ? "/#case-studies"
                : `/#${item.toLowerCase().replace(" ", "-")}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="relative opacity-85 hover:opacity-100 transition group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-400 to-accent-500 transition-all group-hover:w-full" />
                </a>
              );
            })}
            <a
              href="/#contact"
              className="btn-primary shadow-[0_8px_24px_rgba(124,45,255,0.35)]"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Button - Hidden, StaggeredMenu handles it */}
          <div className="lg:hidden w-10 h-10" />
        </div>
      </header>

      {/* GSAP Staggered Menu */}
      <StaggeredMenu
        isFixed
        position="right"
        items={[
          { label: "Home", ariaLabel: "Home", link: "/" },
          { label: "Services", ariaLabel: "Services", link: "/#services" },
          { label: "Case Studies", ariaLabel: "Case Studies", link: "/#case-studies" },
          { label: "Contact", ariaLabel: "Contact", link: "/#contact" },
        ]}
        socialItems={[
          { label: "Facebook", link: "https://www.facebook.com/nextriser" },
          { label: "Instagram", link: "https://www.instagram.com/nextriser_it?igsh=cjFvbTdkMmZyaXJw" },
        ]}
        accentColor="#8A33FF"
        colors={["#0c0915", "#121022", "#181532"]}
        displayItemNumbering={true}
        logoUrl="/images/logo.jpg"
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={false}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
      />
    </>
  );
}

