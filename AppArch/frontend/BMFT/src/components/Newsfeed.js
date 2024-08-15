import React from 'react';
import styles from  './styles/Newsfeed.module.css';

const Newsfeed = ({ title, description, imageUrl }) => {
    return (
        <div className={styles.newsfeedpanel}>
            <div className={styles.paneltitle}>
                <h2>{title}</h2>
            </div>
            <div className={styles.paneldescription}>
                <p>{description}</p>
            </div>
            <div className={styles.panelimage}>
           
            </div>
        </div>
    );
};

export default Newsfeed;
