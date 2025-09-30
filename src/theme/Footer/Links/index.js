"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLinks;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var theme_common_1 = require("@docusaurus/theme-common");
var MultiColumn_1 = __importDefault(require("@theme/Footer/Links/MultiColumn"));
var Simple_1 = __importDefault(require("@theme/Footer/Links/Simple"));
function FooterLinks(_a) {
    var links = _a.links;
    return (0, theme_common_1.isMultiColumnFooterLinks)(links) ? ((0, jsx_runtime_1.jsx)(MultiColumn_1.default, { columns: links })) : ((0, jsx_runtime_1.jsx)(Simple_1.default, { links: links }));
}
