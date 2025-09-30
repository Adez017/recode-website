"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.app = void 0;
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyBSiO9d5tHuyyAeUCt37pxDWTT7jPSigaU",
    authDomain: "awesome-github-profiles.firebaseapp.com",
    databaseURL: "https://awesome-github-profiles-default-rtdb.firebaseio.com",
    projectId: "awesome-github-profiles",
    storageBucket: "awesome-github-profiles.firebasestorage.app",
    messagingSenderId: "490821849262",
    appId: "1:490821849262:web:7e97984d98f578b81f9d3f",
    measurementId: "G-WM33JZYEV0"
};
var app = (0, app_1.getApps)().length ? (0, app_1.getApp)() : (0, app_1.initializeApp)(firebaseConfig);
exports.app = app;
var auth = (0, auth_1.getAuth)(app);
exports.auth = auth;
