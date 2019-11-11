webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TestCard.js":
/*!********************************!*\
  !*** ./components/TestCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/TestCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var TestCard = function TestCard(_ref) {
  var _ref2, _ref3, _ref4, _ref5;

  var post = _ref.post;
  return __jsx("div", {
    key: +post.k,
    style: (_ref2 = {
      width: 'calc(33.333% - 1.75rem)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      borderRadius: '10px',
      boxShadow: '0 0 4px #999',
      boxSizing: 'inherit',
      margin: '3.5rem 1.5rem'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "boxShadow", '0 0 4px #999'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "margin", '.875rem'), _ref2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, post.image && __jsx("a", {
    style: (_ref3 = {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      backgroundColor: 'white',
      boxSizing: 'inherit',
      paddingTop: '52.36%'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "backgroundColor", '#999'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "borderRadius", '10px 10px 0 0'), _ref3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: post.image,
    alt: "example",
    style: (_ref4 = {
      display: 'block',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      position: 'absolute',
      objectFit: 'cover',
      borderRadius: '10px 10px 0 0'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "display", 'block'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "boxSizing", 'inherit'), _ref4),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    style: (_ref5 = {
      backgroundColor: 'white',
      display: 'flex',
      position: 'absolute',
      width: '3.5rem',
      height: '3.5rem',
      top: 0,
      right: '1rem'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "backgroundColor", 'white'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "transform", 'translateY(-50%)'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "alignItems", 'center'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "justifyContent", 'center'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, "borderRadius", '50%'), _ref5),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("img", {
    src: post.User.profileImage,
    style: {
      display: 'block',
      width: '2.5rem',
      height: '2.5rem',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx("div", {
    style: {
      borderBottom: '1px solid #e9ecef'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("p", {
    style: {
      color: '#666699',
      marginBottom: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, post.User.nickname), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, post.postTitle), __jsx("p", {
    style: {
      color: '#CCCCFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "9999\uB1449\uC6D49\uC77C")), __jsx("div", {
    style: {
      marginTop: '1.5rem',
      lineHeight: '1.5rem',
      height: '4.5rem',
      overflowY: 'hidden',
      wordBreak: 'break-all',
      color: '#4c657d',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, post.postContent)));
};

TestCard.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (TestCard);

/***/ })

})
//# sourceMappingURL=index.js.9b8af8e605ba9b2ba29e.hot-update.js.map