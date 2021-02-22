import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import MapView from './components/MapView';
import Search from './components/Search/Search';
import Display from './components/Display/Display';

//build own api proxy;
//deployed live on 
//https://deepbreath-api.herokuapp.com
//find all stations 
//https://deepbreath-api.herokuapp.com/stations

const App = () => {
  const [stations, setStations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://deepbreath-api.herokuapp.com/stations`)
      setStations(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.target.value.toLowerCase();
    setSearch(e.target.value);
  }

  const filteredStations = stations.filter(station => 
    station.city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header isLoading={isLoading} className="header" />
      <MapView isLoading={isLoading} stations={stations} />
      
      <Search handleSearch={handleSearch} isLoading={isLoading} />
      <div className="display-container">
        <Display filteredStations={filteredStations} />
      </div>
    </div>
  );
}

export default App;
