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
exports.LandingCommunity = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_slot_counter_1 = __importDefault(require("react-slot-counter"));
require("./LandingCommunity.css");
var statsProvider_1 = require("@site/src/lib/statsProvider");
var LandingCommunity = function (_a) {
    var className = _a.className;
    var _b = (0, statsProvider_1.useCommunityStatsContext)(), githubStarCountText = _b.githubStarCountText, githubContributorsCountText = _b.githubContributorsCountText, githubForksCountText = _b.githubForksCountText, githubReposCountText = _b.githubReposCountText, githubStarCount = _b.githubStarCount, githubContributorsCount = _b.githubContributorsCount, githubForksCount = _b.githubForksCount, githubReposCount = _b.githubReposCount, loading = _b.loading, error = _b.error;
    var generateList = (0, react_1.useMemo)(function () { return [
        {
            stat: githubStarCount,
            statText: githubStarCountText,
            description: "Stars across all our GitHub repositories, showcasing the support and appreciation from the community.",
            href: "https://github.com/recodehive/Support",
            label: "GitHub Stars"
        },
        {
            stat: githubReposCount,
            statText: githubReposCountText,
            description: "Live public projects on RecodHive, demonstrating the power of open-source collaboration.",
            href: "https://github.com/orgs/recodehive/repositories?q=visibility%3Apublic+archived%3Afalse",
            label: "Public Repositories"
        },
        {
            stat: githubContributorsCount,
            statText: githubContributorsCountText,
            description: "Amazing contributors who have made our repositories better and helped build our community.",
            href: "https://github.com/orgs/recodehive/people",
            label: "Contributors"
        },
        {
            stat: githubForksCount,
            statText: githubForksCountText,
            description: "Forks of our repositories, showing how our community extends and builds upon our work.",
            href: "https://github.com/orgs/recodehive/discussions",
            label: "Community Forks"
        },
    ]; }, [githubStarCount, githubStarCountText, githubReposCount, githubReposCountText, githubContributorsCount, githubContributorsCountText, githubForksCount, githubForksCountText]);
    var handleCardClick = function (href) {
        if (href) {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "landing-community ".concat(className || ""), children: [(0, jsx_runtime_1.jsxs)("div", { className: "landing-community__header", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "landing-community__title", children: ["Discover the strength of our", " ", (0, jsx_runtime_1.jsx)("span", { className: "landing-community__highlight", children: "amazing community" }), "."] }), error && ((0, jsx_runtime_1.jsx)("div", { className: "landing-community__error", children: (0, jsx_runtime_1.jsx)("small", { children: "\u26A0\uFE0F Stats may be cached or incomplete" }) }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "landing-community__content", children: [(0, jsx_runtime_1.jsx)("div", { className: "landing-community__stats", children: generateList.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "landing-community__stat-item ".concat(item.href ? 'clickable' : '', " ").concat(loading ? 'loading' : ''), onClick: function () { return handleCardClick(item.href); }, role: item.href ? "button" : "presentation", tabIndex: item.href ? 0 : -1, onKeyDown: function (e) {
                                if (item.href && (e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    handleCardClick(item.href);
                                }
                            }, title: item.href ? "Click to visit ".concat(item.label) : item.label, children: [(0, jsx_runtime_1.jsx)("div", { className: "landing-community__stat-value", children: loading ? ((0, jsx_runtime_1.jsx)("div", { className: "landing-community__loading", children: (0, jsx_runtime_1.jsx)("span", { className: "loading-spinner", children: "\u23F3" }) })) : ((0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)(react_slot_counter_1.default, { value: item.stat, duration: 2, animateOnVisible: {
                                                    triggerOnce: true,
                                                    rootMargin: '0px 0px -100px 0px'
                                                }, numberSlotClassName: "slot-counter-number", separatorClassName: "slot-counter-separator" }), item.href && (0, jsx_runtime_1.jsx)("span", { className: "external-link-icon", children: "\u2197" })] })) }), (0, jsx_runtime_1.jsx)("div", { className: "landing-community__stat-description", children: item.description })] }, index)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "landing-community__info clickable", onClick: function () { return handleCardClick("https://github.com/recodehive"); }, role: "button", tabIndex: 0, onKeyDown: function (e) {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleCardClick("https://github.com/recodehive");
                            }
                        }, title: "Click to visit RecodHive GitHub Organization", children: [(0, jsx_runtime_1.jsx)("img", { className: "landing-community__image", src: "/community.png", alt: "team collaboration", loading: "lazy" }), (0, jsx_runtime_1.jsxs)("div", { className: "landing-community__info-text", children: ["Our developers are the core of RecodHive community. We take pride in our", " ", (0, jsx_runtime_1.jsx)("span", { className: "landing-community__link", children: "GitHub organization" }), " ", "with amazing", " ", (0, jsx_runtime_1.jsx)("span", { className: "landing-community__link", children: "contributors and maintainers" }), " ", "powering RecodHive's growth.", (0, jsx_runtime_1.jsxs)("div", { className: "external-link-indicator", children: [(0, jsx_runtime_1.jsx)("span", { className: "external-link-icon", children: "\u2197" }), (0, jsx_runtime_1.jsx)("small", { children: "Click to explore our GitHub" })] })] })] })] })] }));
};
exports.LandingCommunity = LandingCommunity;
