"use client";

import { motion, AnimatePresence } from "framer-motion";
import CaseStudyCard, { CaseStudy } from "./CaseStudyCard";

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

