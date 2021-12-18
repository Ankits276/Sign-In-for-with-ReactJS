import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS_REQUEST,
  GET_USER_LIST_FAILED_REQUEST,
} from "../UserListComp/action";

const inital = {
  isFetching: false,
  responce: [],
};
export const UserListReducer = (state = inital, action: any) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case GET_USER_LIST_SUCCESS_REQUEST:
      return {
        ...state,
        isFetching: false,
        responce: action.results,
      };

    case GET_USER_LIST_FAILED_REQUEST:
      return {
        isFetching: false,
      };

    default:
      return {...state};
  }
};
