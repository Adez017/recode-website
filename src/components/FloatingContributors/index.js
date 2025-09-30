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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
require("./FloatingContributors.css");
// Format relative time (e.g., "2 hours ago")
var formatTimeAgo = function (date) {
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1)
        return "".concat(interval, " years ago");
    interval = Math.floor(seconds / 2592000);
    if (interval > 1)
        return "".concat(interval, " months ago");
    interval = Math.floor(seconds / 86400);
    if (interval > 1)
        return "".concat(interval, " days ago");
    if (interval === 1)
        return "1 day ago";
    interval = Math.floor(seconds / 3600);
    if (interval > 1)
        return "".concat(interval, " hours ago");
    if (interval === 1)
        return "1 hour ago";
    interval = Math.floor(seconds / 60);
    if (interval > 1)
        return "".concat(interval, " minutes ago");
    if (interval === 1)
        return "1 minute ago";
    return "just now";
};
var FloatingContributors = function (_a) {
    var _b = _a.headerEmbedded, headerEmbedded = _b === void 0 ? false : _b;
    var _c = (0, react_1.useState)([]), contributors = _c[0], setContributors = _c[1];
    var _d = (0, react_1.useState)([]), activities = _d[0], setActivities = _d[1];
    var _e = (0, react_1.useState)(0), currentActivityIndex = _e[0], setCurrentActivityIndex = _e[1];
    var _f = (0, react_1.useState)(true), isVisible = _f[0], setIsVisible = _f[1];
    var _g = (0, react_1.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0, react_1.useState)(null), lastFetched = _h[0], setLastFetched = _h[1];
    var refreshTimerRef = (0, react_1.useRef)(null);
    // Create fallback activities for when API fails
    var createFallbackActivities = (0, react_1.useCallback)(function () {
        var fallbackContributors = [
            {
                login: 'sanjay-kv',
                avatar_url: 'https://avatars.githubusercontent.com/u/30715153?v=4',
                html_url: 'https://github.com/sanjay-kv',
            },
            {
                login: 'recodehive-team',
                avatar_url: 'https://avatars.githubusercontent.com/u/150000000?v=4',
                html_url: 'https://github.com/recodehive',
            },
            {
                login: 'open-source-contributor',
                avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
                html_url: 'https://github.com/open-source-contributor',
            },
            {
                login: 'developer',
                avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4',
                html_url: 'https://github.com/developer',
            },
            {
                login: 'coder',
                avatar_url: 'https://avatars.githubusercontent.com/u/6154722?v=4',
                html_url: 'https://github.com/coder',
            },
        ];
        var actions = ['pushed', 'created', 'merged', 'opened', 'commented'];
        var timeOffsets = [5, 10, 30, 60, 120, 240, 480]; // minutes
        var messages = [
            'Updated documentation',
            'Fixed styling issues',
            'Added new feature',
            'Resolved conflict in package.json',
            'Implemented responsive design',
            'Updated dependencies',
            'Fixed typo in README'
        ];
        return fallbackContributors.map(function (contributor, index) {
            var _a;
            var now = new Date();
            var timestamp = new Date(now.getTime() - (timeOffsets[index % timeOffsets.length] * 60 * 1000));
            return {
                id: "fallback-".concat(index),
                contributor: {
                    login: contributor.login,
                    avatar_url: contributor.avatar_url,
                    html_url: contributor.html_url,
                },
                action: actions[index % actions.length],
                message: (_a = messages[index % messages.length]) === null || _a === void 0 ? void 0 : _a.slice(0, 50), // Consistent message length
                timestamp: timestamp,
                timeAgo: formatTimeAgo(timestamp),
            };
        });
    }, []);
    // Fetch live data from GitHub
    var fetchLiveData = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var CACHE_KEY, CACHE_DURATION, now, events, cachedData, _a, data, timestamp, eventsResponse, newActivities, contributorsMap_1, contributorsResponse, contributorsData, error_1, error_2, fallbackActivities, contributorsMap_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 11, , 12]);
                    CACHE_KEY = 'recodehive_website_events';
                    CACHE_DURATION = 2 * 60 * 1000;
                    now = Date.now();
                    if (lastFetched && now - lastFetched < 30000) {
                        // Don't fetch more than once every 30 seconds
                        return [2 /*return*/];
                    }
                    events = [];
                    if (typeof window !== 'undefined') {
                        try {
                            cachedData = localStorage.getItem(CACHE_KEY);
                            if (cachedData) {
                                _a = JSON.parse(cachedData), data = _a.data, timestamp = _a.timestamp;
                                if (now - timestamp < CACHE_DURATION) {
                                    events = data;
                                }
                            }
                        }
                        catch (e) {
                            console.warn('Error retrieving cached events', e);
                        }
                    }
                    if (!(events.length === 0)) return [3 /*break*/, 3];
                    setLoading(true);
                    return [4 /*yield*/, fetch('https://api.github.com/repos/recodehive/recode-website/events?per_page=30')];
                case 1:
                    eventsResponse = _b.sent();
                    if (!eventsResponse.ok) {
                        throw new Error("GitHub API error: ".concat(eventsResponse.status));
                    }
                    return [4 /*yield*/, eventsResponse.json()];
                case 2:
                    events = _b.sent();
                    // Save to cache
                    if (typeof window !== 'undefined' && Array.isArray(events)) {
                        try {
                            localStorage.setItem(CACHE_KEY, JSON.stringify({
                                data: events,
                                timestamp: now,
                            }));
                        }
                        catch (e) {
                            console.warn('Error caching events data', e);
                        }
                    }
                    _b.label = 3;
                case 3:
                    if (!(Array.isArray(events) && events.length > 0)) return [3 /*break*/, 10];
                    newActivities = events.map(function (event) {
                        var _a, _b, _c, _d, _e;
                        // Map GitHub event types to our action types
                        var action = 'other';
                        var message;
                        switch (event.type) {
                            case 'PushEvent':
                                action = 'pushed';
                                message = event.payload.commits && ((_b = (_a = event.payload.commits[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.slice(0, 50));
                                break;
                            case 'PullRequestEvent':
                                if (event.payload.action === 'opened')
                                    action = 'opened';
                                else if (event.payload.action === 'closed' && ((_c = event.payload.pull_request) === null || _c === void 0 ? void 0 : _c.merged))
                                    action = 'merged';
                                else if (event.payload.action === 'closed')
                                    action = 'closed';
                                break;
                            case 'CreateEvent':
                                action = 'created';
                                break;
                            case 'IssueCommentEvent':
                            case 'CommitCommentEvent':
                            case 'PullRequestReviewCommentEvent':
                                action = 'commented';
                                message = (_e = (_d = event.payload.comment) === null || _d === void 0 ? void 0 : _d.body) === null || _e === void 0 ? void 0 : _e.slice(0, 50);
                                break;
                            default:
                                action = 'other';
                        }
                        var timestamp = new Date(event.created_at);
                        return {
                            id: event.id,
                            contributor: {
                                login: event.actor.login,
                                avatar_url: event.actor.avatar_url,
                                html_url: "https://github.com/".concat(event.actor.login),
                            },
                            action: action,
                            message: message === null || message === void 0 ? void 0 : message.slice(0, 50), // Consistent message length limit
                            timestamp: timestamp,
                            timeAgo: formatTimeAgo(timestamp),
                        };
                    });
                    if (!(newActivities.length > 0)) return [3 /*break*/, 10];
                    setActivities(newActivities);
                    contributorsMap_1 = new Map();
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 8, , 9]);
                    return [4 /*yield*/, fetch('https://api.github.com/repos/recodehive/recode-website/contributors?per_page=100')];
                case 5:
                    contributorsResponse = _b.sent();
                    if (!contributorsResponse.ok) return [3 /*break*/, 7];
                    return [4 /*yield*/, contributorsResponse.json()];
                case 6:
                    contributorsData = _b.sent();
                    if (Array.isArray(contributorsData)) {
                        contributorsData.forEach(function (contributor) {
                            if (contributor.login && contributor.type === 'User') {
                                contributorsMap_1.set(contributor.login, {
                                    id: contributor.id.toString(),
                                    login: contributor.login,
                                    avatar_url: contributor.avatar_url,
                                    contributions: contributor.contributions,
                                    html_url: contributor.html_url,
                                });
                            }
                        });
                    }
                    _b.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _b.sent();
                    console.warn('Error fetching contributors:', error_1);
                    // If we couldn't get contributors data, at least use actors from events
                    events.forEach(function (event) {
                        var login = event.actor.login;
                        if (!contributorsMap_1.has(login)) {
                            contributorsMap_1.set(login, {
                                id: event.actor.id.toString(),
                                login: login,
                                avatar_url: event.actor.avatar_url,
                                contributions: 1, // We don't know the actual count
                                html_url: "https://github.com/".concat(login),
                            });
                        }
                    });
                    return [3 /*break*/, 9];
                case 9:
                    // Update contributors if we found any
                    if (contributorsMap_1.size > 0) {
                        setContributors(Array.from(contributorsMap_1.values()));
                    }
                    _b.label = 10;
                case 10:
                    setLastFetched(now);
                    setLoading(false);
                    // Set up next refresh
                    if (refreshTimerRef.current) {
                        clearTimeout(refreshTimerRef.current);
                    }
                    refreshTimerRef.current = setTimeout(function () {
                        fetchLiveData();
                    }, 60000); // Refresh every minute
                    return [3 /*break*/, 12];
                case 11:
                    error_2 = _b.sent();
                    console.warn('Error fetching GitHub events:', error_2);
                    // Use fallback data if we have no activities yet
                    if (activities.length === 0) {
                        fallbackActivities = createFallbackActivities();
                        setActivities(fallbackActivities);
                        contributorsMap_2 = new Map();
                        fallbackActivities.forEach(function (activity) {
                            var login = activity.contributor.login;
                            if (!contributorsMap_2.has(login)) {
                                contributorsMap_2.set(login, {
                                    id: "fallback-".concat(login),
                                    login: login,
                                    avatar_url: activity.contributor.avatar_url,
                                    contributions: Math.floor(Math.random() * 50) + 10,
                                    html_url: activity.contributor.html_url,
                                });
                            }
                        });
                        setContributors(Array.from(contributorsMap_2.values()));
                    }
                    setLoading(false);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    }); }, [activities.length, createFallbackActivities, lastFetched]);
    // Initialize component and start data fetching
    (0, react_1.useEffect)(function () {
        // Set loading state
        setLoading(true);
        // Fetch data immediately
        fetchLiveData();
        // Clean up on unmount
        return function () {
            if (refreshTimerRef.current) {
                clearTimeout(refreshTimerRef.current);
            }
        };
    }, [fetchLiveData]);
    // Cycle through activities
    (0, react_1.useEffect)(function () {
        if (activities.length <= 1)
            return;
        var interval = setInterval(function () {
            setCurrentActivityIndex(function (prev) { return (prev + 1) % activities.length; });
        }, 4000);
        return function () { return clearInterval(interval); };
    }, [activities.length]);
    // Get GitHub URL for event
    var getGitHubEventUrl = function (activity) {
        var repoUrl = 'https://github.com/recodehive/recode-website';
        switch (activity.action) {
            case 'pushed':
                return "".concat(repoUrl, "/commits");
            case 'merged':
            case 'opened':
            case 'closed':
                return "".concat(repoUrl, "/pulls");
            case 'commented':
                return "".concat(repoUrl, "/issues");
            case 'created':
                return repoUrl;
            default:
                return repoUrl;
        }
    };
    // Get icon for action type
    var getActionIcon = function (action) {
        switch (action) {
            case 'pushed': return '🚀';
            case 'created': return '✨';
            case 'merged': return '🔄';
            case 'opened': return '📝';
            case 'commented': return '💬';
            case 'closed': return '✅';
            default: return '💻';
        }
    };
    // Get text for action type
    var getActionText = function (action) {
        switch (action) {
            case 'pushed': return 'PUSHED';
            case 'created': return 'CREATED';
            case 'merged': return 'MERGED';
            case 'opened': return 'OPENED';
            case 'commented': return 'COMMENTED';
            case 'closed': return 'CLOSED';
            default: return 'ACTIVE';
        }
    };
    // Don't render anything while initial loading
    if (loading && activities.length === 0) {
        return null;
    }
    // Get current activity to display
    var currentActivity = activities[currentActivityIndex];
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: isVisible && ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "floating-contributors-container ".concat(headerEmbedded ? 'header-embedded' : ''), initial: { opacity: 0, y: headerEmbedded ? 0 : 50, scale: headerEmbedded ? 1 : 0.9 }, animate: {
                opacity: 1,
                y: 0,
                scale: 1,
            }, exit: { opacity: 0, y: headerEmbedded ? 0 : 50, scale: headerEmbedded ? 1 : 0.9 }, transition: {
                duration: headerEmbedded ? 0.8 : 0.6,
                ease: [0.4, 0, 0.2, 1]
            }, children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "floating-contributors-card", animate: headerEmbedded ? {} : {
                        y: [0, -8, 0],
                    }, transition: headerEmbedded ? {} : {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }, children: [(0, jsx_runtime_1.jsx)("button", { className: "floating-contributors-close", onClick: function () { return setIsVisible(false); }, "aria-label": "Close contributors showcase", children: "\u00D7" }), (0, jsx_runtime_1.jsxs)("div", { className: "floating-contributors-header", children: [(0, jsx_runtime_1.jsxs)("div", { className: "floating-contributors-title", children: [(0, jsx_runtime_1.jsx)("span", { className: "title-icon", children: "\uD83D\uDC65" }), (0, jsx_runtime_1.jsx)("span", { children: "Live Activity" })] }), (0, jsx_runtime_1.jsx)("div", { className: "floating-contributors-subtitle", children: "recodehive/recode-website" })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { mode: "wait", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "floating-contributors-activity contributor-activity-item", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.4 }, onClick: function () { return window.open(getGitHubEventUrl(currentActivity), '_blank'); }, tabIndex: 0, role: "link", "aria-label": "View ".concat(currentActivity.contributor.login, "'s ").concat(currentActivity.action, " activity on GitHub"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "activity-avatar-container", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.img, { src: currentActivity.contributor.avatar_url, alt: currentActivity.contributor.login, className: "activity-avatar", whileHover: { scale: 1.1 }, transition: { type: "spring", stiffness: 400, damping: 10 } }), (0, jsx_runtime_1.jsx)("div", { className: "activity-status-indicator", children: (0, jsx_runtime_1.jsx)("span", { className: "status-dot" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "activity-details", children: [(0, jsx_runtime_1.jsxs)("div", { className: "activity-user", children: [(0, jsx_runtime_1.jsxs)("span", { className: "activity-username", title: "@".concat(currentActivity.contributor.login), children: ["@", currentActivity.contributor.login] }), (0, jsx_runtime_1.jsx)("span", { className: "activity-action-badge", children: getActionText(currentActivity.action) })] }), currentActivity.message && ((0, jsx_runtime_1.jsx)("div", { className: "activity-message", title: currentActivity.message, children: currentActivity.message })), (0, jsx_runtime_1.jsx)("div", { className: "activity-time", children: currentActivity.timeAgo })] })] }, currentActivityIndex) }), (0, jsx_runtime_1.jsxs)("div", { className: "floating-contributors-grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "contributors-grid-header", children: [(0, jsx_runtime_1.jsx)("span", { children: "Recent Contributors" }), (0, jsx_runtime_1.jsx)("span", { className: "contributors-count", children: contributors.length })] }), (0, jsx_runtime_1.jsxs)("div", { className: "contributors-avatars", children: [contributors
                                            .sort(function (a, b) { return b.contributions - a.contributions; }) // Sort contributors by contributions in descending order
                                            .slice(0, 5) // Limit to top 5 contributors
                                            .map(function (contributor, index) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "contributor-avatar-wrapper", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: {
                                                delay: index * 0.05,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 15
                                            }, whileHover: { scale: 1.1, zIndex: 5 }, children: (0, jsx_runtime_1.jsxs)("a", { href: contributor.html_url, target: "_blank", rel: "noopener noreferrer", "aria-label": "View ".concat(contributor.login, "'s GitHub profile"), className: "contributor-link", children: [(0, jsx_runtime_1.jsx)("img", { src: contributor.avatar_url, alt: contributor.login, className: "contributor-avatar" }), (0, jsx_runtime_1.jsxs)("div", { className: "contributor-tooltip", children: [(0, jsx_runtime_1.jsxs)("div", { className: "tooltip-username", children: ["@", contributor.login] }), (0, jsx_runtime_1.jsxs)("div", { className: "tooltip-contributions", children: [contributor.contributions || 0, " contributions"] })] })] }) }, contributor.id)); }), contributors.length > 12 && ((0, jsx_runtime_1.jsx)("div", { className: "contributors-more", children: (0, jsx_runtime_1.jsxs)("span", { children: ["+", contributors.length - 12, " more"] }) }))] })] }), (0, jsx_runtime_1.jsx)("div", { className: "floating-contributors-footer", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.a, { href: "https://github.com/recodehive/recode-website", target: "_blank", rel: "noopener noreferrer", className: "contributors-cta", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, "aria-label": "View repository on GitHub and join the community", children: [(0, jsx_runtime_1.jsx)("span", { className: "cta-icon", children: "\uD83D\uDE80" }), (0, jsx_runtime_1.jsx)("span", { children: "View Repository on GitHub" }), (0, jsx_runtime_1.jsx)("span", { className: "cta-arrow", children: "\u2197" })] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "floating-particles", children: __spreadArray([], Array(6), true).map(function (_, i) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "floating-particle", animate: {
                            y: [0, -20, 0],
                            x: [0, Math.sin(i) * 10, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }, transition: {
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                        }, style: {
                            left: "".concat(10 + i * 15, "%"),
                            top: "".concat(20 + (i % 3) * 20, "%"),
                        } }, i)); }) })] })) }));
};
exports.default = FloatingContributors;
