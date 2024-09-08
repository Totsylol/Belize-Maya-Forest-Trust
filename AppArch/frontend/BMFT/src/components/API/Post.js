import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/newspost.module.css';

const Post = () => {
    const [popup, setPopup] = useState(false);
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [year, setYear] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const togglePopup = () => {
        setPopup(!popup);
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('year', year);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('tag', tag);
        formData.append('image', image);

        try {
            const response = await axios.post('/api/news', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            togglePopup(); 
        } catch (error) {
            console.error('Error uploading the news post', error);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button style={{ marginBottom: '1vh' }} onClick={togglePopup} className={styles.btn2}>
                    Admin Only
                </button>
            </div>

            {popup && (
                <div className={styles.background}>
                    <div className={styles.box}>
                        <form onSubmit={handleSubmit}>
                            <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                            <input className={styles.input} type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
                            <input className={styles.input} type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
                            <input className={styles.input} type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Tag" required />
                            <input className={styles.input} type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                            <input className={styles.btn2} type="file" onChange={handleFileChange} required />
                            <div className={styles.group}>
                                <button className={styles.btn} type="submit">Upload</button>
                                <button className={styles.btn} onClick={togglePopup}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
