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

/***/ "(app-pages-browser)/./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _BentoGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BentoGrid */ \"(app-pages-browser)/./src/components/BentoGrid.tsx\");\n/* harmony import */ var _barrel_optimize_names_ExternalLinkIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ExternalLinkIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/external-link.js\");\n\n\n\nconst projects = [\n    {\n        href: \"https://www.github.com/ramo-dev\",\n        src: \"/projects/CLIChatBot.png\",\n        alt: \"CLI ChatBot\",\n        title: \"CLI ChatBot\",\n        description: \"A command-line interface chatbot for interactive user interactions.\"\n    },\n    {\n        href: \"https://www.github.com/ramo-dev\",\n        src: \"/projects/Bizna-Dashboard.png\",\n        alt: \"Bizna Dashboard\",\n        title: \"Bizna Dashboard\",\n        description: \"A dashboard application for managing business analytics and insights from their clients while selling digital goods conveniently.\"\n    },\n    {\n        href: \"https://www.github.com/ramo-dev\",\n        src: \"/projects/Tees&Stuffs.png\",\n        alt: \"Tees & Stuffs\",\n        title: \"Tees & Stuffs\",\n        description: \"An e-commerce store specializing in selling T-shirts and related merchandise. Built with NextJs, Shadcn, Prisma, MongoDB, and NextAuth.\"\n    },\n    {\n        href: \"https://www.annuar.site\",\n        src: \"/projects/Portfolio.png\",\n        alt: \"Annuar Ndung'u\",\n        title: \"Annuar Ndung'u\",\n        description: \"This is a custom made portfolio built using next, framer, shadcn and tailwind\"\n    },\n    {\n        href: \"https://www.github.com/ramo-dev/brightspend\",\n        src: \"/projects/BrightspendLandingPage.png\",\n        alt: \"BrightSpend Landing Page\",\n        title: \"BrightSpend Landing Page\",\n        description: \"The landing page for BrightSpend, an AI-powered financial education platform built with material tailwind, react and zustand for state management.\"\n    }\n];\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"leading font-bold text-3xl md:mt-14 mt-7\",\n                children: \"My Latest Projects\"\n            }, void 0, false, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Projects.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"md:text-lg text-md my-5\",\n                children: \"I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my latest.\"\n            }, void 0, false, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Projects.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BentoGrid__WEBPACK_IMPORTED_MODULE_1__.BentoGrid, {\n                className: \"mx-auto my-5\",\n                children: projects.map((project, index)=>{\n                    let colSpanClass = \"md:col-span-1\"; // Default\n                    if (index % 2 === 0) {\n                        colSpanClass = \"md:col-span-2\"; // Even index\n                    }\n                    if (index === 0) {\n                        colSpanClass = \"md:col-span-1\";\n                    }\n                    if (index === 1) {\n                        colSpanClass = \"md:col-span-2\";\n                    }\n                    if (index === 4) {\n                        colSpanClass = \"md:col-span-3\"; // Special case for index 4\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BentoGrid__WEBPACK_IMPORTED_MODULE_1__.BentoGridItem, {\n                        title: project.title,\n                        description: project.description,\n                        href: project.href,\n                        image: project.src,\n                        colSpan: colSpanClass\n                    }, index, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Projects.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Projects.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"https://www.github.com/ramo-dev\",\n                className: \"hover:animate-pulse text-blue-500 dark:hover:text-blue-500/70 flex items-center gap-1\",\n                children: [\n                    \"Explore other Projects \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ExternalLinkIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"h-5\"\n                    }, void 0, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Projects.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 32\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Projects.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Projects.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUV1RDtBQUVQO0FBRWhELE1BQU1HLFdBQVc7SUFDZjtRQUNFQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUVBO1FBQ0VKLE1BQU07UUFDTkMsS0FBSztRQUNMQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBQ0E7UUFDRUosTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSixNQUFNO1FBQ05DLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VKLE1BQU07UUFDTkMsS0FBSztRQUNMQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsYUFBYTtJQUNmO0NBR0Q7QUFFRCxNQUFNQyxXQUFXO0lBQ2YscUJBQ0UsOERBQUNDO1FBQUlDLElBQUc7OzBCQUNOLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBMkM7Ozs7OzswQkFDekQsOERBQUNDO2dCQUFFRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN2Qyw4REFBQ2IsaURBQVNBO2dCQUFDYSxXQUFVOzBCQUNsQlYsU0FBU1ksR0FBRyxDQUFDLENBQUNDLFNBQVNDO29CQUN0QixJQUFJQyxlQUFlLGlCQUFpQixVQUFVO29CQUU5QyxJQUFJRCxRQUFRLE1BQU0sR0FBRzt3QkFDbkJDLGVBQWUsaUJBQWlCLGFBQWE7b0JBQy9DO29CQUNBLElBQUlELFVBQVUsR0FBRzt3QkFDZkMsZUFBZTtvQkFDakI7b0JBRUEsSUFBSUQsVUFBVSxHQUFHO3dCQUNmQyxlQUFlO29CQUNqQjtvQkFFQSxJQUFJRCxVQUFVLEdBQUc7d0JBQ2ZDLGVBQWUsaUJBQWlCLDJCQUEyQjtvQkFDN0Q7b0JBRUEscUJBQ0UsOERBQUNqQixxREFBYUE7d0JBRVpNLE9BQU9TLFFBQVFULEtBQUs7d0JBQ3BCQyxhQUFhUSxRQUFRUixXQUFXO3dCQUNoQ0osTUFBTVksUUFBUVosSUFBSTt3QkFDbEJlLE9BQU9ILFFBQVFYLEdBQUc7d0JBQ2xCZSxTQUFTRjt1QkFMSkQ7Ozs7O2dCQVFYOzs7Ozs7MEJBRUYsOERBQUNJO2dCQUFFakIsTUFBSztnQkFBa0NTLFdBQVU7O29CQUF3RjtrQ0FDbkgsOERBQUNYLDRGQUFnQkE7d0JBQUNXLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRDtLQXpDTUo7QUEyQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzkyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IEJlbnRvR3JpZCwgQmVudG9HcmlkSXRlbSB9IGZyb20gXCIuL0JlbnRvR3JpZFwiO1xuXG5pbXBvcnQgeyBFeHRlcm5hbExpbmtJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9yYW1vLWRldlwiLFxuICAgIHNyYzogXCIvcHJvamVjdHMvQ0xJQ2hhdEJvdC5wbmdcIixcbiAgICBhbHQ6IFwiQ0xJIENoYXRCb3RcIixcbiAgICB0aXRsZTogXCJDTEkgQ2hhdEJvdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgY29tbWFuZC1saW5lIGludGVyZmFjZSBjaGF0Ym90IGZvciBpbnRlcmFjdGl2ZSB1c2VyIGludGVyYWN0aW9ucy5cIixcbiAgfSxcblxuICB7XG4gICAgaHJlZjogXCJodHRwczovL3d3dy5naXRodWIuY29tL3JhbW8tZGV2XCIsXG4gICAgc3JjOiBcIi9wcm9qZWN0cy9CaXpuYS1EYXNoYm9hcmQucG5nXCIsXG4gICAgYWx0OiBcIkJpem5hIERhc2hib2FyZFwiLFxuICAgIHRpdGxlOiBcIkJpem5hIERhc2hib2FyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZGFzaGJvYXJkIGFwcGxpY2F0aW9uIGZvciBtYW5hZ2luZyBidXNpbmVzcyBhbmFseXRpY3MgYW5kIGluc2lnaHRzIGZyb20gdGhlaXIgY2xpZW50cyB3aGlsZSBzZWxsaW5nIGRpZ2l0YWwgZ29vZHMgY29udmVuaWVudGx5LlwiLFxuICB9LFxuICB7XG4gICAgaHJlZjogXCJodHRwczovL3d3dy5naXRodWIuY29tL3JhbW8tZGV2XCIsXG4gICAgc3JjOiBcIi9wcm9qZWN0cy9UZWVzJlN0dWZmcy5wbmdcIixcbiAgICBhbHQ6IFwiVGVlcyAmIFN0dWZmc1wiLFxuICAgIHRpdGxlOiBcIlRlZXMgJiBTdHVmZnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBlLWNvbW1lcmNlIHN0b3JlIHNwZWNpYWxpemluZyBpbiBzZWxsaW5nIFQtc2hpcnRzIGFuZCByZWxhdGVkIG1lcmNoYW5kaXNlLiBCdWlsdCB3aXRoIE5leHRKcywgU2hhZGNuLCBQcmlzbWEsIE1vbmdvREIsIGFuZCBOZXh0QXV0aC5cIixcbiAgfSxcbiAge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuYW5udWFyLnNpdGVcIixcbiAgICBzcmM6IFwiL3Byb2plY3RzL1BvcnRmb2xpby5wbmdcIixcbiAgICBhbHQ6IFwiQW5udWFyIE5kdW5nJ3VcIixcbiAgICB0aXRsZTogXCJBbm51YXIgTmR1bmcndVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjdXN0b20gbWFkZSBwb3J0Zm9saW8gYnVpbHQgdXNpbmcgbmV4dCwgZnJhbWVyLCBzaGFkY24gYW5kIHRhaWx3aW5kXCIsXG4gIH0sXG4gIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vcmFtby1kZXYvYnJpZ2h0c3BlbmRcIixcbiAgICBzcmM6IFwiL3Byb2plY3RzL0JyaWdodHNwZW5kTGFuZGluZ1BhZ2UucG5nXCIsXG4gICAgYWx0OiBcIkJyaWdodFNwZW5kIExhbmRpbmcgUGFnZVwiLFxuICAgIHRpdGxlOiBcIkJyaWdodFNwZW5kIExhbmRpbmcgUGFnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBsYW5kaW5nIHBhZ2UgZm9yIEJyaWdodFNwZW5kLCBhbiBBSS1wb3dlcmVkIGZpbmFuY2lhbCBlZHVjYXRpb24gcGxhdGZvcm0gYnVpbHQgd2l0aCBtYXRlcmlhbCB0YWlsd2luZCwgcmVhY3QgYW5kIHp1c3RhbmQgZm9yIHN0YXRlIG1hbmFnZW1lbnQuXCIsXG4gIH0sXG5cblxuXTtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibGVhZGluZyBmb250LWJvbGQgdGV4dC0zeGwgbWQ6bXQtMTQgbXQtN1wiPk15IExhdGVzdCBQcm9qZWN0czwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtZDp0ZXh0LWxnIHRleHQtbWQgbXktNVwiPkkndmUgd29ya2VkIG9uIGEgdmFyaWV0eSBvZiBwcm9qZWN0cywgZnJvbSBzaW1wbGUgd2Vic2l0ZXMgdG8gY29tcGxleCB3ZWIgYXBwbGljYXRpb25zLiBIZXJlIGFyZSBhIGZldyBvZiBteSBsYXRlc3QuPC9wPlxuICAgICAgPEJlbnRvR3JpZCBjbGFzc05hbWU9XCJteC1hdXRvIG15LTVcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgY29sU3BhbkNsYXNzID0gXCJtZDpjb2wtc3Bhbi0xXCI7IC8vIERlZmF1bHRcblxuICAgICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIGNvbFNwYW5DbGFzcyA9IFwibWQ6Y29sLXNwYW4tMlwiOyAvLyBFdmVuIGluZGV4XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY29sU3BhbkNsYXNzID0gXCJtZDpjb2wtc3Bhbi0xXCJcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbFNwYW5DbGFzcyA9IFwibWQ6Y29sLXNwYW4tMlwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSA0KSB7XG4gICAgICAgICAgICBjb2xTcGFuQ2xhc3MgPSBcIm1kOmNvbC1zcGFuLTNcIjsgLy8gU3BlY2lhbCBjYXNlIGZvciBpbmRleCA0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCZW50b0dyaWRJdGVtXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5ocmVmfVxuICAgICAgICAgICAgICBpbWFnZT17cHJvamVjdC5zcmN9XG4gICAgICAgICAgICAgIGNvbFNwYW49e2NvbFNwYW5DbGFzc30gLy8gUGFzcyB0aGUgY2xhc3MgaGVyZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQmVudG9HcmlkPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vcmFtby1kZXZcIiBjbGFzc05hbWU9XCJob3ZlcjphbmltYXRlLXB1bHNlIHRleHQtYmx1ZS01MDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwLzcwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgIEV4cGxvcmUgb3RoZXIgUHJvamVjdHMgPEV4dGVybmFsTGlua0ljb24gY2xhc3NOYW1lPVwiaC01XCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuXG4iXSwibmFtZXMiOlsiQmVudG9HcmlkIiwiQmVudG9HcmlkSXRlbSIsIkV4dGVybmFsTGlua0ljb24iLCJwcm9qZWN0cyIsImhyZWYiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiUHJvamVjdHMiLCJkaXYiLCJpZCIsImgxIiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsImNvbFNwYW5DbGFzcyIsImltYWdlIiwiY29sU3BhbiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Projects.tsx\n"));

/***/ })

});