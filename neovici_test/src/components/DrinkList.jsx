import React from "react";
import CocktailCard from "./CocktailCard";


// Props for DrinkList contains `drinks`
const DrinkList = ({ drinks, addToCart }) => (
  drinks.map((drink) => (
    <CocktailCard key={drink.idDrink} drink={drink} addToCart={addToCart} />
  ))
);

export default DrinkList;