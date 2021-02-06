import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header/Header';
import MapView from './components/MapView';
import Search from './components/Search/Search';
import City from './components/city'

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      //https://cors-anywhere.herokuapp.com/  --> proxy for get rid CORS; just don't wanna build backend for this app :'
      
      const result = await axios(`https://cors-anywhere.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/station/findAll`);
   
      //  console.log(result.data);
      // console.log(result.data[0].city);
      // console.log(result.data[0].city.name);


      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])


  return (
    <div className="App">
      <Header />
      <MapView isLoading={isLoading} items={items} />
     <Search />
      
    </div>
  );

  //<City isLoading={isLoading} items={items} />
}

export default App;
