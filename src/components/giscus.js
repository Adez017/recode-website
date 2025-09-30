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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var GiscusComments = function () {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!ref.current)
            return;
        // Prevent duplicate script injection
        if (ref.current.querySelector("iframe"))
            return;
        var script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "recodehive/Support");
        script.setAttribute("data-repo-id", "R_kgDOL9urew");
        script.setAttribute("data-category", "General");
        script.setAttribute("data-category-id", "DIC_kwDOL9ure84Cqizj");
        script.setAttribute("data-mapping", "og:title");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "top");
        script.setAttribute("data-theme", "preferred_color_scheme");
        script.setAttribute("data-lang", "en");
        script.crossOrigin = "anonymous";
        script.async = true;
        ref.current.appendChild(script);
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { ref: ref });
};
exports.default = GiscusComments;
