import { configureStore } from '@reduxjs/toolkit'
import exampleDetails from './reducer/example'
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga/rootSaga";

// ::TODO:: Add reducers according to requirement && Rename according the functionality name
// example will replace with the name accordingly
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    exampleDetails
  },
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  
});
sagaMiddleware.run(rootSaga);
export default store;