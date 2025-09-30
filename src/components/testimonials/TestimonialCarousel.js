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
exports.TestimonialCarousel = TestimonialCarousel;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var carousel_1 = require("../ui/carousel");
var button_1 = require("../ui/button");
var TestimonialCard_1 = __importDefault(require("./TestimonialCard"));
var embla_carousel_autoplay_1 = __importDefault(require("embla-carousel-autoplay"));
// Sample testimonial data
var testimonials = [
    {
        name: "Rashi Chouhan",
        username: "RashiChouhan",
        content: "Valuable insights shared, productive discussions, and actionable outcomes. Looking forward to implementing the strategies discussed.! #TechCommunity #WomenInTech",
        date: "May 18, 2024",
        avatar: "/icons/adobe.png",
        link: "https://topmate.io/sanjaykv"
    },
    {
        name: "Namith",
        username: "namith",
        content: "Gave remarkable insights on parts i have to improve and gave me new opportunities . cheers~! #TechCommunity #Grateful",
        date: "April 21, 2023",
        avatar: "/icons/google.png",
        link: "https://topmate.io/sanjaykv"
    },
    {
        name: "Rajdeep Chakraborty",
        username: "RajdeepChakraborty",
        content: "I appreciate Sanjay sir's insights on open source and his suggestions for improving my GitHub profile. I'm excited to hear more and discuss open source further.! #OpenSource #TechCommunity",
        date: "Oct 18, 2024",
        avatar: "/icons/amazon.png",
        link: "https://topmate.io/sanjaykv"
    }
];
function TestimonialCarousel() {
    var _a = (0, react_1.useState)(), api = _a[0], setApi = _a[1];
    var _b = (0, react_1.useState)(0), current = _b[0], setCurrent = _b[1];
    var _c = (0, react_1.useState)(0), count = _c[0], setCount = _c[1];
    (0, react_1.useEffect)(function () {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", function () {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-10", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold mb-2", children: "Loved by Many Users" }), (0, jsx_runtime_1.jsx)("div", { className: "w-32 h-1 bg-blue-500 mx-auto rounded-full" })] }), (0, jsx_runtime_1.jsxs)(carousel_1.Carousel, { setApi: setApi, className: "w-full", opts: {
                    align: "start",
                    loop: true,
                }, plugins: [
                    (0, embla_carousel_autoplay_1.default)({
                        delay: 4000,
                    }),
                ], children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselContent, { className: "-ml-2 md:-ml-4 my-16", children: testimonials.map(function (testimonial, index) { return ((0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "pl-2 md:pl-4 md:basis-1/2 h-full", children: (0, jsx_runtime_1.jsx)(TestimonialCard_1.default, __assign({}, testimonial)) }, index)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-2 mt-8", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, { className: "static translate-y-0" }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-2", children: Array.from({ length: count }).map(function (_, index) { return ((0, jsx_runtime_1.jsx)(button_1.Button, { variant: current === index + 1 ? "default" : "outline", size: "icon", className: "h-2 w-2 p-0 rounded-full", onClick: function () { return api === null || api === void 0 ? void 0 : api.scrollTo(index); } }, index)); }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, { className: "static translate-y-0" })] })] })] }));
}
