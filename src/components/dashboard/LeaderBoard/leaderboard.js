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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LeaderBoard;
var jsx_runtime_1 = require("react/jsx-runtime");
// src/components/dashboard/LeaderBoard/leaderboard.tsx
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var lucide_react_1 = require("lucide-react");
var theme_common_1 = require("@docusaurus/theme-common");
var statsProvider_1 = require("@site/src/lib/statsProvider");
var PRListModal_1 = __importDefault(require("./PRListModal"));
var mockData_1 = require("./mockData");
require("./leaderboard.css");
var GITHUB_ORG = "recodehive";
// Users to exclude from the leaderboard
var EXCLUDED_USERS = ["sanjay-kv", "allcontributors", "allcontributors[bot]"];
function Badge(_a) {
    var count = _a.count, label = _a.label, color = _a.color, onClick = _a.onClick, _b = _a.clickable, clickable = _b === void 0 ? false : _b;
    var badgeStyle = __assign(__assign({}, color), { cursor: clickable ? 'pointer' : 'default', transition: clickable ? 'all 0.2s ease' : 'none' });
    var handleClick = function () {
        if (clickable && onClick) {
            onClick();
        }
    };
    var handleKeyDown = function (e) {
        if (clickable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            if (onClick)
                onClick();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("span", { className: "badge ".concat(clickable ? 'clickable' : ''), style: badgeStyle, onClick: handleClick, onKeyDown: handleKeyDown, tabIndex: clickable ? 0 : -1, role: clickable ? 'button' : undefined, "aria-label": clickable ? "View ".concat(label.toLowerCase(), " details") : undefined, children: [count, " ", label] }));
}
function TopPerformerCard(_a) {
    var contributor = _a.contributor, rank = _a.rank, onPRClick = _a.onPRClick;
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isDark = colorMode === "dark";
    var rankClass = rank === 1 ? "top-1" : rank === 2 ? "top-2" : "top-3";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "top-performer-card ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsx)("img", { src: contributor.avatar, alt: contributor.username, className: "avatar large" }), (0, jsx_runtime_1.jsx)("div", { className: "rank-overlay ".concat(rankClass), children: (0, jsx_runtime_1.jsx)("span", { className: "rank-text", children: rank }) }), (0, jsx_runtime_1.jsxs)("div", { className: "performer-info", children: [(0, jsx_runtime_1.jsx)("a", { href: contributor.profile, target: "_blank", rel: "noreferrer", className: "username-link", children: contributor.username }), (0, jsx_runtime_1.jsxs)("div", { className: "badges-container", children: [(0, jsx_runtime_1.jsx)(Badge, { count: contributor.prs, label: "PRs", color: { background: "#dbeafe", color: "#2563eb" }, onClick: function () { return onPRClick(contributor); }, clickable: true }), (0, jsx_runtime_1.jsx)(Badge, { count: contributor.points, label: "Points", color: { background: "#ede9fe", color: "#7c3aed" } })] })] })] }));
}
function LeaderBoard() {
    // Get time filter functions from context
    var _a = (0, statsProvider_1.useCommunityStatsContext)(), contributors = _a.contributors, stats = _a.stats, loading = _a.loading, error = _a.error, currentTimeFilter = _a.currentTimeFilter, setTimeFilter = _a.setTimeFilter;
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isDark = colorMode === "dark";
    var _b = (0, react_1.useState)(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = (0, react_1.useState)(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = (0, react_1.useState)(null), selectedContributor = _d[0], setSelectedContributor = _d[1];
    var _e = (0, react_1.useState)(false), isModalOpen = _e[0], setIsModalOpen = _e[1];
    var _f = (0, react_1.useState)(false), isSelectChanged = _f[0], setIsSelectChanged = _f[1];
    var itemsPerPage = 10;
    // Modal handlers
    var handlePRClick = function (contributor) {
        setSelectedContributor(contributor);
        setIsModalOpen(true);
    };
    var handleCloseModal = function () {
        setIsModalOpen(false);
        setSelectedContributor(null);
    };
    // Use mock data only in development mode when there's an error or no contributors
    var displayContributors = (error || contributors.length === 0)
        ? (typeof process !== "undefined" && process.env.NODE_ENV === "development"
            ? mockData_1.mockContributors
            : [])
        : contributors;
    // Filter out excluded users and apply search filter
    var filteredContributors = contributors
        .filter(function (contributor) {
        return !EXCLUDED_USERS.some(function (excludedUser) {
            return contributor.username.toLowerCase() === excludedUser.toLowerCase();
        });
    })
        .filter(function (contributor) {
        return contributor.username.toLowerCase().includes(searchQuery.toLowerCase());
    });
    var totalPages = Math.ceil(filteredContributors.length / itemsPerPage);
    var indexOfLast = currentPage * itemsPerPage;
    var indexOfFirst = indexOfLast - itemsPerPage;
    var currentItems = filteredContributors.slice(indexOfFirst, indexOfLast);
    var paginate = function (pageNumber) { return setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages))); };
    var renderPaginationButtons = function () {
        var pages = [];
        var maxVisibleButtons = 5; // Maximum number of page buttons to show directly
        // Special case: if we have 7 or fewer pages, show all of them without ellipsis
        if (totalPages <= 7) {
            var _loop_1 = function (i) {
                pages.push((0, jsx_runtime_1.jsx)("button", { onClick: function () { return paginate(i); }, className: "page-btn ".concat(currentPage === i ? "active" : ""), children: i }, i));
            };
            for (var i = 1; i <= totalPages; i++) {
                _loop_1(i);
            }
            return pages;
        }
        // For more than 7 pages, use the ellipsis approach
        // Always show first page
        pages.push((0, jsx_runtime_1.jsx)("button", { onClick: function () { return paginate(1); }, className: "page-btn ".concat(currentPage === 1 ? "active" : ""), children: "1" }, 1));
        // Calculate the range of pages to show (middle section)
        // We want to show current page and 1-2 pages before and after when possible
        var startPage = Math.max(2, currentPage - 1);
        var endPage = Math.min(totalPages - 1, currentPage + 1);
        // Adjust start and end page if we're near the beginning or end
        if (currentPage <= 3) {
            // Near the beginning, show pages 2, 3, 4
            startPage = 2;
            endPage = Math.min(4, totalPages - 1);
        }
        else if (currentPage >= totalPages - 2) {
            // Near the end, show the three pages before the last page
            endPage = totalPages - 1;
            startPage = Math.max(2, totalPages - 3);
        }
        // Show ellipsis if needed before the middle range
        if (startPage > 2) {
            pages.push((0, jsx_runtime_1.jsx)("span", { className: "pagination-ellipsis", children: "..." }, "ellipsis-1"));
        }
        var _loop_2 = function (i) {
            pages.push((0, jsx_runtime_1.jsx)("button", { onClick: function () { return paginate(i); }, className: "page-btn ".concat(currentPage === i ? "active" : ""), children: i }, i));
        };
        // Show pages in the middle range
        for (var i = startPage; i <= endPage; i++) {
            _loop_2(i);
        }
        // Show ellipsis if needed after the middle range
        if (endPage < totalPages - 1) {
            pages.push((0, jsx_runtime_1.jsx)("span", { className: "pagination-ellipsis", children: "..." }, "ellipsis-2"));
        }
        // Always show last page
        pages.push((0, jsx_runtime_1.jsx)("button", { onClick: function () { return paginate(totalPages); }, className: "page-btn ".concat(currentPage === totalPages ? "active" : ""), children: totalPages }, totalPages));
        return pages;
    };
    var getRankClass = function (index) {
        if (index === 0)
            return "top-1";
        if (index === 1)
            return "top-2";
        if (index === 2)
            return "top-3";
        return "regular";
    };
    // Helper function for time filter display
    var getTimeFilterLabel = function (filter) {
        switch (filter) {
            case 'week': return '📊 This Week';
            case 'month': return '📆 This Month';
            case 'year': return '📅 This Year';
            case 'all': return '🏆 All Time';
            default: return '🏆 All Time';
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "leaderboard-container ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "leaderboard-content", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "header", initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [(0, jsx_runtime_1.jsx)("h1", { className: "title", children: "Recode Hive Leaderboard" }), (0, jsx_runtime_1.jsxs)("p", { className: "subtitle ".concat(isDark ? "dark" : "light"), children: ["Top contributors across the ", (0, jsx_runtime_1.jsx)("strong", { children: GITHUB_ORG }), " organization"] })] }), !loading && filteredContributors.length > 2 && ((0, jsx_runtime_1.jsxs)("div", { className: "top-performers-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "title-filter-container", children: [(0, jsx_runtime_1.jsx)("h2", { className: "top-performers-title ".concat(isDark ? "dark" : "light"), children: "RecodeHive Top Performers" }), (0, jsx_runtime_1.jsxs)("div", { className: "time-filter-wrapper top-title-filter", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "time-period-filter", className: "filter-label", children: "Time Period:" }), (0, jsx_runtime_1.jsxs)("select", { id: "time-period-filter", value: currentTimeFilter, onChange: function (e) {
                                                    // Use setTimeFilter from context
                                                    setTimeFilter(e.target.value);
                                                    setCurrentPage(1);
                                                    setIsSelectChanged(true);
                                                    setTimeout(function () { return setIsSelectChanged(false); }, 1200);
                                                }, className: "time-filter-select ".concat(isDark ? "dark" : "light", " ").concat(isSelectChanged ? 'highlight-change' : ''), children: [(0, jsx_runtime_1.jsx)("option", { value: "all", children: "\uD83C\uDFC6 All Time" }), (0, jsx_runtime_1.jsx)("option", { value: "year", children: "\uD83D\uDCC5 This Year" }), (0, jsx_runtime_1.jsx)("option", { value: "month", children: "\uD83D\uDCC6 This Month" }), (0, jsx_runtime_1.jsx)("option", { value: "week", children: "\uD83D\uDCCA This Week" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "top-performers-grid", children: [(0, jsx_runtime_1.jsx)(TopPerformerCard, { contributor: filteredContributors[1], rank: 2, onPRClick: handlePRClick }), (0, jsx_runtime_1.jsx)(TopPerformerCard, { contributor: filteredContributors[0], rank: 1, onPRClick: handlePRClick }), (0, jsx_runtime_1.jsx)(TopPerformerCard, { contributor: filteredContributors[2], rank: 3, onPRClick: handlePRClick })] })] })), stats && ((0, jsx_runtime_1.jsxs)("div", { className: "stats-grid", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-card ".concat(isDark ? "dark" : "light"), children: (0, jsx_runtime_1.jsxs)("div", { className: "stat-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-icon users", children: (0, jsx_runtime_1.jsx)(fa_1.FaUsers, {}) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-value ".concat(isDark ? "dark" : "light"), children: stats.totalContributors }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label ".concat(isDark ? "dark" : "light"), children: "Total Contributors" })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "stat-card ".concat(isDark ? "dark" : "light"), children: (0, jsx_runtime_1.jsxs)("div", { className: "stat-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-icon prs", children: (0, jsx_runtime_1.jsx)(fa_1.FaCode, {}) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-value ".concat(isDark ? "dark" : "light"), children: stats.flooredTotalPRs }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label ".concat(isDark ? "dark" : "light"), children: "Merged PRs" })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "stat-card ".concat(isDark ? "dark" : "light"), children: (0, jsx_runtime_1.jsxs)("div", { className: "stat-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-icon points", children: (0, jsx_runtime_1.jsx)(fa_1.FaStar, {}) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "stat-value ".concat(isDark ? "dark" : "light"), children: stats.flooredTotalPoints }), (0, jsx_runtime_1.jsx)("div", { className: "stat-label ".concat(isDark ? "dark" : "light"), children: "Total Points" })] })] }) })] })), (0, jsx_runtime_1.jsx)("div", { className: "search-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "search-wrapper", children: [(0, jsx_runtime_1.jsx)(fa_1.FaSearch, { className: "search-icon ".concat(isDark ? "dark" : "light") }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search contributors...", value: searchQuery, onChange: function (e) {
                                        setSearchQuery(e.target.value);
                                        setCurrentPage(1);
                                    }, className: "search-input ".concat(isDark ? "dark" : "light") })] }) }), loading && ((0, jsx_runtime_1.jsxs)("div", { className: "skeleton-loader ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "skeleton-header", children: [(0, jsx_runtime_1.jsx)("div", { children: "#" }), (0, jsx_runtime_1.jsx)("div", { children: "Contributor" }), (0, jsx_runtime_1.jsx)("div", { children: "Contributions" })] }), __spreadArray([], Array(itemsPerPage), true).map(function (_, i) { return ((0, jsx_runtime_1.jsxs)("div", { className: "skeleton-row", children: [(0, jsx_runtime_1.jsx)("div", { className: "skeleton-avatar" }), (0, jsx_runtime_1.jsx)("div", { className: "skeleton-avatar large" }), (0, jsx_runtime_1.jsxs)("div", { className: "skeleton-info", children: [(0, jsx_runtime_1.jsx)("div", { className: "skeleton-bar" }), (0, jsx_runtime_1.jsxs)("div", { className: "skeleton-badges", children: [(0, jsx_runtime_1.jsx)("div", { className: "skeleton-badge" }), (0, jsx_runtime_1.jsx)("div", { className: "skeleton-badge" })] })] })] }, i)); })] })), error && displayContributors.length === 0 && ((0, jsx_runtime_1.jsx)("div", { className: "no-contributors", children: (0, jsx_runtime_1.jsxs)("p", { children: ["Error: ", error] }) })), !loading && filteredContributors.length === 0 && ((0, jsx_runtime_1.jsx)("div", { className: "no-contributors", children: (0, jsx_runtime_1.jsx)("p", { children: "No contributors found." }) })), !loading && filteredContributors.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "contributors-container ".concat(isDark ? "dark" : "light"), children: [error && ((0, jsx_runtime_1.jsx)("div", { className: "error-banner", style: {
                                    padding: '12px',
                                    backgroundColor: isDark ? '#fee8e7' : '#fee8e7',
                                    color: '#dc2626',
                                    borderRadius: '8px',
                                    marginBottom: '16px',
                                    fontSize: '14px',
                                    textAlign: 'center'
                                }, children: "Demo Mode: Showing sample data due to API configuration issue" })), (0, jsx_runtime_1.jsxs)("div", { className: "contributors-header", children: [(0, jsx_runtime_1.jsx)("div", { className: "contributor-cell rank", children: "Rank" }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell avatar-cell", children: "Avatar" }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell username-cell", children: "User" }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell prs-cell", children: "PRs" }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell points-cell", children: "Points" })] }), currentItems.map(function (contributor, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.05 }, className: "contributor-row ".concat(isDark ? (index % 2 === 0 ? "even" : "odd") : (index % 2 === 0 ? "even" : "odd")), children: [(0, jsx_runtime_1.jsx)("div", { className: "contributor-cell rank-cell", children: (0, jsx_runtime_1.jsx)("div", { className: "rank-badge ".concat(getRankClass(filteredContributors.indexOf(contributor))), children: filteredContributors.indexOf(contributor) + 1 }) }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell avatar-cell", children: (0, jsx_runtime_1.jsx)("img", { src: contributor.avatar, alt: contributor.username, className: "avatar ".concat(isDark ? "dark" : "light") }) }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell username-cell", children: (0, jsx_runtime_1.jsx)("a", { href: contributor.profile, target: "_blank", rel: "noreferrer", className: "username-link ".concat(isDark ? "dark" : "light"), children: contributor.username }) }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell prs-cell", children: (0, jsx_runtime_1.jsx)(Badge, { count: contributor.prs, label: "PRs", color: { background: "#dbeafe", color: "#2563eb" }, onClick: function () { return handlePRClick(contributor); }, clickable: true }) }), (0, jsx_runtime_1.jsx)("div", { className: "contributor-cell points-cell", children: (0, jsx_runtime_1.jsx)(Badge, { count: contributor.points, label: "Points", color: { background: "#ede9fe", color: "#7c3aed" } }) })] }, contributor.username)); }), totalPages > 1 && ((0, jsx_runtime_1.jsxs)("div", { className: "pagination ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return paginate(currentPage - 1); }, disabled: currentPage === 1, className: "pagination-btn ".concat(currentPage === 1 ? "disabled" : ""), "aria-label": "Previous page", title: "Previous page", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeft, { size: 20 }) }), (0, jsx_runtime_1.jsx)("div", { className: "page-numbers", children: renderPaginationButtons() }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return paginate(currentPage + 1); }, disabled: currentPage === totalPages, className: "pagination-btn ".concat(currentPage === totalPages ? "disabled" : ""), "aria-label": "Next page", title: "Next page", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { size: 20 }) })] })), (0, jsx_runtime_1.jsxs)("div", { className: "cta-footer ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsx)("p", { className: "cta-text ".concat(isDark ? "dark" : "light"), children: "Want to get on this leaderboard?" }), (0, jsx_runtime_1.jsxs)("a", { href: "https://github.com/".concat(GITHUB_ORG), target: "_blank", rel: "noreferrer", className: "cta-button", children: [(0, jsx_runtime_1.jsx)(fa_1.FaGithub, { style: { marginRight: 8 } }), "Contribute on GitHub"] })] })] }))] }), (0, jsx_runtime_1.jsx)(PRListModal_1.default, { contributor: selectedContributor, isOpen: isModalOpen, onClose: handleCloseModal })] }));
}
