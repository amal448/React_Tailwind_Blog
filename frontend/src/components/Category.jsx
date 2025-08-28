import React from 'react'

const Category = ({onSelectCategory,selectedCategory,activeCategory}) => {
  const category=["Health","Fintech","Startups","AI","Security"]
    return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap  items-center border-b-2 border-gray-200 py-5 text-gray-900 font-semibold'>
        <button  onClick={()=>onSelectCategory(null)}
            className={`lg:ml-12 ${activeCategory?"":"active-button"}`}
            >All</button>
        {
            category.map((item)=>
            <button onClick={()=>onSelectCategory(item)}
            className={`space-x-16 ml-5 ${activeCategory ===item?"active-button":""}`}
            key={item}>{item}</button>)
        }
    </div>
  )
}

export default Category