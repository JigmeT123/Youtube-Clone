import React, {useState} from 'react'
import styles from './header.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'
import ava from '../../assests/IMG_1153.JPG';


const Header = ({onForm}) => {
    const [searchTerm , setSearchTerm] = useState("");

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }
    const handleSubmit = () => {
        onForm(searchTerm)
    }

    return (
        <div className={styles.header}>
           <div className={styles.headerLeft}>
            <MenuIcon />
            <Link to = "/">
            <img className={styles.youtubeLogo} src="https://upload.wikimedia.org./wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
            alt="Youtube Logo"
            />
            </Link>
           
           </div>
           <div className={styles.headerMid}>
                   <input value={searchTerm} onChange={handleChange} placeholder="Search" />
                   <Link to={`/search/${searchTerm}`}>
                      
                       <div onClick={handleSubmit} className={styles.iconContainer}>
                            <SearchIcon />
                        </div>
                      
                   </Link>
                   
           </div>
           <div className={styles.headeRight}>
            <VideoCallSharpIcon className={styles.rightIcons}/>
            <AppsSharpIcon className={styles.rightIcons}/>
            <NotificationsIcon className={styles.rightIcons}/>
            <Avatar src={ava}/>
           </div>
        </div>
    )
}

export default Header
