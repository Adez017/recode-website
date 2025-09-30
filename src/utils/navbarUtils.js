"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNavbarItemHTML = createNavbarItemHTML;
exports.createSimpleNavbarItemHTML = createSimpleNavbarItemHTML;
/**
 * Generates HTML string for navbar items with icons
 * @param iconName - The name of the icon from NAVBAR_CONFIG
 * @param label - The text label for the navbar item
 * @returns HTML string with icon placeholder and label
 */
function createNavbarItemHTML(iconName, label) {
    return "<span id=\"nav-".concat(iconName.toLowerCase(), "\" style=\"display:inline-flex;align-items:center;\"></span> ").concat(label);
}
/**
 * Generates HTML string for simple navbar items with icons (no inline styles)
 * @param iconName - The name of the icon from NAVBAR_CONFIG
 * @param label - The text label for the navbar item
 * @returns HTML string with icon placeholder and label
 */
function createSimpleNavbarItemHTML(iconName, label) {
    return "<span id=\"nav-".concat(iconName.toLowerCase(), "\"></span> ").concat(label);
}
