import React from "react";
import { motion } from "framer-motion";
import "./PageHero.css";

interface PageHeroProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  /** Optional extra content rendered below the subtitle */
  children?: React.ReactNode;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

/**
 * Shared full-width page hero — dot-grid + radial-fade background,
 * orange badge pill, large heading with optional gradient accent,
 * and a subtitle. Used on Blogs, Courses, Community, etc.
 */
export default function PageHero({
  badge,
  title,
  subtitle,
  children,
}: PageHeroProps): React.JSX.Element {
  return (
    <section className="ph__hero">
      <div className="ph__hero-glow" />
      <div className="ph__hero-inner">
        {badge && (
          <motion.div {...fadeUp(0)}>
            <span className="ph__hero-badge">
              <span className="ph__hero-badge-dot" />
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1 className="ph__hero-heading" {...fadeUp(0.08)}>
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p className="ph__hero-subtitle" {...fadeUp(0.16)}>
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div {...fadeUp(0.22)}>{children}</motion.div>
        )}
      </div>
    </section>
  );
}
