import React, { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from "framer-motion";
import ScrollBottomToTop from "@site/src/components/scroll/bottom-to-top";
import { CommunityStatsProvider } from "@site/src/lib/statsProvider";
import { LandingCommunity } from "@site/src/components/Community";
import "./community.css";

interface CommunityChannel {
  id: string;
  title: string;
  icon: string;
  description: string;
  buttonText: string;
  url: string;
  color: string;
}

interface ContributeCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
  details: string[];
  links: { text: string; url: string }[];
  color: string;
}

const communityChannels: CommunityChannel[] = [
  {
    id: "discord",
    title: "Discord",
    icon: "💬",
    description:
      "Chat with fellow developers, get help with your projects, and share your knowledge in real time.",
    buttonText: "Join Discord",
    url: "https://discord.gg/b6ffxhXRNH",
    color: "#5865F2",
  },
  {
    id: "github",
    title: "GitHub",
    icon: "🐙",
    description:
      "Explore our open-source repos, contribute code, report bugs, and collaborate on exciting projects.",
    buttonText: "View GitHub",
    url: "https://github.com/recodehive?view_as=public",
    color: "#2e8555",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    icon: "📱",
    description:
      "Stay connected on the go. Get updates, share resources, and network with community members.",
    buttonText: "Join WhatsApp",
    url: "https://chat.whatsapp.com/Izl2yfbFlmY8CExjnIpNkX?mode=ems_copy_t",
    color: "#25D366",
  },
  {
    id: "discussions",
    title: "Discussions",
    icon: "🗣️",
    description:
      "Ask questions, share ideas, and engage in thoughtful conversations with the community.",
    buttonText: "Join Discussions",
    url: "https://github.com/recodehive/recode-website/discussions",
    color: "#8b5cf6",
  },
];

const contributeCards: ContributeCard[] = [
  {
    id: "code",
    title: "Code",
    icon: "💻",
    description: "If you're a developer, you can:",
    items: [
      "Access coding standards 🧑‍💻",
      "Find debugging tips 🐞",
      "Propose new features 🚀",
    ],
    details: [
      "Access coding standards and setup instructions to streamline your work with the team's codebase.",
      "Find tips for debugging, troubleshooting common errors, and submitting clear bug reports.",
      "Read about how to propose new features, collaborate on pull requests, and review peer code.",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/recodehive?view_as=public" },
      {
        text: "Join our organization",
        url: "https://github.com/recodehive/Support/issues/new?assignees=&labels=invite+me+to+the+community&projects=&template=invitation.yml&title=Please+invite+me+to+the+Recode-Hive+GitHub+Community+Organization",
      },
    ],
    color: "#8b5cf6",
  },
  {
    id: "documentation",
    title: "Documentation",
    icon: "📚",
    description: "If you're a writer or educator, you can:",
    items: [
      "Improve documentation 🖋️",
      "Structure tutorials 📚",
      "Translate content 🌍",
    ],
    details: [
      "Explore detailed guides for improving existing documentation, including style and terminology tips.",
      "Learn how to structure tutorials, add examples, and make learning resources more accessible.",
      "See guidelines for translating technical content into different languages or for various backgrounds.",
    ],
    links: [{ text: "GitHub Docs", url: "https://www.recodehive.com/docs" }],
    color: "#f59e0b",
  },
  {
    id: "community",
    title: "Community",
    icon: "🤝",
    description: "If you're a community-minded person, you can:",
    items: [
      "Connect with members 👥",
      "Support newcomers 💬",
      "Share resources 📝",
    ],
    details: [
      "Connect with fellow members by joining active discussions in forums and chats.",
      "Offer support to newcomers by guiding them through onboarding and answering beginner questions.",
      "Share resources, tutorials, and best practices to help others grow.",
    ],
    links: [
      { text: "Discord", url: "https://discord.gg/b6ffxhXRNH" },
      {
        text: "WhatsApp",
        url: "https://chat.whatsapp.com/Izl2yfbFlmY8CExjnIpNkX?mode=ems_copy_t",
      },
    ],
    color: "#10b981",
  },
  {
    id: "get-started",
    title: "Get Started",
    icon: "🚀",
    description: "To begin your journey with recode hive:",
    items: [
      "Sign up and introduce yourself 👋",
      "Discover key repositories 🔍",
      "Browse beginner tasks 📋",
    ],
    details: [
      "Learn how to sign up and introduce yourself in the welcome channels on Discord or Slack.",
      "Discover key open source repositories and find out how you can contribute, regardless of experience level.",
      "Browse a list of beginner-friendly tasks and guides to help select your first area of involvement.",
    ],
    links: [
      { text: "Discord", url: "https://discord.gg/b6ffxhXRNH" },
      {
        text: "WhatsApp",
        url: "https://chat.whatsapp.com/Izl2yfbFlmY8CExjnIpNkX?mode=ems_copy_t",
      },
      { text: "GitHub", url: "https://github.com/recodehive" },
    ],
    color: "#6366f1",
  },
];

