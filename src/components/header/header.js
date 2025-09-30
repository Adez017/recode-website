"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./header.css");
var Link_1 = __importDefault(require("@docusaurus/Link"));
var framer_motion_1 = require("framer-motion");
var particle_1 = __importDefault(require("../particle"));
var FloatingContributors_1 = __importDefault(require("../FloatingContributors"));
var HeaderContent = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "chh__header-content", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.h1, { initial: { opacity: 0, x: -10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.1,
                }, className: "gradient__text", children: [(0, jsx_runtime_1.jsx)(particle_1.default, {}), "Level Up Skills with ", (0, jsx_runtime_1.jsx)("br", {}), " Recode Hive"] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { initial: { opacity: 0, x: -10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2,
                }, children: "Recode Hive helps you get started with open-source contributions. We\u2019ve built an inclusive community with people from around the world. Join us to earn while learning \u2014 everything made simpler and more practical." }), (0, jsx_runtime_1.jsxs)("div", { className: "chh__header-content__input", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { initial: { opacity: 0, x: -10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            delay: 0.3,
                        }, type: "button", children: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/get-started/", className: "chh__header-content__input--link", children: "Get Started" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { initial: { opacity: 0, x: 10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2,
                        }, type: "button", children: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/courses", className: "chh__header-content__input--link", children: "Courses" }) })] })] }));
};
var HeaderToaster = function () {
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { scale: 0, x: 10 }, whileInView: { scale: 1, x: 0 }, viewport: { once: true }, transition: {
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
        }, className: "chh__header-image", style: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
            width: '100%'
        }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                position: 'relative',
                zIndex: 1
            }, children: (0, jsx_runtime_1.jsx)(FloatingContributors_1.default, { headerEmbedded: true }) }) }));
};
var Header = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "chh__header--body", children: (0, jsx_runtime_1.jsxs)("div", { className: "chh__header", children: [(0, jsx_runtime_1.jsx)(HeaderContent, {}), (0, jsx_runtime_1.jsx)(HeaderToaster, {})] }) }));
};
exports.default = Header;
