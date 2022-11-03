import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
// import { useGetAllProductsQuery } from "../slices/productsApi";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userdata = data?.me || {};

  const { items: productData, status } = useSelector((state) => state.products);

  // const { productInfo } = useGetAllProductsQuery();

  // if data isn't here yet, say so
  if (loading) {
    return (
      <h2 className="d-flex justify-content-center align-items-center">
        LOADING...
      </h2>
    );
  }

  return (
    <div className="dashboardMain">
      {Auth.loggedIn() ? (
        <>
          <section className="dashboard">
            <div className="container">
              <div className="row">
                <h3
                  style={{
                    color: "#558c8f",
                    padding: 25,
                  }}
                >
                  {userdata.username}'s User Dashboard
                </h3>
              </div>

              <div className="myItems mb-5">
                <NavLink to="/createProduct">Post an Item</NavLink>
              </div>

              <div className="row d-flex justify-content-center">
                <h3>My Listings</h3>
                <div className="listingContainer mt-4">
                  {status === "success" ? (
                    <div className="test d-flex justify-content-center flex-wrap">
                      {productData &&
                        productData?.map((product) => (
                          <div key={product.username} className="product">
                            {product.username === userdata.username ? (
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
                                    <Button
                                      style={{
                                        position: "absolute",
                                        right: 5,
                                        bottom: 5,
                                        border: "none",
                                      }}
                                      variant="primary"
                                      className="bg-success"
                                    >
                                      Available
                                    </Button>
                                  </Card.Text>
                                </Card.ImgOverlay>
                                <Card.Body>
                                  <Card.Title>{product.title}</Card.Title>
                                  <Card.Text className="d-flex text-light">
                                    ${product.price} / Daily
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            ) : (
                              <div></div>
                            )}
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
              <div className="row mt-5">
                <h3>My Reviews</h3>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h3>Please sign in to access the User Dashboard</h3>
      )}
    </div>
  );
};

export default Dashboard;
