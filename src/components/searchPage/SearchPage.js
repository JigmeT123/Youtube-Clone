import React from 'react'
import styles from './search.module.css';
import VideoIframe from '../videoIframe/VideoIframe'
import VideoList from '../videoList/VideoList';

const SearchPage = ({video, videos, onVideoSelect}) => {

    if(!video){
        return <div><h1>Loading.....!</h1></div>
    }else{
        return (
            <div className={styles.searchPage}>
                <VideoIframe video={video} />
                <div className={styles.idiot}>
                    <VideoList videos={videos} />
                </div>
                
            </div>
        )
    }
    
}

export default SearchPage
