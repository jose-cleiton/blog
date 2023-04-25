import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const POSTS_QUERY = gql`
query {
    posts {
      nodes {
        id
        title
        content
        date
      }
    }
  }
  
`;
const Post = () => {
    const { loading, error, data } = useQuery(POSTS_QUERY);
    const posts = data?.posts.nodes;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        posts.map((post) => {
            return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.date}</p>
                </div>
            )
        }
        )
   
    )
}



export default Post;