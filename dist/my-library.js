/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MyLibrary", [], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BILLING_INFO\": () => (/* binding */ BILLING_INFO),\n/* harmony export */   \"prices\": () => (/* binding */ prices)\n/* harmony export */ });\nvar BILLING_INFO = {\n    vat: 5,\n    lifeLineUnit: 50,\n    lifeLinePrice: 3.75\n};\nvar prices = {\n    \"LT-A\": {\n        name: \"Residential\",\n        demand: 30,\n        step: true,\n        range: [\n            {\n                unit: [\n                    0,\n                    75\n                ],\n                price: 4.19\n            },\n            {\n                unit: [\n                    75,\n                    200\n                ],\n                price: 5.72\n            },\n            {\n                unit: [\n                    200,\n                    300\n                ],\n                price: 6.0\n            },\n            {\n                unit: [\n                    300,\n                    400\n                ],\n                price: 6.34\n            },\n            {\n                unit: [\n                    400,\n                    600\n                ],\n                price: 9.94\n            },\n            {\n                unit: [\n                    600,\n                    99999999999\n                ],\n                price: 11.46\n            }, \n        ]\n    },\n    \"LT-B\": {\n        name: \"Agricultural pumps\",\n        demand: 30,\n        step: false,\n        flat: 4.16,\n        offPeak: null,\n        peak: null,\n        superOffPeak: null\n    },\n    \"LT-C1\": {\n        name: \"Retail Industry\",\n        demand: 30,\n        step: false,\n        flat: 8.53,\n        offPeak: 7.68,\n        peak: 10.24,\n        superOffPeak: null\n    },\n    \"LT-C2\": {\n        name: \"Construction\",\n        demand: 100,\n        step: false,\n        flat: 12.0,\n        offPeak: null,\n        peak: null,\n        superOffPeak: null\n    },\n    \"LT-D1\": {\n        name: \"Educational, Religious and Charitable Institutions and Hospitals\",\n        demand: 35,\n        step: false,\n        flat: 6.02,\n        offPeak: null,\n        peak: null,\n        superOffPeak: null\n    },\n    \"LT-D2\": {\n        name: \"Street lights and water pumps\",\n        demand: 60,\n        step: false,\n        flat: 7.7,\n        offPeak: null,\n        peak: null,\n        superOffPeak: null\n    },\n    \"LT-D3\": {\n        name: \"Battery charging station\",\n        demand: 60,\n        step: false,\n        flat: 7.64,\n        offPeak: 6.88,\n        peak: 9.55,\n        superOffPeak: 6.11\n    },\n    \"LT-E\": {\n        name: \"Commercial and Office\",\n        demand: 60,\n        step: false,\n        flat: 10.3,\n        offPeak: 9.27,\n        peak: 12.36,\n        superOffPeak: null\n    },\n    \"LT-T\": {\n        name: \"Temporary\",\n        demand: 100,\n        step: false,\n        flat: 16.0,\n        offPeak: null,\n        peak: null,\n        superOffPeak: null\n    }\n};\n\n\n\n//# sourceURL=webpack://MyLibrary/./src/data.ts?");

/***/ }),

/***/ "./src/my-library.ts":
/*!***************************!*\
  !*** ./src/my-library.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateBill\": () => (/* binding */ calculateBill)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n\nvar ErrorMessages;\n(function(ErrorMessages) {\n    ErrorMessages[\"INVALID_NUMBER\"] = \"Number must be greater then 1\";\n})(ErrorMessages || (ErrorMessages = {}));\nvar unitPrice = function unitPrice(_a) {\n    var unit = _a.unit, price = _a.price;\n    return unit * price;\n};\nvar totalBill = function totalBill(_a) {\n    var unitPrice = _a.unitPrice, demandRate = _a.demandRate, _b = _a.load, load = _b === void 0 ? 1 : _b;\n    var costing = unitPrice + demandRate * load;\n    var vat = costing * _data__WEBPACK_IMPORTED_MODULE_0__.BILLING_INFO.vat / 100;\n    return costing + vat;\n};\nvar billWithSteps = function billWithSteps(_a) {\n    var range = _a.range, unit = _a.unit;\n    var totalStepPrice = 0;\n    if (unit <= _data__WEBPACK_IMPORTED_MODULE_0__.BILLING_INFO.lifeLineUnit) {\n        totalStepPrice += unitPrice({\n            unit: unit,\n            price: _data__WEBPACK_IMPORTED_MODULE_0__.BILLING_INFO.lifeLinePrice\n        });\n    } else {\n        range.forEach(function(step, index, arr) {\n            if (unit >= step.unit[1]) {\n                totalStepPrice += Math.abs(step.unit[0] - step.unit[1]) * step.price;\n            }\n            if (unit <= step.unit[1]) {\n                totalStepPrice += Math.abs(unit - step.unit[0]) * step.price;\n                arr.length = 0;\n            }\n        });\n    }\n    return totalStepPrice;\n};\nvar calculateBill = function calculateBill(_a) {\n    var classType = _a.classType, unit = _a.unit, load = _a.load;\n    var bill = _data__WEBPACK_IMPORTED_MODULE_0__.prices[classType];\n    var price;\n    if (bill.step && bill.range) {\n        price = billWithSteps({\n            range: bill.range,\n            unit: unit\n        });\n    } else {\n        price = unitPrice({\n            unit: unit,\n            price: bill.flat\n        });\n    }\n    var total = totalBill({\n        unitPrice: price,\n        demandRate: bill.demand,\n        load: load\n    });\n    return Math.ceil(total);\n};\n\n\n\n//# sourceURL=webpack://MyLibrary/./src/my-library.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/my-library.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});