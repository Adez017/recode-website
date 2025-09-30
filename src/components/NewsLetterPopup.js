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
var NewsletterPopup = function () {
    var _a = (0, react_1.useState)(false), showPopup = _a[0], setShowPopup = _a[1];
    (0, react_1.useEffect)(function () {
        var hasSubscribed = localStorage.getItem('recodehive_newsletter_popup');
        if (hasSubscribed !== 'true') {
            var handleScroll_1 = function () {
                var scrollPosition = window.scrollY + window.innerHeight;
                var pageHeight = document.body.scrollHeight;
                if ((scrollPosition / pageHeight) >= 0.8) {
                    setShowPopup(true);
                    window.removeEventListener('scroll', handleScroll_1);
                }
            };
            window.addEventListener('scroll', handleScroll_1);
            return function () { return window.removeEventListener('scroll', handleScroll_1); };
        }
    }, []);
    var handleClose = function () {
        setShowPopup(false);
        localStorage.setItem('recodehive_newsletter_popup', 'true');
    };
    if (!showPopup)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white/80 backdrop-blur-xl max-w-xl w-full rounded-3xl shadow-2xl p-8 text-center relative border border-gray-200 animate-fade-in", children: [(0, jsx_runtime_1.jsx)("img", { src: "/img/logo.png", alt: "RecodeHive Logo", className: "w-16 h-16 mx-auto mb-4 rounded-full shadow-md" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold mb-2 text-gray-900", children: "Sanjay\u2019s Substack" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-700 text-base leading-relaxed mb-4", children: ["Recodehive is an inclusive and welcoming platform where everyone can contribute, learn, and grow together. \u26A1 ", (0, jsx_runtime_1.jsx)("br", {}), "Check my \u2728 Website: ", (0, jsx_runtime_1.jsx)("a", { href: "https://www.recodehive.com", target: "_blank", className: "text-blue-600 hover:underline font-medium", children: "https://www.recodehive.com " }), (0, jsx_runtime_1.jsx)("br", {}), "\uD83D\uDCEE How to reach me: ", (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/sanjay-kv", target: "_blank", className: "text-blue-600 hover:underline font-medium", children: "github.com/sanjay-kv" }), (0, jsx_runtime_1.jsx)("br", {}), "\uD83D\uDC6B Join my opensource community"] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm font-semibold text-gray-700 mb-4", children: ["By ", (0, jsx_runtime_1.jsx)("span", { className: "text-gray-900", children: "Sanjay Viswanathan" }), " \u00B7 Over ", (0, jsx_runtime_1.jsx)("span", { className: "text-gray-900", children: "31,000 subscribers" })] }), (0, jsx_runtime_1.jsxs)("form", { className: "flex items-stretch w-full border-2 border-gray-300 rounded-xl overflow-hidden bg-white shadow-inner mb-4 focus-within:ring-2 focus-within:ring-blue-500", onSubmit: function (e) {
                        e.preventDefault();
                        alert('Subscribed! (Integrate with Substack API)');
                        handleClose();
                    }, children: [(0, jsx_runtime_1.jsx)("input", { type: "email", required: true, placeholder: "Type your email...", className: "flex-1 px-4 py-2 text-sm bg-transparent focus:outline-none text-gray-800 placeholder-gray-400" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 text-sm font-bold transition duration-300 hover:from-orange-500 hover:to-orange-700", children: "Subscribe" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-xs text-gray-500 mb-4", children: ["By subscribing, I agree to Substack\u2019s", ' ', (0, jsx_runtime_1.jsx)("a", { href: "#", className: "underline hover:text-blue-600", children: "Terms of Use" }), " and acknowledge its", ' ', (0, jsx_runtime_1.jsx)("a", { href: "#", className: "underline hover:text-blue-600", children: "Information Collection Notice" }), " and", ' ', (0, jsx_runtime_1.jsx)("a", { href: "#", className: "underline hover:text-blue-600", children: "Privacy Policy" }), "."] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleClose, className: "text-sm text-gray-600 font-medium hover:text-black transition", "aria-label": "Close newsletter popup", children: "No thanks \u2192" })] }) }));
};
exports.default = NewsletterPopup;
