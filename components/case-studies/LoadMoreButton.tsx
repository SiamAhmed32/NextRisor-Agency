"use client";

import { motion } from "framer-motion";

interface LoadMoreButtonProps {
  onClick: () => void;
  hasMore: boolean;
  isLoading?: boolean;
}

export default function LoadMoreButton({
  onClick,
  hasMore,
  isLoading = false,
}: LoadMoreButtonProps) {
  if (!hasMore) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-white/60 text-sm mt-8"
      >
        You've reached the end
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center mt-12"
    >
      <button
        onClick={onClick}
        disabled={isLoading}
        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-transparent"
      >
        {isLoading ? "Loading..." : "Load more case studies"}
      </button>
    </motion.div>
  );
}

