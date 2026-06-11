import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'  
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'  
import './App.css'
  
function App() {  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter(item =>item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="Container">
      <h1>Data List of Posts</h1>
      
      <input 
        type="text" 
        placeholder="Search posts..." 
        className="my-input"
        onChange={(e) => setSearch(e.target.value)} 
      />

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <h3>Please wait...</h3>
          <p>Gurman's Code is Loading data from the API Server...</p>
        </div>
      ) : (
        <div className="list-container">
          {filteredData.map(post => (
            <div key={post.id} className="item-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
