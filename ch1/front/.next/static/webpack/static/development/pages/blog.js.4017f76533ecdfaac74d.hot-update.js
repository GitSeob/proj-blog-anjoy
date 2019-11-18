webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/FullPost.js":
/*!********************************!*\
  !*** ./components/FullPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _NameCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NameCard */ "./components/NameCard.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comments */ "./components/Comments.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "/Users/anjoy/popolpodopolapo/proj-blog-anjoy/ch1/front/components/FullPost.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var FullPost = function FullPost(_ref) {
  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1]; // const { userBlog } = useSelector(state=>state.post)


  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      commentAdded = _useSelector2.commentAdded,
      isAddingComment = _useSelector2.isAddingComment,
      addCommentErrorReason = _useSelector2.addCommentErrorReason;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCommentText('');
  }, [commentAdded == true]);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  });
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!me) {
      return alert('댓글을 달려면 로그인을 하십시오.');
    }

    ;
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id
      }
    });
  }, [me && me.id, commentText]);
  var onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setCommentText(e.target.value);
  }, []);
  return __jsx("div", {
    key: +post.createdAt,
    style: {
      borderRadius: '5px',
      backgroundColor: 'white',
      margin: '1.5rem 0',
      boxShadow: '0 0 4px #999',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px solid #e9ecef',
      margin: '0 1rem 1rem 1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("p", {
    style: {
      marginTop: '1rem',
      fontSize: '14px',
      color: '#e9ecef'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, post.createdAt), __jsx("h1", {
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, post.postTitle)), __jsx(_NameCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("p", {
    style: {
      margin: '1rem',
      borderBottom: '1px solid #e9ecef',
      paddingBottom: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, post.postContent), __jsx("a", {
    onClick: onToggleComment,
    style: {
      margin: '0 1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("p", {
    style: {
      right: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uB313\uAE00 0\uAC1C")), commentFormOpened && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative',
      margin: '0 1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, post.comments.map(function (c) {
    return __jsx(_Comments__WEBPACK_IMPORTED_MODULE_4__["default"], {
      comm: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    });
  })), __jsx("form", {
    onSubmit: onSubmitComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: commentText,
    onChange: onChangeCommentText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    value: "\uC791\uC131",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))));
};

FullPost.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (FullPost);

/***/ })

})
//# sourceMappingURL=blog.js.4017f76533ecdfaac74d.hot-update.js.map