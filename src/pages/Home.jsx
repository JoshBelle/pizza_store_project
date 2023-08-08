import React from 'react'
import { useState, useEffect } from 'react'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Categories from '../components/Categories'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://64c7b7ada1fe0128fbd52fe8.mockapi.io/items')
      .then((result) => {
        return result.json()
      })
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  )
}

export default Home
