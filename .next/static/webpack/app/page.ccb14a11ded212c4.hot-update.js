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

/***/ "(app-pages-browser)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FloatingNav: function() { return /* binding */ FloatingNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Moon,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sun.js\");\n/* harmony import */ var _barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Moon,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/moon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_hooks_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/hooks/ThemeContext */ \"(app-pages-browser)/./src/app/hooks/ThemeContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ FloatingNav auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FloatingNav = (param)=>{\n    let { navItems, className } = param;\n    _s();\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { theme, toggleTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_hooks_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeContext);\n    (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useMotionValueEvent)(scrollYProgress, \"change\", (current)=>{\n        // Check if current is not undefined and is a number\n        if (typeof current === \"number\") {\n            let direction = current - scrollYProgress.getPrevious();\n            if (scrollYProgress.get() < 0.1) {\n                setVisible(true);\n            } else {\n                if (direction < 0) {\n                    setVisible(true);\n                } else {\n                    setVisible(false);\n                }\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n        mode: \"wait\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n            initial: {\n                opacity: 1,\n                y: -100\n            },\n            animate: {\n                y: visible ? 0 : -100,\n                opacity: visible ? 1 : 0\n            },\n            transition: {\n                duration: 0.6\n            },\n            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\" md:min-w-[60vh] min-w-[40vh] flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-zinc-300 dark:border-white/[0.2] rounded-full dark:bg-black/80 backdrop-filter backdrop-blur-sm bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4\", className),\n            children: [\n                navItems.map((navItem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: navItem.link,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"block sm:hidden\",\n                                children: navItem.icon\n                            }, void 0, false, {\n                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"hidden sm:block text-sm\",\n                                children: navItem.name\n                            }, void 0, false, {\n                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, \"link=\".concat(idx), true, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n                    whileTap: {\n                        scale: 0.8\n                    },\n                    className: \"text-foreground\",\n                    onClick: toggleTheme,\n                    children: theme ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 20\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 30\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"https://blog.annuar.site\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-20 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px\"\n                            }, void 0, false, {\n                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/Navbar.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FloatingNav, \"MsCUewMhL2fKX5xPMMlkbirWD08=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useMotionValueEvent\n    ];\n});\n_c = FloatingNav;\nvar _c;\n$RefreshReg$(_c, \"FloatingNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRytEO0FBTXhDO0FBQ1U7QUFDUTtBQUNaO0FBQzJCO0FBR2pELE1BQU1ZLGNBQWM7UUFBQyxFQUMxQkMsUUFBUSxFQUNSQyxTQUFTLEVBUVY7O0lBQ0MsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR1Ysd0RBQVNBO0lBQ3JDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxFQUFFaUIsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBR2pCLGlEQUFVQSxDQUFDUyxpRUFBWUE7SUFHdERMLGtFQUFtQkEsQ0FBQ1MsaUJBQWlCLFVBQVUsQ0FBQ0s7UUFDOUMsb0RBQW9EO1FBQ3BELElBQUksT0FBT0EsWUFBWSxVQUFVO1lBQy9CLElBQUlDLFlBQVlELFVBQVdMLGdCQUFnQk8sV0FBVztZQUV0RCxJQUFJUCxnQkFBZ0JRLEdBQUcsS0FBSyxLQUFLO2dCQUMvQk4sV0FBVztZQUNiLE9BQU87Z0JBQ0wsSUFBSUksWUFBWSxHQUFHO29CQUNqQkosV0FBVztnQkFDYixPQUFPO29CQUNMQSxXQUFXO2dCQUNiO1lBQ0Y7UUFDRjtJQUNGO0lBS0EscUJBQ0UsOERBQUNiLDBEQUFlQTtRQUFDb0IsTUFBSztrQkFDcEIsNEVBQUNyQixpREFBTUEsQ0FBQ3NCLEdBQUc7WUFDVEMsU0FBUztnQkFDUEMsU0FBUztnQkFDVEMsR0FBRyxDQUFDO1lBQ047WUFDQUMsU0FBUztnQkFDUEQsR0FBR1osVUFBVSxJQUFJLENBQUM7Z0JBQ2xCVyxTQUFTWCxVQUFVLElBQUk7WUFDekI7WUFDQWMsWUFBWTtnQkFDVkMsVUFBVTtZQUNaO1lBQ0FqQixXQUFXUCw4Q0FBRUEsQ0FDWCx5WEFDQU87O2dCQUdERCxTQUFTbUIsR0FBRyxDQUFDLENBQUNDLFNBQWNDLG9CQUMzQiw4REFBQ3hCLGlEQUFJQTt3QkFFSHlCLE1BQU1GLFFBQVFHLElBQUk7d0JBQ2xCdEIsV0FBV1AsOENBQUVBLENBQ1g7OzBDQUdGLDhEQUFDOEI7Z0NBQUt2QixXQUFVOzBDQUFtQm1CLFFBQVFLLElBQUk7Ozs7OzswQ0FDL0MsOERBQUNEO2dDQUFLdkIsV0FBVTswQ0FBMkJtQixRQUFRTSxJQUFJOzs7Ozs7O3VCQVBsRCxRQUFZLE9BQUpMOzs7Ozs4QkFVakIsOERBQUMvQixpREFBTUEsQ0FBQ3FDLE1BQU07b0JBQ1pDLFVBQVU7d0JBQ1JDLE9BQU87b0JBQ1Q7b0JBQ0E1QixXQUFVO29CQUNWNkIsU0FBU3hCOzhCQUVSRCxzQkFBUSw4REFBQ1Qsb0ZBQUdBOzs7O2tEQUFNLDhEQUFDRCxxRkFBSUE7Ozs7Ozs7Ozs7OEJBRTFCLDhEQUFDRSxpREFBSUE7b0JBQUN5QixNQUFLOzhCQUNULDRFQUFDSzt3QkFBTzFCLFdBQVU7OzBDQUNoQiw4REFBQ3VCOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNBO2dDQUFLdkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QixFQUFFO0dBdEZXRjs7UUFXaUJQLG9EQUFTQTtRQUtyQ0MsOERBQW1CQTs7O0tBaEJSTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzlhNmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgQW5pbWF0ZVByZXNlbmNlLFxuICB1c2VTY3JvbGwsXG4gIHVzZU1vdGlvblZhbHVlRXZlbnQsXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgTW9vbiwgU3VuIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2hvb2tzL1RoZW1lQ29udGV4dFwiO1xuXG5cbmV4cG9ydCBjb25zdCBGbG9hdGluZ05hdiA9ICh7XG4gIG5hdkl0ZW1zLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIG5hdkl0ZW1zOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbiAgICBpY29uPzogSlNYLkVsZW1lbnQ7XG4gIH1bXTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufSkgPT4ge1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKCk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IHRoZW1lLCB0b2dnbGVUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG5cbiAgdXNlTW90aW9uVmFsdWVFdmVudChzY3JvbGxZUHJvZ3Jlc3MsIFwiY2hhbmdlXCIsIChjdXJyZW50KSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgY3VycmVudCBpcyBub3QgdW5kZWZpbmVkIGFuZCBpcyBhIG51bWJlclxuICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnQhIC0gc2Nyb2xsWVByb2dyZXNzLmdldFByZXZpb3VzKCkhO1xuXG4gICAgICBpZiAoc2Nyb2xsWVByb2dyZXNzLmdldCgpIDwgMC4xKSB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgeTogLTEwMCxcbiAgICAgICAgfX1cbiAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgIHk6IHZpc2libGUgPyAwIDogLTEwMCxcbiAgICAgICAgICBvcGFjaXR5OiB2aXNpYmxlID8gMSA6IDAsXG4gICAgICAgIH19XG4gICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiIG1kOm1pbi13LVs2MHZoXSBtaW4tdy1bNDB2aF0gZmxleCBtYXgtdy1maXQgIGZpeGVkIHRvcC0xMCBpbnNldC14LTAgbXgtYXV0byBib3JkZXIgYm9yZGVyLXppbmMtMzAwIGRhcms6Ym9yZGVyLXdoaXRlL1swLjJdIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWJsYWNrLzgwIGJhY2tkcm9wLWZpbHRlciBiYWNrZHJvcC1ibHVyLXNtIGJnLXdoaXRlIHNoYWRvdy1bMHB4XzJweF8zcHhfLTFweF9yZ2JhKDAsMCwwLDAuMSksMHB4XzFweF8wcHhfMHB4X3JnYmEoMjUsMjgsMzMsMC4wMiksMHB4XzBweF8wcHhfMXB4X3JnYmEoMjUsMjgsMzMsMC4wOCldIHotWzUwMDBdIHByLTIgcGwtOCBweS0yICBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtNFwiLFxuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bmF2SXRlbXMubWFwKChuYXZJdGVtOiBhbnksIGlkeDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17YGxpbms9JHtpZHh9YH1cbiAgICAgICAgICAgIGhyZWY9e25hdkl0ZW0ubGlua31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgIFwicmVsYXRpdmUgZGFyazp0ZXh0LW5ldXRyYWwtNTAgaXRlbXMtY2VudGVyIGZsZXggc3BhY2UteC0xIHRleHQtbmV1dHJhbC02MDAgZGFyazpob3Zlcjp0ZXh0LW5ldXRyYWwtMzAwIGhvdmVyOnRleHQtbmV1dHJhbC01MDBcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBzbTpoaWRkZW5cIj57bmF2SXRlbS5pY29ufTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayB0ZXh0LXNtXCI+e25hdkl0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICB3aGlsZVRhcD17e1xuICAgICAgICAgICAgc2NhbGU6IDAuOFxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVUaGVtZX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVtZSA/IDxTdW4gLz4gOiA8TW9vbiAvPn1cbiAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9ibG9nLmFubnVhci5zaXRlXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIwIGJvcmRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJlbGF0aXZlIGJvcmRlci1uZXV0cmFsLTIwMCBkYXJrOmJvcmRlci13aGl0ZS9bMC4yXSB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICA8c3Bhbj5CbG9nPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIHctMS8yIG14LWF1dG8gLWJvdHRvbS1weCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLWJsdWUtNTAwIHRvLXRyYW5zcGFyZW50ICBoLXB4XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L0xpbms+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICk7XG59O1xuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU2Nyb2xsIiwidXNlTW90aW9uVmFsdWVFdmVudCIsImNuIiwiTW9vbiIsIlN1biIsIkxpbmsiLCJUaGVtZUNvbnRleHQiLCJGbG9hdGluZ05hdiIsIm5hdkl0ZW1zIiwiY2xhc3NOYW1lIiwic2Nyb2xsWVByb2dyZXNzIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0aGVtZSIsInRvZ2dsZVRoZW1lIiwiY3VycmVudCIsImRpcmVjdGlvbiIsImdldFByZXZpb3VzIiwiZ2V0IiwibW9kZSIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJuYXZJdGVtIiwiaWR4IiwiaHJlZiIsImxpbmsiLCJzcGFuIiwiaWNvbiIsIm5hbWUiLCJidXR0b24iLCJ3aGlsZVRhcCIsInNjYWxlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});