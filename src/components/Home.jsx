import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const apiUrl = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';

const Home = (props) => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setDogs(data);
      localStorage.setItem('dogs', JSON.stringify(data.record));
    };

    const storedDogs = localStorage.getItem('dogs');
    if (storedDogs) {
      console.log('Dogs are stored');
      setDogs(JSON.parse(storedDogs));
    } else {
      console.log('No dogs were fetched');
      fetchData();
    }
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDogs = dogs.filter((dog) => {
    const name = dog.name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return name.includes(query);
  });

  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search for a dog" value={searchQuery} onChange={handleSearchQueryChange} />
      </div>
      <div className="grid-container">
        {filteredDogs.map((dog, index) => (
          <Link to={`/${index}`} key={index}>
            <div className="card">
              <img src={dog.img} alt={dog.name} />
              <h1>{dog.name} {isDogPresent(dog)}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const isDogPresent = (prop) => {
  let isPresent = '';
  if (prop.present) {
    isPresent = 'is currently here!';
  }
  return isPresent;
};

export default Home;
