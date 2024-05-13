import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';


function* getUserListResponse() {
    try {
        const response = yield axios.get('https://jsonplaceholder.typicode.com/users');
        if (response.status === 200) {
            yield put(
                actions.getUserSuccess(
                    response.data
                ));
        } else {
            yield put(actions.getUserFailed(response.data.Message));
        }
    } catch (error) {
        yield put(actions.getUserFailed(error.message));
    }
}


export default function* rootSaga() {
    yield all([takeEvery(actions.GET_USER, getUserListResponse)]);

}