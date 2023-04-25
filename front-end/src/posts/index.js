import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/wp-json/api/usuario')
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    return (
        <ul>
            {posts.map(post => {
                const content = post.content.replace(/<!--[\s\S]*?-->/g, '');
                return (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{content}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Posts;