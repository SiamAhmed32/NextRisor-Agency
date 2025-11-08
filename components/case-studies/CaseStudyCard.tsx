"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  category: string;
  tags: string[];
  impact: string;
  summary: string;
  slug: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const getGradientStyle = (gradientString: string) => {
  const gradients: { [key: string]: string } = {
    "blue-purple": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    "green-teal": "linear-gradient(135deg, #10B981 0%, #14B8A6 100%)",
    "pink-rose": "linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)",
    "cyan-blue": "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
  };
  return gradients[gradientString] || gradients["blue-purple"];
};

// Get category icon/logo text
const getCategoryIcon = (category: string): string => {
  const icons: { [key: string]: string } = {
    "React Native": "⚛️",
    "MERN Stack": "🔷",
    "Django": "🐍",
    "WordPress / CMS": "📝",
    "Shopify": "🛍️",
  };
  return icons[category] || "🚀";
};

// Get category abbreviation for logo
const getCategoryAbbr = (category: string): string => {
  if (category.includes("React Native")) return "RN";
  if (category.includes("MERN")) return "MERN";
  if (category.includes("Django")) return "DJ";
  if (category.includes("WordPress")) return "WP";
  if (category.includes("Shopify")) return "SH";
  return "CS";
};

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-50px" });
  const isGradient = caseStudy.imageUrl?.startsWith("gradient:") ?? false;

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
        delay: index * 0.05,
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative rounded-3xl overflow-hidden ring-1 ring-white/10 hover:ring-primary-500/40 transition-all duration-500 h-full min-h-[320px] flex flex-col"
    >
      {/* Background Image/Gradient */}
      <div className="absolute inset-0">
        {isGradient ? (
          <>
            <div
              className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
              style={{
                background: getGradientStyle(
                  caseStudy.imageUrl.replace("gradient:", "")
                ),
              }}
            />
            {/* Logo/Text Overlay for gradients */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="text-7xl mb-3 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                  {getCategoryIcon(caseStudy.category)}
                </div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                  <span className="text-white/40 text-2xl font-bold tracking-wider group-hover:text-white/60 transition-colors">
                    {getCategoryAbbr(caseStudy.category)}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <img
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement("div");
                fallback.className = "w-full h-full";
                fallback.style.background = getGradientStyle("blue-purple");
                parent.appendChild(fallback);
              }
            }}
          />
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 mt-auto min-h-[320px] flex flex-col justify-end">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-sm">
            {caseStudy.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold mb-1 line-clamp-2">
          {caseStudy.title}
        </h3>

        {/* Subtitle */}
        <p className="text-white/80 text-sm mt-1 line-clamp-2">
          {caseStudy.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {caseStudy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-5">
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            aria-label={`Read case study: ${caseStudy.title}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-ink-900 text-sm font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Read case study
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Glow on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl"
        initial={{ boxShadow: "0 0 0 0 rgba(124,45,255,0)" }}
        whileHover={{
          boxShadow:
            "0 0 0 2px rgba(124,45,255,0.35), 0 20px 60px rgba(124,45,255,0.15)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
    </motion.article>
  );
}

