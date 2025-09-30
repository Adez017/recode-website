"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var stats = [
    { value: '10,000+', label: 'Active Learners', icon: '👥' },
    { value: '100+', label: 'Hours of Content', icon: '⏱️' },
    { value: '24/7', label: 'Community Support', icon: '💬' },
    { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
];
var StatCard = function (_a) {
    var stat = _a.stat, index = _a.index;
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: styles_module_css_1.default.statCard, initial: { opacity: 0, y: 30 }, whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }, viewport: { once: true, margin: "-50px" }, whileHover: {
            y: -5,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
        }, children: [stat.icon && ((0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.statIcon, children: stat.icon })), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: styles_module_css_1.default.statValue, "aria-label": stat.value, initial: { scale: 0.9 }, whileInView: {
                    scale: 1,
                    transition: {
                        delay: 0.2 + (index * 0.05),
                        type: 'spring',
                        stiffness: 100
                    }
                }, viewport: { once: true }, children: stat.value }), (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.statLabel, children: stat.label })] }));
};
var StatsSection = function () {
    return ((0, jsx_runtime_1.jsx)("section", { className: styles_module_css_1.default.section, children: (0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.container, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: styles_module_css_1.default.statsGrid, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, variants: {
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }, children: stats.map(function (stat, index) { return ((0, jsx_runtime_1.jsx)(StatCard, { stat: stat, index: index }, stat.label)); }) }) }) }));
};
exports.default = StatsSection;
