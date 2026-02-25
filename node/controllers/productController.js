// const getProducts = (req, res) => {
//   res.send("This is get request of product");
// };

// const addProduct = (req, res) => {
//   res.send("This is post request of product router");
// };

// export { getProducts, addProduct };


import express from "express";
import products from "../models/productModel.js";
products;

const getProduct = (req, res) => {
  // res.send("Get request of Product Router");
  res.send({ products });
};

const postProduct = (req, res) => {
  res.send("This is post request of product router");
};

export { getProduct, postProduct };
