import {call, put, takeEvery, fork} from 'redux-saga/effects'
import {TEST_ASYNC_SAGA_ACTION, testAsyncStart, testAsyncSuccess, testAsyncError} from '../actions/app.js';
import api from '../api';


function* testAsyncAction() {
    yield takeEvery(TEST_ASYNC_SAGA_ACTION, processApiCall);
}

function* processApiCall() {
    console.log('async start');
    try {
        yield put(testAsyncStart());
        const data = yield call(api.testAsync);
        yield put(testAsyncSuccess(data));
    } catch (error) {
        yield put(testAsyncError(error));
    }
}

export default function*() {
    yield [
        fork(testAsyncAction)
    ]
}