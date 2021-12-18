import {put, takeLatest} from "redux-saga/effects";
import {GetRequest} from "../../utils/Network/index";
import {BASE_URL} from "../../utils/Network/URL";
import {
  getUserListFailedRequest,
  getUserListSuccessRequest,
  GET_USER_LIST_REQUEST,
} from "./action";

function* getUserList(action: any) {
  try {
    const responce = yield GetRequest(BASE_URL);
    console.log("LN 13", responce);
    yield put(getUserListSuccessRequest(responce));
    return;
  } catch (err) {
    yield put(getUserListFailedRequest(err));
  }
}
// Format the data

function* watchUserListRequest() {
  yield takeLatest(GET_USER_LIST_REQUEST, getUserList);
}
export default watchUserListRequest;
