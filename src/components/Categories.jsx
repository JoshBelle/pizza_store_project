import { useState } from "react"

const Categories = () => {
  
  const [activeIndex, setActiveIndex] = useState(0)

  const onClickCategoryIndex = (index) => {
    setActiveIndex(index)
  }
  
    return (
      <div className="categories">
      <ul>
        <li onClick = {() => onClickCategoryIndex(0)} className={activeIndex === 0 ? 'active' : ''}>Все</li>
        <li onClick = {() => onClickCategoryIndex(1)} className={activeIndex === 1 ? 'active' : ''}>Мясные</li>
        <li onClick = {() => onClickCategoryIndex(2)} className={activeIndex === 2 ? 'active' : ''}>Вегетарианская</li>
        <li onClick = {() => onClickCategoryIndex(3)} className={activeIndex === 3 ? 'active' : ''}>Гриль</li>
        <li onClick = {() => onClickCategoryIndex(4)} className={activeIndex === 4 ? 'active' : ''}>Острые</li>
        <li onClick = {() => onClickCategoryIndex(5)} className={activeIndex === 5 ? 'active' : ''}>Закрытые</li>
      </ul>
    </div>
    )
  }

export default Categories