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
exports.default = Podcasts;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var router_1 = require("@docusaurus/router");
require("./index.css");
// Function to extract Spotify ID from URL
var getSpotifyEmbedId = function (url) {
    var match = url.match(/(?:spotify\.com|open\.spotify\.com)\/(episode|show|playlist)\/([a-zA-Z0-9]+)/);
    return match ? match[2] : url;
};
// Function to determine content type from URL
var getSpotifyContentType = function (url) {
    var match = url.match(/(?:spotify\.com|open\.spotify\.com)\/(episode|show|playlist)/);
    return (match === null || match === void 0 ? void 0 : match[1]) || 'show';
};
// Add your podcasts here
var podcastUrls = [
    "https://open.spotify.com/show/6oPJ7ZBlN7y34yiSMguIda?si=729edf3b64a246d7",
    "https://open.spotify.com/episode/1zbmUPmGRjC8o8YIMMx2Z6?si=Q4QAS3IJQVGaQYhYApckdA",
    "https://open.spotify.com/episode/2twnTb39n5GH9DEhXzSIvi?si=e2d6e85ee7fe4095",
    "https://open.spotify.com/episode/3SyDohHTdX2wwaTLNmPTlY?si=5d70f6f7912049a1",
    "https://open.spotify.com/episode/20oNPNibv9YFK89wgYfAdK?si=36DZqf4gREC50jrDYOcGGg",
    "https://open.spotify.com/episode/5MY5KieAmUWzyKVBK9eFYi?si=caa85cca96c74233",
    "https://open.spotify.com/episode/3KSOxrjalScxHFQF9u8M46?si=KNpkP8b3TAy5MShtoISunw",
    "https://open.spotify.com/episode/04G9l6lJCBuQ1OdqsjeZz1?si=YEC9zSFiTiSJlbiMjsJMjg",
    "https://open.spotify.com/episode/2y9SeEILUFWI6rzl8okASZ?si=52faf8736f914f79",
    "https://open.spotify.com/episode/21yp6PDe1XN8B1goR5qMI3?si=k6JURkMRTQq2Ltbujq9qLw",
];
var podcastData = podcastUrls.map(function (url, index) { return ({
    id: String(index + 1),
    spotifyUrl: url,
    type: getSpotifyContentType(url)
}); });
// Fetches the podcast/show/episode title from Spotify oEmbed API
var SpotifyTitle = function (_a) {
    var spotifyUrl = _a.spotifyUrl, type = _a.type;
    var _b = react_1.default.useState(''), title = _b[0], setTitle = _b[1];
    var _c = react_1.default.useState(true), loading = _c[0], setLoading = _c[1];
    react_1.default.useEffect(function () {
        var cancelled = false;
        setLoading(true);
        fetch("https://open.spotify.com/oembed?url=".concat(encodeURIComponent(spotifyUrl)))
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (!cancelled) {
                setTitle(data.title);
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
    return ((0, jsx_runtime_1.jsx)("div", { className: "podcast-title", children: loading ? ((0, jsx_runtime_1.jsxs)("div", { className: "title-skeleton", children: [(0, jsx_runtime_1.jsx)("div", { className: "skeleton-line" }), (0, jsx_runtime_1.jsx)("div", { className: "skeleton-line short" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "podcast-type-badge", children: [(0, jsx_runtime_1.jsx)("span", { className: "type-icon", children: type === 'episode' ? '🎙️' : type === 'show' ? '📻' : '🎵' }), type.charAt(0).toUpperCase() + type.slice(1)] }), (0, jsx_runtime_1.jsx)("h3", { className: "podcast-title-text", children: title || "".concat(type.charAt(0).toUpperCase() + type.slice(1), " #").concat(Math.floor(Math.random() * 100) + 1) })] })) }));
};
function Podcasts() {
    var _this = this;
    var history = (0, router_1.useHistory)();
    var _a = (0, react_1.useState)(1), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = (0, react_1.useState)(''), searchTerm = _b[0], setSearchTerm = _b[1];
    var _c = (0, react_1.useState)('all'), selectedFilter = _c[0], setSelectedFilter = _c[1];
    var podcastsPerPage = 9;
    // Filter podcasts based on search and filter
    var filteredPodcasts = podcastData.filter(function (podcast) {
        var matchesFilter = selectedFilter === 'all' || podcast.type === selectedFilter;
        return matchesFilter;
    });
    // Calculate podcasts for current page
    var indexOfLastPodcast = currentPage * podcastsPerPage;
    var indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
    var currentPodcasts = filteredPodcasts.slice(indexOfFirstPodcast, indexOfLastPodcast);
    var totalPages = Math.ceil(filteredPodcasts.length / podcastsPerPage);
    var handlePageChange = function (pageNumber) {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    var handleShare = function (podcast) { return __awaiter(_this, void 0, void 0, function () {
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
                            url: podcast.spotifyUrl,
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
    var handlePodcastClick = function (podcast, event) {
        var target = event.target;
        if (target.tagName === 'IFRAME' || target.closest('.podcast-embed')) {
            return;
        }
        history.push('/podcasts/details', { podcast: podcast });
    };
    react_1.default.useEffect(function () {
        setCurrentPage(1);
    }, [searchTerm, selectedFilter]);
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: "enhanced-podcast-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "podcast-hero", children: (0, jsx_runtime_1.jsxs)("div", { className: "podcast-hero-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "hero-badge", children: [(0, jsx_runtime_1.jsx)("span", { className: "badge-icon", children: "\uD83C\uDF99\uFE0F" }), (0, jsx_runtime_1.jsx)("span", { className: "badge-text", children: "Premium Audio Content" })] }), (0, jsx_runtime_1.jsx)("h1", { className: "podcast-hero-title", children: "Discover Top Podcasts" }), (0, jsx_runtime_1.jsx)("p", { className: "podcast-hero-description", children: "Stream the best podcasts from your favorite stations. Dive into episodes that inspire, educate, and entertain from leading voices in tech, business, and beyond." }), (0, jsx_runtime_1.jsxs)("div", { className: "podcast-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-number", children: [podcastData.length, "+"] }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label", children: "Episodes" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-number", children: "20+" }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label", children: "Hours" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-number", children: "5+" }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label", children: "Shows" })] })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "podcast-filters", children: [(0, jsx_runtime_1.jsxs)("div", { className: "filter-search", children: [(0, jsx_runtime_1.jsx)("div", { className: "search-icon" }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search podcasts...", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "search-input" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "filter-tabs", children: [(0, jsx_runtime_1.jsxs)("button", { className: "filter-tab ".concat(selectedFilter === 'all' ? 'active' : ''), onClick: function () { return setSelectedFilter('all'); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "tab-icon", children: "\uD83D\uDCCA" }), "All (", podcastData.length, ")"] }), (0, jsx_runtime_1.jsxs)("button", { className: "filter-tab ".concat(selectedFilter === 'episode' ? 'active' : ''), onClick: function () { return setSelectedFilter('episode'); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "tab-icon", children: "\uD83C\uDF99\uFE0F" }), "Episodes (", podcastData.filter(function (p) { return p.type === 'episode'; }).length, ")"] }), (0, jsx_runtime_1.jsxs)("button", { className: "filter-tab ".concat(selectedFilter === 'show' ? 'active' : ''), onClick: function () { return setSelectedFilter('show'); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "tab-icon", children: "\uD83D\uDCFB" }), "Shows (", podcastData.filter(function (p) { return p.type === 'show'; }).length, ")"] }), (0, jsx_runtime_1.jsxs)("button", { className: "filter-tab ".concat(selectedFilter === 'playlist' ? 'active' : ''), onClick: function () { return setSelectedFilter('playlist'); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "tab-icon", children: "\uD83C\uDFB5" }), "Playlists (", podcastData.filter(function (p) { return p.type === 'playlist'; }).length, ")"] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "podcast-content-section", children: currentPodcasts.length > 0 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "podcast-grid", children: currentPodcasts.map(function (podcast, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "enhanced-podcast-card", onClick: function (e) { return handlePodcastClick(podcast, e); }, role: "button", tabIndex: 0, onKeyDown: function (e) {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handlePodcastClick(podcast, e);
                                        }
                                    }, style: { animationDelay: "".concat(index * 0.1, "s") }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "podcast-card-header", children: [(0, jsx_runtime_1.jsx)(SpotifyTitle, { spotifyUrl: podcast.spotifyUrl, type: podcast.type }), (0, jsx_runtime_1.jsxs)("div", { className: "card-actions", children: [(0, jsx_runtime_1.jsx)("button", { className: "action-btn favorite", title: "Add to favorites", children: "\u2764\uFE0F" }), (0, jsx_runtime_1.jsx)("button", { className: "action-btn share", title: "Share podcast", onClick: function (e) {
                                                                e.stopPropagation();
                                                                handleShare(podcast);
                                                            }, children: "\uD83D\uDD17" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "podcast-embed", onClick: function (e) { return e.stopPropagation(); }, children: (0, jsx_runtime_1.jsx)("iframe", { src: "https://open.spotify.com/embed/".concat(podcast.type, "/").concat(getSpotifyEmbedId(podcast.spotifyUrl)), width: "100%", height: "352", frameBorder: "0", allowFullScreen: true, allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading: "lazy", title: "Spotify embed ".concat(podcast.id) }) }), (0, jsx_runtime_1.jsx)("div", { className: "podcast-card-footer", children: (0, jsx_runtime_1.jsxs)("button", { className: "listen-button", children: [(0, jsx_runtime_1.jsx)("span", { className: "listen-icon", children: "\u25B6\uFE0F" }), "Listen Now"] }) })] }, podcast.id)); }) }), totalPages > 1 && ((0, jsx_runtime_1.jsxs)("div", { className: "enhanced-pagination", children: [(0, jsx_runtime_1.jsx)("button", { className: "pagination-nav", onClick: function () { return handlePageChange(Math.max(1, currentPage - 1)); }, disabled: currentPage === 1, children: "\u2190 Previous" }), (0, jsx_runtime_1.jsx)("div", { className: "pagination-numbers", children: Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (number) { return ((0, jsx_runtime_1.jsx)("button", { className: "pagination-number ".concat(currentPage === number ? 'active' : ''), onClick: function () { return handlePageChange(number); }, children: number }, number)); }) }), (0, jsx_runtime_1.jsx)("button", { className: "pagination-nav", onClick: function () { return handlePageChange(Math.min(totalPages, currentPage + 1)); }, disabled: currentPage === totalPages, children: "Next \u2192" })] }))] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "no-results", children: [(0, jsx_runtime_1.jsx)("div", { className: "no-results-icon", children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)("h3", { children: "No podcasts found" }), (0, jsx_runtime_1.jsx)("p", { children: "Try adjusting your filters or search terms" })] })) })] }) }));
}
