import { useState, useEffect, useSyncExternalStore } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostManager = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    const [selectedPost, setSelectedPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleSuccess = (post, operation) => {
        if(operation === "add"){
            setPosts((currentPosts) => [post, ...currentPosts] )
        } else if (operation === "update"){
          setPosts((currentPosts) => currentPosts.map((p) => (p.id === post.id ? post : p)))
        }
    }
  
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

    const handleEdit = (post) => {
      setSelectedPost(post);
      setIsEditing(true);
    };
    
    const handleCancelEditing = (post) => {
      setSelectedPost(null);
      setIsEditing(false);
    };


    return (<div>
    <h2>Manage posts</h2>
    <PostForm post={isEditing ? selectedPost : null } onSuccess={handleSuccess} />
    {isEditing && <button onClick={handleCancelEditing}>Cancel editing</button> }
      <h1>Posts</h1>
      {posts.map((post) => (<div key={post.id} >
          <h2>{post.title}</h2>
          <p> {post.body} </p>
          <button onClick={() => handleEdit(post)}>Edit</button>
      </div>))}
    </div>);
  };

export default PostManager;
