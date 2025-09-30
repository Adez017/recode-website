"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocSidebarItems;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * DocSidebarItems - Container for sidebar item list
 *
 * This component is responsible for:
 * - Rendering the list of sidebar items (categories and links)
 * - Passing props to the DocSidebarItem component
 * - Managing the overall list structure
 * - Setting default active state to none on initial load
 *
 * It serves as the bridge between DocSidebar/Desktop and individual DocSidebarItem components.
 */
var react_1 = __importDefault(require("react"));
var DocSidebarItem_1 = __importDefault(require("@theme/DocSidebarItem"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
function DocSidebarItems(_a) {
    // Force empty activePath to disable default selection
    // This will prevent any sidebar items from being marked as active by default
    var items = _a.items, activePath = _a.activePath, _b = _a.level, level = _b === void 0 ? 0 : _b;
    // Get the current URL path
    var currentPath = typeof window !== "undefined" ? window.location.pathname : "";
    // Check if we're at the docs root page
    var isDocsRootPath = currentPath === "/" ||
        currentPath === "/docs" ||
        currentPath === "/docs/" ||
        currentPath.startsWith("/docs/GitHub/intro-github");
    // If we're at the docs root, force an empty active path
    var effectiveActivePath = isDocsRootPath ? "" : activePath;
    return ((0, jsx_runtime_1.jsx)("ul", { className: "menu__list", children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: index === 0 ? styles_module_css_1.default.firstItem : "", children: (0, jsx_runtime_1.jsx)(DocSidebarItem_1.default, { item: item, index: index, activePath: effectiveActivePath, level: level }) }, index)); }) }));
}
