"use client";
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
var jsx_runtime_1 = require("react/jsx-runtime");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_2 = __importDefault(require("react"));
var theme_common_1 = require("@docusaurus/theme-common");
// Mobile-specific overrides for very small screens (<768px and <320px)
require("./ourProjects.mobile.css");
var OurProjects = function (_a) {
    var OurProjectsData = _a.OurProjectsData;
    var colorMode = (0, theme_common_1.useColorMode)().colorMode; // light or dark
    var isDark = colorMode === "dark";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center gap-10 sm:gap-20 py-10 sm:py-20 px-4 min-h-screen transition-colors duration-300 ".concat(isDark ? "bg-[#0c0c0c] text-white" : "bg-white text-black"), children: [(0, jsx_runtime_1.jsx)(HeadingComponent, { tag: OurProjectsData.tag, title: OurProjectsData.title, description: OurProjectsData.description, isDark: isDark }), (0, jsx_runtime_1.jsx)(SelectComponent, { items: OurProjectsData.items, isDark: isDark })] }));
};
// Heading Component
var HeadingComponent = function (_a) {
    var tag = _a.tag, title = _a.title, description = _a.description, isDark = _a.isDark;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5 }, className: "flex items-center md:items-start md:justify-start gap-6 sm:gap-10 flex-col", children: [(0, jsx_runtime_1.jsx)("div", { className: "cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm sm:text-base font-medium tracking-wide shadow-lg transform hover:scale-105 transition-transform duration-300", onClick: function () {
                            return (window.location.href = "https://github.com/recodehive");
                        }, children: tag }), (0, jsx_runtime_1.jsx)("div", { className: "text-3xl sm:text-4xl md:text-5xl font-bold md:w-11/12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r ".concat(isDark
                            ? "from-white via-gray-300 to-white"
                            : "from-black via-gray-700 to-black"), children: title })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.2 }, className: "".concat(isDark ? "text-gray-300" : "text-gray-700", " text-base sm:text-lg text-justify h-full flex items-center md:pr-10 justify-center leading-relaxed"), children: description })] }));
};
// Project URLs configuration
var PROJECT_URLS = {
    "Awesome GitHub Profile": "https://recodehive.github.io/awesome-github-profiles/",
    "Machine Learning Repository": "https://machine-learning-repos.vercel.app/"
};
// Helper function to get website URLs
var getWebsiteUrl = function (title) {
    return PROJECT_URLS[title] || "https://github.com/recodehive";
};
// Select Component
var SelectComponent = function (_a) {
    var items = _a.items, isDark = _a.isDark;
    var _b = (0, react_1.useState)(0), activeItem = _b[0], setActiveItem = _b[1];
    var _c = (0, react_1.useState)(false), isHovered = _c[0], setIsHovered = _c[1];
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.4 }, className: "grid grid-cols-1 md:grid-cols-12 w-full rounded-[30px] sm:rounded-[50px] shadow-2xl overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-row md:flex-col col-span-1 md:col-span-4 gap-4 md:gap-6 items-start justify-start p-4 md:p-8 max-h-[30vh] md:max-h-[70vh] overflow-x-auto md:overflow-y-auto no-scrollbar ".concat(isDark ? "bg-black" : "bg-gray-100"), children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: function () { return setActiveItem(index); }, className: "cursor-pointer transition-all duration-300 ease-in-out p-2 md:p-6 rounded-2xl md:rounded-r-full w-40 md:w-4/5 relative ".concat(activeItem === index
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : isDark
                            ? "bg-gray-800 hover:bg-gray-700 text-white"
                            : "bg-gray-200 hover:bg-gray-300 text-black"), children: [(0, jsx_runtime_1.jsx)("div", { className: "text-xs md:text-lg font-semibold md:w-10/12", children: item.title }), (0, jsx_runtime_1.jsx)("div", { className: "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 ".concat(activeItem === index ? "translate-x-2" : ""), children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { className: "hidden md:block h-6 w-6 md:h-8 md:w-8" }) })] }, index)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-1 md:col-span-8 p-4 md:p-8 relative overflow-hidden min-h-[80vh] md:min-h-[70vh] ourprojects-embed-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 via-cyan-500/30 to-emerald-500/30 rounded-3xl", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(147,51,234,0.1)_60deg,transparent_120deg)] animate-spin", style: { animationDuration: '20s' } })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 overflow-hidden", children: __spreadArray([], Array(12), true).map(function (_, i) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full", animate: {
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0]
                            }, transition: {
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3
                            }, style: {
                                left: "".concat(10 + i * 7, "%"),
                                top: "".concat(20 + (i % 3) * 20, "%")
                            } }, i)); }) }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { animate: { y: [-10, 10, -10], rotate: [0, 5, 0] }, transition: { duration: 4, repeat: Infinity }, className: "hidden md:flex absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20", children: [(0, jsx_runtime_1.jsx)("svg", { className: "w-8 h-8 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse" })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { animate: { x: [-5, 5, -5], rotate: [0, -10, 0] }, transition: { duration: 3, repeat: Infinity }, className: "hidden md:flex absolute top-20 left-8 w-12 h-12 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-xl shadow-xl backdrop-blur-sm border border-white/20 items-center justify-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-white text-xl", children: "\u26A1" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { animate: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }, transition: { duration: 2, repeat: Infinity }, className: "hidden md:flex absolute bottom-20 right-16 w-10 h-10 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-full shadow-lg backdrop-blur-sm border border-white/30 items-center justify-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-white text-sm", children: "\uD83D\uDE80" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, rotateY: -20, scale: 0.8, z: -100 }, animate: { opacity: 1, rotateY: 0, scale: 1, z: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "relative z-10 perspective-1000", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-[78vh] sm:h-[80vh] md:h-[65vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md border-2 transform hover:scale-105 md:hover:rotateY-5 transition-all duration-700 group ourprojects-embed-card ".concat(isDark ? 'bg-gray-900/95 border-purple-500/50 shadow-purple-500/25' : 'bg-white/95 border-blue-400/50 shadow-blue-500/25'), children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center px-3 py-2 sm:px-6 sm:py-4 border-b backdrop-blur-xl ".concat(isDark ? 'bg-gray-800/90 border-gray-600/50' : 'bg-gray-50/90 border-gray-300/50'), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-3 mr-6", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { whileHover: { scale: 1.2, rotate: 180 }, className: "w-4 h-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg cursor-pointer relative", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 rounded-full bg-red-300 animate-ping opacity-20" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { whileHover: { scale: 1.2, rotate: -180 }, className: "w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg cursor-pointer relative", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 rounded-full bg-yellow-300 animate-ping opacity-20" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { whileHover: { scale: 1.2, rotate: 360 }, className: "w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg cursor-pointer relative", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 rounded-full bg-green-300 animate-ping opacity-20" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 px-2 py-2 sm:px-4 sm:py-3 rounded-2xl text-xs sm:text-sm font-mono flex items-center backdrop-blur-sm relative overflow-hidden ".concat(isDark ? 'bg-gray-700/70 text-gray-200 border border-gray-500/50' : 'bg-white/80 text-gray-700 border border-gray-300/50 shadow-inner'), children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { animate: { opacity: [0.5, 1, 0.5] }, transition: { duration: 2, repeat: Infinity }, className: "text-emerald-500 mr-3 text-lg", children: "\uD83D\uDD12" }), (0, jsx_runtime_1.jsx)("span", { className: "text-blue-500 font-semibold", children: "github.com" }), (0, jsx_runtime_1.jsx)("span", { className: "text-gray-400 mx-1", children: "/" }), (0, jsx_runtime_1.jsx)("span", { className: "text-purple-500 font-bold", children: "recodehive" }), (0, jsx_runtime_1.jsx)("span", { className: "text-gray-400 mx-1", children: "/" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, className: "text-cyan-500 font-semibold", children: items[activeItem].title.toLowerCase().replace(/\s+/g, '-') }, activeItem)] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { animate: { scale: [1, 1.05, 1] }, transition: { duration: 2, repeat: Infinity }, className: "ml-2 sm:ml-4 px-2 py-1 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold flex items-center backdrop-blur-sm ".concat(isDark ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg' : 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 shadow-md'), children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { animate: { scale: [1, 1.3, 1] }, transition: { duration: 1, repeat: Infinity }, className: "w-2 h-2 bg-emerald-400 rounded-full mr-2" }), "LIVE"] })] }), (0, jsx_runtime_1.jsx)("div", { className: "relative h-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 1.1, rotateX: 10 }, animate: { opacity: 1, scale: 1, rotateX: 0 }, transition: { duration: 1, ease: "easeOut" }, className: "relative h-full overflow-hidden group", children: [(items[activeItem].title === "Awesome GitHub Profile" || items[activeItem].title === "Machine Learning Repository") ? (
                                            /* Auto-scrolling Website Iframe */
                                            (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "relative w-full h-full overflow-hidden cursor-pointer", onClick: function () { return window.open(getWebsiteUrl(items[activeItem].title), '_blank'); }, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.iframe, { src: PROJECT_URLS[items[activeItem].title] || "about:blank", className: "w-full h-[220%] sm:h-[200%] border-0 origin-top pointer-events-none ourprojects-iframe", initial: { opacity: 0, y: 0 }, animate: {
                                                        opacity: 1,
                                                        y: ["-0%", "-50%", "-0%"]
                                                    }, transition: {
                                                        opacity: { duration: 0.8 },
                                                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                                                    }, sandbox: "allow-scripts allow-popups allow-forms" }, activeItem) })) : (
                                            /* Interactive Screenshot for other projects */
                                            (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "relative w-full h-full cursor-pointer", whileHover: "hover", onClick: function () { return window.open(getWebsiteUrl(items[activeItem].title), '_blank'); }, children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.img, { src: items[activeItem].image, alt: items[activeItem].title, className: "w-full h-auto min-h-full object-cover object-top", variants: {
                                                            hover: { y: -100, scale: 1.05 }
                                                        }, transition: { duration: 2, ease: "easeInOut" } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.8 }, whileHover: { opacity: 1, scale: 1 }, className: "bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 text-gray-900 font-semibold shadow-xl", children: "\uD83D\uDD17 Click to Visit Repository" }) })] })), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "ourprojects-live-indicator absolute bottom-4 right-4 backdrop-blur-sm rounded-full px-3 py-2 text-white text-xs font-medium flex items-center ".concat((items[activeItem].title === "Awesome GitHub Profile" || items[activeItem].title === "Machine Learning Repository")
                                                    ? "bg-green-600/90"
                                                    : "bg-blue-600/90"), animate: { opacity: [0.7, 1, 0.7] }, transition: { duration: 2, repeat: Infinity }, children: (items[activeItem].title === "Awesome GitHub Profile" || items[activeItem].title === "Machine Learning Repository") ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse" }), "Auto-scrolling Live Site"] })) : ("👆 Hover & Click to Explore") }), (0, jsx_runtime_1.jsx)("div", { className: "ourprojects-overlay absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" }) })] }) })] }) }, activeItem), (0, jsx_runtime_1.jsx)("div", { className: "hidden md:block absolute inset-0 pointer-events-none", children: items.map(function (item, index) {
                            if (index === activeItem)
                                return null;
                            var positions = [
                                { top: '8%', left: '2%', rotate: '-15deg', scale: '0.25', z: '-50px' },
                                { top: '65%', left: '5%', rotate: '12deg', scale: '0.22', z: '-30px' },
                                { top: '15%', right: '3%', rotate: '18deg', scale: '0.28', z: '-40px' },
                                { bottom: '12%', right: '6%', rotate: '-10deg', scale: '0.20', z: '-60px' }
                            ];
                            var pos = positions[index % positions.length];
                            return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0, rotateY: -90 }, animate: {
                                    opacity: 0.3,
                                    scale: parseFloat(pos.scale),
                                    rotateY: 0
                                }, transition: {
                                    delay: 1 + index * 0.2,
                                    duration: 0.8,
                                    ease: "easeOut"
                                }, className: "absolute transform-gpu", style: __assign(__assign({}, pos), { transform: "rotate(".concat(pos.rotate, ") scale(").concat(pos.scale, ") translateZ(").concat(pos.z, ")"), filter: 'blur(0.5px)' }), children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { animate: {
                                        y: [-5, 5, -5],
                                        rotateY: [0, 5, 0]
                                    }, transition: {
                                        duration: 4 + index,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }, className: "w-56 h-36 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md border ".concat(isDark ? 'bg-gray-800/70 border-purple-500/30' : 'bg-white/70 border-blue-400/30'), children: [(0, jsx_runtime_1.jsx)("div", { className: "h-8 flex items-center px-3 border-b ".concat(isDark ? 'bg-gray-700/80 border-gray-600/50' : 'bg-gray-100/80 border-gray-300/50'), children: (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-1.5", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" }), (0, jsx_runtime_1.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" }), (0, jsx_runtime_1.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative h-full", children: [(0, jsx_runtime_1.jsx)("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover opacity-70" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" })] })] }) }, index));
                        }) })] })] }));
};
exports.default = OurProjects;
