import React, { useEffect, useState } from "react";

const CocktailCard = ({ drink, addToCart }) => {
  const [ingredients, setIngredients] = useState([]);

  // Runs when components render or when drink changes
  useEffect(() => {
    const tempIngredients = [];
    // Loop through all 15 possible ingredient strings defined by API to search for ingredients
    for (let index = 0; index < 15; index++) {
      if (drink["strIngredient" + (index + 1)]) {
        //This "if" clause stops the cycle if the following element is "null"
        tempIngredients.push(drink["strIngredient" + (index + 1)]);
      }
    }
    // create the ingredients array to display and use cart
    setIngredients(tempIngredients);
  }, [drink]);

  return (
    // Level 4
    <div className="card" key={drink.idDrink}>
      <img src={drink.strDrinkThumb} alt="cocktails" />
      <br></br>
      <h2 className="main-title">{drink.strDrink}</h2>
      <p>
        Ingredients:<br></br>
      </p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={ingredient + index}>{ingredient}</li>
        ))}
      </ul>
      <p className="instructions">{drink.strInstructions}</p>
      <button onClick={() => addToCart(ingredients)}>Add to Cart</button> 
    </div>
  );
};

export default CocktailCard;
