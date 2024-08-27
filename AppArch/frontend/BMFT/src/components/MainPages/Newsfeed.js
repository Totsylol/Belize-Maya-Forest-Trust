import React, { useState } from 'react';
import styles from '../styles/Newsfeed.module.css';
import Ntop from '../assets/Ntop.jpg';
import fish from '../assets/fish.jpg';
import fish2 from '../assets/fish2.jpg';

const newsData = [
  {
    id: 1,
    image: fish,
    title: 'News Title 1',
    date: 'August 27, 2024',
    description: 'Short description of the news item. This should be a brief summary of the news.',
    link: '#'
  },
  {
    id: 2,
    image: fish2,
    title: 'News Title 2',
    date: 'August 26, 2024',
    description: 'Short description of the news item. This should be a brief summary of the news.',
    link: '#'
  },
  // Add more news items eventually
];



function Newsfeed() {
  const [selectedNews, setSelectedNews] = useState(null);

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
        {newsData.map(news => (
          <div key={news.id} className={styles.newsItem}>
            <img src={news.image} alt={news.title} className={styles.newsImage} />
            <a href={news.link} className={styles.newsTitle} onClick={(e) => {
              e.preventDefault();
              handleOpenPopup(news);
            }}>{news.title}</a>
            <p className={styles.newsDate}>{news.date}</p>
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


