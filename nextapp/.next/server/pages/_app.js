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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/styles/Metamask.module.scss":
/*!*****************************************!*\
  !*** ./src/styles/Metamask.module.scss ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"Metamask_button__uG_X0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL01ldGFtYXNrLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvaGFjay8uL3NyYy9zdHlsZXMvTWV0YW1hc2subW9kdWxlLnNjc3M/Y2NjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJNZXRhbWFza19idXR0b25fX3VHX1gwXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Metamask.module.scss\n");

/***/ }),

/***/ "./src/components/Metamask.tsx":
/*!*************************************!*\
  !*** ./src/components/Metamask.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_WalletAddressContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/WalletAddressContext */ \"./src/components/WalletAddressContext.tsx\");\n/* harmony import */ var _styles_Metamask_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Metamask.module.scss */ \"./src/styles/Metamask.module.scss\");\n/* harmony import */ var _styles_Metamask_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Metamask_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_3__]);\nethers__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Metamask = ()=>{\n    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hasMetamask, setHasMetamask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { walletAddress , setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_WalletAddressContext__WEBPACK_IMPORTED_MODULE_2__.WalletAddressContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    }, []);\n    async function connect() {\n        if (typeof window.ethereum !== \"undefined\") {\n            try {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BrowserProvider(window.ethereum);\n                await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                setIsConnected(true);\n                const signer = await provider.getSigner();\n                const signerAddress = await signer.getAddress();\n                setWalletAddress(signerAddress);\n                console.log(signerAddress);\n            } catch (e) {\n                console.log(e);\n            }\n        } else {\n            setIsConnected(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: hasMetamask ? isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_styles_Metamask_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),\n            children: [\n                \"Connected \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\components\\\\Metamask.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 23\n                }, undefined),\n                \" \",\n                walletAddress\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\components\\\\Metamask.tsx\",\n            lineNumber: 46,\n            columnNumber: 11\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>connect(),\n            className: (_styles_Metamask_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),\n            children: \"Connect\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\components\\\\Metamask.tsx\",\n            lineNumber: 50,\n            columnNumber: 11\n        }, undefined) : \"Please install metamask\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\components\\\\Metamask.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Metamask);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXRhbWFzay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNPO0FBR2lCO0FBRXRCO0FBRW5CO0FBR2hDLE1BQU1PLFdBQThCLElBQU07SUFDeEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxFQUFFVyxjQUFhLEVBQUVDLGlCQUFnQixFQUFFLEdBQUdWLGlEQUFVQSxDQUFDQyxrRkFBb0JBO0lBRTNFRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxPQUFPWSxPQUFPQyxRQUFRLEtBQUssYUFBYTtZQUMxQ0osZUFBZSxJQUFJO1FBQ3JCLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxlQUFlSyxVQUFVO1FBQ3ZCLElBQUksT0FBT0YsT0FBT0MsUUFBUSxLQUFLLGFBQWE7WUFDMUMsSUFBSTtnQkFDRixNQUFNRSxXQUFXLElBQUlYLDBEQUFzQixDQUFDUSxPQUFPQyxRQUFRO2dCQUMzRCxNQUFNRCxPQUFPQyxRQUFRLENBQUNJLE9BQU8sQ0FBQztvQkFBRUMsUUFBUTtnQkFBc0I7Z0JBQzlEWCxlQUFlLElBQUk7Z0JBRW5CLE1BQU1ZLFNBQVMsTUFBTUosU0FBU0ssU0FBUztnQkFDdkMsTUFBTUMsZ0JBQWdCLE1BQU1GLE9BQU9HLFVBQVU7Z0JBQzdDWCxpQkFBaUJVO2dCQUNqQkUsUUFBUUMsR0FBRyxDQUFDSDtZQUNkLEVBQUUsT0FBT0ksR0FBRztnQkFDVkYsUUFBUUMsR0FBRyxDQUFDQztZQUNkO1FBQ0YsT0FBTztZQUNMbEIsZUFBZSxLQUFLO1FBQ3RCLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDbUI7a0JBQ0VsQixjQUNDRiw0QkFDRSw4REFBQ3FCO1lBQU9DLFdBQVd6Qiw0RUFBYTs7Z0JBQUU7OEJBQ3RCLDhEQUFDMEI7Ozs7O2dCQUFLO2dCQUFFbkI7Ozs7OztzQ0FHcEIsOERBQUNpQjtZQUFPRyxTQUFTLElBQU1oQjtZQUFXYyxXQUFXekIsNEVBQWE7c0JBQUU7Ozs7O3FCQUc3RCxHQUVELHlCQUNEOzs7Ozs7QUFLUDtBQUVBLGlFQUFlRSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvaGFjay8uL3NyYy9jb21wb25lbnRzL01ldGFtYXNrLnRzeD8wOWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcclxuXHJcbmltcG9ydCB7IFdhbGxldEFkZHJlc3NDb250ZXh0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9XYWxsZXRBZGRyZXNzQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvTWV0YW1hc2subW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgZGVwb3NpdCwgcmVsZWFzZSB9IGZyb20gXCIuLi91dGlscy9ldGhGdW5jdGlvbnNcIjtcclxuXHJcbmNvbnN0IE1ldGFtYXNrOiBGdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGFzTWV0YW1hc2ssIHNldEhhc01ldGFtYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IHdhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3MgfSA9IHVzZUNvbnRleHQoV2FsbGV0QWRkcmVzc0NvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgc2V0SGFzTWV0YW1hc2sodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xyXG4gICAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgICBjb25zdCBzaWduZXJBZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcclxuICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKHNpZ25lckFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNpZ25lckFkZHJlc3MpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aGFzTWV0YW1hc2sgPyAoXHJcbiAgICAgICAgaXNDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIENvbm5lY3RlZCA8aHIgLz4ge3dhbGxldEFkZHJlc3N9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KCl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlBsZWFzZSBpbnN0YWxsIG1ldGFtYXNrXCJcclxuICAgICAgKX1cclxuICAgICAgey8qIDxidXR0b24gb25DbGljaz17ZGVwb3NpdH0+dGVzdCBkZXBvc2l0PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17cmVsZWFzZX0+dGVzdCByZWxlYXNlPC9idXR0b24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGFtYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJXYWxsZXRBZGRyZXNzQ29udGV4dCIsInN0eWxlcyIsImV0aGVycyIsIk1ldGFtYXNrIiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsImhhc01ldGFtYXNrIiwic2V0SGFzTWV0YW1hc2siLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29ubmVjdCIsInByb3ZpZGVyIiwiQnJvd3NlclByb3ZpZGVyIiwicmVxdWVzdCIsIm1ldGhvZCIsInNpZ25lciIsImdldFNpZ25lciIsInNpZ25lckFkZHJlc3MiLCJnZXRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImUiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJociIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Metamask.tsx\n");

