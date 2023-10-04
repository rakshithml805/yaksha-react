import { call, put, takeEvery } from "redux-saga/effects";
import { getApi } from "../../_api/_api";
import { EXAMPLE_DATA } from "../actions/example";
import { handleExampleDetail } from "../reducer/example";

// ::TODO:: Add Sagas according to requirement && Rename file according the functionality name

// example will replace with the name accordingly
export const addAsset = "api-asset/Asset/addAsset";
export function* exampleSaga (params) {
    try {
        const { body, status } = yield call(getApi, addAsset);
        yield put(handleExampleDetail({ notificationType: params.payload, error: body, status, loader: false }));
    }
    catch (err) {
        console.log(err)
    }
}

export function* watcherExampleSaga () {
    yield takeEvery(EXAMPLE_DATA, exampleSaga)
}