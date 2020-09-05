import React from 'react'
import styles from './video.module.css';
import {Avatar} from '@material-ui/core'
const Video = ({
    thumbnail,
    avatar,
    title,
    authorName,
    views,
    timestamp
}) => {
    return (
        <div className={styles.video}>
                <img className={styles.thumbnailImg} src={thumbnail} alt={title}/>
                <div className={styles.vid__info}>
                    <Avatar className={styles.ava} src={avatar}/>
                    <h3>{title}</h3>
                </div>
                <div className={styles.vid_footer}>
                    <p>{authorName}</p>
                    <p>{views}·{timestamp}</p>
                </div>
            </div>
    )
}

export default Video
