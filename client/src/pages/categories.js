import React from "react";
import Card from "react-bootstrap/Card";

const Categories = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Camping Gear</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Vehicles</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Electronics</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Kitchen and Grilling</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href="#">Party Supplies</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Categories;
