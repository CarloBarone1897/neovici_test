import React, { useState } from "react";
import "./App.css";
import DrinkList from "./components/DrinkList";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const changeHandler = async (event) => {
    // Concat strings with `` for better readability
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`

    try {
      // Use Asnyc/await to retrieve async data from an API
      const response = await fetch(url);
      // Await the response to get the actual data from the API
      const actualData = await response.json();
  
      setDrinks(actualData.drinks);

    } catch (error) {
      console.log('error while searching for a drink', error)
    }
  };

  const addToCart = (newIngredients) => {
    const ingredientToAdd = [];

    // handle duplicates in array of strings
    for (let index = 0; index < newIngredients.length; index++) {
      const ingredient = newIngredients[index];
      
      if (!ingredients.includes(ingredient)) {
        ingredientToAdd.push(ingredient);
      };
    }

    setIngredients([
      ...ingredients,
      ...ingredientToAdd,
    ])
  }

  const submitHandler = (event) => {
    event.preventDefault();
    changeHandler(event);
  };

  return (
    // livello 1 a colonne
    <div className="main-container">
      {/* livello 2 larghezza 100% */}
      <form onSubmit={submitHandler}>
        <div className="search-container">
          <input type="search" className="search-field" onChange={changeHandler}></input>
          <button className="submit-btn">
            SEARCH COCKTAILS
          </button>
        </div>
      </form>
      {/* livello 2 a righe */}
      <div>

        {/* livello 3 larghezza 70% */}
        <DrinkList addToCart={addToCart} drinks={drinks}/>
        {/* livello 3 larghezza 30% */}
        <ShoppingList ingredients={ingredients} />
      </div>
    </div>
  );
  }

export default App;
