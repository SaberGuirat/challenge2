import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../PostCard/PostCard";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const PostList = ({ match }) => {
  const posts = useSelector((state) =>
    state.posts.filter((post) => post.userId === +match.params.id)
  );
  const user = useSelector((state) =>
    state.users.find((user) => user.id === +match.params.id)
  );

  return (
    <div className="d-flex flex-column align-items-center">
      <Card
        style={{ width: "18rem", margin: 20 }}
        className="text-center"
        bg="dark"
        text="white"
      >
        <Card.Header>
          <FaRegUserCircle size="32" />
          <br />
          {user.username}
        </Card.Header>
        <Card.Body>
          <Card.Img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
            style={{ width: 64 }}
          />
          <Card.Text>{user.name}</Card.Text>
          <Link to="/">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>

      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
