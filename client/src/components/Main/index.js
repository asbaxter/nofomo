import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation";

import Home from "../../pages/Home";
// import Categories from "../../pages/Categories";
// import Reviews from "../../pages/Reviews";
import Search from "../../pages/Search";
import Dashboard from "../../pages/Dashboard";
import ItemUpload from "../../pages/ItemUpload";
import CreateProduct from "../CreateProduct";

function Main() {
  return (
    <div className="main">
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/categories" element={<Categories />} /> */}
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/itemUpload" element={<ItemUpload />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </div>
  );
}

export default Main;
