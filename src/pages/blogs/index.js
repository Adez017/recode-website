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
exports.default = Blogs;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var useDocusaurusContext_1 = __importDefault(require("@docusaurus/useDocusaurusContext"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var index_1 = __importDefault(require("../../database/blogs/index"));
var Head_1 = __importDefault(require("@docusaurus/Head"));
require("./blogs-new.css");
// Author mapping based on actual blog posts
var authorMapping = {
    "streamline-ux-ui": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
    "ux-ui-design-job": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
    "ux-designers-ai": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
    "google-deepmind": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
    "google-backlinks": ["Sanjay Viswanthan"],
    "git-coding-agent": ["Sanjay Viswanthan"],
    "spark-architecture": ["Aditya Singh Rathore", "Sanjay Viswanthan"],
    "n8n-workflow-automation": ["Aditya Singh Rathore"],
};
function Blogs() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var _a = (0, react_1.useState)(""), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = (0, react_1.useState)(index_1.default), filteredBlogs = _b[0], setFilteredBlogs = _b[1];
    // Filter blogs based on search term
    (0, react_1.useEffect)(function () {
        if (searchTerm.trim() === "") {
            setFilteredBlogs(index_1.default);
        }
        else {
            var filtered = index_1.default.filter(function (blog) {
                var _a;
                return blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ((_a = blog.tags) === null || _a === void 0 ? void 0 : _a.some(function (tag) { return tag.toLowerCase().includes(searchTerm.toLowerCase()); }));
            });
            setFilteredBlogs(filtered);
        }
    }, [searchTerm]);
    var handleSearchChange = function (e) {
        setSearchTerm(e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { title: "Blogs from ".concat(siteConfig.title), description: "Welcome to RecodeHive Blogs. Learn the basics to advanced concepts of web development including HTML, CSS, JavaScript, React, Node.js, DSA, and more.", children: [(0, jsx_runtime_1.jsxs)(Head_1.default, { children: [(0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), (0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap", rel: "stylesheet" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "blog-page", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-shapes", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-shape bg-shape-1" }), (0, jsx_runtime_1.jsx)("div", { className: "bg-shape bg-shape-2" }), (0, jsx_runtime_1.jsx)("div", { className: "bg-shape bg-shape-3" }), (0, jsx_runtime_1.jsx)("div", { className: "bg-shape bg-shape-4" }), (0, jsx_runtime_1.jsx)("div", { className: "bg-shape bg-shape-5" })] }), (0, jsx_runtime_1.jsxs)("section", { className: "blog-hero-section", children: [(0, jsx_runtime_1.jsxs)("div", { className: "floating-particles", children: [(0, jsx_runtime_1.jsx)("div", { className: "particle particle-1" }), (0, jsx_runtime_1.jsx)("div", { className: "particle particle-2" }), (0, jsx_runtime_1.jsx)("div", { className: "particle particle-3" }), (0, jsx_runtime_1.jsx)("div", { className: "particle particle-4" }), (0, jsx_runtime_1.jsx)("div", { className: "particle particle-5" }), (0, jsx_runtime_1.jsx)("div", { className: "particle particle-6" })] }), (0, jsx_runtime_1.jsx)("div", { className: "blog-hero-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "hero-content", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "blog-main-title", children: ["Welcome to ", (0, jsx_runtime_1.jsx)("span", { className: "gradient-text", children: "RecodeHive" }), " Blogs"] }), (0, jsx_runtime_1.jsx)("p", { className: "blog-main-subtitle", children: "Discover comprehensive web development articles, tutorials, and insights covering everything from HTML & CSS fundamentals to advanced JavaScript, React, Node.js, Data Structures & Algorithms, and cutting-edge technologies." })] }) })] }), (0, jsx_runtime_1.jsx)("section", { className: "latest-articles-section", children: (0, jsx_runtime_1.jsxs)("div", { className: "articles-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-header", children: (0, jsx_runtime_1.jsx)("div", { className: "search-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "search-wrapper", children: [(0, jsx_runtime_1.jsxs)("svg", { className: "search-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "11", cy: "11", r: "8" }), (0, jsx_runtime_1.jsx)("path", { d: "m21 21-4.35-4.35" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search articles by title, description, or topic...", className: "search-input", value: searchTerm, onChange: handleSearchChange }), searchTerm && ((0, jsx_runtime_1.jsx)("button", { className: "clear-search-icon", onClick: function () { return setSearchTerm(""); }, "aria-label": "Clear search", children: (0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", children: [(0, jsx_runtime_1.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), (0, jsx_runtime_1.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) }))] }) }) }), searchTerm && ((0, jsx_runtime_1.jsx)("div", { className: "search-results-info", children: (0, jsx_runtime_1.jsx)("p", { children: filteredBlogs.length > 0
                                            ? "Found ".concat(filteredBlogs.length, " article").concat(filteredBlogs.length !== 1 ? 's' : '', " for \"").concat(searchTerm, "\"")
                                            : "No articles found for \"".concat(searchTerm, "\"") }) })), (0, jsx_runtime_1.jsx)("div", { className: "articles-grid", children: filteredBlogs.length > 0 ? (filteredBlogs.map(function (blog, index) { return ((0, jsx_runtime_1.jsx)(BlogCard, { blog: blog, index: index }, blog.id)); })) : ((0, jsx_runtime_1.jsx)("div", { className: "no-results", children: (0, jsx_runtime_1.jsxs)("div", { className: "no-results-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "no-results-icon", children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)("h3", { children: "No articles found" }), (0, jsx_runtime_1.jsx)("p", { children: "Try adjusting your search terms or browse all articles." }), (0, jsx_runtime_1.jsx)("button", { className: "clear-search-btn", onClick: function () { return setSearchTerm(""); }, children: "Clear Search" })] }) })) })] }) })] })] }));
}
var BlogCard = function (_a) {
    var blog = _a.blog, index = _a.index;
    // Get category from blog title or description for demo purposes
    var getCategory = function (title) {
        if (title.toLowerCase().includes('design') || title.toLowerCase().includes('ux'))
            return 'Design';
        if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('deepmind'))
            return 'AI & Tech';
        if (title.toLowerCase().includes('github') || title.toLowerCase().includes('git'))
            return 'Development';
        return 'Resources';
    };
    // Get authors for this blog post
    var getAuthors = function (slug) {
        var authors = authorMapping[slug] || ["RecodeHive Team"];
        return authors.length > 1 ? authors.join(" & ") : authors[0];
    };
    var category = getCategory(blog.title);
    var authorName = getAuthors(blog.slug);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "article-card", children: [(0, jsx_runtime_1.jsx)("div", { className: "card-category", children: category }), (0, jsx_runtime_1.jsx)("div", { className: "card-image", children: (0, jsx_runtime_1.jsx)("img", { src: blog.image, alt: blog.title }) }), (0, jsx_runtime_1.jsxs)("div", { className: "card-content", children: [(0, jsx_runtime_1.jsx)("h3", { className: "card-title", children: blog.title }), (0, jsx_runtime_1.jsx)("p", { className: "card-description", children: blog.description }), (0, jsx_runtime_1.jsxs)("div", { className: "card-meta", children: [(0, jsx_runtime_1.jsxs)("div", { className: "card-author", children: [(0, jsx_runtime_1.jsx)("span", { className: "author-avatar", children: "\uD83D\uDC64" }), (0, jsx_runtime_1.jsx)("span", { className: "author-name", "data-full-name": authorName, children: authorName })] }), (0, jsx_runtime_1.jsx)("span", { className: "card-read-time", children: "5 min read" })] }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/blog/".concat(blog.slug), className: "card-read-more", children: "Read Article \u2192" })] })] }));
};
