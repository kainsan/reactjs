import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () =>{
        const reponse = await fetch('https://fakestoreapi.com/products');
        const data = await reponse.json();
        console.log(data);
      };
      fetchProducts();
    }, []);

  return (<></>);
};

export default ProductProvider;