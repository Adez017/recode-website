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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var router_1 = require("@docusaurus/router");
require("./video.css");
var getYoutubeVideoId = function (url) {
    // Handle youtu.be short links
    if (url.includes('youtu.be/')) {
        var match = url.match(/youtu\.be\/([^?&\s]+)/);
        return match ? match[1].split('?')[0] : '';
    }
    // Handle youtube.com/watch?v= links
    if (url.includes('youtube.com/watch')) {
        var match = url.match(/[?&]v=([^&\s]+)/);
        return match ? match[1].split('&')[0] : '';
    }
    // Handle youtube.com/shorts/ links
    if (url.includes('youtube.com/shorts/')) {
        var match = url.match(/shorts\/([^?&\s]+)/);
        return match ? match[1].split('?')[0] : '';
    }
    return '';
};
// Updated function to determine video type
var getYoutubeContentType = function (url) {
    if (url.includes('youtu.be/rbi6XhWp2TU') || url.includes('youtu.be/aGyfIrxx1H8') || url.includes('youtu.be/vFS6ZU1WAPA') || url.includes('youtu.be/DWxyEl-t48g')) {
        return 'live';
    }
    else if (url.includes('/shorts/')) {
        return 'other'; // Changed 'shorts' to 'other'
    }
    else {
        return 'video';
    }
};
// Youtube Video URLS
// List of both videos and shorts which will be handeled by the component
var videoUrls = [
    "https://youtu.be/3dnQ2lDNeGI?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/XWjx-RjmhRM?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/R7NReLBCT_8?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/sbyXpflAXkQ?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/7uKMWBFN2jQ?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/v2Pai1TY_Lg?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/P-P3L7YzlyE?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/BNKSlT8jLQ0?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/GnHNScuGKrg?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/RSR5E1bhu5Y?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/knr5gBv-c9c?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/4JX-SIkM3uk?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/V2nvZYe_q7g?list=PLrLTYhoDFx-kiuFiGQqVpYYZ56pIhUW63",
    "https://youtu.be/rbi6XhWp2TU",
    "https://youtu.be/aGyfIrxx1H8",
    "https://youtu.be/GTe2DJQ-enU",
    "https://youtu.be/vFS6ZU1WAPA",
    "https://youtu.be/DWxyEl-t48g",
];
var VideoCard = function (_a) {
    var video = _a.video, onClick = _a.onClick;
    var _b = (0, react_1.useState)('Loading...'), title = _b[0], setTitle = _b[1];
    var _c = (0, react_1.useState)(''), thumbnailUrl = _c[0], setThumbnailUrl = _c[1];
    var videoId = getYoutubeVideoId(video.youtubeUrl);
    // Try different thumbnail qualities in sequence
    var tryThumbnailUrl = function (url) {
        if (!videoId)
            return;
        var img = new Image();
        img.crossOrigin = 'anonymous'; // Handle CORS if needed
        img.onload = function () {
            // Only set the URL if it's not an error image
            if (img.width > 0 && img.height > 0) {
                setThumbnailUrl(url);
            }
            else {
                handleThumbnailError(url);
            }
        };
        img.onerror = function () { return handleThumbnailError(url); };
        img.src = url;
    };
    var handleThumbnailError = function (failedUrl) {
        console.log("Failed to load thumbnail: ".concat(failedUrl));
        if (failedUrl.includes('maxresdefault')) {
            // Try hqdefault if maxresdefault fails
            tryThumbnailUrl("https://i.ytimg.com/vi/".concat(videoId, "/hqdefault.jpg"));
        }
        else if (failedUrl.includes('hqdefault')) {
            // Try mqdefault if hqdefault fails
            tryThumbnailUrl("https://i.ytimg.com/vi/".concat(videoId, "/mqdefault.jpg"));
        }
        else if (failedUrl.includes('mqdefault')) {
            // Try default if mqdefault fails
            tryThumbnailUrl("https://i.ytimg.com/vi/".concat(videoId, "/default.jpg"));
        }
        else {
            // All options failed, show placeholder
            setThumbnailUrl('');
        }
    };
    (0, react_1.useEffect)(function () {
        if (!videoId)
            return;
        // Start with the highest quality thumbnail
        console.log("Loading thumbnails for video ID: ".concat(videoId));
        tryThumbnailUrl("https://i.ytimg.com/vi/".concat(videoId, "/maxresdefault.jpg"));
        // Also try the first frame as a fallback (sometimes works when others don't)
        var firstFrameUrl = "https://img.youtube.com/vi/".concat(videoId, "/0.jpg");
        setTimeout(function () {
            if (!thumbnailUrl) {
                console.log('Trying first frame as fallback');
                tryThumbnailUrl(firstFrameUrl);
            }
        }, 1000);
        // Fetch video title
        var fetchVideoTitle = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("https://www.youtube.com/oembed?url=".concat(encodeURIComponent(video.youtubeUrl), "&format=json"))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setTitle(data.title);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        setTitle('Video Title Unavailable');
                        console.error('Error fetching video title:', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchVideoTitle();
    }, [video.youtubeUrl, videoId]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "video-card", onClick: function (e) { return onClick(video, e); }, role: "button", tabIndex: 0, onKeyDown: function (e) {
            if (e.key === 'Enter' || e.key === ' ')
                onClick(video, e);
        }, children: (0, jsx_runtime_1.jsxs)("div", { className: "video-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "video-info", children: [(0, jsx_runtime_1.jsx)("div", { className: "video-title", style: { color: '#333', fontWeight: '600' }, children: title }), (0, jsx_runtime_1.jsx)("div", { className: "video-type" })] }), (0, jsx_runtime_1.jsx)("div", { className: "video-thumbnail", children: (0, jsx_runtime_1.jsx)("div", { className: "thumbnail-container", children: thumbnailUrl ? ((0, jsx_runtime_1.jsx)("img", { src: thumbnailUrl, alt: title, className: "thumbnail-img", style: { objectFit: 'cover' }, loading: "lazy", onError: function (e) {
                                var img = e.target;
                                console.log('Image error:', img.src);
                                // Let the parent component handle the error
                                setThumbnailUrl('');
                            } })) : ((0, jsx_runtime_1.jsx)("div", { className: "thumbnail-placeholder", children: (0, jsx_runtime_1.jsx)("span", { children: "Loading thumbnail..." }) })) }) })] }) }));
};
var VideoSection = function (_a) {
    var title = _a.title, videos = _a.videos, onClick = _a.onClick;
    if (videos.length === 0)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "video-section", children: [(0, jsx_runtime_1.jsx)("h2", { children: title }), (0, jsx_runtime_1.jsx)("div", { className: "video-grid", children: videos.map(function (video) { return ((0, jsx_runtime_1.jsx)(VideoCard, { video: video, onClick: onClick }, video.id)); }) })] }));
};
var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages, setCurrentPage = _a.setCurrentPage;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pagination", children: [(0, jsx_runtime_1.jsx)("button", { disabled: currentPage === 1, onClick: function () { return setCurrentPage(currentPage - 1); }, title: "Previous page", children: "\u2190 Previous" }), (0, jsx_runtime_1.jsxs)("span", { children: ["Page ", currentPage, " of ", totalPages] }), (0, jsx_runtime_1.jsx)("button", { disabled: currentPage === totalPages, onClick: function () { return setCurrentPage(currentPage + 1); }, title: "Next page", children: "Next \u2192" })] }));
};
function BroadcastsPage() {
    var history = (0, router_1.useHistory)();
    var _a = (0, react_1.useState)(1), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = (0, react_1.useState)('videos'), activeTab = _b[0], setActiveTab = _b[1]; // Changed 'shorts' to 'live'
    var videosPerPage = 12;
    var videoData = videoUrls.map(function (url, index) { return ({
        id: String(index + 1),
        youtubeUrl: url,
        type: getYoutubeContentType(url),
    }); });
    var regularVideos = videoData.filter(function (video) { return video.type === 'video'; });
    var liveVideos = videoData.filter(function (video) { return video.type === 'live'; }); // Changed 'shorts' to 'live'
    var otherVideos = videoData.filter(function (video) { return video.type === 'other'; });
    var indexOfLastVideo = currentPage * videosPerPage;
    var indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    var paginatedVideos = regularVideos.slice(indexOfFirstVideo, indexOfLastVideo);
    var paginatedLiveVideos = liveVideos.slice(indexOfFirstVideo, indexOfLastVideo); // Changed 'shorts' to 'live'
    var totalPages = Math.ceil((activeTab === 'videos' ? regularVideos.length : liveVideos.length) / videosPerPage); // Changed 'shorts' to 'live'
    (0, react_1.useEffect)(function () {
        setCurrentPage(1);
    }, [activeTab]);
    var handleVideoClick = function (video, event) {
        var target = event.target;
        if (target.tagName === 'IFRAME' || target.className === 'video-embed')
            return;
        history.push('/broadcasts/details', { video: video });
    };
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: "video-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Featured Content" }), (0, jsx_runtime_1.jsx)("p", { className: "video-subtitle", children: "Watch our curated collection of videos and shorts" }), (0, jsx_runtime_1.jsxs)("div", { className: "video-tabs", children: [(0, jsx_runtime_1.jsx)("button", { className: "tab-button ".concat(activeTab === 'videos' ? 'active' : ''), onClick: function () { return setActiveTab('videos'); }, children: "\uD83C\uDFA5 Videos" }), (0, jsx_runtime_1.jsx)("button", { className: "tab-button ".concat(activeTab === 'live' ? 'active' : ''), onClick: function () { return setActiveTab('live'); }, children: "\uD83D\uDD34 Past Live" })] }), activeTab === 'videos' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(VideoSection, { title: "Latest Videos", videos: paginatedVideos, onClick: handleVideoClick }), (0, jsx_runtime_1.jsx)(Pagination, { currentPage: currentPage, totalPages: totalPages, setCurrentPage: setCurrentPage })] })), activeTab === 'live' && ( // Changed 'shorts' to 'live'
                (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(VideoSection, { title: "Past Live Videos", videos: paginatedLiveVideos, onClick: handleVideoClick }), (0, jsx_runtime_1.jsx)(Pagination, { currentPage: currentPage, totalPages: totalPages, setCurrentPage: setCurrentPage })] }))] }) }));
}
exports.default = BroadcastsPage;
