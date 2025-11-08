"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface MenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  isFixed?: boolean;
  position?: "left" | "right";
  items: MenuItem[];
  socialItems?: SocialItem[];
  accentColor?: string;
  colors?: string[];
  displayItemNumbering?: boolean;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export function StaggeredMenu({
  isFixed = true,
  position = "right",
  items,
  socialItems = [],
  accentColor = "#8b5cf6",
  colors = ["#1e1b4b", "#312e81", "#5b21b6"],
  displayItemNumbering = false,
  logoUrl,
  menuButtonColor = "#fff",
  openMenuButtonColor = "#000",
  changeMenuColorOnOpen = true,
  onMenuOpen,
  onMenuClose,
}: StaggeredMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    const overlay = overlayRef.current;
    if (!menu || !overlay) return;

    // Animate overlay
    gsap.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    // Animate menu items
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: position === "right" ? 100 : -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
        }
      );
    });

    // Lock body scroll
    document.body.style.overflow = "hidden";

    onMenuOpen?.();

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, position, onMenuOpen]);

  const handleClose = () => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;
    if (!menu || !overlay) return;

    // Animate out
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.to(item, {
        opacity: 0,
        x: position === "right" ? 100 : -100,
        duration: 0.4,
        delay: (itemsRef.current.length - index - 1) * 0.05,
        ease: "power3.in",
      });
    });

    setTimeout(() => {
      setIsOpen(false);
      onMenuClose?.();
    }, 400);
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={handleToggle}
        className="lg:hidden fixed top-3 right-3 z-[100] p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        style={{
          color: isOpen && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor,
        }}
      >
        <motion.div
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </motion.div>
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Background */}
            <motion.div
              ref={overlayRef}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-ink-900/95 backdrop-blur-md"
              onClick={handleClose}
            />

            {/* Menu Panel */}
            <motion.div
              ref={menuRef}
              initial={{ x: position === "right" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: position === "right" ? "100%" : "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed top-0 ${position === "right" ? "right-0" : "left-0"} h-full w-full sm:w-96 z-[9999] bg-ink-900 ${position === "right" ? "border-l" : "border-r"} border-white/10 overflow-y-auto`}
            >
              <div className="flex flex-col h-full p-8">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between mb-12">
                  {logoUrl ? (
                    <div className="h-8 w-8 lg:h-10 lg:w-10">
                      <img
                        src={logoUrl}
                        alt="Logo"
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  ) : (
                    <div className="font-semibold text-white text-sm">
                      Menu
                    </div>
                  )}
                  <button
                    onClick={handleClose}
                    className="ml-auto p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                    aria-label="Close menu"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 space-y-2">
                  {items.map((item, index) => (
                    <div
                      key={item.label}
                      ref={(el) => {
                        if (el) itemsRef.current[index] = el;
                      }}
                      className="opacity-0"
                    >
                      <a
                        href={item.link}
                        onClick={handleClose}
                        className="group flex items-center gap-4 py-4 text-2xl font-semibold text-white hover:text-primary-400 transition-colors"
                        aria-label={item.ariaLabel || item.label}
                      >
                        {displayItemNumbering && (
                          <span className="text-white/40 text-lg font-normal">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        )}
                        <span>{item.label}</span>
                        <motion.span
                          className="ml-auto opacity-0 group-hover:opacity-100"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                      </a>
                    </div>
                  ))}
                </nav>

                {/* Social Links */}
                {socialItems.length > 0 && (
                  <div className="mt-auto pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-4">
                      {socialItems.map((social) => (
                        <a
                          key={social.label}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-primary-400 transition-colors text-sm"
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

