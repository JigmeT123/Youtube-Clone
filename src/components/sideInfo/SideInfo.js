import React from 'react';
import styles from './sideinfo.module.css';
const SideInfo = ({Icon, title, selected}) => {
    return (
        <div className={`${styles.sideInfo} ${selected && styles.icon__selected}`}>
                <Icon className={styles.icon} />
                <p>{title}</p>
        </div>
    )
}

export default SideInfo
