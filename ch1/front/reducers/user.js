export const initialState = {
    isLoggedIn: false, // 로그인 여부
    isLoggingIn: false, // 로그인 시도 중
    isLoggingOut: false, // 로그아웃 시도 중
    loginErrorReason: '', // 로그인 에러 사유
    isSigningUp: false, // 회원가입 시도중
    isSignedUp: false, // 회원가입 성공
    signupErrorReason: '',
    me: {
        nickname: 'anjoy',
        profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1',
        Post: [],
        Followings: [],
        Followers: [],
    }, // 내정보
    followingList: [],
    followerList: [],
    userInfo: null, // 남의 정보

}

const dummyUser = {
    nickname: 'anjoy',
    profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1',
    Post: [],
    Followings: [],
    Followers: [],
    signUpDate: {}
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const BLOCK_USER_REQUEST = 'BLOCK_USER_REQUEST';
export const BLOCK_USER_SUCCESS = 'BLOCK_USER_SUCCESS';
export const BLOCK_USER_FAILURE = 'BLOCK_USER_FAILURE'; // 유저 차단

export const TEST = 'TEST';

export const signUpAction = (data) =>{
    return {
        type: SIGN_UP_REQUEST,
        data: data
    }
}

export const loginAction = {
    type: LOG_IN_REQUEST,
    data: dummyUser
}

export const logoutAction = {
    type: LOG_OUT_REQUEST
}

const reducer = (state = initialState, action ) =>{
    switch (action.type){

        case LOG_IN_REQUEST:{
            return{
                ...state,
                isLoggingIn: true,
                loginErrorReason: '',
            }
        }
        case LOG_IN_SUCCESS:{
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: action.data,
            }
        }
        
        case LOG_IN_FAILURE:{
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                loginErrorReason: action.error,
                me: null,
            }
        }
        
        case LOG_OUT_REQUEST:{
            return{
                ...state,
                isLoggingOut: true,
            }
        }

        case LOG_OUT_SUCCESS:{
            return{
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            }
        }

        case LOG_OUT_FAILURE:{
            return{
                ...state,
                isLoggingOut: false,
            }
        }

        case SIGN_UP_REQUEST:{
            return{
                ...state,
                isSigningUp: true,
            }
        }

        case SIGN_UP_SUCCESS:{
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: true,
            }
        }

        case SIGN_UP_FAILURE:{
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: false,
                signupErrorReason: action.error,
            }
        }

        case LOAD_USER_REQUEST: {
            return {
              ...state,
            };
        }
        case LOAD_USER_SUCCESS: {
            return {
              ...state,
              me: action.data,
            };
        }
        case LOAD_USER_FAILURE: {
            return {
              ...state,
            };
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;