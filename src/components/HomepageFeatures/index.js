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
exports.default = HomepageFeatures;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Heading_1 = __importDefault(require("@theme/Heading"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly." })),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ", (0, jsx_runtime_1.jsx)("code", { children: "docs" }), " directory."] })),
    },
    {
        title: 'Powered by React',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer." })),
    },
];
function Feature(_a) {
    var title = _a.title, Svg = _a.Svg, description = _a.description;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)('col col--4'), children: [(0, jsx_runtime_1.jsx)("div", { className: "text--center", children: (0, jsx_runtime_1.jsx)(Svg, { className: styles_module_css_1.default.featureSvg, role: "img" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text--center padding-horiz--md", children: [(0, jsx_runtime_1.jsx)(Heading_1.default, { as: "h3", children: title }), (0, jsx_runtime_1.jsx)("p", { children: description })] })] }));
}
function HomepageFeatures() {
    return ((0, jsx_runtime_1.jsx)("section", { className: styles_module_css_1.default.features, children: (0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsx)("div", { className: "row", children: FeatureList.map(function (props, idx) { return ((0, jsx_runtime_1.jsx)(Feature, __assign({}, props), idx)); }) }) }) }));
}
