"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa");
var fa6_1 = require("react-icons/fa6");
var SponsorCard = function (_a) {
    var name = _a.name, image = _a.image, description = _a.description, github = _a.github, linkedin = _a.linkedin, twitter = _a.twitter, instagram = _a.instagram;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sponsor-card", children: [(0, jsx_runtime_1.jsx)("div", { className: "avatar-wrapper", children: (0, jsx_runtime_1.jsx)("img", { src: image, alt: name }) }), (0, jsx_runtime_1.jsx)("h3", { className: "sponsor-name", children: name }), (0, jsx_runtime_1.jsx)("p", { className: "sponsor-desc", children: description }), (0, jsx_runtime_1.jsxs)("div", { className: "social-links", children: [github && (0, jsx_runtime_1.jsx)("a", { href: github, target: "_blank", rel: "noopener noreferrer", className: "github", children: (0, jsx_runtime_1.jsx)(fa_1.FaGithub, {}) }), linkedin && (0, jsx_runtime_1.jsx)("a", { href: linkedin, target: "_blank", rel: "noopener noreferrer", className: "linkedin", children: (0, jsx_runtime_1.jsx)(fa_1.FaLinkedin, {}) }), twitter && (0, jsx_runtime_1.jsx)("a", { href: twitter, target: "_blank", rel: "noopener noreferrer", className: "twitter", children: (0, jsx_runtime_1.jsx)(fa6_1.FaXTwitter, {}) }), instagram && (0, jsx_runtime_1.jsx)("a", { href: instagram, target: "_blank", rel: "noopener noreferrer", className: "instagram", children: (0, jsx_runtime_1.jsx)(fa_1.FaInstagram, {}) })] })] }));
};
exports.default = SponsorCard;
