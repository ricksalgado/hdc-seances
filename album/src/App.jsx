import FotoAmpliada from "./components/FotoAmpliada";
import FotoList from "./components/FotoList";
import Searchbar from "./components/Searchbar";

import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  const fetchData = async ({ query, category }) => {
    const apiKEy = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKEy,
        count: 10,
      },
    });

    setFotos(response.data);

    console.log(response.data);
  };

  useEffect(() => {
    fetchData(query, category);
  }, []);

  return (
    <div className="container">
      <Searchbar />
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  );
}

export default App;
