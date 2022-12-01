import React, { useState } from "react";
import CocktailResult from "./CocktailResult";
import "./SearchingBar.css";

const SearchingBar = () => {
  const cocktailFetcher = (event) =>{
    event.preventDefault()
    return <CocktailResult select={event.target.value} />
  } 
   return (
    <React.Fragment>
        <form>
            <input type='text' onInput={cocktailFetcher}></input>
        </form>
        
    </React.Fragment>
  );
};

export default SearchingBar;
