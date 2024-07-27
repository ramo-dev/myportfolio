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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BentoGrid: function() { return /* binding */ BentoGrid; },\n/* harmony export */   BentoGridItem: function() { return /* binding */ BentoGridItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\n\nconst BentoGridItem = (param)=>{\n    let { className, title, description, header, icon, image, href, colSpan = \"col-span-1\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"h-[18.5rem] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4\", colSpan, className),\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\n            image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    alt: title,\n                    className: \"w-full h-40 object-cover rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"group-hover/bento:translate-x-2 transition duration-200\",\n                children: [\n                    icon,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"line-clamp-2 font-normal text-neutral-600 text-xs dark:text-neutral-300\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BentoGridItem;\nconst BentoGrid = (param)=>{\n    let { className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto\", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/BentoGrid.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = BentoGrid;\nvar _c, _c1;\n$RefreshReg$(_c, \"BentoGridItem\");\n$RefreshReg$(_c1, \"BentoGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JlbnRvR3JpZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDaUM7QUFFMUIsTUFBTUMsZ0JBQWdCO1FBQUMsRUFDNUJDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsVUFBVSxZQUFZLEVBVXZCO0lBQ0MscUJBQ0UsOERBQUNDO1FBQ0NGLE1BQU1BO1FBQ05OLFdBQVdGLDhDQUFFQSxDQUNYLDhNQUNBUyxTQUNBUDtRQUVGUyxRQUFPO1FBQ1BDLEtBQUk7O1lBRUhMLHVCQUNDLDhEQUFDTTtnQkFBSVgsV0FBVTswQkFDYiw0RUFBQ1k7b0JBQ0NDLEtBQUtSO29CQUNMUyxLQUFLYjtvQkFDTEQsV0FBVTs7Ozs7Ozs7Ozs7WUFJZkc7MEJBQ0QsOERBQUNRO2dCQUFJWCxXQUFVOztvQkFDWkk7a0NBQ0QsOERBQUNPO3dCQUFJWCxXQUFVO2tDQUNaQzs7Ozs7O2tDQUVILDhEQUFDVTt3QkFBSVgsV0FBVTtrQ0FDWkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYLEVBQUU7S0FuRFdIO0FBcUROLE1BQU1nQixZQUFZO1FBQUMsRUFDeEJmLFNBQVMsRUFDVGdCLFFBQVEsRUFJVDtJQUNDLHFCQUNFLDhEQUFDTDtRQUNDWCxXQUFXRiw4Q0FBRUEsQ0FDWCxzRUFDQUU7a0JBR0RnQjs7Ozs7O0FBR1AsRUFBRTtNQWpCV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmVudG9HcmlkLnRzeD80YzhmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEJlbnRvR3JpZEl0ZW0gPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaGVhZGVyLFxuICBpY29uLFxuICBpbWFnZSwgLy8gQWRkIGltYWdlIHByb3BcbiAgaHJlZixcbiAgY29sU3BhbiA9IFwiY29sLXNwYW4tMVwiLCAvLyBBZGQgYSBkZWZhdWx0IGNvbFNwYW5cbn06IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIGhlYWRlcj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaW1hZ2U/OiBzdHJpbmc7IC8vIEltYWdlIFVSTFxuICBocmVmPzogc3RyaW5nOyAvLyBMaW5rIFVSTFxuICBjb2xTcGFuPzogc3RyaW5nOyAvLyBDb250cm9sIGNvbHVtbiBzcGFuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImgtWzE4LjVyZW1dIHJvdW5kZWQteGwgZ3JvdXAvYmVudG8gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIHNoYWRvdy1pbnB1dCBkYXJrOnNoYWRvdy1ub25lIHAtNCBkYXJrOmJnLWJsYWNrIGRhcms6Ym9yZGVyLXdoaXRlL1swLjJdIGJnLXdoaXRlIGJvcmRlciBqdXN0aWZ5LWJldHdlZW4gZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIixcbiAgICAgICAgY29sU3BhbiwgLy8gQXBwbHkgY29sU3BhbiBkeW5hbWljYWxseVxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAge2ltYWdlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgYWx0PXt0aXRsZSBhcyBzdHJpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00MCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2hlYWRlcn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXIvYmVudG86dHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICB7aWNvbn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9udC1ib2xkIHRleHQtbmV1dHJhbC02MDAgZGFyazp0ZXh0LW5ldXRyYWwtMjAwIG1iLTIgbXQtMlwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1jbGFtcC0yIGZvbnQtbm9ybWFsIHRleHQtbmV1dHJhbC02MDAgdGV4dC14cyBkYXJrOnRleHQtbmV1dHJhbC0zMDBcIj5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJlbnRvR3JpZCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJncmlkIG1kOmF1dG8tcm93cy1bMThyZW1dIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IG14LWF1dG9cIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY24iLCJCZW50b0dyaWRJdGVtIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImhlYWRlciIsImljb24iLCJpbWFnZSIsImhyZWYiLCJjb2xTcGFuIiwiYSIsInRhcmdldCIsInJlbCIsImRpdiIsImltZyIsInNyYyIsImFsdCIsIkJlbnRvR3JpZCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BentoGrid.tsx\n"));

/***/ })

});