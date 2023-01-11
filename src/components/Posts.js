import React from 'react';
import styles from '../../styles/Posts.module.scss'
import Post from "./Post";

function Posts(props) {

    const posts = [
        {
            id: "1",
            username: "alessioromeo",
            profileImage: "/profileSignIn.png",
            image: "/post1.jpeg",
            caption: "This is my first post"
        },
        {
            id: "2",
            username: "simonelopresti",
            profileImage: "/profileSignIn.png",
            image: "/post2.jpg",
            caption: "This is my second post"
        }
    ]


    return (
        <div className={styles.container}>
            {
                posts.map(post =>(
                    <Post key={post.id} profileImage={post.profileImage} username={post.username} image={post.image} caption={post.caption}/>
                ))
            }
        </div>
    );
}

export default Posts;