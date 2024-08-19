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
  (0,_view_utils__WEBPACK_IMPORTED_MODULE_3__.universalStyle)(wrapper);
  return wrapper;
}
function makeNavLink(label, viewFn) {
  var link = document.createElement("a");
  link.textContent = label;
  link.addEventListener("click", handleNavClick(viewFn));
  (0,_view_utils__WEBPACK_IMPORTED_MODULE_3__.universalStyle)(link);
  link.style.margin = "2px";
  link.style.cursor = "pointer";
  link.style.fontSize = "25px";
  link.style.background = "white";
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
/* harmony export */   renderView: () => (/* binding */ renderView),
/* harmony export */   universalStyle: () => (/* binding */ universalStyle)
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
  view.style.background = "white";
  var finalView = universalStyle(view);
  wrapper === null || wrapper === void 0 || wrapper.appendChild(finalView);
}
function clearMainWrapper() {
  var wrapper = document.getElementById("section-content");
  wrapper === null || wrapper === void 0 || wrapper.childNodes.forEach(function (childNode) {
    wrapper.removeChild(childNode);
  });
  return wrapper;
}
function universalStyle(view) {
  view.style.fontFamily = "Trebuchet MS";
  view.style.margin = "20px";
  view.style.padding = "5px";
  view.style.width = "max-content";
  return view;
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
  document.body.style.background = "#3078ba";
  var navSection = document.getElementById("section-nav");
  var navView = (0,_views_navigation_view__WEBPACK_IMPORTED_MODULE_1__.makeNavView)();
  navSection === null || navSection === void 0 || navSection.appendChild(navView);
  var homeView = (0,_views_home_view__WEBPACK_IMPORTED_MODULE_0__.makeHomeView)();
  (0,_views_view_utils__WEBPACK_IMPORTED_MODULE_2__.renderView)(homeView);
}
init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDSztBQUNOO0FBRWhELFNBQVNrRCxJQUFJQSxDQUFBLEVBQUc7RUFDWmpELFFBQVEsQ0FBQ2tELElBQUksQ0FBQ3pCLEtBQUssQ0FBQ0ksVUFBVSxHQUFHLFNBQVM7RUFDMUMsSUFBTXNCLFVBQVUsR0FBR25ELFFBQVEsQ0FBQzBDLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDekQsSUFBTVUsT0FBTyxHQUFHeEMsbUVBQVcsQ0FBQyxDQUFDO0VBQzdCdUMsVUFBVSxhQUFWQSxVQUFVLGVBQVZBLFVBQVUsQ0FBRTlDLFdBQVcsQ0FBQytDLE9BQU8sQ0FBQztFQUVoQyxJQUFNQyxRQUFRLEdBQUc3Qyw4REFBWSxDQUFDLENBQUM7RUFDL0JDLDZEQUFVLENBQUM0QyxRQUFRLENBQUM7QUFDeEI7QUFDQUosSUFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUtdWkvLi9zcmMvdmlld3MvYWJvdXQudmlldy50cyIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpLy4vc3JjL3ZpZXdzL2F1dGhvci52aWV3LnRzIiwid2VicGFjazovL3dlYnNpdGUtdWkvLi9zcmMvdmlld3MvaG9tZS52aWV3LnRzIiwid2VicGFjazovL3dlYnNpdGUtdWkvLi9zcmMvdmlld3MvbmF2aWdhdGlvbi52aWV3LnRzIiwid2VicGFjazovL3dlYnNpdGUtdWkvLi9zcmMvdmlld3Mvdmlldy51dGlscy50cyIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnNpdGUtdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnNpdGUtdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJzaXRlLXVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS11aS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlTGluaywgbWFrZVBhcmFncmFwaCwgbWFrZVNwYW4gfSBmcm9tIFwiLi92aWV3LnV0aWxzXCI7XHJcblxyXG5jb25zdCBwYXJhZ3JhcGgxID0gW1xyXG4gICAgbWFrZVNwYW4oXCJUaGlzIHdlYnNpdGUgaXMgYmVpbmcgZGV2ZWxvcGVkIHVzaW5nIFwiKSxcclxuICAgIG1ha2VMaW5rKFwiaHR0cHM6Ly9tZWRpdW0uY29tL3N3bGgvcmVmYWN0b3JpbmctYS1zdGF0aWMtaHRtbC1zaXRlLWludG8tdHlwZXNjcmlwdC1wYXJ0LTEtb2YtMi10aGUtY29udGVudC1iNGM5NzVlY2FiMDBcIiwgXCJ0aGlzXCIpLFxyXG4gICAgbWFrZVNwYW4oXCIgYXJ0aWNsZSB3cml0dGVuIGJ5IFByb2YuIFNpbW9uIEx1dHRlcmJpZS5cIiksXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFib3V0VmlldygpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBhcmExID0gbWFrZVBhcmFncmFwaCgpO1xyXG4gICAgcGFyYWdyYXBoMS5mb3JFYWNoKChzZWdtZW50KSA9PiB7cGFyYTEuYXBwZW5kQ2hpbGQoc2VnbWVudCk7XHJcblxyXG4gICAgfVxyXG4pO1xyXG4gICAgdmlldy5hcHBlbmRDaGlsZChwYXJhMSk7XHJcbiAgICByZXR1cm4gdmlldztcclxufSIsImltcG9ydCB7IG1ha2VMaW5rLCBtYWtlUGFyYWdyYXBoLCBtYWtlU3BhbiB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIjtcclxuXHJcbmNvbnN0IHBhcmFncmFwaCA9IG1ha2VQYXJhZ3JhcGgoXCJUaGlzIHdlYnNpdGUgaXMgY3VycmVudGx5IGJlaW5nIGRldmVsb3BlZCBieSBKYWtlIEhlbnNsZXksIGEgc29waG1vcmUgQ29tcHV0ZXIgRW5naW5lZXJpbmcgU3R1ZGVudCBhdCBOb3J0aGVhdGVybiBVbml2ZXJzaXR5LlwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXV0aG9yVmlldygpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZpZXcuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICAgIHJldHVybiB2aWV3O1xyXG59IiwiaW1wb3J0IHsgbWFrZVBhcmFncmFwaCB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlSG9tZVZpZXcoKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IG1ha2VQYXJhZ3JhcGgoXCJXZWxjb21lIHRvIG15IHdlYnNpdGUhXCIpO1xyXG4gICAgdmlldy5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG4gICAgcmV0dXJuIHZpZXc7XHJcbn0iLCJpbXBvcnQgeyBtYWtlQWJvdXRWaWV3IH0gZnJvbSBcIi4vYWJvdXQudmlld1wiO1xyXG5pbXBvcnQgeyBtYWtlQXV0aG9yVmlldyB9IGZyb20gXCIuL2F1dGhvci52aWV3XCI7XHJcbmltcG9ydCB7IG1ha2VIb21lVmlldyB9IGZyb20gXCIuL2hvbWUudmlld1wiO1xyXG5pbXBvcnQgeyByZW5kZXJWaWV3LCB1bml2ZXJzYWxTdHlsZSB9IGZyb20gXCIuL3ZpZXcudXRpbHNcIjtcclxuXHJcbnR5cGUgTmF2SXRlbSA9IFtsYWJlbDogc3RyaW5nLCB2aWV3Rm46IEZ1bmN0aW9uXTtcclxuXHJcbi8vYXJyYXkgb2YgZGlmZmVyZW50IHBhZ2VzXHJcbmNvbnN0IE5BVl9JVEVNUzogTmF2SXRlbVtdID0gW1xyXG4gICAgW1wiSG9tZVwiLCBtYWtlSG9tZVZpZXddLFxyXG4gICAgW1wiQWJvdXRcIiwgbWFrZUFib3V0Vmlld10sXHJcbiAgICBbXCJBdXRob3JcIiwgbWFrZUF1dGhvclZpZXddXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU5hdlZpZXcoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBOQVZfSVRFTVMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkxpbmsgPSBtYWtlTmF2TGluayguLi5uYXZJdGVtKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hdkxpbmspO1xyXG4gICAgfSk7XHJcbiAgICB1bml2ZXJzYWxTdHlsZSh3cmFwcGVyKTtcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTmF2TGluayhsYWJlbDogc3RyaW5nLCB2aWV3Rm46IEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOYXZDbGljayh2aWV3Rm4pKTtcclxuICAgIHVuaXZlcnNhbFN0eWxlKGxpbmspO1xyXG4gICAgbGluay5zdHlsZS5tYXJnaW4gPSBcIjJweFwiO1xyXG4gICAgbGluay5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgIGxpbmsuc3R5bGUuZm9udFNpemUgPSBcIjI1cHhcIjtcclxuICAgIGxpbmsuc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuXHJcbiAgICByZXR1cm4gbGluaztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2sodmlld0ZuOiBGdW5jdGlvbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmVuZGVyVmlldyh2aWV3Rm4oKSk7XHJcbiAgICB9O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXJhZ3JhcGgodGV4dCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gcGFyYWdyYXBoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxpbmsoaHJlZjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBuZXdUYWIgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgbGluay50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgaWYgKG5ld1RhYikge1xyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpbms7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3Bhbih0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIHNwYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJWaWV3KHZpZXc6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gY2xlYXJNYWluV3JhcHBlcigpO1xyXG4gICAgdmlldy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgY29uc3QgZmluYWxWaWV3ID0gdW5pdmVyc2FsU3R5bGUodmlldyk7XHJcbiAgICB3cmFwcGVyPy5hcHBlbmRDaGlsZChmaW5hbFZpZXcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhck1haW5XcmFwcGVyKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvbi1jb250ZW50XCIpO1xyXG4gICAgd3JhcHBlcj8uY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGNoaWxkTm9kZSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5pdmVyc2FsU3R5bGUodmlldzogSFRNTEVsZW1lbnQpIHtcclxuICAgIHZpZXcuc3R5bGUuZm9udEZhbWlseSA9IFwiVHJlYnVjaGV0IE1TXCI7XHJcbiAgICB2aWV3LnN0eWxlLm1hcmdpbiA9IFwiMjBweFwiO1xyXG4gICAgdmlldy5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcclxuICAgIHZpZXcuc3R5bGUud2lkdGggPSBcIm1heC1jb250ZW50XCI7XHJcbiAgICBcclxuICAgIHJldHVybiB2aWV3O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtYWtlSG9tZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9ob21lLnZpZXdcIjtcclxuaW1wb3J0IHsgbWFrZU5hdlZpZXcgfSBmcm9tIFwiLi92aWV3cy9uYXZpZ2F0aW9uLnZpZXdcIjtcclxuaW1wb3J0IHsgcmVuZGVyVmlldyB9IGZyb20gXCIuL3ZpZXdzL3ZpZXcudXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiMzMDc4YmFcIjtcclxuICAgIGNvbnN0IG5hdlNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3Rpb24tbmF2XCIpO1xyXG4gICAgY29uc3QgbmF2VmlldyA9IG1ha2VOYXZWaWV3KCk7XHJcbiAgICBuYXZTZWN0aW9uPy5hcHBlbmRDaGlsZChuYXZWaWV3KTtcclxuXHJcbiAgICBjb25zdCBob21lVmlldyA9IG1ha2VIb21lVmlldygpO1xyXG4gICAgcmVuZGVyVmlldyhob21lVmlldyk7XHJcbn1cclxuaW5pdCgpOyJdLCJuYW1lcyI6WyJtYWtlTGluayIsIm1ha2VQYXJhZ3JhcGgiLCJtYWtlU3BhbiIsInBhcmFncmFwaDEiLCJtYWtlQWJvdXRWaWV3IiwidmlldyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBhcmExIiwiZm9yRWFjaCIsInNlZ21lbnQiLCJhcHBlbmRDaGlsZCIsInBhcmFncmFwaCIsIm1ha2VBdXRob3JWaWV3IiwibWFrZUhvbWVWaWV3IiwicmVuZGVyVmlldyIsInVuaXZlcnNhbFN0eWxlIiwiTkFWX0lURU1TIiwibWFrZU5hdlZpZXciLCJ3cmFwcGVyIiwibmF2SXRlbSIsIm5hdkxpbmsiLCJtYWtlTmF2TGluayIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwibGFiZWwiLCJ2aWV3Rm4iLCJsaW5rIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTmF2Q2xpY2siLCJzdHlsZSIsIm1hcmdpbiIsImN1cnNvciIsImZvbnRTaXplIiwiYmFja2dyb3VuZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaHJlZiIsIm5ld1RhYiIsInNldEF0dHJpYnV0ZSIsInNwYW4iLCJjbGVhck1haW5XcmFwcGVyIiwiZmluYWxWaWV3IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwicmVtb3ZlQ2hpbGQiLCJmb250RmFtaWx5IiwicGFkZGluZyIsIndpZHRoIiwiaW5pdCIsImJvZHkiLCJuYXZTZWN0aW9uIiwibmF2VmlldyIsImhvbWVWaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==