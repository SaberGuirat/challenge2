import React from "react";
import { Card } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

const CommentCard = ({ comments }) => {
  return (
    <Card
      style={{ width: "18rem", margin: 20 }}
      className="text-center"
      bg="dark"
      text="white"
    >
      <Card.Header>{comments.name}</Card.Header>
      <Card.Body>
        <BiMessageDetail size="32" />
        <Card.Text>{comments.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <FaUserCircle size="32" />
        <br />
        {comments.email}
      </Card.Footer>
    </Card>
  );
};

export default CommentCard;
