import React from 'react';
import styles from './recommendation.module.css';
import ava from '../../assests/IMG_1153.JPG';
import Video from '../video/Video';
import leecole from '../../assests/lee cole.jpg';
import mark from '../../assests/mark.jpeg';
import mark1 from '../../assests/mark1.jpg';
import js from '../../assests/js.png';
import dren from '../../assests/dren.jpg';
import chogo from '../../assests/chogo.jpg';
import yeshi from '../../assests/yeshi.jpg';
import powfu from '../../assests/powfu.jpg';
const Recommendation = () => {
    return (
        <div className={styles.recommendation}>
           <h2>Recommendation</h2>
           <div className={styles.videos__container}>
               <Video
                thumbnail={leecole}
                avatar={ava}
                title="I Don't Wanna Wait - Lee Cole (Official Music Video)"
                authorName ="Lee Cole"
                views = "76k views"
                timestamp = "6 months ago"
               />
                <Video
               thumbnail={mark}
                avatar={mark}
                title="
                Facebook
                OnePlus - Love this #OnePlus7Pro review MKBHD 💯"
                authorName ="MKBHD"
                views = "12m views"
                timestamp = "2 months ago"
               />
                <Video
               thumbnail={mark1}
                avatar={mark}
                title="
                YouTube
                Samsung Galaxy S10e Review: Why Not?"
                authorName ="MKBHD"
                views = "10m views"
                timestamp = "1 months ago"
               />
                <Video
               thumbnail={js}
                avatar={js}
                title="Learn async and await in javascript"
                authorName ="javascript mastery"
                views = "123k views"
                timestamp = "2 days ago"
               />
                <Video
               thumbnail={dren}
                avatar={yeshi}
                title="DREN MEY - Kinley Marinsa | Music Video | Yeshi Lhendup Films"
                authorName ="Yeshi Lhendup Flims"
                views = "26k views"
                timestamp = "2 days ago"
               />
                <Video
               thumbnail={chogo}
                avatar={yeshi}
                title="WHERE IS IT - Chogo / Kunzang Chogyel | Music Video | Yeshi Lhendup Films"
                authorName ="Yeshi Lhendup Flims"
                views = "76k views"
                timestamp = "2 months ago"
               />
                <Video
               thumbnail={powfu}
                avatar={powfu}
                title="POWFU - The best songs | Full album 2020"
                authorName ="Powfu"
                views = "121m views"
                timestamp = "12 days ago"
               />
           </div>
        </div>
    )
}

export default Recommendation
