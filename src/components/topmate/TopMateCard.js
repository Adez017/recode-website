"use strict";
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
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var theme_common_1 = require("@docusaurus/theme-common");
var TopMateCard = function (_a) {
    var title = _a.title, description = _a.description, duration = _a.duration, profileImage = _a.profileImage, username = _a.username, setShowTopmate = _a.setShowTopmate;
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isDark = colorMode === "dark";
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "relative w-full max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 ".concat(isDark ? "bg-[#1a1a1a] text-white" : "bg-white text-black"), children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute -top-4 -left-4 flex gap-2", children: __spreadArray([], Array(3), true).map(function (_, i) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: i * 0.1 }, className: "text-purple-500", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowUpRight, { size: 24, className: "transform rotate-45" }) }, i)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm font-medium ".concat(isDark ? "text-gray-300" : "text-gray-600"), children: "1:1 CALL" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1 ".concat(isDark ? "text-gray-400" : "text-gray-500"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Clock, { size: 16 }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm", children: duration })] })] }), (0, jsx_runtime_1.jsxs)("button", { className: "text-xl font-semibold ".concat(isDark
                                    ? "text-gray-500 hover:text-gray-300"
                                    : "text-gray-400 hover:text-gray-600"), onClick: function () { return setShowTopmate(false); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" }), "\u00D7"] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold mb-4 ".concat(isDark ? "text-white" : "text-gray-900"), children: title }), (0, jsx_runtime_1.jsx)("p", { className: "".concat(isDark ? "text-gray-300" : "text-gray-600", " mb-6"), children: description }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between flex-wrap md:flex-nowrap gap-y-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [(0, jsx_runtime_1.jsx)("img", { src: profileImage, alt: "Profile", className: "w-12 h-12 rounded-full object-cover border-2 border-purple-200" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm ".concat(isDark ? "text-gray-300" : "text-gray-600"), children: "Book a slot at" }), (0, jsx_runtime_1.jsxs)("a", { href: "https://topmate.io/".concat(username), target: "_blank", rel: "noopener noreferrer", className: "text-purple-500 font-semibold hover:text-purple-600 transition-colors flex items-center gap-1 truncate", children: [(0, jsx_runtime_1.jsxs)("span", { className: "truncate", children: ["topmate.io/", username] }), (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowUpRight, { size: 16 })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 shrink-0", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-4 w-4 overflow-hidden flex-shrink-0 rounded-sm", children: (0, jsx_runtime_1.jsx)("img", { src: "/icons/topmate.png", alt: "Topmate icon", className: "h-4 w-auto object-cover object-left opacity-90" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold shrink-0 ".concat(isDark ? "text-gray-200" : "text-gray-700"), children: "topmate" })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 -z-10" })] }));
};
exports.default = TopMateCard;
