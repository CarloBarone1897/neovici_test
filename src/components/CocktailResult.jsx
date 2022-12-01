import React, { useState } from "react";
import Cocktail from "./Cocktail";
import "./CocktailResult.css";

const CocktailResult = (props) => {
  const [search, setSearch] = useState();

  return (
    <ul className="cocktails-list">
      {props.cocktails.map((cocktail) => {
        if (cocktail.name.contains(search)) {
          <li>
            <div>
              <img src={cocktail.thumbnail}></img>
              <h1>{cocktail.name}</h1>
              <p>{cocktail.instructions}</p>
            </div>
          </li>;
        }
      })}
    </ul>
  );
};

export default CocktailResult;
