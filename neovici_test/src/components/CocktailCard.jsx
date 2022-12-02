import React, { useEffect, useState } from 'react'

const CocktailCard = ({ drink, addToCart }) => {
  const [ingredients, setIngredients] = useState([])

  // Runs when components render or when drink changes
  useEffect(() => {
    const tempIngredients = [];
    // Loop through all 15 strings defined by API to search for ingredients
    for (let index = 0; index < 15; index++) {
      if (drink['strIngredient' + (index + 1)]) {
        tempIngredients.push(drink['strIngredient' + (index + 1)]);
      }
    }
    // create the ingredients array to display and use cart
    setIngredients(tempIngredients);
  }, [drink])

  return (
    // Livello 4
    <div className="main-card" key={drink.idDrink}>
      <img src={drink.strDrinkThumb} alt="cocktails" height="200" width="200" />
      <br></br>
      <h2 className="main-title">{drink.strDrink}</h2>
      <p>
        Ingredients:<br></br>
        </p>
      <ul>
        {ingredients.map((ingredient, index) => <li key={ingredient + index}>
          {ingredient}
        </li>)}
        </ul>
        <button onClick={() => addToCart(ingredients)}>Add to cart</button>
    </div>
  )
}

export default CocktailCard