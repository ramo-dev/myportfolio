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

/***/ "(app-pages-browser)/./src/components/ChatBot.tsx":
/*!************************************!*\
  !*** ./src/components/ChatBot.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nasync function getAiResponse() {\n    let myText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"hello\";\n    try {\n        const resp = await fetch(\"/api/bot\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                prompt: myText\n            })\n        });\n        const data = await resp.json();\n        return data.girrafeAi || null;\n    } catch (err) {\n        console.log(err);\n        return null;\n    }\n}\nfunction formatResponse(response) {\n    let formatted = response.replace(/\\n/g, \"<br>\");\n    formatted = formatted.replace(/\\*\\*(.*?)\\*\\*/g, (_, p1)=>\"<b>\".concat(p1.toUpperCase(), \"</b>\"));\n    return formatted;\n}\nconst ChatDialog = (param)=>{\n    let { isOpen, onClose } = param;\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const form = e.currentTarget;\n        const messageInput = form.elements.namedItem(\"message\").value.trim();\n        if (messageInput === \"\") return;\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    text: messageInput,\n                    type: \"user\"\n                }\n            ]);\n        form.elements.namedItem(\"message\").value = \"\";\n        setIsLoading(true);\n        const aiResponse = await getAiResponse(messageInput);\n        setIsLoading(false);\n        if (aiResponse) {\n            const formattedResponse = formatResponse(aiResponse);\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: formattedResponse,\n                        type: \"ai\"\n                    }\n                ]);\n        }\n        form.elements.namedItem(\"message\").value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        open: isOpen,\n        onOpenChange: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n            className: \"h-screen md:max-h-[90vh] h-screen bg-background z-[9999] flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                            children: \"Chat with Annuar Ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {}, void 0, false, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-1 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                            className: \"flex-1 overflow-y-auto bg-background p-3\",\n                            children: [\n                                messages.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-gray-400/20 rounded-full p-3 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 w-max\",\n                                    children: \"Enter prompt to talk to Annuar Ai\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined),\n                                messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex \".concat(message.type === \"ai\" ? \"justify-start\" : \"justify-end\", \" mb-2\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"message-bubble p-3 rounded-lg \".concat(message.type === \"ai\" ? \"ai-response bg-transparent\" : \"my-response bg-gray-400/40\"),\n                                            dangerouslySetInnerHTML: {\n                                                __html: message.text\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ref: messagesEndRef\n                                }, void 0, false, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"pt-2 mt-auto relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"message\",\n                                    className: \"sr-only\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center gap-3 px-2 py-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                            required: true,\n                                            id: \"message\",\n                                            name: \"message\",\n                                            placeholder: \"Type your message here...\",\n                                            className: \"resize-none border-0 shadow-none focus-visible:ring-0 flex-grow ps-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            type: \"submit\",\n                                            size: \"sm\",\n                                            className: \"ml-auto gap-1.5 min-w-10 h-10\",\n                                            disabled: isLoading,\n                                            children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                className: \"text-2xl animate-spin\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 30\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 78\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatDialog, \"oB5mluyB22AKtEGxVJYRLrDd3EQ=\");\n_c = ChatDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatDialog);\nvar _c;\n$RefreshReg$(_c, \"ChatDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRCb3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDc0U7QUFDaUM7QUFDdkQ7QUFDSDtBQUNDO0FBQ0E7QUFDRjtBQVk1QyxlQUFlZTtRQUFjQyxTQUFBQSxpRUFBaUI7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSxZQUFZO1lBQ25DQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsUUFBUVI7WUFBTztRQUN4QztRQUNBLE1BQU1TLE9BQU8sTUFBTVIsS0FBS1MsSUFBSTtRQUM1QixPQUFPRCxLQUFLRSxTQUFTLElBQUk7SUFDM0IsRUFBRSxPQUFPQyxLQUFLO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPO0lBQ1Q7QUFDRjtBQUVBLFNBQVNHLGVBQWVDLFFBQWdCO0lBQ3RDLElBQUlDLFlBQVlELFNBQVNFLE9BQU8sQ0FBQyxPQUFPO0lBQ3hDRCxZQUFZQSxVQUFVQyxPQUFPLENBQUMsa0JBQWtCLENBQUNDLEdBQUdDLEtBQU8sTUFBdUIsT0FBakJBLEdBQUdDLFdBQVcsSUFBRztJQUNsRixPQUFPSjtBQUNUO0FBRUEsTUFBTUssYUFBd0M7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTs7SUFDaEUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUd6QywrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQzBDLFdBQVdDLGFBQWEsR0FBRzNDLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU00QyxpQkFBaUIxQyw2Q0FBTUEsQ0FBd0I7SUFFckQsTUFBTTJDLGlCQUFpQjtZQUNyQkQ7U0FBQUEsMEJBQUFBLGVBQWVFLE9BQU8sY0FBdEJGLDhDQUFBQSx3QkFBd0JHLGNBQWMsQ0FBQztZQUFFQyxVQUFVO1FBQVM7SUFDOUQ7SUFFQS9DLGdEQUFTQSxDQUFDO1FBQ1I0QztJQUNGLEdBQUc7UUFBQ0w7S0FBUztJQUViLE1BQU1TLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBT0YsRUFBRUcsYUFBYTtRQUM1QixNQUFNQyxlQUFlLEtBQU1DLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLFdBQWdDQyxLQUFLLENBQUNDLElBQUk7UUFDeEYsSUFBSUosaUJBQWlCLElBQUk7UUFFekJiLFlBQVksQ0FBQ2tCLGVBQWlCO21CQUN6QkE7Z0JBQ0g7b0JBQUVDLE1BQU1OO29CQUFjTyxNQUFNO2dCQUFPO2FBQ3BDO1FBQ0FULEtBQUtHLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLFdBQWdDQyxLQUFLLEdBQUc7UUFFakVkLGFBQWE7UUFFYixNQUFNbUIsYUFBYSxNQUFNaEQsY0FBY3dDO1FBRXZDWCxhQUFhO1FBRWIsSUFBSW1CLFlBQVk7WUFDZCxNQUFNQyxvQkFBb0JqQyxlQUFlZ0M7WUFFekNyQixZQUFZLENBQUNrQixlQUFpQjt1QkFDekJBO29CQUNIO3dCQUFFQyxNQUFNRzt3QkFBbUJGLE1BQU07b0JBQUs7aUJBQ3ZDO1FBQ0g7UUFFQ1QsS0FBS0csUUFBUSxDQUFDQyxTQUFTLENBQUMsV0FBZ0NDLEtBQUssR0FBRztJQUNuRTtJQUVBLHFCQUNFLDhEQUFDdEQseURBQU1BO1FBQUM2RCxNQUFNMUI7UUFBUTJCLGNBQWMxQjtrQkFDbEMsNEVBQUNuQyxnRUFBYUE7WUFBQzhELFdBQVU7OzhCQUN2Qiw4REFBQzdELCtEQUFZQTs7c0NBQ1gsOERBQUNDLDhEQUFXQTtzQ0FBQzs7Ozs7O3NDQUNiLDhEQUFDQyw4REFBV0E7Ozs7Ozs7Ozs7OzhCQUVkLDhEQUFDNEQ7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDckQscURBQUlBOzRCQUFDcUQsV0FBVTs7Z0NBQ2IxQixTQUFTNEIsTUFBTSxLQUFLLG1CQUNuQiw4REFBQ0M7b0NBQUtILFdBQVU7OENBQTBGOzs7Ozs7Z0NBSTNHMUIsU0FBUzhCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNMO3dDQUVDRCxXQUFXLFFBQWdFLE9BQXhESyxRQUFRVixJQUFJLEtBQUssT0FBTyxrQkFBa0IsZUFBYztrREFFM0UsNEVBQUNNOzRDQUNDRCxXQUFXLGlDQUFxSCxPQUFwRkssUUFBUVYsSUFBSSxLQUFLLE9BQU8sK0JBQStCOzRDQUNuR1kseUJBQXlCO2dEQUFFQyxRQUFRSCxRQUFRWCxJQUFJOzRDQUFDOzs7Ozs7dUNBTDdDWTs7Ozs7OENBU1QsOERBQUNMO29DQUFJUSxLQUFLL0I7Ozs7Ozs7Ozs7OztzQ0FFWiw4REFBQ1E7NEJBQ0N3QixVQUFVM0I7NEJBQ1ZpQixXQUFVOzs4Q0FFViw4REFBQ3RELHVEQUFLQTtvQ0FBQ2lFLFNBQVE7b0NBQVVYLFdBQVU7OENBQVU7Ozs7Ozs4Q0FHN0MsOERBQUNDO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ3ZELHVEQUFLQTs0Q0FDSm1FLFFBQVE7NENBQ1JDLElBQUc7NENBQ0hDLE1BQUs7NENBQ0xDLGFBQVk7NENBQ1pmLFdBQVU7Ozs7OztzREFFWiw4REFBQzFELHlEQUFNQTs0Q0FDTHFELE1BQUs7NENBQ0xxQixNQUFLOzRDQUNMaEIsV0FBVTs0Q0FDVmlCLFVBQVV6QztzREFFVEEsMEJBQVksOERBQUNqQyx3RkFBT0E7Z0RBQUN5RCxXQUFVOzs7OzswRUFBNkIsOERBQUN4RCx3RkFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRjtHQW5HTTJCO0tBQUFBO0FBcUdOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRCb3QudHN4P2VkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0hlYWRlciwgRGlhbG9nVGl0bGUsIERpYWxvZ0Nsb3NlIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2RpYWxvZyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IExvYWRlcjIsIFNlbmQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvbGFiZWwnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJkJztcblxuaW50ZXJmYWNlIENoYXREaWFsb2dQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHR5cGU6ICd1c2VyJyB8ICdhaSc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFpUmVzcG9uc2UobXlUZXh0OiBzdHJpbmcgPSAnaGVsbG8nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvYXBpL2JvdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvbXB0OiBteVRleHQgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIHJldHVybiBkYXRhLmdpcnJhZmVBaSB8fCBudWxsO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFJlc3BvbnNlKHJlc3BvbnNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZm9ybWF0dGVkID0gcmVzcG9uc2UucmVwbGFjZSgvXFxuL2csICc8YnI+Jyk7XG4gIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5yZXBsYWNlKC9cXCpcXCooLio/KVxcKlxcKi9nLCAoXywgcDEpID0+IGA8Yj4ke3AxLnRvVXBwZXJDYXNlKCl9PC9iPmApO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5jb25zdCBDaGF0RGlhbG9nOiBSZWFjdC5GQzxDaGF0RGlhbG9nUHJvcHM+ID0gKHsgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNjcm9sbFRvQm90dG9tKCk7XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IChmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbSgnbWVzc2FnZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobWVzc2FnZUlucHV0ID09PSAnJykgcmV0dXJuO1xuXG4gICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gW1xuICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgeyB0ZXh0OiBtZXNzYWdlSW5wdXQsIHR5cGU6ICd1c2VyJyB9LFxuICAgIF0pO1xuICAgIChmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbSgnbWVzc2FnZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcblxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGFpUmVzcG9uc2UgPSBhd2FpdCBnZXRBaVJlc3BvbnNlKG1lc3NhZ2VJbnB1dCk7XG5cbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgaWYgKGFpUmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3BvbnNlID0gZm9ybWF0UmVzcG9uc2UoYWlSZXNwb25zZSk7XG5cbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFtcbiAgICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgICB7IHRleHQ6IGZvcm1hdHRlZFJlc3BvbnNlLCB0eXBlOiAnYWknIH0sXG4gICAgICBdKTtcbiAgICB9XG5cbiAgICAoZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oJ21lc3NhZ2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtpc09wZW59IG9uT3BlbkNoYW5nZT17b25DbG9zZX0+XG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJoLXNjcmVlbiBtZDptYXgtaC1bOTB2aF0gaC1zY3JlZW4gYmctYmFja2dyb3VuZCB6LVs5OTk5XSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxEaWFsb2dIZWFkZXI+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlPkNoYXQgd2l0aCBBbm51YXIgQWk8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDbG9zZSAvPlxuICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMSBnYXAtM1wiPlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gYmctYmFja2dyb3VuZCBwLTNcIj5cbiAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMC8yMCByb3VuZGVkLWZ1bGwgcC0zIG0tYXV0byBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdy1tYXhcIj5cbiAgICAgICAgICAgICAgICBFbnRlciBwcm9tcHQgdG8gdGFsayB0byBBbm51YXIgQWlcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHttZXNzYWdlLnR5cGUgPT09ICdhaScgPyAnanVzdGlmeS1zdGFydCcgOiAnanVzdGlmeS1lbmQnfSBtYi0yYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2UtYnViYmxlIHAtMyByb3VuZGVkLWxnICR7bWVzc2FnZS50eXBlID09PSAnYWknID8gJ2FpLXJlc3BvbnNlIGJnLXRyYW5zcGFyZW50JyA6ICdteS1yZXNwb25zZSBiZy1ncmF5LTQwMC80MCd9YH1cbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZS50ZXh0IH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXYgcmVmPXttZXNzYWdlc0VuZFJlZn0gLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIG10LWF1dG8gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYm9yZGVyIGJnLWJhY2tncm91bmQgZm9jdXMtd2l0aGluOnJpbmctMSBmb2N1cy13aXRoaW46cmluZy1yaW5nXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTIgcHktMlwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyLTAgc2hhZG93LW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTAgZmxleC1ncm93IHBzLTFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC1hdXRvIGdhcC0xLjUgbWluLXctMTAgaC0xMFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyA8TG9hZGVyMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBhbmltYXRlLXNwaW5cIiAvPiA6IDxTZW5kIC8+fVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0RGlhbG9nO1xuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nQ2xvc2UiLCJCdXR0b24iLCJMb2FkZXIyIiwiU2VuZCIsIklucHV0IiwiTGFiZWwiLCJDYXJkIiwiZ2V0QWlSZXNwb25zZSIsIm15VGV4dCIsInJlc3AiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb21wdCIsImRhdGEiLCJqc29uIiwiZ2lycmFmZUFpIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZvcm1hdFJlc3BvbnNlIiwicmVzcG9uc2UiLCJmb3JtYXR0ZWQiLCJyZXBsYWNlIiwiXyIsInAxIiwidG9VcHBlckNhc2UiLCJDaGF0RGlhbG9nIiwiaXNPcGVuIiwib25DbG9zZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJtZXNzYWdlc0VuZFJlZiIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsIm1lc3NhZ2VJbnB1dCIsImVsZW1lbnRzIiwibmFtZWRJdGVtIiwidmFsdWUiLCJ0cmltIiwicHJldk1lc3NhZ2VzIiwidGV4dCIsInR5cGUiLCJhaVJlc3BvbnNlIiwiZm9ybWF0dGVkUmVzcG9uc2UiLCJvcGVuIiwib25PcGVuQ2hhbmdlIiwiY2xhc3NOYW1lIiwiZGl2IiwibGVuZ3RoIiwic3BhbiIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVmIiwib25TdWJtaXQiLCJodG1sRm9yIiwicmVxdWlyZWQiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInNpemUiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatBot.tsx\n"));

/***/ })

});