export default function CommunityPage(): React.ReactElement {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (itemId: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  return (
    <Layout
      title="recode hive Community"
      description="Welcome to recode hive — a community built for everyone to learn, share, and grow."
    >
      <div className="community-page">
        <Head>
          <meta
            property="og:title"
            content="recode hive Community - recode hive"
          />
          <meta
            property="og:description"
            content="Join our thriving community of developers, designers, and creators."
          />
        </Head>

        <main className="community-main">
          {/* Hero Section */}
          <section className="community-hero">
            <div className="community-hero-background">
              <div className="hero-particle"></div>
              <div className="hero-particle"></div>
              <div className="hero-particle"></div>
            </div>
            <div className="community-container">
              <motion.div
                className="community-hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="hero-badge">🐝 Community</div>
                <h1 className="community-hero-title">
                  Learn, Share &amp; Grow
                  <br />
                  <span className="hero-title-highlight">Together</span>
                </h1>
                <p className="community-hero-description">
                  Welcome to <strong>recode hive</strong> — a community for{" "}
                  <span className="highlight">developers 👨‍💻</span>,{" "}
                  <span className="highlight">designers 🎨</span>, and everyone
                  curious about new ideas 💡. Join thousands of members who
                  learn, share, and grow together.
                </p>
                <div className="hero-actions">
                  <a
                    href="https://discord.gg/b6ffxhXRNH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn hero-btn-primary"
                  >
                    Join Community
                  </a>
                  <a
                    href="https://github.com/recodehive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn hero-btn-secondary"
                  >
                    Explore GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Community Channels Section */}
          <section className="community-channels-section">
            <div className="community-container">
              <motion.div
                className="section-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="section-heading-title">
                  Connect with the Community
                </h2>
                <p className="section-heading-description">
                  Find your space in our community. Join the conversation
                  wherever you feel most at home.
                </p>
              </motion.div>

              <div className="channels-grid">
                {communityChannels.map((channel, index) => (
                  <motion.a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -4 }}
                    style={
                      {
                        "--channel-color": channel.color,
                      } as React.CSSProperties
                    }
                  >
                    <div className="channel-icon-wrapper">
                      <span className="channel-icon">{channel.icon}</span>
                    </div>
                    <h3 className="channel-title">{channel.title}</h3>
                    <p className="channel-description">
                      {channel.description}
                    </p>
                    <span className="channel-btn">{channel.buttonText} →</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Community Stats Section */}
          <section className="community-stats-section">
            <div className="community-container">
              <motion.div
                className="section-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="section-heading-title">
                  Our Community in Numbers
                </h2>
                <p className="section-heading-description">
                  See the impact our amazing community is making across open
                  source.
                </p>
              </motion.div>
              <CommunityStatsProvider>
                <LandingCommunity />
              </CommunityStatsProvider>
            </div>
          </section>

          {/* Contribute Section */}
          <section className="community-contribute-section">
            <div className="community-container">
              <motion.div
                className="section-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="section-heading-title">How You Can Contribute</h2>
                <p className="section-heading-description">
                  There are many ways to get involved in recode hive. Find what
                  excites you and start contributing!
                </p>
              </motion.div>

              <div className="contribute-grid">
                {contributeCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    className="contribute-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="contribute-card-header">
                      <div
                        className="contribute-card-icon"
                        style={{ backgroundColor: card.color }}
                      >
                        {card.icon}
                      </div>
                      <h3 className="contribute-card-title">{card.title}</h3>
                    </div>

                    <p className="contribute-card-description">
                      {card.description}
                    </p>

                    <ul className="contribute-card-items">
                      {card.items.map((item, itemIndex) => (
                        <React.Fragment key={itemIndex}>
                          <li
                            className="contribute-card-item"
                            onClick={() =>
                              toggleDropdown(`${card.id}-${itemIndex}`)
                            }
                          >
                            <span
                              className={`item-arrow ${openDropdowns.includes(`${card.id}-${itemIndex}`) ? "rotate" : ""}`}
                            >
                              ▶
                            </span>
                            {item}
                          </li>

                          {openDropdowns.includes(
                            `${card.id}-${itemIndex}`,
                          ) && (
                            <motion.div
                              className="contribute-item-details"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              <p>{card.details[itemIndex]}</p>
                            </motion.div>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>

                    {card.links.length > 0 && (
                      <div className="contribute-card-links">
                        {card.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            className="contribute-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={
                              {
                                "--link-color": card.color,
                              } as React.CSSProperties
                            }
                          >
                            {link.text} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA / Thank You Section */}
          <section className="community-cta-section">
            <div className="community-container">
              <motion.div
                className="cta-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="cta-icons">
                  <span className="cta-icon">💚</span>
                  <span className="cta-icon">🎉</span>
                  <span className="cta-icon">✨</span>
                </div>
                <h2 className="cta-title">
                  Thank you for being part of recode hive!
                </h2>
                <p className="cta-description">
                  We're thrilled to have you here and can't wait to{" "}
                  <span className="highlight collaborate">collaborate</span>,{" "}
                  <span className="highlight learn">learn</span>, and{" "}
                  <span className="highlight grow">grow</span> — together. 🌱
                </p>

                <blockquote className="cta-quote">
                  <span className="cta-quote-icon">🐝</span>
                  <em>Let's make this community the best it can bee!</em>
                </blockquote>

                <div className="cta-actions">
                  <a
                    href="https://discord.gg/b6ffxhXRNH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn hero-btn-primary"
                  >
                    Get Started Now
                  </a>
                  <a
                    href="https://github.com/recodehive/recode-website/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn hero-btn-secondary"
                  >
                    💬 Reach Out Anytime
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <ScrollBottomToTop />
      </div>
    </Layout>
  );
}
