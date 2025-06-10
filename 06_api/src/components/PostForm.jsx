import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = ("");

    const handleSubmit = (e) => {
        e.preventDefault()
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
      <textarea value={body} placeholder="What is your message?" onChange={(e) => (e.target.value)} ></textarea>
      <br/><button type="submit">Submit</button>

    </form>
  );
};

export default PostForm;
