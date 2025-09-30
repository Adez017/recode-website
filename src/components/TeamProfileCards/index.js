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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveTeamRow = ActiveTeamRow;
exports.HonoraryAlumniTeamRow = HonoraryAlumniTeamRow;
exports.StudentFellowsTeamRow = StudentFellowsTeamRow;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Translate_1 = __importDefault(require("@docusaurus/Translate"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var Heading_1 = __importDefault(require("@theme/Heading"));
require("./teamcards.css");
function WebsiteLink(_a) {
    var to = _a.to, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(Link_1.default, { to: to, children: children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsx)(Translate_1.default, { id: "team.profile.websiteLinkLabel", children: "website" })) }));
}
function TeamProfileCard(_a) {
    var className = _a.className, name = _a.name, children = _a.children, githubUrl = _a.githubUrl, twitterUrl = _a.twitterUrl, linkedInUrl = _a.linkedInUrl;
    return ((0, jsx_runtime_1.jsx)("div", { className: "team-profile-card ".concat(className), children: (0, jsx_runtime_1.jsxs)("div", { className: "card card--full-height", children: [(0, jsx_runtime_1.jsx)("div", { className: "card__header", children: (0, jsx_runtime_1.jsxs)("div", { className: "avatar avatar--vertical", children: [(0, jsx_runtime_1.jsx)("img", { className: "avatar__photo avatar__photo--xl", src: "".concat(githubUrl, ".png"), alt: "".concat(name, "'s avatar") }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { className: "avatar__intro", children: (0, jsx_runtime_1.jsx)(Heading_1.default, { as: "h3", className: "avatar__name", children: name }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "card__body", children: children }), (0, jsx_runtime_1.jsx)("div", { className: "card__footer", children: (0, jsx_runtime_1.jsxs)("div", { className: "button-group button-group--block", children: [githubUrl && ((0, jsx_runtime_1.jsx)(Link_1.default, { className: "button button--secondary", href: githubUrl, children: "GitHub" })), linkedInUrl && ((0, jsx_runtime_1.jsx)(Link_1.default, { className: "button button--secondary", href: linkedInUrl, children: "LinkedIn" })), twitterUrl && ((0, jsx_runtime_1.jsx)(Link_1.default, { className: "button button--secondary", href: twitterUrl, children: "Twitter" }))] }) })] }) }));
}
function TeamProfileCardCol(props) {
    return ((0, jsx_runtime_1.jsx)(TeamProfileCard, __assign({}, props, { className: "col col--6 margin-bottom--lg" })));
}
function ActiveTeamRow() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "row", children: (0, jsx_runtime_1.jsx)(TeamProfileCardCol, { name: "Ajay Dhangar", githubUrl: "https://github.com/ajay-dhangar", linkedInUrl: "https://www.linkedin.com/in/ajay-dhangar", twitterUrl: "https://twitter.com/CodesWithAjay", children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "team.profile.Sebastien Lorber.body", values: {
                    website: (0, jsx_runtime_1.jsx)(WebsiteLink, { to: "https://ajay-dhangar.github.io/" }),
                    devto: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "https://dev.to/ajaydhangar49", children: "Dev.to" }),
                    optimumAi: (0, jsx_runtime_1.jsx)(Link_1.default, { to: "https://www.optimumai.in/community", children: "OptimumAI" }),
                }, children: "Founder, Lead Developer and Maintainer of CodeHarborHub. We are passionate about contributing to open source and regularly write articles on our {website} and {devto}. Currently working at {optimumAi}." }) }) }));
}
function HonoraryAlumniTeamRow() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "row", children: (0, jsx_runtime_1.jsx)(TeamProfileCardCol, { name: "Shivay", githubUrl: "https://github.com/shivay-coding", children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "team.profile.Shivay.body", children: "A passionate developer who loves to contribute to open source and write articles on his blog." }) }) }));
}
function StudentFellowsTeamRow() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "row", children: (0, jsx_runtime_1.jsx)(TeamProfileCardCol, { name: "Narendra Dhangar", githubUrl: "https://github.com/Narendra-Dhangar", children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "team.profile.Anshul Goyal.body", values: {
                    websiteLink: ((0, jsx_runtime_1.jsx)(Link_1.default, { href: "/", children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "team.profile.Narendra Dhangar.body.websiteLink.label", children: "website" }) })),
                }, children: "B.Tech student, open source enthusiast, and tech blogger. He loves to contribute to open source and write articles on his {websiteLink}." }) }) }));
}
