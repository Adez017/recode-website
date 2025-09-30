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
var Counter = function (_a) {
    var value = _a.value, _b = _a.duration, duration = _b === void 0 ? 1500 : _b, _c = _a.suffix, suffix = _c === void 0 ? "" : _c;
    var _d = (0, react_1.useState)(0), count = _d[0], setCount = _d[1];
    var _e = (0, react_1.useState)(false), hasAnimated = _e[0], setHasAnimated = _e[1];
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!ref.current)
            return;
        var observer = new IntersectionObserver(function (entries) {
            var entry = entries[0];
            if (entry.isIntersecting && !hasAnimated) {
                animateCount();
                setHasAnimated(true);
            }
        }, { threshold: 0.5 } // Trigger when 50% of element is visible
        );
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, [hasAnimated]);
    var animateCount = function () {
        var startTime = performance.now();
        var step = function (now) {
            var progress = Math.min((now - startTime) / duration, 1);
            var current = Math.floor(progress * value);
            setCount(current);
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, children: [count.toLocaleString(), suffix] }));
};
exports.default = Counter;
