import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const PostCard = ({ post }) => {
  return (
    <Card
      style={{ width: "18rem", margin: 20 }}
      className="text-center"
      bg="dark"
      text="white"
    >
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        <Link to={`/user/${post.userId}/post/${post.id}`}>
          <Button variant="primary">Comments</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default PostCard;
