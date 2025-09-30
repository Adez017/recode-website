"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
/**
 * A maintenance notification component with contained sizing.
 * @returns {JSX.Element} A React functional component
 */
var Coming = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-center items-center p-6 mx-auto my-8 max-w-2xl rounded-xl bg-white dark:bg-gray-800 shadow-lg", children: [(0, jsx_runtime_1.jsx)("img", { src: "https://www.svgrepo.com/show/426192/cogs-settings.svg", alt: "Maintenance in progress", className: "mb-6 h-32 w-32", height: 100, width: 100, loading: "lazy" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold text-center text-gray-800 dark:text-white mb-3", children: "Site Maintenance" }), (0, jsx_runtime_1.jsx)("p", { className: "text-center text-gray-600 dark:text-gray-300 mb-6", children: "We're working hard to improve your experience. Please check back soon!" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col sm:flex-row gap-10 w-full", children: (0, jsx_runtime_1.jsx)("a", { href: "/contact", className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors ", children: "Contact Support" }) })] }));
};
exports.default = Coming;
