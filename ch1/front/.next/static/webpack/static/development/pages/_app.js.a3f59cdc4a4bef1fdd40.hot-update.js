webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _MiniProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MiniProfile */ "./components/MiniProfile.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  var menuStyle = {
    padding: '.75rem 0 .75rem 0rem',
    fontSize: '1.25rem',
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    color: 'inherit'
  };
  var text = {
    marginLeft: '1rem'
  };
  var searchContainer = {
    width: '13rem',
    height: '3rem',
    borderRadius: '10px',
    backgroundColor: '#FFF',
    margin: '1rem',
    boxShadow: '0 2px 8px #65a1ac',
    display: 'flex',
    flexDirection: 'row',
    color: '#000',
    alignItems: 'center'
  };
  var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      backgroundColor: '#e9ecef',
      flexDirection: 'row',
      outlineStyle: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("aside", {
    style: {
      backgroundImage: 'linear-gradient(#b8e3dc, #96dfce, #85cfd2)',
      width: '15rem',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      color: '#FFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    style: {
      padding: '0 1rem',
      margin: '1.75rem 0',
      fontSize: '2rem',
      lineHeight: '2rem',
      display: 'block',
      position: 'relative',
      color: 'inherit',
      fontFamily: 'Inconsolata'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "anjoy"), __jsx("div", {
    style: searchContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    style: {
      color: '#85cfd2',
      marginLeft: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "search")), __jsx("input", {
    type: "text",
    placeholder: "search",
    style: {
      border: 0,
      marginLeft: '.5rem',
      color: '85cfd2'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx("ul", {
    style: {
      color: 'inherit'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("a", {
    style: menuStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "thumb_up_alt"), __jsx("div", {
    style: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "hot"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("a", {
    style: menuStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "thumb_up_alt"), __jsx("div", {
    style: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "blog"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/hashtags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("a", {
    style: menuStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "thumb_up_alt"), __jsx("div", {
    style: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "tags"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("a", {
    style: menuStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "thumb_up_alt"), __jsx("div", {
    style: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "login or profile"))))), __jsx("div", {
    style: {
      marginLeft: '15rem',
      position: 'absolute',
      width: 'calc(100% - 15rem)',
      height: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, children)), isLoggedIn && __jsx("div", {
    style: {
      display: 'flex',
      position: 'fixed',
      marginBottom: '2rem',
      marginRight: '2rem',
      bottom: 0,
      right: 0,
      borderRadius: '100%',
      width: '4rem',
      height: '4rem',
      backgroundImage: 'linear-gradient(#b8e3dc, #96dfce, #85cfd2)',
      boxShadow: '0 2px 8px #e9ecef',
      zIndex: 999,
      alignItems: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/posting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("i", {
    "class": "material-icons",
    style: {
      fontSize: '3rem',
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "post_add")))));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.a3f59cdc4a4bef1fdd40.hot-update.js.map