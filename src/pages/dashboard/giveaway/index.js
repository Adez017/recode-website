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
var framer_motion_1 = require("framer-motion");
var react_slot_counter_1 = __importDefault(require("react-slot-counter"));
var NavbarIcon_1 = __importDefault(require("../../../components/navbar/NavbarIcon"));
var router_1 = require("@docusaurus/router");
var lucide_react_1 = require("lucide-react");
require("../dashboard.css");
// Giveaway-specific styles
var giveawayStyles = "\n.dashboard-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 40px;\n}\n\n.giveaway-stats-banner {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  padding: 0 1rem;\n}\n\n.stat-item {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--ifm-background-color);\n  border: 1px solid var(--ifm-color-emphasis-200);\n  border-radius: 8px;\n  padding: 0.5rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px var(--ifm-color-emphasis-200);\n}\n\n.stat-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px var(--ifm-color-emphasis-300);\n}\n\n.timer-icon {\n  background: linear-gradient(135deg, #ff6b6b, #ffa726) !important;\n}\n\n.entries-icon {\n  background: linear-gradient(135deg, #4ecdc4, #44a08d) !important;\n}\n\n.score-icon {\n  background: linear-gradient(135deg, #667eea, #764ba2) !important;\n}\n\n.winners-icon {\n  background: linear-gradient(135deg, #f093fb, #f5576c) !important;\n}\n\n.stat-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.stat-content {\n  min-width: 0;\n}\n\n.stat-content h3 {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: var(--ifm-color-emphasis-700);\n  margin: 0 0 0.15rem 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.stat-value {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--ifm-color-emphasis-900);\n  display: flex;\n  align-items: baseline;\n  gap: 0.15rem;\n  margin-bottom: 0.15rem;\n}\n\n.stat-value span {\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: var(--ifm-color-emphasis-600);\n}\n\n.stat-content p {\n  font-size: 0.55rem;\n  color: var(--ifm-color-emphasis-500);\n  margin: 0;\n}\n\n[data-theme='dark'] .stat-item {\n  background: var(--ifm-color-emphasis-100);\n  border-color: var(--ifm-color-emphasis-300);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n\n[data-theme='dark'] .stat-item:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n\n.giveaway-leaderboard-section {\n  margin: 3rem 0;\n  padding: 0 1rem;\n}\n\n.giveaway-leaderboard-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.giveaway-leaderboard-title {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: var(--ifm-color-emphasis-900);\n}\n\n.giveaway-leaderboard-subtitle {\n  font-size: 1.1rem;\n  color: var(--ifm-color-emphasis-700);\n  margin: 0;\n}\n\n.giveaway-loading {\n  text-align: center;\n  padding: 3rem;\n  color: var(--ifm-color-emphasis-700);\n}\n\n.giveaway-leaderboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.giveaway-leaderboard-card {\n  background: var(--ifm-background-color);\n  border: 1px solid var(--ifm-color-emphasis-300);\n  border-radius: 16px;\n  padding: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px var(--ifm-color-emphasis-200);\n}\n\n.giveaway-leaderboard-card:hover {\n  box-shadow: 0 8px 25px var(--ifm-color-emphasis-300);\n  border-color: var(--ifm-color-primary);\n  transform: translateY(-2px);\n}\n\n.giveaway-leaderboard-card.rank-1 {\n  background: linear-gradient(135deg, #ffd700, #ffed4e);\n  border-color: #ffd700;\n}\n\n.giveaway-leaderboard-card.rank-2 {\n  background: linear-gradient(135deg, #c0c0c0, #e8e8e8);\n  border-color: #c0c0c0;\n}\n\n.giveaway-leaderboard-card.rank-3 {\n  background: linear-gradient(135deg, #cd7f32, #daa520);\n  border-color: #cd7f32;\n}\n\n[data-theme='dark'] .giveaway-leaderboard-card {\n  background: var(--ifm-color-emphasis-100);\n  border-color: var(--ifm-color-emphasis-400);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n\n[data-theme='dark'] .giveaway-leaderboard-card:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);\n}\n\n[data-theme='dark'] .giveaway-leaderboard-card.rank-1 {\n  background: linear-gradient(135deg, #b8860b, #daa520);\n}\n\n[data-theme='dark'] .giveaway-leaderboard-card.rank-2 {\n  background: linear-gradient(135deg, #708090, #a9a9a9);\n}\n\n[data-theme='dark'] .giveaway-leaderboard-card.rank-3 {\n  background: linear-gradient(135deg, #8b4513, #cd853f);\n}\n\n.giveaway-rank-badge {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.9rem;\n  background: var(--ifm-color-primary);\n  color: var(--ifm-color-primary-contrast-background);\n}\n\n.giveaway-avatar {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 1rem;\n}\n\n.giveaway-avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid var(--ifm-color-primary);\n}\n\n.giveaway-badge {\n  position: absolute;\n  bottom: -5px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--ifm-color-primary);\n  color: var(--ifm-color-primary-contrast-background);\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.giveaway-info {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.giveaway-name {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: var(--ifm-color-emphasis-900);\n}\n\n.giveaway-leaderboard-card.rank-1 .giveaway-name,\n.giveaway-leaderboard-card.rank-2 .giveaway-name,\n.giveaway-leaderboard-card.rank-3 .giveaway-name {\n  color: var(--ifm-color-emphasis-1000);\n}\n\n.giveaway-stats {\n  display: flex;\n  justify-content: space-around;\n  gap: 1rem;\n}\n\n.giveaway-stat {\n  text-align: center;\n}\n\n.giveaway-stat .stat-value {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ifm-color-primary);\n}\n\n.giveaway-leaderboard-card.rank-1 .stat-value,\n.giveaway-leaderboard-card.rank-2 .stat-value,\n.giveaway-leaderboard-card.rank-3 .stat-value {\n  color: var(--ifm-color-emphasis-1000);\n}\n\n.giveaway-stat .stat-label {\n  font-size: 0.8rem;\n  color: var(--ifm-color-emphasis-600);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.giveaway-leaderboard-card.rank-1 .stat-label,\n.giveaway-leaderboard-card.rank-2 .stat-label,\n.giveaway-leaderboard-card.rank-3 .stat-label {\n  color: var(--ifm-color-emphasis-800);\n}\n\n.giveaway-profile-btn {\n  display: block;\n  width: 100%;\n  padding: 0.75rem;\n  background: var(--ifm-color-primary);\n  color: var(--ifm-color-primary-contrast-background);\n  text-decoration: none;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n\n.giveaway-profile-btn:hover {\n  background: var(--ifm-color-primary-dark);\n  color: var(--ifm-color-primary-contrast-background);\n  text-decoration: none;\n  transform: translateY(-2px);\n}\n\n.giveaway-leaderboard-card.rank-1 .giveaway-profile-btn,\n.giveaway-leaderboard-card.rank-2 .giveaway-profile-btn,\n.giveaway-leaderboard-card.rank-3 .giveaway-profile-btn {\n  background: var(--ifm-color-emphasis-800);\n  color: var(--ifm-color-emphasis-0);\n}\n\n.giveaway-leaderboard-card.rank-1 .giveaway-profile-btn:hover,\n.giveaway-leaderboard-card.rank-2 .giveaway-profile-btn:hover,\n.giveaway-leaderboard-card.rank-3 .giveaway-profile-btn:hover {\n  background: var(--ifm-color-emphasis-900);\n  color: var(--ifm-color-emphasis-0);\n}\n\n@media (max-width: 768px) {\n  .giveaway-stats-banner {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  \n  .stat-item {\n    padding: 0.4rem;\n  }\n  \n  .stat-icon {\n    width: 24px;\n    height: 24px;\n    font-size: 0.8rem;\n  }\n  \n  .stat-value {\n    font-size: 1rem;\n  }\n  \n  .stat-content h3 {\n    font-size: 0.6rem;\n  }\n  \n  .stat-content p {\n    font-size: 0.5rem;\n  }\n  \n  .giveaway-leaderboard-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  \n  .giveaway-leaderboard-title {\n    font-size: 2rem;\n  }\n}\n\n/* Dashboard styles for consistency */\n.dashboard-stats-section {\n  margin-bottom: 60px;\n}\n\n.section-title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 30px;\n  text-align: center;\n  color: var(--ifm-color-content);\n}\n\n.dashboard-stat-card {\n  background: var(--ifm-background-surface-color);\n  border: 1px solid var(--ifm-color-emphasis-200);\n  border-radius: 16px;\n  padding: 32px 24px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.dashboard-stat-value {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 10px;\n  color: var(--ifm-color-primary);\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 996px) {\n  .dashboard-main-content {\n    padding: 80px 20px 40px;\n  }\n}\n";
// Inject styles
if (typeof document !== 'undefined') {
    var existingStyle = document.getElementById('giveaway-styles');
    if (!existingStyle) {
        var styleSheet = document.createElement('style');
        styleSheet.id = 'giveaway-styles';
        styleSheet.textContent = giveawayStyles;
        document.head.appendChild(styleSheet);
    }
}
var GiveawayPage = function () {
    var _a, _b, _c;
    var history = (0, router_1.useHistory)();
    var _d = (0, react_1.useState)(false), showDashboardMenu = _d[0], setShowDashboardMenu = _d[1];
    var _e = (0, react_1.useState)([]), leaderboard = _e[0], setLeaderboard = _e[1];
    var _f = (0, react_1.useState)(true), loading = _f[0], setLoading = _f[1];
    var _g = (0, react_1.useState)("giveaway"), activeTab = _g[0], setActiveTab = _g[1];
    // Close dashboard menu when clicking outside
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            var target = event.target;
            // Close menu when clicking on overlay or anywhere outside the menu
            if (showDashboardMenu &&
                (!target.closest('.dashboard-mobile-menu > div:last-child') &&
                    !target.closest('.dashboard-menu-btn') ||
                    target.closest('.dashboard-menu-overlay'))) {
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
    // Ensure active tab is set correctly when page loads
    (0, react_1.useEffect)(function () {
        // We're on the giveaway page, so the active tab should be "giveaway"
        setActiveTab("giveaway");
    }, []);
    (0, react_1.useEffect)(function () {
        // Simulate fetching leaderboard data
        var fetchLeaderboard = function () { return __awaiter(void 0, void 0, void 0, function () {
            var mockData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        // Simulate API delay
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        // Simulate API delay
                        _a.sent();
                        mockData = [
                            {
                                rank: 1,
                                name: "sanjay-kv",
                                avatar: "https://avatars.githubusercontent.com/u/30715153?v=4",
                                points: 2500,
                                contributions: 45,
                                github_url: "https://github.com/sanjay-kv",
                                badge: "🏆 Champion"
                            },
                            {
                                rank: 2,
                                name: "vansh-codes",
                                avatar: "https://avatars.githubusercontent.com/u/114163734?v=4",
                                points: 2100,
                                contributions: 38,
                                github_url: "https://github.com/vansh-codes",
                                badge: "🥈 Runner-up"
                            },
                            {
                                rank: 3,
                                name: "Hemu21",
                                avatar: "https://avatars.githubusercontent.com/u/106808387?v=4",
                                points: 1850,
                                contributions: 32,
                                github_url: "https://github.com/Hemu21",
                                badge: "🥉 Third Place"
                            },
                            {
                                rank: 4,
                                name: "contributor4",
                                avatar: "https://avatars.githubusercontent.com/u/1?v=4",
                                points: 1600,
                                contributions: 28,
                                github_url: "https://github.com/contributor4"
                            },
                            {
                                rank: 5,
                                name: "contributor5",
                                avatar: "https://avatars.githubusercontent.com/u/2?v=4",
                                points: 1400,
                                contributions: 24,
                                github_url: "https://github.com/contributor5"
                            }
                        ];
                        setLeaderboard(mockData);
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchLeaderboard();
    }, []);
    var handleTabChange = function (tab) {
        setActiveTab(tab);
        setShowDashboardMenu(false);
        // When navigating from giveaway page to other tabs, we need to 
        // ensure we're using consistent paths with the dashboard page
        if (tab === "discuss") {
            // Navigate to main dashboard page with discuss hash
            history.push("/dashboard#discuss");
        }
        else if (tab === "contributors") {
            // Navigate to main dashboard page with leaderboard hash
            history.push("/dashboard#leaderboard");
        }
        else if (tab === "home") {
            // Navigate to main dashboard page
            history.push("/dashboard");
        }
        else if (tab === "giveaway") {
            // Already on giveaway page, just scroll to top
            window.scrollTo(0, 0);
        }
    };
    var StatCard = function (_a) {
        var icon = _a.icon, title = _a.title, value = _a.value, valueText = _a.valueText, description = _a.description;
        return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "dashboard-stat-card", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, viewport: { once: true }, whileHover: { scale: 1.02 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "dashboard-stat-icon", children: icon }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-stat-content", children: [(0, jsx_runtime_1.jsx)("h3", { className: "dashboard-stat-title", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "dashboard-stat-value", children: (0, jsx_runtime_1.jsx)(react_slot_counter_1.default, { value: valueText, autoAnimationStart: true, duration: 1 }) }), (0, jsx_runtime_1.jsx)("p", { className: "dashboard-stat-description", children: description })] })] }));
    };
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { title: "Giveaway", description: "RecodeHive Giveaway", noFooter: true, children: [(0, jsx_runtime_1.jsx)(Head_1.default, { children: (0, jsx_runtime_1.jsx)("title", { children: "\uD83C\uDF81 RecodeHive Giveaway" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-layout", children: [(0, jsx_runtime_1.jsx)("button", { className: "dashboard-menu-btn ".concat(showDashboardMenu ? "open" : ""), onClick: function () { return setShowDashboardMenu(!showDashboardMenu); }, "aria-label": "Toggle dashboard menu", children: showDashboardMenu ? (0, jsx_runtime_1.jsx)("span", { "aria-hidden": "true", children: "\u2715" }) : (0, jsx_runtime_1.jsx)("span", { "aria-hidden": "true", children: "\u2630" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-mobile-menu ".concat(showDashboardMenu ? "show" : ""), children: [(0, jsx_runtime_1.jsx)("div", { className: "dashboard-menu-overlay", onClick: function () { return setShowDashboardMenu(false); } }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "dashboard-menu-header", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Dashboard Menu" }), (0, jsx_runtime_1.jsx)("button", { className: "close-menu-btn", onClick: function () { return setShowDashboardMenu(false); }, "aria-label": "Close menu", children: "\u2715" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-menu-items", children: [(0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "home" ? "active" : ""), onClick: function () {
                                                    handleTabChange("home");
                                                    setShowDashboardMenu(false);
                                                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Home, { size: 18 }) }), " Home"] }), (0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "discuss" ? "active" : ""), onClick: function () {
                                                    handleTabChange("discuss");
                                                    setShowDashboardMenu(false);
                                                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { size: 18 }) }), " Discussions"] }), (0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "contributors" ? "active" : ""), onClick: function () {
                                                    handleTabChange("contributors");
                                                    setShowDashboardMenu(false);
                                                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Trophy, { size: 18 }) }), " LeaderBoard"] }), (0, jsx_runtime_1.jsxs)("div", { className: "menu-item ".concat(activeTab === "giveaway" ? "active" : ""), onClick: function () {
                                                    handleTabChange("giveaway");
                                                    setShowDashboardMenu(false);
                                                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "menu-icon", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Gift, { size: 18 }) }), " Giveaways"] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-sidebar", children: [(0, jsx_runtime_1.jsx)("div", { className: "sidebar-header", children: (0, jsx_runtime_1.jsx)("button", { className: "back-button", onClick: function () {
                                        // If we came from the dashboard, go back, otherwise go to dashboard
                                        if (history.length > 2) {
                                            history.goBack();
                                        }
                                        else {
                                            history.push('/dashboard');
                                        }
                                    }, "aria-label": "Go back to dashboard", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowLeft, { size: 20 }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "sidebar-nav", children: [(0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Home, { size: 20 }), text: "Home", active: activeTab === "home", onClick: function () { return handleTabChange("home"); } }), (0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { size: 20 }), text: "Discussions", active: activeTab === "discuss", onClick: function () { return handleTabChange("discuss"); } }), (0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Trophy, { size: 20 }), text: "LeaderBoard", active: activeTab === "contributors", onClick: function () { return handleTabChange("contributors"); } }), (0, jsx_runtime_1.jsx)(NavbarIcon_1.default, { icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Gift, { size: 20 }), text: "Giveaways", active: activeTab === "giveaway", onClick: function () { return handleTabChange("giveaway"); } })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-main-content", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.section, { className: "dashboard-hero", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: (0, jsx_runtime_1.jsxs)("div", { className: "hero-content", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "dashboard-title", children: ["\uD83C\uDF81 ", (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "Giveaway" })] }), (0, jsx_runtime_1.jsx)("p", { className: "dashboard-subtitle", children: "Participate in exclusive giveaways and win exciting prizes!" })] }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.section, { className: "dashboard-stats-section", initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: (0, jsx_runtime_1.jsxs)("div", { className: "dashboard-stats-grid", children: [(0, jsx_runtime_1.jsx)(StatCard, { icon: "\u23F3", title: "Next Giveaway", value: 5, valueText: "5 Days", description: "Time remaining" }), (0, jsx_runtime_1.jsx)(StatCard, { icon: "\uD83C\uDFAB", title: "Entries", value: leaderboard.length, valueText: leaderboard.length.toString(), description: "Total participants" }), (0, jsx_runtime_1.jsx)(StatCard, { icon: "\uD83D\uDCC8", title: "Top Score", value: ((_a = leaderboard[0]) === null || _a === void 0 ? void 0 : _a.points) || 0, valueText: ((_c = (_b = leaderboard[0]) === null || _b === void 0 ? void 0 : _b.points) === null || _c === void 0 ? void 0 : _c.toString()) || "0", description: "Leading participant" }), (0, jsx_runtime_1.jsx)(StatCard, { icon: "\uD83C\uDFC5", title: "Total Winners", value: 3, valueText: "3", description: "Winners per giveaway" })] }) }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.section, { className: "giveaway-leaderboard-section", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "giveaway-leaderboard-header", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "giveaway-leaderboard-title", children: ["\uD83C\uDF81 Giveaway ", (0, jsx_runtime_1.jsx)("span", { className: "highlight", children: "Leaderboard" })] }), (0, jsx_runtime_1.jsx)("p", { className: "giveaway-leaderboard-subtitle", children: "Top contributors competing for amazing prizes!" })] }), loading ? ((0, jsx_runtime_1.jsxs)("div", { className: "giveaway-loading", children: [(0, jsx_runtime_1.jsx)("div", { className: "loading-spinner", children: "Loading..." }), (0, jsx_runtime_1.jsx)("p", { children: "Fetching leaderboard data..." })] })) : ((0, jsx_runtime_1.jsx)("div", { className: "giveaway-leaderboard-grid", children: leaderboard.map(function (entry, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "giveaway-leaderboard-card rank-".concat(entry.rank <= 3 ? entry.rank : 'other'), initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { scale: 1.02, y: -5 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "giveaway-rank-badge", children: entry.rank <= 3 ? (entry.rank === 1 ? (0, jsx_runtime_1.jsx)(lucide_react_1.Crown, { size: 20 }) :
                                                        entry.rank === 2 ? (0, jsx_runtime_1.jsx)(lucide_react_1.Award, { size: 20 }) :
                                                            (0, jsx_runtime_1.jsx)(lucide_react_1.Star, { size: 20 })) : ("#".concat(entry.rank)) }), (0, jsx_runtime_1.jsxs)("div", { className: "giveaway-avatar", children: [(0, jsx_runtime_1.jsx)("img", { src: entry.avatar, alt: entry.name }), entry.badge && ((0, jsx_runtime_1.jsx)("div", { className: "giveaway-badge", children: entry.badge }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "giveaway-info", children: [(0, jsx_runtime_1.jsx)("h3", { className: "giveaway-name", children: entry.name }), (0, jsx_runtime_1.jsxs)("div", { className: "giveaway-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "giveaway-stat", children: [(0, jsx_runtime_1.jsx)("span", { className: "stat-value", children: entry.points }), (0, jsx_runtime_1.jsx)("span", { className: "stat-label", children: "Points" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "giveaway-stat", children: [(0, jsx_runtime_1.jsx)("span", { className: "stat-value", children: entry.contributions }), (0, jsx_runtime_1.jsx)("span", { className: "stat-label", children: "Contributions" })] })] })] }), (0, jsx_runtime_1.jsx)("a", { href: entry.github_url, target: "_blank", rel: "noopener noreferrer", className: "giveaway-profile-btn", children: "View Profile" })] }, entry.rank)); }) }))] })] })] })] }));
};
exports.default = GiveawayPage;
