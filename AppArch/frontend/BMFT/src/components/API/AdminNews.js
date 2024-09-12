import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import styles from '../styles/Newsfeed.module.css';
import Ntop from '../assets/Ntop.jpg';
import Post from './Post'


function AdminNews() {
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

  const openCity = (evt, cityName) => {
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
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

      <div>
        <Post/>
      </div>

      <div className={styles.tab}>
        <button className={styles.tablinks} onClick={(e) => openCity(e, 'news')}>Latest News</button>
        <button className={styles.tablinks} onClick={(e) => openCity(e, 'annual report')}>Annual Report</button>
      </div>


      <div id='report' className={styles.tabcontent}>
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
        </div>

        <div id='news' className={styles.tabcontent}>
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
        </div>

      </main>
    </div>
  );
}

export default AdminNews;
