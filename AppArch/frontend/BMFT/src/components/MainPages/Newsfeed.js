import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import styles from '../styles/Newsfeed.module.css';
import Ntop from '../assets/Ntop.jpg';

function Newsfeed() {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('/api/news?tag=news');
        setNewsData(response.data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };
  
    fetchNewsData();
  }, []);

  const handleOpenPopup = (news) => {
    setSelectedNews(news);
  };

  const handleClosePopup = () => {
    setSelectedNews(null);
  };

  return (

    

    <div className={styles.newsFeedPage}>
      <h1 className={styles.titleoverlay}>
        News
      </h1>
      <header className={styles.header}>
        <img src={Ntop} alt="Header" />
      </header>
      <main className={styles.newsFeed}>

      <div className={styles.tab}>
        <button className={styles.tablinks} onclick="openCity(event, 'London')">London</button>
        <button className={styles.tablinks} onclick="openCity(event, 'Paris')">Paris</button>
        <button className={styles.tablinks} onclick="openCity(event, 'Tokyo')">Tokyo</button>
      </div>

        {newsData.map(news => (
          <div key={news._id} className={styles.newsItem}>
            <img src={`data:${news.type};base64,${btoa(
              new Uint8Array(news.content.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
              )
            )}`} alt={news.title} className={styles.newsImage} />
            <a href="#" className={styles.newsTitle} onClick={(e) => {
              e.preventDefault();
              handleOpenPopup(news);
            }}>{news.title}</a>
            <p className={styles.newsDate}>{new Date(news.uploadDate).toLocaleDateString()}</p>
            <p className={styles.newsDescription}>{news.description}</p>
            <button className={styles.readMore} onClick={() => handleOpenPopup(news)}>Read More</button>
          </div>
        ))}
        <div className={`${styles.popupOverlay} ${selectedNews ? styles.show : ''}`} onClick={handleClosePopup}>
          {selectedNews && (
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.description}</p>
              <button className={styles.closeButton} onClick={handleClosePopup}>Close</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Newsfeed;
