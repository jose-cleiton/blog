import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/api/usuario')
            .then(response => {
                const data = response.data.map(post => ({
                    ...post,
                    content: post.content.replace(/<!--[\s\S]*?-->/g, '').replace(/<\/?p>/g, '').replace(/<\/?li>/g, '').replace(/<\/?ol>/g, '')
                }));
                setPosts(data);
            });
    }, []);

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </li>
            ))}
        </ul>
    );
};

export default Posts;