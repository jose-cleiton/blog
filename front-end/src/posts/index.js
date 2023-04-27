import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/wp-json/wp/v2/posts');
        const data = response.data.map(post => ({
          ...post,
          content: parse(post.content.rendered)
        }));
        
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderPosts = () => {
    if (isLoading) {
      return <p>Carregando...</p>;
    }

    if (hasError) {
      return <p>Ocorreu um erro ao carregar os posts.</p>;
    }

    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {renderPosts()}
    </>
  );
};

export default Posts;
