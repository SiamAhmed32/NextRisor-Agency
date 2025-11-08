"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VioletBangladeshCaseStudy() {
  return (
    <main className="min-h-screen bg-ink-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-violet-500/30 to-purple-600/30" />
          <div className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-500/30 to-violet-600/30" />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              CASE STUDY
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Violet <span className="text-primary-400">Bangladesh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/70 mb-8 max-w-2xl mx-auto"
            >
              Reimagining a modern lifestyle brand through design & technology
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://violetbangladesh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-400 to-accent-500 text-white font-medium hover:from-primary-500 hover:to-accent-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
            >
              Visit Live Site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Project Overview Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: "Client", value: "Violet Bangladesh" },
              { label: "Industry", value: "Fashion & Lifestyle" },
              { label: "Services", value: "UI/UX, WordPress, WooCommerce" },
              { label: "Platform", value: "Web & Mobile" },
              { label: "Timeline", value: "3 weeks" },
              { label: "Tech Stack", value: "WordPress, WooCommerce, Tailwind CSS" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-sm text-white/60 mb-2">{item.label}</div>
                <div className="text-white font-semibold">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Challenge</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-primary-400 to-accent-500 mb-8 origin-left"
            />
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              The client's previous site struggled with inconsistent branding, slow load times, and poor mobile UX.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our challenge was to build a cohesive brand presence that translated seamlessly from Instagram to storefront — while keeping page speed under 1.5 seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-violet-500/10 to-transparent" />
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Approach</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-primary-400 to-accent-500 mb-8 origin-left"
            />
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We crafted a modular WordPress architecture using custom Gutenberg blocks and WooCommerce APIs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Each UI block was reusable, enabling the marketing team to publish dynamic content without code.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Design iterations focused on aesthetic minimalism, performance, and story-first layout.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section - Visual Showcase */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Solution</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-primary-400 to-accent-500 mb-8 origin-center mx-auto w-32"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Homepage", image: "/brands/violet-bangladesh.png" },
              { title: "Product Grid", image: "/brands/violet-bangladesh.png" },
              { title: "Checkout", image: "/brands/violet-bangladesh.png" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-primary-500/40 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-center">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Impact</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-primary-400 to-accent-500 mb-8 origin-center mx-auto w-32"
            />
            <p className="text-lg text-white/80">
              After launch, the new site achieved remarkable results:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "3×", label: "Faster Load Time" },
              { value: "25%", label: "Checkout Increase" },
              { value: "45%", label: "Returning Visitors" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="text-5xl lg:text-6xl font-bold text-primary-400 mb-4"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto p-8 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary-400 mb-6"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-6">
              "The new design perfectly reflects our brand. Our customers love the faster experience."
            </p>
            <div className="text-white/60">
              <div className="font-semibold text-white">Marketing Lead</div>
              <div>Violet Bangladesh</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-900/20" />
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to transform your <span className="text-primary-400">digital experience</span>?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Let's create something extraordinary together.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-400 to-accent-500 text-white font-medium hover:from-primary-500 hover:to-accent-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

