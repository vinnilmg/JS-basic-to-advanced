/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pessoa": () => (/* binding */ Pessoa),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "idd": () => (/* binding */ idade),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "soma": () => (/* binding */ soma),
/* harmony export */   "subtrai": () => (/* binding */ subtrai)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nome = "Ronaldo";
var sobrenome = 'Lima'; // exportando diretamente

var idade = 30;
var naoVouSerExportada = 0; // variavel privada desse modulo

function soma(x, y) {
  return x + y;
} // exportando diretamente


function subtrai(x, y) {
  return x - y;
}
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, idade) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.idade = idade;
}); // exportando como default
// Só é possível exportar uma coisa como default
// na importacao nao é preciso chaves {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return 'Hello World';
}); // exportando e renomeando



/***/ }),

/***/ "./src/modulo2.js":
/*!************************!*\
  !*** ./src/modulo2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ v1),
/* harmony export */   "v2": () => (/* binding */ v2)
/* harmony export */ });
 //variavel v1 é o default

var v1 = 1;
var v2 = 2;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
/* harmony import */ var _modulo2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulo2 */ "./src/modulo2.js");
// importando default e o resto


var nome = 'Vinicius';
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.idd);
console.log(nome);
console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.soma)(2, 5), (0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.subtrai)(2, 5));
var pessoa1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__.Pessoa("".concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, " ").concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome), _modulo1__WEBPACK_IMPORTED_MODULE_0__.idd);
console.log(pessoa1);
console.log(_modulo2__WEBPACK_IMPORTED_MODULE_1__.v2);
console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__["default"])());
console.log(_modulo2__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map