/***/ }),

/***/ "./src/components/WalletAddressContext.tsx":
/*!*************************************************!*\
  !*** ./src/components/WalletAddressContext.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WalletAddressContext\": () => (/* binding */ WalletAddressContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst WalletAddressContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    walletAddress: \"\",\n    setWalletAddress: ()=>null\n});\nconst WalletAddressContextProvider = ({ children  })=>{\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletAddressContext.Provider, {\n        value: {\n            walletAddress,\n            setWalletAddress\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\components\\\\WalletAddressContext.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletAddressContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XYWxsZXRBZGRyZXNzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRTtBQUNwQjtBQUVoRCxNQUFNRyxxQ0FBdUJELG9EQUFhQSxDQUd2QztJQUFFRSxlQUFlO0lBQUlDLGtCQUFrQixJQUFNLElBQUk7QUFBQztBQUVyRCxNQUFNQywrQkFBcUUsQ0FBQyxFQUMxRUMsU0FBUSxFQUNULEdBQUs7SUFDSixNQUFNLENBQUNILGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVuRCxxQkFDRSw4REFBQ0UscUJBQXFCSyxRQUFRO1FBQUNDLE9BQU87WUFBRUw7WUFBZUM7UUFBaUI7a0JBQ3JFRTs7Ozs7O0FBR1A7QUFFZ0M7QUFFaEMsaUVBQWVELDRCQUE0QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0b2hhY2svLi9zcmMvY29tcG9uZW50cy9XYWxsZXRBZGRyZXNzQ29udGV4dC50c3g/NTNiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBXYWxsZXRBZGRyZXNzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8e1xyXG4gIHdhbGxldEFkZHJlc3M6IHN0cmluZztcclxuICBzZXRXYWxsZXRBZGRyZXNzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcclxufT4oeyB3YWxsZXRBZGRyZXNzOiBcIlwiLCBzZXRXYWxsZXRBZGRyZXNzOiAoKSA9PiBudWxsIH0pO1xyXG5cclxuY29uc3QgV2FsbGV0QWRkcmVzc0NvbnRleHRQcm92aWRlcjogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHNXaXRoQ2hpbGRyZW4+ID0gKHtcclxuICBjaGlsZHJlbixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdhbGxldEFkZHJlc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHdhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3MgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvV2FsbGV0QWRkcmVzc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFdhbGxldEFkZHJlc3NDb250ZXh0IH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRBZGRyZXNzQ29udGV4dFByb3ZpZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJXYWxsZXRBZGRyZXNzQ29udGV4dCIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiV2FsbGV0QWRkcmVzc0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WalletAddressContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"@stripe/react-stripe-js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_WalletAddressContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/WalletAddressContext */ \"./src/components/WalletAddressContext.tsx\");\n/* harmony import */ var _components_Metamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Metamask */ \"./src/components/Metamask.tsx\");\n/* harmony import */ var _utils_front_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/front-api */ \"./src/utils/front-api.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Metamask__WEBPACK_IMPORTED_MODULE_5__]);\n_components_Metamask__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst stripePromise = _utils_front_api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getPublicStripeKey().then((key)=>(0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)(key));\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.Elements, {\n        stripe: stripePromise,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletAddressContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Metamask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\birdi\\\\Desktop\\\\asdf\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRXFCO0FBQ0k7QUFFMEI7QUFDaEM7QUFFUjtBQUVQO0FBRTlCLE1BQU1NLGdCQUFnQkQsMkVBQXNCLEdBQUdHLElBQUksQ0FBQyxDQUFDQyxNQUFRUiw2REFBVUEsQ0FBQ1E7QUFFekQsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDViw2REFBUUE7UUFBQ1csUUFBUVA7a0JBQ2hCLDRFQUFDSCx3RUFBNEJBO3NCQUMzQiw0RUFBQ1c7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FDQyw0RUFBQ1osNERBQVFBOzs7Ozs7Ozs7O2tDQUVYLDhEQUFDYTtrQ0FDQyw0RUFBQ047NEJBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9oYWNrLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcclxuXHJcbmltcG9ydCBXYWxsZXRBZGRyZXNzQ29udGV4dFByb3ZpZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvV2FsbGV0QWRkcmVzc0NvbnRleHRcIjtcclxuaW1wb3J0IE1ldGFtYXNrIGZyb20gXCJAL2NvbXBvbmVudHMvTWV0YW1hc2tcIjtcclxuXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3V0aWxzL2Zyb250LWFwaVwiO1xyXG5cclxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBhcGkuZ2V0UHVibGljU3RyaXBlS2V5KCkudGhlbigoa2V5KSA9PiBsb2FkU3RyaXBlKGtleSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XHJcbiAgICAgIDxXYWxsZXRBZGRyZXNzQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxNZXRhbWFzayAvPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1dhbGxldEFkZHJlc3NDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8L0VsZW1lbnRzPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibG9hZFN0cmlwZSIsIkVsZW1lbnRzIiwiV2FsbGV0QWRkcmVzc0NvbnRleHRQcm92aWRlciIsIk1ldGFtYXNrIiwiYXBpIiwic3RyaXBlUHJvbWlzZSIsImdldFB1YmxpY1N0cmlwZUtleSIsInRoZW4iLCJrZXkiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdHJpcGUiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/front-api.ts":
