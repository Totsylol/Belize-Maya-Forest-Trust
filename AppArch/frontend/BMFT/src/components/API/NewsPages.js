import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsPages = () => {
  const { title } = useParams(); 
  const [news, setNews] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/api/news/${title}`); // Fetch the news post by title
        setNews(response.data); 
      } catch (err) {
        setError('Failed to fetch news post');
        console.error('Error fetching news post:', err);
      }
    };

    fetchNews(); 
  }, [title]); 

  if (!news && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {/* Render the news details */}
      <h1>{news.title}</h1>
      <p>{new Date(news.uploadDate).toLocaleDateString()}</p>
      <p>{news.description}</p>
      {news.content && (
        <img
          src={`data:${news.type};base64,${btoa(
            new Uint8Array(news.content.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          )}`}
          alt={news.title}
        />
      )}
    </div>
  );
};

export default NewsPages;
