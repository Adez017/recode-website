import React from "react";
import { motion } from "framer-motion";
import { useSafeColorMode } from "../../utils/useSafeColorMode";
import {
  Code2,
  GitMerge,
  BookOpen,
  Users,
  Trophy,
  Zap,
} from "lucide-react";
import "./FeaturesSection.css";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Code2 size={22} />,
    title: "Practical Tutorials",
    description:
      "Hands-on tutorials covering Python, SQL, GitHub, Docker, Next.js and more — built for current industry standards.",
  },
  {
    icon: <GitMerge size={22} />,
    title: "Open-Source First",
    description:
      "Contribute to real projects. Gain meaningful GitHub experience and build a portfolio that stands out.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Structured Courses",
    description:
      "Step-by-step learning paths from beginner to advanced, including video playlists, docs, and quizzes.",
  },
  {
    icon: <Users size={22} />,
    title: "Inclusive Community",
    description:
      "Join thousands of developers on Discord, GitHub Discussions, and social channels. Learn together, grow together.",
  },
  {
    icon: <Trophy size={22} />,
    title: "Earn While Learning",
    description:
      "Weekly GitHub sponsorship program — contributors earn ₹100–₹500 for impactful open-source work.",
  },
  {
    icon: <Zap size={22} />,
    title: "Interview Ready",
    description:
      "Curated technical and behavioral interview prep resources to help you land your next role confidently.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeaturesSection: React.FC = () => {
  const { isDark } = useSafeColorMode();

  return (
    <section className={`features-section ${isDark ? "features-section--dark" : ""}`}>
      <div className="features-section__inner">
        {/* Section Header */}
        <motion.div
          className="features-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="features-section__badge">✦ Why recode hive?</span>
          <h2 className="features-section__title">
            Everything you need to{" "}
            <span className="features-section__title-accent">grow as a developer</span>
          </h2>
          <p className="features-section__subtitle">
            From your first open-source contribution to landing a job — recode hive
            has the resources, community, and opportunities to get you there.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="features-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="features-section__card"
              variants={cardVariants}
            >
              <div className="features-section__card-icon">{feature.icon}</div>
              <h3 className="features-section__card-title">{feature.title}</h3>
              <p className="features-section__card-desc">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
