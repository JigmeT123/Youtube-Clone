import React from 'react'
import styles from './videolist.module.css';
import VideoItem from '../videoItems/VideoItem';

const VideoList = ({videos, onPressed}) => {
    const lisOfVideos = videos.map((vid, id) => (
            <VideoItem onPressed={onPressed} className={styles.vidList} id={id} vid={vid}/>
        
    )) 
    return lisOfVideos;
}

export default VideoList
