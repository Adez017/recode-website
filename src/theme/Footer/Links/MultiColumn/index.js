"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLinksMultiColumn;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var LinkItem_1 = __importDefault(require("@theme/Footer/LinkItem"));
function ColumnLinkItem(_a) {
    var _b;
    var item = _a.item;
    return item.html ? ((0, jsx_runtime_1.jsx)("li", { className: (0, clsx_1.default)('footer__item', item.className), 
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: { __html: item.html } })) : ((0, jsx_runtime_1.jsx)("li", { className: "footer__item", children: (0, jsx_runtime_1.jsx)(LinkItem_1.default, { item: item }) }, (_b = item.href) !== null && _b !== void 0 ? _b : item.to));
}
function Column(_a) {
    var column = _a.column;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)('col footer__col', column.className), children: [(0, jsx_runtime_1.jsx)("div", { className: "footer__title", children: column.title }), (0, jsx_runtime_1.jsx)("ul", { className: "footer__items clean-list", children: column.items.map(function (item, i) { return ((0, jsx_runtime_1.jsx)(ColumnLinkItem, { item: item }, i)); }) })] }));
}
function FooterLinksMultiColumn(_a) {
    var columns = _a.columns;
    return ((0, jsx_runtime_1.jsx)("div", { className: "row footer__links", children: columns.map(function (column, i) { return ((0, jsx_runtime_1.jsx)(Column, { column: column }, i)); }) }));
}
