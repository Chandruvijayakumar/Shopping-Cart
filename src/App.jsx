import React, { useState } from "react";
import AddCart from "./Components/AddCart";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";

const App = () => {
  const [Value, setValue] = useState(0);
  const obj = [
    {
      name1: "Laptop",
      price_usd: 2000.99,
      inStock: true,
      id: 1,
      option: false,
      ratings: true,
    },
    {
      name1: "Tablet",
      price_usd: 750.99,
      inStock: false,
      id: 2,
      option: true,
      ratings: true,
    },
    {
      name1: "Smartphone",
      price_usd: 849.99,
      inStock: true,
      id: 3,
      option: true,
      ratings: false,
    },
    {
      name1: "Headphones",
      price_usd: 69.99,
      inStock: false,
      id: 4,
      option: true,
      ratings: true,
    },
    {
      name1: "TV",
      price_usd: 1299.99,
      inStock: false,
      id: 5,
      option: true,
      ratings: false,
    },
    {
      name1: "Speakers",
      price_usd: 149.99,
      inStock: false,
      id: 6,
      option: false,
      ratings: false,
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
                stock={item.inStock}
                index={index}
                id={item.id}
                option={item.option}
                Value={Value}
                setValue={setValue}
                ratings={item.ratings}
              />
            );
          })}
        </div>
      </div>
      {/* <h1>Add To Cart :{Value}</h1> */}
      {/* <AddCart Value={Value} setValue={setValue} /> */}
    </div>
  );
};

export default App;
