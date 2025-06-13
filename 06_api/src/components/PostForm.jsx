import { useEffect, useState } from "react";
import axios from "axios";

const PostForm = ( {post, onSuccess} ) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  useEffect(() => {
    if (post) {

      setTitle(post.title);
      setBody(post.body)
    }
    }, [post] )

    const handleSubmit =  async(e) => {
        e.preventDefault();

        const newPost = {title, body, userId: 1}

            try {
              if(post){
                const response = axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, newPost);
                onSuccess(response.data, "update");

              } else {

                const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)

                // add post
                onSuccess(response.data, "add");
              }

            } catch {
                console.log("Post didn't upload: ", error)
            }
        

    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Type the post's title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea value={body} placeholder="What is your message?" onChange={(e) => setBody(e.target.value)} ></textarea>
      <br/><button type="submit">Submit</button>

    </form>
  );
};

export default PostForm;
