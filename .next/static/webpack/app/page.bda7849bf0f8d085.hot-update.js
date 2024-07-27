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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n// components/ChatDialog.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// Mock function to simulate AI response\nasync function getAiResponse() {\n    let myText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"hello\";\n    try {\n        // Replace with your actual API endpoint\n        const resp = await fetch(\"/api/bot\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                prompt: myText\n            })\n        });\n        const data = await resp.json();\n        if (data.girrafeAi) {\n            return data.girrafeAi;\n        } else {\n            console.error(\"Unexpected response structure:\", data);\n            return null;\n        }\n    } catch (err) {\n        console.log(err);\n        return null;\n    }\n}\n// Function to format AI response\nfunction formatResponse(response) {\n    // Replace \\n with <br> for new lines\n    let formatted = response.replace(/\\n/g, \"<br>\");\n    // Capitalize words between double asterisks and replace with <b>\n    formatted = formatted.replace(/\\*\\*(.*?)\\*\\*/g, (_, p1)=>{\n        return \"<b>\".concat(p1.toUpperCase(), \"</b>\");\n    });\n    return formatted;\n}\nconst ChatDialog = (param)=>{\n    let { isOpen, onClose } = param;\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const form = e.currentTarget;\n        const messageInput = form.elements.namedItem(\"message\").value.trim();\n        if (messageInput === \"\") return;\n        // Add user message to messages array\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                {\n                    text: messageInput,\n                    type: \"user\"\n                }\n            ]);\n        form.elements.namedItem(\"message\").value = \"\";\n        // Set loading state\n        setIsLoading(true);\n        // Get AI response\n        const aiResponse = await getAiResponse(messageInput);\n        // Clear loading state\n        setIsLoading(false);\n        if (aiResponse) {\n            // Format AI response\n            const formattedResponse = formatResponse(aiResponse);\n            // Add AI response to messages array\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: formattedResponse,\n                        type: \"ai\"\n                    }\n                ]);\n        }\n        // Clear input field\n        form.elements.namedItem(\"message\").value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        open: isOpen,\n        onOpenChange: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n            className: \"sm:max-w-[425px] bg-background md:h-[31.5rem] h-screen z-[9999]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                            children: \"Chat with Annuar Ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {}, void 0, false, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-3 h-[26rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                            className: \"relative flex-1 p-4 overflow-y-auto md:h-[50vh] h-full  no-scrollbar bg-background\",\n                            children: [\n                                messages.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-gray-400/20 rounded-full p-3 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 w-max\",\n                                    children: \"Enter prompt to talk to Annuar Ai\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, undefined),\n                                messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex \".concat(message.type === \"ai\" ? \"justify-start\" : \"justify-end\", \" mb-2\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"message-bubble p-3 rounded-lg \".concat(message.type === \"ai\" ? \"ai-response bg-transparent\" : \"my-response bg-gray-400/40\"),\n                                            // Use dangerouslySetInnerHTML to render sanitized HTML\n                                            dangerouslySetInnerHTML: {\n                                                __html: message.text\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ref: messagesEndRef\n                                }, void 0, false, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"pt-2 mt-auto relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"message\",\n                                    className: \"sr-only\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center pt-0 gap-3 px-2 py-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                            required: true,\n                                            id: \"message\",\n                                            name: \"message\",\n                                            placeholder: \"Type your message here...\",\n                                            className: \"resize-none border-0 shadow-none focus-visible:ring-0 flex-grow ps-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            type: \"submit\",\n                                            size: \"sm\",\n                                            className: \"ml-auto gap-1.5 min-w-10 h-10\",\n                                            disabled: isLoading,\n                                            children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                className: \"text-2xl animate-spin\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                                lineNumber: 163,\n                                                columnNumber: 30\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Send_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                                lineNumber: 163,\n                                                columnNumber: 78\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                            lineNumber: 157,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ramo/Desktop/portfolio/myportfolio/src/components/ChatBot.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatDialog, \"oB5mluyB22AKtEGxVJYRLrDd3EQ=\");\n_c = ChatDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatDialog);\nvar _c;\n$RefreshReg$(_c, \"ChatDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRCb3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsNEJBQTRCOzs7QUFFMEM7QUFDaUM7QUFDdkQ7QUFDSDtBQUNDO0FBQ0E7QUFDRjtBQWE1Qyx3Q0FBd0M7QUFDeEMsZUFBZWU7UUFBY0MsU0FBQUEsaUVBQWlCO0lBQzVDLElBQUk7UUFDRix3Q0FBd0M7UUFDeEMsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLFlBQVk7WUFDbkNDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxRQUFRUjtZQUFPO1FBQ3hDO1FBQ0EsTUFBTVMsT0FBTyxNQUFNUixLQUFLUyxJQUFJO1FBQzVCLElBQUlELEtBQUtFLFNBQVMsRUFBRTtZQUNsQixPQUFPRixLQUFLRSxTQUFTO1FBQ3ZCLE9BQU87WUFDTEMsUUFBUUMsS0FBSyxDQUFDLGtDQUFrQ0o7WUFDaEQsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPSyxLQUFLO1FBQ1pGLFFBQVFHLEdBQUcsQ0FBQ0Q7UUFDWixPQUFPO0lBQ1Q7QUFDRjtBQUVBLGlDQUFpQztBQUNqQyxTQUFTRSxlQUFlQyxRQUFnQjtJQUN0QyxxQ0FBcUM7SUFDckMsSUFBSUMsWUFBWUQsU0FBU0UsT0FBTyxDQUFDLE9BQU87SUFFeEMsaUVBQWlFO0lBQ2pFRCxZQUFZQSxVQUFVQyxPQUFPLENBQUMsa0JBQWtCLENBQUNDLEdBQUdDO1FBQ2xELE9BQU8sTUFBdUIsT0FBakJBLEdBQUdDLFdBQVcsSUFBRztJQUNoQztJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxNQUFNSyxhQUF3QztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFOztJQUNoRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRzFDLCtDQUFRQSxDQUFZLEVBQUU7SUFDdEQsTUFBTSxDQUFDMkMsV0FBV0MsYUFBYSxHQUFHNUMsK0NBQVFB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TTRCO0tBQUFBO0FBaUhOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRCb3QudHN4P2VkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBjb21wb25lbnRzL0NoYXREaWFsb2cudHN4XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nQ29udGVudCwgRGlhbG9nSGVhZGVyLCBEaWFsb2dUaXRsZSwgRGlhbG9nQ2xvc2UgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvZGlhbG9nJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IHsgTG9hZGVyMiwgU2VuZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9pbnB1dCc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9sYWJlbCc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2NhcmQnO1xuXG5cbmludGVyZmFjZSBDaGF0RGlhbG9nUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgdGV4dDogc3RyaW5nO1xuICB0eXBlOiAndXNlcicgfCAnYWknO1xufVxuXG4vLyBNb2NrIGZ1bmN0aW9uIHRvIHNpbXVsYXRlIEFJIHJlc3BvbnNlXG5hc3luYyBmdW5jdGlvbiBnZXRBaVJlc3BvbnNlKG15VGV4dDogc3RyaW5nID0gJ2hlbGxvJyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBBUEkgZW5kcG9pbnRcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9hcGkvYm90Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9tcHQ6IG15VGV4dCB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgaWYgKGRhdGEuZ2lycmFmZUFpKSB7XG4gICAgICByZXR1cm4gZGF0YS5naXJyYWZlQWk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgcmVzcG9uc2Ugc3RydWN0dXJlOicsIGRhdGEpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZvcm1hdCBBSSByZXNwb25zZVxuZnVuY3Rpb24gZm9ybWF0UmVzcG9uc2UocmVzcG9uc2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFJlcGxhY2UgXFxuIHdpdGggPGJyPiBmb3IgbmV3IGxpbmVzXG4gIGxldCBmb3JtYXR0ZWQgPSByZXNwb25zZS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKTtcblxuICAvLyBDYXBpdGFsaXplIHdvcmRzIGJldHdlZW4gZG91YmxlIGFzdGVyaXNrcyBhbmQgcmVwbGFjZSB3aXRoIDxiPlxuICBmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZSgvXFwqXFwqKC4qPylcXCpcXCovZywgKF8sIHAxKSA9PiB7XG4gICAgcmV0dXJuIGA8Yj4ke3AxLnRvVXBwZXJDYXNlKCl9PC9iPmA7XG4gIH0pO1xuXG4gIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5cbmNvbnN0IENoYXREaWFsb2c6IFJlYWN0LkZDPENoYXREaWFsb2dQcm9wcz4gPSAoeyBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfSwgW21lc3NhZ2VzXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgbWVzc2FnZUlucHV0ID0gKGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKCdtZXNzYWdlJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudHJpbSgpO1xuICAgIGlmIChtZXNzYWdlSW5wdXQgPT09ICcnKSByZXR1cm47XG5cbiAgICAvLyBBZGQgdXNlciBtZXNzYWdlIHRvIG1lc3NhZ2VzIGFycmF5XG4gICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gW1xuICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgeyB0ZXh0OiBtZXNzYWdlSW5wdXQsIHR5cGU6ICd1c2VyJyB9LFxuICAgIF0pO1xuICAgIChmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbSgnbWVzc2FnZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcblxuICAgIC8vIFNldCBsb2FkaW5nIHN0YXRlXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgLy8gR2V0IEFJIHJlc3BvbnNlXG4gICAgY29uc3QgYWlSZXNwb25zZSA9IGF3YWl0IGdldEFpUmVzcG9uc2UobWVzc2FnZUlucHV0KTtcblxuICAgIC8vIENsZWFyIGxvYWRpbmcgc3RhdGVcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgaWYgKGFpUmVzcG9uc2UpIHtcbiAgICAgIC8vIEZvcm1hdCBBSSByZXNwb25zZVxuICAgICAgY29uc3QgZm9ybWF0dGVkUmVzcG9uc2UgPSBmb3JtYXRSZXNwb25zZShhaVJlc3BvbnNlKTtcblxuICAgICAgLy8gQWRkIEFJIHJlc3BvbnNlIHRvIG1lc3NhZ2VzIGFycmF5XG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgeyB0ZXh0OiBmb3JtYXR0ZWRSZXNwb25zZSwgdHlwZTogJ2FpJyB9LFxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgaW5wdXQgZmllbGRcbiAgICAoZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oJ21lc3NhZ2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtpc09wZW59IG9uT3BlbkNoYW5nZT17b25DbG9zZX0+XG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJzbTptYXgtdy1bNDI1cHhdIGJnLWJhY2tncm91bmQgbWQ6aC1bMzEuNXJlbV0gaC1zY3JlZW4gei1bOTk5OV1cIj5cblxuICAgICAgICA8RGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxEaWFsb2dUaXRsZT5DaGF0IHdpdGggQW5udWFyIEFpPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ2xvc2UgLz5cbiAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBoLVsyNnJlbV1cIj5cblxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSBwLTQgb3ZlcmZsb3cteS1hdXRvIG1kOmgtWzUwdmhdIGgtZnVsbCAgbm8tc2Nyb2xsYmFyIGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMC8yMCByb3VuZGVkLWZ1bGwgcC0zIG0tYXV0byBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdy1tYXhcIj5cbiAgICAgICAgICAgICAgICBFbnRlciBwcm9tcHQgdG8gdGFsayB0byBBbm51YXIgQWlcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHttZXNzYWdlLnR5cGUgPT09ICdhaScgPyAnanVzdGlmeS1zdGFydCcgOiAnanVzdGlmeS1lbmQnXG4gICAgICAgICAgICAgICAgICB9IG1iLTJgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVzc2FnZS1idWJibGUgcC0zIHJvdW5kZWQtbGcgJHttZXNzYWdlLnR5cGUgPT09ICdhaScgPyAnYWktcmVzcG9uc2UgYmctdHJhbnNwYXJlbnQnIDogJ215LXJlc3BvbnNlIGJnLWdyYXktNDAwLzQwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIC8vIFVzZSBkYW5nZXJvdXNseVNldElubmVySFRNTCB0byByZW5kZXIgc2FuaXRpemVkIEhUTUxcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZS50ZXh0IH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXYgcmVmPXttZXNzYWdlc0VuZFJlZn0gLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIG10LWF1dG8gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYm9yZGVyIGJnLWJhY2tncm91bmQgZm9jdXMtd2l0aGluOnJpbmctMSBmb2N1cy13aXRoaW46cmluZy1yaW5nXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB0LTAgZ2FwLTMgcHgtMiBweS0yXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZSBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXItMCBzaGFkb3ctbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMCBmbGV4LWdyb3cgcHMtMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLWF1dG8gZ2FwLTEuNSBtaW4tdy0xMCBoLTEwXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfSAvLyBEaXNhYmxlIGJ1dHRvbiB3aGlsZSBsb2FkaW5nXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRlcjIgY2xhc3NOYW1lPVwidGV4dC0yeGwgYW5pbWF0ZS1zcGluXCIgLz4gOiA8U2VuZCAvPn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgIDwvRGlhbG9nPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdERpYWxvZztcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dDbG9zZSIsIkJ1dHRvbiIsIkxvYWRlcjIiLCJTZW5kIiwiSW5wdXQiLCJMYWJlbCIsIkNhcmQiLCJnZXRBaVJlc3BvbnNlIiwibXlUZXh0IiwicmVzcCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbXB0IiwiZGF0YSIsImpzb24iLCJnaXJyYWZlQWkiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJsb2ciLCJmb3JtYXRSZXNwb25zZSIsInJlc3BvbnNlIiwiZm9ybWF0dGVkIiwicmVwbGFjZSIsIl8iLCJwMSIsInRvVXBwZXJDYXNlIiwiQ2hhdERpYWxvZyIsImlzT3BlbiIsIm9uQ2xvc2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibWVzc2FnZXNFbmRSZWYiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJtZXNzYWdlSW5wdXQiLCJlbGVtZW50cyIsIm5hbWVkSXRlbSIsInZhbHVlIiwidHJpbSIsInByZXZNZXNzYWdlcyIsInRleHQiLCJ0eXBlIiwiYWlSZXNwb25zZSIsImZvcm1hdHRlZFJlc3BvbnNlIiwib3BlbiIsIm9uT3BlbkNoYW5nZSIsImNsYXNzTmFtZSIsImRpdiIsImxlbmd0aCIsInNwYW4iLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlZiIsIm9uU3VibWl0IiwiaHRtbEZvciIsInJlcXVpcmVkIiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzaXplIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatBot.tsx\n"));

/***/ })

});