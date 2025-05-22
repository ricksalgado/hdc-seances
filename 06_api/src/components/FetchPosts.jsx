import { useState, useEffect } from "react";

const FetchPosts = () => {
  // JSON Placeholder
  // id com a key, Title, body vindos da api

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        setPosts(data);

        console.log(response);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Fetch</h2>
      {error ? (
        <p>Error: {error} </p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchPosts;
