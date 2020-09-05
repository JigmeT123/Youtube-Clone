import React from 'react';
import styles from './sidebar.module.css';
import SideInfo from '../sideInfo/SideInfo';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SideInfo selected Icon={HomeIcon} title="Home"/>
            <SideInfo Icon={WhatshotIcon} title="Trending"/>
            <SideInfo Icon={SubscriptionsIcon} title="Subscription"/>
            <hr />
            <SideInfo Icon={VideoLibraryIcon} title="Library"/>
            <SideInfo Icon={HistoryIcon} title="History"/>
            <SideInfo Icon={VideoLibraryOutlinedIcon} title="Your Videos"/>
            <SideInfo Icon={WatchLaterRoundedIcon} title="Watch later"/>
            <SideInfo Icon={ThumbUpAltRoundedIcon} title="Liked Videos"/>
        </div>
    )
}

export default Sidebar
