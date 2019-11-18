import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS } from '../reducers/post';
import { Result } from 'antd';

function addCommentAPI(){

}

function* addComment(action){
    try{
        // yield delay(2000)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
                comment: action.data.content,
            }
        })
    } catch(e){
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e
        })
    }
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga(){
    yield all([
        fork(watchAddComment),
    ]);
}