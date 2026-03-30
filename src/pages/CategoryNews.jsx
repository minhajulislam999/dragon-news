import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CategoryNews = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res) => res.json())
    .then((data) =>{
      console.log(data.data);
      setCategory(data.data);
    })
  }, [id]);
  
  console.log("Current Category ID:", id);


  return (
    <div>
      
  <div className="max-w-4xl mx-auto my-8">
    <h2 className="text-2xl font-bold mb-4">Category: {id}</h2>
    <div className="flex flex-col gap-4">
      {
        category.length === 0 ? 
  <p className="text-center text-gray-500 text-xl mt-10">এই category-তে কোনো news নেই!</p>
  :
        category.map((news) => (
          <div key={news._id} className="flex gap-4 bg-white p-4 rounded-lg shadow-md">
            <img src={news.thumbnail_url} alt={news.title} className="w-48 h-32 object-cover rounded" />
            <div>
              <h3 className="text-xl font-semibold">{news.title}</h3>
              <p className="text-gray-500">✍️ {news.author.name}</p>
              <p className="text-gray-500">👁️ {news.total_view} views</p>
              <p className="text-yellow-500">⭐ {news.rating.number}</p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)
    </div>
  )
}

export default CategoryNews
