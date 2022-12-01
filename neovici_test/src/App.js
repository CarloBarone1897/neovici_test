import logo from "./logo.svg";
import React, { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  const cocktailFetchHandler = () =>{
    fetch(url).then().catch(e=>console.log(e)).finally(setLoading(false));
  }

  if(loading){
    return <h2>Loading...</h2>
  }
  return <div className="App">
    <form>
      <input type='text'></input>
    </form>
    <div>
      <img alt="cocktail-image"></img>
      <h1>Cocktail</h1>
      <p>Instructions</p>
    </div>
    <div>Shopping List</div>
    <div>Toaster</div>
  </div>;
}

export default App;
