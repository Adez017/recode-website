"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PRListModal;
var jsx_runtime_1 = require("react/jsx-runtime");
// src/components/dashboard/LeaderBoard/PRListModal.tsx
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var theme_common_1 = require("@docusaurus/theme-common");
var statsProvider_1 = require("../../../lib/statsProvider");
function PRListModal(_a) {
    var contributor = _a.contributor, isOpen = _a.isOpen, onClose = _a.onClose;
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isDark = colorMode === "dark";
    // Get filtered PRs from context
    var _b = (0, statsProvider_1.useCommunityStatsContext)(), getFilteredPRsForContributor = _b.getFilteredPRsForContributor, currentTimeFilter = _b.currentTimeFilter;
    if (!contributor)
        return null;
    // Get filtered PRs instead of using contributor.prDetails
    var filteredPRs = getFilteredPRsForContributor(contributor.username);
    var formatDate = function (dateString) {
        var date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    var handleBackdropClick = function (e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    var handleKeyDown = function (e) {
        if (e.key === 'Escape') {
            onClose();
        }
    };
    // Helper function to get filter display text
    var getFilterDisplayText = function (filter) {
        switch (filter) {
            case 'week': return 'This Week';
            case 'month': return 'This Month';
            case 'year': return 'This Year';
            case 'all': return 'All Time';
            default: return 'All Time';
        }
    };
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: isOpen && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "pr-modal-backdrop ".concat(isDark ? "dark" : "light"), initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: handleBackdropClick, onKeyDown: handleKeyDown, tabIndex: 0, role: "dialog", "aria-modal": "true", "aria-labelledby": "pr-modal-title", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "pr-modal-container ".concat(isDark ? "dark" : "light"), initial: { opacity: 0, scale: 0.9, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.9, y: 20 }, transition: { type: "spring", damping: 25, stiffness: 300 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "pr-modal-header ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "pr-modal-user-info", children: [(0, jsx_runtime_1.jsx)("img", { src: contributor.avatar, alt: contributor.username, className: "pr-modal-avatar" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h2", { id: "pr-modal-title", className: "pr-modal-title ".concat(isDark ? "dark" : "light"), children: [contributor.username, "'s Pull Requests"] }), (0, jsx_runtime_1.jsxs)("p", { className: "pr-modal-subtitle ".concat(isDark ? "dark" : "light"), children: [filteredPRs.length, " merged PR", filteredPRs.length !== 1 ? 's' : '', " \u2022 ", filteredPRs.length * 10, " points", currentTimeFilter !== 'all' && ((0, jsx_runtime_1.jsxs)("span", { style: { marginLeft: '8px', opacity: 0.7 }, children: ["(", getFilterDisplayText(currentTimeFilter), ")"] }))] })] })] }), (0, jsx_runtime_1.jsx)("button", { className: "pr-modal-close ".concat(isDark ? "dark" : "light"), onClick: onClose, "aria-label": "Close modal", children: (0, jsx_runtime_1.jsx)(fa_1.FaTimes, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: "pr-modal-body ".concat(isDark ? "dark" : "light"), children: filteredPRs && filteredPRs.length > 0 ? ((0, jsx_runtime_1.jsx)("div", { className: "pr-list", children: filteredPRs.map(function (pr, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "pr-item ".concat(isDark ? "dark" : "light"), initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.05 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "pr-item-header", children: [(0, jsx_runtime_1.jsx)("h3", { className: "pr-item-title ".concat(isDark ? "dark" : "light"), children: pr.title }), (0, jsx_runtime_1.jsx)("div", { className: "pr-item-actions", children: (0, jsx_runtime_1.jsx)("a", { href: pr.url, target: "_blank", rel: "noopener noreferrer", className: "pr-item-link ".concat(isDark ? "dark" : "light"), "aria-label": "Open PR #".concat(pr.number, " in GitHub"), children: (0, jsx_runtime_1.jsx)(fa_1.FaExternalLinkAlt, {}) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "pr-item-meta", children: [(0, jsx_runtime_1.jsxs)("span", { className: "pr-item-repo ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsx)(fa_1.FaGithub, {}), pr.repoName] }), (0, jsx_runtime_1.jsxs)("span", { className: "pr-item-number ".concat(isDark ? "dark" : "light"), children: ["#", pr.number] }), (0, jsx_runtime_1.jsxs)("span", { className: "pr-item-date ".concat(isDark ? "dark" : "light"), children: ["Merged on ", formatDate(pr.mergedAt)] })] })] }, "".concat(pr.repoName, "-").concat(pr.number))); }) })) : ((0, jsx_runtime_1.jsxs)("div", { className: "pr-empty-state ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsx)(fa_1.FaGithub, { className: "pr-empty-icon" }), (0, jsx_runtime_1.jsx)("p", { children: currentTimeFilter === 'all'
                                        ? 'No pull request details available'
                                        : "No PRs found for ".concat(getFilterDisplayText(currentTimeFilter).toLowerCase()) }), (0, jsx_runtime_1.jsx)("p", { className: "pr-empty-subtitle", children: currentTimeFilter === 'all'
                                        ? 'PR details might not be loaded yet or this contributor has no merged PRs.'
                                        : "Try selecting a different time period or check \"All Time\" to see all PRs." })] })) }), (0, jsx_runtime_1.jsx)("div", { className: "pr-modal-footer ".concat(isDark ? "dark" : "light"), children: (0, jsx_runtime_1.jsxs)("a", { href: contributor.profile, target: "_blank", rel: "noopener noreferrer", className: "pr-modal-profile-link ".concat(isDark ? "dark" : "light"), children: [(0, jsx_runtime_1.jsx)(fa_1.FaGithub, {}), "View GitHub Profile"] }) })] }) })) }));
}
