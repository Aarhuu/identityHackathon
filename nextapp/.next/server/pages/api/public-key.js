"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/public-key";
exports.ids = ["pages/api/public-key"];
exports.modules = {

/***/ "(api)/./src/pages/api/public-key.ts":
/*!*************************************!*\
  !*** ./src/pages/api/public-key.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    res.status(200).json({\n        publicKey: process.env.STRIPE_PUBLISHABLE_KEY\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3B1YmxpYy1rZXkudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQU1lLFNBQVNBLFFBQ3RCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQUEsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtJQUFFO0FBQ3hFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9oYWNrLy4vc3JjL3BhZ2VzL2FwaS9wdWJsaWMta2V5LnRzPzBmNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICBwdWJsaWNLZXk6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHB1YmxpY0tleTogcHJvY2Vzcy5lbnYuU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSEgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwicHVibGljS2V5IiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9QVUJMSVNIQUJMRV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/public-key.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/public-key.ts"));
module.exports = __webpack_exports__;

})();