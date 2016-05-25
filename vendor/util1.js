(function (factory) {
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        factory(require("xyz-it-will-fail-if-executed"), exports);
    } else if (typeof define === "function" && define["amd"]) {
        define(["xyz-it-will-fail-if-executed"], factory);
    } else {
        factory();
    }
})(function () {



});