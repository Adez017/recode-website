"use strict";
// GitHub API service for fetching organization metrics
// Uses localStorage for caching to reduce API calls
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubService = void 0;
var GitHubService = /** @class */ (function () {
    function GitHubService() {
        this.ORG_NAME = 'recodehive';
        this.CACHE_KEY = 'github_org_stats';
        this.CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
        this.BASE_URL = 'https://api.github.com';
    }
    // Get headers for GitHub API requests
    GitHubService.prototype.getHeaders = function () {
        var headers = {
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
        };
        // Add GitHub token if available in environment
        // Note: In production, you might want to use a server-side proxy to avoid exposing tokens
        if (typeof window !== 'undefined' && window.GITHUB_TOKEN) {
            headers['Authorization'] = "token ".concat(window.GITHUB_TOKEN);
        }
        return headers;
    };
    // Fetch with error handling and rate limit consideration
    GitHubService.prototype.fetchWithRetry = function (url_1) {
        return __awaiter(this, arguments, void 0, function (url, retries) {
            var _loop_1, this_1, i, state_1;
            if (retries === void 0) { retries = 3; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var response, error_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 2, , 4]);
                                        return [4 /*yield*/, fetch(url, {
                                                headers: this_1.getHeaders(),
                                            })];
                                    case 1:
                                        response = _b.sent();
                                        if (response.status === 403) {
                                            // Rate limited - don't retry, just throw error
                                            console.warn('GitHub API rate limit exceeded');
                                            throw new Error('GitHub API rate limit exceeded');
                                        }
                                        if (!response.ok) {
                                            throw new Error("HTTP ".concat(response.status, ": ").concat(response.statusText));
                                        }
                                        return [2 /*return*/, { value: response }];
                                    case 2:
                                        error_1 = _b.sent();
                                        if (i === retries - 1)
                                            throw error_1;
                                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000 * (i + 1)); })];
                                    case 3:
                                        _b.sent();
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < retries)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: throw new Error('Failed after retries');
                }
            });
        });
    };
    // Get cached data if valid
    GitHubService.prototype.getCachedData = function () {
        if (typeof window === 'undefined')
            return null;
        try {
            var cached = localStorage.getItem(this.CACHE_KEY);
            if (!cached)
                return null;
            var data = JSON.parse(cached);
            var now = Date.now();
            if (now - data.lastUpdated < this.CACHE_DURATION) {
                return data;
            }
        }
        catch (error) {
            console.warn('Error reading GitHub stats cache:', error);
            // Clear invalid cache
            localStorage.removeItem(this.CACHE_KEY);
        }
        return null;
    };
    // Cache data to localStorage
    GitHubService.prototype.setCachedData = function (data) {
        if (typeof window === 'undefined')
            return;
        try {
            localStorage.setItem(this.CACHE_KEY, JSON.stringify(__assign(__assign({}, data), { lastUpdated: Date.now() })));
        }
        catch (error) {
            console.warn('Error caching GitHub stats:', error);
        }
    };
    // Fetch organization basic info
    GitHubService.prototype.fetchOrganizationInfo = function (signal) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.BASE_URL, "/orgs/").concat(this.ORG_NAME), {
                            headers: this.getHeaders(),
                            signal: signal,
                        })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("Failed to fetch organization info: ".concat(response.status));
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    // Fetch all public repositories for the organization
    GitHubService.prototype.fetchAllRepositories = function (signal) {
        return __awaiter(this, void 0, void 0, function () {
            var repositories, page, perPage, response, repos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repositories = [];
                        page = 1;
                        perPage = 100;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetch("".concat(this.BASE_URL, "/orgs/").concat(this.ORG_NAME, "/repos?type=public&per_page=").concat(perPage, "&page=").concat(page, "&sort=updated"), {
                                headers: this.getHeaders(),
                                signal: signal,
                            })];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            if (response.status === 403) {
                                console.warn('GitHub API rate limit exceeded while fetching repositories');
                                throw new Error('GitHub API rate limit exceeded');
                            }
                            throw new Error("Failed to fetch repositories: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        repos = _a.sent();
                        if (repos.length === 0)
                            return [3 /*break*/, 4];
                        repositories.push.apply(repositories, repos);
                        if (repos.length < perPage)
                            return [3 /*break*/, 4];
                        page++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, repositories];
                }
            });
        });
    };
    // Estimate contributors count (GitHub API doesn't provide org-wide contributor count)
    GitHubService.prototype.estimateContributors = function (repositories, signal) {
        return __awaiter(this, void 0, void 0, function () {
            var topRepos, totalContributors, contributorPromises, contributorCounts, sumContributors;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        topRepos = repositories
                            .filter(function (repo) { return !repo.archived && repo.stargazers_count > 0; })
                            .sort(function (a, b) { return b.stargazers_count - a.stargazers_count; })
                            .slice(0, 10);
                        totalContributors = 0;
                        contributorPromises = topRepos.map(function (repo) { return __awaiter(_this, void 0, void 0, function () {
                            var response, linkHeader, match, contributors, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 5]);
                                        return [4 /*yield*/, fetch("".concat(this.BASE_URL, "/repos/").concat(repo.full_name, "/contributors?per_page=1"), {
                                                headers: this.getHeaders(),
                                                signal: signal,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        if (!response.ok) return [3 /*break*/, 3];
                                        linkHeader = response.headers.get('Link');
                                        if (linkHeader) {
                                            match = linkHeader.match(/page=(\d+)>; rel="last"/);
                                            if (match) {
                                                return [2 /*return*/, parseInt(match[1])];
                                            }
                                        }
                                        return [4 /*yield*/, response.json()];
                                    case 2:
                                        contributors = _a.sent();
                                        return [2 /*return*/, Array.isArray(contributors) ? contributors.length : 0];
                                    case 3: return [2 /*return*/, 0];
                                    case 4:
                                        error_2 = _a.sent();
                                        console.warn("Error fetching contributors for ".concat(repo.name, ":"), error_2);
                                        return [2 /*return*/, 0];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(contributorPromises)];
                    case 1:
                        contributorCounts = _a.sent();
                        sumContributors = contributorCounts.reduce(function (sum, count) { return sum + count; }, 0);
                        // Apply estimation factor for unique contributors across repos
                        totalContributors = Math.round(sumContributors * 0.7); // Assume 30% overlap
                        // Ensure minimum reasonable number
                        return [2 /*return*/, Math.max(totalContributors, 140)];
                }
            });
        });
    };
    // Get discussions count (approximate using search)
    GitHubService.prototype.getDiscussionsCount = function (signal) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(this.BASE_URL, "/search/issues?q=repo:").concat(this.ORG_NAME, "/Support+type:issue"), {
                                headers: this.getHeaders(),
                                signal: signal,
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.total_count || 0];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        console.warn('Error fetching discussions count:', error_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, 0];
                }
            });
        });
    };
    // Main method to fetch all organization statistics
    GitHubService.prototype.fetchOrganizationStats = function (signal) {
        return __awaiter(this, void 0, void 0, function () {
            var cached, _a, orgInfo, repositories, activeRepos, totalStars, totalForks, _b, totalContributors, discussionsCount, stats, error_4, fallbackStats;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cached = this.getCachedData();
                        if (cached) {
                            return [2 /*return*/, cached];
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, Promise.all([
                                this.fetchOrganizationInfo(signal),
                                this.fetchAllRepositories(signal),
                            ])];
                    case 2:
                        _a = _c.sent(), orgInfo = _a[0], repositories = _a[1];
                        activeRepos = repositories.filter(function (repo) { return !repo.archived; });
                        totalStars = repositories.reduce(function (sum, repo) { return sum + repo.stargazers_count; }, 0);
                        totalForks = repositories.reduce(function (sum, repo) { return sum + repo.forks_count; }, 0);
                        return [4 /*yield*/, Promise.all([
                                this.estimateContributors(activeRepos, signal),
                                this.getDiscussionsCount(signal),
                            ])];
                    case 3:
                        _b = _c.sent(), totalContributors = _b[0], discussionsCount = _b[1];
                        stats = {
                            totalStars: totalStars,
                            totalForks: totalForks,
                            totalRepositories: repositories.length,
                            publicRepositories: activeRepos.length,
                            totalContributors: totalContributors,
                            discussionsCount: discussionsCount,
                            lastUpdated: Date.now(),
                        };
                        // Cache the results
                        this.setCachedData(stats);
                        return [2 /*return*/, stats];
                    case 4:
                        error_4 = _c.sent();
                        console.error('Error fetching GitHub organization stats:', error_4);
                        fallbackStats = {
                            totalStars: 0,
                            totalForks: 0,
                            totalRepositories: 0,
                            publicRepositories: 0,
                            totalContributors: 140,
                            discussionsCount: 0,
                            lastUpdated: Date.now(),
                        };
                        return [2 /*return*/, fallbackStats];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // Clear cache (useful for manual refresh)
    GitHubService.prototype.clearCache = function () {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(this.CACHE_KEY);
        }
    };
    // Get cache status
    GitHubService.prototype.getCacheStatus = function () {
        var cached = this.getCachedData();
        if (!cached) {
            return { cached: false, age: 0, expiresIn: 0 };
        }
        var age = Date.now() - cached.lastUpdated;
        var expiresIn = Math.max(0, this.CACHE_DURATION - age);
        return { cached: true, age: age, expiresIn: expiresIn };
    };
    // Fetch GitHub Discussions using GraphQL API
    GitHubService.prototype.fetchDiscussions = function () {
        return __awaiter(this, arguments, void 0, function (limit, signal) {
            var query, variables, response, data, discussions, error_5;
            var _a, _b, _c;
            if (limit === void 0) { limit = 20; }
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        query = "\n      query GetDiscussions($owner: String!, $name: String!, $first: Int!) {\n        repository(owner: $owner, name: $name) {\n          discussions(first: $first, orderBy: {field: UPDATED_AT, direction: DESC}) {\n            nodes {\n              id\n              title\n              body\n              createdAt\n              updatedAt\n              url\n              author {\n                login\n                avatarUrl\n                url\n              }\n              category {\n                name\n                emoji\n              }\n              comments {\n                totalCount\n              }\n              reactions {\n                totalCount\n              }\n              labels(first: 10) {\n                nodes {\n                  name\n                  color\n                }\n              }\n            }\n          }\n        }\n      }\n    ";
                        variables = {
                            owner: this.ORG_NAME,
                            name: 'recode-website', // Main repository for discussions
                            first: limit
                        };
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('https://api.github.com/graphql', {
                                method: 'POST',
                                headers: __assign(__assign({}, this.getHeaders()), { 'Content-Type': 'application/json' }),
                                body: JSON.stringify({ query: query, variables: variables }),
                                signal: signal,
                            })];
                    case 2:
                        response = _d.sent();
                        if (!response.ok) {
                            throw new Error("GraphQL request failed: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _d.sent();
                        if (data.errors) {
                            console.error('GraphQL errors:', data.errors);
                            throw new Error('GraphQL query failed');
                        }
                        discussions = ((_c = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.repository) === null || _b === void 0 ? void 0 : _b.discussions) === null || _c === void 0 ? void 0 : _c.nodes) || [];
                        return [2 /*return*/, discussions.map(function (discussion) {
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                                return ({
                                    id: discussion.id,
                                    title: discussion.title,
                                    body: discussion.body || '',
                                    author: {
                                        login: ((_a = discussion.author) === null || _a === void 0 ? void 0 : _a.login) || 'Unknown',
                                        avatar_url: ((_b = discussion.author) === null || _b === void 0 ? void 0 : _b.avatarUrl) || '',
                                        html_url: ((_c = discussion.author) === null || _c === void 0 ? void 0 : _c.url) || '',
                                    },
                                    category: {
                                        name: ((_d = discussion.category) === null || _d === void 0 ? void 0 : _d.name) || 'General',
                                        emoji: ((_e = discussion.category) === null || _e === void 0 ? void 0 : _e.emoji) || '💬',
                                    },
                                    created_at: discussion.createdAt,
                                    updated_at: discussion.updatedAt,
                                    comments: ((_f = discussion.comments) === null || _f === void 0 ? void 0 : _f.totalCount) || 0,
                                    reactions: {
                                        total_count: ((_g = discussion.reactions) === null || _g === void 0 ? void 0 : _g.totalCount) || 0,
                                    },
                                    html_url: discussion.url,
                                    labels: ((_j = (_h = discussion.labels) === null || _h === void 0 ? void 0 : _h.nodes) === null || _j === void 0 ? void 0 : _j.map(function (label) { return ({
                                        name: label.name,
                                        color: label.color,
                                    }); })) || [],
                                });
                            })];
                    case 4:
                        error_5 = _d.sent();
                        console.error('Error fetching discussions:', error_5);
                        // Return mock data for development/fallback
                        return [2 /*return*/, this.getMockDiscussions()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // Mock discussions for development/fallback
    GitHubService.prototype.getMockDiscussions = function () {
        return [
            {
                id: '1',
                title: 'Welcome to RecodeHive Discussions!',
                body: 'This is where we discuss ideas, share knowledge, and help each other grow. Feel free to ask questions, share your projects, or just say hello!',
                author: {
                    login: 'recodehive',
                    avatar_url: 'https://avatars.githubusercontent.com/u/your-org-id?v=4',
                    html_url: 'https://github.com/recodehive',
                },
                category: {
                    name: 'Announcements',
                    emoji: '📢',
                },
                created_at: new Date(Date.now() - 86400000).toISOString(),
                updated_at: new Date(Date.now() - 3600000).toISOString(),
                comments: 12,
                reactions: {
                    total_count: 25,
                },
                html_url: 'https://github.com/recodehive/recode-website/discussions',
                labels: [
                    { name: 'welcome', color: '0075ca' },
                    { name: 'community', color: '7057ff' },
                ],
            },
            {
                id: '2',
                title: 'How to contribute to open source projects?',
                body: 'I\'m new to open source and would love to learn how to make my first contribution. Any tips or resources would be greatly appreciated!',
                author: {
                    login: 'newcontributor',
                    avatar_url: 'https://avatars.githubusercontent.com/u/example?v=4',
                    html_url: 'https://github.com/newcontributor',
                },
                category: {
                    name: 'Q&A',
                    emoji: '❓',
                },
                created_at: new Date(Date.now() - 172800000).toISOString(),
                updated_at: new Date(Date.now() - 7200000).toISOString(),
                comments: 8,
                reactions: {
                    total_count: 15,
                },
                html_url: 'https://github.com/recodehive/recode-website/discussions',
                labels: [
                    { name: 'question', color: 'd876e3' },
                    { name: 'beginner', color: '0e8a16' },
                ],
            },
            {
                id: '3',
                title: 'Feature Request: Dark Mode for Documentation',
                body: 'It would be great to have a dark mode option for the documentation pages. This would be easier on the eyes during late-night coding sessions.',
                author: {
                    login: 'darkmode-lover',
                    avatar_url: 'https://avatars.githubusercontent.com/u/example2?v=4',
                    html_url: 'https://github.com/darkmode-lover',
                },
                category: {
                    name: 'Ideas',
                    emoji: '💡',
                },
                created_at: new Date(Date.now() - 259200000).toISOString(),
                updated_at: new Date(Date.now() - 10800000).toISOString(),
                comments: 5,
                reactions: {
                    total_count: 22,
                },
                html_url: 'https://github.com/recodehive/recode-website/discussions',
                labels: [
                    { name: 'enhancement', color: 'a2eeef' },
                    { name: 'ui/ux', color: 'f9d0c4' },
                ],
            },
        ];
    };
    return GitHubService;
}());
exports.githubService = new GitHubService();
