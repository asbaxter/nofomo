const express = require("express");
const productsRoute = require("./routes/productRoute");
const { ApolloServer } = require("apollo-server-express");

const path = require("path");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  persistedQueries: false,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cors());

app.use("/api/products", productsRoute);

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Rental Company",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

// // Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
