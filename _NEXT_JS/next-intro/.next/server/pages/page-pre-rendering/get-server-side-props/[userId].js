module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/page-pre-rendering/get-server-side-props/[userId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/page-pre-rendering/get-server-side-props/[userId].js":
/*!********************************************************************!*\
  !*** ./pages/page-pre-rendering/get-server-side-props/[userId].js ***!
  \********************************************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/joaobaltazar/Desktop/_SANDBOX/js-sandBox/_NEXT_JS/next-intro/pages/page-pre-rendering/get-server-side-props/[userId].js\";\n\nconst UserprofilePage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: props.id\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  const {\n    params,\n    req,\n    res\n  } = context;\n  console.log(req); //https://nodejs.org/api/http.html#http_class_http_incomingmessage\n\n  console.log(res); //https://nodejs.org/api/http.html#http_class_http_serverresponse\n\n  const userId = params.userId; //   if (!data) {\n  //     return {\n  //       notFound: true,\n  //     };\n  //   }\n\n  return {\n    //this dont use a revalidate becouse this ocours on every serverSide render  request\n    props: {\n      id: `user-id-${userId}`\n    },\n    // tipial case when you do not have data to show\n    notFound: false //boolean default is false\n    // redirect - if you need to redirect the user to other page\n    // redirect: {\n    //   destination : \"/noData\"\n    // }\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserprofilePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLXByZS1yZW5kZXJpbmcvZ2V0LXNlcnZlci1zaWRlLXByb3BzL1t1c2VySWRdLmpzPzY5YTkiXSwibmFtZXMiOlsiVXNlcnByb2ZpbGVQYWdlIiwicHJvcHMiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidXNlcklkIiwibm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNqQyxzQkFBTztBQUFBLGNBQU1BLEtBQUssQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDNUMsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLE9BQVY7QUFBZUM7QUFBZixNQUF1QkgsT0FBN0I7QUFFQUksU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVosRUFINEMsQ0FHMUI7O0FBQ2xCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUo0QyxDQUkxQjs7QUFFbEIsUUFBTUcsTUFBTSxHQUFHTCxNQUFNLENBQUNLLE1BQXRCLENBTjRDLENBUTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBTztBQUNMO0FBQ0FULFNBQUssRUFBRTtBQUNMQyxRQUFFLEVBQUcsV0FBVVEsTUFBTztBQURqQixLQUZGO0FBTUw7QUFDQUMsWUFBUSxFQUFFLEtBUEwsQ0FPWTtBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFaSyxHQUFQO0FBY0QsQ0E1QkQ7O0FBOEJlWCw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BhZ2UtcHJlLXJlbmRlcmluZy9nZXQtc2VydmVyLXNpZGUtcHJvcHMvW3VzZXJJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2VycHJvZmlsZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxkaXY+e3Byb3BzLmlkfTwvZGl2Pjtcbn07XG5cbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgcGFyYW1zLCByZXEsIHJlcyB9ID0gY29udGV4dDtcblxuICBjb25zb2xlLmxvZyhyZXEpOyAvL2h0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfY2xhc3NfaHR0cF9pbmNvbWluZ21lc3NhZ2VcbiAgY29uc29sZS5sb2cocmVzKTsgLy9odHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX2NsYXNzX2h0dHBfc2VydmVycmVzcG9uc2VcblxuICBjb25zdCB1c2VySWQgPSBwYXJhbXMudXNlcklkO1xuXG4gIC8vICAgaWYgKCFkYXRhKSB7XG4gIC8vICAgICByZXR1cm4ge1xuICAvLyAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgLy8gICAgIH07XG4gIC8vICAgfVxuXG4gIHJldHVybiB7XG4gICAgLy90aGlzIGRvbnQgdXNlIGEgcmV2YWxpZGF0ZSBiZWNvdXNlIHRoaXMgb2NvdXJzIG9uIGV2ZXJ5IHNlcnZlclNpZGUgcmVuZGVyICByZXF1ZXN0XG4gICAgcHJvcHM6IHtcbiAgICAgIGlkOiBgdXNlci1pZC0ke3VzZXJJZH1gLFxuICAgIH0sXG5cbiAgICAvLyB0aXBpYWwgY2FzZSB3aGVuIHlvdSBkbyBub3QgaGF2ZSBkYXRhIHRvIHNob3dcbiAgICBub3RGb3VuZDogZmFsc2UsIC8vYm9vbGVhbiBkZWZhdWx0IGlzIGZhbHNlXG5cbiAgICAvLyByZWRpcmVjdCAtIGlmIHlvdSBuZWVkIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIG90aGVyIHBhZ2VcbiAgICAvLyByZWRpcmVjdDoge1xuICAgIC8vICAgZGVzdGluYXRpb24gOiBcIi9ub0RhdGFcIlxuICAgIC8vIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJwcm9maWxlUGFnZTtcbmV4cG9ydCB7IGdldFNlcnZlclNpZGVQcm9wcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page-pre-rendering/get-server-side-props/[userId].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });