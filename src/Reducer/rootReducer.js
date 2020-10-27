const initState = {
  users: [],
  posts:[],
  comments:[],
};

function rootReducer(state = initState, { type, payload }) {
  switch (type) {
    case "GET_USERS":
      return {
        ...state,
        users: payload,
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: payload,
      };
    case "GET_COMMENTS":
      return {
        ...state,
        comments: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
