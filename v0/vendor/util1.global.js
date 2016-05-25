(function (factory) {
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        factory(require("CJS-will-fail-if-loaded"), exports);
    } else if (typeof define === "function" && define["amd"]) {
        define(["AMD-will-fail-if-loaded"], factory);
    } else {
        //global
        factory();
    }
})(function () {



});