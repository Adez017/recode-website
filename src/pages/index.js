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
exports.default = Home;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var useDocusaurusContext_1 = __importDefault(require("@docusaurus/useDocusaurusContext"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var Head_1 = __importDefault(require("@docusaurus/Head"));
var header_1 = __importDefault(require("../components/header/header"));
var bottom_to_top_1 = __importDefault(require("../components/scroll/bottom-to-top"));
var top_to_bottom_1 = __importDefault(require("../components/scroll/top-to-bottom"));
var blogCarousel_1 = require("../components/blogCarousel/blogCarousel");
var projects_1 = __importDefault(require("../database/projects/projects"));
var ourProjects_1 = __importDefault(require("../components/ourProjects"));
var TopMateSection_1 = __importDefault(require("../components/topmate/TopMateSection"));
var TestimonialCarousel_1 = require("../components/testimonials/TestimonialCarousel");
var statsProvider_1 = require("../lib/statsProvider");
var Community_1 = require("../components/Community");
var faqs_1 = __importDefault(require("../components/faqs/faqs"));
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var _a = (0, react_1.useState)(true), showTopmate = _a[0], setShowTopmate = _a[1];
    (0, react_1.useEffect)(function () {
        // Add page transition animation on mount
        var mainElement = document.querySelector("main");
        if (mainElement) {
            mainElement.style.opacity = "0";
            mainElement.style.transform = "translateY(20px)";
            mainElement.style.transition =
                "opacity 0.6s ease-out, transform 0.6s ease-out";
            // Trigger animation after a brief delay
            setTimeout(function () {
                mainElement.style.opacity = "1";
                mainElement.style.transform = "translateY(0)";
            }, 100);
        }
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { title: "".concat(siteConfig.title), description: "Welcome to Recodehive. Learn the basics to advanced concepts of web development. sql, python, Cloud, GitHub and more.", children: [(0, jsx_runtime_1.jsx)(Head_1.default, { children: (0, jsx_runtime_1.jsx)("script", { async: true, "custom-element": "amp-auto-ads", src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js" }) }), (0, jsx_runtime_1.jsx)("div", { className: "transition-colors duration-300", style: {
                    backgroundColor: "var(--ifm-background-color)",
                    color: "var(--ifm-font-color-base)",
                }, children: (0, jsx_runtime_1.jsxs)("main", { className: "transition-colors duration-300 page-enter", style: {
                        backgroundColor: "var(--ifm-background-color)",
                        color: "var(--ifm-font-color-base)",
                    }, children: [(0, jsx_runtime_1.jsx)("div", { className: "m-4", children: (0, jsx_runtime_1.jsx)(header_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "blog-carousel-section", children: (0, jsx_runtime_1.jsx)(blogCarousel_1.BlogCarousel, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "m-4", onClick: function () { return (window.location.href = "https://www.sanjaykv.com/"); }, children: (0, jsx_runtime_1.jsx)("img", { src: "/selfhero.png", alt: "recodehive", className: "w-full h-full object-cover rounded-2xl cursor-pointer" }) }), (0, jsx_runtime_1.jsx)("div", { className: "m-4", children: (0, jsx_runtime_1.jsx)(ourProjects_1.default, { OurProjectsData: projects_1.default }) }), (0, jsx_runtime_1.jsxs)("div", { className: "m-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8", children: [showTopmate && ((0, jsx_runtime_1.jsx)("div", { className: "col-span-1", children: (0, jsx_runtime_1.jsx)(TopMateSection_1.default, { setShowTopmate: setShowTopmate }) })), (0, jsx_runtime_1.jsx)("div", { className: showTopmate ? "col-span-2" : "col-span-3", children: (0, jsx_runtime_1.jsx)(TestimonialCarousel_1.TestimonialCarousel, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: "m-4", children: (0, jsx_runtime_1.jsx)(statsProvider_1.CommunityStatsProvider, { children: (0, jsx_runtime_1.jsx)(Community_1.LandingCommunity, { className: "recodehive" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "m-4", children: (0, jsx_runtime_1.jsx)(faqs_1.default, {}) }), (0, jsx_runtime_1.jsx)(top_to_bottom_1.default, {}), (0, jsx_runtime_1.jsx)(bottom_to_top_1.default, {})] }) })] }));
}
