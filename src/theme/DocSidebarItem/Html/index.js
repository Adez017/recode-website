"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocSidebarItemHtml;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * DocSidebarItemHtml - Component for rendering custom HTML in sidebar
 *
 * This component handles:
 * - Rendering custom HTML content in the sidebar
 * - Preserving any custom classes
 * - Safely injecting HTML using dangerouslySetInnerHTML
 * - Managing accessibility through tabIndex
 */
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
function DocSidebarItemHtml(_a) {
    var item = _a.item, level = _a.level, tabIndex = _a.tabIndex, 
    // We're receiving these props but not using them in this component
    activePath = _a.activePath, index = _a.index;
    var value = item.value, className = item.className;
    return ((0, jsx_runtime_1.jsx)("li", { className: (0, clsx_1.default)("menu__list-item", className), dangerouslySetInnerHTML: { __html: value }, tabIndex: tabIndex }));
}
