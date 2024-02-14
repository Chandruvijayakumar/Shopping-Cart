import React from "react";

const AddCart = ({ Value, setValue }) => {
  return (
    <div>
      <h1>Add to Cart:{Value}</h1>
      {Value > 0 ? (
        <button onClick={() => setValue(Value - 1)}>Remove Cart</button>
      ) : (
        <button onClick={() => setValue(Value + 1)}>Add To Cart</button>
      )}
    </div>
  );
};

export default AddCart;
