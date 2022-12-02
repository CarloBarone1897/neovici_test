import React from "react";

const ShoppingList = ({ ingredients }) => {

  const print = (event) => {
    alert("Shopping list: " + ingredients);
  };

  return (
    <>
      <h3>Shopping List</h3>
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
