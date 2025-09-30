"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLogo;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var ThemedImage_1 = __importDefault(require("@theme/ThemedImage"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
function LogoImage(_a) {
    var _b;
    var logo = _a.logo;
    var withBaseUrl = (0, useBaseUrl_1.useBaseUrlUtils)().withBaseUrl;
    var sources = {
        light: withBaseUrl(logo.src),
        dark: withBaseUrl((_b = logo.srcDark) !== null && _b !== void 0 ? _b : logo.src),
    };
    return ((0, jsx_runtime_1.jsx)(ThemedImage_1.default, { className: (0, clsx_1.default)('footer__logo', logo.className), alt: logo.alt, sources: sources, width: logo.width, height: logo.height, style: logo.style }));
}
function FooterLogo(_a) {
    var logo = _a.logo;
    return logo.href ? ((0, jsx_runtime_1.jsx)(Link_1.default, { href: logo.href, className: styles_module_css_1.default.footerLogoLink, target: logo.target, children: (0, jsx_runtime_1.jsx)(LogoImage, { logo: logo }) })) : ((0, jsx_runtime_1.jsx)(LogoImage, { logo: logo }));
}
