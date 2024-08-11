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
  link.setAttribute("style", "padding: 2px; text-decoration: underline; cursor: pointer");
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
  navSection === null || navSection === void 0 || navSection.appendChild(navView);
  var homeView = (0,_views_home_view__WEBPACK_IMPORTED_MODULE_0__.makeHomeView)();
  (0,_views_view_utils__WEBPACK_IMPORTED_MODULE_2__.renderView)(homeView);
}
init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sR0FBR1osUUFBUSxDQUFDbUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0VBQzFEdkIsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXdCLFVBQVUsQ0FBQ2pDLE9BQU8sQ0FBQyxVQUFDa0MsU0FBUyxFQUFLO0lBQ3ZDekIsT0FBTyxDQUFDMEIsV0FBVyxDQUFDRCxTQUFTLENBQUM7RUFFbEMsQ0FBQyxDQUFDO0VBQ0YsT0FBT3pCLE9BQU87QUFDbEI7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ0s7QUFDTjtBQUVoRCxTQUFTMkIsSUFBSUEsQ0FBQSxFQUFHO0VBQ1osSUFBTUMsVUFBVSxHQUFHeEMsUUFBUSxDQUFDbUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN6RCxJQUFNTSxPQUFPLEdBQUc5QixtRUFBVyxDQUFDLENBQUM7RUFDN0I2QixVQUFVLGFBQVZBLFVBQVUsZUFBVkEsVUFBVSxDQUFFbkMsV0FBVyxDQUFDb0MsT0FBTyxDQUFDO0VBRWhDLElBQU1DLFFBQVEsR0FBR2xDLDhEQUFZLENBQUMsQ0FBQztFQUMvQkMsNkRBQVUsQ0FBQ2lDLFFBQVEsQ0FBQztBQUd4QjtBQUNBSCxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS8uL3NyYy92aWV3cy9hYm91dC52aWV3LnRzIiwid2VicGFjazovL3dlYnNpdGUtdWkvLi9zcmMvdmlld3MvYXV0aG9yLnZpZXcudHMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS8uL3NyYy92aWV3cy9ob21lLnZpZXcudHMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS8uL3NyYy92aWV3cy9uYXZpZ2F0aW9uLnZpZXcudHMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS8uL3NyYy92aWV3cy92aWV3LnV0aWxzLnRzIiwid2VicGFjazovL3dlYnNpdGUtdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnNpdGUtdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VMaW5rLCBtYWtlUGFyYWdyYXBoLCBtYWtlU3BhbiB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIjtcclxuXHJcbmNvbnN0IHBhcmFncmFwaDEgPSBbXHJcbiAgICBtYWtlU3BhbihcIlRoaXMgd2Vic2l0ZSBpcyBiZWluZyBkZXZlbG9wZWQgdXNpbmcgXCIpLFxyXG4gICAgbWFrZUxpbmsoXCJodHRwczovL21lZGl1bS5jb20vc3dsaC9yZWZhY3RvcmluZy1hLXN0YXRpYy1odG1sLXNpdGUtaW50by10eXBlc2NyaXB0LXBhcnQtMS1vZi0yLXRoZS1jb250ZW50LWI0Yzk3NWVjYWIwMFwiLCBcInRoaXNcIiksXHJcbiAgICBtYWtlU3BhbihcIiBhcnRpY2xlIHdyaXR0ZW4gYnkgUHJvZi4gU2ltb24gTHV0dGVyYmllLlwiKSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQWJvdXRWaWV3KCkge1xyXG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGFyYTEgPSBtYWtlUGFyYWdyYXBoKCk7XHJcbiAgICBwYXJhZ3JhcGgxLmZvckVhY2goKHNlZ21lbnQpID0+IHtwYXJhMS5hcHBlbmRDaGlsZChzZWdtZW50KTtcclxuXHJcbiAgICB9XHJcbik7XHJcbiAgICB2aWV3LmFwcGVuZENoaWxkKHBhcmExKTtcclxuICAgIHJldHVybiB2aWV3O1xyXG59IiwiaW1wb3J0IHsgbWFrZUxpbmssIG1ha2VQYXJhZ3JhcGgsIG1ha2VTcGFuIH0gZnJvbSBcIi4vdmlldy51dGlsc1wiO1xyXG5cclxuY29uc3QgcGFyYWdyYXBoID0gbWFrZVBhcmFncmFwaChcIlRoaXMgd2Vic2l0ZSBpcyBjdXJyZW50bHkgYmVpbmcgZGV2ZWxvcGVkIGJ5IEpha2UgSGVuc2xleSwgYSBzb3BobW9yZSBDb21wdXRlciBFbmdpbmVlcmluZyBTdHVkZW50IGF0IE5vcnRoZWF0ZXJuIFVuaXZlcnNpdHkuXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBdXRob3JWaWV3KCkge1xyXG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlldy5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG4gICAgcmV0dXJuIHZpZXc7XHJcbn0iLCJpbXBvcnQgeyBtYWtlUGFyYWdyYXBoIH0gZnJvbSBcIi4vdmlldy51dGlsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VIb21lVmlldygpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gbWFrZVBhcmFncmFwaChcIldlbGNvbWUgdG8gbXkgd2Vic2l0ZSFcIik7XHJcbiAgICB2aWV3LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICByZXR1cm4gdmlldztcclxufSIsImltcG9ydCB7IG1ha2VBYm91dFZpZXcgfSBmcm9tIFwiLi9hYm91dC52aWV3XCI7XHJcbmltcG9ydCB7IG1ha2VBdXRob3JWaWV3IH0gZnJvbSBcIi4vYXV0aG9yLnZpZXdcIjtcclxuaW1wb3J0IHsgbWFrZUhvbWVWaWV3IH0gZnJvbSBcIi4vaG9tZS52aWV3XCI7XHJcbmltcG9ydCB7IHJlbmRlclZpZXcgfSBmcm9tIFwiLi92aWV3LnV0aWxzXCI7XHJcblxyXG50eXBlIE5hdkl0ZW0gPSBbbGFiZWw6IHN0cmluZywgdmlld0ZuOiBGdW5jdGlvbl07XHJcblxyXG4vL2FycmF5IG9mIGRpZmZlcmVudCBwYWdlc1xyXG5jb25zdCBOQVZfSVRFTVM6IE5hdkl0ZW1bXSA9IFtcclxuICAgIFtcIkhvbWVcIiwgbWFrZUhvbWVWaWV3XSxcclxuICAgIFtcIkFib3V0XCIsIG1ha2VBYm91dFZpZXddLFxyXG4gICAgW1wiQXV0aG9yXCIsIG1ha2VBdXRob3JWaWV3XVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VOYXZWaWV3KCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgTkFWX0lURU1TLmZvckVhY2goKG5hdkl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBuYXZMaW5rID0gbWFrZU5hdkxpbmsoLi4ubmF2SXRlbSk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChuYXZMaW5rKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VOYXZMaW5rKGxhYmVsOiBzdHJpbmcsIHZpZXdGbjogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU5hdkNsaWNrKHZpZXdGbikpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBhZGRpbmc6IDJweDsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGN1cnNvcjogcG9pbnRlclwiKTtcclxuXHJcbiAgICByZXR1cm4gbGluaztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2sodmlld0ZuOiBGdW5jdGlvbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmVuZGVyVmlldyh2aWV3Rm4oKSk7XHJcbiAgICB9O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXJhZ3JhcGgodGV4dCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gcGFyYWdyYXBoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxpbmsoaHJlZjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBuZXdUYWIgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgbGluay50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgaWYgKG5ld1RhYikge1xyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpbms7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3Bhbih0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIHNwYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJWaWV3KHZpZXc6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gY2xlYXJNYWluV3JhcHBlcigpO1xyXG4gICAgd3JhcHBlcj8uYXBwZW5kQ2hpbGQodmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyTWFpbldyYXBwZXIoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0aW9uLWNvbnRlbnRcIik7XHJcbiAgICB3cmFwcGVyPy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKTtcclxuXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtYWtlSG9tZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9ob21lLnZpZXdcIjtcclxuaW1wb3J0IHsgbWFrZU5hdlZpZXcgfSBmcm9tIFwiLi92aWV3cy9uYXZpZ2F0aW9uLnZpZXdcIjtcclxuaW1wb3J0IHsgcmVuZGVyVmlldyB9IGZyb20gXCIuL3ZpZXdzL3ZpZXcudXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBuYXZTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0aW9uLW5hdlwiKTtcclxuICAgIGNvbnN0IG5hdlZpZXcgPSBtYWtlTmF2VmlldygpO1xyXG4gICAgbmF2U2VjdGlvbj8uYXBwZW5kQ2hpbGQobmF2Vmlldyk7XHJcblxyXG4gICAgY29uc3QgaG9tZVZpZXcgPSBtYWtlSG9tZVZpZXcoKTtcclxuICAgIHJlbmRlclZpZXcoaG9tZVZpZXcpO1xyXG5cclxuICAgIFxyXG59XHJcbmluaXQoKTsiXSwibmFtZXMiOlsibWFrZUxpbmsiLCJtYWtlUGFyYWdyYXBoIiwibWFrZVNwYW4iLCJwYXJhZ3JhcGgxIiwibWFrZUFib3V0VmlldyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJhMSIsImZvckVhY2giLCJzZWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXJhZ3JhcGgiLCJtYWtlQXV0aG9yVmlldyIsIm1ha2VIb21lVmlldyIsInJlbmRlclZpZXciLCJOQVZfSVRFTVMiLCJtYWtlTmF2VmlldyIsIndyYXBwZXIiLCJuYXZJdGVtIiwibmF2TGluayIsIm1ha2VOYXZMaW5rIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJsYWJlbCIsInZpZXdGbiIsImxpbmsiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOYXZDbGljayIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaHJlZiIsIm5ld1RhYiIsInNwYW4iLCJjbGVhck1haW5XcmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbml0IiwibmF2U2VjdGlvbiIsIm5hdlZpZXciLCJob21lVmlldyJdLCJzb3VyY2VSb290IjoiIn0=