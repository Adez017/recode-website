"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Layout_1 = __importDefault(require("@theme/Layout"));
var styled_components_1 = __importDefault(require("styled-components"));
// Styled Components
var LicensingContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 1.6;\n  font-family: 'Open Sans', sans-serif;\n  text-align: justify;\n"], ["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 1.6;\n  font-family: 'Open Sans', sans-serif;\n  text-align: justify;\n"])));
var Title = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 24px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  line-height: 1.6;\n  text-align: center;\n  font-size: 27px;\n"], ["\n  margin-bottom: 24px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  line-height: 1.6;\n  text-align: center;\n  font-size: 27px;\n"])));
var SubTitle = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  font-weight: 700;\n"], ["\n  margin-bottom: 20px;\n  font-weight: 700;\n"])));
var Content = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 20px;\n"], ["\n  margin-bottom: 20px;\n"])));
// Licensing Component
var Licensing = function () {
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { title: "Licensing", description: "Licensing information for RecodeHive", children: (0, jsx_runtime_1.jsxs)(LicensingContainer, { children: [(0, jsx_runtime_1.jsx)(Title, { children: "Licensing" }), (0, jsx_runtime_1.jsx)(Content, { children: "Welcome to RecodeHive. This project is licensed under the MIT License. This page outlines the terms of the license and provides details on how you can use, modify, and distribute our project." }), (0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsx)(SubTitle, { children: "MIT License" }), (0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Copyright (c) 2025 recodehive" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {})] })] })] }) }));
};
exports.default = Licensing;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
