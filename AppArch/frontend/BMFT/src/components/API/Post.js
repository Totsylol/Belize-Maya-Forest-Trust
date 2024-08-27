import React from 'react'
import styles from '../styles/newspost.module.css'

const Post = () => {
    const [popup, setPopup] = useState(false);

    const togglePopup = () =>{
        setPopup(!popup)
    }


  return (
    <div>

    <div style={{ display: 'flex', justifyContent: 'center'}}>
    <button style ={{marginBottom: '1vh'}}
    onClick = {togglePopup}
    className={styles.btn2}
    >
    Admin Only
    </button>
    </div>

    {popup && (<div className={styles.background}>
        <div className={styles.box}>
            
            <form onSubmit={handleSubmit}>
                <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input className={styles.input} type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
                <input className={styles.input} type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Author" />
                <input className={styles.input} type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <input className={styles.btn2} type="file" onChange={handleFileChange} />
                <div className={styles.group}>
                <button className={styles.btn} type ="submit" >Upload Artwork</button>
                <button className={styles.btn} onClick={togglePopup}>Close</button>
                </div>
            </form>
        </div>
    </div>)}

    </div>
  )
}

export default Post
