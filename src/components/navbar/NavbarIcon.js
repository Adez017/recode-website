"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarIcon;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var navbarConfig_1 = require("../../constants/navbarConfig");
// Type guard to check if props are for dashboard usage
function isDashboardProps(props) {
    return 'icon' in props && 'text' in props && 'active' in props && 'onClick' in props;
}
function NavbarIcon(props) {
    // Handle dashboard usage
    if (isDashboardProps(props)) {
        var icon = props.icon, text = props.text, active = props.active, onClick_1 = props.onClick;
        return ((0, jsx_runtime_1.jsxs)("div", { className: "navbar-icon-item ".concat(active ? 'active' : ''), onClick: onClick_1, role: "button", tabIndex: 0, onKeyDown: function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick_1();
                }
            }, children: [(0, jsx_runtime_1.jsx)("span", { className: "navbar-icon", children: icon }), (0, jsx_runtime_1.jsx)("span", { className: "navbar-text", children: text })] }));
    }
    // Handle navbar config usage
    var name = props.name;
    var IconComponent = navbarConfig_1.NAVBAR_CONFIG[name];
    if (!IconComponent) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("span", { className: "navbar-icon", children: (0, jsx_runtime_1.jsx)(IconComponent, { size: 18, style: { verticalAlign: "middle" } }) }));
}
