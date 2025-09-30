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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareUserState = prepareUserState;
exports.default = Showcase;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var clsx_1 = __importDefault(require("clsx"));
var Head_1 = __importDefault(require("@docusaurus/Head"));
var ShowcaseTagSelect_1 = __importStar(require("./_components/ShowcaseTagSelect"));
var ShowcaseFilterToggle_1 = __importStar(require("./_components/ShowcaseFilterToggle"));
var ShowcaseCard_1 = __importDefault(require("./_components/ShowcaseCard"));
var ShowcaseTooltip_1 = __importDefault(require("./_components/ShowcaseTooltip"));
var ExecutionEnvironment_1 = __importDefault(require("@docusaurus/ExecutionEnvironment"));
var Translate_1 = __importStar(require("@docusaurus/Translate"));
var router_1 = require("@docusaurus/router");
var theme_common_1 = require("@docusaurus/theme-common");
var framer_motion_1 = require("framer-motion");
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var users_1 = require("@site/src/data/users");
var FavoriteIcon_1 = __importDefault(require("@site/src/components/svgIcons/FavoriteIcon"));
var theme_common_2 = require("@docusaurus/theme-common");
var TITLE = 'Recode Hive: Framing all the opensource projects built by our community members';
var DESCRIPTION = 'All the opensource projects listed below are available for you to explore, learn, and contribute.';
var EDIT_URL = 'https://github.com/recodehive';
function restoreUserState(userState) {
    var _a;
    var _b = userState !== null && userState !== void 0 ? userState : {
        scrollTopPosition: 0,
        focusedElementId: undefined,
    }, scrollTopPosition = _b.scrollTopPosition, focusedElementId = _b.focusedElementId;
    (_a = document.getElementById(focusedElementId)) === null || _a === void 0 ? void 0 : _a.focus();
    window.scrollTo({ top: scrollTopPosition });
}
function prepareUserState() {
    var _a;
    if (ExecutionEnvironment_1.default.canUseDOM) {
        return {
            scrollTopPosition: window.scrollY,
            focusedElementId: (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.id,
        };
    }
    return undefined;
}
var SearchNameQueryKey = 'name';
function readSearchName(search) {
    return new URLSearchParams(search).get(SearchNameQueryKey);
}
function filterUsers(users, selectedTags, operator, searchName) {
    if (searchName) {
        // eslint-disable-next-line no-param-reassign
        users = users.filter(function (user) {
            return user.title.toLowerCase().includes(searchName.toLowerCase());
        });
    }
    if (selectedTags.length === 0) {
        return users;
    }
    return users.filter(function (user) {
        if (user.tags.length === 0) {
            return false;
        }
        if (operator === 'AND') {
            return selectedTags.every(function (tag) { return user.tags.includes(tag); });
        }
        return selectedTags.some(function (tag) { return user.tags.includes(tag); });
    });
}
function useFilteredUsers() {
    var location = (0, router_1.useLocation)();
    var _a = (0, react_1.useState)('OR'), operator = _a[0], setOperator = _a[1];
    // On SSR / first mount (hydration) no tag is selected
    var _b = (0, react_1.useState)([]), selectedTags = _b[0], setSelectedTags = _b[1];
    var _c = (0, react_1.useState)(null), searchName = _c[0], setSearchName = _c[1];
    // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
    // hydration mismatch)
    (0, react_1.useEffect)(function () {
        setSelectedTags((0, ShowcaseTagSelect_1.readSearchTags)(location.search));
        setOperator((0, ShowcaseFilterToggle_1.readOperator)(location.search));
        setSearchName(readSearchName(location.search));
        restoreUserState(location.state);
    }, [location]);
    return (0, react_1.useMemo)(function () { return filterUsers(users_1.sortedUsers, selectedTags, operator, searchName); }, [selectedTags, operator, searchName]);
}
function ShowcaseHeader() {
    return ((0, jsx_runtime_1.jsxs)("section", { className: "margin-top--lg margin-bottom--lg text--center", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h1, { initial: { opacity: 0, x: -15 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2,
                }, className: styles_module_css_1.default.TitleText, children: TITLE }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { initial: { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: {
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.3,
                }, children: DESCRIPTION }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: {
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                }, children: (0, jsx_runtime_1.jsx)("a", { className: "button button--primary", href: EDIT_URL, target: "_blank", rel: "noreferrer", children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "showcase.header.button", children: "\uD83C\uDF1F Join the Hive Community" }) }) })] }));
}
function useSiteCountPlural() {
    var selectMessage = (0, theme_common_1.usePluralForm)().selectMessage;
    return function (sitesCount) {
        return selectMessage(sitesCount, (0, Translate_1.translate)({
            id: 'showcase.filters.resultCount',
            description: 'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: '1 site|{sitesCount} sites',
        }, { sitesCount: sitesCount }));
    };
}
function ShowcaseFilters() {
    var filteredUsers = useFilteredUsers();
    var siteCountPlural = useSiteCountPlural();
    return ((0, jsx_runtime_1.jsxs)("section", { className: "container margin-top--l margin-bottom--lg", children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)('margin-bottom--sm', styles_module_css_1.default.filterCheckbox), children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { initial: { opacity: 0, x: -15 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                                    duration: 1,
                                    type: "spring",
                                    stiffness: 100,
                                    delay: 0.2,
                                }, children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "showcase.filters.title", children: "Filters" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, x: -15 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                                    duration: 1,
                                    type: "spring",
                                    stiffness: 100,
                                    delay: 0.3,
                                }, children: (0, jsx_runtime_1.jsx)("span", { children: siteCountPlural(filteredUsers.length) }) })] }), (0, jsx_runtime_1.jsx)(ShowcaseFilterToggle_1.default, {})] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.ul, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: {
                    duration: 4,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                }, className: (0, clsx_1.default)('clean-list', styles_module_css_1.default.checkboxList), children: users_1.TagList.map(function (tag, i) {
                    var _a = users_1.Tags[tag], label = _a.label, description = _a.description, color = _a.color;
                    var id = "showcase_checkbox_id_".concat(tag);
                    return ((0, jsx_runtime_1.jsx)("li", { className: styles_module_css_1.default.checkboxListItem, children: (0, jsx_runtime_1.jsx)(ShowcaseTooltip_1.default, { id: id, text: description, anchorEl: "#__docusaurus", children: (0, jsx_runtime_1.jsx)(ShowcaseTagSelect_1.default, { tag: tag, id: id, label: label, icon: tag === 'favorite' ? ((0, jsx_runtime_1.jsx)(FavoriteIcon_1.default, { svgClass: styles_module_css_1.default.svgIconFavoriteXs })) : ((0, jsx_runtime_1.jsx)("span", { style: {
                                        backgroundColor: color,
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        marginLeft: 8,
                                    } })) }) }) }, i));
                }) })] }));
}
var favoriteUsers = users_1.sortedUsers.filter(function (user) {
    return user.tags.includes('favorite');
});
var otherUsers = users_1.sortedUsers.filter(function (user) { return !user.tags.includes('favorite'); });
function SearchBar() {
    var history = (0, router_1.useHistory)();
    var location = (0, router_1.useLocation)();
    var _a = (0, react_1.useState)(null), value = _a[0], setValue = _a[1];
    (0, react_1.useEffect)(function () {
        setValue(readSearchName(location.search));
    }, [location]);
    return ((0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.searchContainer, children: (0, jsx_runtime_1.jsx)("input", { id: "searchbar", placeholder: (0, Translate_1.translate)({
                message: 'Search for site name...',
                id: 'showcase.searchBar.placeholder',
            }), value: value !== null && value !== void 0 ? value : undefined, onInput: function (e) {
                setValue(e.currentTarget.value);
                var newSearch = new URLSearchParams(location.search);
                newSearch.delete(SearchNameQueryKey);
                if (e.currentTarget.value) {
                    newSearch.set(SearchNameQueryKey, e.currentTarget.value);
                }
                history.push(__assign(__assign({}, location), { search: newSearch.toString(), state: prepareUserState() }));
                setTimeout(function () {
                    var _a;
                    (_a = document.getElementById('searchbar')) === null || _a === void 0 ? void 0 : _a.focus();
                }, 0);
            } }) }));
}
function ShowcaseCards() {
    var filteredUsers = useFilteredUsers();
    if (filteredUsers.length === 0) {
        return ((0, jsx_runtime_1.jsx)("section", { className: "margin-top--lg margin-bottom--xl", children: (0, jsx_runtime_1.jsxs)("div", { className: "container padding-vert--md text--center", children: [(0, jsx_runtime_1.jsx)("h2", { children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "showcase.usersList.noResult", children: "No result" }) }), (0, jsx_runtime_1.jsx)(SearchBar, {})] }) }));
    }
    return ((0, jsx_runtime_1.jsx)("section", { className: "margin-top--lg margin-bottom--xl", children: filteredUsers.length === users_1.sortedUsers.length ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: styles_module_css_1.default.showcaseFavorite, children: (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)('margin-bottom--md', styles_module_css_1.default.showcaseFavoriteHeader), children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { initial: { opacity: 0, x: -15 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                                            duration: 1,
                                            type: "spring",
                                            stiffness: 100,
                                            delay: 0.3,
                                        }, children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "showcase.favoritesList.title", children: "Best of the Hive" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { initial: { opacity: 0, x: -15 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                                            duration: 1,
                                            type: "spring",
                                            stiffness: 100,
                                            delay: 0.3,
                                        }, children: (0, jsx_runtime_1.jsx)(FavoriteIcon_1.default, { svgClass: styles_module_css_1.default.svgIconFavorite }) }), (0, jsx_runtime_1.jsx)(SearchBar, {})] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.ul, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: {
                                    duration: 4,
                                    type: "spring",
                                    stiffness: 100,
                                    delay: 0.4,
                                }, className: (0, clsx_1.default)('container', 'clean-list', styles_module_css_1.default.showcaseList), children: favoriteUsers.map(function (user) { return ((0, jsx_runtime_1.jsx)(ShowcaseCard_1.default, { user: user }, user.title)); }) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "container margin-top--lg", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { initial: { opacity: 0, x: -15 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: {
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                                delay: 0.5,
                            }, className: styles_module_css_1.default.showcaseHeader, children: (0, jsx_runtime_1.jsx)(Translate_1.default, { id: "showcase.usersList.allUsers", children: "All sites" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.ul, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: {
                                duration: 4,
                                type: "spring",
                                stiffness: 100,
                                delay: 0.5,
                            }, className: (0, clsx_1.default)('clean-list', styles_module_css_1.default.showcaseList), children: otherUsers.map(function (user) { return ((0, jsx_runtime_1.jsx)(ShowcaseCard_1.default, { user: user }, user.title)); }) })] })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('margin-bottom--md', styles_module_css_1.default.showcaseFavoriteHeader), children: (0, jsx_runtime_1.jsx)(SearchBar, {}) }), (0, jsx_runtime_1.jsx)("ul", { className: (0, clsx_1.default)('clean-list', styles_module_css_1.default.showcaseList), children: filteredUsers.map(function (user) { return ((0, jsx_runtime_1.jsx)(ShowcaseCard_1.default, { user: user }, user.title)); }) })] })) }));
}
function Showcase() {
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { title: "Showcase of CodeHarborHub", description: "Showcase of CodeHarborHub for CodeHarborHub Learners and users", children: (0, jsx_runtime_1.jsx)(ShowcaseContent, {}) }));
}
function ShowcaseContent() {
    var colorMode = (0, theme_common_2.useColorMode)().colorMode;
    var isDark = colorMode === "dark";
    return ((0, jsx_runtime_1.jsxs)("main", { className: (0, clsx_1.default)("", isDark ? "bg-[#121212] text-white" : "bg-white text-black"), children: [(0, jsx_runtime_1.jsx)(Head_1.default, { children: (0, jsx_runtime_1.jsx)("script", { async: true, "custom-element": "amp-auto-ads", src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js" }) }), (0, jsx_runtime_1.jsx)(ShowcaseHeader, {}), (0, jsx_runtime_1.jsx)(ShowcaseFilters, {}), (0, jsx_runtime_1.jsx)(ShowcaseCards, {})] }));
}
