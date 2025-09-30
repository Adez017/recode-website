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
exports.OperatorQueryKey = void 0;
exports.readOperator = readOperator;
exports.default = ShowcaseFilterToggle;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var react_1 = __importStar(require("react"));
var router_1 = require("@docusaurus/router");
var index_1 = require("../../index");
var clsx_1 = __importDefault(require("clsx"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
exports.OperatorQueryKey = 'operator';
function readOperator(search) {
    var _a;
    return ((_a = new URLSearchParams(search).get(exports.OperatorQueryKey)) !== null && _a !== void 0 ? _a : 'OR');
}
function ShowcaseFilterToggle() {
    var id = 'showcase_filter_toggle';
    var location = (0, router_1.useLocation)();
    var history = (0, router_1.useHistory)();
    var _a = (0, react_1.useState)(false), operator = _a[0], setOperator = _a[1];
    (0, react_1.useEffect)(function () {
        setOperator(readOperator(location.search) === 'AND');
    }, [location]);
    var toggleOperator = (0, react_1.useCallback)(function () {
        setOperator(function (o) { return !o; });
        var searchParams = new URLSearchParams(location.search);
        searchParams.delete(exports.OperatorQueryKey);
        if (!operator) {
            searchParams.append(exports.OperatorQueryKey, 'AND');
        }
        history.push(__assign(__assign({}, location), { search: searchParams.toString(), state: (0, index_1.prepareUserState)() }));
    }, [operator, location, history]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", id: id, className: "screen-reader-only", "aria-label": "Toggle between or and and for the tags you selected", onChange: toggleOperator, onKeyDown: function (e) {
                    if (e.key === 'Enter') {
                        toggleOperator();
                    }
                }, checked: operator }), (0, jsx_runtime_1.jsxs)("label", { htmlFor: id, className: (0, clsx_1.default)(styles_module_css_1.default.checkboxLabel, 'shadow--md'), children: [(0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.checkboxLabelOr, children: "OR" }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.checkboxLabelAnd, children: "AND" })] })] }));
}
