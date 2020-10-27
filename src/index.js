import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { fetchUsers, fetchPosts, fetchComments } from "./actions/actions";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
store.dispatch(fetchComments());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
