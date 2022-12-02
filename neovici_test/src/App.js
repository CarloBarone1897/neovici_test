import React, { useState } from "react";
import "./App.css";
import DrinkList from "./components/DrinkList";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const changeHandler = async (event) => {
    // Concat strings with `` for better readability
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`;

    try {
      // Use Asnyc/await to retrieve async data from an API
      const response = await fetch(url);
      // Await the response to get the actual data from the API
      const actualData = await response.json();

      setDrinks(actualData.drinks);
    } catch (error) {
      console.log("error while searching for a drink", error);
    }
  };

  const addToCart = (newIngredients) => {
    const ingredientToAdd = [];

    // handle duplicates in array of strings
    for (let index = 0; index < newIngredients.length; index++) {
      const ingredient = newIngredients[index];

      if (!ingredients.includes(ingredient)) {
        ingredientToAdd.push(ingredient);
      }
    }

    setIngredients([...ingredients, ...ingredientToAdd]);
  };

  return (
    <div className="main-container">
      <div className="level-2 searching-bar">
        {" "}
        {/*The "level" reference is a reminder 
      to me about which div contains which*/}
        <form onChange={changeHandler}>
          <input type="search" className="search-field"></input>
        </form>
      </div>
      {/*level 2 - flex-orientation: rows!*/}

      <div className="level-2 drinks-and-list">
        <div className="drinks">
          {/*Level 3, cocktails */}
          <DrinkList addToCart={addToCart} drinks={drinks} />
        </div>

        <div className="shopping-list">
          {/*Level 3, narrow*/}
          <ShoppingList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default App;
