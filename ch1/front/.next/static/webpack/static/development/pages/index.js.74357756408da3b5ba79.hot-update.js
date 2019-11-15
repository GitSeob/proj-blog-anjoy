webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostContainer.js":
/*!*************************************!*\
  !*** ./components/PostContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostCard */ "./components/PostCard.js");
/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestCard */ "./components/TestCard.js");
var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/PostContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostContainer = function PostContainer() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts;

  return __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, mainPosts.map(function (c) {
    return __jsx(_TestCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: c,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }));
};

PostContainer.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (PostContainer);

/***/ })

})
//# sourceMappingURL=index.js.74357756408da3b5ba79.hot-update.js.map