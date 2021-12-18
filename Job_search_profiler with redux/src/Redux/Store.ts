import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./RootSaga";
import RootReducer from "./RootReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

export default store;
