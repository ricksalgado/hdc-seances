import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostManager = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchPostsAxios = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          setPosts(response.data.slice(0,5));
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchPostsAxios();
    }, []);
  
    return (<div>
    <h2>Manage posts</h2>
    <PostForm />
      <h1>Posts</h1>
      {posts.map((post) => (<div key={post.id} >
          <h2>{post.title}</h2>
          <p> {post.body} </p>
          <button>Edit</button>
      </div>))}
    </div>);
  };

export default PostManager;
