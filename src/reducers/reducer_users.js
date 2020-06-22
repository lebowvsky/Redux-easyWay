const initState = {
  name: "Georges",
  nickname: "La classe",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.name };
    case "CHANGE_NICKNAME":
      return { ...state, nickname: action.nickname };
    default:
      return state;
  }
};

export default userReducer;