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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var fi_1 = require("react-icons/fi");
var framer_motion_1 = require("framer-motion");
var theme_common_1 = require("@docusaurus/theme-common"); // Docusaurus theme detection
var faqData = [
    {
        question: "What is the recode hive?",
        answer: "Recode Hive is a comprehensive platform focused on providing students with the right resources at the right time. We help you focus on important topics and tools used in current industry standards compared to traditional university curricula. This includes data engineering tutorials, blogs, and opportunities for open-source contribution with earning potential. <br><br>🌐 <a href='https://recodehive.com/' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Visit our official website</a> | 📚 <a href='/docs/intro' class='text-indigo-600 hover:text-indigo-800 underline'>Explore our documentation</a>",
    },
    {
        question: "What features do the recode hive provides?",
        answer: "We provide students with comprehensive learning opportunities through our <a href='https://github.com/recodehive' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Recode Hive GitHub organization</a>, which includes 1000+ data-related projects. Our community is non-profit and inclusive for all, offering:<br><br>• <strong>Learning Resources:</strong> Tutorials, documentation, and hands-on projects<br>• <strong>Open Source Contribution:</strong> Real-world project experience<br>• <strong>Earning Opportunities:</strong> GitHub sponsorship program<br>• <strong>Community Support:</strong> Discord community and mentorship<br><br>🚀 <a href='https://github.com/recodehive' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Browse our GitHub projects</a>",
    },
    {
        question: "How can I contribute tutorials?",
        answer: "Contributing tutorials is straightforward! Our community is completely open-source, and the entire codebase is available on GitHub for forking and contributing. Whether you're a beginner or experienced developer, we welcome your contributions.<br><br><strong>Getting Started:</strong><br>1. Fork our <a href='https://github.com/recodehive/recode-website' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>main repository</a><br>2. Check our <a href='/docs/GitHub/Maintainer-guide/github-labels' class='text-indigo-600 hover:text-indigo-800 underline'>contribution guidelines</a><br>3. Create your tutorial content<br>4. Submit a pull request<br><br>📖 <a href='/docs/GitHub/GitHub-basics/first-opensource-code' class='text-indigo-600 hover:text-indigo-800 underline'>Learn how to make your first contribution</a>",
    },
    {
        question: "What all resources are available here?",
        answer: "We offer a comprehensive range of learning resources across multiple technologies:<br><br><strong>Currently Available:</strong><br>• 🐍 <a href='/docs/python' class='text-indigo-600 hover:text-indigo-800 underline'>Python Tutorials</a> - From basics to advanced concepts<br>• 🗄️ <a href='/docs/sql' class='text-indigo-600 hover:text-indigo-800 underline'>SQL Resources</a> - Database management and queries<br>• 🐙 <a href='/docs/GitHub' class='text-indigo-600 hover:text-indigo-800 underline'>GitHub Guides</a> - Version control and collaboration<br>• 📮 <a href='/docs/Technical' class='text-indigo-600 hover:text-indigo-800 underline'>Postman API Testing</a><br>• ⚛️ <a href='/docs/Nextjs' class='text-indigo-600 hover:text-indigo-800 underline'>Next.js Development</a><br><br><strong>Coming Soon:</strong> Advanced data tools tutorials, cloud technologies, and more!",
    },
    {
        question: "How can I contribute as a beginner?",
        answer: "We've designed our community specifically with beginners in mind! Contributing to open-source can seem intimidating, but we provide a supportive environment for learning.<br><br><strong>Beginner-Friendly Steps:</strong><br>1. Start with our <a href='/docs/GitHub/GitHub-basics' class='text-indigo-600 hover:text-indigo-800 underline'>GitHub Basics guide</a><br>2. Join our <a href='https://discord.gg/Yxv9RA3r' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Discord community</a> for support<br>3. Look for 'good first issue' labels in our repositories<br>4. Follow our <a href='https://github.com/recodehive/recode-website#getting-started' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>step-by-step contribution guide</a><br><br>🎯 <a href='/docs/GitHub/GitHub-basics/first-opensource-code' class='text-indigo-600 hover:text-indigo-800 underline'>Make your first open-source contribution</a>",
    },
    {
        question: "How can I earn from this recode hive organisation?",
        answer: "We offer earning opportunities through our GitHub sponsorship program! Every week, we sponsor contributors who make valuable open-source contributions.<br><br><strong>Sponsorship Details:</strong><br>• Weekly sponsorship program<br>• Earning range: ₹100 to ₹500 per week<br>• Based on contribution quality and impact<br>• Open to all community members<br><br><strong>How to Qualify:</strong><br>• Make meaningful contributions to our projects<br>• Follow contribution guidelines<br>• Engage with the community<br><br>💰 <a href='https://github.com/sponsors/recodehive' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Learn more about GitHub Sponsorship</a> | 🚀 <a href='https://github.com/recodehive' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Start contributing today</a>",
    },
    {
        question: "How will I stay up to date with the latest news from this organisation?",
        answer: "Stay connected with Recode Hive through multiple channels to never miss important updates:<br><br><strong>📧 Newsletter:</strong> Our primary communication channel providing weekly updates on community happenings, new resources, and opportunities.<br><br><strong>Social Media:</strong><br>• 📱 <a href='https://www.instagram.com/nomad_brains/' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Instagram</a> - Visual updates and behind-the-scenes<br>• 🐦 <a href='https://x.com/sanjay_kv_' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Twitter</a> - Quick updates and tech insights<br>• 💼 <a href='https://www.linkedin.com/in/sanjay-k-v/' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>LinkedIn</a> - Professional updates<br>• 🎥 <a href='https://www.youtube.com/@RecodeHive' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>YouTube</a> - Video tutorials and content<br><br>📬 <a href='https://recodehive.substack.com/' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline font-semibold'>Subscribe to our Newsletter</a> | 💬 <a href='https://discord.gg/Yxv9RA3r' target='_blank' rel='noopener noreferrer' class='text-indigo-600 hover:text-indigo-800 underline'>Join our Discord</a>",
    },
];
var FAQs = function () {
    var _a = (0, react_1.useState)(null), activeIndex = _a[0], setActiveIndex = _a[1];
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isDark = colorMode === "dark";
    var toggleAccordion = function (index) {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return ((0, jsx_runtime_1.jsx)("section", { className: "py-8 transition-colors duration-300 ".concat(isDark ? "bg-[#121212]" : "bg-gray-50"), children: (0, jsx_runtime_1.jsx)("div", { className: "mx-auto px-2 sm:px-4 lg:px-6", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center items-center gap-x-8 gap-y-12 xl:gap-28 lg:flex-row lg:justify-between", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-8 lg:mb-16", children: [(0, jsx_runtime_1.jsx)("h6", { className: "text-lg text-center lg:text-left font-medium text-indigo-600 mb-2", children: "FAQs" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-4xl text-center lg:text-left font-bold ".concat(isDark ? "text-gray-100" : "text-gray-900", " leading-snug"), children: "Looking for answers?" }), (0, jsx_runtime_1.jsx)("p", { className: "".concat(isDark ? "text-gray-400" : "text-gray-600", " text-center lg:text-left"), children: "Find answers to the most common questions about Recode Hive." })] }), (0, jsx_runtime_1.jsx)("div", { className: "columns-1 md:columns-2 md:gap-x-6", children: faqData.map(function (faq, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "accordion h-fit border-gray-200 dark:border-gray-700 pb-4 mb-4 break-inside-avoid", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, children: [(0, jsx_runtime_1.jsxs)("button", { className: "accordion-toggle group flex justify-between items-center text-lg font-medium w-full transition-all duration-300 \n                      ".concat(isDark
                                            ? "text-gray-200 bg-gray-800 hover:text-indigo-400"
                                            : "text-gray-700 bg-gray-100 hover:text-indigo-600", " \n                      p-4 rounded-lg focus:outline-none"), onClick: function () { return toggleAccordion(index); }, children: [faq.question, (0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { className: "transform transition-transform duration-300", animate: { rotate: activeIndex === index ? 180 : 0 }, children: (0, jsx_runtime_1.jsx)(fi_1.FiChevronDown, { size: 22 }) })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "accordion-content overflow-hidden", initial: { height: 0, opacity: 0 }, animate: {
                                            height: activeIndex === index ? "auto" : 0,
                                            opacity: activeIndex === index ? 1 : 0,
                                        }, transition: { duration: 0.3, ease: "easeInOut" }, children: (0, jsx_runtime_1.jsx)("div", { className: "mt-2 text-base transition-colors duration-200 ".concat(isDark ? "text-gray-300" : "text-gray-900"), style: {
                                                color: isDark ? '#d1d5db' : '#111827'
                                            }, dangerouslySetInnerHTML: {
                                                __html: faq.answer.replace(/<strong>/g, "<strong style=\"color: ".concat(isDark ? '#f3f4f6' : '#000000', "; font-weight: 600;\">")).replace(/<a /g, "<a style=\"color: ".concat(isDark ? '#818cf8' : '#4f46e5', ";\" "))
                                            } }) })] }, index)); }) })] }) }) }) }));
};
exports.default = FAQs;
