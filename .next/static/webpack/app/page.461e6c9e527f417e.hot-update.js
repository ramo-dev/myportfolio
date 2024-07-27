"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/BentoGrid.tsx":
/*!**************************************!*\
  !*** ./src/components/BentoGrid.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BentoGrid: function() { return /* binding */ BentoGrid; },\n/* harmony export */   BentoGridItem: function() { return /* binding */ BentoGridItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\n\nconst BentoGridItem = (param)=>{\n    let { className, title, description, header, icon, image, href, colSpan = \"col-span-1\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"h-[18.9rem] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  px-3 py-2 dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-1\", colSpan, className),\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\n            image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mb-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    alt: title,\n                    className: \"w-full h-40 object-cover rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"group-hover/bento:translate-x-2 transition duration-200\",\n                children: [\n                    icon,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"line-clamp-2 font-normal text-neutral-600 text-sm dark:text-neutral-300\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BentoGridItem;\nconst BentoGrid = (param)=>{\n    let { className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-5 mx-auto\", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = BentoGrid;\nvar _c, _c1;\n$RefreshReg$(_c, \"BentoGridItem\");\n$RefreshReg$(_c1, \"BentoGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JlbnRvR3JpZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDaUM7QUFFMUIsTUFBTUMsZ0JBQWdCO1FBQUMsRUFDNUJDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsVUFBVSxZQUFZLEVBVXZCO0lBQ0MscUJBQ0UsOERBQUNDO1FBQ0NGLE1BQU1BO1FBQ05OLFdBQVdGLDhDQUFFQSxDQUNYLHFOQUNBUyxTQUNBUDtRQUVGUyxRQUFPO1FBQ1BDLEtBQUk7O1lBRUhMLHVCQUNDLDhEQUFDTTtnQkFBSVgsV0FBVTswQkFDYiw0RUFBQ1k7b0JBQ0NDLEtBQUtSO29CQUNMUyxLQUFLYjtvQkFDTEQsV0FBVTs7Ozs7Ozs7Ozs7WUFJZkc7MEJBQ0QsOERBQUNRO2dCQUFJWCxXQUFVOztvQkFDWkk7a0NBQ0QsOERBQUNPO3dCQUFJWCxXQUFVO2tDQUNaQzs7Ozs7O2tDQUVILDhEQUFDVTt3QkFBSVgsV0FBVTtrQ0FDWkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYLEVBQUU7S0FuRFdIO0FBcUROLE1BQU1nQixZQUFZO1FBQUMsRUFDeEJmLFNBQVMsRUFDVGdCLFFBQVEsRUFJVDtJQUNDLHFCQUNFLDhEQUFDTDtRQUNDWCxXQUFXRiw4Q0FBRUEsQ0FDWCxzRUFDQUU7a0JBR0RnQjs7Ozs7O0FBR1AsRUFBRTtNQWpCV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmVudG9HcmlkLnRzeD80YzhmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEJlbnRvR3JpZEl0ZW0gPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaGVhZGVyLFxuICBpY29uLFxuICBpbWFnZSwgLy8gQWRkIGltYWdlIHByb3BcbiAgaHJlZixcbiAgY29sU3BhbiA9IFwiY29sLXNwYW4tMVwiLCAvLyBBZGQgYSBkZWZhdWx0IGNvbFNwYW5cbn06IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIGhlYWRlcj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaW1hZ2U/OiBzdHJpbmc7IC8vIEltYWdlIFVSTFxuICBocmVmPzogc3RyaW5nOyAvLyBMaW5rIFVSTFxuICBjb2xTcGFuPzogc3RyaW5nOyAvLyBDb250cm9sIGNvbHVtbiBzcGFuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImgtWzE4LjlyZW1dIHJvdW5kZWQteGwgZ3JvdXAvYmVudG8gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIHNoYWRvdy1pbnB1dCBkYXJrOnNoYWRvdy1ub25lICBweC0zIHB5LTIgZGFyazpiZy1ibGFjayBkYXJrOmJvcmRlci13aGl0ZS9bMC4yXSBiZy13aGl0ZSBib3JkZXIganVzdGlmeS1iZXR3ZWVuIGZsZXggZmxleC1jb2wgc3BhY2UteS0xXCIsXG4gICAgICAgIGNvbFNwYW4sIC8vIEFwcGx5IGNvbFNwYW4gZHluYW1pY2FsbHlcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgID5cbiAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgIGFsdD17dGl0bGUgYXMgc3RyaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtoZWFkZXJ9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyL2JlbnRvOnRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAge2ljb259XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtNjAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMCBtYi0yIG10LTJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtMiBmb250LW5vcm1hbCB0ZXh0LW5ldXRyYWwtNjAwIHRleHQtc20gZGFyazp0ZXh0LW5ldXRyYWwtMzAwXCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCZW50b0dyaWQgPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxufToge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZ3JpZCBtZDphdXRvLXJvd3MtWzE4cmVtXSBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNSBteC1hdXRvXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNuIiwiQmVudG9HcmlkSXRlbSIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoZWFkZXIiLCJpY29uIiwiaW1hZ2UiLCJocmVmIiwiY29sU3BhbiIsImEiLCJ0YXJnZXQiLCJyZWwiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJCZW50b0dyaWQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BentoGrid.tsx\n"));

/***/ })

});