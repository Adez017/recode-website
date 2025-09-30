"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var avatar_1 = require("../ui/avatar");
var theme_common_1 = require("@docusaurus/theme-common");
var TestimonialCard = function (_a) {
    var _b;
    var name = _a.name, username = _a.username, content = _a.content, date = _a.date, avatar = _a.avatar, link = _a.link;
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isDark = colorMode === "dark";
    // Function to format the link display
    var formatLinkDisplay = function (url) {
        try {
            var urlObj = new URL(url);
            return urlObj.hostname + urlObj.pathname;
        }
        catch (_a) {
            // If URL parsing fails, return the original link
            return url;
        }
    };
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[250px] flex flex-col justify-between ".concat(isDark ? "bg-[#1a1a1a] text-white" : "bg-white text-gray-900"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4", children: [(0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { className: "w-24 h-24 rounded-full", children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: avatar, className: "object-contain" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "CN" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "font-semibold text-lg ".concat(isDark ? "text-white" : "text-gray-900"), children: name }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm ".concat(isDark ? "text-gray-400" : "text-gray-500"), children: ["@", username] })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "line-clamp-3 my-4 flex-grow ".concat(isDark ? "text-gray-300" : "text-gray-700"), children: content }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2 text-sm pt-2 border-t ".concat(isDark ? "border-gray-700" : "border-gray-100"), children: [(0, jsx_runtime_1.jsx)("div", { className: "flex gap-2 flex-wrap", children: (_b = content.match(/#\w+/g)) === null || _b === void 0 ? void 0 : _b.map(function (hashtag, index) { return ((0, jsx_runtime_1.jsx)("span", { className: "text-blue-500 hover:text-blue-600 cursor-pointer", children: hashtag }, index)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "hover:underline cursor-pointer ".concat(isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"), children: formatLinkDisplay(link) }), (0, jsx_runtime_1.jsx)("span", { className: isDark ? "text-gray-500" : "text-gray-400", children: date })] })] })] }));
};
exports.default = TestimonialCard;
