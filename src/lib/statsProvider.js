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
exports.convertStatToText = exports.useCommunityStatsContext = exports.CommunityStatsContext = void 0;
exports.CommunityStatsProvider = CommunityStatsProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
/** @jsxImportSource react */
var react_1 = __importStar(require("react"));
var githubService_1 = require("../services/githubService");
var useDocusaurusContext_1 = __importDefault(require("@docusaurus/useDocusaurusContext"));
exports.CommunityStatsContext = (0, react_1.createContext)(undefined);
var GITHUB_ORG = "recodehive";
var POINTS_PER_PR = 10;
var MAX_CONCURRENT_REQUESTS = 8;
var CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache
var MAX_PAGES_PER_REPO = 20;
// Time filter utility functions
var getTimeFilterDate = function (filter) {
    var now = new Date();
    switch (filter) {
        case 'week':
            return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        case 'month': {
            var lastMonth = new Date(now);
            lastMonth.setMonth(now.getMonth() - 1);
            return lastMonth;
        }
        case 'year':
            return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        case 'all':
        default:
            return null; // No filter
    }
};
var isPRInTimeRange = function (mergedAt, filter) {
    if (filter === 'all')
        return true;
    var filterDate = getTimeFilterDate(filter);
    if (!filterDate)
        return true;
    var prDate = new Date(mergedAt);
    return prDate >= filterDate;
};
function CommunityStatsProvider(_a) {
    var _this = this;
    var children = _a.children;
    var customFields = (0, useDocusaurusContext_1.default)().siteConfig.customFields;
    var token = (customFields === null || customFields === void 0 ? void 0 : customFields.gitToken) || "";
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(0), githubStarCount = _d[0], setGithubStarCount = _d[1];
    var _e = (0, react_1.useState)(0), githubContributorsCount = _e[0], setGithubContributorsCount = _e[1];
    var _f = (0, react_1.useState)(0), githubForksCount = _f[0], setGithubForksCount = _f[1];
    var _g = (0, react_1.useState)(0), githubReposCount = _g[0], setGithubReposCount = _g[1];
    var _h = (0, react_1.useState)(0), githubDiscussionsCount = _h[0], setGithubDiscussionsCount = _h[1];
    var _j = (0, react_1.useState)(null), lastUpdated = _j[0], setLastUpdated = _j[1];
    // Time filter state
    var _k = (0, react_1.useState)('all'), currentTimeFilter = _k[0], setCurrentTimeFilter = _k[1];
    // Enhanced state for leaderboard data (stores all contributors with full PR history)
    var _l = (0, react_1.useState)([]), allContributors = _l[0], setAllContributors = _l[1];
    var _m = (0, react_1.useState)(null), stats = _m[0], setStats = _m[1];
    // Cache state (stores raw data without filters)
    var _o = (0, react_1.useState)({ data: null, timestamp: 0 }), cache = _o[0], setCache = _o[1];
    // Computed filtered contributors based on current time filter
    var contributors = (0, react_1.useMemo)(function () {
        if (!allContributors.length)
            return [];
        var filteredContributors = allContributors
            .map(function (contributor) {
            var filteredPRs = contributor.allPRDetails.filter(function (pr) {
                return isPRInTimeRange(pr.mergedAt, currentTimeFilter);
            });
            return {
                username: contributor.username,
                avatar: contributor.avatar,
                profile: contributor.profile,
                points: filteredPRs.length * POINTS_PER_PR,
                prs: filteredPRs.length,
                prDetails: filteredPRs, // For backward compatibility, though we'll use the new function
            };
        })
            .filter(function (contributor) { return contributor.prs > 0; }) // Only show contributors with PRs in the time range
            .sort(function (a, b) { return b.points - a.points || b.prs - a.prs; });
        return filteredContributors;
    }, [allContributors, currentTimeFilter]);
    // Update stats when contributors change
    (0, react_1.useEffect)(function () {
        if (contributors.length > 0) {
            setStats({
                flooredTotalPRs: contributors.reduce(function (sum, c) { return sum + c.prs; }, 0),
                totalContributors: contributors.length,
                flooredTotalPoints: contributors.reduce(function (sum, c) { return sum + c.points; }, 0),
            });
        }
    }, [contributors]);
    // Function to get filtered PRs for a specific contributor (for PR view modal)
    var getFilteredPRsForContributor = (0, react_1.useCallback)(function (username) {
        var contributor = allContributors.find(function (c) { return c.username === username; });
        if (!contributor)
            return [];
        return contributor.allPRDetails
            .filter(function (pr) { return isPRInTimeRange(pr.mergedAt, currentTimeFilter); })
            .sort(function (a, b) { return new Date(b.mergedAt).getTime() - new Date(a.mergedAt).getTime(); }); // Sort by newest first
    }, [allContributors, currentTimeFilter]);
    // Time filter setter function
    var setTimeFilter = (0, react_1.useCallback)(function (filter) {
        setCurrentTimeFilter(filter);
    }, []);
    var fetchAllOrgRepos = (0, react_1.useCallback)(function (headers) { return __awaiter(_this, void 0, void 0, function () {
        var repos, page, resp, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    repos = [];
                    page = 1;
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetch("https://api.github.com/orgs/".concat(GITHUB_ORG, "/repos?type=public&per_page=100&page=").concat(page), {
                            headers: headers,
                        })];
                case 2:
                    resp = _a.sent();
                    if (!resp.ok) {
                        throw new Error("Failed to fetch org repos: ".concat(resp.status, " ").concat(resp.statusText));
                    }
                    return [4 /*yield*/, resp.json()];
                case 3:
                    data = _a.sent();
                    repos.push.apply(repos, data);
                    if (!Array.isArray(data) || data.length < 100)
                        return [3 /*break*/, 4];
                    page++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, repos];
            }
        });
    }); }, []);
    var fetchMergedPRsForRepo = (0, react_1.useCallback)(function (repoName, headers) { return __awaiter(_this, void 0, void 0, function () {
        var mergedPRs, firstResp, firstPRs, firstPageMerged, pagePromises, maxPages, i, remainingPages;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedPRs = [];
                    return [4 /*yield*/, fetch("https://api.github.com/repos/".concat(GITHUB_ORG, "/").concat(repoName, "/pulls?state=closed&per_page=100&page=1"), { headers: headers })];
                case 1:
                    firstResp = _a.sent();
                    if (!firstResp.ok) {
                        console.warn("Failed to fetch PRs for ".concat(repoName, ": ").concat(firstResp.status, " ").concat(firstResp.statusText));
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, firstResp.json()];
                case 2:
                    firstPRs = _a.sent();
                    if (!Array.isArray(firstPRs) || firstPRs.length === 0)
                        return [2 /*return*/, []];
                    firstPageMerged = firstPRs.filter(function (pr) { return Boolean(pr.merged_at); });
                    mergedPRs.push.apply(mergedPRs, firstPageMerged);
                    // If we got less than 100, that's all there is
                    if (firstPRs.length < 100)
                        return [2 /*return*/, mergedPRs];
                    pagePromises = [];
                    maxPages = Math.min(MAX_PAGES_PER_REPO, 10);
                    for (i = 2; i <= maxPages; i++) {
                        pagePromises.push(fetch("https://api.github.com/repos/".concat(GITHUB_ORG, "/").concat(repoName, "/pulls?state=closed&per_page=100&page=").concat(i), { headers: headers })
                            .then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                            var prs;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!resp.ok)
                                            return [2 /*return*/, []];
                                        return [4 /*yield*/, resp.json()];
                                    case 1:
                                        prs = _a.sent();
                                        if (!Array.isArray(prs))
                                            return [2 /*return*/, []];
                                        return [2 /*return*/, prs.filter(function (pr) { return Boolean(pr.merged_at); })];
                                }
                            });
                        }); })
                            .catch(function () { return []; }));
                    }
                    return [4 /*yield*/, Promise.all(pagePromises)];
                case 3:
                    remainingPages = _a.sent();
                    remainingPages.forEach(function (pagePRs) {
                        if (pagePRs.length > 0)
                            mergedPRs.push.apply(mergedPRs, pagePRs);
                    });
                    return [2 /*return*/, mergedPRs];
            }
        });
    }); }, []);
    // Enhanced processing function that stores all PR data without filtering
    var processBatch = (0, react_1.useCallback)(function (repos, headers) { return __awaiter(_this, void 0, void 0, function () {
        var contributorMap, totalMergedPRs, i, batch, promises, results;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contributorMap = new Map();
                    totalMergedPRs = 0;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < repos.length)) return [3 /*break*/, 4];
                    batch = repos.slice(i, i + MAX_CONCURRENT_REQUESTS);
                    promises = batch.map(function (repo) { return __awaiter(_this, void 0, void 0, function () {
                        var mergedPRs, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (repo.archived)
                                        return [2 /*return*/, { mergedPRs: [], repoName: repo.name }];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, fetchMergedPRsForRepo(repo.name, headers)];
                                case 2:
                                    mergedPRs = _a.sent();
                                    return [2 /*return*/, { mergedPRs: mergedPRs, repoName: repo.name }];
                                case 3:
                                    error_1 = _a.sent();
                                    console.warn("Skipping repo ".concat(repo.name, " due to error:"), error_1);
                                    return [2 /*return*/, { mergedPRs: [], repoName: repo.name }];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(promises)];
                case 2:
                    results = _a.sent();
                    // Process results from this batch
                    results.forEach(function (_a) {
                        var mergedPRs = _a.mergedPRs, repoName = _a.repoName;
                        totalMergedPRs += mergedPRs.length;
                        mergedPRs.forEach(function (pr) {
                            var username = pr.user.login;
                            if (!contributorMap.has(username)) {
                                contributorMap.set(username, {
                                    username: username,
                                    avatar: pr.user.avatar_url,
                                    profile: pr.user.html_url,
                                    points: 0, // Will be calculated later based on filter
                                    prs: 0, // Will be calculated later based on filter
                                    allPRDetails: [], // Store all PRs here
                                });
                            }
                            var contributor = contributorMap.get(username);
                            // Add detailed PR information to the full list
                            if (pr.title && pr.html_url && pr.merged_at && pr.number) {
                                contributor.allPRDetails.push({
                                    title: pr.title,
                                    url: pr.html_url,
                                    mergedAt: pr.merged_at,
                                    repoName: repoName,
                                    number: pr.number,
                                });
                            }
                        });
                    });
                    _a.label = 3;
                case 3:
                    i += MAX_CONCURRENT_REQUESTS;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, { contributorMap: contributorMap, totalMergedPRs: totalMergedPRs }];
            }
        });
    }); }, [fetchMergedPRsForRepo]);
    var fetchAllStats = (0, react_1.useCallback)(function (signal) { return __awaiter(_this, void 0, void 0, function () {
        var now, headers, _a, orgStats, repos, _b, contributorMap, totalMergedPRs, contributorsArray, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setLoading(true);
                    setError(null);
                    now = Date.now();
                    if (cache.data && (now - cache.timestamp) < CACHE_DURATION) {
                        setAllContributors(cache.data.contributors);
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    if (!token) {
                        setError("GitHub token not found. Please set customFields.gitToken in docusaurus.config.js.");
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, 5, 6]);
                    headers = {
                        Authorization: "token ".concat(token),
                        Accept: "application/vnd.github.v3+json",
                    };
                    return [4 /*yield*/, Promise.all([
                            githubService_1.githubService.fetchOrganizationStats(signal),
                            fetchAllOrgRepos(headers)
                        ])];
                case 2:
                    _a = _c.sent(), orgStats = _a[0], repos = _a[1];
                    // Set org stats immediately
                    setGithubStarCount(orgStats.totalStars);
                    setGithubContributorsCount(orgStats.totalContributors);
                    setGithubForksCount(orgStats.totalForks);
                    setGithubReposCount(orgStats.publicRepositories);
                    setGithubDiscussionsCount(orgStats.discussionsCount);
                    setLastUpdated(new Date(orgStats.lastUpdated));
                    return [4 /*yield*/, processBatch(repos, headers)];
                case 3:
                    _b = _c.sent(), contributorMap = _b.contributorMap, totalMergedPRs = _b.totalMergedPRs;
                    contributorsArray = Array.from(contributorMap.values());
                    setAllContributors(contributorsArray);
                    // Cache the results (raw data without filtering)
                    setCache({
                        data: {
                            contributors: contributorsArray,
                            rawStats: { totalPRs: totalMergedPRs }
                        },
                        timestamp: now
                    });
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _c.sent();
                    if (err_1.name !== 'AbortError') {
                        console.error("Error fetching GitHub organization stats:", err_1);
                        setError(err_1 instanceof Error ? err_1.message : 'Failed to fetch GitHub stats');
                        // Set fallback values on error
                        setGithubStarCount(0);
                        setGithubContributorsCount(140);
                        setGithubForksCount(0);
                        setGithubReposCount(20);
                        setGithubDiscussionsCount(0);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); }, [token, fetchAllOrgRepos, processBatch, cache]);
    var clearCache = (0, react_1.useCallback)(function () {
        githubService_1.githubService.clearCache();
        setCache({ data: null, timestamp: 0 });
        var abortController = new AbortController();
        fetchAllStats(abortController.signal);
    }, [fetchAllStats]);
    (0, react_1.useEffect)(function () {
        var abortController = new AbortController();
        fetchAllStats(abortController.signal);
        return function () {
            abortController.abort();
        };
    }, [fetchAllStats]);
    var githubStarCountText = (0, react_1.useMemo)(function () { return (0, exports.convertStatToText)(githubStarCount); }, [githubStarCount]);
    var githubContributorsCountText = (0, react_1.useMemo)(function () { return (0, exports.convertStatToText)(githubContributorsCount); }, [githubContributorsCount]);
    var githubForksCountText = (0, react_1.useMemo)(function () { return (0, exports.convertStatToText)(githubForksCount); }, [githubForksCount]);
    var githubReposCountText = (0, react_1.useMemo)(function () { return (0, exports.convertStatToText)(githubReposCount); }, [githubReposCount]);
    var githubDiscussionsCountText = (0, react_1.useMemo)(function () { return (0, exports.convertStatToText)(githubDiscussionsCount); }, [githubDiscussionsCount]);
    var value = {
        githubStarCount: githubStarCount,
        githubStarCountText: githubStarCountText,
        githubContributorsCount: githubContributorsCount,
        githubContributorsCountText: githubContributorsCountText,
        githubForksCount: githubForksCount,
        githubForksCountText: githubForksCountText,
        githubReposCount: githubReposCount,
        githubReposCountText: githubReposCountText,
        githubDiscussionsCount: githubDiscussionsCount,
        githubDiscussionsCountText: githubDiscussionsCountText,
        loading: loading,
        error: error,
        lastUpdated: lastUpdated,
        refetch: fetchAllStats,
        clearCache: clearCache,
        contributors: contributors,
        stats: stats,
        currentTimeFilter: currentTimeFilter,
        setTimeFilter: setTimeFilter,
        getFilteredPRsForContributor: getFilteredPRsForContributor,
    };
    return ((0, jsx_runtime_1.jsx)(exports.CommunityStatsContext.Provider, { value: value, children: children }));
}
var useCommunityStatsContext = function () {
    var context = (0, react_1.useContext)(exports.CommunityStatsContext);
    if (context === undefined) {
        throw new Error("useCommunityStatsContext must be used within a CommunityStatsProvider");
    }
    return context;
};
exports.useCommunityStatsContext = useCommunityStatsContext;
var convertStatToText = function (num) {
    var hasIntlSupport = typeof Intl === "object" && Intl && typeof Intl.NumberFormat === "function";
    if (!hasIntlSupport) {
        return "".concat((num / 1000).toFixed(1), "k");
    }
    var formatter = new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
        maximumSignificantDigits: 3,
    });
    return formatter.format(num);
};
exports.convertStatToText = convertStatToText;
