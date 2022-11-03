import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { productsCreate } from "../slices/productsSlice";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const CreateProduct = () => {
  const { data } = useQuery(QUERY_ME);
  const userdata = data?.me || {};
  const navigate = useNavigate;
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.products);

  const [productImg, setProductImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  console.log(title, description, price);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        title,
        price,
        description,
        image: productImg,
        username: userdata.username,
      })
    );

    window.location.href = "/dashboard";
  };

  return (
    <StyledCreateProduct className="mt-5">
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Insert a short description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">
          {createStatus === "Pending" ? "Submitting" : "Submit"}
        </button>
      </StyledForm>
      <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt="This is the item the user uploaded" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default CreateProduct;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;

    select, input {
        padding: 7px;
        min-height: 30px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #558c8f;
        margin 0.3rem 0;

        &:focus {
            color: rgb(95, 95, 95);
        }
    }

    select {
        color: rgb(95, 95, 95);
    }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: center;
`;
const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
