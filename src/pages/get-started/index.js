"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.default = GetStarted;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var useDocusaurusContext_1 = __importDefault(require("@docusaurus/useDocusaurusContext"));
var framer_motion_1 = require("framer-motion");
var Head_1 = __importDefault(require("@docusaurus/Head"));
var ExecutionEnvironment_1 = __importDefault(require("@docusaurus/ExecutionEnvironment"));
// Safe hook for color mode that handles SSR
function useSafeColorMode() {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    var colorMode = "light";
    var isDark = false;
    if (mounted && ExecutionEnvironment_1.default.canUseDOM) {
        try {
            var useColorModeHook = require("@docusaurus/theme-common").useColorMode;
            var colorModeResult = useColorModeHook();
            colorMode = colorModeResult.colorMode;
            isDark = colorMode === "dark";
        }
        catch (error) {
            console.warn("Failed to get color mode:", error);
        }
    }
    return { colorMode: colorMode, isDark: isDark, mounted: mounted };
}
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
// Animated component for staggered animations
var AnimatedSection = function (_a) {
    var children = _a.children, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
    var controls = (0, framer_motion_1.useAnimation)();
    var ref = (0, react_1.useRef)(null);
    var isInView = (0, framer_motion_1.useInView)(ref, { once: true });
    (0, react_1.useEffect)(function () {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay: delay * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.1,
                },
            });
        }
    }, [controls, isInView, delay]);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { ref: ref, initial: { opacity: 0, y: 30 }, animate: controls, style: {
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "subpixel-antialiased",
        }, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: isInView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.5, delay: 0.2 + delay * 0.1 }, children: children }) }));
};
function GetStartedHeader() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    // Remove unused siteConfig or use it if needed
    var _a = (0, react_1.useState)(0), textIndex = _a[0], setTextIndex = _a[1];
    var texts = ["Code", "Build", "Deploy", "Learn"];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setTextIndex(function (prevIndex) { return (prevIndex + 1) % texts.length; });
        }, 2000);
        return function () { return clearInterval(interval); };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("header", { className: styles_module_css_1.default.heroBanner, children: [(0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.heroOverlay }), (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.heroContent, children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.h1, { className: "hero__title ".concat(styles_module_css_1.default.heroTitle), initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, children: ["Transform Your Career in", " ", (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.highlight, children: "Tech" })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { className: "hero__subtitle ".concat(styles_module_css_1.default.heroSubtitle), initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }, children: "Master the art of coding with our comprehensive learning paths and hands-on challenges" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: styles_module_css_1.default.typingContainer, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, children: (0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.staticText, children: [(0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.staticText, children: "Start\u00A0" }), (0, jsx_runtime_1.jsxs)("span", { className: styles_module_css_1.default.dynamicText, children: [(0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.typingWord, children: "Code" }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.typingWord, children: "Build" }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.typingWord, children: "Deploy" }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.typingWord, children: "Learn" })] }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.staticText, children: "\u00A0Today" })] }) }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: styles_module_css_1.default.heroButtons, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }, children: [(0, jsx_runtime_1.jsxs)(Link_1.default, { className: "".concat(styles_module_css_1.default.button, " ").concat(styles_module_css_1.default.buttonPrimary), to: "/courses/", children: ["Start Learning Now", (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.buttonIcon, "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, jsx_runtime_1.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" }) }) })] }), (0, jsx_runtime_1.jsxs)(Link_1.default, { className: "".concat(styles_module_css_1.default.button, " ").concat(styles_module_css_1.default.buttonOutline), to: "/docs/GitHub/intro-github", children: ["Explore Docs", (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.buttonIcon, "aria-hidden": "true", children: (0, jsx_runtime_1.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }), (0, jsx_runtime_1.jsx)("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })] }) })] })] })] }) })] }));
}
var features = [
    {
        title: "Hands-on Coding Challenges",
        description: "Master programming through practical coding challenges with real-world applications",
        icon: "💻",
        color: "#3b82f6",
    },
    {
        title: "Real Interview Practice",
        description: "Prepare with questions from top tech companies like Google, Amazon, and Microsoft",
        icon: "🎯",
        color: "#8b5cf6",
    },
    {
        title: "Structured Learning Paths",
        description: "Follow expert-designed roadmaps for different tech stacks and skill levels",
        icon: "🛣️",
        color: "#10b981",
    },
    {
        title: "Interactive Environment",
        description: "Code directly in your browser with instant feedback and debugging tools",
        icon: "⚡",
        color: "#f59e0b",
    },
    {
        title: "100+ Problems",
        description: "Curated collection of real-world coding interview questions and solutions",
        icon: "🔢",
        color: "#ec4899",
    },
    {
        title: "Multiple Languages",
        description: "Support for popular programming languages including Python, JavaScript, and more",
        icon: "🌐",
        color: "#06b6d4",
    },
];
var stats = [
    { value: "10,000+", label: "Active Learners" },
    { value: "100+", label: "Hours of Content" },
    { value: "24/7", label: "Community Support" },
    { value: "4.9/5", label: "Average Rating" },
];
var learningPaths = [
    {
        title: "Web Development",
        description: "Master full-stack development with modern frameworks like React, Node.js, and databases. Build responsive, interactive web applications.",
        icon: "🖥️",
        color: "#4f46e5",
    },
    {
        title: "Data Science",
        description: "Learn data analysis, visualization, and machine learning with Python, Pandas, and TensorFlow. Turn data into actionable insights.",
        icon: "📊",
        color: "#8b5cf6",
    },
    {
        title: "Mobile Apps",
        description: "Create beautiful, performant cross-platform mobile applications using React Native and modern mobile development practices.",
        icon: "📱",
        color: "#10b981",
    },
    {
        title: "DevOps",
        description: "Master CI/CD, Docker, Kubernetes, and cloud deployment to build scalable, reliable infrastructure and deployment pipelines.",
        icon: "⚙️",
        color: "#f59e0b",
    },
];
function Feature(_a) {
    var title = _a.title, description = _a.description, icon = _a.icon, color = _a.color;
    var _b = (0, react_1.useState)(false), isHovered = _b[0], setIsHovered = _b[1];
    // Create a ref to apply the custom property
    var featureRef = (0, react_1.useRef)(null);
    // Apply the color as a CSS variable when the component mounts or color changes
    (0, react_1.useEffect)(function () {
        if (featureRef.current) {
            featureRef.current.style.setProperty("--feature-color", color);
        }
    }, [color]);
    var iconStyle = {
        background: "linear-gradient(135deg, ".concat(color, "10, ").concat(color, "20)"),
        color: color,
    };
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.article, { ref: featureRef, className: styles_module_css_1.default.feature, onHoverStart: function () { return setIsHovered(true); }, onHoverEnd: function () { return setIsHovered(false); }, whileHover: {
            y: -10,
            boxShadow: "0 20px 40px ".concat(color, "20"),
        }, "aria-label": title, children: [(0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.featureIcon, style: iconStyle, "aria-hidden": "true", children: icon }), (0, jsx_runtime_1.jsx)("h3", { className: styles_module_css_1.default.featureTitle, children: title }), (0, jsx_runtime_1.jsx)("p", { className: styles_module_css_1.default.featureDescription, children: description }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: styles_module_css_1.default.featureHover, initial: { width: 0 }, animate: { width: isHovered ? "100%" : 0 }, transition: { duration: 0.3, ease: "easeInOut" }, "aria-hidden": "true" })] }));
}
function StatCard(_a) {
    var value = _a.value, label = _a.label, _b = _a.index, index = _b === void 0 ? 0 : _b;
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.article, { className: styles_module_css_1.default.statCard, initial: { opacity: 0, y: 30 }, whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
            },
        }, viewport: { once: true, margin: "-50px" }, whileHover: {
            y: -5,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
        }, children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: styles_module_css_1.default.statValue, "aria-label": value, initial: { scale: 0.9 }, whileInView: {
                    scale: 1,
                    transition: {
                        delay: 0.2 + index * 0.05,
                        type: "spring",
                        stiffness: 100,
                    },
                }, viewport: { once: true }, children: value }), (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.statLabel, children: label }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: styles_module_css_1.default.statGlow, initial: { opacity: 0 }, whileInView: {
                    opacity: 0.3,
                    transition: { delay: 0.3 + index * 0.1 },
                }, viewport: { once: true } })] }));
}
var LearningPath = function (_a) {
    var title = _a.title, description = _a.description, icon = _a.icon, _b = _a.color, color = _b === void 0 ? "#3b82f6" : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, _d = _a.isCompleted, isCompleted = _d === void 0 ? false : _d, _e = _a.onToggleComplete, onToggleComplete = _e === void 0 ? function () { } : _e;
    var isEven = index % 2 === 0;
    var delay = index * 0.15;
    var _f = react_1.default.useState(false), isHovered = _f[0], setIsHovered = _f[1];
    // State for responsive position and layout
    var _g = react_1.default.useState({
        isMobile: false,
        isTablet: false,
        isLargeTablet: false,
        spacing: 200,
        cardWidth: "calc(50% - 1.5rem)",
    }), layout = _g[0], setLayout = _g[1];
    // Update position on window resize
    react_1.default.useEffect(function () {
        var handleResize = function () {
            var width = window.innerWidth;
            var isMobileView = width < 768;
            var isTableView = width >= 768 && width < 960;
            var isLargeTableView = width >= 960 && width < 1024;
            // Calculate spacing based on viewport
            var spacing, cardWidth;
            if (isMobileView) {
                spacing = 160;
                cardWidth = "100%";
            }
            else if (isTableView) {
                spacing = 180;
                cardWidth = "calc(50% - 1rem)";
            }
            else if (isLargeTableView) {
                spacing = 200;
                cardWidth = "calc(50% - 1.25rem)";
            }
            else {
                spacing = 220;
                cardWidth = "calc(50% - 2rem)";
            }
            setLayout({
                isMobile: isMobileView,
                isTablet: isTableView || isLargeTableView,
                isLargeTablet: isLargeTableView,
                spacing: spacing,
                cardWidth: cardWidth,
            });
        };
        var resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(document.body);
        handleResize();
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
            resizeObserver.disconnect();
        };
    }, [index]);
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.article, { className: "".concat(styles_module_css_1.default.pathCard, " group relative overflow-hidden"), style: __assign({ "--card-color": color, "--card-color-light": "".concat(color, "20"), "--card-color-dark": "".concat(color, "80"), position: layout.isMobile ? "relative" : "absolute", margin: layout.isMobile ? "0 auto 1.25rem" : "0", maxWidth: "100%", width: layout.isMobile ? "100%" : layout.cardWidth, top: layout.isMobile ? "auto" : "".concat(80 + index * layout.spacing, "px"), left: layout.isMobile ? "auto" : isEven ? "50%" : "auto", right: layout.isMobile ? "auto" : isEven ? "auto" : "50%", transform: layout.isMobile
                ? "none"
                : isEven
                    ? "none"
                    : "translateX(50%)", marginLeft: layout.isMobile ? "auto" : isEven ? 0 : "auto", marginRight: layout.isMobile ? "auto" : isEven ? "auto" : 0, opacity: isCompleted ? 0.9 : 1, filter: isCompleted ? "saturate(0.9)" : "none", transition: "all 0.3s ease-in-out", border: "1px solid ".concat(isCompleted ? "".concat(color, "40") : "rgba(255, 255, 255, 0.1)"), background: "linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98))", boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.15)", transformOrigin: "center", zIndex: isHovered ? 10 : 1 }, (!layout.isMobile && {
            "@media (min-width: 960px)": {
                width: "calc(50% - 1.5rem)",
            },
            "@media (min-width: 1024px)": {
                width: "calc(50% - 2rem)",
            },
            "@media (min-width: 1280px)": {
                width: "calc(50% - 3rem)",
            },
            "@media (min-width: 1440px)": {
                width: "calc(50% - 4rem)",
            },
        })), initial: { opacity: 0, x: isEven ? -100 : 100, y: 20 }, animate: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: isHovered ? 1.02 : 1,
            boxShadow: isHovered
                ? "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
                : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: delay,
            },
        }, whileHover: {
            scale: 1.02,
            transition: { duration: 0.2 },
        }, onHoverStart: function () { return setIsHovered(true); }, onHoverEnd: function () { return setIsHovered(false); }, children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0", style: {
                    background: "radial-gradient(circle at 70% 30%, ".concat(color, "10 0%, transparent 70%)"),
                } }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl text-lg sm:text-xl md:text-2xl relative overflow-hidden", style: {
                                    background: "linear-gradient(135deg, ".concat(color, ", ").concat(color, "80)"),
                                    boxShadow: "0 4px 15px -5px ".concat(color, "80"),
                                    opacity: isCompleted ? 0.9 : 1,
                                }, whileHover: {
                                    scale: 1.1,
                                    rotate: isCompleted ? 0 : 5,
                                    transition: { duration: 0.2 },
                                }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" }), (0, jsx_runtime_1.jsx)("span", { className: "relative z-10", children: icon })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-base sm:text-lg md:text-xl font-bold text-white break-words leading-tight", children: title }), isCompleted && ((0, jsx_runtime_1.jsxs)("div", { className: "ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full flex items-center whitespace-nowrap", children: [(0, jsx_runtime_1.jsx)("svg", { className: "w-3 h-3 mr-1 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }), (0, jsx_runtime_1.jsx)("span", { className: "hidden sm:inline", children: "Completed" }), (0, jsx_runtime_1.jsx)("span", { className: "sm:hidden", children: "\u2713" })] }))] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 mb-4 leading-relaxed", children: description }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mt-4 pt-3 border-t border-gray-700/50", children: [(0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/docs/GitHub/intro-github", className: "inline-flex items-center text-sm font-medium transition-all duration-200 ".concat(isCompleted
                                                    ? "text-green-400 hover:text-green-300"
                                                    : "text-blue-400 hover:text-blue-300", " group-hover:underline"), children: [isCompleted ? "Continue Learning" : "Start Learning", (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 ".concat(isCompleted ? "text-green-400" : "text-blue-400"), fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.button, { onClick: function (e) {
                                                    e.preventDefault();
                                                    onToggleComplete();
                                                }, className: "relative inline-flex items-center h-6 rounded-full w-11 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ".concat(isCompleted
                                                    ? "bg-green-500 focus:ring-green-500"
                                                    : "bg-gray-600 hover:bg-gray-500 focus:ring-blue-500"), whileTap: { scale: 0.95 }, "aria-pressed": isCompleted, "aria-label": isCompleted ? "Mark as incomplete" : "Mark as complete", children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: isCompleted ? "Mark as incomplete" : "Mark as complete" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { className: "inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-200 ease-in-out flex items-center justify-center ".concat(isCompleted ? "translate-x-6" : "translate-x-1"), layout: true, children: isCompleted && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.svg, { className: "w-3 h-3 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", initial: { scale: 0 }, animate: { scale: 1 }, transition: {
                                                                type: "spring",
                                                                stiffness: 500,
                                                                damping: 30,
                                                            }, children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) })) })] })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gray-700/50" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300 -z-10" })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 opacity-5", style: {
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: "60px 60px",
                } })] }));
};
function GetStartedContent() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var _a = useSafeColorMode(), colorMode = _a.colorMode, isDark = _a.isDark, mounted = _a.mounted;
    var _b = (0, react_1.useState)(function () {
        if (typeof window !== "undefined") {
            try {
                var saved = localStorage.getItem("completedPaths");
                return saved ? JSON.parse(saved) : {};
            }
            catch (e) {
                console.error("Failed to parse completedPaths from localStorage", e);
                return {};
            }
        }
        return {};
    }), completedPaths = _b[0], setCompletedPaths = _b[1];
    // Toggle completion status for a path
    var togglePathCompletion = react_1.default.useCallback(function (pathTitle) {
        setCompletedPaths(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[pathTitle] = !prev[pathTitle], _a)));
        });
    }, []);
    // Calculate completion percentage
    var completionPercentage = Math.round((Object.values(completedPaths).filter(Boolean).length /
        learningPaths.length) *
        100) || 0;
    // Save to localStorage whenever completedPaths changes
    (0, react_1.useEffect)(function () {
        if (typeof window !== "undefined") {
            try {
                localStorage.setItem("completedPaths", JSON.stringify(completedPaths));
            }
            catch (e) {
                console.error("Failed to save completedPaths to localStorage", e);
            }
        }
    }, [completedPaths]);
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { title: "Get Started | ".concat((siteConfig === null || siteConfig === void 0 ? void 0 : siteConfig.title) || "Recode Hive"), description: "Start your coding journey with Recode Hive. Learn to code with our interactive platform and structured learning paths.", children: [(0, jsx_runtime_1.jsxs)(Head_1.default, { children: [(0, jsx_runtime_1.jsx)("meta", { name: "theme-color", content: "#1e40af" }), (0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), (0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700;800&display=swap", rel: "stylesheet" })] }), (0, jsx_runtime_1.jsx)(GetStartedHeader, {}), (0, jsx_runtime_1.jsxs)("main", { className: "transition-colors duration-300 ".concat(isDark ? "dark-bg-primary dark-text-primary" : "bg-white text-black"), children: [(0, jsx_runtime_1.jsx)("section", { className: styles_module_css_1.default.features, children: (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsxs)(AnimatedSection, { children: [(0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.sectionHeader, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Why Choose Recode Hive?" }), (0, jsx_runtime_1.jsx)("p", { children: "Discover the perfect learning experience tailored for your coding journey" })] }), (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.featuresGrid, children: features.map(function (props, idx) { return ((0, jsx_runtime_1.jsx)(Feature, __assign({}, props), idx)); }) })] }), (0, jsx_runtime_1.jsx)(AnimatedSection, { delay: 1, children: (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.section, children: (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.container, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: styles_module_css_1.default.statsSection, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, variants: {
                                                    hidden: { opacity: 0 },
                                                    visible: {
                                                        opacity: 1,
                                                        transition: {
                                                            staggerChildren: 0.1,
                                                        },
                                                    },
                                                }, children: stats.map(function (stat, index) { return ((0, jsx_runtime_1.jsx)(StatCard, { value: stat.value, label: stat.label, index: index }, index)); }) }) }) }) })] }) }), (0, jsx_runtime_1.jsx)(AnimatedSection, { delay: 2, children: (0, jsx_runtime_1.jsxs)("section", { className: styles_module_css_1.default.learningPaths, style: {
                                width: "100vw",
                                marginLeft: "50%",
                                transform: "translateX(-50%)",
                            }, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full bg-gray-900 py-16", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto", children: (0, jsx_runtime_1.jsx)("div", { className: "text-center mb-16", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "text-3xl md:text-4xl font-bold mb-4 px-6 py-3 inline-block rounded-xl bg-blue-100 text-gray-900", initial: { opacity: 0, y: 20 }, whileInView: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: "easeOut",
                                                    },
                                                }, viewport: { once: true, margin: "-100px 0px -100px 0px" }, style: {
                                                    textShadow: "0 0 10px rgba(255, 213, 0, 0.5)",
                                                }, children: "Start Your Journey" }) }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto -mt-10 relative", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "mb-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px 0px -50px 0px" }, transition: { duration: 0.5, delay: 0.2 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-4 px-6 py-3 inline-block rounded-xl bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 shadow-md", children: "Your Learning Progress" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-300 text-sm", children: [completionPercentage, "% Complete \u2022", " ", Object.values(completedPaths).filter(Boolean).length, " of", " ", learningPaths.length, " paths started"] })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-right", children: (0, jsx_runtime_1.jsxs)("span", { className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: [completionPercentage, "%"] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full h-3 bg-gray-700/50 rounded-full overflow-hidden", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative", initial: { width: 0 }, animate: { width: "".concat(completionPercentage, "%") }, transition: { duration: 1, ease: "easeOut" }, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute inset-0 bg-white/20", animate: {
                                                                left: ["0%", "100%"],
                                                            }, transition: {
                                                                duration: 1.5,
                                                                repeat: Infinity,
                                                                repeatType: "loop",
                                                                ease: "easeInOut",
                                                            }, style: {
                                                                width: "20%",
                                                                height: "100%",
                                                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                                                transform: "skewX(-20deg)",
                                                            } }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.timelineContainer, children: [(0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.timeline, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-0", initial: { height: 0 }, animate: {
                                                            height: "".concat((completionPercentage / 100) * 100, "%"),
                                                        }, transition: { duration: 1.5, ease: "easeInOut" } }) }), (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.pathsContainer, children: learningPaths.map(function (path, idx) { return ((0, jsx_runtime_1.jsx)(LearningPath, { title: path.title, description: path.description, icon: path.icon, color: path.color, index: idx, isCompleted: !!completedPaths[path.title], onToggleComplete: function () { return togglePathCompletion(path.title); } }, path.title)); }) })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "text-center mt-12 pb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px 0px -50px 0px" }, transition: { duration: 0.5, delay: 0.3 }, children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/courses", className: "group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-200 to-blue-300 font-semibold text-lg rounded-xl hover:from-blue-300 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:no-underline", style: {
                                                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                                                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "relative z-10 text-gray-900 group-hover:text-gray-900", children: "Explore All Paths" }), (0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6 ml-3 transform text-gray-900 group-hover:translate-x-1 group-hover:text-gray-900 transition-transform duration-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })] }) })] })] }) })] })] }));
}
function GetStarted() {
    return (0, jsx_runtime_1.jsx)(GetStartedContent, {});
}
