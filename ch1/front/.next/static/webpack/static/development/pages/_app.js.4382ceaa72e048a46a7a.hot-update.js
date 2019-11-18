webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHING_POSTS_REQUEST, LOAD_HASHING_POSTS_SUCCESS, LOAD_HASHING_POSTS_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_DUMMY, ADD_TEST_COMMENT, ADD_POST, addDummy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_REQUEST", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_SUCCESS", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_FAILURE", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHING_POSTS_REQUEST", function() { return LOAD_HASHING_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHING_POSTS_SUCCESS", function() { return LOAD_HASHING_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHING_POSTS_FAILURE", function() { return LOAD_HASHING_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_REQUEST", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_SUCCESS", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_FAILURE", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DUMMY", function() { return ADD_DUMMY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TEST_COMMENT", function() { return ADD_TEST_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDummy", function() { return addDummy; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


var initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'anjoy',
      profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1'
    },
    postTitle: '테스트',
    postContent: '대한민국의 가수 겸 탤런트. 본명은 이지은이며, 아이유(IU)는 예명이다. 아이유(IU)는 "음악으로 너와 내가 하나가 된다"라는 뜻을 가지고 있다. 2008년에 데뷔하였다. 국민 여동생이라고도 불렸다. 현 시대 여성 솔로 가수 중에서 독보적인 위치를 점하고 있는 한국 가요계의 현재진행형 레전드이자 그 어떤 장르도 소화해내는 만능형 가수라는 평가를 받는다.[22] 로엔 소속 가수 중에 듀엣이나 콜라보 없이 스스로의 힘으로 1위를 기록한 가수는 아이유가 유일하다.',
    image: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1',
    commentNumber: 0 // 해당 게시물 댓글 수 

  } // 메인 화면에 보일 콘텐츠들
  ],
  userBlog: {
    User: {
      id: 1,
      nickname: 'anjoy',
      profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1'
    },
    blogTitle: '짜증짜증 블로그',
    introBlog: '이 블로그는 즐겁지 않습니다.',
    hashtag: ['#짜증', '#극혐', '#홀리쉿', '#개짜증'] // 특정 유저 블로그 들어가면 포스트 전체 보일 용도

  },
  addPostErrorReason: '',
  //포스트 업로드 실패사유
  isAddingPost: false,
  //포스트 업로드 중 
  postAdded: false,
  isAddingComment: false,
  commentAdded: false,
  addCommentErrorReason: '',
  userPosts: [{
    id: 1,
    nickname: 'anjoy',
    profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1',
    postTitle: '테스트',
    postContent: '대한민국의 가수 겸 탤런트. 본명은 이지은이며, 아이유(IU)는 예명이다. 아이유(IU)는 "음악으로 너와 내가 하나가 된다"라는 뜻을 가지고 있다. 2008년에 데뷔하였다. 국민 여동생이라고도 불렸다. 현 시대 여성 솔로 가수 중에서 독보적인 위치를 점하고 있는 한국 가요계의 현재진행형 레전드이자 그 어떤 장르도 소화해내는 만능형 가수라는 평가를 받는다.[22] 로엔 소속 가수 중에 듀엣이나 콜라보 없이 스스로의 힘으로 1위를 기록한 가수는 아이유가 유일하다.',
    image: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1',
    comments: [{
      id: 1,
      User: {
        id: 1,
        nickname: '홍섭',
        profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1'
      },
      createdAt: new Date(),
      content: '더미더미 덤덤 더미 댓글 홍섭짱'
    }]
  }]
};
var LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
var LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
var LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE'; // 메인 화면에 띄워질 포스트들

var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE'; // 새 포스트 업로드

var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE'; // 특정 유저 포스트 

