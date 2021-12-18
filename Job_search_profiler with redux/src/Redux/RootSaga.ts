import {all, fork} from "redux-saga/effects";
import watchUserListRequest from "../Component/UserListComp/saga";

function* RootSaga() {
  yield all([fork(watchUserListRequest)]);
}
export default RootSaga;
