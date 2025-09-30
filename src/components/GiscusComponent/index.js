"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiscusComponent;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_2 = __importDefault(require("@giscus/react"));
var theme_common_1 = require("@docusaurus/theme-common");
require("./style.css");
/**
 * GiscusComponent
 *
 * A React component that integrates Giscus for GitHub discussions.
 *
 * @returns {JSX.Element} The rendered component
 */
function GiscusComponent() {
    var colorMode = (0, theme_common_1.useColorMode)().colorMode; // Retrieves the current color mode from Docusaurus theme
    return ((0, jsx_runtime_1.jsx)("div", { className: "giscus-component", children: (0, jsx_runtime_1.jsx)(react_2.default, { id: "giscus", repo: "CodeHarborHub/codeharborhub.github.io", repoId: "R_kgDOLiT30w", category: "Support", categoryId: "DIC_kwDOLiT3084CfRMi", mapping: "pathname", term: "Welcome to @giscus/react component!", strict: "0", reactionsEnabled: "1", emitMetadata: "0", inputPosition: "bottom", theme: colorMode, lang: "en", loading: "lazy" }) }));
}
