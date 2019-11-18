webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/NameCard.js":
/*!********************************!*\
  !*** ./components/NameCard.js ***!
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/NameCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var NameCard = function NameCard(_ref) {
  var _ref2;

  var user = _ref.user,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '3rem' : _ref$size;
  var imageContainer = {
    margin: '0 0 1rem 1.2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center' // justifyContent:'center'

  };
  var imageStyle = {
    display: 'block',
    marginLeft: '.5rem',
    borderRadius: '50%',
    width: size,
    height: size,
    objectFit: 'cover'
  };
  var nameStyle = {
    fontSize: '1rem',
    color: 'black',
    marginLeft: '.5rem',
    marginBottom: 0
  };
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    style: imageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, user.profileImage ? __jsx("img", {
    style: imageStyle,
    src: user.profileImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }) : __jsx("div", {
    style: (_ref2 = {
      display: 'block',
      marginLeft: '.5rem',
      borderRadius: '50%',
      width: size,
      height: size,
      objectFit: 'cover'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "display", 'flex'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "backgroundColor", 'glay'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "justifyContent", 'center'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "alignItems", 'center'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "backgroundColor", 'gray'), _ref2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    style: {
      color: '#FFF',
      fontSize: 'calc({size}-1rem)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "person")), __jsx("p", {
    style: nameStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, user.nickname)))));
};

NameCard.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (NameCard);

/***/ })

})
//# sourceMappingURL=blog.js.cdd5a5b5a41d9eb3c557.hot-update.js.map