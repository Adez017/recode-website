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
exports.default = DocSidebar;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * DocSidebar/Desktop - Main sidebar container component
 *
 * This is the top-level component in the sidebar hierarchy that renders
 * the main documentation sidebar container. It's responsible for:
 * - Rendering the overall sidebar structure
 * - Handling sidebar visibility states
 * - Rendering DocSidebarItems component which handles the item list
 */
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var theme_common_1 = require("@docusaurus/theme-common");
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var DocSidebarItems_1 = __importDefault(require("@theme/DocSidebarItems"));
// Using a custom layout for desktop navigation
function DocSidebarDesktop(_a) {
    var _b;
    var path = _a.path, sidebar = _a.sidebar, onCollapse = _a.onCollapse, isHidden = _a.isHidden;
    var _c = (0, theme_common_1.useThemeConfig)(), hideOnScroll = _c.navbar.hideOnScroll, hideable = _c.docs.sidebar.hideable;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(styles_module_css_1.default.sidebar, styles_module_css_1.default.sidebarWithHideableNavbar, (_b = {},
            _b[styles_module_css_1.default.sidebarHidden] = isHidden,
            _b)), children: (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.sidebarInner, children: (0, jsx_runtime_1.jsx)("nav", { className: (0, clsx_1.default)("menu", styles_module_css_1.default.menu), children: (0, jsx_runtime_1.jsx)(DocSidebarItems_1.default, { items: sidebar, activePath: path, level: 0 }) }) }) }));
}
function DocSidebar(props) {
    return (0, jsx_runtime_1.jsx)(DocSidebarDesktop, __assign({}, props));
}
