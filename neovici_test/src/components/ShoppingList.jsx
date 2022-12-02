import React from "react";

const ShoppingList = ({ ingredients }) => {
  const print = (event) => {
    alert("Shopping list: " + ingredients);
  };

  return (
    <>
      <h1>Shopping List</h1>
      <ul>
      {ingredients.map((ingredient, index) => (
        <li key={ingredient + index}>{ingredient}</li>
      ))}
      </ul>
      <button onClick={print}>Print</button>
    </>
  );
};

export default ShoppingList;
