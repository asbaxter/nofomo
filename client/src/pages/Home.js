import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button, Nav, Stack, Carousel, Modal, Tab } from "react-bootstrap";
import Auth from "../utils/auth";
import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

import { useSelector } from "react-redux";

import { useState } from "react";
import StripeContainer from "../components/StripeContainer";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

import Selfie from "../assets/selfie2.jpeg";
import Selfie2 from "../assets/selfie3.jpeg";
import Selfie3 from "../assets/selfie4.jpeg";
import Selfie4 from "../assets/selfie5.jpeg";
import Selfie5 from "../assets/selfie6.jpeg";

const Home = () => {
  const [showItem, setShowItem] = useState(false);
  const { items: productData, status } = useSelector((state) => state.products);
  const [showModal, setShowModal] = useState(false);

  const { data } = useQuery(QUERY_ME);
  const userdata = data?.me || {};

  return (
    <>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <div>
            <div className="container-fluid bg-dark py-5">
              <div className="row">
                <Carousel>
                  <Carousel.Item>
                    <Stack
                      direction="horizontal"
                      className="justify-content-center align-items-center d-flex"
                      gap={1}
                    >
                      <Card
                        className="bg-light text-light justify-content-center align-items-center d-flex"
                        style={{
                          width: 500,
                          height: 400,
                          border: "2px solid black",
                          opacity: "95%",
                        }}
                      >
                        <p class="card-text text-center text-dark mx-5">
                          This Smoker is amazing! I wanted to try it out before
                          buying it and I’m definitely getting one now!
                        </p>
                        <img
                          class="card-img-top mt-3"
                          style={{
                            width: 150,
                            height: 150,
                            objectFit: "cover",
                            objectPosition: "10% 20%",
                            border: "2px solid black",
                            borderRadius: "200px",
                          }}
                          src={Selfie}
                          alt="Card cap"
                        />
                        <p className="text-dark mt-2 text-align-center">
                          RentingGuy4321
                        </p>
                      </Card>
                    </Stack>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Stack
                      direction="horizontal"
                      className="justify-content-center align-items-center d-flex"
                      gap={1}
                    >
                      <Card
                        className="bg-light text-light justify-content-center align-items-center d-flex"
                        style={{
                          width: 500,
                          height: 400,
                          border: "2px solid black",
                          opacity: "95%",
                        }}
                      >
                        <p class="card-text text-center text-dark mx-5">
                          Thanks for renting out your electric bike! We had so
                          much fun and can’t wait to do it again!!!
                        </p>
                        <img
                          class="card-img-top mt-3"
                          style={{
                            width: 150,
                            height: 150,
                            objectFit: "cover",
                            objectPosition: "20%",
                            border: "2px solid black",
                            borderRadius: "200px",
                          }}
                          src={Selfie2}
                          alt="Card cap"
                        />
                        <p className="text-dark mt-2 text-align-center">
                          ThatBikeGirl
                        </p>
                      </Card>
                    </Stack>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Stack
                      direction="horizontal"
                      className="justify-content-center align-items-center d-flex"
                      gap={1}
                    >
                      <Card
                        className="bg-light text-light justify-content-center align-items-center d-flex"
                        style={{
                          width: 500,
                          height: 400,
                          border: "2px solid black",
                          opacity: "95%",
                        }}
                      >
                        <p class="card-text text-center text-dark mx-5">
                          Me and my friends really appreciate the fair price on
                          your 6-person tent. We had an amazing weekend thanks
                          to you!
                        </p>
                        <img
                          class="card-img-top mt-3"
                          style={{
                            width: 150,
                            height: 150,
                            objectFit: "cover",
                            objectPosition: "30%",
                            border: "2px solid black",
                            borderRadius: "200px",
                          }}
                          src={Selfie3}
                          alt="Card cap"
                        />
                        <p className="text-dark mt-2 text-align-center">
                          CampingLyfe
                        </p>
                      </Card>
                    </Stack>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Stack
                      direction="horizontal"
                      className="justify-content-center align-items-center d-flex"
                      gap={1}
                    >
                      <Card
                        className="bg-light text-light justify-content-center align-items-center d-flex"
                        style={{
                          width: 500,
                          height: 400,
                          border: "2px solid black",
                          opacity: "95%",
                        }}
                      >
                        <p class="card-text text-center text-dark mx-5">
                          That dirt Bike is good and I had a great time riding
                          around with my friends & family!
                        </p>
                        <img
                          class="card-img-top mt-3"
                          style={{
                            width: 150,
                            height: 150,
                            objectFit: "cover",
                            objectPosition: "30%",
                            border: "2px solid black",
                            borderRadius: "200px",
                          }}
                          src={Selfie4}
                          alt="Card cap"
                        />
                        <p className="text-dark mt-2 text-align-center">
                          TestGuy
                        </p>
                      </Card>
                    </Stack>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Stack
                      direction="horizontal"
                      className="justify-content-center align-items-center d-flex"
                      gap={1}
                    >
                      <Card
                        className="bg-light text-light justify-content-center align-items-center d-flex"
                        style={{
                          width: 500,
                          height: 400,
                          border: "2px solid black",
                          opacity: "95%",
                        }}
                      >
                        <p class="card-text text-center text-dark mx-5">
                          The kids and I really appreciate you renting out your
                          kayak for labor day weekend! We had a blast on the
                          lake and cannot wait to do it again!
                        </p>
                        <img
                          class="card-img-top mt-3"
                          style={{
                            width: 150,
                            height: 150,
                            objectFit: "cover",
                            border: "2px solid black",
                            borderRadius: "200px",
                          }}
                          src={Selfie5}
                          alt="Card cap"
                        />
                        <p className="text-dark mt-2 text-align-center">
                          MommaMakingMemories
                        </p>
                      </Card>
                    </Stack>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <h3 className="featureHeader">All Available Items</h3>

            <div className="listingContainer mt-4">
              {status === "success" ? (
                <div className="test d-flex justify-content-center flex-wrap mx-5">
                  {productData &&
                    productData?.map((product) => (
                      <div key={product._id} className="product">
                        <Card
                          className="bg-dark text-light mx-3 mt-3"
                          style={{ width: 300 }}
                        >
                          <Card.Img
                            src={product.image?.url}
                            alt={product.title}
                          />
                          <Card.ImgOverlay>
                            <Card.Text>
                              {Auth.loggedIn() ? (
                                <>
                                  {product.username === userdata.username ? (
                                    <Button
                                      style={{
                                        position: "absolute",
                                        right: 5,
                                        bottom: 5,
                                        border: "none",
                                        zIndex: 999,
                                        cursor: "not-allowed",
                                      }}
                                      className="text-danger bg-dark"
                                    >
                                      Cannot Book
                                    </Button>
                                  ) : (
                                    <></>
                                  )}
                                  <Button
                                    style={{
                                      position: "absolute",
                                      right: 5,
                                      bottom: 5,
                                      border: "none",
                                    }}
                                    variant="primary"
                                    className="bg-success"
                                    onMouseDown={() =>
                                      localStorage.setItem(
                                        "price",
                                        product.price * 100
                                      )
                                    }
                                    onMouseUp={() => setShowItem(true)}
                                  >
                                    Rent Now
                                  </Button>
                                </>
                              ) : (
                                <Button
                                  style={{
                                    position: "absolute",
                                    left: 35,
                                    bottom: 15,
                                    border: "none",
                                  }}
                                  variant="primary"
                                  className="bg-success"
                                  onClick={() => setShowModal(true)}
                                >
                                  Please sign in to rent item
                                </Button>
                              )}
                            </Card.Text>
                          </Card.ImgOverlay>
                          <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text className="d-flex text-light">
                              ${product.price} / Daily
                            </Card.Text>
                            <Card.Text className="d-flex text-light mb-5 text-center">
                              {product.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                </div>
              ) : status === "pending" ? (
                <p>Loading...</p>
              ) : (
                <p>No items found.</p>
              )}
            </div>
          </div>
        </>
      )}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link
                    eventKey="login"
                    style={{ backgroundColor: "#558C8F", marginRight: 10 }}
                    active={{ color: "#558C8F", backgroundColor: "white" }}
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="signup"
                    style={{ backgroundColor: "#558C8F" }}
                    active={{ color: "#558C8F", backgroundColor: "white" }}
                  >
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default Home;
