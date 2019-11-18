webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/NameCard.js":
/*!********************************!*\
  !*** ./components/NameCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/NameCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var NameCard = function NameCard(_ref) {
  var user = _ref.user;
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '3rem';
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
    width: '3rem',
    height: '3rem',
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
      lineNumber: 31
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    style: imageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, user.profileImage ? __jsx("img", {
    style: imageStyle,
    src: user.profileImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }) : __jsx("div", {
    style: {
      display: 'block',
      marginLeft: '.5rem',
      borderRadius: '50%',
      width: '3rem',
      height: '3rem',
      objectFit: 'cover',
      backgroundColor: 'glay',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    style: {
      color: '#FFF',
      fontSize: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "person")), __jsx("p", {
    style: nameStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, user.nickname)))));
};

NameCard.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (NameCard);

/***/ })

})
//# sourceMappingURL=blog.js.0d4f82e21922aab01388.hot-update.js.map