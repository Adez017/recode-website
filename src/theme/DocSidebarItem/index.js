"use strict";
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
exports.default = DocSidebarItem;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * DocSidebarItem - Router component for sidebar items
 *
 * This component acts as a router that:
 * - Determines the type of sidebar item (category, link, or HTML)
 * - Renders the appropriate component based on the item type
 * - Passes relevant props to child components
 *
 * It works with three subcomponents:
 * - DocSidebarItemCategory: For collapsible sections (folders)
 * - DocSidebarItemLink: For individual page links
 * - DocSidebarItemHtml: For custom HTML content
 */
var react_1 = __importDefault(require("react"));
var Category_1 = __importDefault(require("@theme/DocSidebarItem/Category"));
var Link_1 = __importDefault(require("@theme/DocSidebarItem/Link"));
var Html_1 = __importDefault(require("@theme/DocSidebarItem/Html"));
function DocSidebarItem(_a) {
    var item = _a.item, props = __rest(_a, ["item"]);
    var activePath = props.activePath || "";
    var level = props.level || 0;
    var index = props.index || 0;
    switch (item.type) {
        case "category":
            return ((0, jsx_runtime_1.jsx)(Category_1.default, { item: item, activePath: activePath, level: level, index: index, tabIndex: props.tabIndex, onItemClick: props.onItemClick }));
        case "html":
            return ((0, jsx_runtime_1.jsx)(Html_1.default, { item: item, level: level, tabIndex: props.tabIndex, activePath: activePath, index: index }));
        case "link":
        default:
            return ((0, jsx_runtime_1.jsx)(Link_1.default, { item: item, activePath: activePath, level: level, index: index, tabIndex: props.tabIndex, onItemClick: props.onItemClick }));
    }
}
