"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLinksSimple;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var LinkItem_1 = __importDefault(require("@theme/Footer/LinkItem"));
function Separator() {
    return (0, jsx_runtime_1.jsx)("span", { className: "footer__link-separator", children: "\u00B7" });
}
function SimpleLinkItem(_a) {
    var item = _a.item;
    return item.html ? ((0, jsx_runtime_1.jsx)("span", { className: (0, clsx_1.default)('footer__link-item', item.className), 
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: { __html: item.html } })) : ((0, jsx_runtime_1.jsx)(LinkItem_1.default, { item: item }));
}
function FooterLinksSimple(_a) {
    var links = _a.links;
    return ((0, jsx_runtime_1.jsx)("div", { className: "footer__links text--center", children: (0, jsx_runtime_1.jsx)("div", { className: "footer__links", children: links.map(function (item, i) { return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(SimpleLinkItem, { item: item }), links.length !== i + 1 && (0, jsx_runtime_1.jsx)(Separator, {})] }, i)); }) }) }));
}
