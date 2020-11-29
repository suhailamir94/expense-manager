const authReducerDefaultState = { uid: undefined };
const authReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCEEDED":
      return { userId: action.uid };
    case "LOGIN_FAILED":
      return { userId: undefined, message: action.message };
    case "LOGOUT_SUCCEEDED":
      return { userId: undefined };
    case "LOGOUT_FAILED":
      return { userId: undefined, message: action.message };
    default:
      return { ...state };
  }
};

export default authReducer;
