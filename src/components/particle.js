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
var React = __importStar(require("react"));
var react_1 = __importStar(require("@tsparticles/react"));
var react_2 = require("react");
var slim_1 = require("@tsparticles/slim");
var ParticlesComponent = function (props) {
    var _a = (0, react_2.useState)(false), init = _a[0], setInit = _a[1];
    (0, react_2.useEffect)(function () {
        (0, react_1.initParticlesEngine)(function (engine) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, slim_1.loadSlim)(engine)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }).then(function () {
            setInit(true);
        });
    }, []);
    var particlesLoaded = function (container) {
        console.log(container);
    };
    var options = (0, react_2.useMemo)(function () { return ({
        fullScreen: {
            enable: false, // Important: disable built-in fullscreen
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                grab: {
                    distance: 150,
                },
            },
        },
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#FFFFFF",
            },
            shape: {
                type: "triangle",
                stroke: {
                    width: 0,
                    color: "#FFD700",
                },
                polygon: {
                    nb_sides: 12,
                },
            },
            links: {
                color: "#778899",
                distance: 180,
                enable: true,
                opacity: 0.8,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 5,
                straight: false,
            },
            opacity: {
                value: 0.7,
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }); }, []);
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: -1, // Critical: ensures it's in the background
            pointerEvents: "none", // Ensures it doesn't block clicks
        }, children: (0, jsx_runtime_1.jsx)(react_1.default, { id: props.id, options: options }) }));
};
exports.default = ParticlesComponent;
