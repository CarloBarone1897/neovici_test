//Not put in the components folder 'cause it's the "main" one.
//Now I will import my custom componente ExpenseItem

import React from "react"; //Technically not necessary with JSX, but we should always keep in mind that it works under the hood
import SearchingBar from "./components/SearchingBar";
import CocktailResult from "./components/CocktailResult";
import ShoppingList from "./components/ShoppingList";
import Toaster from "./components/Toaster";

const App = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(response =>{
    console.log(response.json());  
  return response.json();
  });

  const toasterHandler = ()=> {

  };
  
  //There is HTML in JS --> JSX, it's a special syntax created by the React team
  //What I did below is to create the Expenses component and import it as a component
  //Then I passed the "expenses" array as a "props" parameter for the function/component "Expenses".
  //K-BOOM, Baby! It works! Boy that's satisfying.
  return (
    <div className="container">
      <SearchingBar />
      <ShoppingList />
      <Toaster message={toasterHandler}/>
    </div>
  );
};
//JSX Syntax is very useful because the browser "translates" it in a very complicated way

export default App;
