import React from 'react'
import css from "./css/PostItem.module.css";

function PostItemAPI(props) {
  return (
        props.savedPosts.map(post => {
            const { id, user, type, tags, webformatURL } = post
            return (
                <div className={css.SearchItem} key={id}>
                    <p>{type}</p>
                    <p>{user}</p>
                    <img source={webformatURL} alt='random'></img>
                    <p>{tags}</p>
                </div>
            )                            
        })
    )    
}

export default PostItemAPI