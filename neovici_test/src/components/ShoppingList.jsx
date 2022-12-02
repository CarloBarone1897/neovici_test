import React from "react";

const ShoppingList = ({ ingredients }) => {
  const print = (event) => {
    alert("Shopping list: " + ingredients);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      {ingredients.map((ingredient, index) => (
        <li key={ingredient + index}>{ingredient}</li>
      ))}
      <button onClick={print}>Print</button>
    </div>
  );
};

export default ShoppingList;
