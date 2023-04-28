import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const parseContent = (content) => {
    return parse(content);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/wp-json/api/post/')
      .then(res => {
        const data = res.data.map(post => ({
          ...post,
          content: parseContent(post.conteudo),
        }));
        setPosts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.titulo}</h2>
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
