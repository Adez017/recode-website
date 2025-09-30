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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocSidebarItemLink;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * DocSidebarItemLink - Component for rendering sidebar link items
 *
 * This component is responsible for:
 * - Rendering individual documentation page links
 * - Handling active state styling
 * - Managing click behavior and navigation
 */
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var theme_common_1 = require("@docusaurus/theme-common");
var Link_1 = __importDefault(require("@docusaurus/Link"));
var isInternalUrl_1 = __importDefault(require("@docusaurus/isInternalUrl"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
// Utility to determine if a sidebar item is active
function isActiveSidebarItem(item, activePath) {
    if (!activePath) {
        return false;
    }
    return item.href === activePath;
}
function DocSidebarItemLink(_a) {
    var item = _a.item, onItemClick = _a.onItemClick, activePath = _a.activePath, level = _a.level, index = _a.index, props = __rest(_a, ["item", "onItemClick", "activePath", "level", "index"]);
    var href = item.href, label = item.label, className = item.className, autoAddBaseUrl = item.autoAddBaseUrl;
    // Determine if item is active based on path matching
    var isActive = isActiveSidebarItem(item, activePath);
    var isInternalLink = (0, isInternalUrl_1.default)(href);
    return ((0, jsx_runtime_1.jsx)("li", { className: (0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docSidebarItemLink, theme_common_1.ThemeClassNames.docs.docSidebarItemLinkLevel(level), "menu__list-item", className, styles_module_css_1.default.linkItem), children: (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ className: (0, clsx_1.default)("menu__link", {
                "menu__link--active": isActive,
            }, styles_module_css_1.default.menuLink), autoAddBaseUrl: autoAddBaseUrl, "aria-current": isActive ? "page" : undefined, to: href }, (isInternalLink && {
            onClick: onItemClick ? function () { return onItemClick(item); } : undefined,
        }), props, { children: (0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.linkContent, children: [(0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.linkDot }), (0, jsx_runtime_1.jsx)("span", { children: label })] }) })) }, label));
}
