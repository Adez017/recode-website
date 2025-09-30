"use client";
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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Link_1 = __importDefault(require("@docusaurus/Link"));
var authors_1 = require("../../utils/authors");
var BlogCard = function (_a) {
    var type = _a.type, date = _a.date, title = _a.title, content = _a.content, imageUrl = _a.imageUrl, id = _a.id, authors = _a.authors;
    var _b = (0, react_1.useState)(false), isHovered = _b[0], setIsHovered = _b[1];
    if (!id || !type) {
        return (0, jsx_runtime_1.jsx)("div", { children: "data not fetched properly, imageId and entryId not found" });
    }
    // Get category from title for demo purposes
    var getCategory = function (title) {
        if (title.toLowerCase().includes('design') || title.toLowerCase().includes('ux'))
            return 'Design';
        if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('deepmind'))
            return 'AI & Tech';
        if (title.toLowerCase().includes('github') || title.toLowerCase().includes('git'))
            return 'Development';
        return 'Resources';
    };
    var category = getCategory(title);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 40, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.6, ease: "easeOut" }, whileHover: {
            y: -8,
            scale: 1.02,
            transition: { duration: 0.4, ease: "easeOut" }
        }, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, className: "relative overflow-hidden h-full transition-all duration-300", children: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/blog/".concat(id), className: "block h-full text-decoration-none", style: { textDecoration: 'none' }, children: (0, jsx_runtime_1.jsxs)("div", { className: "article-card h-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "card-category", children: category }), (0, jsx_runtime_1.jsx)("div", { className: "card-image", children: (0, jsx_runtime_1.jsx)("img", { src: imageUrl, alt: title }) }), (0, jsx_runtime_1.jsxs)("div", { className: "card-content", children: [(0, jsx_runtime_1.jsx)("h3", { className: "card-title", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "card-description", children: content }), (0, jsx_runtime_1.jsxs)("div", { className: "card-meta", children: [(0, jsx_runtime_1.jsxs)("div", { className: "card-author", children: [(0, jsx_runtime_1.jsx)("span", { className: "author-avatar", children: "\uD83D\uDC64" }), (0, jsx_runtime_1.jsx)("span", { className: "author-name", "data-full-name": (0, authors_1.getAuthorNames)(authors || []), children: (0, authors_1.getAuthorNames)(authors || []) })] }), (0, jsx_runtime_1.jsx)("span", { className: "card-read-time", children: "5 min read" })] }), (0, jsx_runtime_1.jsx)("div", { className: "card-read-more", children: "Read Article \u2192" })] })] }) }) }));
};
exports.default = BlogCard;
