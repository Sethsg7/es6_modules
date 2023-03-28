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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car {\r\n  constructor(id, make, model, year) {\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n// TODO\r\n\r\n\r\nlet form = document.getElementById(\"submitForm\");\r\nlet carMake = document.getElementById(\"makeInput\");\r\nlet carModel = document.getElementById(\"modelInput\");\r\nlet carYear = document.getElementById(\"yearInput\");\r\nlet makeInfo = document.getElementById(\"car-make\");\r\nlet modelInfo = document.getElementById(\"car-model\");\r\nlet yearInfo = document.getElementById(\"car-year\");\r\nlet removeBtn = document.getElementById(\"removeBtn\");\r\nlet list = document.querySelector(\"#wishListContainer > ul\");\r\n\r\nlet wshLst = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconsole.log(wshLst);\r\n\r\nform.addEventListener(\"submit\", addCar);\r\n\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\n\r\n\r\nfunction showCarDetails (car) {\r\n    console.log(car);\r\n    makeInfo.textContent = car.make;\r\n    modelInfo.textContent = car.model;\r\n    yearInfo.textContent = car.year;\r\n    removeBtn.disabled = false;\r\n    removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\n\r\nfunction updateDOMList() {\r\n\r\n    list.innerHTML = \"\";\r\n    wshLst.list.forEach((car) => {\r\n        let li = document.createElement(\"li\");\r\n        li.textContent = `${car.make} ${car.model}`;\r\n        li.addEventListener(\"click\", () => showCarDetails(car));\r\n        list.appendChild(li);\r\n    })\r\n}\r\n\r\n\r\nfunction addCar(event) {\r\n\r\n    event.preventDefault();\r\n    let make = makeInput.value;\r\n    let model = modelInput.value;\r\n    let year = yearInput.value;\r\n\r\n    wshLst.add(make, model, year);\r\n\r\n    updateDOMList();\r\n}\r\n\r\n\r\nfunction removeCar(car) {\r\n\r\n    let carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n    wshLst.remove(carId);\r\n    updateDOMList();\r\n\r\n    makeInfo.textContent = \"\";\r\n    modelInfo.textContent = \"\";\r\n    yearInfo.textContent = \"\";\r\n\r\n    removeBtn.disabled = true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass WishList {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n  add(make, model, year) {\r\n    let car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextId++, make, model, year);\r\n    this.list.push(car);\r\n  }\r\n\r\n  remove(carId) {\r\n    this.list = this.list.filter((car) => car.id != carId);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishList);\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;