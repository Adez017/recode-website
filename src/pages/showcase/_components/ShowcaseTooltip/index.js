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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tooltip;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_2 = require("@floating-ui/react");
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
function Tooltip(_a) {
    var children = _a.children, id = _a.id, anchorEl = _a.anchorEl, text = _a.text, _b = _a.delay, delay = _b === void 0 ? 400 : _b, _c = _a.placement, placement = _c === void 0 ? 'top' : _c;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    var _e = (0, react_1.useState)(null), container = _e[0], setContainer = _e[1];
    var arrowRef = (0, react_1.useRef)(null);
    var _f = (0, react_2.useFloating)({
        open: open,
        onOpenChange: setOpen,
        placement: placement,
        middleware: [
            (0, react_2.offset)(8),
            (0, react_2.arrow)({
                element: arrowRef,
            }),
        ],
        whileElementsMounted: react_2.autoUpdate,
    }), refs = _f.refs, floatingStyles = _f.floatingStyles, context = _f.context;
    var hover = (0, react_2.useHover)(context, { delay: delay });
    var focus = (0, react_2.useFocus)(context);
    var dismiss = (0, react_2.useDismiss)(context);
    var role = (0, react_2.useRole)(context, { role: 'tooltip' });
    var _g = (0, react_2.useInteractions)([
        hover,
        focus,
        dismiss,
        role,
    ]), getReferenceProps = _g.getReferenceProps, getFloatingProps = _g.getFloatingProps;
    var tooltipId = "".concat(id, "_tooltip");
    (0, react_1.useEffect)(function () {
        if (!anchorEl) {
            setContainer(document.body);
            return;
        }
        var newContainer = typeof anchorEl === 'string'
            ? document.querySelector(anchorEl)
            : anchorEl;
        setContainer(newContainer);
    }, [anchorEl]);
    var childWithProps = react_1.default.isValidElement(children)
        ? react_1.default.cloneElement(children, __assign(__assign({ ref: refs.setReference }, getReferenceProps()), { 'aria-describedby': open ? tooltipId : undefined }))
        : children;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [childWithProps, container && open && react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)("div", __assign({ id: tooltipId, ref: refs.setFloating, className: styles_module_css_1.default.tooltip, style: floatingStyles }, getFloatingProps(), { children: [text, (0, jsx_runtime_1.jsx)(react_2.FloatingArrow, { ref: arrowRef, context: context, className: styles_module_css_1.default.tooltipArrow })] })), container)] }));
}
