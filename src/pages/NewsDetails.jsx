import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const NewsDetails = () => {

  const [newsDetails, setNewsDetails] = useState([]);

  const { id } = useParams();
   
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      setNewsDetails(data.data);
    });
  }, []);


  return (
    <div>
      {newsDetails.map((news) => (
        <div key={news._id} className="max-w-4xl mx-auto my-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
          <img src={news.image_url} alt={news.title} className="w-full h-64 object-cover rounded mb-4" />
          <p className="text-gray-700 mb-4">{news.details}</p>
          <p className="text-gray-500">✍️ {news.author.name}</p>
          <p className="text-gray-500">👁️ {news.total_view} views</p>
          <p className="text-yellow-500">⭐ {news.rating.number}</p>
          
        </div>
      ))}

    </div>
  )
}

export default NewsDetails