/*!********************************!*\
  !*** ./src/utils/front-api.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const BASE_URL = \"https://asdf-ashy.vercel.app/\";\nconst BASE_URL = \"http://localhost:3000/\";\nconst createPaymentIntent = (options)=>{\n    return fetch(`${BASE_URL}/api/create-payment-intent`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(options)\n    }).then((res)=>{\n        if (res.status === 200) {\n            return res.json();\n        } else {\n            return null;\n        }\n    }).then((data)=>{\n        if (!data || data.error) {\n            console.log(\"API error:\", {\n                data\n            });\n            throw new Error(\"PaymentIntent API Error\");\n        } else {\n            return data.client_secret;\n        }\n    });\n};\nconst getProductDetails = (options)=>{\n    return fetch(`${BASE_URL}/api/product-details`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(options)\n    }).then((res)=>{\n        if (res.status === 200) {\n            return res.json();\n        } else {\n            return null;\n        }\n    }).then((data)=>{\n        if (!data || data.error) {\n            console.log(\"API error:\", {\n                data\n            });\n            throw Error(\"API Error\");\n        } else {\n            return data;\n        }\n    });\n};\nconst getPublicStripeKey = ()=>{\n    return fetch(`${BASE_URL}/api/public-key`, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then((res)=>{\n        if (res.status === 200) {\n            return res.json();\n        } else {\n            return null;\n        }\n    }).then((data)=>{\n        if (!data || data.error) {\n            console.log(\"API error:\", {\n                data\n            });\n            throw new Error(\"API Error\");\n        } else {\n            return data.publicKey;\n        }\n    });\n};\nconst sendTokens = (options)=>{\n    return fetch(`${BASE_URL}/api/send-tokens`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(options)\n    }).then((res)=>{\n        if (res.status === 200) {\n            return res.json();\n        } else {\n            return null;\n        }\n    }).then((data)=>{\n        if (!data || data.error) {\n            console.log(\"API error:\", {\n                data\n            });\n            throw Error(\"API Error\");\n        } else {\n            return data;\n        }\n    });\n};\nconst api = {\n    createPaymentIntent,\n    getPublicStripeKey: getPublicStripeKey,\n    getProductDetails: getProductDetails,\n    sendTokens\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxjQUFjO2dCQUFFSDtZQUFLO1lBQ2pDLE1BQU1JLE1BQU0sYUFBYTtRQUMzQixPQUFPO1lBQ0wsT0FBT0o7UUFDVCxDQUFDO0lBQ0g7QUFDSjtBQUVBLE1BQU1VLE1BQU07SUFDVnRCO0lBQ0FtQixvQkFBb0JBO0lBQ3BCRCxtQkFBbUJBO0lBQ25CRztBQUNGO0FBRUEsaUVBQWVDLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9oYWNrLy4vc3JjL3V0aWxzL2Zyb250LWFwaS50cz9jMjRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FzZGYtYXNoeS52ZXJjZWwuYXBwL1wiO1xyXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiO1xyXG5cclxuY29uc3QgY3JlYXRlUGF5bWVudEludGVudCA9IChvcHRpb25zOiBhbnkpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVBJIGVycm9yOlwiLCB7IGRhdGEgfSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudEludGVudCBBUEkgRXJyb3JcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuY2xpZW50X3NlY3JldDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0RGV0YWlscyA9IChvcHRpb25zOiBhbnkpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS9wcm9kdWN0LWRldGFpbHNgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVBJIGVycm9yOlwiLCB7IGRhdGEgfSk7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJBUEkgRXJyb3JcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UHVibGljU3RyaXBlS2V5ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3B1YmxpYy1rZXlgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVBJIGVycm9yOlwiLCB7IGRhdGEgfSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQVBJIEVycm9yXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhLnB1YmxpY0tleTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZW5kVG9rZW5zID0gKG9wdGlvbnM6IGFueSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3NlbmQtdG9rZW5zYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKCFkYXRhIHx8IGRhdGEuZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFQSSBlcnJvcjpcIiwgeyBkYXRhIH0pO1xyXG4gICAgICAgIHRocm93IEVycm9yKFwiQVBJIEVycm9yXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGFwaSA9IHtcclxuICBjcmVhdGVQYXltZW50SW50ZW50LFxyXG4gIGdldFB1YmxpY1N0cmlwZUtleTogZ2V0UHVibGljU3RyaXBlS2V5LFxyXG4gIGdldFByb2R1Y3REZXRhaWxzOiBnZXRQcm9kdWN0RGV0YWlscyxcclxuICBzZW5kVG9rZW5zLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJjcmVhdGVQYXltZW50SW50ZW50Iiwib3B0aW9ucyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJjbGllbnRfc2VjcmV0IiwiZ2V0UHJvZHVjdERldGFpbHMiLCJnZXRQdWJsaWNTdHJpcGVLZXkiLCJwdWJsaWNLZXkiLCJzZW5kVG9rZW5zIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/front-api.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("ethers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();