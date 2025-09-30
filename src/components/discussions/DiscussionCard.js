"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DiscussionCard;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function DiscussionCard(_a) {
    var discussion = _a.discussion, index = _a.index;
    var formatDate = function (dateString) {
        var date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };
    var truncateText = function (text, maxLength) {
        if (!text || text.length <= maxLength)
            return text;
        return text.substring(0, maxLength).trim() + "...";
    };
    var formatCount = function (count) {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + "k";
        }
        return count.toString();
    };
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "discussion-card-new", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "discussion-card-header", children: [(0, jsx_runtime_1.jsxs)("div", { className: "discussion-category-badge", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Tag, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: discussion.category.name })] }), (0, jsx_runtime_1.jsxs)("div", { className: "discussion-date-badge", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: formatDate(discussion.created_at) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "discussion-main-content", children: [(0, jsx_runtime_1.jsx)("h3", { className: "discussion-title-new", children: (0, jsx_runtime_1.jsx)("a", { href: discussion.html_url, target: "_blank", rel: "noopener noreferrer", children: discussion.title }) }), discussion.body && ((0, jsx_runtime_1.jsx)("p", { className: "discussion-excerpt", children: truncateText(discussion.body.replace(/[#*`\[\]]/g, "").replace(/\n/g, " "), 150) })), discussion.labels.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "discussion-keywords", children: discussion.labels.slice(0, 4).map(function (label, idx) { return ((0, jsx_runtime_1.jsx)("span", { className: "keyword-tag", children: label.name }, idx)); }) }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "discussion-card-footer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "discussion-author-info", children: [discussion.author.avatar_url ? ((0, jsx_runtime_1.jsx)("img", { src: discussion.author.avatar_url, alt: discussion.author.login, className: "author-avatar-small", onError: function (e) {
                                    var target = e.currentTarget;
                                    target.style.display = 'none';
                                    var fallback = target.nextElementSibling;
                                    if (fallback)
                                        fallback.style.display = 'flex';
                                } })) : null, (0, jsx_runtime_1.jsx)("div", { className: "author-avatar-fallback", style: { display: discussion.author.avatar_url ? 'none' : 'flex' }, children: discussion.author.login.charAt(0).toUpperCase() }), (0, jsx_runtime_1.jsx)("span", { className: "author-name-new", children: discussion.author.login })] }), (0, jsx_runtime_1.jsxs)("div", { className: "discussion-engagement", children: [(0, jsx_runtime_1.jsxs)("div", { className: "engagement-item", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { size: 16 }), (0, jsx_runtime_1.jsx)("span", { children: formatCount(discussion.comments) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "engagement-item", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ThumbsUp, { size: 16 }), (0, jsx_runtime_1.jsx)("span", { children: formatCount(discussion.reactions.total_count) })] })] })] })] }));
}