var LOAD_HASHING_POSTS_REQUEST = 'LOAD_HASHING_POSTS_REQUEST';
var LOAD_HASHING_POSTS_SUCCESS = 'LOAD_HASHING_POSTS_SUCCESS';
var LOAD_HASHING_POSTS_FAILURE = 'LOAD_HASHING_POSTS_FAILURE'; // 해쉬태그 클릭시 띄워질 포스트들
// export const REMOVE_IMAGE = 'REMOVE_IMAGE'

var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE'; // 게시물에 좋아요

var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE'; // 게시물 좋아요 취소

var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // 댓글 달기

var LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
var LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
var LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE'; // 댓글 불러오기
// export const RETWEET_REQUEST = 'RETWEET_REQUEST'
// export const RETWEET_SUCCESS = 'RETWEET_SUCCESS'
// export const RETWEET_FAILURE = 'RETWEET_FAILURE'

var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'; // 게시글 지우기

var ADD_DUMMY = 'ADD_DUMMY';
var ADD_TEST_COMMENT = 'ADD_TEST_COMMENT';
var ADD_POST = 'ADD_POST';
var addDummy = {
  type: ADD_DUMMY,
  data: {
    postTitle: 'Hello',
    postContent: 'fucking rain',
    User: {
      nickname: 'test user',
      profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1'
    },
    image: '' // createdAt: new Date(),

  }
};
var dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: '홍섭',
    profileImage: null
  },
  // createdAt: new Date(),
  content: '더미더미 덤덤 더미 댓글 홍섭짱222'
};
var addPost = {
  type: ADD_POST
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOAD_MAIN_POSTS_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          mainPosts: []
        });
      }

    case LOAD_MAIN_POSTS_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          mainPosts: action.data
        });
      }

    case LOAD_MAIN_POSTS_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
      }

    case ADD_POST_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          isAddingPost: true,
          addCommentErrorReason: '',
          postAdded: false
        });
      }

    case ADD_POST_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          isAddingPost: false,
          postAdded: true,
          addPostErrorReason: ''
        });
      }

    case ADD_POST_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          isAddingComment: false,
          addPostErrorReason: action.error,
          isAddingPost: false
        });
      }

    case ADD_COMMENT_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          isAddingComment: true,
          addCommentErrorReason: '',
          commentAdded: false
        });
      }

    case ADD_COMMENT_SUCCESS:
      {
        // const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId)
        // const post = state.mainPosts[postIndex]
        // const Comments = [...post.Comments, dummyComment]
        // const mainPosts = [...state.mainPosts]
        // mainPosts[postIndex] = { ...post, Comments }
        // // 불변성을 위해 위 같이 수행한다.
        // return{
        //     ...state,
        //     isAddingComment: false,
        //     mainPosts,
        //     commentAdded: true,
        // }
        var postIndex = state.userPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });
        var post = state.userPosts[postIndex];
        var comments = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.comments), [dummyComment]);

        var userPosts = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.userPosts);

        userPosts[postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, post, {
          comments: comments
        });
        console.log(userPosts); // 불변성을 위해 위 같이 수행한다.

        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          isAddingComment: false,
          userPosts: userPosts,
          commentAdded: true
        });
      }

    case ADD_COMMENT_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          isAddingPost: false,
          addCommentErrorReason: action.error
        });
      }
    // case ADD_TEST_COMMENT: {
    //     console.log(state.userBlog.userPosts)
    //     const postIndex = state.userBlog.userPosts.findIndex(v => v.id === action.data.postId)
    //     console.log(postIndex);
    //     const post = state.userBlog.userPosts[postIndex]
    //     console.log(post);
    //     const comments = [...post.comments, dummyComment]
    //     const userPosts = [...state.userBlog.userPosts]
    //     userPosts[postIndex] = { ...post, comments }
    //     // 불변성을 위해 위 같이 수행한다.
    //     return{
    //         ...state,
    //         isAddingComment: false,
    //         mainPosts,
    //         commentAdded: true,
    //     }
    // }

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.4382ceaa72e048a46a7a.hot-update.js.map