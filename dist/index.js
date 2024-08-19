/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/about.view.ts":
/*!*********************************!*\
  !*** ./src/views/about.view.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeAboutView: () => (/* binding */ makeAboutView)
/* harmony export */ });
/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ "./src/views/view.utils.ts");

var paragraph1 = [(0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeSpan)("This website is being developed using "), (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeLink)("https://medium.com/swlh/refactoring-a-static-html-site-into-typescript-part-1-of-2-the-content-b4c975ecab00", "this"), (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeSpan)(" article written by Prof. Simon Lutterbie.")];
function makeAboutView() {
  var view = document.createElement('div');
  var para1 = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)();
  paragraph1.forEach(function (segment) {
    para1.appendChild(segment);
  });
  view.appendChild(para1);
  return view;
}

/***/ }),

/***/ "./src/views/author.view.ts":
/*!**********************************!*\
  !*** ./src/views/author.view.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeAuthorView: () => (/* binding */ makeAuthorView)
/* harmony export */ });
/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ "./src/views/view.utils.ts");

var paragraph = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)("This website is currently being developed by Jake Hensley, a sophmore Computer Engineering Student at Northeatern University.");
function makeAuthorView() {
  var view = document.createElement('div');
  view.appendChild(paragraph);
  return view;
}

/***/ }),

/***/ "./src/views/home.view.ts":
/*!********************************!*\
  !*** ./src/views/home.view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeHomeView: () => (/* binding */ makeHomeView)
/* harmony export */ });
/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.utils */ "./src/views/view.utils.ts");

function makeHomeView() {
  var view = document.createElement("div");
  var paragraph = (0,_view_utils__WEBPACK_IMPORTED_MODULE_0__.makeParagraph)("Welcome to my website!");
  view.appendChild(paragraph);
  return view;
}

/***/ }),

/***/ "./src/views/navigation.view.ts":
/*!**************************************!*\
  !*** ./src/views/navigation.view.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleNavClick: () => (/* binding */ handleNavClick),
/* harmony export */   makeNavLink: () => (/* binding */ makeNavLink),
/* harmony export */   makeNavView: () => (/* binding */ makeNavView)
/* harmony export */ });
/* harmony import */ var _about_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.view */ "./src/views/about.view.ts");
/* harmony import */ var _author_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author.view */ "./src/views/author.view.ts");
/* harmony import */ var _home_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.view */ "./src/views/home.view.ts");
/* harmony import */ var _view_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.utils */ "./src/views/view.utils.ts");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




//array of different pages
var NAV_ITEMS = [["Home", _home_view__WEBPACK_IMPORTED_MODULE_2__.makeHomeView], ["About", _about_view__WEBPACK_IMPORTED_MODULE_0__.makeAboutView], ["Author", _author_view__WEBPACK_IMPORTED_MODULE_1__.makeAuthorView]];
function makeNavView() {
  var wrapper = document.createElement("div");
  NAV_ITEMS.forEach(function (navItem) {
    var navLink = makeNavLink.apply(void 0, _toConsumableArray(navItem));
    wrapper.appendChild(navLink);
  });
  return wrapper;
}
function makeNavLink(label, viewFn) {
  var link = document.createElement("a");
  link.textContent = label;
  link.addEventListener("click", handleNavClick(viewFn));
  link.setAttribute("style", "padding: 5px; text-decoration: underline; cursor: pointer");
  link.style.fontSize = "25px";
  link.style.border = "3px solid black";
  return link;
}
function handleNavClick(viewFn) {
  return function (event) {
    event.preventDefault();
    (0,_view_utils__WEBPACK_IMPORTED_MODULE_3__.renderView)(viewFn());
  };
}

/***/ }),

/***/ "./src/views/view.utils.ts":
/*!*********************************!*\
  !*** ./src/views/view.utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeLink: () => (/* binding */ makeLink),
/* harmony export */   makeParagraph: () => (/* binding */ makeParagraph),
/* harmony export */   makeSpan: () => (/* binding */ makeSpan),
/* harmony export */   renderView: () => (/* binding */ renderView)
/* harmony export */ });
function makeParagraph() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}
function makeLink(href, label) {
  var newTab = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var link = document.createElement("a");
  link.setAttribute("href", href);
  link.textContent = label;
  if (newTab) {
    link.setAttribute("target", "_blank");
  }
  return link;
}
function makeSpan(text) {
  var span = document.createElement("span");
  span.textContent = text;
  return span;
}
function renderView(view) {
  var wrapper = clearMainWrapper();
  view.style.margin = "20px";
  view.style.padding = "5px";
  wrapper === null || wrapper === void 0 || wrapper.appendChild(view);
}
function clearMainWrapper() {
  var wrapper = document.getElementById("section-content");
  wrapper === null || wrapper === void 0 || wrapper.childNodes.forEach(function (childNode) {
    wrapper.removeChild(childNode);
  });
  return wrapper;
}

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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_home_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/home.view */ "./src/views/home.view.ts");
/* harmony import */ var _views_navigation_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/navigation.view */ "./src/views/navigation.view.ts");
/* harmony import */ var _views_view_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/view.utils */ "./src/views/view.utils.ts");



