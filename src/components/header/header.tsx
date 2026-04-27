import React from "react";
import "./header.css";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import ParticlesComponent from "../particle";
import FloatingContributors from "../FloatingContributors";
import { ArrowRight, BookOpen } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const Header: React.FC = () => {
  return (
    <section className="chh__hero">
      <ParticlesComponent />
      {/* Background glow blob */}
      <div className="chh__hero-glow" />

      <div className="chh__hero-inner">
        {/* Announcement Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="chh__hero-badge">
            <span className="chh__hero-badge-dot" />
            🚀 Open Source · Learn · Build · Grow
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 className="chh__hero-heading" {...fadeUp(0.08)}>
          Level Up Skills with{" "}
          <span className="chh__hero-heading-accent">recode hive</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="chh__hero-subtitle" {...fadeUp(0.16)}>
          recode hive helps you get started with open-source contributions. An
          inclusive community from around the world — earn while learning,
          everything made simpler and more practical.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="chh__hero-ctas" {...fadeUp(0.22)}>
          <Link to="/get-started/" className="chh__hero-btn-primary">
            Get Started <ArrowRight size={16} />
          </Link>
          <Link to="/courses" className="chh__hero-btn-secondary">
            <BookOpen size={16} /> Browse Courses
          </Link>
        </motion.div>

        {/* Stats Strip */}
        <motion.div className="chh__hero-stats" {...fadeUp(0.3)}>
          <div className="chh__hero-stat-item">
            <span className="chh__hero-stat-number">1000+</span>
            <span className="chh__hero-stat-label">Projects</span>
          </div>
          <div className="chh__hero-stats-divider" />
          <div className="chh__hero-stat-item">
            <span className="chh__hero-stat-number">500+</span>
            <span className="chh__hero-stat-label">Contributors</span>
          </div>
          <div className="chh__hero-stats-divider" />
          <div className="chh__hero-stat-item">
            <span className="chh__hero-stat-number">Free</span>
            <span className="chh__hero-stat-label">Open Source</span>
          </div>
          <div className="chh__hero-stats-divider" />
          <div className="chh__hero-stat-item">
            <span className="chh__hero-stat-number">₹100–₹500</span>
            <span className="chh__hero-stat-label">Weekly Sponsorship</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Contributors below stats */}
      <motion.div className="chh__hero-contributors" {...fadeUp(0.38)}>
        <FloatingContributors headerEmbedded={true} />
      </motion.div>
    </section>
  );
};

export default Header;
