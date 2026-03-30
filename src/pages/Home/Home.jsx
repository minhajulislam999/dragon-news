import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [category, setCategory] = useState([])

  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data =>{
        console.log(data);

        setCategory(data.data.news_category)
        
      } )
  }, [])

  return (
    <div>
         <h1 className='text-3xl font-bold text-center my-5'>All Category</h1>

         
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          category.map((cat, index) => (

            <Link to={`/category/${cat.category_id}`} key={index}>
            <div key={index} className='bg-gray-200 p-4 rounded-lg shadow-md'>
              <h2 className='text-xl font-semibold'>{cat.category_name}</h2>
            </div>

            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
