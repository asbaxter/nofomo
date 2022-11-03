const { Product } = require("../models/Product");
const cloudinary = require("../utils/cloudinary");

const router = require("express").Router();

// Create an product post
router.post("/", async (req, res) => {
  const { title, description, price, image, username } = req.body;

  try {
    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image, {
        upload_preset: "mj0ylsvt",
      });

      if (uploadedResponse) {
        const product = new Product({
          title,
          description,
          price,
          username,
          image: uploadedResponse,
        });

        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Delete a product post
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted...");
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all product post
router.get("/", async (req, res) => {
  const qtitle = req.query.title;
  try {
    let products;

    if (qtitle) {
      products = await Product.find({
        title: qtitle,
      });
    } else {
      products = await Product.find();
    }
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get product post by id
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update product post by id
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
