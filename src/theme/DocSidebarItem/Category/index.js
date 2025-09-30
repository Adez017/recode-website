"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * DocSidebarItemCategory - Component for rendering collapsible sidebar categories
 *
 * This component is responsible for:
 * - Rendering collapsible sections/folders in the sidebar
 * - Managing expand/collapse state
 * - Handling active state for categories
 * - Rendering nested DocSidebarItem components for child items
 */
var react_1 = __importStar(require("react"));
var theme_common_1 = require("@docusaurus/theme-common");
// Create a simple isSamePath utility since we can't import it
function isSamePath(path1, path2) {
    // If either path is empty or null, return false (no active items)
    if (!path1 || !path2) {
        return false;
    }
    // Simple path comparison function
    return path1 === path2;
}
var lucide_react_1 = require("lucide-react");
var Link_1 = __importDefault(require("@docusaurus/Link"));
var clsx_1 = __importDefault(require("clsx"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
// Recursively get all doc ids from sidebar
function getAllDocIds(items) {
    var ids = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.type === "category") {
            // Include the category's href if it exists
            if (item.href) {
                ids.push(item.href);
            }
            ids = __spreadArray(__spreadArray([], ids, true), getAllDocIds(item.items), true);
        }
        else if (item.type === "doc") {
            ids.push(item.id);
        }
        else if (item.href) {
            // Handle link type items
            ids.push(item.href);
        }
    }
    return ids;
}
var getIcon = function (label, className) {
    // Use the className to determine the appropriate icon and color
    if (label.includes("GitHub") || (className === null || className === void 0 ? void 0 : className.includes("github"))) {
        return (0, jsx_runtime_1.jsx)(lucide_react_1.Github, { className: "".concat(styles_module_css_1.default.categoryIcon, " ").concat(styles_module_css_1.default.githubIcon) });
    }
    else if (label.includes("SQL") || (className === null || className === void 0 ? void 0 : className.includes("sql"))) {
        return (0, jsx_runtime_1.jsx)(lucide_react_1.Database, { className: "".concat(styles_module_css_1.default.categoryIcon, " ").concat(styles_module_css_1.default.sqlIcon) });
    }
    else if (label.includes("Python") || (className === null || className === void 0 ? void 0 : className.includes("python"))) {
        return (0, jsx_runtime_1.jsx)(lucide_react_1.Code2, { className: "".concat(styles_module_css_1.default.categoryIcon, " ").concat(styles_module_css_1.default.pythonIcon) });
    }
    else if (label.includes("Next.js") || (className === null || className === void 0 ? void 0 : className.includes("nextjs"))) {
        return (0, jsx_runtime_1.jsx)(lucide_react_1.Zap, { className: "".concat(styles_module_css_1.default.categoryIcon, " ").concat(styles_module_css_1.default.nextjsIcon) });
    }
    else if (label.includes("Google Student Ambassador") ||
        (className === null || className === void 0 ? void 0 : className.includes("gsa"))) {
        return (0, jsx_runtime_1.jsx)(lucide_react_1.School, { className: "".concat(styles_module_css_1.default.categoryIcon, " ").concat(styles_module_css_1.default.gsaIcon) });
    }
    else if (label.includes("Technical") || (className === null || className === void 0 ? void 0 : className.includes("technical"))) {
        return ((0, jsx_runtime_1.jsx)(lucide_react_1.PanelRight, { className: "".concat(styles_module_css_1.default.categoryIcon, " ").concat(styles_module_css_1.default.technicalIcon) }));
    }
    else {
        return (0, jsx_runtime_1.jsx)(lucide_react_1.Book, { className: styles_module_css_1.default.categoryIcon });
    }
};
// Component responsible for the category collapsing behavior
function DocSidebarItemCategory(_a) {
    var _b, _c;
    var item = _a.item, onItemClick = _a.onItemClick, activePath = _a.activePath, _d = _a.level, level = _d === void 0 ? 0 : _d, index = _a.index, props = __rest(_a, ["item", "onItemClick", "activePath", "level", "index"]);
    var items = item.items, label = item.label, collapsible = item.collapsible, className = item.className, href = item.href;
    // Check if this is the GitHub category that should not be active by default
    var isGitHubCategory = (label === null || label === void 0 ? void 0 : label.includes("GitHub")) || (className === null || className === void 0 ? void 0 : className.includes("github"));
    // Use a simpler approach to handle collapsing
    var _e = (0, react_1.useState)(item.collapsed), collapsed = _e[0], setCollapsed = _e[1];
    // Only set active if the path matches AND it's not the GitHub category on initial load
    var active = href
        ? isSamePath(href, activePath) && !(isGitHubCategory && !activePath)
        : false;
    // Use useEffect to update the collapsed state when the active path changes
    (0, react_1.useEffect)(function () {
        if (collapsible) {
            // If activePath is empty, don't consider any items active
            if (!activePath) {
                return;
            }
            // Don't collapse if this category or any of its items are active
            var hasActiveItem = items.some(function (item) {
                // Check for direct href match
                if (item.href && isSamePath(item.href, activePath)) {
                    return true;
                }
                // Check for nested items (for categories like SQL Basics)
                if (item.type === "category" && item.items) {
                    return item.items.some(function (subItem) { return subItem.href && isSamePath(subItem.href, activePath); });
                }
                return false;
            });
            // Only collapse if not active and no active children
            if (!active && !hasActiveItem) {
                setCollapsed(true);
            }
            else {
                // Keep expanded if active or has active children
                setCollapsed(false);
            }
        }
    }, [activePath, active, collapsible, items]);
    var isHidden = collapsed && !active;
    var handleClick = function (e) {
        if (collapsible && !href) {
            e.preventDefault();
            e.currentTarget.blur();
            setCollapsed(function (prev) { return !prev; });
        }
        if (href) {
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        }
    };
    var categoryIcon = getIcon(label, className);
    // Determine category theme based on label or className
    var getCategoryTheme = function () {
        if (label.includes("GitHub") || (className === null || className === void 0 ? void 0 : className.includes("github"))) {
            return "custom-sidebar-github";
        }
        else if (label.includes("Python") || (className === null || className === void 0 ? void 0 : className.includes("python"))) {
            return "custom-sidebar-python";
        }
        else if (label.includes("SQL") || (className === null || className === void 0 ? void 0 : className.includes("sql"))) {
            return "custom-sidebar-sql";
        }
        else if (label.includes("Next.js") || (className === null || className === void 0 ? void 0 : className.includes("nextjs"))) {
            return "custom-sidebar-nextjs";
        }
        else if (label.includes("Google Student Ambassador") ||
            (className === null || className === void 0 ? void 0 : className.includes("gsa"))) {
            return "custom-sidebar-gsa";
        }
        else if (label.includes("Technical") ||
            (className === null || className === void 0 ? void 0 : className.includes("technical"))) {
            return "custom-sidebar-technical";
        }
        return "";
    };
    var categoryTheme = getCategoryTheme();
    return ((0, jsx_runtime_1.jsxs)("li", { className: (0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docSidebarItemCategory, {
            "menu__list-item--collapsed": collapsed,
        }, className, styles_module_css_1.default.categoryItem, categoryTheme, (_b = {},
            _b[styles_module_css_1.default.categoryLevel1] = level === 1,
            _b[styles_module_css_1.default.categoryLevel2] = level === 2,
            _b)), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(styles_module_css_1.default.categoryHeader, (_c = {},
                    _c[styles_module_css_1.default.categoryHeaderActive] = active,
                    _c)), children: href ? ((0, jsx_runtime_1.jsx)(Link_1.default, { className: (0, clsx_1.default)("menu__link", {
                        "menu__link--active": active,
                    }, styles_module_css_1.default.categoryLink), to: href, onClick: handleClick, children: (0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.categoryLinkContent, children: [categoryIcon, (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.categoryLabel, children: label.replace(/^[🐙🐍🗄️⚡🎓🔧📚⚙️👨‍💼🔄📊]+ /g, "") })] }) })) : ((0, jsx_runtime_1.jsxs)("a", { className: (0, clsx_1.default)("menu__link", {
                        "menu__link--active": active,
                    }, styles_module_css_1.default.categoryLink), href: "#", onClick: handleClick, children: [(0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.categoryLinkContent, children: [categoryIcon, (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.categoryLabel, children: label.replace(/^[🐙🐍🗄️⚡🎓🔧📚⚙️👨‍💼🔄📊]+ /g, "") })] }), collapsible && ((0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.categoryCollapseIcon, children: collapsed ? ((0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { size: 16, className: styles_module_css_1.default.chevronIcon })) : ((0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { size: 16, className: styles_module_css_1.default.chevronIcon })) }))] })) }), !isHidden && ((0, jsx_runtime_1.jsx)("ul", { className: (0, clsx_1.default)("menu__list", styles_module_css_1.default.categoryList), children: items.map(function (childItem, i) {
                    // @ts-ignore
                    var DocSidebarItem = require("@theme/DocSidebarItem").default;
                    return ((0, jsx_runtime_1.jsx)(DocSidebarItem, { tabIndex: collapsed ? "-1" : "0", item: childItem, onItemClick: onItemClick, activePath: activePath, level: level + 1, index: i }, i));
                }) }))] }));
}
exports.default = (0, react_1.memo)(DocSidebarItemCategory);
