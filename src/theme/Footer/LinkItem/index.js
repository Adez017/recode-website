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
exports.default = FooterLinkItem;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var useBaseUrl_1 = __importDefault(require("@docusaurus/useBaseUrl"));
var isInternalUrl_1 = __importDefault(require("@docusaurus/isInternalUrl"));
var ExternalLink_1 = __importDefault(require("@theme/Icon/ExternalLink"));
function FooterLinkItem(_a) {
    var item = _a.item;
    var to = item.to, href = item.href, label = item.label, prependBaseUrlToHref = item.prependBaseUrlToHref, className = item.className, props = __rest(item, ["to", "href", "label", "prependBaseUrlToHref", "className"]);
    var toUrl = (0, useBaseUrl_1.default)(to);
    var normalizedHref = (0, useBaseUrl_1.default)(href, { forcePrependBaseUrl: true });
    return ((0, jsx_runtime_1.jsxs)(Link_1.default, __assign({ className: (0, clsx_1.default)('footer__link-item', className) }, (href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
            to: toUrl,
        }), props, { children: [label, href && !(0, isInternalUrl_1.default)(href) && (0, jsx_runtime_1.jsx)(ExternalLink_1.default, {})] })));
}
