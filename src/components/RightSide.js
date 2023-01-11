import React, {useEffect, useState} from 'react';
import styles from '../../styles/RightSide.module.scss'
import Image from "next/image";
import minifaker, {username, jobTitle} from 'minifaker';
import 'minifaker/locales/en';

function RightSide() {

    const [suggestions, setSuggestions] = useState([])
    useEffect(()=>{
        const suggestions = minifaker.array(5, (i)=>(
            {
                profileImage: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
                username: minifaker.username({locale:"en"}),
                jobTitle: minifaker.jobTitle(),
                id: i
            }
        ))
        setSuggestions(suggestions)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.profileCut}>

            </div>
            <div className={styles.profileSection}>
                <div className={styles.profileTranslate}>
                    <Image className={styles.profileImage} src={"/profileSignIn.png"} width={150} height={150} alt={"Profile Image"}/>
                    <h1 className={styles.username}>@alessioromeo</h1>
                    <button className={styles.buttonPost}>Create a Post</button>
                </div>
            </div>

            <div className={styles.activityContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Suggested For You</h1>
                    <button>See All</button>
                </div>
                {
                    suggestions.map(suggestions => (
                        <div className={styles.suggestedProfile} key={suggestions.id}>
                            <Image className={styles.suggestedProfileImage} src={suggestions.profileImage} width={45} height={45} alt={"Profile Image"}/>
                            <h1>{username().toLowerCase()}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RightSide;