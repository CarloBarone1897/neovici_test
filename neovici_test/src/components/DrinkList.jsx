import React from "react";
import CocktailCard from "./CocktailCard";

/*This component creates a series of CocktailCard components, which we'll be 
rendered on the main app*/
const DrinkList = ({ drinks, addToCart }) =>
  drinks && //This condition here prevents the page to crash if one inserts a cocktail whose name is not included in the API
  drinks.map((drink) => (
    <CocktailCard key={drink.idDrink} drink={drink} addToCart={addToCart} />
  ));

export default DrinkList;
