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

  return (
    <div className="App">
      <Header className="header"/>
      <MapView isLoading={isLoading} stations={stations} />
      <Search className="search"/>
      <Display stations={stations}></Display>
    </div>
  );
  //<City isLoading={isLoading} items={items} />
}

export default App;
