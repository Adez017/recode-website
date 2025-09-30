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
exports.default = BrowserWindow;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var BrowserWindow_module_css_1 = __importDefault(require("./BrowserWindow.module.css"));
function BrowserWindow(_a) {
    var children = _a.children, minHeight = _a.minHeight, _b = _a.url, url = _b === void 0 ? 'http://localhost:3000' : _b, style = _a.style, bodyStyle = _a.bodyStyle;
    return ((0, jsx_runtime_1.jsxs)("div", { className: BrowserWindow_module_css_1.default.browserWindow, style: __assign(__assign({}, style), { minHeight: minHeight }), children: [(0, jsx_runtime_1.jsxs)("div", { className: BrowserWindow_module_css_1.default.browserWindowHeader, children: [(0, jsx_runtime_1.jsxs)("div", { className: BrowserWindow_module_css_1.default.buttons, children: [(0, jsx_runtime_1.jsx)("span", { className: BrowserWindow_module_css_1.default.dot, style: { background: '#f25f58' } }), (0, jsx_runtime_1.jsx)("span", { className: BrowserWindow_module_css_1.default.dot, style: { background: '#fbbe3c' } }), (0, jsx_runtime_1.jsx)("span", { className: BrowserWindow_module_css_1.default.dot, style: { background: '#58cb42' } })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(BrowserWindow_module_css_1.default.browserWindowAddressBar, 'text--truncate'), children: url }), (0, jsx_runtime_1.jsx)("div", { className: BrowserWindow_module_css_1.default.browserWindowMenuIcon, children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { className: BrowserWindow_module_css_1.default.bar }), (0, jsx_runtime_1.jsx)("span", { className: BrowserWindow_module_css_1.default.bar }), (0, jsx_runtime_1.jsx)("span", { className: BrowserWindow_module_css_1.default.bar })] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: BrowserWindow_module_css_1.default.browserWindowBody, style: bodyStyle, children: children })] }));
}
