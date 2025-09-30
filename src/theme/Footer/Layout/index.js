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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLayout;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
require("./enhanced-footer.css");
var Counter_1 = __importDefault(require("./Counter"));
var react_dom_1 = require("react-dom");
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function FooterLayout(_a) {
    var _this = this;
    var style = _a.style, links = _a.links, logo = _a.logo, copyright = _a.copyright;
    var _b = (0, react_1.useState)(new Date().getFullYear()), currentYear = _b[0], setCurrentYear = _b[1];
    var _c = (0, react_1.useState)({
        activeUsers: "50K+",
        tutorials: "200+",
        successRate: "95%",
        supportHours: "24/7",
    }), stats = _c[0], setStats = _c[1];
    var _d = (0, react_1.useState)(""), email = _d[0], setEmail = _d[1];
    var _e = (0, react_1.useState)(false), isSubscribed = _e[0], setIsSubscribed = _e[1];
    var _f = (0, react_1.useState)(false), showToast = _f[0], setShowToast = _f[1];
    var _g = (0, react_1.useState)(""), error = _g[0], setError = _g[1];
    (0, react_1.useEffect)(function () {
        // Simulate real-time stats updates
        var fetchStats = function () { return __awaiter(_this, void 0, void 0, function () {
            var baseUsers, baseTutorials, randomGrowth;
            return __generator(this, function (_a) {
                try {
                    baseUsers = 52000;
                    baseTutorials = 215;
                    randomGrowth = Math.floor(Math.random() * 100);
                    setStats({
                        activeUsers: "".concat(Math.floor((baseUsers + randomGrowth) / 1000), "K+"),
                        tutorials: "".concat(baseTutorials + Math.floor(randomGrowth / 10), "+"),
                        successRate: "".concat(95 + Math.floor(Math.random() * 3), "%"),
                        supportHours: "24/7",
                    });
                }
                catch (error) {
                    console.log("Using fallback stats");
                }
                return [2 /*return*/];
            });
        }); };
        fetchStats();
        var interval = setInterval(fetchStats, 30000); // Update every 30 seconds
        return function () { return clearInterval(interval); };
    }, []);
    var handleSubscribe = function (e) {
        e.preventDefault();
        if (!email) {
            setError("Email is required");
            return;
        }
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        setError("");
        setIsSubscribed(true);
        setShowToast(true);
        // Hide toast after 3 seconds
        setTimeout(function () {
            setShowToast(false);
        }, 3000);
        // Reset form after 3 seconds
        setTimeout(function () {
            setIsSubscribed(false);
            setEmail("");
        }, 3000);
    };
    return ((0, jsx_runtime_1.jsxs)("footer", { className: "enhanced-footer", children: [showToast &&
                (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", { className: "newsletter-toast", children: (0, jsx_runtime_1.jsxs)("div", { className: "toast-content", children: [(0, jsx_runtime_1.jsx)("span", { className: "toast-icon", children: "\uD83C\uDF89" }), (0, jsx_runtime_1.jsxs)("div", { className: "toast-message", children: [(0, jsx_runtime_1.jsx)("h4", { children: "Successfully Subscribed!" }), (0, jsx_runtime_1.jsx)("p", { children: "Thank you for joining our newsletter." })] }), (0, jsx_runtime_1.jsx)("button", { className: "toast-close", onClick: function () { return setShowToast(false); }, "aria-label": "Close notification", children: "\u00D7" })] }) }), document.body // 👈 mounts toast directly to <body>, outside footer
                ), (0, jsx_runtime_1.jsx)("div", { className: "footer-hero", children: (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-hero-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "footer-logo-section", children: (0, jsx_runtime_1.jsxs)("div", { className: "footer-logo", children: [(0, jsx_runtime_1.jsx)("div", { className: "logo-container", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/logo.png", alt: "recodehive", className: "footer-logo-img" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-brand-header", children: [(0, jsx_runtime_1.jsx)("h1", { className: "footer-brand-title", children: "recodehive" }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-trust-badge", children: [(0, jsx_runtime_1.jsxs)("div", { className: "trust-stars", children: [(0, jsx_runtime_1.jsx)("span", { className: "star", children: "\u2B50" }), (0, jsx_runtime_1.jsx)("span", { className: "star", children: "\u2B50" }), (0, jsx_runtime_1.jsx)("span", { className: "star", children: "\u2B50" }), (0, jsx_runtime_1.jsx)("span", { className: "star", children: "\u2B50" }), (0, jsx_runtime_1.jsx)("span", { className: "star", children: "\u2B50" })] }), (0, jsx_runtime_1.jsx)("span", { className: "trust-text", children: "Trusted by 50K+ developers" })] })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-hero-text", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Empowering the Next Generation of Developers" }), (0, jsx_runtime_1.jsx)("p", { children: "Master cutting-edge technologies, build innovative projects, and join a thriving community of developers passionate about open-source innovation and continuous learning." })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-item", title: "Growing community of active learners", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-icon stat-icon-learners", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 6H4zm16.5-9.5L19 7l-7.5 7.5L9 12l-2.5 2.5L4 12l7.5-7.5L14 7l6.5 1.5z" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-number", children: (0, jsx_runtime_1.jsx)(Counter_1.default, { value: parseInt(stats.activeUsers), suffix: "K+" }) }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label", children: "Active Learners" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", title: "Comprehensive tutorials and courses", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-icon stat-icon-tutorials", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-number", children: (0, jsx_runtime_1.jsx)(Counter_1.default, { value: parseInt(stats.tutorials), suffix: "+" }) }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label", children: "Tutorials" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", title: "High success rate in learning outcomes", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-icon stat-icon-success", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-number", children: (0, jsx_runtime_1.jsx)(Counter_1.default, { value: parseInt(stats.successRate), suffix: "%" }) }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label", children: "Success Rate" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", title: "Round-the-clock community support", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-icon stat-icon-support", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-number", children: stats.supportHours }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label", children: "Support" })] })] })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "footer-links-section", children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "footer-links-grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-column", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "footer-column-title", children: [(0, jsx_runtime_1.jsx)("div", { className: "column-icon resources-icon", children: "\uD83D\uDCDA" }), "Learning"] }), (0, jsx_runtime_1.jsxs)("ul", { className: "footer-links", children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "#", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83D\uDCD6" }), "Documentation", (0, jsx_runtime_1.jsx)("span", { className: "link-badge popular", children: "Popular" })] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/courses", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83C\uDFA5" }), "Video Courses", (0, jsx_runtime_1.jsx)("span", { className: "link-badge new", children: "New" })] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/get-started", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83D\uDE80" }), "Get Started"] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/interview-prep", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83E\uDDE9" }), "Interview Prep", (0, jsx_runtime_1.jsx)("span", { className: "link-badge hot", children: "Hot" })] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/badges/github-badges", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83C\uDFC6" }), "GitHub Badges"] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-column", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "footer-column-title", children: [(0, jsx_runtime_1.jsx)("div", { className: "column-icon company-icon", children: "\uD83C\uDFE2" }), "Company"] }), (0, jsx_runtime_1.jsxs)("ul", { className: "footer-links", children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/community", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83D\uDC65" }), "Community"] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/blogs", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83D\uDCF0" }), "Our Blog"] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/careers", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83D\uDCBC" }), "Careers", (0, jsx_runtime_1.jsx)("span", { className: "link-badge hiring", children: "We're Hiring!" })] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/our-sponsors", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83E\uDD1D" }), "Our Sponsors"] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/showcase", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83C\uDF1F" }), "Showcase"] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-column", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "footer-column-title", children: [(0, jsx_runtime_1.jsx)("div", { className: "column-icon support-icon", children: "\uD83D\uDEE0\uFE0F" }), "Support"] }), (0, jsx_runtime_1.jsxs)("ul", { className: "footer-links", children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/contact-us", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\u2753" }), "Contact Us"] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/broadcasts", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83D\uDCFA" }), "Broadcasts"] }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/podcasts", className: "footer-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "link-icon", children: "\uD83C\uDF99\uFE0F" }), "Podcasts"] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-column newsletter-column", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "footer-column-title", children: [(0, jsx_runtime_1.jsx)("div", { className: "column-icon newsletter-icon", children: "\uD83D\uDCE7" }), "Stay in the Loop"] }), (0, jsx_runtime_1.jsxs)("p", { className: "newsletter-description", children: ["Join ", stats.activeUsers, " developers getting weekly insights, tutorials, and exclusive content."] }), (0, jsx_runtime_1.jsxs)("form", { className: "newsletter-form", onSubmit: handleSubscribe, children: [(0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "your@email.com", className: "newsletter-input", value: email, onChange: function (e) {
                                                    setEmail(e.target.value);
                                                    setError("");
                                                }, required: true }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "newsletter-button ".concat(isSubscribed ? "subscribed" : ""), disabled: isSubscribed, children: isSubscribed ? "✓ Subscribed!" : "Subscribe Now →" }), error && (0, jsx_runtime_1.jsx)("p", { className: "error-text", children: error })] }), (0, jsx_runtime_1.jsx)("div", { className: "newsletter-stats", children: (0, jsx_runtime_1.jsx)("span", { className: "newsletter-stat", children: "\uD83D\uDCCA 1.2K+ developers joined this week" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "quick-links-section newsletter-quick-links", children: [(0, jsx_runtime_1.jsxs)("h4", { className: "quick-links-title", children: [(0, jsx_runtime_1.jsx)("span", { className: "links-icon", children: "\uD83D\uDD17" }), "QUICK LINKS"] }), (0, jsx_runtime_1.jsxs)("div", { className: "quick-links-list", children: [(0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/get-started", className: "quick-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "quick-link-icon", children: "\uD83D\uDE80" }), "Get Started"] }), (0, jsx_runtime_1.jsxs)(Link_1.default, { to: "/dashboard", className: "quick-link", children: [(0, jsx_runtime_1.jsx)("span", { className: "quick-link-icon", children: "\uD83D\uDCCA" }), "Dashboard"] })] })] })] })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "footer-bottom", children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "footer-bottom-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "footer-bottom-left", children: (0, jsx_runtime_1.jsxs)("div", { className: "footer-social-links", children: [(0, jsx_runtime_1.jsx)("span", { className: "social-label", children: "Connect & Follow:" }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "https://github.com/recodehive", className: "social-link github", "aria-label": "GitHub", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" }) }) }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "https://x.com/sanjay_kv_", className: "social-link twitter", "aria-label": "Twitter", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "https://www.instagram.com/nomad_brains/", className: "social-link instagram", "aria-label": "Instagram", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) }) }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "https://www.linkedin.com/in/sanjay-k-v/", className: "social-link linkedin", "aria-label": "LinkedIn", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "footer-bottom-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "footer-legal-links", children: [(0, jsx_runtime_1.jsx)(Link_1.default, { to: "/privacy-policy", className: "legal-link", children: "Privacy Policy" }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/terms-service", className: "legal-link", children: "Terms of Service" }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/code-of-conduct", className: "legal-link", children: "Code of Conduct" }), (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/License", className: "legal-link", children: "License" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "footer-bottom-right", children: (0, jsx_runtime_1.jsx)("div", { className: "footer-copyright", children: (0, jsx_runtime_1.jsxs)("span", { children: ["\u00A9 ", currentYear, " recodehive. Made with \u2764\uFE0F by the Community."] }) }) })] }) }) })] }));
}
