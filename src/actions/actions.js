const axios = require("axios");
export const getUsers = (users) => {
  return {
    type: "GET_USERS",
    payload: users,
  };
};

export const getPosts = (posts) => {
  return {
    type: "GET_POSTS",
    payload: posts,
  };
};

export const getComments = (comments) => {
  return {
    type: "GET_COMMENTS",
    payload: comments,
  };
};


export const fetchUsers = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      dispatch(getUsers(response.data));
    });
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      dispatch(getPosts(response.data));
    });
  };
};

export const fetchComments= () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      dispatch(getComments(response.data));
    });
  };
};
