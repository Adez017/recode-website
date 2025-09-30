"use client";
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
exports.BlogCarousel = BlogCarousel;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var carousel_1 = require("../ui/carousel");
var button_1 = require("../ui/button");
var react_1 = require("react");
var blogCard_1 = __importDefault(require("./blogCard"));
var blogs_1 = __importDefault(require("../../database/blogs"));
var embla_carousel_autoplay_1 = __importDefault(require("embla-carousel-autoplay"));
require("./blogCarousel.css");
function BlogCarousel() {
    var _a = (0, react_1.useState)(), api = _a[0], setApi = _a[1];
    var _b = (0, react_1.useState)(0), current = _b[0], setCurrent = _b[1];
    var _c = (0, react_1.useState)(0), count = _c[0], setCount = _c[1];
    (0, react_1.useEffect)(function () {
        if (!api)
            return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", function () {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-8xl mx-auto px-4", children: (0, jsx_runtime_1.jsxs)(carousel_1.Carousel, { setApi: setApi, className: "w-full", opts: {
                align: "start",
                loop: true,
            }, plugins: [
                (0, embla_carousel_autoplay_1.default)({
                    delay: 4000,
                    stopOnInteraction: true,
                }),
            ], children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselContent, { className: "my-10", children: blogs_1.default.map(function (blog, index) { return ((0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4", children: (0, jsx_runtime_1.jsx)(blogCard_1.default, { type: "blog", date: "2024-01-01", title: blog.title, content: blog.description, imageUrl: blog.image, id: blog.slug, authors: blog.authors }) }, blog.id)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-4 mt-8", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, { className: "static translate-y-0 h-12 w-12 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110" }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-2", children: Array.from({ length: count }).map(function (_, index) { return ((0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", size: "sm", className: "h-3 w-3 p-0 rounded-full transition-all duration-300 ".concat(current === index + 1
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"), onClick: function () { return api === null || api === void 0 ? void 0 : api.scrollTo(index); } }, index)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, { className: "static translate-y-0 h-12 w-12 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110" })] })] }) }));
}
