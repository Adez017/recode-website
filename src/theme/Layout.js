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
exports.default = CustomLayout;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Layout_1 = __importDefault(require("@theme-original/Layout"));
var NavbarFirebaseAuthGithub_1 = __importDefault(require("@site/src/components/ui/NavbarFirebaseAuthGithub"));
var NewsLetterPopup_1 = __importDefault(require("../components/NewsLetterPopup"));
function CustomLayout(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Layout_1.default, __assign({}, props, { children: [(0, jsx_runtime_1.jsx)(NavbarFirebaseAuthGithub_1.default, {}), children] })), (0, jsx_runtime_1.jsx)(NewsLetterPopup_1.default, {})] }));
}
