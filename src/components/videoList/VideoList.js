import React from 'react'
import styles from './videolist.module.css';
import VideoItem from '../videoItems/VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const lisOfVideos = videos.map((vid, id) => (
            <VideoItem className={styles.vidList} id={id} vid={vid}/>
        
    )) 
    return lisOfVideos;
}

export default VideoList
