import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=PMQLhPSwtMhZqZUvndPzaRJ9kpDIAEUsL8K5LzXY3Zo`
      )
      .then((res) => {
        console.log(res);
        setPhoto(res.data.results);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Get Your Desired image</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=" Search image......"
        />
        <button type="submit" onClick={changePhoto}>
          Get Photo
        </button>
      </div>
      <div className="container">
        {photo.map((pic) => {
          return (
            <div key={pic.id}>
              <img src={pic.urls.small} alt="img" className="image" download />
            </div>
          );
        })}
      </div>
    </div>
  );
}
