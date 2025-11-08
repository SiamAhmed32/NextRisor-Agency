"use client";

import { motion } from "framer-motion";

interface CaseStudyFilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CaseStudyFilterBar({
  categories,
  activeCategory,
  onCategoryChange,
}: CaseStudyFilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap sm:overflow-x-auto pb-2 mb-12"
    >
      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {category}
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-primary-500 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

