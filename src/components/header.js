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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
require("./header.css"); // Importing styles from external CSS file
var Link_1 = __importDefault(require("@docusaurus/Link")); // Importing Link component from Docusaurus
var vanilla_tilt_1 = __importDefault(require("vanilla-tilt")); // Importing VanillaTilt for image tilt effect
var framer_motion_1 = require("framer-motion"); // Importing motion components from Framer Motion
var particle_1 = __importDefault(require("./particle")); // Importing custom ParticlesComponent
/**
 * Renders the header content section of the application.
 * Includes a title, description, and buttons for navigation.
 * @returns JSX element representing the header content.
 */
var HeaderContent = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "chh__header-content", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.h1, { initial: { opacity: 0, x: -10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.1,
                }, className: "gradient__text" // CSS class for gradient text
                , children: [(0, jsx_runtime_1.jsx)(particle_1.default, {}), " ", "Level Up Skills with Recode Hive"] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { initial: { opacity: 0, x: -10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2,
                }, children: "Recode Hive helps you get started with open-source contributions. We have built an inclusive community from people from all around the world. We ain't doing any magic, we make the learning much more simplified and practical, which traditional education couldn't provide to you. Join our community to earn while learning." }), (0, jsx_runtime_1.jsxs)("div", { className: "chh__header-content__input", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { initial: { opacity: 0, x: -10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            delay: 0.3,
                        }, type: "button" // Button type
                        , children: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/docs", className: "chh__header-content__input--link", children: "Get Started" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { initial: { opacity: 0, x: 10 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2,
                        }, type: "button" // Button type
                        , children: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "/courses", className: "chh__header-content__input--link", children: "Courses" }) })] })] }));
};
/**
 * Renders the header image section with tilt effect.
 * @returns JSX element representing the header image.
 */
var HeaderImage = function () {
    var imgRef = (0, react_1.useRef)(null); // Ref for the header image element
    (0, react_1.useEffect)(function () {
        // Initialize VanillaTilt effect on image ref
        if (imgRef.current) {
            vanilla_tilt_1.default.init(imgRef.current, {
                max: 25,
                speed: 50,
                glare: true,
                "max-glare": 0.5,
            });
        }
        // Cleanup function to destroy VanillaTilt instance
        return function () {
            var _a;
            if ((_a = imgRef.current) === null || _a === void 0 ? void 0 : _a.vanillaTilt) {
                imgRef.current.vanillaTilt.destroy();
            }
        };
    }, []); // Run effect only once on component mount
    return (
    // Animated wrapper for the header image
    (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { scale: 0, x: 10 }, whileInView: { scale: 0.8, x: 0 }, viewport: { once: true }, transition: {
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
        }, className: "chh__header-image" // CSS class for header image container
        , children: (0, jsx_runtime_1.jsx)("img", { src: "/img/hero-img-01.gif" // Image source
            , alt: "hero-img" // Alt attribute
            , className: "" // Additional CSS class
            , "data-tilt": true, ref: imgRef }) }));
};
/**
 * Renders the complete header component of the application.
 * @returns JSX element representing the complete header.
 */
var Header = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "chh__header--body", children: [" ", (0, jsx_runtime_1.jsxs)("div", { className: "chh__header", children: [" ", (0, jsx_runtime_1.jsx)(HeaderContent, {}), " ", (0, jsx_runtime_1.jsx)(HeaderImage, {}), " "] })] }));
};
exports.default = Header;
