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
    // livello 1 a colonne
    <div className="main-container">
      <div id="level-2" className="searching-bar">
        <form onChange={changeHandler} >
          <div className="search-container">
            <input type="search" className="search-field"></input>
          </div>
        </form>
      </div>
      {/* livello 2 a righe */}

      <div id="level-2" className="drinks-and-list">
        <div id="level-3" className="drinks">
          <DrinkList addToCart={addToCart} drinks={drinks} />
        </div>

        <div id="level-3" className="shopping-list">
          {/* livello 3 larghezza 30% */}
          <ShoppingList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default App;
