"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommunityPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var Head_1 = __importDefault(require("@docusaurus/Head"));
var framer_motion_1 = require("framer-motion");
var bottom_to_top_1 = __importDefault(require("@site/src/components/scroll/bottom-to-top"));
require("./community.css");
var contributionSections = [
    {
        id: 'code',
        title: 'Code',
        icon: '💻',
        description: "If you're a developer, you can:",
        items: [
            'Access coding standards 🧑‍💻',
            'Find debugging tips 🐞',
            'Propose new features 🚀'
        ],
        details: [
            'Access coding standards and setup instructions to streamline your work with the team\'s codebase.',
            'Find tips for debugging, troubleshooting common errors, and submitting clear bug reports.',
            'Read about how to propose new features, collaborate on pull requests, and review peer code.'
        ],
        links: [
            { text: 'GitHub', url: 'https://github.com/recodehive' },
            { text: 'GitLab', url: 'https://gitlab.com' }
        ],
        color: '#8b5cf6'
    },
    {
        id: 'documentation',
        title: 'Documentation',
        icon: '📚',
        description: "If you're a writer or educator, you can:",
        items: [
            'Improve documentation 🖋️',
            'Structure tutorials 📚',
            'Translate content 🌍'
        ],
        details: [
            'Explore detailed guides for improving existing documentation, including style and terminology tips.',
            'Learn how to structure tutorials, add examples, and make learning resources more accessible.',
            'See guidelines for translating technical content into different languages or for various backgrounds.'
        ],
        links: [
            { text: 'GitHub Docs', url: 'https://www.recodehive.com/docs' }
        ],
        color: '#f59e0b'
    },
    {
        id: 'community',
        title: 'Community',
        icon: '🤝',
        description: "If you're a community-minded person, you can:",
        items: [
            'Connect with members 👥',
            'Support newcomers 💬',
            'Share resources 📝'
        ],
        details: [
            'Connect with fellow members by joining active discussions in forums and chats.',
            'Offer support to newcomers by guiding them through onboarding and answering beginner questions.',
            'Share resources, tutorials, and best practices to help others grow.'
        ],
        links: [
            { text: 'Discord', url: 'https://discord.com/invite/w2V2aH6U' },
            { text: 'Whatsapp', url: 'https://chat.whatsapp.com/Izl2yfbFlmY8CExjnIpNkX?mode=ems_copy_t' }
        ],
        color: '#10b981'
    },
    {
        id: 'get-started',
        title: 'Get Started',
        icon: '🚀',
        description: 'To begin your journey with RecodeHive:',
        items: [
            'Sign up and introduce yourself 👋',
            'Discover key repositories 🔍',
            'Browse beginner tasks 📋'
        ],
        details: [
            'Learn how to sign up and introduce yourself in the welcome channels on Discord or Slack.',
            'Discover key open source repositories and find out how you can contribute, regardless of experience level.',
            'Browse a list of beginner-friendly tasks and guides to help select your first area of involvement.'
        ],
        links: [
            { text: 'Discord', url: 'https://discord.com/invite/w2V2aH6U' },
            { text: 'Whatsapp', url: 'https://chat.whatsapp.com/Izl2yfbFlmY8CExjnIpNkX?mode=ems_copy_t' },
            { text: 'GitHub', url: 'https://github.com/recodehive' }
        ],
        color: '#6366f1'
    }
];
var tableOfContents = [
    { id: 'how-you-can-contribute', title: 'How You Can Contribute', icon: '⚡' },
    { id: 'code', title: 'Code', icon: '💻' },
    { id: 'documentation', title: 'Documentation', icon: '📚' },
    { id: 'community', title: 'Community', icon: '🤝' },
    { id: 'get-started', title: 'Get Started', icon: '🚀' },
    { id: 'thank-you', title: 'Thank You', icon: '💚' }
];
function CommunityPage() {
    var _a = (0, react_1.useState)(['how-you-can-contribute']), activeSections = _a[0], setActiveSections = _a[1];
    var _b = (0, react_1.useState)(null), selectedSection = _b[0], setSelectedSection = _b[1];
    var _c = (0, react_1.useState)([]), openDropdowns = _c[0], setOpenDropdowns = _c[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            var sections = tableOfContents.map(function (item) { return item.id; });
            var midpoint = window.innerHeight * 0.4;
            var visible = [];
            sections.forEach(function (id) {
                var el = document.getElementById(id);
                if (el) {
                    var rect = el.getBoundingClientRect();
                    if (rect.top <= midpoint && rect.bottom >= midpoint) {
                        visible.push(id);
                    }
                }
            });
            if (visible.length === 1) {
                var current_1 = visible[0];
                var element = document.getElementById(current_1);
                if (element) {
                    var rowTop_1 = element.offsetTop;
                    var siblings = sections.filter(function (id) {
                        var sib = document.getElementById(id);
                        return sib && sib.offsetTop === rowTop_1;
                    });
                    visible.push.apply(visible, siblings.filter(function (id) { return id !== current_1; }));
                }
            }
            if (visible.length > 0) {
                setActiveSections(visible);
                if (selectedSection && !visible.includes(selectedSection)) {
                    setSelectedSection(null);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, [selectedSection]);
    var scrollToSection = function (sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            var offset = 80;
            var top_1 = element.offsetTop - offset;
            window.scrollTo({ top: top_1, behavior: "smooth" });
            setSelectedSection(sectionId);
        }
    };
    var toggleDropdown = function (itemId) {
        setOpenDropdowns(function (prev) {
            return prev.includes(itemId)
                ? prev.filter(function (id) { return id !== itemId; })
                : __spreadArray(__spreadArray([], prev, true), [itemId], false);
        });
    };
    var _d = (0, react_1.useState)(false), isMobile = _d[0], setIsMobile = _d[1];
    (0, react_1.useEffect)(function () {
        var checkMobile = function () { return setIsMobile(window.innerWidth < 768); };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return function () { return window.removeEventListener('resize', checkMobile); };
    }, []);
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { title: "Hive Community", description: "Welcome to RecodeHive \u2014 a community built for everyone to learn, share, and grow.", children: (0, jsx_runtime_1.jsxs)("div", { className: "community-page", children: [(0, jsx_runtime_1.jsxs)(Head_1.default, { children: [(0, jsx_runtime_1.jsx)("meta", { property: "og:title", content: "Hive Community - RecodeHive" }), (0, jsx_runtime_1.jsx)("meta", { property: "og:description", content: "Join our thriving community of developers, designers, and creators." })] }), (0, jsx_runtime_1.jsxs)("main", { className: "community-page", children: [(0, jsx_runtime_1.jsxs)("section", { className: "community-hero", children: [(0, jsx_runtime_1.jsxs)("div", { className: "community-hero-background", children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-particle" }), (0, jsx_runtime_1.jsx)("div", { className: "hero-particle" }), (0, jsx_runtime_1.jsx)("div", { className: "hero-particle" })] }), (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "community-hero-content", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-icon", children: "\uD83D\uDC1D" }), (0, jsx_runtime_1.jsx)("h1", { className: "community-hero-title", children: "Welcome to Hive Community" }), (0, jsx_runtime_1.jsxs)("p", { className: "community-hero-description", children: ["Welcome to ", (0, jsx_runtime_1.jsx)("strong", { children: "RecodeHive" }), " \u2014 a community built for everyone to", ' ', (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "learn" }), ", ", (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "share" }), ", and", ' ', (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "grow" }), ". Whether you're a", ' ', (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "developer \uD83D\uDC68\u200D\uD83D\uDCBB" }), ", ", (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "designer \uD83C\uDFA8" }), ", or just someone interested in exploring new ideas \uD83D\uDCA1, we're excited to have you here!"] })] }) })] }), (0, jsx_runtime_1.jsx)("section", { id: "how-you-can-contribute", className: "contribution-header", children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "contribution-header-content", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "contribution-icon", children: "\u26A1" }), (0, jsx_runtime_1.jsx)("h2", { className: "contribution-title", children: "How You Can Contribute" }), (0, jsx_runtime_1.jsx)("p", { className: "contribution-description", children: "There are many ways to get involved in RecodeHive. Here's how you can contribute:" })] }) }) }), (0, jsx_runtime_1.jsx)("section", { className: "community-content", children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "community-layout", children: [(0, jsx_runtime_1.jsxs)("div", { className: "contribution-sections", children: [contributionSections.map(function (section, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { id: section.id, className: "contribution-section ".concat((isMobile ? activeSections.includes(section.id) : selectedSection === section.id)
                                                        ? 'selected'
                                                        : ''), initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 * index }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "section-header", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-icon", style: { backgroundColor: section.color }, children: section.icon }), (0, jsx_runtime_1.jsx)("h3", { className: "section-title", children: section.title })] }), (0, jsx_runtime_1.jsx)("p", { className: "section-description", children: section.description }), (0, jsx_runtime_1.jsx)("ul", { className: "section-items", children: section.items.map(function (item, itemIndex) { return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.li, { className: "section-item", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3, delay: (0.1 * index) + (0.05 * itemIndex) }, onClick: function () { return toggleDropdown("".concat(section.id, "-").concat(itemIndex)); }, style: { cursor: 'pointer' }, children: [(0, jsx_runtime_1.jsx)("span", { className: "item-arrow ".concat(openDropdowns.includes("".concat(section.id, "-").concat(itemIndex)) ? 'rotate' : ''), children: "\u25B6" }), item] }), section.details && openDropdowns.includes("".concat(section.id, "-").concat(itemIndex)) && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "section-item-details", initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, transition: { duration: 0.3 }, children: (0, jsx_runtime_1.jsx)("p", { children: section.details[itemIndex] }) }))] }, itemIndex)); }) }), section.links.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "section-links", children: [(0, jsx_runtime_1.jsxs)("div", { className: "links-header", children: [(0, jsx_runtime_1.jsx)("span", { className: "links-icon", children: "\uD83D\uDD17" }), (0, jsx_runtime_1.jsxs)("span", { children: ["Find our ", section.id === 'code' ? 'codebase' : section.id === 'documentation' ? 'documentation' : section.id === 'community' ? 'conversation' : 'resources', " on:"] })] }), (0, jsx_runtime_1.jsx)("div", { className: "links-container", children: section.links.map(function (link, linkIndex) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.a, { href: link.url, className: "resource-link", target: "_blank", rel: "noopener noreferrer", style: { '--link-color': section.color }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: link.text }, linkIndex)); }) })] }))] }, section.id)); }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { id: "thank-you", className: "thank-you-section", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.8 }, children: (0, jsx_runtime_1.jsxs)("div", { className: "thank-you-card", children: [(0, jsx_runtime_1.jsxs)("div", { className: "thank-you-header", children: [(0, jsx_runtime_1.jsxs)("div", { className: "thank-you-icons", children: [(0, jsx_runtime_1.jsx)("span", { className: "thank-icon", children: "\uD83D\uDC9A" }), (0, jsx_runtime_1.jsx)("span", { className: "thank-icon", children: "\uD83C\uDF89" }), (0, jsx_runtime_1.jsx)("span", { className: "thank-icon", children: "\u2728" })] }), (0, jsx_runtime_1.jsx)("h3", { children: "Thank You!" }), (0, jsx_runtime_1.jsx)("div", { className: "thank-you-subtitle", children: "You're Amazing" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "thank-you-content", children: [(0, jsx_runtime_1.jsxs)("p", { className: "thank-you-main", children: ["Thank you for your interest in ", (0, jsx_runtime_1.jsx)("strong", { children: "RecodeHive" }), "!"] }), (0, jsx_runtime_1.jsxs)("p", { className: "thank-you-description", children: ["We're thrilled to have you here and can't wait to", ' ', (0, jsx_runtime_1.jsx)("span", { className: "highlight collaborate", children: "collaborate" }), ",", ' ', (0, jsx_runtime_1.jsx)("span", { className: "highlight learn", children: "learn" }), ", and", ' ', (0, jsx_runtime_1.jsx)("span", { className: "highlight grow", children: "grow" }), " \u2014 together. \uD83C\uDF31"] }), (0, jsx_runtime_1.jsxs)("div", { className: "thank-you-features", children: [(0, jsx_runtime_1.jsxs)("div", { className: "feature-item", children: [(0, jsx_runtime_1.jsx)("span", { className: "feature-icon", children: "\uD83D\uDE80" }), (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/recodehive/recode-website", target: "_blank", rel: "noopener noreferrer", style: { color: 'inherit' }, children: (0, jsx_runtime_1.jsx)("span", { children: "Build Amazing Projects" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "feature-item", children: [(0, jsx_runtime_1.jsx)("span", { className: "feature-icon", children: "\uD83E\uDD1D" }), (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/orgs/recodehive/people", target: "_blank", rel: "noopener noreferrer", style: { color: 'inherit' }, children: (0, jsx_runtime_1.jsx)("span", { children: "Connect with Developers" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "feature-item", children: [(0, jsx_runtime_1.jsx)("span", { className: "feature-icon", children: "\uD83D\uDCDA" }), (0, jsx_runtime_1.jsx)("a", { href: "https://www.recodehive.com/docs", target: "_blank", rel: "noopener noreferrer", style: { color: 'inherit' }, children: (0, jsx_runtime_1.jsx)("span", { children: "Learn & Share Knowledge" }) })] })] }), (0, jsx_runtime_1.jsxs)("blockquote", { className: "thank-you-quote", children: [(0, jsx_runtime_1.jsx)("div", { className: "quote-icon", children: "\uD83D\uDC1D" }), (0, jsx_runtime_1.jsx)("em", { children: "Let's make this community the best it can bee!" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "support-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "support-icon", children: "\uD83D\uDCAC" }), (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/recodehive/recode-website/discussions", target: "_blank", rel: "noopener noreferrer", style: { color: 'inherit' }, children: (0, jsx_runtime_1.jsx)("p", { className: "support-text", children: "We're here to help and support you throughout your journey \u2014 don't hesitate to reach out." }) })] })] })] }) })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "table-of-contents", initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.4 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "toc-header", children: [(0, jsx_runtime_1.jsx)("span", { className: "toc-icon", children: "\u26A1" }), (0, jsx_runtime_1.jsx)("h4", { children: "How You Can Contribute" })] }), (0, jsx_runtime_1.jsx)("nav", { className: "toc-nav", children: tableOfContents.map(function (item) { return ((0, jsx_runtime_1.jsxs)("button", { className: "toc-item ".concat(activeSections.includes(item.id) ? 'active' : ''), onClick: function () { return scrollToSection(item.id); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "toc-item-icon", children: item.icon }), (0, jsx_runtime_1.jsx)("span", { className: "toc-item-text", children: item.title })] }, item.id)); }) })] })] }) }) })] }), (0, jsx_runtime_1.jsx)(bottom_to_top_1.default, {})] }) }));
}
