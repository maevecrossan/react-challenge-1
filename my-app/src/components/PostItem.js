import React from 'react'
import css from "./css/PostItem.module.css";

function PostItem(props) {
  return (
        props.savedPosts.map(post => {
            const {title, name, image, description} = post
            return (
                <div className={css.SearchItem} key={title}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img source={image} alt='random'></img>
                    <p>{description}</p>
                </div>
            )                            
        })
    )    
}

export default PostItem