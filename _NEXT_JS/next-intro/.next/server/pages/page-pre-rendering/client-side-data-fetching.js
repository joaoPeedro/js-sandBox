module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/page-pre-rendering/client-side-data-fetching/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/page-pre-rendering/client-side-data-fetching/index.js":
/*!*********************************************************************!*\
  !*** ./pages/page-pre-rendering/client-side-data-fetching/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/joaobaltazar/Desktop/_SANDBOX/js-sandBox/_NEXT_JS/next-intro/pages/page-pre-rendering/client-side-data-fetching/index.js\";\n\n\nconst LastSalesPage = () => {\n  const {\n    0: sales,\n    1: setSales\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setIsLoading(true);\n    fetch(\"https://tables-7ac1f.firebaseio.com/sales.json\").then(response => {\n      console.log(response);\n\n      if (response.ok) {\n        return response.json();\n      } else {\n        console.log(\"Network response was not ok.\");\n      }\n    }).then(data => {\n      console.log(data);\n      let arrangeSales = [];\n\n      for (const sale in data) {\n        arrangeSales.push({\n          id: sale,\n          username: data[sale].username,\n          volume: data[sale].volume\n        });\n      }\n\n      setSales(arrangeSales);\n      setIsLoading(false);\n    }).catch(function (error) {\n      console.log(\"There has been a problem with your fetch operation: \" + error.message);\n    });\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 12\n    }, undefined);\n  } // este vai ser o state inicial do componet (pre-render) porque n temos data\n\n\n  if (!isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: \"No sales\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(sale => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: [sale.username, \": volume \", sale.volume]\n    }, sale.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLXByZS1yZW5kZXJpbmcvY2xpZW50LXNpZGUtZGF0YS1mZXRjaGluZy9pbmRleC5qcz8zOGYwIl0sIm5hbWVzIjpbIkxhc3RTYWxlc1BhZ2UiLCJzYWxlcyIsInNldFNhbGVzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJvayIsImpzb24iLCJkYXRhIiwiYXJyYW5nZVNhbGVzIiwic2FsZSIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwidm9sdW1lIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLEVBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2RELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLFNBQUssQ0FBQyxnREFBRCxDQUFMLENBQ0dDLElBREgsQ0FDU0MsUUFBRCxJQUFjO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7QUFFQSxVQUFJQSxRQUFRLENBQUNHLEVBQWIsRUFBaUI7QUFDZixlQUFPSCxRQUFRLENBQUNJLElBQVQsRUFBUDtBQUNELE9BRkQsTUFFTztBQUNMSCxlQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNEO0FBQ0YsS0FUSCxFQVVHSCxJQVZILENBVVNNLElBQUQsSUFBVTtBQUNkSixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWjtBQUNBLFVBQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFFQSxXQUFLLE1BQU1DLElBQVgsSUFBbUJGLElBQW5CLEVBQXlCO0FBQ3ZCQyxvQkFBWSxDQUFDRSxJQUFiLENBQWtCO0FBQ2hCQyxZQUFFLEVBQUVGLElBRFk7QUFFaEJHLGtCQUFRLEVBQUVMLElBQUksQ0FBQ0UsSUFBRCxDQUFKLENBQVdHLFFBRkw7QUFHaEJDLGdCQUFNLEVBQUVOLElBQUksQ0FBQ0UsSUFBRCxDQUFKLENBQVdJO0FBSEgsU0FBbEI7QUFLRDs7QUFDRGxCLGNBQVEsQ0FBQ2EsWUFBRCxDQUFSO0FBQ0FWLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0F2QkgsRUF3QkdnQixLQXhCSCxDQXdCUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCWixhQUFPLENBQUNDLEdBQVIsQ0FDRSx5REFBeURXLEtBQUssQ0FBQ0MsT0FEakU7QUFHRCxLQTVCSDtBQTZCRCxHQS9CUSxFQStCTixFQS9CTSxDQUFUOztBQWlDQSxNQUFJbkIsU0FBSixFQUFlO0FBQ2Isd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxHQXZDeUIsQ0F5QzFCOzs7QUFDQSxNQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUNELHNCQUNFO0FBQUEsY0FDR0gsS0FBSyxDQUFDdUIsR0FBTixDQUFXUixJQUFELGlCQUNUO0FBQUEsaUJBQ0dBLElBQUksQ0FBQ0csUUFEUixlQUMyQkgsSUFBSSxDQUFDSSxNQURoQztBQUFBLE9BQVNKLElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0F0REQ7O0FBd0RlbEIsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wYWdlLXByZS1yZW5kZXJpbmcvY2xpZW50LXNpZGUtZGF0YS1mZXRjaGluZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGFzdFNhbGVzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goXCJodHRwczovL3RhYmxlcy03YWMxZi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2suXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGxldCBhcnJhbmdlU2FsZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHNhbGUgaW4gZGF0YSkge1xuICAgICAgICAgIGFycmFuZ2VTYWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBzYWxlLFxuICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGFbc2FsZV0udXNlcm5hbWUsXG4gICAgICAgICAgICB2b2x1bWU6IGRhdGFbc2FsZV0udm9sdW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldFNhbGVzKGFycmFuZ2VTYWxlcyk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIlRoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8aDQ+TG9hZGluZy4uLjwvaDQ+O1xuICB9XG5cbiAgLy8gZXN0ZSB2YWkgc2VyIG8gc3RhdGUgaW5pY2lhbCBkbyBjb21wb25ldCAocHJlLXJlbmRlcikgcG9ycXVlIG4gdGVtb3MgZGF0YVxuICBpZiAoIWlzTG9hZGluZykge1xuICAgIHJldHVybiA8aDQ+Tm8gc2FsZXM8L2g0PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtzYWxlcy5tYXAoKHNhbGUpID0+IChcbiAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XG4gICAgICAgICAge3NhbGUudXNlcm5hbWV9OiB2b2x1bWUge3NhbGUudm9sdW1lfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page-pre-rendering/client-side-data-fetching/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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