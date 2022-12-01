import logo from "./logo.svg";
import React, {Component, useState, useCallback, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  
  const changeHandler = (event) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+event.target.value;
    fetch(url)
      .then((response) => response.json())
      .then((data)=>console.log(data));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const result = () => {
    
      return (data.map((c) => (
        <div className="main-card" key={c.idDrink}>
          <img src={c.strDrinkThumb} alt="cocktails" height="200" width="200" />
          <br></br>
          <h2 className="main-title">{c.strDrink}</h2>
          <p>
            Ingredients:{c.strIngredient1}, {c.strIngredient2},{" "}
            {c.strIngredient3}
          </p>
        </div>)
      ));
    }
  

  return (
    <>
      <div className="main-container">
        <form onSubmit={submitHandler}>
          <div className="search-container">
            <input type="search" className="search-field" onChange={changeHandler}></input>
            <button className="submit-btn">
              SEARCH COCKTAILS
            </button>
          </div>
        </form>
      </div>
      {result}
    </>
  );
  }

export default App;
