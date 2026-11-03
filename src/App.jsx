import React from 'react'
import Card from './components/Card'
import './App.css'
import foodData from './components/FoodData'


const App = () => {

  return (
    <div className='card-container'>
        {foodData.map(function(food) {
            return(
                <Card
                key={food.id}
                image = {food.image}
                name = {food.name}
                description = {food.description}
                price = {food.price}
                rating = {food.rating}
                servings = {food.servings}
                />
            )
        })}
    </div>
  )
}

export default App
