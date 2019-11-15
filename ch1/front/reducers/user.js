export const initialState = {
    isLoggedIn: false,
    me: null,
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

        case SIGN_UP_REQUEST:{
            return{
                ...state,
                signUpDate: action.data
            }
        }

        case LOG_IN_REQUEST:{
            return{
                ...state,
                isLoggedIn: true,
                me: dummyUser,
            }
        }

        case LOG_OUT_REQUEST:{
            return{
                ...state,
                isLoggedIn: false,
                me: null
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;