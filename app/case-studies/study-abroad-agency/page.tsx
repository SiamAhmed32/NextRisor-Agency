"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function StudyAbroadAgencyCaseStudy() {
  return (
    <main className="min-h-screen bg-ink-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Hero Image Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-800/40 to-indigo-900/60" />
        </div>

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-500/30 to-indigo-600/30" />
          <div className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-indigo-500/30 to-blue-600/30" />
        </div>

        <div className="container relative z-10">
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
              Global Education <span className="text-primary-400">Agency</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Bridging students and universities through design, data, and digital strategy
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="#overview"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-400 to-accent-500 text-white font-medium hover:from-primary-500 hover:to-accent-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
            >
              Explore Platform
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Project Overview Grid */}
      <section id="overview" className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: "Client", value: "Global Education Agency" },
              { label: "Industry", value: "Education / Consultancy" },
              { label: "Services", value: "UX Strategy, Web Design, Platform Development, SEO" },
              { label: "Platform", value: "Web & Mobile" },
              { label: "Timeline", value: "8 Weeks" },
              { label: "Tech Stack", value: "Next.js, WordPress, Node.js" },
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
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Challenge</h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-primary-400 to-accent-500 mb-8 origin-left"
              />
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p>
                  The agency's legacy system relied on manual lead tracking and offline forms.
                </p>
                <p>
                  With thousands of student inquiries, the team struggled with response time, document handling, and application visibility.
                </p>
                <p>
                  The challenge was to digitize the process without losing the human touch — keeping the counselor–student relationship personal and accessible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src="https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Student counselor meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent backdrop-blur-[2px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent" />
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
                  We restructured the digital ecosystem — connecting marketing, counseling, and operations under one CMS-driven experience.
                </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                  Every page was optimized for discovery, every interaction streamlined for action.
                </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                  Through data-led UX and automation, we turned manual workflows into intelligent journeys.
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
            <p className="text-lg text-white/70">
              A comprehensive platform that streamlines the entire study abroad journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Homepage Design", 
                image: "https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Animated header with clear CTAs and inquiry forms"
              },
              { 
                title: "University Search", 
                image: "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Intuitive search module for partner universities"
              },
              { 
                title: "Application Dashboard", 
                image: "https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Real-time progress tracking for students and counselors"
              },
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
                  <div className="p-6">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.description}</p>
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
              The transformation boosted engagement and efficiency across the board.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "47%", label: "Conversion Growth" },
              { value: "3×", label: "Faster Processing" },
              { value: "2×", label: "Organic Traffic" },
              { value: "80+", label: "University Partners" },
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
              "Our students now complete applications twice as fast. This platform gave our counselors real-time visibility and our clients trust."
            </p>
            <div className="text-white/60">
              <div className="font-semibold text-white">CEO</div>
              <div>Global Education Agency</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-800/20 to-blue-900/20" />
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
              Ready to transform your <span className="text-primary-400">digital presence</span>?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Let's build your next education platform.
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

