import React from 'react'
import styles from './videoitem.module.css'
const VideoItem = ({vid, onPressed}) => {
    if(vid){
        return (
            <div onClick={()=>onPressed(vid)} className={styles.videoItem}>
                        <img className={styles.thumbnailImg} alt="video player" src={vid.snippet.thumbnails.high.url}/>
                        <div className={styles.vid__info}>
                            <h3>{vid.snippet.title}</h3>
                        </div>
                        <div className={styles.vid_footer}>
                            <p>{vid.snippet.channelTitle}</p>
                            <p>{vid.snippet.description}</p>
                        </div>
            </div>
        )
    }else{
        return <div><h1>Loading</h1></div>
    }
    
}

export default VideoItem
