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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var theme_common_1 = require("@docusaurus/theme-common");
var DeveloperMockup = function (_a) {
    var _b, _c, _d, _e, _f;
    var items = _a.items;
    var _g = (0, react_1.useState)(0), activeIndex = _g[0], setActiveIndex = _g[1];
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isDark = colorMode === 'dark';
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full py-16", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-4", children: "Live Preview" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, className: "text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ".concat(isDark ? 'from-white via-gray-300 to-white' : 'from-black via-gray-700 to-black'), children: "Interactive Project Showcase" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "text-lg max-w-2xl mx-auto ".concat(isDark ? 'text-gray-300' : 'text-gray-600'), children: "Explore our featured projects with live previews and detailed insights" })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.3 }, className: "max-w-7xl mx-auto p-8 rounded-3xl shadow-2xl backdrop-blur-sm ".concat(isDark ? 'bg-gray-900/90 border border-gray-700' : 'bg-white/90 border border-gray-200'), children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 h-[700px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-4 ".concat(isDark ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100', " rounded-2xl p-6 overflow-y-auto border ").concat(isDark ? 'border-gray-700' : 'border-gray-200'), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center mb-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold ".concat(isDark ? 'text-white' : 'text-gray-900'), children: "Featured Projects" })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { whileHover: { scale: 1.02, x: 4 }, whileTap: { scale: 0.98 }, onClick: function () { return setActiveIndex(index); }, className: "relative p-5 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ".concat(activeIndex === index
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl transform scale-105'
                                            : isDark
                                                ? 'bg-gray-700/50 hover:bg-gray-600/70 text-gray-200 border border-gray-600'
                                                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md border border-gray-200'), children: [activeIndex === index && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { layoutId: "activeBackground", className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl", transition: { type: "spring", bounce: 0.2, duration: 0.6 } })), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10 flex items-start justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-semibold text-base mb-2 leading-tight", children: item.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm leading-relaxed ".concat(activeIndex === index
                                                                    ? 'text-blue-100'
                                                                    : isDark ? 'text-gray-400' : 'text-gray-500'), children: item.description })] }), (0, jsx_runtime_1.jsx)("div", { className: "ml-4 w-3 h-3 rounded-full flex-shrink-0 mt-1 ".concat(activeIndex === index ? 'bg-white shadow-lg' : 'bg-gray-400') })] }), activeIndex === index && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: '100%' }, className: "absolute bottom-0 left-0 h-1 bg-white/30 rounded-full" }))] }, index)); }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-full rounded-2xl overflow-hidden shadow-2xl border ".concat(isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center px-6 py-4 border-b backdrop-blur-sm ".concat(isDark ? 'bg-gray-700/80 border-gray-600' : 'bg-gray-100/80 border-gray-300'), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2 mr-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" }), (0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" }), (0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 mx-4 px-4 py-2 rounded-lg text-sm font-mono flex items-center ".concat(isDark ? 'bg-gray-600 text-gray-300' : 'bg-white text-gray-600 shadow-inner'), children: [(0, jsx_runtime_1.jsx)("span", { className: "text-green-500 mr-2", children: "\uD83D\uDD12" }), "github.com/recodehive/", (_b = items[activeIndex]) === null || _b === void 0 ? void 0 : _b.title.toLowerCase().replace(/\s+/g, '-')] }), (0, jsx_runtime_1.jsx)("div", { className: "px-3 py-1 rounded-md text-xs ".concat(isDark ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'), children: "Live" })] }), (0, jsx_runtime_1.jsx)("div", { className: "relative h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.9, rotateY: -10 }, animate: { opacity: 1, scale: 1, rotateY: 0 }, transition: { duration: 0.6, ease: "easeOut" }, className: "relative h-full", children: [(0, jsx_runtime_1.jsx)("img", { src: (_c = items[activeIndex]) === null || _c === void 0 ? void 0 : _c.image, alt: (_d = items[activeIndex]) === null || _d === void 0 ? void 0 : _d.title, className: "w-full h-full object-cover" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.3, duration: 0.6 }, className: "text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center mb-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-medium text-green-400", children: "Active Project" })] }), (0, jsx_runtime_1.jsx)("h3", { className: "text-3xl font-bold mb-3 leading-tight", children: (_e = items[activeIndex]) === null || _e === void 0 ? void 0 : _e.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-200 text-base leading-relaxed max-w-2xl", children: (_f = items[activeIndex]) === null || _f === void 0 ? void 0 : _f.description }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300", children: "View Project \u2192" })] }) }) })] }, activeIndex) })] }) })] }) })] }));
};
exports.default = DeveloperMockup;
