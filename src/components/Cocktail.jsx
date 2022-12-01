import React, {useState} from "react";
import CocktailResult from "./CocktailResult";
const Cocktail = () =>{
 const[cocktails, setCocktails] = useState([]);
    const cocktailHandler = () => {
        const alcoholToBuy = [];
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then((response) => {
            return response.json();
        }).then((cocktailData) => {
            const transformedCocktails = cocktailData.results.map((cocktail)=>{
                
                alcoholToBuy.push(cocktailData.strIngredient1)
                alcoholToBuy.push(cocktailData.strIngredient2)
                alcoholToBuy.push(cocktailData.strIngredient3)
                alcoholToBuy.push(cocktailData.strIngredient4)
                alcoholToBuy.push(cocktailData.strIngredient5)
                alcoholToBuy.push(cocktailData.strIngredient6)
                alcoholToBuy.push(cocktailData.strIngredient7)
                
                return {
                    name: cocktail.strDrink,
                    thumbnail: cocktail.strDrinkThumb,
                    instructions: cocktail.strInstructions,
                    ingredients: alcoholToBuy
                };
            });
        setCocktails(cocktailData.results);
        })
    }
return <CocktailResult cocktails={cocktailHandler}/>
}



export default Cocktail;