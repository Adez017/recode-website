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
exports.default = CoursesLanding;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var Head_1 = __importDefault(require("@docusaurus/Head"));
var framer_motion_1 = require("framer-motion");
require("./courses.css");
// Animation variants for consistent animations
var fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
var techTags = [
    "AWS", "Apache Airflow", "Parquet", "Avro", "Microsoft Azure", "Google BigQuery", "CSV", "Databricks", "Azure Data Factory", "Docker", "Kafka", "Google Cloud", "GitHub", "Apache NiFi", "Snowflake", "Looker", "MAGE", "NumPy", "Pandas", "PostgreSQL", "Python", "Apache Spark", "SQL"
];
var partnerLogos = [
    "https://dummyimage.com/80x40/222/fff&text=Samsung",
    "https://dummyimage.com/80x40/333/fff&text=Oracle",
    "https://dummyimage.com/80x40/444/fff&text=Segment",
    "https://dummyimage.com/80x40/555/fff&text=Monday.com",
    "https://dummyimage.com/80x40/666/fff&text=Protonet",
];
var projects = [
    "https://dummyimage.com/200x120/222/fff&text=Project+1",
    "https://dummyimage.com/200x120/333/fff&text=Project+2",
    "https://dummyimage.com/200x120/444/fff&text=Project+3",
    "https://dummyimage.com/200x120/555/fff&text=Project+4",
    "https://dummyimage.com/200x120/555/fff&text=Project+5",
    "https://dummyimage.com/200x120/555/fff&text=Project+6",
    "https://dummyimage.com/200x120/555/fff&text=Project+7",
];
var testimonials = [
    {
        img: "https://dummyimage.com/80x80/222/fff&text=S",
        name: "Sachin",
        review: "Sanjay has been a great support in knowing various career paths and upcoming tech. The call was very crisp but valueable at the same time. For sure I am gonna schedule a call probably next month to give him updates. Thanks a ton Sanjay :)",
        stars: 5,
    },
    {
        img: "https://dummyimage.com/80x80/333/fff&text=KP",
        name: "Kumar Priyanshu",
        review: "I was thoroughly impressed by his clear, engaging communication and deep understanding of my issue. He listened attentively and offered valuable insights and solutions, leaving me extremely satisfied and confident in the guidance I received.",
        stars: 5,
    },
    {
        img: "https://dummyimage.com/80x80/444/fff&text=AV",
        name: "Aman Vohra",
        review: "It was an amazing session with you. And i can't thank you enough for your time and the great and valuable insights you have given me. Thank you so much🙌🏻",
        stars: 5,
    },
];
var courses = [
    {
        number: "01",
        title: "Python for Data Engineering",
        desc: "Learn to harness the power of Python for transforming and processing data at scale in our hands-on 'Python for Data Engineering' course. Build the skills needed to design robust data pipelines and optimize data workflows effectively.",
        img: "https://dummyimage.com/300x150/222/fff&text=Python+for+DE",
    },
    {
        number: "02",
        title: "SQL for Data Engineering",
        desc: "Unlock the potential of data manipulation and management with our 'SQL for Data Engineering' course. Gain proficiency in crafting and optimizing complex queries to build and maintain efficient data pipelines.",
        img: "https://dummyimage.com/300x150/333/fff&text=SQL+for+DE",
    },
    {
        number: "03",
        title: "Data Warehouse with Snowflake",
        desc: "Discover the modern approach to data warehousing using Snowflake in our course. Learn to design, implement, and manage a high-performance data warehouse for seamless analytics and insights.",
        img: "https://dummyimage.com/300x150/444/fff&text=Snowflake",
    },
    {
        number: "04",
        title: "Spark for Data Engineering",
        desc: "Learn to leverage the power of Apache Spark for efficient and scalable data engineering in our comprehensive course. Master the art of processing and transforming data to build robust pipelines and drive data-centric applications.",
        img: "https://dummyimage.com/300x150/555/fff&text=Spark+for+DE",
    },
    {
        number: "05",
        title: "Workflow Orchestration (Airflow, Mage, Prefect)",
        desc: "Explore the world of workflow orchestration with our course covering Airflow, Luigi, Mage, and Prefect. Gain expertise in seamlessly coordinating and automating complex data pipelines for enhanced efficiency and productivity.",
        img: "https://dummyimage.com/300x150/666/fff&text=Workflow+Orchestration",
    },
    {
        number: "06",
        title: "Apache Kafka for DE (Coming Soon)",
        desc: "Dive into the realm of data engineering with Apache Kafka in our course. Learn to build real-time, scalable data pipelines that enable efficient data movement and processing for diverse applications.",
        img: "https://dummyimage.com/300x150/777/fff&text=Kafka+for+DE",
    },
    {
        number: "07",
        title: "Cloud Computing AWS, GCP, Azure (Coming Soon)",
        desc: "Embark on a journey through major cloud platforms with our course on AWS, GCP, and Azure. Acquire the skills to deploy, manage, and optimize cloud-based solutions for diverse business needs.",
        img: "https://dummyimage.com/300x150/888/fff&text=Cloud+Computing",
    },
];
var projectReviews = [
    {
        img: "https://dummyimage.com/100x100/222/fff&text=AP",
        name: "Abhi Patel",
        review: "Excited to share the Spotify End to End ETL pipeline project using AWS and Python...",
    },
    {
        img: "https://dummyimage.com/100x100/333/fff&text=AM",
        name: "Ajosh Mungesan",
        review: "Learning & sharing my Spotify ETL project using Python & AWS...",
    },
    {
        img: "https://dummyimage.com/100x100/444/fff&text=HR",
        name: "Hariharan R",
        review: "Excited to share the Spotify End to End ETL pipeline project using AWS and Python...",
    },
];
var topics = [
    "ETL", "Data Modelling", "SQL", "Data Pipelines", "Cloud Data Warehousing", "Spark", "Databricks", "DataFrames", "RDDs", "PySpark", "Spark SQL", "MLlib", "Spark Streaming", "Cluster Management", "Fault Tolerance", "Big Data", "Apache Hadoop", "Data Ingestion", "Data Transformation", "Data Analytics", "Schema Design", "Machine Learning", "Snowflake", "Data Lake", "Business Intelligence", "Analytics", "OLAP", "Data Architecture", "Python", "Data Wrangling", "Pandas", "NumPy", "Data Visualisation", "Jupyter Notebooks", "Web Scraping", "APIs", "Data Cleaning", "Data Security", "Scalability", "Stored Procedures", "Triggers", "Views", "Normalization", "Relational Databases", "Data Integrity", "Data Consistency", "Query Performance", "Window Functions", "Transactions", "Indexing", "Batch Processing", "Real-Time Processing", "Data Orchestration", "Workflow Automation", "Data Quality", "Data Lineage", "Metadata Management", "Data Cataloging"
];
// Modified stats with numerical values for animation
var stats = [
    { label: "Youtube", value: 160, suffix: "K+" },
    { label: "LinkedIn", value: 100, suffix: "K+" },
    { label: "Twitter", value: 25, suffix: "K+" },
];
var faqs = [
    { q: "Who can enroll in the programs?", a: "Anyone interested in data engineering, from beginners to professionals." },
    { q: "Will I receive a certificate?", a: "Yes, you will receive a certificate upon successful completion of the course." },
    { q: "Is the course in Hindi or English?", a: "Courses are available in both Hindi and English." },
    { q: "How can I contact you if I have questions?", a: "You can contact us via the contact form or email provided on the website." },
    { q: "Do I need to learn anything before this course starts?", a: "No prior experience is required. All fundamentals will be covered." },
];
function CoursesContent() {
    var _a = (0, react_1.useState)(false), showAllTopics = _a[0], setShowAllTopics = _a[1];
    var _b = (0, react_1.useState)({ open: false, content: "" }), modal = _b[0], setModal = _b[1];
    var _c = (0, react_1.useState)(null), openFaq = _c[0], setOpenFaq = _c[1];
    var _d = (0, react_1.useState)(0), activeProjectIndex = _d[0], setActiveProjectIndex = _d[1];
    var _e = (0, react_1.useState)({
        Youtube: 0,
        LinkedIn: 0,
        Twitter: 0
    }), animatedStats = _e[0], setAnimatedStats = _e[1];
    var _f = (0, react_1.useState)(false), isStatsVisible = _f[0], setIsStatsVisible = _f[1];
    var projectCarouselRef = (0, react_1.useRef)(null);
    var techTagsRef = (0, react_1.useRef)(null);
    var statsRef = (0, react_1.useRef)(null);
    // Horizontal scrolling for tech tags
    (0, react_1.useEffect)(function () {
        if (techTagsRef.current) {
            var scrollInterval_1 = setInterval(function () {
                if (techTagsRef.current) {
                    var currentScroll = techTagsRef.current.scrollLeft;
                    var maxScroll = techTagsRef.current.scrollWidth - techTagsRef.current.clientWidth;
                    if (currentScroll >= maxScroll) {
                        techTagsRef.current.scrollLeft = 0;
                    }
                    else {
                        techTagsRef.current.scrollLeft += 1;
                    }
                }
            }, 30);
            return function () { return clearInterval(scrollInterval_1); };
        }
    }, []);
    // Set up automatic carousel rotation
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setActiveProjectIndex(function (prevIndex) {
                return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
            });
        }, 5000);
        return function () { return clearInterval(interval); };
    }, []);
    // Animate stats counter when visible
    (0, react_1.useEffect)(function () {
        if (!statsRef.current)
            return;
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && !isStatsVisible) {
                setIsStatsVisible(true);
                // Start animation for each stat
                stats.forEach(function (stat) {
                    var label = stat.label, value = stat.value;
                    var startValue = 0;
                    var duration = 2000; // 2 seconds
                    var increment = value / (duration / 16); // ~60fps
                    var timer = setInterval(function () {
                        startValue += increment;
                        if (startValue >= value) {
                            clearInterval(timer);
                            setAnimatedStats(function (prev) {
                                var _a;
                                return (__assign(__assign({}, prev), (_a = {}, _a[label] = value, _a)));
                            });
                        }
                        else {
                            setAnimatedStats(function (prev) {
                                var _a;
                                return (__assign(__assign({}, prev), (_a = {}, _a[label] = Math.floor(startValue), _a)));
                            });
                        }
                    }, 16);
                });
            }
        }, { threshold: 0.1 });
        observer.observe(statsRef.current);
        return function () { return observer.disconnect(); };
    }, [isStatsVisible]);
    var handleCourseClick = function (course) {
        if (course.title.includes("Coming Soon")) {
            setModal({ open: true, content: "This course is coming soon!" });
        }
        else {
            window.location.href = "/courses/".concat(course.title.toLowerCase().replace(/ /g, "-"));
        }
    };
    var handleAction = function (type) {
        setModal({ open: true, content: type === "enroll" ? "Enrollment flow coming soon!" : "Purchase flow coming soon!" });
    };
    var scrollProjects = function (dir) {
        var newIndex = activeProjectIndex + dir;
        if (newIndex >= 0 && newIndex < projects.length) {
            setActiveProjectIndex(newIndex);
        }
        else if (newIndex < 0) {
            // Loop to the end if going backwards from first slide
            setActiveProjectIndex(projects.length - 1);
        }
        else {
            // Loop to the beginning if going forward from last slide
            setActiveProjectIndex(0);
        }
    };
    var goToProjectSlide = function (index) {
        setActiveProjectIndex(index);
    };
    var handleInfo = function (info) { return setModal({ open: true, content: info }); };
    return ((0, jsx_runtime_1.jsxs)(Layout_1.default, { title: "Courses", description: "Explore our available courses and resources.", children: [(0, jsx_runtime_1.jsxs)(Head_1.default, { children: [(0, jsx_runtime_1.jsx)("meta", { name: "description", content: "Landing page for all available courses." }), (0, jsx_runtime_1.jsx)("style", { children: "\n            /* Hide scrollbar for carousel */\n            .hide-scrollbar::-webkit-scrollbar {\n              display: none;\n            }\n            .hide-scrollbar {\n              -ms-overflow-style: none;\n              scrollbar-width: none;\n            }\n\n            /* Custom animations */\n            @keyframes float {\n              0% { transform: translateY(0px); }\n              50% { transform: translateY(-10px); }\n              100% { transform: translateY(0px); }\n            }\n\n            @keyframes slide {\n              0% { transform: translateX(0); }\n              100% { transform: translateX(-100%); }\n            }\n\n            .float-animation {\n              animation: float 3s ease-in-out infinite;\n            }\n\n            .animate-slide {\n              display: inline-block;\n              white-space: nowrap;\n              padding-right: 100%;\n            }\n\n            /* Fade-in animation */\n            @keyframes fadeIn {\n              from { opacity: 0; transform: translateY(20px); }\n              to { opacity: 1; transform: translateY(0); }\n            }\n\n            .animate-fadeIn {\n              animation: fadeIn 0.5s ease-out forwards;\n            }\n\n            /* Scale-in animation */\n            @keyframes scaleIn {\n              from { opacity: 0; transform: scale(0.9); }\n              to { opacity: 1; transform: scale(1); }\n            }\n\n            .animate-scaleIn {\n              animation: scaleIn 0.3s ease-out forwards;\n            }\n\n            /* Slide-in animation */\n            @keyframes slideInUp {\n              from { opacity: 0; transform: translateY(30px); }\n              to { opacity: 1; transform: translateY(0); }\n            }\n\n            .animate-slideInUp {\n              animation: slideInUp 0.5s ease-out forwards;\n            }\n\n            /* Pulse animation */\n            @keyframes pulse {\n              0% { transform: scale(1); }\n              50% { transform: scale(1.05); }\n              100% { transform: scale(1); }\n            }\n\n            .animate-pulse {\n              animation: pulse 2s infinite;\n            }\n          " })] }), (0, jsx_runtime_1.jsxs)("main", { className: "courses-page min-h-screen transition-all duration-500", children: [modal.open && ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 courses-fade-in p-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "courses-modal p-6 md:p-8 max-w-md w-full text-center relative courses-scale-in", children: [(0, jsx_runtime_1.jsx)("button", { className: "courses-icon-button absolute top-3 right-3 text-xl md:text-2xl transition-transform hover:scale-110", onClick: function () { return setModal({ open: false, content: "" }); }, children: "\u00D7" }), (0, jsx_runtime_1.jsx)("div", { className: "courses-body pt-4", children: modal.content })] }) })), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.section, { className: "courses-hero py-16 md:py-24 px-4 text-center relative overflow-hidden transition-all duration-500 border-b", initial: "hidden", animate: "visible", variants: {
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "courses-container", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.h1, { className: "courses-heading-1 courses-text-gradient mb-6 md:mb-8 relative z-10 tracking-tight", variants: fadeIn, children: ["Transform Your Career", (0, jsx_runtime_1.jsx)("br", { className: "hidden md:block" }), (0, jsx_runtime_1.jsx)("span", { className: "block md:inline", children: "in Data Engineering" })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full flex justify-center", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.p, { className: "courses-text-secondary courses-body-large max-w-2xl leading-relaxed font-medium mb-8 md:mb-12 text-center", variants: fadeIn, children: ["Master the art of data engineering with industry-leading courses designed for", ' ', (0, jsx_runtime_1.jsx)("span", { className: "font-bold courses-text-gradient", children: "modern tech careers" }), "."] }) }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 max-w-md md:max-w-none mx-auto", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("button", { className: "courses-button-primary group relative px-8 md:px-10 py-3 md:py-4 overflow-hidden rounded-2xl font-bold text-base md:text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 border border-blue-400/20 courses-backdrop-blur", onClick: function () { return handleAction("enroll"); }, children: (0, jsx_runtime_1.jsxs)("span", { className: "relative z-10 flex items-center justify-center gap-2", children: ["Explore Courses", (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) })] }) }), (0, jsx_runtime_1.jsx)("button", { className: "courses-button-secondary group relative px-8 md:px-10 py-3 md:py-4 overflow-hidden rounded-2xl font-bold text-base md:text-lg shadow-2xl transition-all duration-300 hover:scale-105", onClick: function () { return handleAction("curriculum"); }, children: (0, jsx_runtime_1.jsxs)("span", { className: "relative z-10 flex items-center justify-center gap-2", children: ["View Curriculum", (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] }) })] })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "courses-container", variants: fadeIn, children: [(0, jsx_runtime_1.jsx)("div", { ref: techTagsRef, className: "flex overflow-x-auto courses-hide-scrollbar gap-2 mb-8 pb-4 whitespace-nowrap", style: { scrollBehavior: 'smooth' }, children: (0, jsx_runtime_1.jsx)("div", { className: "flex gap-2 px-4 md:px-0", children: techTags.map(function (tag, idx) { return ((0, jsx_runtime_1.jsx)("span", { className: "courses-topic-tag flex-shrink-0", children: tag }, idx)); }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-8", children: [(0, jsx_runtime_1.jsx)("h3", { className: "courses-text-secondary courses-body text-center font-medium mb-6", children: "Students now available at" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap justify-center items-center gap-6 md:gap-8", children: partnerLogos.map(function (logo, idx) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.img, { src: logo, alt: "Partner Logo", className: "h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity", whileHover: { scale: 1.1 }, transition: { type: "spring", stiffness: 400, damping: 10 } }, idx)); }) })] })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "courses-section py-16 md:py-24 px-4 relative overflow-hidden transition-all duration-500 border-b", children: [(0, jsx_runtime_1.jsx)("div", { className: "courses-bg-overlay absolute inset-0" }), (0, jsx_runtime_1.jsxs)("div", { className: "courses-container", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "courses-heading-2 courses-gradient-text text-center mb-12 md:mb-16 tracking-tight leading-tight", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: "Explore over 14+ extensive projects" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "relative z-10 max-w-2xl mx-auto", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.2 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("button", { className: "courses-nav-button absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 shadow-xl transform transition-all duration-300 hover:scale-110", onClick: function () { return scrollProjects(-1); }, children: "<" }), (0, jsx_runtime_1.jsx)("div", { ref: projectCarouselRef, className: "overflow-hidden courses-hide-scrollbar mx-12 md:mx-16", children: (0, jsx_runtime_1.jsx)("div", { className: "flex transition-transform duration-500 ease-in-out", style: { transform: "translateX(-".concat(activeProjectIndex * 100, "%)") }, children: projects.map(function (img, idx) { return ((0, jsx_runtime_1.jsx)("div", { className: "min-w-full flex justify-center px-2 md:px-4", style: { width: '100%', flexShrink: 0 }, children: (0, jsx_runtime_1.jsx)("img", { src: img, alt: "Project ".concat(idx + 1), className: "rounded-xl shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105 cursor-pointer border-2 border-gray-700/50 hover:border-blue-500/50 w-full max-w-xs md:max-w-sm h-auto", style: { aspectRatio: '16/10' } }) }, idx)); }) }) }), (0, jsx_runtime_1.jsx)("button", { className: "courses-nav-button absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 shadow-xl transform transition-all duration-300 hover:scale-110", onClick: function () { return scrollProjects(1); }, children: ">" })] }), (0, jsx_runtime_1.jsx)("div", { className: "courses-carousel-indicators mt-6", children: projects.map(function (_, idx) { return ((0, jsx_runtime_1.jsx)("button", { className: "courses-carousel-indicator ".concat(idx === activeProjectIndex ? 'active' : ''), onClick: function () { return goToProjectSlide(idx); } }, idx)); }) })] })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "courses-section py-16 md:py-24 px-4 relative overflow-hidden transition-all duration-500 border-b", children: [(0, jsx_runtime_1.jsx)("div", { className: "courses-bg-overlay absolute inset-0" }), (0, jsx_runtime_1.jsxs)("div", { className: "courses-container-wide", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "courses-heading-2 courses-gradient-text text-center mb-12 md:mb-16 tracking-tight leading-tight", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: "Kind Words from Our Students" }), (0, jsx_runtime_1.jsx)("div", { className: "courses-grid courses-grid-3 relative z-10", children: testimonials.map(function (t, idx) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "courses-card group cursor-pointer flex flex-col items-center text-center", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: idx * 0.1 }, whileHover: { scale: 1.02 }, onClick: function () { return handleInfo(t.review); }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative w-20 h-20 md:w-24 md:h-24 mb-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-purple-500" }), (0, jsx_runtime_1.jsx)("img", { src: t.img, alt: t.name, className: "relative w-full h-full rounded-full object-cover border-3 transition-all duration-300 z-10 shadow-lg border-blue-400/50 group-hover:border-blue-400 shadow-blue-500/30" })] }), (0, jsx_runtime_1.jsx)("h4", { className: "courses-heading-4 courses-text-gradient mb-4", children: t.name }), (0, jsx_runtime_1.jsx)("div", { className: "flex mb-4 gap-1", children: Array.from({ length: t.stars }).map(function (_, i) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { className: "text-yellow-400 text-lg", initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { delay: i * 0.1 }, children: "\u2605" }, i)); }) }), (0, jsx_runtime_1.jsx)("p", { className: "courses-body-small text-center line-clamp-4 transition-colors duration-300 leading-relaxed courses-text-secondary", children: t.review })] }, idx)); }) })] })] }), (0, jsx_runtime_1.jsx)("section", { className: "courses-section py-16 md:py-24 px-4 transition-all duration-500 border-b", children: (0, jsx_runtime_1.jsxs)("div", { className: "courses-container-wide", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "courses-heading-2 courses-gradient-text text-center mb-6 tracking-tight leading-tight", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: "Courses Available" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h3, { className: "courses-body-large courses-text-secondary text-center mb-12 md:mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.1 }, children: "Courses Covered In the Program" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col lg:flex-row w-full gap-8 lg:gap-0", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-1 flex flex-col gap-6 lg:gap-8", children: courses.filter(function (_, i) { return i % 2 === 0; }).map(function (course, idx) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "courses-timeline-card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 cursor-pointer group", onClick: function () { return handleCourseClick(course); }, initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: idx * 0.1 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative w-full sm:w-32 md:w-40 h-32 sm:h-20 md:h-24 overflow-hidden rounded-lg flex-shrink-0", children: [(0, jsx_runtime_1.jsx)("img", { src: course.img, alt: course.title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 min-w-0", children: [(0, jsx_runtime_1.jsx)("h3", { className: "courses-heading-4 courses-text-gradient mb-2 md:mb-3 line-clamp-2", children: course.title }), (0, jsx_runtime_1.jsx)("p", { className: "courses-body-small courses-text-secondary line-clamp-2 md:line-clamp-3 leading-relaxed", children: course.desc })] }), (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5 md:w-6 md:h-6 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300 courses-text-muted flex-shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] }, course.number)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "hidden lg:flex flex-col items-center mx-6 xl:mx-8 relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 bottom-0 w-1 left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-indigo-500" }), courses.map(function (course, idx) { return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex flex-col items-center relative z-10", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.3, delay: idx * 0.1 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center rounded-full border-4 text-lg xl:text-2xl font-bold mb-2 bg-gradient-to-br from-purple-600 to-indigo-600 border-purple-400 text-white shadow-lg shadow-purple-500/50", children: course.number }), idx !== courses.length - 1 && (0, jsx_runtime_1.jsx)("div", { className: "w-1 h-12 xl:h-16 bg-transparent" })] }) }, course.number)); }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { className: "courses-button-primary mt-8 xl:mt-12 py-3 xl:py-4 px-8 xl:px-10 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 relative z-10", onClick: function () { return handleAction("enroll"); }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.8 }, whileHover: { y: -5 }, whileTap: { y: 0 }, children: "Enroll now" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 flex flex-col gap-6 lg:gap-8", children: courses.filter(function (_, i) { return i % 2 === 1; }).map(function (course, idx) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "courses-timeline-card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 cursor-pointer group", onClick: function () { return handleCourseClick(course); }, initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: idx * 0.1 }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1 min-w-0 order-2 sm:order-1", children: [(0, jsx_runtime_1.jsx)("h3", { className: "courses-heading-4 courses-text-gradient mb-2 md:mb-3 line-clamp-2", children: course.title }), (0, jsx_runtime_1.jsx)("p", { className: "courses-body-small courses-text-secondary line-clamp-2 md:line-clamp-3 leading-relaxed", children: course.desc })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative w-full sm:w-32 md:w-40 h-32 sm:h-20 md:h-24 overflow-hidden rounded-lg flex-shrink-0 order-1 sm:order-2", children: [(0, jsx_runtime_1.jsx)("img", { src: course.img, alt: course.title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }), (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5 md:w-6 md:h-6 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300 courses-text-muted flex-shrink-0 order-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] }, course.number)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:hidden mt-8 flex justify-center", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { className: "courses-button-primary py-3 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105", onClick: function () { return handleAction("enroll"); }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.8 }, whileHover: { y: -3 }, whileTap: { y: 0 }, children: "Enroll now" }) })] })] }) }), (0, jsx_runtime_1.jsx)("section", { className: "courses-stats-section py-16 md:py-20 px-4 transition-all duration-500 border-b", children: (0, jsx_runtime_1.jsxs)("div", { className: "courses-container-wide", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "courses-heading-2 courses-text-primary text-center mb-8 md:mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: "Project reviews from students" }), (0, jsx_runtime_1.jsx)("div", { className: "courses-grid courses-grid-3 mb-8 md:mb-12", children: projectReviews.map(function (review, idx) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "courses-card flex flex-col items-center text-center cursor-pointer group", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: idx * 0.1 }, whileHover: { scale: 1.02 }, onClick: function () { return handleInfo(review.review); }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-green-400 to-emerald-500" }), (0, jsx_runtime_1.jsx)("img", { src: review.img, alt: review.name, className: "relative w-full h-full rounded-full object-cover border-3 border-green-400 group-hover:border-green-300 transition-all duration-300 z-10 shadow-lg" })] }), (0, jsx_runtime_1.jsx)("h4", { className: "courses-heading-4 courses-text-gradient mb-3 md:mb-4", children: review.name }), (0, jsx_runtime_1.jsx)("p", { className: "courses-body-small courses-text-secondary text-center leading-relaxed line-clamp-4", children: review.review })] }, idx)); }) })] }) }), (0, jsx_runtime_1.jsxs)("section", { className: "courses-section py-16 md:py-20 px-4 transition-all duration-500 border-b", children: [(0, jsx_runtime_1.jsxs)("div", { className: "courses-container-wide", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h3, { className: "courses-heading-3 courses-text-primary text-center mb-6 md:mb-8", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: "100+ topics taught..." }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "flex flex-wrap justify-center gap-2 md:gap-3 mb-6 transition-all duration-500 ".concat(showAllTopics ? 'max-h-none' : 'max-h-32 md:max-h-40 overflow-hidden'), initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.1 }, children: (showAllTopics ? topics : topics.slice(0, 20)).map(function (topic, idx) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { className: "courses-topic-tag", whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 400, damping: 10 }, children: topic }, idx)); }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "flex justify-center mb-8 md:mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.2 }, children: (0, jsx_runtime_1.jsx)("button", { className: "courses-button-ghost px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-105", onClick: function () { return setShowAllTopics(function (v) { return !v; }); }, children: showAllTopics ? "Show less" : "Show more" }) })] }), (0, jsx_runtime_1.jsx)("div", { ref: statsRef, className: "courses-grid courses-grid-3 mt-8 md:mt-12", children: stats.map(function (stat, idx) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "courses-stat-card group text-center", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: idx * 0.1 }, whileHover: { scale: 1.02 }, children: (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 flex justify-center items-baseline courses-text-gradient", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { className: "inline-block", initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 }, children: isStatsVisible ? animatedStats[stat.label] : 0 }), (0, jsx_runtime_1.jsx)("span", { className: "inline-block ml-1 text-lg md:text-xl lg:text-2xl", children: stat.suffix })] }), (0, jsx_runtime_1.jsx)("div", { className: "courses-body-large courses-text-secondary font-semibold transition-colors duration-300 mb-4 md:mb-6", children: stat.label }), (0, jsx_runtime_1.jsx)("div", { className: "h-2 w-full rounded-full overflow-hidden bg-gradient-to-r from-gray-200 to-gray-300", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "h-full bg-gradient-to-r from-blue-500 to-purple-500", initial: { width: "0%" }, animate: { width: isStatsVisible ? "100%" : "0%" }, transition: { duration: 1, delay: idx * 0.2 } }) })] }) }, idx)); }) })] }), (0, jsx_runtime_1.jsx)("section", { className: "courses-faq-section py-16 md:py-20 px-4 transition-all duration-500 border-b", children: (0, jsx_runtime_1.jsxs)("div", { className: "courses-container", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "courses-heading-2 courses-text-primary text-center mb-8 md:mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: "Commonly asked questions" }), (0, jsx_runtime_1.jsx)("div", { className: "max-w-3xl mx-auto", children: faqs.map(function (faq, idx) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "courses-faq-item mb-4 md:mb-6", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: idx * 0.1 }, children: [(0, jsx_runtime_1.jsxs)("button", { className: "courses-faq-button w-full text-left py-4 md:py-6 px-4 md:px-6 courses-body md:courses-body-large font-semibold flex justify-between items-center focus:outline-none transition-all duration-300", onClick: function () { return setOpenFaq(openFaq === idx ? null : idx); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "pr-4", children: faq.q }), (0, jsx_runtime_1.jsx)("span", { className: "transform transition-transform duration-300 text-xl md:text-2xl flex-shrink-0", style: { transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0)' }, children: "+" })] }), (0, jsx_runtime_1.jsx)("div", { className: "transition-all duration-300 overflow-hidden", style: {
                                                    maxHeight: openFaq === idx ? '500px' : '0',
                                                    opacity: openFaq === idx ? 1 : 0
                                                }, children: (0, jsx_runtime_1.jsx)("div", { className: "courses-faq-answer py-4 md:py-6 px-4 md:px-6 courses-body leading-relaxed", children: faq.a }) })] }, idx)); }) })] }) })] })] }));
}
function CoursesLanding() {
    return (0, jsx_runtime_1.jsx)(CoursesContent, {});
}
