import React from 'react';
import Image from "next/image";
import styles from '../../styles/Post.module.scss'
import {FaRegComment, FaRegHeart} from "react-icons/fa";
import {BiBookmark, BiSmile} from "react-icons/bi";
import {FiSend} from "react-icons/fi";

function Post({id, profileImage, username, image, caption}) {
    return (
        <div className={styles.container}>
            <div className={styles.topPost}>
                <Image className={styles.profileImage} src={profileImage} width={50} height={50} alt={"Profile Image"}/>
                <h1><span>@</span>{username}</h1>
            </div>
            <img className={styles.image} src={image} alt="Post Image"/>
            <div className={styles.buttonSection}>
                <div className={styles.leftIcons}>
                    <FaRegHeart className={styles.icon}/>
                    <FaRegComment className={`${styles.icon} ${styles.iconMiddle}`}/>
                    <FiSend className={styles.icon}/>
                </div>
                <BiBookmark className={styles.icon}/>
            </div>
            <div className={styles.captionSection}>
                <h1>{username}</h1>
                <p>{caption}</p>
            </div>
            <div className={styles.inputContainer}>
                <BiSmile className={styles.smileIcon}/>
                <input className={styles.input} placeholder={"Enter a comment..."} type="text"/>
                <button className={styles.button}>Post</button>
            </div>
        </div>
    );
}

export default Post;