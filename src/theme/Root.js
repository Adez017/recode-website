"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_2 = require("@vercel/analytics/react");
// Default implementation, that you can customize
function Root(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [children, process.env.NODE_ENV === 'production' && (0, jsx_runtime_1.jsx)(react_2.Analytics, {})] }));
}
