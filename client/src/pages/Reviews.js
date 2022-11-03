import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Quad from "../assets/quad.webp";

const Reviews = () => {
  return (
    <section id="review" className="my-5">
      <div className="container">
        <div className="row">
          <Card className="bg-light mt-5" style={{ width: 300 }}>
            <Card.Img src={Quad} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Text>
                ß
                <Button
                  style={{ position: "absolute", right: 5, bottom: 5 }}
                  variant="primary"
                >
                  Rent Now
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>{}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
