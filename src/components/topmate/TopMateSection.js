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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var TopMateCard_1 = __importDefault(require("./TopMateCard"));
var theme_common_1 = require("@docusaurus/theme-common");
var TopMateSection = function (_a) {
    var setShowTopmate = _a.setShowTopmate;
    var colorMode = (0, theme_common_1.useColorMode)().colorMode; // Get current theme: 'light' or 'dark'
    var profileData = {
        title: "1:1 Mentorship Call",
        description: "Book a slot, Free for Hive Community Members",
        duration: "30 mins",
        profileImage: "/sanjay.png",
        username: "sanjaykv",
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "mx-auto", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mx-auto text-center mb-16", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold mb-4 ".concat(colorMode === "dark" ? "text-white" : "text-gray-900"), children: "Book a Session" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg ".concat(colorMode === "dark" ? "text-gray-300" : "text-gray-600"), children: "Get personalized guidance and feedback through one-on-one sessions" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(TopMateCard_1.default, __assign({}, profileData, { setShowTopmate: setShowTopmate })) })] }) }));
};
exports.default = TopMateSection;
