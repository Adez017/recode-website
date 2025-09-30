"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBy = sortBy;
exports.toggleListItem = toggleListItem;
function sortBy(array, getter) {
    var sortedArray = __spreadArray([], array, true);
    sortedArray.sort(function (a, b) {
        return getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0;
    });
    return sortedArray;
}
function toggleListItem(list, item) {
    var itemIndex = list.indexOf(item);
    if (itemIndex === -1) {
        return list.concat(item);
    }
    var newList = __spreadArray([], list, true);
    newList.splice(itemIndex, 1);
    return newList;
}
