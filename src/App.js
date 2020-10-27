import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostList from "./Components/Posts/PostList";
import UserList from "./Components/UsersList/UserList";
import CommentsList from "./Components/CommentsList/CommentsList";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/user/:id" component={PostList} />
        <Route exact path="/user/:id/post/:id" component={CommentsList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
