"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterCopyright;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
function FooterCopyright(_a) {
    var copyright = _a.copyright;
    return ((0, jsx_runtime_1.jsx)("div", { className: "footer__copyright", 
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: { __html: copyright } }));
}
