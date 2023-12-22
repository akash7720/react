
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProducts = () => {
  const [productsData, setProductsData] = useState({});
  console.log(productsData, "productsData");
  const { id } = useParams();

  console.log(id, id);

  async function getSingleProductsData() {
    try {
      const response = await axios.get( `https://fakestoreapi.com/products/${id}`);
      setProductsData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      getSingleProductsData();
    }
  }, [id]);
  return (
    <div>
      <h1>{productsData.title}</h1>
      <img src={productsData.image} />
    </div>
  );
};

export default SingleProducts;