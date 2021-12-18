export const GET_USER_LIST_REQUEST = "GET_USER_LIST_REQUEST";
export const GET_USER_LIST_SUCCESS_REQUEST = "GET_USER_LIST_SUCCESS_REQUEST";
export const GET_USER_LIST_FAILED_REQUEST = "GET_USER_LIST_FAILED_REQUEST";

export const getUserListRequest = (params: any) => {
  return {
    type: GET_USER_LIST_REQUEST,
    params,
  };
};
export const getUserListSuccessRequest = (results: any) => {
  return {
    type: GET_USER_LIST_SUCCESS_REQUEST,
    results,
  };
};
export const getUserListFailedRequest = (err: any) => {
  return {
    type: GET_USER_LIST_FAILED_REQUEST,
    err,
  };
};
