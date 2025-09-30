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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarContent;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var NavbarItem_1 = __importDefault(require("@theme/NavbarItem"));
var ColorModeToggle_1 = __importDefault(require("@theme/Navbar/ColorModeToggle"));
var SearchBar_1 = __importDefault(require("@theme/SearchBar"));
var Toggle_1 = __importDefault(require("@theme/Navbar/MobileSidebar/Toggle"));
var Logo_1 = __importDefault(require("@theme/Navbar/Logo"));
var Search_1 = __importDefault(require("@theme/Navbar/Search"));
function useNavbarItems() {
    return (0, theme_common_1.useThemeConfig)().navbar.items;
}
function NavbarItems(_a) {
    var items = _a.items;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: items.map(function (item, i) {
            var key = "".concat(item.label || item.to || item.href || 'item', "-").concat(i);
            return ((0, jsx_runtime_1.jsx)(theme_common_1.ErrorCauseBoundary, { onError: function (error) {
                    return new Error("A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n".concat(JSON.stringify(item, null, 2)), { cause: error });
                }, children: (0, jsx_runtime_1.jsx)(NavbarItem_1.default, __assign({}, item)) }, key));
        }) }));
}
function NavbarContentLayout(_a) {
    var left = _a.left, right = _a.right;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "navbar__inner", children: [(0, jsx_runtime_1.jsx)("div", { className: "navbar__items", children: left }), (0, jsx_runtime_1.jsx)("div", { className: "navbar__items navbar__items--right", children: right })] }));
}
function NavbarContent() {
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    var items = useNavbarItems();
    var _a = (0, react_1.useMemo)(function () { return (0, internal_1.splitNavbarItems)(items); }, [items]), leftItems = _a[0], rightItems = _a[1];
    var searchBarItem = (0, react_1.useMemo)(function () { return items.find(function (item) { return item.type === 'search'; }); }, [items]);
    return ((0, jsx_runtime_1.jsx)(NavbarContentLayout, { left: 
        // TODO stop hardcoding items?
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!mobileSidebar.disabled && (0, jsx_runtime_1.jsx)(Toggle_1.default, {}), (0, jsx_runtime_1.jsx)(Logo_1.default, {}), (0, jsx_runtime_1.jsx)(NavbarItems, { items: leftItems })] }), right: 
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavbarItems, { items: rightItems }), (0, jsx_runtime_1.jsx)(ColorModeToggle_1.default, {}), !searchBarItem && ((0, jsx_runtime_1.jsx)(Search_1.default, { children: (0, jsx_runtime_1.jsx)(SearchBar_1.default, {}) }))] }) }));
}