function init() {
  var navSection = document.getElementById("section-nav");
  var navView = (0,_views_navigation_view__WEBPACK_IMPORTED_MODULE_1__.makeNavView)();
  navView.style.margin = "20px";
  navSection === null || navSection === void 0 || navSection.appendChild(navView);
  var homeView = (0,_views_home_view__WEBPACK_IMPORTED_MODULE_0__.makeHomeView)();
  (0,_views_view_utils__WEBPACK_IMPORTED_MODULE_2__.renderView)(homeView);
}
init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBTUMsUUFBUSxHQUFHdkMsOERBQVksQ0FBQyxDQUFDO0VBQy9CQyw2REFBVSxDQUFDc0MsUUFBUSxDQUFDO0FBR3hCO0FBQ0FILElBQUksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLXVpLy4vc3JjL3ZpZXdzL2Fib3V0LnZpZXcudHMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS8uL3NyYy92aWV3cy9hdXRob3Iudmlldy50cyIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpLy4vc3JjL3ZpZXdzL2hvbWUudmlldy50cyIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpLy4vc3JjL3ZpZXdzL25hdmlnYXRpb24udmlldy50cyIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpLy4vc3JjL3ZpZXdzL3ZpZXcudXRpbHMudHMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnNpdGUtdWkvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUxpbmssIG1ha2VQYXJhZ3JhcGgsIG1ha2VTcGFuIH0gZnJvbSBcIi4vdmlldy51dGlsc1wiO1xyXG5cclxuY29uc3QgcGFyYWdyYXBoMSA9IFtcclxuICAgIG1ha2VTcGFuKFwiVGhpcyB3ZWJzaXRlIGlzIGJlaW5nIGRldmVsb3BlZCB1c2luZyBcIiksXHJcbiAgICBtYWtlTGluayhcImh0dHBzOi8vbWVkaXVtLmNvbS9zd2xoL3JlZmFjdG9yaW5nLWEtc3RhdGljLWh0bWwtc2l0ZS1pbnRvLXR5cGVzY3JpcHQtcGFydC0xLW9mLTItdGhlLWNvbnRlbnQtYjRjOTc1ZWNhYjAwXCIsIFwidGhpc1wiKSxcclxuICAgIG1ha2VTcGFuKFwiIGFydGljbGUgd3JpdHRlbiBieSBQcm9mLiBTaW1vbiBMdXR0ZXJiaWUuXCIpLFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBYm91dFZpZXcoKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYXJhMSA9IG1ha2VQYXJhZ3JhcGgoKTtcclxuICAgIHBhcmFncmFwaDEuZm9yRWFjaCgoc2VnbWVudCkgPT4ge3BhcmExLmFwcGVuZENoaWxkKHNlZ21lbnQpO1xyXG5cclxuICAgIH1cclxuKTtcclxuICAgIHZpZXcuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG4gICAgcmV0dXJuIHZpZXc7XHJcbn0iLCJpbXBvcnQgeyBtYWtlTGluaywgbWFrZVBhcmFncmFwaCwgbWFrZVNwYW4gfSBmcm9tIFwiLi92aWV3LnV0aWxzXCI7XHJcblxyXG5jb25zdCBwYXJhZ3JhcGggPSBtYWtlUGFyYWdyYXBoKFwiVGhpcyB3ZWJzaXRlIGlzIGN1cnJlbnRseSBiZWluZyBkZXZlbG9wZWQgYnkgSmFrZSBIZW5zbGV5LCBhIHNvcGhtb3JlIENvbXB1dGVyIEVuZ2luZWVyaW5nIFN0dWRlbnQgYXQgTm9ydGhlYXRlcm4gVW5pdmVyc2l0eS5cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUF1dGhvclZpZXcoKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2aWV3LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICByZXR1cm4gdmlldztcclxufSIsImltcG9ydCB7IG1ha2VQYXJhZ3JhcGggfSBmcm9tIFwiLi92aWV3LnV0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhvbWVWaWV3KCkge1xyXG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBtYWtlUGFyYWdyYXBoKFwiV2VsY29tZSB0byBteSB3ZWJzaXRlIVwiKTtcclxuICAgIHZpZXcuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICAgIHJldHVybiB2aWV3O1xyXG59IiwiaW1wb3J0IHsgbWFrZUFib3V0VmlldyB9IGZyb20gXCIuL2Fib3V0LnZpZXdcIjtcclxuaW1wb3J0IHsgbWFrZUF1dGhvclZpZXcgfSBmcm9tIFwiLi9hdXRob3Iudmlld1wiO1xyXG5pbXBvcnQgeyBtYWtlSG9tZVZpZXcgfSBmcm9tIFwiLi9ob21lLnZpZXdcIjtcclxuaW1wb3J0IHsgcmVuZGVyVmlldyB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIjtcclxuXHJcbnR5cGUgTmF2SXRlbSA9IFtsYWJlbDogc3RyaW5nLCB2aWV3Rm46IEZ1bmN0aW9uXTtcclxuXHJcbi8vYXJyYXkgb2YgZGlmZmVyZW50IHBhZ2VzXHJcbmNvbnN0IE5BVl9JVEVNUzogTmF2SXRlbVtdID0gW1xyXG4gICAgW1wiSG9tZVwiLCBtYWtlSG9tZVZpZXddLFxyXG4gICAgW1wiQWJvdXRcIiwgbWFrZUFib3V0Vmlld10sXHJcbiAgICBbXCJBdXRob3JcIiwgbWFrZUF1dGhvclZpZXddXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU5hdlZpZXcoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBOQVZfSVRFTVMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkxpbmsgPSBtYWtlTmF2TGluayguLi5uYXZJdGVtKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hdkxpbmspO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU5hdkxpbmsobGFiZWw6IHN0cmluZywgdmlld0ZuOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGluay50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmF2Q2xpY2sodmlld0ZuKSk7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicGFkZGluZzogNXB4OyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY3Vyc29yOiBwb2ludGVyXCIpO1xyXG4gICAgbGluay5zdHlsZS5mb250U2l6ZSA9IFwiMjVweFwiO1xyXG4gICAgbGluay5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCBibGFja1wiO1xyXG5cclxuICAgIHJldHVybiBsaW5rO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOYXZDbGljayh2aWV3Rm46IEZ1bmN0aW9uKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZW5kZXJWaWV3KHZpZXdGbigpKTtcclxuICAgIH07XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWFrZVBhcmFncmFwaCh0ZXh0ID0gXCJcIikge1xyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBwYXJhZ3JhcGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGluayhocmVmOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIG5ld1RhYiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICBpZiAobmV3VGFiKSB7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGluaztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTcGFuKHRleHQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gc3BhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclZpZXcodmlldzogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBjbGVhck1haW5XcmFwcGVyKCk7XHJcbiAgICB2aWV3LnN0eWxlLm1hcmdpbiA9IFwiMjBweFwiO1xyXG4gICAgdmlldy5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcclxuICAgIHdyYXBwZXI/LmFwcGVuZENoaWxkKHZpZXcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhck1haW5XcmFwcGVyKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvbi1jb250ZW50XCIpO1xyXG4gICAgd3JhcHBlcj8uY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGNoaWxkTm9kZSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWFrZUhvbWVWaWV3IH0gZnJvbSBcIi4vdmlld3MvaG9tZS52aWV3XCI7XHJcbmltcG9ydCB7IG1ha2VOYXZWaWV3IH0gZnJvbSBcIi4vdmlld3MvbmF2aWdhdGlvbi52aWV3XCI7XHJcbmltcG9ydCB7IHJlbmRlclZpZXcgfSBmcm9tIFwiLi92aWV3cy92aWV3LnV0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgbmF2U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvbi1uYXZcIik7XHJcbiAgICBjb25zdCBuYXZWaWV3ID0gbWFrZU5hdlZpZXcoKTtcclxuICAgIG5hdlZpZXcuc3R5bGUubWFyZ2luID0gXCIyMHB4XCI7XHJcbiAgICBuYXZTZWN0aW9uPy5hcHBlbmRDaGlsZChuYXZWaWV3KTtcclxuXHJcbiAgICBjb25zdCBob21lVmlldyA9IG1ha2VIb21lVmlldygpO1xyXG4gICAgcmVuZGVyVmlldyhob21lVmlldyk7XHJcblxyXG4gICAgXHJcbn1cclxuaW5pdCgpOyJdLCJuYW1lcyI6WyJtYWtlTGluayIsIm1ha2VQYXJhZ3JhcGgiLCJtYWtlU3BhbiIsInBhcmFncmFwaDEiLCJtYWtlQWJvdXRWaWV3IiwidmlldyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBhcmExIiwiZm9yRWFjaCIsInNlZ21lbnQiLCJhcHBlbmRDaGlsZCIsInBhcmFncmFwaCIsIm1ha2VBdXRob3JWaWV3IiwibWFrZUhvbWVWaWV3IiwicmVuZGVyVmlldyIsIk5BVl9JVEVNUyIsIm1ha2VOYXZWaWV3Iiwid3JhcHBlciIsIm5hdkl0ZW0iLCJuYXZMaW5rIiwibWFrZU5hdkxpbmsiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsImxhYmVsIiwidmlld0ZuIiwibGluayIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU5hdkNsaWNrIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJmb250U2l6ZSIsImJvcmRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaHJlZiIsIm5ld1RhYiIsInNwYW4iLCJjbGVhck1haW5XcmFwcGVyIiwibWFyZ2luIiwicGFkZGluZyIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZSIsInJlbW92ZUNoaWxkIiwiaW5pdCIsIm5hdlNlY3Rpb24iLCJuYXZWaWV3IiwiaG9tZVZpZXciXSwic291cmNlUm9vdCI6IiJ9