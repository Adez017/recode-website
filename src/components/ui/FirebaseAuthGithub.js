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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var firebase_1 = require("../../lib/firebase");
var auth_1 = require("firebase/auth");
var uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: auth_1.GithubAuthProvider.PROVIDER_ID,
            // You can add scopes and custom parameters here if needed
        },
    ],
    callbacks: {
        signInSuccessWithAuthResult: function () { return false; }, // Prevents redirect
    },
};
var FirebaseAuthGithub = function () {
    var _a = (0, react_1.useState)(null), user = _a[0], setUser = _a[1];
    (0, react_1.useEffect)(function () {
        var unregisterAuthObserver = firebase_1.auth.onAuthStateChanged(function (user) { return setUser(user); });
        return function () { return unregisterAuthObserver(); };
    }, []);
    if (user) {
        return ((0, jsx_runtime_1.jsxs)("div", { style: { textAlign: 'center' }, className: 'flex justify-center items-center gap-5 p-0', children: [(0, jsx_runtime_1.jsx)("img", { src: user.photoURL || '', alt: "avatar", style: { width: 48, borderRadius: '50%', border: '2px solid #000' } }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("button", { onClick: function () { return firebase_1.auth.signOut(); }, className: "bg-gray-900 hover:bg-gray-700 text-white px-4 py-1 rounded flex items-center gap-2 transition-colors duration-200 shadow-md font-semibold", children: [(0, jsx_runtime_1.jsxs)("svg", { height: "20", width: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), (0, jsx_runtime_1.jsx)("polyline", { points: "16 17 21 12 16 7" }), (0, jsx_runtime_1.jsx)("line", { x1: "21", y1: "12", x2: "9", y2: "12" })] }), "Sign out"] })] }));
    }
    var handleGithubSignIn = function () { return __awaiter(void 0, void 0, void 0, function () {
        var provider, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provider = new auth_1.GithubAuthProvider();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, auth_1.signInWithPopup)(firebase_1.auth, provider)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('GitHub sign-in error:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)("div", { style: { textAlign: 'center' }, className: 'flex justify-center items-center gap-5 p-0', children: (0, jsx_runtime_1.jsxs)("button", { onClick: handleGithubSignIn, className: "bg-black text-white px-4 py-2 rounded flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("svg", { height: "24", width: "24", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" }) }), (0, jsx_runtime_1.jsx)("span", { className: "github-text", children: "Sign in with GitHub" })] }) }));
};
exports.default = FirebaseAuthGithub;
