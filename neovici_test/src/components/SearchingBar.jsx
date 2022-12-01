import React, {useState} from "react"

const SearchingBar = (props) =>{

const [cocktail, setCocktail] = useState(props.onType);


return( <form>
    <input type="text" value={props.onType}></input>
  </form>)
      }
      export default SearchingBar;