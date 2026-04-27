import React from "react";
import "./header.css";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import ParticlesComponent from "../particle";
import { ArrowRight, BookOpen, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

/* Top contributors for the social-proof bar.
   Update these with real contributor usernames + avatar URLs when needed. */
const CONTRIBUTOR_AVATARS = [
  {
    login: "sanjay-kv",
    avatar: "https://avatars.githubusercontent.com/u/30715153?v=4",
  },
  {
    login: "octocat",
    avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
  },
  {
    login: "hubot",
    avatar: "https://avatars.githubusercontent.com/u/9919?v=4",
  },
  {
    login: "torvalds",
    avatar: "https://avatars.githubusercontent.com/u/1024025?v=4",
  },
  {
    login: "gaearon",
    avatar: "https://avatars.githubusercontent.com/u/810438?v=4",
  },
];

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

        {/* Social proof avatars bar */}
        <motion.div className="chh__hero-social-proof" {...fadeUp(0.28)}>
          <div className="chh__hero-avatars">
            {CONTRIBUTOR_AVATARS.map((c) => (
              <img
                key={c.login}
                src={c.avatar}
                alt={c.login}
                className="chh__hero-avatar"
                loading="lazy"
              />
            ))}
          </div>
          <div className="chh__hero-social-text">
            <div className="chh__hero-social-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            <span>
              Joined by <strong>500+</strong> open-source contributors
            </span>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div className="chh__hero-stats" {...fadeUp(0.35)}>
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
    </section>
  );
};

export default Header;
