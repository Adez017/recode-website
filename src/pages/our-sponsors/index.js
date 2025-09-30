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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var SponsorCard_1 = __importDefault(require("./SponsorCard"));
require("./Sponsors.css");
var Layout_1 = __importDefault(require("@theme/Layout"));
var fa_1 = require("react-icons/fa");
var Head_1 = __importDefault(require("@docusaurus/Head"));
var sponsors_1 = __importDefault(require("@site/src/database/sponsors"));
var router_1 = require("@docusaurus/router");
var OurSponsors = function () {
    var _a = (0, react_1.useState)(false), showScanner = _a[0], setShowScanner = _a[1];
    var _b = (0, react_1.useState)('current'), activeTab = _b[0], setActiveTab = _b[1];
    var modalRef = (0, react_1.useRef)(null);
    var history = (0, router_1.useHistory)();
    // Filter for current sponsors (exclude isWeSponsor)
    var currentSponsors = sponsors_1.default.filter(function (s) { return !s.isPastSponsor && !s.isWeSponsor; });
    var pastSponsors = sponsors_1.default.filter(function (s) { return s.isPastSponsor; });
    // Filter for people we sponsor
    var weSponsorPeople = sponsors_1.default.filter(function (s) { return s.isWeSponsor; });
    var handleJoinSponsor = function () { return setShowScanner(true); };
    var handlePaymentSuccess = function () {
        setShowScanner(false);
        alert("Thanks, we will redirect to Github Sponsors page, upon sponsoring you will be added to our sponsors list.");
        window.location.href = 'https://github.com/sponsors/sanjay-kv?o=esb';
    };
    var handleCloseModal = function () { return setShowScanner(false); };
    var handleTabChange = function (tab) {
        setActiveTab(tab);
    };
    (0, react_1.useEffect)(function () {
        if (!showScanner)
            return;
        var controller = new AbortController();
        var signal = controller.signal;
        var handleKeyDown = function (e) {
            if (e.key === 'Escape')
                handleCloseModal();
        };
        var handleClickOutside = function (e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown, { signal: signal });
        document.addEventListener('mousedown', handleClickOutside, { signal: signal });
        return function () { return controller.abort(); };
    }, [showScanner]);
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { children: [(0, jsx_runtime_1.jsx)(Head_1.default, { children: (0, jsx_runtime_1.jsx)("script", { async: true, "custom-element": "amp-auto-ads", src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "sponsor-page", children: [(0, jsx_runtime_1.jsxs)("div", { className: "sponsor-header", children: [(0, jsx_runtime_1.jsx)("h1", { className: "TitleText", children: "Our Valued Sponsors" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Join us in empowering the open-source community through your generous support. Your sponsorship directly fuels innovation by enabling developers to create valuable resources and maintain our growing knowledge base.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "We deeply appreciate your commitment to advancing open-source technology and education."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "sponsors-section", children: [(0, jsx_runtime_1.jsxs)("div", { className: "tabs", children: [(0, jsx_runtime_1.jsxs)("button", { className: "tab-button ".concat(activeTab === 'current' ? 'active' : ''), onClick: function () { return handleTabChange('current'); }, children: ["Current Sponsors", (0, jsx_runtime_1.jsx)("span", { className: "tab-badge", children: currentSponsors.length })] }), (0, jsx_runtime_1.jsxs)("button", { className: "tab-button ".concat(activeTab === 'past' ? 'active' : ''), onClick: function () { return handleTabChange('past'); }, children: ["People We Sponsored", weSponsorPeople.length > 0 && ((0, jsx_runtime_1.jsx)("span", { className: "tab-badge", children: weSponsorPeople.length }))] })] }), (0, jsx_runtime_1.jsx)("div", { className: "tab-content ".concat(activeTab === 'current' ? 'active' : ''), children: (0, jsx_runtime_1.jsxs)("div", { className: "sponsors-section", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold text-gray-800 mb-4 mt-2", children: "Current Sponsors" }), (0, jsx_runtime_1.jsxs)("div", { className: "sponsors-list", children: [currentSponsors.length > 0 ? (currentSponsors.map(function (sponsor) { return ((0, jsx_runtime_1.jsx)(SponsorCard_1.default, __assign({}, sponsor), "".concat(sponsor.name, "-current"))); })) : ((0, jsx_runtime_1.jsx)("div", { className: "no-sponsors", children: (0, jsx_runtime_1.jsx)("p", { children: "We're actively seeking visionary sponsors to partner with us in supporting the open-source community." }) })), (0, jsx_runtime_1.jsx)("div", { className: "sponsor-card empty-card group", onClick: handleJoinSponsor, role: "button", tabIndex: 0, children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors duration-200", children: (0, jsx_runtime_1.jsx)(fa_1.FaPlusCircle, { className: "text-3xl text-indigo-500 group-hover:text-indigo-600 transition-colors duration-200" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-indigo-700 mb-1 group-hover:text-indigo-800 transition-colors duration-200", children: "Partner With Us" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200", children: "Support innovation in open-source development" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-3 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200", children: ["Join us", (0, jsx_runtime_1.jsx)("svg", { className: "ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })] })] }) })] }), pastSponsors.length > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold text-gray-800 mb-4 mt-12", children: "Past Sponsors" }), (0, jsx_runtime_1.jsx)("div", { className: "sponsors-list", children: pastSponsors.map(function (sponsor) { return ((0, jsx_runtime_1.jsx)(SponsorCard_1.default, __assign({}, sponsor), "".concat(sponsor.name, "-past-in-current"))); }) })] }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: "tab-content ".concat(activeTab === 'past' ? 'active' : ''), children: weSponsorPeople.length > 0 ? ((0, jsx_runtime_1.jsx)("div", { className: "sponsors-list", children: weSponsorPeople.map(function (sponsor) { return ((0, jsx_runtime_1.jsx)(SponsorCard_1.default, __assign({}, sponsor), "".concat(sponsor.name, "-wesponsor"))); }) })) : ((0, jsx_runtime_1.jsx)("div", { className: "no-sponsors", children: (0, jsx_runtime_1.jsx)("p", { children: "We look forward to recognizing our future sponsors here." }) })) })] }), showScanner && ((0, jsx_runtime_1.jsx)("div", { className: "scanner-popup", role: "dialog", "aria-modal": "true", children: (0, jsx_runtime_1.jsxs)("div", { className: "scanner-content", ref: modalRef, children: [(0, jsx_runtime_1.jsx)("button", { className: "close-button", "aria-label": "Close", onClick: handleCloseModal, children: (0, jsx_runtime_1.jsx)(fa_1.FaTimes, { size: 20 }) }), (0, jsx_runtime_1.jsx)("h2", { className: "TitleText", children: "Become a Valued Partner" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 mb-6", children: "Join our mission to advance open-source innovation and education through your sponsorship" }), (0, jsx_runtime_1.jsx)("div", { className: "relative inline-flex", children: (0, jsx_runtime_1.jsxs)("button", { className: "scanner-button group", onClick: handlePaymentSuccess, children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-4 opacity-0 group-hover:opacity-100 group-hover:left-6 transition-all duration-300", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.1-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }) }) }), (0, jsx_runtime_1.jsx)("span", { className: "relative transition-all duration-300 group-hover:translate-x-2", children: "Sponsor on GitHub" }), (0, jsx_runtime_1.jsx)("span", { className: "absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) }) })] }) })] }) })), (0, jsx_runtime_1.jsx)("div", { className: "support-links mt-6", children: (0, jsx_runtime_1.jsx)("iframe", { src: "https://github.com/sponsors/sanjay-kv/button", title: "Sponsor Sanjay Viswanathan on GitHub", height: "32", width: "114", style: { border: 0, borderRadius: "6px" } }) })] })] }));
};
exports.default = OurSponsors;
