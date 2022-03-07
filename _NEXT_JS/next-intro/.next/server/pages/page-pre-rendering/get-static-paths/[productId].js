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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/page-pre-rendering/get-static-paths/[productId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/page-pre-rendering/get-static-paths/[productId].js":
/*!******************************************************************!*\
  !*** ./pages/page-pre-rendering/get-static-paths/[productId].js ***!
  \******************************************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/joaobaltazar/Desktop/_SANDBOX/js-sandBox/_NEXT_JS/next-intro/pages/page-pre-rendering/get-static-paths/[productId].js\";\n //file system acess\n\n\n\n\n\nconst ProductDetailPage = props => {\n  const {\n    loadedProduct\n  } = props; // if fallback getStaticPaths is true\n  // you need a loading/noData state\n\n  if (!loadedProduct) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 30\n  }, undefined);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: loadedProduct.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: loadedProduct.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: loadedProduct.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n      children: \"Description\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: loadedProduct.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getData = async () => {\n  // cwd: corrent working directory\n  const filePath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(process.cwd(), \"pages/page-pre-rendering/data\", \"dummy-data.json\");\n  const jsonData = await fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(filePath);\n  const data = JSON.parse(jsonData);\n  return data;\n}; //tell to nextJs the pages needed to render\n\n\nconst getStaticPaths = async () => {\n  const data = await getData();\n  const ids = data.products.map(product => product.id);\n  const patsWithParams = ids.map(id => ({\n    params: {\n      productId: id\n    }\n  }));\n  console.log({\n    patsWithParams\n  });\n  return {\n    // shold return an array with path objects\n    paths: patsWithParams,\n    //fallback - BOLLEAN\n    // false if the obj have all paths in the array\n    // true||\"blocking\" generat the page when is needed\n    //true de forma async \"bom para criar uma pag de fallback para o user a dizer que está a carregar, para seo n será tão bom\"\n    //\"blocking\" - bloqueia o pedido da pag até ter a pag renderizada\n    fallback: \"blocking\" // neste caso o indicado é false pk estamos a gerar todos os paths\n    // fallback: true,\n\n  };\n};\n\nconst getStaticProps = async context => {\n  console.log(context); // get params page\n\n  const {\n    params\n  } = context;\n  const productId = params.productId;\n  const data = await getData();\n  const product = data.products.find(product => product.id === productId);\n\n  if (!product) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      loadedProduct: product\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLXByZS1yZW5kZXJpbmcvZ2V0LXN0YXRpYy1wYXRocy9bcHJvZHVjdElkXS5qcz9kYmFmIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxQYWdlIiwicHJvcHMiLCJsb2FkZWRQcm9kdWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldERhdGEiLCJmaWxlUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2V0U3RhdGljUGF0aHMiLCJpZHMiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInBhdHNXaXRoUGFyYW1zIiwicGFyYW1zIiwicHJvZHVjdElkIiwiY29uc29sZSIsImxvZyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJmaW5kIiwibm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxpQkFBaUIsR0FBSUMsS0FBRCxJQUFXO0FBQ25DLFFBQU07QUFBRUM7QUFBRixNQUFvQkQsS0FBMUIsQ0FEbUMsQ0FHbkM7QUFDQTs7QUFDQSxNQUFJLENBQUNDLGFBQUwsRUFBb0Isb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUVwQixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUEsYUFBYSxDQUFDQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVELGFBQWEsQ0FBQ0U7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFBLGdCQUFLRixhQUFhLENBQUNDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQUEsZ0JBQUlELGFBQWEsQ0FBQ0U7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBbEJEOztBQW9CQSxNQUFNQyxPQUFPLEdBQUcsWUFBWTtBQUMxQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsMkNBQUksQ0FBQ0MsSUFBTCxDQUNmQyxPQUFPLENBQUNDLEdBQVIsRUFEZSxFQUVmLCtCQUZlLEVBR2YsaUJBSGUsQ0FBakI7QUFLQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMseUNBQUUsQ0FBQ0MsWUFBSCxDQUFnQlAsUUFBaEIsQ0FBdkI7QUFDQSxRQUFNUSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFYLENBQWI7QUFFQSxTQUFPRyxJQUFQO0FBQ0QsQ0FYRCxDLENBYUE7OztBQUNBLE1BQU1HLGNBQWMsR0FBRyxZQUFZO0FBQ2pDLFFBQU1ILElBQUksR0FBRyxNQUFNVCxPQUFPLEVBQTFCO0FBRUEsUUFBTWEsR0FBRyxHQUFHSixJQUFJLENBQUNLLFFBQUwsQ0FBY0MsR0FBZCxDQUFtQkMsT0FBRCxJQUFhQSxPQUFPLENBQUNDLEVBQXZDLENBQVo7QUFDQSxRQUFNQyxjQUFjLEdBQUdMLEdBQUcsQ0FBQ0UsR0FBSixDQUFTRSxFQUFELEtBQVM7QUFDdENFLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUVIO0FBREw7QUFEOEIsR0FBVCxDQUFSLENBQXZCO0FBS0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKO0FBQUYsR0FBWjtBQUNBLFNBQU87QUFDTDtBQUNBSyxTQUFLLEVBQUVMLGNBRkY7QUFJTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FNLFlBQVEsRUFBRSxVQVRMLENBU2lCO0FBQ3RCOztBQVZLLEdBQVA7QUFZRCxDQXRCRDs7QUF3QkEsTUFBTUMsY0FBYyxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDeENMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxPQUFaLEVBRHdDLENBRXhDOztBQUNBLFFBQU07QUFBRVA7QUFBRixNQUFhTyxPQUFuQjtBQUNBLFFBQU1OLFNBQVMsR0FBR0QsTUFBTSxDQUFDQyxTQUF6QjtBQUVBLFFBQU1YLElBQUksR0FBRyxNQUFNVCxPQUFPLEVBQTFCO0FBQ0EsUUFBTWdCLE9BQU8sR0FBR1AsSUFBSSxDQUFDSyxRQUFMLENBQWNhLElBQWQsQ0FBb0JYLE9BQUQsSUFBYUEsT0FBTyxDQUFDQyxFQUFSLEtBQWVHLFNBQS9DLENBQWhCOztBQUVBLE1BQUksQ0FBQ0osT0FBTCxFQUFjO0FBQ1osV0FBTztBQUNMWSxjQUFRLEVBQUU7QUFETCxLQUFQO0FBR0Q7O0FBRUQsU0FBTztBQUNMaEMsU0FBSyxFQUFFO0FBQ0xDLG1CQUFhLEVBQUVtQjtBQURWO0FBREYsR0FBUDtBQUtELENBcEJEOztBQXNCZXJCLGdGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcGFnZS1wcmUtcmVuZGVyaW5nL2dldC1zdGF0aWMtcGF0aHMvW3Byb2R1Y3RJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy9maWxlIHN5c3RlbSBhY2Vzc1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgUHJvZHVjdERldGFpbFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsb2FkZWRQcm9kdWN0IH0gPSBwcm9wcztcblxuICAvLyBpZiBmYWxsYmFjayBnZXRTdGF0aWNQYXRocyBpcyB0cnVlXG4gIC8vIHlvdSBuZWVkIGEgbG9hZGluZy9ub0RhdGEgc3RhdGVcbiAgaWYgKCFsb2FkZWRQcm9kdWN0KSByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2xvYWRlZFByb2R1Y3QudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bG9hZGVkUHJvZHVjdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT57bG9hZGVkUHJvZHVjdC50aXRsZX08L2gxPlxuICAgICAgPGg2PkRlc2NyaXB0aW9uPC9oNj5cbiAgICAgIDxwPntsb2FkZWRQcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgLy8gY3dkOiBjb3JyZW50IHdvcmtpbmcgZGlyZWN0b3J5XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKFxuICAgIHByb2Nlc3MuY3dkKCksXG4gICAgXCJwYWdlcy9wYWdlLXByZS1yZW5kZXJpbmcvZGF0YVwiLFxuICAgIFwiZHVtbXktZGF0YS5qc29uXCJcbiAgKTtcbiAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vL3RlbGwgdG8gbmV4dEpzIHRoZSBwYWdlcyBuZWVkZWQgdG8gcmVuZGVyXG5jb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKTtcblxuICBjb25zdCBpZHMgPSBkYXRhLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gIGNvbnN0IHBhdHNXaXRoUGFyYW1zID0gaWRzLm1hcCgoaWQpID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBwcm9kdWN0SWQ6IGlkLFxuICAgIH0sXG4gIH0pKTtcbiAgY29uc29sZS5sb2coeyBwYXRzV2l0aFBhcmFtcyB9KTtcbiAgcmV0dXJuIHtcbiAgICAvLyBzaG9sZCByZXR1cm4gYW4gYXJyYXkgd2l0aCBwYXRoIG9iamVjdHNcbiAgICBwYXRoczogcGF0c1dpdGhQYXJhbXMsXG5cbiAgICAvL2ZhbGxiYWNrIC0gQk9MTEVBTlxuICAgIC8vIGZhbHNlIGlmIHRoZSBvYmogaGF2ZSBhbGwgcGF0aHMgaW4gdGhlIGFycmF5XG4gICAgLy8gdHJ1ZXx8XCJibG9ja2luZ1wiIGdlbmVyYXQgdGhlIHBhZ2Ugd2hlbiBpcyBuZWVkZWRcbiAgICAvL3RydWUgZGUgZm9ybWEgYXN5bmMgXCJib20gcGFyYSBjcmlhciB1bWEgcGFnIGRlIGZhbGxiYWNrIHBhcmEgbyB1c2VyIGEgZGl6ZXIgcXVlIGVzdMOhIGEgY2FycmVnYXIsIHBhcmEgc2VvIG4gc2Vyw6EgdMOjbyBib21cIlxuICAgIC8vXCJibG9ja2luZ1wiIC0gYmxvcXVlaWEgbyBwZWRpZG8gZGEgcGFnIGF0w6kgdGVyIGEgcGFnIHJlbmRlcml6YWRhXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIiwgLy8gbmVzdGUgY2FzbyBvIGluZGljYWRvIMOpIGZhbHNlIHBrIGVzdGFtb3MgYSBnZXJhciB0b2RvcyBvcyBwYXRoc1xuICAgIC8vIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufTtcblxuY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgLy8gZ2V0IHBhcmFtcyBwYWdlXG4gIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJhbXMucHJvZHVjdElkO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGNvbnN0IHByb2R1Y3QgPSBkYXRhLnByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3RJZCk7XG5cbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2FkZWRQcm9kdWN0OiBwcm9kdWN0LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsUGFnZTtcbmV4cG9ydCB7IGdldFN0YXRpY1Byb3BzLCBnZXRTdGF0aWNQYXRocyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page-pre-rendering/get-static-paths/[productId].js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

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