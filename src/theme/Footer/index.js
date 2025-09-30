"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var theme_common_1 = require("@docusaurus/theme-common");
var Layout_1 = __importDefault(require("@theme/Footer/Layout"));
var Copyright_1 = __importDefault(require("@theme/Footer/Copyright"));
var Logo_1 = __importDefault(require("@theme/Footer/Logo"));
var Links_1 = __importDefault(require("@theme/Footer/Links"));
function Footer() {
    var footer = (0, theme_common_1.useThemeConfig)().footer;
    if (!footer) {
        return null;
    }
    var copyright = footer.copyright, links = footer.links, logo = footer.logo, style = footer.style;
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { style: style, links: links && (0, jsx_runtime_1.jsx)(Links_1.default, { links: links }), logo: logo && (0, jsx_runtime_1.jsx)(Logo_1.default, { logo: logo }), copyright: copyright && (0, jsx_runtime_1.jsx)(Copyright_1.default, { copyright: copyright }) }));
}
exports.default = react_1.default.memo(Footer);
