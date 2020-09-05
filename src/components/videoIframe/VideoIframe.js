import React from 'react'
import styles from './videoIframe.module.css';
const VideoIframe = ({
    video
}) => {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div className={styles.video}>
                    <iframe className={styles.thumbnailImg} frameBorder="0" height="100%" width="100%" title="video player" src={videoSrc}/>
                    <div className={styles.vid__info}>
                        <h3>{video.snippet.title}</h3>
                    </div>
                    <div className={styles.vid_footer}>
                        <p>{video.snippet.channelTitle}</p>
                        <p>{video.snippet.description}</p>
                    </div>
             </div>
        )
    
}

export default VideoIframe
