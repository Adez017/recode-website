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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var Translate_1 = __importDefault(require("@docusaurus/Translate"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var FavoriteIcon_1 = __importDefault(require("../../../../components/svgIcons/FavoriteIcon"));
var ShowcaseTooltip_1 = __importDefault(require("../ShowcaseTooltip"));
var users_1 = require("@site/src/data/users");
var jsUtils_1 = require("@site/src/utils/jsUtils");
var IdealImage_1 = __importDefault(require("@theme/IdealImage"));
var TagComp = react_1.default.forwardRef(function (_a, ref) {
    var label = _a.label, color = _a.color, description = _a.description;
    return ((0, jsx_runtime_1.jsxs)("li", { ref: ref, className: styles_module_css_1.default.tag, title: description, children: [(0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.textLabel, children: label.toLowerCase() }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_css_1.default.colorLabel, style: { backgroundColor: color } })] }));
});
function ShowcaseCardTag(_a) {
    var tags = _a.tags;
    var tagObjects = tags.map(function (tag) { return (__assign({ tag: tag }, users_1.Tags[tag])); });
    // Keep same order for all tags
    var tagObjectsSorted = (0, jsUtils_1.sortBy)(tagObjects, function (tagObject) {
        return users_1.TagList.indexOf(tagObject.tag);
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: tagObjectsSorted.map(function (tagObject, index) {
            var id = "showcase_card_tag_".concat(tagObject.tag);
            return ((0, jsx_runtime_1.jsx)(ShowcaseTooltip_1.default, { text: tagObject.description, anchorEl: "#__docusaurus", id: id, children: (0, jsx_runtime_1.jsx)(TagComp, __assign({}, tagObject), index) }, index));
        }) }));
}
function ShowcaseCard(_a) {
    var user = _a.user;
    var handleCardClick = function () {
        window.open(user.website, '_blank');
    };
    var handleSourceClick = function (e) {
        e.stopPropagation();
        // The link will handle the navigation
    };
    return ((0, jsx_runtime_1.jsxs)("li", { className: (0, clsx_1.default)('card shadow--md', styles_module_css_1.default.card), children: [(0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.cardLink, onClick: handleCardClick }), (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('card__image', styles_module_css_1.default.showcaseCardImage), children: (0, jsx_runtime_1.jsx)(IdealImage_1.default, { img: user.preview, alt: user.title }) }), (0, jsx_runtime_1.jsxs)("div", { className: "card__body", children: [(0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.showcaseCardHeader, children: [(0, jsx_runtime_1.jsx)("h4", { className: styles_module_css_1.default.showcaseCardTitle, children: (0, jsx_runtime_1.jsx)(Link_1.default, { href: user.website, className: styles_module_css_1.default.showcaseCardLink, target: "_blank", children: user.title }) }), user.tags.includes('favorite') && ((0, jsx_runtime_1.jsx)(FavoriteIcon_1.default, { svgClass: styles_module_css_1.default.svgIconFavorite, size: "small" })), user.source && ((0, jsx_runtime_1.jsx)(Link_1.default, { href: user.source, className: (0, clsx_1.default)('button button--secondary button--sm', styles_module_css_1.default.showcaseCardSrcBtn), target: "_blank", rel: "noopener noreferrer", onClick: handleSourceClick, children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "showcase.card.sourceLink", children: "source" }) }))] }), (0, jsx_runtime_1.jsx)("p", { className: styles_module_css_1.default.showcaseCardBody, children: user.description })] }), (0, jsx_runtime_1.jsx)("ul", { className: (0, clsx_1.default)('card__footer', styles_module_css_1.default.cardFooter), children: (0, jsx_runtime_1.jsx)(ShowcaseCardTag, { tags: user.tags }) })] }, user.title));
}
exports.default = react_1.default.memo(ShowcaseCard);
