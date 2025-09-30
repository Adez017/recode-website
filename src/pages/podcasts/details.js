"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PodcastDetails;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var router_1 = require("@docusaurus/router");
require("./details.css");
// Enhanced Spotify Title Component
var SpotifyTitle = function (_a) {
    var spotifyUrl = _a.spotifyUrl, type = _a.type;
    var _b = react_1.default.useState(''), title = _b[0], setTitle = _b[1];
    var _c = react_1.default.useState(''), artist = _c[0], setArtist = _c[1];
    var _d = react_1.default.useState(true), loading = _d[0], setLoading = _d[1];
    react_1.default.useEffect(function () {
        var cancelled = false;
        setLoading(true);
        fetch("https://open.spotify.com/oembed?url=".concat(encodeURIComponent(spotifyUrl)))
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (!cancelled) {
                setTitle(data.title);
                // Extract artist/show info if available
                if (data.author_name) {
                    setArtist(data.author_name);
                }
                setLoading(false);
            }
        })
            .catch(function () {
            if (!cancelled) {
                setTitle('');
                setLoading(false);
            }
        });
        return function () { cancelled = true; };
    }, [spotifyUrl]);
    if (loading) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "title-loading", children: [(0, jsx_runtime_1.jsx)("div", { className: "loading-shimmer large" }), (0, jsx_runtime_1.jsx)("div", { className: "loading-shimmer medium" }), (0, jsx_runtime_1.jsx)("div", { className: "loading-shimmer small" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "enhanced-podcast-title", children: [(0, jsx_runtime_1.jsxs)("div", { className: "title-badge", children: [(0, jsx_runtime_1.jsx)("span", { className: "badge-icon", children: type === 'episode' ? '🎙️' : type === 'show' ? '📻' : '🎵' }), (0, jsx_runtime_1.jsx)("span", { className: "badge-text", children: type.charAt(0).toUpperCase() + type.slice(1) })] }), (0, jsx_runtime_1.jsx)("h1", { className: "main-title", children: title || "Featured ".concat(type.charAt(0).toUpperCase() + type.slice(1)) }), artist && ((0, jsx_runtime_1.jsxs)("div", { className: "artist-info", children: [(0, jsx_runtime_1.jsx)("span", { className: "by-text", children: "by" }), (0, jsx_runtime_1.jsx)("span", { className: "artist-name", children: artist })] }))] }));
};
function PodcastDetails() {
    var _this = this;
    var _a;
    var location = (0, router_1.useLocation)();
    var history = (0, router_1.useHistory)();
    var state = location.state;
    var podcast = state === null || state === void 0 ? void 0 : state.podcast;
    // Enhanced descriptions with categories
    var descriptions = {
        episode: [
            "Dive deep into fascinating conversations and thought-provoking content that challenges conventional thinking.",
            "Experience expert insights and engaging narratives that expand your understanding of the world.",
            "Join compelling discussions that bridge the gap between knowledge and practical wisdom.",
            "Explore unique perspectives from industry leaders and innovative thinkers.",
            "Uncover hidden stories and behind-the-scenes insights that mainstream media rarely covers."
        ],
        show: [
            "Discover a treasure trove of episodes covering diverse topics and groundbreaking ideas.",
            "Follow an incredible journey of storytelling that spans multiple fascinating episodes.",
            "Experience consistent quality content that keeps you coming back for more insights.",
            "Join a community of listeners who appreciate depth, authenticity, and expert curation.",
            "Explore a comprehensive collection of discussions that shape modern discourse."
        ],
        playlist: [
            "Enjoy a carefully curated selection of audio content designed for your listening pleasure.",
            "Experience the perfect blend of entertainment and education in one convenient collection.",
            "Discover diverse voices and perspectives assembled into a cohesive listening experience.",
            "Tune into a handpicked selection that showcases the best of podcast storytelling.",
            "Explore a thoughtfully arranged collection that takes you on an audio journey."
        ]
    };
    // Additional podcast features
    var features = [
        { icon: "🎯", label: "Expert Insights", description: "Learn from industry professionals" },
        { icon: "🌟", label: "Premium Quality", description: "High-quality audio production" },
        { icon: "📈", label: "Trending Content", description: "Stay ahead with latest topics" },
        { icon: "🎧", label: "Immersive Experience", description: "Engaging storytelling format" }
    ];
    var getRandomDescription = function (type) {
        var typeDescriptions = descriptions[type];
        return typeDescriptions[Math.floor(Math.random() * typeDescriptions.length)];
    };
    var handleBack = function () {
        history.goBack();
    };
    var handleShare = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!navigator.share) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.share({
                            title: "Check out this ".concat(podcast.type),
                            url: podcast.spotifyUrl
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    // Fallback to clipboard
                    navigator.clipboard.writeText(podcast.spotifyUrl);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    navigator.clipboard.writeText(podcast.spotifyUrl);
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    if (!podcast) {
        return ((0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsx)("div", { className: "enhanced-details-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "error-state", children: [(0, jsx_runtime_1.jsx)("div", { className: "error-icon", children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)("h1", { className: "error-title", children: "Podcast Not Found" }), (0, jsx_runtime_1.jsx)("p", { className: "error-description", children: "Sorry, we couldn't find the podcast you're looking for." }), (0, jsx_runtime_1.jsxs)("button", { className: "back-to-podcasts", onClick: function () { return history.push('/podcasts'); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "button-icon", children: "\u2190" }), "Back to Podcasts"] })] }) }) }));
    }
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: "enhanced-details-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "details-navigation", children: [(0, jsx_runtime_1.jsxs)("button", { className: "nav-back-button", onClick: handleBack, children: [(0, jsx_runtime_1.jsx)("span", { className: "nav-icon", children: "\u2190" }), (0, jsx_runtime_1.jsx)("span", { className: "nav-text", children: "Back to Podcasts" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "nav-actions", children: [(0, jsx_runtime_1.jsx)("button", { className: "nav-action-button", onClick: handleShare, title: "Share", children: (0, jsx_runtime_1.jsx)("span", { className: "action-icon", children: "\uD83D\uDD17" }) }), (0, jsx_runtime_1.jsx)("button", { className: "nav-action-button", title: "Add to favorites", children: (0, jsx_runtime_1.jsx)("span", { className: "action-icon", children: "\u2764\uFE0F" }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "details-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "details-hero", children: (0, jsx_runtime_1.jsxs)("div", { className: "hero-content", children: [(0, jsx_runtime_1.jsx)(SpotifyTitle, { spotifyUrl: podcast.spotifyUrl, type: podcast.type }), (0, jsx_runtime_1.jsx)("p", { className: "hero-description", children: getRandomDescription(podcast.type) }), (0, jsx_runtime_1.jsxs)("div", { className: "quick-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-pill", children: [(0, jsx_runtime_1.jsx)("span", { className: "stat-icon", children: "\u23F1\uFE0F" }), (0, jsx_runtime_1.jsx)("span", { className: "stat-text", children: "Premium Content" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-pill", children: [(0, jsx_runtime_1.jsx)("span", { className: "stat-icon", children: "\uD83C\uDFAF" }), (0, jsx_runtime_1.jsx)("span", { className: "stat-text", children: "Expert Curated" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-pill", children: [(0, jsx_runtime_1.jsx)("span", { className: "stat-icon", children: "\uD83D\uDD25" }), (0, jsx_runtime_1.jsx)("span", { className: "stat-text", children: "Trending" })] })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "enhanced-embed-section", children: (0, jsx_runtime_1.jsxs)("div", { className: "embed-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "embed-header", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "embed-title", children: [(0, jsx_runtime_1.jsx)("span", { className: "title-icon", children: "\uD83C\uDFA7" }), "Listen Now"] }), (0, jsx_runtime_1.jsx)("div", { className: "embed-controls", children: (0, jsx_runtime_1.jsx)("button", { className: "control-button", title: "Full screen", children: (0, jsx_runtime_1.jsx)("span", { className: "control-icon", children: "\u26F6" }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "spotify-embed-wrapper", children: (0, jsx_runtime_1.jsx)("iframe", { src: "https://open.spotify.com/embed/".concat(podcast.type, "/").concat((_a = podcast.spotifyUrl.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('?')[0]), width: "100%", height: "400", frameBorder: "0", allowFullScreen: true, allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading: "lazy", title: "Spotify embed ".concat(podcast.id) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "embed-footer", children: [(0, jsx_runtime_1.jsx)("div", { className: "platform-info", children: (0, jsx_runtime_1.jsxs)("span", { className: "platform-badge", children: [(0, jsx_runtime_1.jsx)("span", { className: "spotify-icon", children: "\uD83C\uDFB5" }), "Powered by Spotify"] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "embed-actions", children: [(0, jsx_runtime_1.jsxs)("button", { className: "embed-action", onClick: handleShare, children: [(0, jsx_runtime_1.jsx)("span", { className: "action-icon", children: "\uD83D\uDCE4" }), "Share"] }), (0, jsx_runtime_1.jsxs)("a", { href: podcast.spotifyUrl, target: "_blank", rel: "noopener noreferrer", className: "embed-action external", children: [(0, jsx_runtime_1.jsx)("span", { className: "action-icon", children: "\uD83D\uDD17" }), "Open in Spotify"] })] })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "features-section", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "section-title", children: [(0, jsx_runtime_1.jsx)("span", { className: "title-icon", children: "\u2728" }), "Why You'll Love This Content"] }), (0, jsx_runtime_1.jsx)("div", { className: "features-grid", children: features.map(function (feature, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "feature-card", style: { animationDelay: "".concat(index * 0.1, "s") }, children: [(0, jsx_runtime_1.jsx)("div", { className: "feature-icon", children: feature.icon }), (0, jsx_runtime_1.jsxs)("div", { className: "feature-content", children: [(0, jsx_runtime_1.jsx)("h3", { className: "feature-title", children: feature.label }), (0, jsx_runtime_1.jsx)("p", { className: "feature-description", children: feature.description })] })] }, index)); }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "suggestions-section", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "section-title", children: [(0, jsx_runtime_1.jsx)("span", { className: "title-icon", children: "\uD83D\uDE80" }), "Explore More Content"] }), (0, jsx_runtime_1.jsxs)("div", { className: "suggestions-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "suggestion-card primary", children: [(0, jsx_runtime_1.jsx)("div", { className: "suggestion-icon", children: "\uD83D\uDCFB" }), (0, jsx_runtime_1.jsxs)("div", { className: "suggestion-text", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Discover More Shows" }), (0, jsx_runtime_1.jsx)("p", { children: "Explore our curated collection of premium podcasts" })] }), (0, jsx_runtime_1.jsx)("button", { className: "suggestion-button", onClick: function () { return history.push('/podcasts'); }, children: "Browse All \u2192" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "suggestion-card secondary", children: [(0, jsx_runtime_1.jsx)("div", { className: "suggestion-icon", children: "\uD83C\uDFAF" }), (0, jsx_runtime_1.jsxs)("div", { className: "suggestion-text", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Similar Content" }), (0, jsx_runtime_1.jsx)("p", { children: "Find podcasts matching your interests" })] }), (0, jsx_runtime_1.jsx)("button", { className: "suggestion-button", onClick: function () { return history.push('/podcasts'); }, children: "Discover \u2192" })] })] })] })] })] }) }));
}
