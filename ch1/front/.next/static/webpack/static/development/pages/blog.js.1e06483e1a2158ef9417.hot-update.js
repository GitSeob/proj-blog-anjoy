webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/Comments.js":
/*!********************************!*\
  !*** ./components/Comments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagas_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas/post */ "./sagas/post.js");
/* harmony import */ var _NameCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NameCard */ "./components/NameCard.js");
var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/Comments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Comments = function Comments(_ref) {
  var comm = _ref.comm;
  return __jsx("div", {
    key: +comm.createAt,
    style: {
      padding: '0 1rem',
      margin: '1rem 0.25rem',
      borderRadius: '10px',
      boxShadow: '0 4px 8px #e9ecef',
      fontSize: '.8rem',
      // alignItems:'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative',
      borderBottom: '1px solid #e9ecef',
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '1rem',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_NameCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: comm,
    size: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, comm.content));
};

Comments.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ })

})
//# sourceMappingURL=blog.js.1e06483e1a2158ef9417.hot-update.js.map