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
var Head_1 = __importDefault(require("@docusaurus/Head"));
var BrowserOnly_1 = __importDefault(require("@docusaurus/BrowserOnly"));
var framer_motion_1 = require("framer-motion");
var statsProvider_1 = require("@site/src/lib/statsProvider");
var react_slot_counter_1 = __importDefault(require("react-slot-counter"));
var router_1 = require("@docusaurus/router");
var githubService_1 = require("@site/src/services/githubService");
var DiscussionCard_1 = __importDefault(require("@site/src/components/discussions/DiscussionCard"));
var lucide_react_1 = require("lucide-react");
var NavbarIcon_1 = __importDefault(require("@site/src/components/navbar/NavbarIcon"));
require("@site/src/components/discussions/discussions.css");
require("./dashboard.css");
var leaderboard_1 = __importDefault(require("@site/src/components/dashboard/LeaderBoard/leaderboard"));
var categories = [
    "all",
    "announcements",
    "ideas",
    "q-a",
    "show-and-tell",
    "general",
];
var DashboardContent = function () {
    var location = (0, router_1.useLocation)();
    var history = (0, router_1.useHistory)();
    var _a = (0, react_1.useState)("home"), activeTab = _a[0], setActiveTab = _a[1];
    // Discussion state management
    var _b = (0, react_1.useState)("discussions"), activeDiscussionTab = _b[0], setActiveDiscussionTab = _b[1];
    var _c = (0, react_1.useState)("all"), selectedCategory = _c[0], setSelectedCategory = _c[1];
    var _d = (0, react_1.useState)("most_popular"), sortBy = _d[0], setSortBy = _d[1];
    var _e = (0, react_1.useState)(""), searchQuery = _e[0], setSearchQuery = _e[1];
    var _f = (0, react_1.useState)([]), discussions = _f[0], setDiscussions = _f[1];
    var _g = (0, react_1.useState)(true), discussionsLoading = _g[0], setDiscussionsLoading = _g[1];
    var _h = (0, react_1.useState)(null), discussionsError = _h[0], setDiscussionsError = _h[1];
    var _j = (0, react_1.useState)(false), showDashboardMenu = _j[0], setShowDashboardMenu = _j[1];
    // Close dashboard menu when clicking outside
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            var target = event.target;
            if (showDashboardMenu &&
                !target.closest('.dashboard-mobile-menu') &&
                !target.closest('.dashboard-menu-btn')) {
                setShowDashboardMenu(false);
            }
        };
        if (showDashboardMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDashboardMenu]);
    (0, react_1.useEffect)(function () {
        // Set active tab based on URL hash
        if (location.hash === "#discuss") {
            setActiveTab("discuss");
        }
        else if (location.hash === "#leaderboard") {
            setActiveTab("contributors");
        }
        else if (location.hash === "#giveaway") {
            setActiveTab("giveaway");
        }
        else {
            setActiveTab("home");
        }
    }, [location]);
    // Fetch discussions when discuss tab is active
    (0, react_1.useEffect)(function () {
        if (activeTab === "discuss") {
            fetchDiscussions();
        }
    }, [activeTab]);
    var fetchDiscussions = function () { return __awaiter(void 0, void 0, void 0, function () {
        var discussionsData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setDiscussionsLoading(true);
                    setDiscussionsError(null);
                    return [4 /*yield*/, githubService_1.githubService.fetchDiscussions(20)];
                case 1:
                    discussionsData = _a.sent();
                    setDiscussions(discussionsData);
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.error("Failed to fetch discussions:", error_1);
                    setDiscussionsError(error_1 instanceof Error ? error_1.message : "Failed to load discussions");
                    return [3 /*break*/, 4];
                case 3:
                    setDiscussionsLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // Discussion handlers
    var handleDiscussionTabChange = function (tab) {
        setActiveDiscussionTab(tab);
    };
    var handleCategoryChange = function (category) {
        setSelectedCategory(category);
    };
    var getCategoryIcon = function (category) {
        var iconMap = {
            all: null,
            announcements: (0, jsx_runtime_1.jsx)(lucide_react_1.Megaphone, { size: 14 }),
            ideas: (0, jsx_runtime_1.jsx)(lucide_react_1.Lightbulb, { size: 14 }),
            "q-a": (0, jsx_runtime_1.jsx)(lucide_react_1.HelpCircle, { size: 14 }),
            "show-and-tell": (0, jsx_runtime_1.jsx)(lucide_react_1.Star, { size: 14 }),
            general: (0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { size: 14 }),
        };
        return iconMap[category] || null;
    };
    var getCategoryDisplayName = function (category) {
        var categoryMap = {
            all: "All",
            announcements: "Announcements",
            ideas: "Ideas",
            "q-a": "Q&A",
            "show-and-tell": "Show & Tell",
            general: "General",
        };
        return categoryMap[category] || category;
    };
    var handleSortChange = function (event) {
        setSortBy(event.target.value);
    };
    var handleSearchChange = function (event) {
        setSearchQuery(event.target.value);
    };
    var handleNewDiscussion = function () {
        window.open("https://github.com/recodehive/recode-website/discussions/new", "_blank");
    };
    // Filter discussions based on current state and tab
    var getFilteredDiscussions = function (discussions) {
        return discussions
            .filter(function (discussion) {
            // First apply tab filter
            switch (activeDiscussionTab) {
                case "trending":
                    return discussion.reactions.total_count > 5;
                case "unanswered":
                    return discussion.comments === 0;
                default:
                    return true;
            }
        })
            .filter(function (discussion) {
            // Then apply category filter
            if (selectedCategory !== "all") {
                var categoryName = discussion.category.name.toLowerCase();
                var selectedCat = selectedCategory.toLowerCase();
                // Map GitHub discussion categories to our filter categories
                if (selectedCat === "q-a" &&
                    (categoryName.includes("q&a") || categoryName.includes("question"))) {
                    return true;
                }
                if (selectedCat === "show-and-tell" &&
                    categoryName.includes("show")) {
                    return true;
                }
                if (selectedCat === "announcements" &&
                    categoryName.includes("announcement")) {
                    return true;
                }
                if (selectedCat === "ideas" && categoryName.includes("idea")) {
                    return true;
                }
                if (selectedCat === "general" &&
                    (categoryName.includes("general") ||
                        categoryName.includes("discussion"))) {
                    return true;
                }
                return categoryName.includes(selectedCat);
            }
            return true;
        })
            .filter(function (discussion) {
            // Then apply search filter
            if (searchQuery) {
                return (discussion.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                    discussion.body.toLowerCase().includes(searchQuery.toLowerCase()));
            }
            return true;
        })
            .sort(function (a, b) {
            // Finally sort the results
            switch (sortBy) {
                case "latest":
                    return (new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime());
                case "oldest":
                    return (new Date(a.created_at).getTime() -
                        new Date(b.created_at).getTime());
                default:
                    return b.reactions.total_count - a.reactions.total_count;
            }
        });
    };
    var filteredDiscussions = react_1.default.useMemo(function () { return getFilteredDiscussions(discussions); }, [discussions, activeDiscussionTab, selectedCategory, searchQuery, sortBy]);
    var handleTabChange = function (tab) {
        setActiveTab(tab);
        setShowDashboardMenu(false);
        if (tab === "discuss") {
            history.push("#discuss");
            window.scrollTo(0, 0);
        }
        else if (tab === "giveaway") {
            history.push("/dashboard/giveaway");
        }
        else if (tab === "contributors") {
            history.push("#leaderboard");
            window.scrollTo(0, 0);
        }
        else {
            history.push("#");
        }
    };
    var _k = (0, statsProvider_1.useCommunityStatsContext)(), githubStarCount = _k.githubStarCount, githubContributorsCount = _k.githubContributorsCount, githubForksCount = _k.githubForksCount, githubReposCount = _k.githubReposCount, loading = _k.loading, error = _k.error;
    var _l = (0, react_1.useState)({
        totalContributors: 0,
        totalRepositories: 0,
        totalStars: 0,
        totalForks: 0,
    }), dashboardStats = _l[0], setDashboardStats = _l[1];
    (0, react_1.useEffect)(function () {
        setDashboardStats({
            totalContributors: githubContributorsCount,
            totalRepositories: githubReposCount,
            totalStars: githubStarCount,
            totalForks: githubForksCount,
        });
    }, [
        githubContributorsCount,
        githubReposCount,
        githubStarCount,
        githubForksCount,
    ]);
    var StatCard = function (_a) {
        var icon = _a.icon, title = _a.title, value = _a.value, valueText = _a.valueText, description = _a.description;
        return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "dashboard-stat-card", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, viewport: { once: true }, whileHover: { scale: 1.02 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "dashboard-stat-icon", children: icon }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-stat-content", children: [(0, jsx_runtime_1.jsx)("h3", { className: "dashboard-stat-title", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "dashboard-stat-value", children: loading ? ((0, jsx_runtime_1.jsx)("div", { className: "loading-spinner" })) : ((0, jsx_runtime_1.jsx)(react_slot_counter_1.default, { value: valueText, autoAnimationStart: true, duration: 1 })) }), (0, jsx_runtime_1.jsx)("p", { className: "dashboard-stat-description", children: description })] })] }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "dashboard-layout", children: [(0, jsx_runtime_1.jsx)("button", { className: "dashboard-menu-btn ".concat(showDashboardMenu ? "open" : ""), onClick: function () { return setShowDashboardMenu(!showDashboardMenu); }, "aria-label": "Toggle dashboard menu", children: showDashboardMenu ? "✕" : "☰" }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-mobile-menu ".concat(showDashboardMenu ? "show" : ""), children: [showDashboardMenu && ((0, jsx_runtime_1.jsx)("div", { className: "dashboard-menu-overlay", onClick: function () { return setShowDashboardMenu(false); } })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "dashboard-menu-header", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Dashboard Menu" }), (0, jsx_runtime_1.jsx)("button", { className: "close-menu-btn", onClick: function () { return setShowDashboardMenu(false); }, "aria-label": "Close menu", children: "\u2715" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-menu-items", children: [(0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "home" ? "active" : ""), onClick: function () {
                                            handleTabChange("home");
                                            setShowDashboardMenu(false);
                                        }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Home, { size: 18 }) }), " Home"] }), (0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "discuss" ? "active" : ""), onClick: function () {
                                            handleTabChange("discuss");
                                            setShowDashboardMenu(false);
                                        }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { size: 18 }) }), " Discussions"] }), (0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "contributors" ? "active" : ""), onClick: function () {
                                            handleTabChange("contributors");
                                            setShowDashboardMenu(false);
                                        }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Users, { size: 18 }) }), " LeaderBoard"] }), (0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "giveaway" ? "active" : ""), onClick: function () {
                                            handleTabChange("giveaway");
                                            setShowDashboardMenu(false);
                                        }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Gift, { size: 18 }) }), " Giveaways"] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-sidebar", children: [(0, jsx_runtime_1.jsx)("div", { className: "sidebar-header", children: (0, jsx_runtime_1.jsx)("button", { className: "back-button", onClick: function () { return history.goBack(); }, "aria-label": "Go back", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowLeft, { size: 20 }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "sidebar-nav", children: [(0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Home, { size: 20 }), text: "Home", active: activeTab === "home", onClick: function () { return handleTabChange("home"); } }), (0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { size: 20 }), text: "Discussions", active: activeTab === "discuss", onClick: function () { return handleTabChange("discuss"); } }), (0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Users, { size: 20 }), text: "LeaderBoard\n", active: activeTab === "contributors", onClick: function () { return handleTabChange("contributors"); } }), (0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Gift, { size: 20 }), text: "Giveaways", active: activeTab === "giveaway", onClick: function () { return handleTabChange("giveaway"); } })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-main-content", children: [(0, jsx_runtime_1.jsx)(Head_1.default, { children: (0, jsx_runtime_1.jsx)("title", { children: "Dashboard | Recode Hive" }) }), activeTab === "home" && ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "dashboard-home-container", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [(0, jsx_runtime_1.jsx)("h1", { className: "dashboard-main-title", children: "Recode Hive Community Dashboard" }), (0, jsx_runtime_1.jsx)("p", { className: "dashboard-description", children: "Welcome to the Recode Hive community hub! Explore our stats, engage in discussions, and connect with fellow contributors." }), (0, jsx_runtime_1.jsxs)("section", { className: "dashboard-stats-section", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-title", children: "Community At a Glance" }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-cards-container", children: [(0, jsx_runtime_1.jsx)(StatCard, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Star, { size: 24 }), title: "Total Stars", value: dashboardStats.totalStars, valueText: (0, statsProvider_1.useCommunityStatsContext)().githubStarCountText || "937", description: "Stars across all our public repositories" }), (0, jsx_runtime_1.jsx)(StatCard, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Users, { size: 24 }), title: "Contributors", value: dashboardStats.totalContributors, valueText: (0, statsProvider_1.useCommunityStatsContext)().githubContributorsCountText || "444", description: "Amazing community members" }), (0, jsx_runtime_1.jsx)(StatCard, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.GitFork, { size: 24 }), title: "Forks", value: dashboardStats.totalForks, valueText: (0, statsProvider_1.useCommunityStatsContext)().githubForksCountText || "1.03K", description: "Community contributions" })] })] })] })), activeTab === "discuss" && ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "dashboard-discussions", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "discussions-header", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Community Discussions" }), (0, jsx_runtime_1.jsx)("p", { children: "Engage with the community, ask questions, and share your projects." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "discussions-controls", children: [(0, jsx_runtime_1.jsxs)("div", { className: "discussion-tabs", children: [(0, jsx_runtime_1.jsxs)("button", { onClick: function () { return handleDiscussionTabChange("discussions"); }, className: "tab-button ".concat(activeDiscussionTab === "discussions" ? "active" : ""), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { size: 18 }), " All Discussions"] }), (0, jsx_runtime_1.jsxs)("button", { onClick: function () { return handleDiscussionTabChange("trending"); }, className: "tab-button ".concat(activeDiscussionTab === "trending" ? "active" : ""), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.TrendingUp, { size: 18 }), " Trending"] }), (0, jsx_runtime_1.jsxs)("button", { onClick: function () { return handleDiscussionTabChange("unanswered"); }, className: "tab-button ".concat(activeDiscussionTab === "unanswered" ? "active" : ""), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.HelpCircle, { size: 18 }), " Unanswered"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "search-and-sort", children: [(0, jsx_runtime_1.jsxs)("div", { className: "search-bar", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Search, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search discussions...", value: searchQuery, onChange: handleSearchChange })] }), (0, jsx_runtime_1.jsxs)("select", { onChange: handleSortChange, value: sortBy, children: [(0, jsx_runtime_1.jsx)("option", { value: "most_popular", children: "Most Popular" }), (0, jsx_runtime_1.jsx)("option", { value: "latest", children: "Latest" }), (0, jsx_runtime_1.jsx)("option", { value: "oldest", children: "Oldest" })] }), (0, jsx_runtime_1.jsx)("button", { className: "new-discussion-btn", onClick: handleNewDiscussion, children: "New Discussion" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "discussions-main-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "category-sidebar", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Categories" }), (0, jsx_runtime_1.jsx)("ul", { children: categories.map(function (cat) { return ((0, jsx_runtime_1.jsxs)("li", { className: selectedCategory === cat ? "active" : "", onClick: function () { return handleCategoryChange(cat); }, children: [getCategoryIcon(cat), " ", getCategoryDisplayName(cat)] }, cat)); }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "discussion-list", children: [discussionsLoading && ((0, jsx_runtime_1.jsx)("div", { className: "loading-spinner-container", children: (0, jsx_runtime_1.jsx)("div", { className: "loading-spinner" }) })), discussionsError && ((0, jsx_runtime_1.jsx)("div", { className: "discussions-error-message", children: (0, jsx_runtime_1.jsx)("p", { children: discussionsError }) })), !discussionsLoading &&
                                                !discussionsError &&
                                                filteredDiscussions.length === 0 && ((0, jsx_runtime_1.jsx)("div", { className: "no-discussions-found", children: (0, jsx_runtime_1.jsx)("p", { children: "No discussions found matching your criteria." }) })), !discussionsLoading &&
                                                !discussionsError &&
                                                filteredDiscussions.map(function (discussion) { return ((0, jsx_runtime_1.jsx)(DiscussionCard_1.default, { discussion: discussion }, discussion.id)); })] })] })] })), activeTab === "contributors" && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "dashboard-contributors", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: (0, jsx_runtime_1.jsx)(leaderboard_1.default, {}) })), activeTab === "giveaway" && ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "giveaway-section", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Giveaways" }), (0, jsx_runtime_1.jsx)("p", { children: "Participate in our exciting giveaways for a chance to win awesome prizes!" }), (0, jsx_runtime_1.jsx)("div", { className: "giveaway-content", children: (0, jsx_runtime_1.jsx)("p", { children: "Stay tuned for our next giveaway. Follow our social media channels for updates!" }) })] }))] })] }));
};
var Dashboard = function () {
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { children: [(0, jsx_runtime_1.jsxs)(Head_1.default, { children: [(0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), (0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap", rel: "stylesheet" })] }), (0, jsx_runtime_1.jsx)(BrowserOnly_1.default, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading Dashboard..." }), children: function () { return ((0, jsx_runtime_1.jsx)(statsProvider_1.CommunityStatsProvider, { children: (0, jsx_runtime_1.jsx)(DashboardContent, {}) })); } })] }));
};
exports.default = Dashboard;
