"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
var staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
var OverviewTab = function (_a) {
    var _b;
    var _c = _a.toggleTips, toggleTips = _c === void 0 ? function () { } : _c, _d = _a.toggleQuestions, toggleQuestions = _d === void 0 ? function () { } : _d, _e = _a.showTips, showTips = _e === void 0 ? {} : _e, _f = _a.showQuestions, showQuestions = _f === void 0 ? {} : _f, _g = _a.setActiveTab, setActiveTab = _g === void 0 ? function () { } : _g;
    var stages = [
        {
            step: "01",
            title: "Resume Optimization",
            subtitle: "Foundation Building Phase",
            icon: "📄",
            description: "Craft a compelling resume that showcases your achievements, aligns with job requirements, and passes ATS screening systems",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-500",
            duration: "Ongoing preparation",
            difficulty: "Medium",
            keyFocus: "Professional Presentation & ATS Optimization",
            tips: [
                "Tailor resume for each specific role and company",
                "Use action verbs and quantify achievements with metrics",
                "Optimize for ATS with relevant keywords from job description",
                "Keep format clean, consistent, and easy to scan",
                "Include relevant projects, certifications, and technical skills",
            ],
            commonQuestions: [
                "Walk me through your resume",
                "Tell me about this project on your resume",
                "Why did you choose this career path?",
            ],
        },
        {
            step: "02",
            title: "Technical Assessment",
            subtitle: "Core Competency Evaluation",
            icon: "💻",
            description: "Deep dive into coding abilities, algorithmic thinking, system design knowledge, and technical problem-solving approach",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-500",
            duration: "60-120 minutes",
            difficulty: "Hard",
            keyFocus: "Problem Solving & Code Quality",
            tips: [
                "Practice coding on whiteboard/shared editor daily",
                "Think out loud - explain your thought process clearly",
                "Ask clarifying questions before jumping into code",
                "Test your solution with edge cases and optimize",
                "Know time/space complexity of your solutions",
            ],
            commonQuestions: [
                "Implement [data structure/algorithm]",
                "Design a system for [specific use case]",
                "Optimize this code for better performance",
            ],
        },
        {
            step: "03",
            title: "Behavioral Deep-Dive",
            subtitle: "Leadership & Culture Assessment",
            icon: "🤝",
            description: "Comprehensive evaluation of soft skills, leadership potential, conflict resolution abilities, and team collaboration style",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-500",
            duration: "45-75 minutes",
            difficulty: "Medium",
            keyFocus: "Leadership & Collaboration",
            tips: [
                "Master the STAR method (Situation, Task, Action, Result)",
                "Prepare 5-7 detailed stories covering different competencies",
                "Show growth mindset - discuss lessons learned from failures",
                "Demonstrate impact with specific metrics and outcomes",
                "Practice active listening and ask follow-up questions",
            ],
            commonQuestions: [
                "Tell me about a time you led a difficult project",
                "Describe a conflict with a teammate and resolution",
                "Share an example of when you failed and what you learned",
            ],
        },
        {
            step: "04",
            title: "Final Alignment",
            subtitle: "Mutual Fit Confirmation",
            icon: "🎯",
            description: "Final evaluation covering compensation expectations, role clarity, team dynamics, and long-term career alignment",
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-500",
            duration: "30-60 minutes",
            difficulty: "Medium",
            keyFocus: "Mutual Fit & Expectations",
            tips: [
                "Research industry salary benchmarks thoroughly",
                "Prepare thoughtful questions about team and growth",
                "Show genuine enthusiasm for the role and company",
                "Discuss career goals and how role aligns with them",
                "Be ready to negotiate professionally and respectfully",
            ],
            commonQuestions: [
                "What are your career goals for the next 2-3 years?",
                "How do you handle work-life balance?",
                "What questions do you have for us?",
            ],
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: "hidden", animate: "visible", variants: staggerContainer, children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "mb-16", variants: fadeIn, children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" }), "Your Complete Interview Success Guide"] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-4xl font-bold mb-6 text-gray-900 dark:text-white", children: "What Our Interview Prep Section Covers" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8 mb-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "text-xl font-bold text-gray-900 dark:text-white flex items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3", children: "\uD83D\uDCDA" }), "Comprehensive Coverage"] }), (0, jsx_runtime_1.jsxs)("ul", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [(0, jsx_runtime_1.jsxs)("li", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Technical Mastery:" }), " 500+ coding problems, algorithms, data structures, and system design challenges"] })] }), (0, jsx_runtime_1.jsxs)("li", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Behavioral Excellence:" }), " STAR method framework, leadership scenarios, and communication skills"] })] }), (0, jsx_runtime_1.jsxs)("li", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Company Intelligence:" }), " FAANG-specific strategies, culture insights, and insider tips"] })] }), (0, jsx_runtime_1.jsxs)("li", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Mock Practice:" }), " Real-time simulations with feedback and performance tracking"] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "text-xl font-bold text-gray-900 dark:text-white flex items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3", children: "\u26A1" }), "Why Both Technical & Behavioral Matter"] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 overview-sidebar-blue", children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Technical Skills (60% Weight)" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Prove you can solve complex problems, write clean code, and design scalable systems. Technical competence is your entry ticket." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-green-500 overview-sidebar-green", children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Behavioral Skills (40% Weight)" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Demonstrate leadership, collaboration, and cultural fit. Many technically strong candidates fail here due to poor communication or team dynamics." })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700", children: (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [(0, jsx_runtime_1.jsx)("strong", { children: "\uD83D\uDCA1 Key Insight:" }), " Top companies hire for both technical excellence AND cultural alignment. Neglecting either aspect significantly reduces your success rate."] }) })] })] })] }) }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "mb-20", variants: fadeIn, children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-4xl font-bold text-gray-900 dark:text-white mb-4", children: "Interview Process Journey" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Navigate each stage strategically with our comprehensive roadmap" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 opacity-5", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0", style: {
                                        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)",
                                        backgroundSize: "20px 20px",
                                    } }) }), (0, jsx_runtime_1.jsx)("div", { className: "relative", children: (stages || []).map(function (stage, index) {
                                    var _a, _b, _c, _d;
                                    return (stage ? ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "relative mb-20 last:mb-0", initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: index * 0.2 }, viewport: { once: true }, children: [index < 3 && ((0, jsx_runtime_1.jsxs)("div", { className: "hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 z-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full relative overflow-hidden", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full", initial: { height: "0%" }, whileInView: { height: "100%" }, transition: { duration: 1, delay: index * 0.3 + 0.5 }, viewport: { once: true } }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-blue-500", initial: { opacity: 0, y: -10 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.3 + 1 }, viewport: { once: true }, children: (0, jsx_runtime_1.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M6 0L12 6L6 12L4.5 10.5L8.25 6.75H0V5.25H8.25L4.5 1.5L6 0Z", transform: "rotate(90 6 6)" }) }) })] })), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row ".concat(index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", " gap-8 items-center"), children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex-shrink-0 relative", whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 300 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br ".concat(stage.color, " flex items-center justify-center text-white font-bold text-lg shadow-lg relative overflow-hidden"), children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute inset-0 bg-white opacity-20 rounded-full", animate: { scale: [1, 1.2, 1] }, transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } }), (0, jsx_runtime_1.jsx)("span", { className: "relative z-10", children: stage.step })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md", animate: { y: [0, -4, 0] }, transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }, children: (0, jsx_runtime_1.jsx)("span", { className: "text-lg", children: stage.icon }) })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group", whileHover: { y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }, transition: { type: "spring", stiffness: 300 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full h-full", style: {
                                                                        backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                                                                        backgroundSize: "24px 24px",
                                                                    } }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-start justify-between mb-6", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: stage.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider", children: stage.subtitle })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-xs font-semibold ".concat(stage.difficulty === "Easy"
                                                                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                                                            : stage.difficulty === "Medium"
                                                                                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                                                                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"), children: stage.difficulty }), (0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200", children: stage.duration })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 dark:text-gray-300 mb-6 leading-relaxed", children: stage.description }), (0, jsx_runtime_1.jsx)("div", { className: "mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-l-4 border-blue-500 overview-sidebar-blue", children: (0, jsx_runtime_1.jsxs)("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 bg-blue-500 rounded-full" }), "Key Focus: ", stage.keyFocus] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-6", children: [(0, jsx_runtime_1.jsxs)("button", { onClick: function () { return toggleTips(index); }, className: "w-full flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors", children: [(0, jsx_runtime_1.jsxs)("h4", { className: "font-semibold text-gray-900 dark:text-white flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-green-500", children: "\uD83D\uDCA1" }), "Preparation Tips (", ((_a = stage.tips) === null || _a === void 0 ? void 0 : _a.length) || 0, ")"] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { animate: { rotate: showTips[index] ? 180 : 0 }, transition: { duration: 0.2 }, children: (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: showTips[index] && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 }, className: "overflow-hidden", children: (0, jsx_runtime_1.jsx)("ul", { className: "space-y-3 mt-4", children: (_b = stage.tips) === null || _b === void 0 ? void 0 : _b.map(function (tip, tipIndex) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.li, { className: "flex items-start gap-3 text-gray-600 dark:text-gray-300", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.4, delay: tipIndex * 0.1 }, children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" }), (0, jsx_runtime_1.jsx)("span", { className: "leading-relaxed", children: tip })] }, tipIndex)); }) }) })) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("button", { onClick: function () { return toggleQuestions(index); }, className: "w-full flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors", children: [(0, jsx_runtime_1.jsxs)("h4", { className: "font-semibold text-gray-900 dark:text-white flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-purple-500", children: "\u2753" }), "Common Questions (", ((_c = stage.commonQuestions) === null || _c === void 0 ? void 0 : _c.length) || 0, ")"] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { animate: { rotate: showQuestions[index] ? 180 : 0 }, transition: { duration: 0.2 }, children: (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: showQuestions[index] && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 }, className: "overflow-hidden", children: (0, jsx_runtime_1.jsx)("div", { className: "space-y-2 mt-4", children: (_d = stage.commonQuestions) === null || _d === void 0 ? void 0 : _d.map(function (question, qIndex) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-3 border-purple-500 overview-sidebar-purple", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: qIndex * 0.1 }, children: (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-700 dark:text-gray-300 italic", children: ["\"", question, "\""] }) }, qIndex)); }) }) })) })] })] })] })] })] }, index)) : null);
                                }) })] })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "mb-16", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("div", { className: "text-center mb-12", children: (0, jsx_runtime_1.jsx)("h3", { className: "text-3xl font-bold text-gray-900 dark:text-white", children: "Preparation Strategy" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-3 gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg", children: "\uD83E\uDDE0" }), (0, jsx_runtime_1.jsx)("h4", { className: "text-xl font-bold text-gray-900 dark:text-white mb-3", children: "Problem-Solving Mastery" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Build strong algorithmic thinking through consistent practice. Focus on understanding patterns rather than memorizing solutions." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg", children: "\uD83D\uDCAC" }), (0, jsx_runtime_1.jsx)("h4", { className: "text-xl font-bold text-gray-900 dark:text-white mb-3", children: "Communication Excellence" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Practice explaining complex concepts clearly. Develop your ability to think out loud and collaborate effectively." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg", children: "\uD83C\uDFAD" }), (0, jsx_runtime_1.jsx)("h4", { className: "text-xl font-bold text-gray-900 dark:text-white mb-3", children: "Behavioral Readiness" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Prepare compelling stories using the STAR method. Showcase leadership, growth mindset, and cultural alignment." })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border-l-4 border-yellow-400 overview-sidebar-yellow", children: [(0, jsx_runtime_1.jsxs)("h5", { className: "font-bold text-gray-900 dark:text-white mb-2 flex items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-xl mr-2", children: "\uD83D\uDCA1" }), "Pro Tip: Balance Your Preparation"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 dark:text-gray-300 text-sm", children: "Allocate 60% of your time to technical skills, 30% to behavioral preparation, and 10% to company research. This balance ensures you're well-rounded and confident in all interview stages." })] })] })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "mb-16", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white", children: "Quick Access to Resources" }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: (_b = [
                            {
                                id: "technical",
                                title: "Technical Prep",
                                icon: "💻",
                                description: "Coding challenges, algorithms, system design",
                                color: "from-blue-500 to-blue-600",
                                items: ["500+ Problems", "System Design", "Code Review"],
                            },
                            {
                                id: "behavioral",
                                title: "Behavioral Prep",
                                icon: "🤝",
                                description: "STAR method, leadership stories, soft skills",
                                color: "from-green-500 to-green-600",
                                items: ["STAR Framework", "Leadership", "Communication"],
                            },
                            {
                                id: "companies",
                                title: "Company Guides",
                                icon: "🏢",
                                description: "Company-specific tips and strategies",
                                color: "from-purple-500 to-purple-600",
                                items: ["FAANG Tips", "Culture Fit", "Specific Questions"],
                            },
                            {
                                id: "practice",
                                title: "Mock Practice",
                                icon: "🎯",
                                description: "Simulate real interview conditions",
                                color: "from-orange-500 to-orange-600",
                                items: ["Live Practice", "Feedback", "Time Management"],
                            },
                        ]) === null || _b === void 0 ? void 0 : _b.map(function (section) {
                            var _a;
                            return (section ? ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col", variants: fadeIn, onClick: function () { return setActiveTab(section.id); }, whileHover: { y: -5 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-gradient-to-r ".concat(section.color, " p-6 text-white text-center"), children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl mb-2", children: section.icon }), (0, jsx_runtime_1.jsx)("h4", { className: "text-xl font-bold", children: section.title })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6 flex flex-col flex-grow", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 dark:text-gray-300 text-sm mb-4", children: section.description }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-2 mb-4", children: (_a = section.items) === null || _a === void 0 ? void 0 : _a.map(function (item, i) { return (item ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center text-xs text-gray-500 dark:text-gray-400", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" }), item] }, i)) : null); }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-auto pt-4 border-t border-gray-200 dark:border-gray-700", children: (0, jsx_runtime_1.jsx)("span", { className: "text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline", children: "Explore Section \u2192" }) })] })] }, section.id)) : null);
                        }) })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white", variants: fadeIn, children: (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-4 gap-8 text-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-3xl font-bold mb-2", children: "500+" }), (0, jsx_runtime_1.jsx)("div", { className: "text-blue-100", children: "Practice Questions" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-3xl font-bold mb-2", children: "50+" }), (0, jsx_runtime_1.jsx)("div", { className: "text-blue-100", children: "System Design Topics" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-3xl font-bold mb-2", children: "20+" }), (0, jsx_runtime_1.jsx)("div", { className: "text-blue-100", children: "Company Guides" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-3xl font-bold mb-2", children: "95%" }), (0, jsx_runtime_1.jsx)("div", { className: "text-blue-100", children: "Success Rate" })] })] }) })] }));
};
exports.default = OverviewTab;
