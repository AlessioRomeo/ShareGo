import React from 'react';
import styles from '../../styles/Feed.module.scss'
import Posts from "./Posts";
import RightSide from "./RightSide";

function Feed(props) {
    return (
        <div className={styles.container}>
            <div className={styles.postsContainer}>
                <Posts/>
            </div>
            <div className={styles.rightContainer}>
                <RightSide/>
            </div>
        </div>
    );
}

export default Feed;