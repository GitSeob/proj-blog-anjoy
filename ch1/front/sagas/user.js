import { all, fork, put, takeLatest, call, takeEvery, delay} from 'redux-saga/effects';
import { SIGN_UP_REQUEST, LOG_IN_SUCCESS } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';
const BYE_SAGA = 'BYE_SAGA';

function loginAPI(loginData){
    console.log('get saga');
}

function* login(){
    try{
        yield call(loginAPI);
        yield put({
            type: LOG_IN_SUCCESS
        });
    } catch(e){
        console.error(e);
        yield put({});
    }
}

function* watchLogin(){
    yield takeLatest(SIGN_UP_REQUEST, login);
}

function* watchHello(){
    yield takeEvery(HELLO_SAGA, function*(){
        yield delay(3000);
        yield put({
            type: BYE_SAGA
        });
    });
}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchHello),
    ])
}