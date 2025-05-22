import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";

function App() {
  return (
    <BrowserRouter>
      {/* 6.1 - GET with fetch and axios */}
      <h1>GET fetch and axios</h1>
      <div>
        <ul>
          <li>
            <Link to="/fetch-posts" element={ <FetchPosts/> } >Fetch Posts</Link>
          </li>
          <li>
          <Link to="/axios-posts" element={ <AxiosPosts/> } >Axios Posts</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/axios-posts" element={ <AxiosPosts/> } />
        <Route path="/fetch-posts" element={ <FetchPosts/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
