import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";
import PostManager from "./components/PostManager";

function App() {
  return (
    <BrowserRouter>
      {/* 6.1 - GET with fetch and axios */}
      <h1>GET fetch and axios</h1>
      <div>
        <Link to="/fetch-posts" element={<FetchPosts />}>
          Fetch Posts
        </Link>
        <br />
        <Link to="/axios-posts" element={<AxiosPosts />}>
          Axios Posts
        </Link>
      </div>
      {/* 6.2 - Continue queries - POST and UPDATE/PUT */}
      <div>
        <Link to={"/posts"}>Manage Posts</Link>
      </div>
      <Routes>
        <Route path="/axios-posts" element={<AxiosPosts />} />
        <Route path="/fetch-posts" element={<FetchPosts />} />
        {/* 6.2 - Continue queries - POST and UPDATE/PUT */}
        <Route path="/posts" element={ <PostManager /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
