"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import CaseStudyFilterBar from "./CaseStudyFilterBar";
import CaseStudyGrid from "./CaseStudyGrid";
import LoadMoreButton from "./LoadMoreButton";
import { CaseStudy } from "./CaseStudyCard";
import caseStudiesData from "@/data/case-studies.json";

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [caseStudies] = useState<CaseStudy[]>(caseStudiesData as CaseStudy[]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(caseStudies.map((d) => d.category))
    );
    return ["All", ...uniqueCategories];
  }, [caseStudies]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") {
      return caseStudies;
    }
    return caseStudies.filter((d) => d.category === activeCategory);
  }, [activeCategory, caseStudies]);

  const visibleItems = useMemo(() => {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const hasMore = visibleCount < filtered.length;

  return (
    <section id="case-studies" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-500/30 to-purple-600/30" />
        <div className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-green-500/30 to-teal-600/30" />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-400" />
            CASE STUDIES
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Outcomes we've <span className="text-primary-400">shipped</span>
          </h2>
          <p className="text-lg text-white/70 mt-4">
            Real problems solved with the stacks we love — React Native, MERN,
            Django, WordPress/CMS, and Shopify.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <CaseStudyFilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setVisibleCount(6); // Reset visible count on filter change
          }}
        />

        {/* Grid */}
        <CaseStudyGrid caseStudies={visibleItems} />

        {/* Load More Button */}
        <LoadMoreButton
          onClick={handleLoadMore}
          hasMore={hasMore}
        />
      </div>
    </section>
  );
}

