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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CareersPage;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var Head_1 = __importDefault(require("@docusaurus/Head"));
var framer_motion_1 = require("framer-motion");
var Link_1 = __importDefault(require("@docusaurus/Link"));
// removed useColorMode import to avoid provider + SSR issues
var ExecutionEnvironment_1 = __importDefault(require("@docusaurus/ExecutionEnvironment"));
// Safe hook for color mode that handles SSR
function useSafeColorMode() {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    var _b = (0, react_1.useState)('light'), colorMode = _b[0], setColorMode = _b[1];
    var _c = (0, react_1.useState)(false), isDark = _c[0], setIsDark = _c[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
        if (!ExecutionEnvironment_1.default.canUseDOM)
            return;
        var getThemeFromDOM = function () {
            return document.documentElement.getAttribute('data-theme') || 'light';
        };
        var applyTheme = function () {
            var mode = getThemeFromDOM();
            setColorMode(mode);
            setIsDark(mode === 'dark');
        };
        // set immediately on mount
        applyTheme();
        // watch for changes when navbar toggle is clicked
        var observer = new MutationObserver(applyTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
        return function () { return observer.disconnect(); };
    }, []);
    return { colorMode: colorMode, isDark: isDark, mounted: mounted };
}
// Animation variants for consistent animations
var fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
var staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};
// Sample data for the careers page
var perks = [
    {
        icon: "🏠",
        title: "Remote First",
        description: "Work from anywhere in the world with flexible hours that suit your lifestyle."
    },
    {
        icon: "💰",
        title: "Competitive Salary",
        description: "We offer competitive compensation packages with equity options."
    },
    {
        icon: "🎓",
        title: "Learning & Development",
        description: "Annual learning budget and conference allowances to grow your skills."
    },
    {
        icon: "🏥",
        title: "Health & Wellness",
        description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
        icon: "🌴",
        title: "Unlimited PTO",
        description: "Take the time you need to recharge and maintain work-life balance."
    },
    {
        icon: "🚀",
        title: "Career Growth",
        description: "Clear career progression paths with mentorship and leadership opportunities."
    }
];
var cultureValues = [
    {
        title: "Innovation First",
        description: "We embrace new technologies and creative solutions to solve complex problems.",
        image: "/img/culture-innovation.jpg"
    },
    {
        title: "Collaboration",
        description: "We believe in the power of teamwork and diverse perspectives.",
        image: "/img/culture-collaboration.jpg"
    },
    {
        title: "Growth Mindset",
        description: "We're committed to continuous learning and personal development.",
        image: "/img/culture-growth.jpg"
    }
];
var jobOpenings = [
    {
        title: "Frontend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Build beautiful and responsive user interfaces using React and modern web technologies."
    },
    {
        title: "Backend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Design and develop scalable backend services and APIs using Node.js and cloud technologies."
    },
    {
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Manage infrastructure, CI/CD pipelines, and ensure system reliability and scalability."
    },
    {
        title: "Technical Writer",
        department: "Content",
        location: "Remote",
        type: "Part-time",
        description: "Create engaging technical documentation and educational content for our community."
    }
];
var testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Frontend Developer",
        content: "RecodeHive has given me the opportunity to work on cutting-edge projects while maintaining an amazing work-life balance. The team is incredibly supportive and collaborative.",
        avatar: "/img/testimonial-sarah.jpg"
    },
    {
        name: "Marcus Johnson",
        role: "DevOps Engineer",
        content: "I love the remote-first culture here. The flexibility to work from anywhere has allowed me to travel while building my career. The learning opportunities are endless.",
        avatar: "/img/testimonial-marcus.jpg"
    },
    {
        name: "Priya Patel",
        role: "Product Manager",
        content: "The growth mindset at RecodeHive is real. I've been able to take on new challenges and expand my skill set with full support from leadership.",
        avatar: "/img/testimonial-priya.jpg"
    }
];
function CareersContent() {
    var _a = useSafeColorMode(), colorMode = _a.colorMode, isDark = _a.isDark, mounted = _a.mounted;
    var _b = (0, react_1.useState)(0), activeTestimonial = _b[0], setActiveTestimonial = _b[1];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setActiveTestimonial(function (prev) { return (prev + 1) % testimonials.length; });
        }, 5000);
        return function () { return clearInterval(interval); };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { title: "Careers - Join RecodeHive", description: "Join our team of passionate developers and help shape the future of coding education. Explore career opportunities at RecodeHive.", children: [(0, jsx_runtime_1.jsxs)(Head_1.default, { children: [(0, jsx_runtime_1.jsx)("title", { children: "Careers - Join RecodeHive" }), (0, jsx_runtime_1.jsx)("meta", { name: "description", content: "Join our team of passionate developers and help shape the future of coding education. Explore career opportunities at RecodeHive." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "careers-page transition-colors duration-300 min-h-screen ".concat(isDark
                    ? 'bg-gray-900'
                    : 'bg-gradient-to-b from-white to-gray-50'), children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.section, { className: "hero-section py-20 px-4 text-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden", initial: "hidden", animate: "visible", variants: staggerContainer, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-black/20" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10 max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h1, { className: "text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100", variants: fadeIn, children: "Join the Future of Code Education" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { className: "text-xl md:text-2xl mb-8 text-blue-100", variants: fadeIn, children: "Help us build the next generation of developers. Work with a passionate team creating impact through education." }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)(Link_1.default, { href: "#open-positions", className: "bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg", children: "View Open Positions" }), (0, jsx_runtime_1.jsx)(Link_1.default, { href: "#our-culture", className: "bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg", children: "Learn About Our Culture" })] })] })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.section, { id: "culture", className: "culture-section py-20 px-4", style: {
                            backgroundColor: isDark ? '#111827' : '#ffffff'
                        }, initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: staggerContainer, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "text-center mb-16", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl md:text-5xl font-bold mb-6", id: "our-culture", style: {
                                                color: isDark ? '#ffffff' : '#111827'
                                            }, children: "Our Culture & Values" }), (0, jsx_runtime_1.jsx)("div", { className: "w-full flex justify-center", style: {
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }, children: (0, jsx_runtime_1.jsx)("p", { className: "text-xl max-w-3xl", style: {
                                                    color: isDark ? '#d1d5db' : '#4b5563',
                                                    textAlign: 'center',
                                                    margin: '0 auto'
                                                }, children: "We're building more than just a company\u2014we're creating a community of learners, innovators, and leaders." }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-3 gap-8", children: cultureValues.map(function (value, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "culture-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105", style: {
                                            backgroundColor: isDark ? '#0f172a' : '#ffffff'
                                        }, variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("div", { className: "h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-6xl", children: "\uD83D\uDE80" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold mb-4", style: {
                                                    color: isDark ? '#ffffff' : '#111827'
                                                }, children: value.title }), (0, jsx_runtime_1.jsx)("p", { style: {
                                                    color: isDark ? '#d1d5db' : '#4b5563'
                                                }, children: value.description })] }, index)); }) })] }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.section, { className: "perks-section py-20 px-4", style: {
                            backgroundColor: isDark ? '#0f172a' : '#f9fafb'
                        }, initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: staggerContainer, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "text-center mb-16", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl md:text-5xl font-bold mb-6", style: {
                                                color: isDark ? '#ffffff' : '#111827'
                                            }, children: "Perks & Benefits" }), (0, jsx_runtime_1.jsx)("div", { className: "w-full flex justify-center", style: {
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }, children: (0, jsx_runtime_1.jsx)("p", { className: "text-xl max-w-3xl", style: {
                                                    color: isDark ? '#d1d5db' : '#4b5563',
                                                    textAlign: 'center',
                                                    margin: '0 auto'
                                                }, children: "We take care of our team so they can focus on doing their best work." }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: perks.map(function (perk, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "perk-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105", style: {
                                            backgroundColor: isDark ? '#1f2937' : '#ffffff'
                                        }, variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl mb-4", children: perk.icon }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-3", style: {
                                                    color: isDark ? '#ffffff' : '#111827'
                                                }, children: perk.title }), (0, jsx_runtime_1.jsx)("p", { style: {
                                                    color: isDark ? '#d1d5db' : '#4b5563'
                                                }, children: perk.description })] }, index)); }) })] }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.section, { id: "openings", className: "jobs-section py-20 px-4", style: {
                            backgroundColor: isDark ? '#111827' : '#ffffff'
                        }, initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: staggerContainer, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "text-center mb-16", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl md:text-5xl font-bold mb-6", id: "open-positions", style: {
                                                color: isDark ? '#ffffff' : '#111827'
                                            }, children: "Open Positions" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl max-w-3xl mx-auto text-center", style: {
                                                color: isDark ? '#d1d5db' : '#4b5563'
                                            }, children: "Find your next opportunity and help us build the future of coding education." })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: jobOpenings.map(function (job, index) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "job-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300", style: {
                                            backgroundColor: isDark ? '#1f2937' : '#ffffff'
                                        }, variants: fadeIn, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:items-center gap-4 mb-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold", style: {
                                                                        color: isDark ? '#ffffff' : '#111827'
                                                                    }, children: job.title }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-sm ".concat(isDark
                                                                                ? 'bg-blue-900 text-blue-200'
                                                                                : 'bg-blue-100 text-blue-800'), children: job.department }), (0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-sm ".concat(isDark
                                                                                ? 'bg-green-900 text-green-200'
                                                                                : 'bg-green-100 text-green-800'), children: job.location }), (0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-sm ".concat(isDark
                                                                                ? 'bg-purple-900 text-purple-200'
                                                                                : 'bg-purple-100 text-purple-800'), children: job.type })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "mb-4", style: {
                                                                color: isDark ? '#d1d5db' : '#4b5563'
                                                            }, children: job.description })] }), (0, jsx_runtime_1.jsx)("div", { className: "md:ml-6", children: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/contact-us", className: "bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block", style: {
                                                            color: '#ffffff',
                                                            textDecoration: 'none'
                                                        }, children: "Apply Now" }) })] }) }, index)); }) })] }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.section, { className: "testimonials-section py-20 px-4", style: {
                            backgroundColor: isDark ? '#0f172a' : '#f9fafb'
                        }, initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: staggerContainer, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "text-center mb-16", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl md:text-5xl font-bold mb-6", style: {
                                                color: isDark ? '#ffffff' : '#111827'
                                            }, children: "What Our Team Says" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl text-center", style: {
                                                color: isDark ? '#d1d5db' : '#4b5563'
                                            }, children: "Hear from our team members about their experience at RecodeHive." })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "testimonial-carousel rounded-xl p-8 shadow-lg", style: {
                                        backgroundColor: isDark ? '#111827' : '#ffffff'
                                    }, variants: fadeIn, children: [(0, jsx_runtime_1.jsxs)("div", { className: "testimonial-content text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items                                       center justify-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-2xl", children: "\uD83D\uDC64" }) }), (0, jsx_runtime_1.jsxs)("blockquote", { className: "text-lg md:text-xl mb-6 italic", style: {
                                                        color: isDark ? '#d1d5db' : '#374151'
                                                    }, children: ["\"", testimonials[activeTestimonial].content, "\""] }), (0, jsx_runtime_1.jsxs)("div", { className: "testimonial-author", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-xl font-bold", style: {
                                                                color: isDark ? '#ffffff' : '#111827'
                                                            }, children: testimonials[activeTestimonial].name }), (0, jsx_runtime_1.jsx)("p", { style: {
                                                                color: isDark ? '#9ca3af' : '#4b5563'
                                                            }, children: testimonials[activeTestimonial].role })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center mt-8 gap-2", children: testimonials.map(function (_, index) { return ((0, jsx_runtime_1.jsx)("button", { className: "w-3 h-3 rounded-full transition-all duration-300 ".concat(index === activeTestimonial
                                                    ? 'bg-blue-600 scale-110'
                                                    : isDark
                                                        ? 'bg-gray-600 hover:bg-gray-500'
                                                        : 'bg-gray-300 hover:bg-gray-400'), onClick: function () { return setActiveTestimonial(index); } }, index)); }) })] })] }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.section, { className: "cta-section py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white text-center", initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: staggerContainer, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "text-4xl md:text-5xl font-bold mb-6", variants: fadeIn, children: "Ready to Shape the Future?" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { className: "text-xl mb-8 text-blue-100", variants: fadeIn, children: "Don't see a perfect fit? We're always looking for talented individuals to join our mission." }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)(Link_1.default, { to: "/contact-us", className: "bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg", children: "Get In Touch" }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/community", className: "bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg", children: "Join Our Community" })] })] }) })] })] }));
}
function CareersPage() {
    return (0, jsx_runtime_1.jsx)(CareersContent, {});
}
