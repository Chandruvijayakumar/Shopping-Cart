import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";
import Footer from "./Components/Footer";

const App = () => {
  const [Value, setValue] = useState(0);
  const obj = [
    {
      name1: "Fancy Products",
      price_usd: "$40.00 - $80.00",
      inStock: false,
      id: 1,
      option: false,
      ratings: false,
    },
    {
      name1: "Special Item",
      price_usd: " $18.00",
      original_usd: "$20.00 ",
      inStock: true,
      id: 2,
      option: true,
      ratings: true,
    },
    {
      name1: "Sale item",
      price_usd: " $25.00",
      original_usd: "$50.00",
      inStock: true,
      id: 3,
      option: true,
      ratings: false,
    },
    {
      name1: "Popular Item",
      ratings: true,
      price_usd: "$ 40.00",
      inStock: false,
      option: true,
    },
    {
      name1: "Sale item",
      price_usd: " $25.00",
      original_usd: "$50.00",
      inStock: true,
      id: 3,
      option: true,
      ratings: false,
    },
    {
      name1: "Fancy Products",
      price_usd: "$120.00 - $280.00",
      inStock: false,
      id: 1,
      option: false,
      ratings: false,
    },
    {
      name1: "Special Item",
      price_usd: " $18.00",
      original_usd: "$20.00 ",
      inStock: true,
      id: 2,
      option: true,
      ratings: true,
    },
    {
      name1: "Popular Item",
      price_usd: "$ 40.00",
      inStock: false,
      option: true,
      ratings: true,
    },
  ];
  const [Product, setProduct] = useState(obj);
  return (
    <div>
      <Navbar Value={Value} />
      <Header />
      <div className="container">
        <div className="row">
          {Product.map((item, index) => {
            return (
              <ProductCard
                item={item.name1}
                price={item.price_usd}
                original={item.original_usd}
                stock={item.inStock}
                index={index}
                id={item.id}
                option={item.option}
                Value={Value}
                setValue={setValue}
                ratings={item.ratings}
                Details={item.Details}
                Image={item.Image}
              />
            );
          })}
        </div>
      </div>
      {/* <h1>Add To Cart :{Value}</h1> */}
      {/* <AddCart Value={Value} setValue={setValue} /> */}
      <Footer />
    </div>
  );
};

export default App;
