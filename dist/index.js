/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/home.view */ \"./src/views/home.view.ts\");\n/* harmony import */ var _views_navigation_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/navigation.view */ \"./src/views/navigation.view.ts\");\n/* harmony import */ var _views_view_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/view.utils */ \"./src/views/view.utils.ts\");\n\n\n\nfunction init() {\n  var navSection = document.getElementById(\"section-nav\");\n  var navView = (0,_views_navigation_view__WEBPACK_IMPORTED_MODULE_1__.makeNavView)();\n  navSection === null || navSection === void 0 || navSection.appendChild(navView);\n  var homeView = (0,_views_home_view__WEBPACK_IMPORTED_MODULE_0__.makeHomeView)();\n  (0,_views_view_utils__WEBPACK_IMPORTED_MODULE_2__.renderView)(homeView);\n}\ninit();\n\n//# sourceURL=webpack://website-ui/./src/index.ts?");

/***/ }),

/***/ "./src/views/about.view.ts":
/*!*********************************!*\
  !*** ./src/views/about.view.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeAboutView: () => (/* binding */ makeAboutView)\n/* harmony export */ });\n/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ \"./src/views/view.utils.ts\");\n\nvar paragraph1 = [(0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeSpan)(\"This website is being developed using \"), (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeLink)(\"https://medium.com/swlh/refactoring-a-static-html-site-into-typescript-part-1-of-2-the-content-b4c975ecab00\", \"this\"), (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeSpan)(\" article written by Prof. Simon Lutterbie.\")];\nfunction makeAboutView() {\n  var view = document.createElement('div');\n  var para1 = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)();\n  paragraph1.forEach(function (segment) {\n    para1.appendChild(segment);\n  });\n  view.appendChild(para1);\n  return view;\n}\n\n//# sourceURL=webpack://website-ui/./src/views/about.view.ts?");

/***/ }),

/***/ "./src/views/author.view.ts":
/*!**********************************!*\
  !*** ./src/views/author.view.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeAuthorView: () => (/* binding */ makeAuthorView)\n/* harmony export */ });\n/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ \"./src/views/view.utils.ts\");\n\nvar paragraph = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)(\"This website is currently being developed by Jake Hensley, a sophmore Computer Engineering Student at Northeatern University.\");\nfunction makeAuthorView() {\n  var view = document.createElement('div');\n  view.appendChild(paragraph);\n  return view;\n}\n\n//# sourceURL=webpack://website-ui/./src/views/author.view.ts?");

/***/ }),

/***/ "./src/views/home.view.ts":
/*!********************************!*\
  !*** ./src/views/home.view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeHomeView: () => (/* binding */ makeHomeView)\n/* harmony export */ });\n/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ \"./src/views/view.utils.ts\");\n\nfunction makeHomeView() {\n  var view = document.createElement(\"div\");\n  var paragraph = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)(\"Welcome to my website!\");\n  view.appendChild(paragraph);\n  return view;\n}\n\n//# sourceURL=webpack://website-ui/./src/views/home.view.ts?");

/***/ }),

/***/ "./src/views/navigation.view.ts":
/*!**************************************!*\
  !*** ./src/views/navigation.view.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleNavClick: () => (/* binding */ handleNavClick),\n/* harmony export */   makeNavLink: () => (/* binding */ makeNavLink),\n/* harmony export */   makeNavView: () => (/* binding */ makeNavView)\n/* harmony export */ });\n/* harmony import */ var _about_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.view */ \"./src/views/about.view.ts\");\n/* harmony import */ var _author_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author.view */ \"./src/views/author.view.ts\");\n/* harmony import */ var _home_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.view */ \"./src/views/home.view.ts\");\n/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.utils */ \"./src/views/view.utils.ts\");\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n\n\n\n//array of different pages\nvar NAV_ITEMS = [[\"Home\", _home_view__WEBPACK_IMPORTED_MODULE_2__.makeHomeView], [\"About\", _about_view__WEBPACK_IMPORTED_MODULE_0__.makeAboutView], [\"Author\", _author_view__WEBPACK_IMPORTED_MODULE_1__.makeAuthorView]];\nfunction makeNavView() {\n  var wrapper = document.createElement(\"div\");\n  NAV_ITEMS.forEach(function (navItem) {\n    var navLink = makeNavLink.apply(void 0, _toConsumableArray(navItem));\n    wrapper.appendChild(navLink);\n  });\n  return wrapper;\n}\nfunction makeNavLink(label, viewFn) {\n  var link = document.createElement(\"a\");\n  link.textContent = label;\n  link.addEventListener(\"click\", handleNavClick(viewFn));\n  link.setAttribute(\"style\", \"padding: 2px; text-decoration: underline; cursor: pointer\");\n  return link;\n}\nfunction handleNavClick(viewFn) {\n  return function (event) {\n    event.preventDefault();\n    (0,_view_utils__WEBPACK_IMPORTED_MODULE_3__.renderView)(viewFn());\n  };\n}\n\n//# sourceURL=webpack://website-ui/./src/views/navigation.view.ts?");

/***/ }),

/***/ "./src/views/view.utils.ts":
/*!*********************************!*\
  !*** ./src/views/view.utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeLink: () => (/* binding */ makeLink),\n/* harmony export */   makeParagraph: () => (/* binding */ makeParagraph),\n/* harmony export */   makeSpan: () => (/* binding */ makeSpan),\n/* harmony export */   renderView: () => (/* binding */ renderView)\n/* harmony export */ });\nfunction makeParagraph() {\n  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var paragraph = document.createElement('p');\n  paragraph.textContent = text;\n  return paragraph;\n}\nfunction makeLink(href, label) {\n  var newTab = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var link = document.createElement(\"a\");\n  link.setAttribute(\"href\", href);\n  link.textContent = label;\n  if (newTab) {\n    link.setAttribute(\"target\", \"_blank\");\n  }\n  return link;\n}\nfunction makeSpan(text) {\n  var span = document.createElement(\"span\");\n  span.textContent = text;\n  return span;\n}\nfunction renderView(view) {\n  var wrapper = clearMainWrapper();\n  wrapper === null || wrapper === void 0 || wrapper.appendChild(view);\n}\nfunction clearMainWrapper() {\n  var wrapper = document.getElementById(\"section-content\");\n  wrapper === null || wrapper === void 0 || wrapper.childNodes.forEach(function (childNode) {\n    wrapper.removeChild(childNode);\n  });\n  return wrapper;\n}\n\n//# sourceURL=webpack://website-ui/./src/views/view.utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;