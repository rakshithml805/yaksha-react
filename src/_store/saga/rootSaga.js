import createSagaMiddleware from "redux-saga";
import { watcherExampleSaga } from "./exampleSaga";
import { watcherLoggedInUserSaga } from "./loggedInUserDataSaga";
import { spawn } from "redux-saga/effects"

// ::TODO:: Add Sagas according to requirement && Rename according the functionality name

// example will replace with the name accordingly

const sagaMiddleWare = createSagaMiddleware();

export default function* rootSaga() {
    yield spawn(watcherExampleSaga);
    yield spawn(watcherLoggedInUserSaga);
}

export { sagaMiddleWare, rootSaga };
