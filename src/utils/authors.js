"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorNames = exports.authorsMap = void 0;
exports.authorsMap = {
    "ajay-dhangar": "Ajay Dhangar",
    "sanjay-kv": "Sanjay Viswanthan",
    "hitesh-gahanolia": "Hitesh Gahanolia",
    "dharshibalasubramaniyam": "Sowmiya Venketashan",
    "abhijith-m-s": "Abhijith M S",
    "khushi-kalra": "Khushi Kalra",
    "nayanikamukherjee": "Nayanika Mukherjee",
    "pujan-sarkar": "Pujan Sarkar",
    "mohitmuktikant": "Mohit Muktikant",
    "santhosh-siddhardha": "Lingamuneni Santhosh Siddhardha",
    "akshitha-chiluka": "Akshitha Chiluka",
    "Aditya-Singh-Rathore": "Aditya Singh Rathore",
};
var getAuthorNames = function (authorIds) {
    var firstNames = authorIds.map(function (id) {
        var fullName = exports.authorsMap[id] || id;
        return fullName.split(' ')[0];
    }).slice(0, 2);
    return firstNames.length > 1 ? firstNames.join(" & ") : firstNames[0] || "RecodeHive";
};
exports.getAuthorNames = getAuthorNames;
