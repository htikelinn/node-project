import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PostComponent() {
    const url= 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setPosts(res.data)
        }) 
        .catch(err => {
            console.log(err)
        })
    },[]);
  return (
    <div>
        <h1>PostComponent</h1>
        {
            posts && posts.length && posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}
