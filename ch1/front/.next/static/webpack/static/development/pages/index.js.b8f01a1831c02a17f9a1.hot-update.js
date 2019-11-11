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
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostCard */ "./components/PostCard.js");
/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestCard */ "./components/TestCard.js");
var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/PostContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var dummy = {
  nickname: 'anjoy',
  Post: [{
    User: {
      id: 1,
      nickname: 'anjoy'
    },
    postTitle: '1번',
    img: 'https://www.google.com/search?q=%EC%95%84%EC%9D%B4%EC%9C%A0&sxsrf=ACYBGNRFb3nwV7pJDKOGOf-Gj2zqBqsPmg:1573461632318&tbm=isch&source=iu&ictx=1&fir=oVh7r-SjfHdDIM%253A%252CmZ8xttxHGzRuWM%252C%252Fm%252F0fr0bhg&vet=1&usg=AI4_-kQawcgHQ3TPtFiClmaNEaajQDdrgA&sa=X&ved=2ahUKEwjpxaWt4eHlAhVLCqYKHbG6B6QQ_B0wFXoECAkQAw#imgrc=oVh7r-SjfHdDIM:'
  }, {
    User: {
      id: 1,
      nickname: 'anjoy'
    },
    postTitle: '2번',
    img: ''
  }, {
    User: {
      id: 1,
      nickname: 'anjoy'
    },
    postTitle: '2번',
    img: ''
  }, {
    User: {
      id: 1,
      nickname: 'anjoy'
    },
    postTitle: '2번',
    img: ''
  }, {
    User: {
      id: 1,
      nickname: 'anjoy'
    },
    postTitle: '2번',
    img: ''
  }, {
    User: {
      id: 1,
      nickname: 'anjoy'
    },
    postTitle: '2번',
    img: ''
  }]
};

var PostContainer = function PostContainer() {
  return __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, dummy.Post.map(function (c) {
    return __jsx(_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: c,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    });
  }));
};

PostContainer.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (PostContainer);

/***/ }),

/***/ "./components/TestCard.js":
/*!********************************!*\
  !*** ./components/TestCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/TestCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var dummy = {
  isLoggiedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'anjoy'
    },
    content: '첫 번째 게시글',
    img: 'https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTdfMTEy/MDAxNTM5Nzc5MDQyNDgz.1c9fV0imO8toanzl4DG-9fb4-MLMbodpjdpApsBIbEAg.hgaKF2X2cmiO-hYT7T98uqXoNUenEshBmCdkoSLc7Zog.JPEG.ajjj12345/IMG_20181017_204128.jpg?type=w740'
  }]
};

var TestCard = function TestCard() {
  return __jsx("div", {
    style: {
      width: '250px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      borderRadius: '10px',
      boxShadow: '0 0 4px #999'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      backgroundColor: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " "), __jsx("div", {
    style: {
      position: 'relative',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    style: {
      position: 'absolute',
      width: '3.5rem',
      height: '3.5rem',
      top: 0,
      right: '1rem',
      backgroundColor: 'white',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })));
};

TestCard.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (TestCard);

/***/ })

})
//# sourceMappingURL=index.js.b8f01a1831c02a17f9a1.hot-update.js.map