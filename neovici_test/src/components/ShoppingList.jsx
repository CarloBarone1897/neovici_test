import React from 'react'

const ShoppingList = ({  ingredients }) => {
  return (
    <div>
      <h1>Shopping List</h1>
      {ingredients.map((ingredient, index) => (
        <li key={ingredient + index}>
          {ingredient}
        </li>
      ))}
    </div>
  )
}

export default ShoppingList;