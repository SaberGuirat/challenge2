import React from "react";
import { Card, Button } from "react-bootstrap";
import {
  FaRegUserCircle,
  FaHome,
  FaMailBulk,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
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
        <FaHome size="32" style={{ marginRight: 10 }} />
        {user.address.city}
        <br />
        <FaMailBulk size="32" style={{ marginRight: 10 }} />
        {user.email}
        <br />
        <FaPhoneSquareAlt size="32" style={{ marginRight: 10 }} />
        {user.phone}
        <br />
        <Link to={`/user/${user.id}`}>
          <Button variant="primary">Posts</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default User;
