import React from "react";
import Card from "react-bootstrap/Card";
import ElectricBike from "../assets/ElectricBike.jpg";

const Search = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ElectricBike} />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <button>Rent Now!</button>
      </Card.Body>
    </Card>
  );
};

export default Search;
