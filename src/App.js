import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import MapView from './components/MapView';
import Search from './components/Search/Search';
//import City from './components/city'

//!!!!!!!!!!!!!!!!!
//installed firefox plugin to deal with cors errors 
//https://addons.mozilla.org/pl/firefox/addon/cors-everywhere/
//https://cors-anywhere.herokuapp.com seems not enough 
//this is temporarily solution only for development 
//need to build backend later


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      //https://cors-anywhere.herokuapp.com/  --> proxy for get rid CORS;'
      // const result = await axios(`https://cors-anywhere.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/station/findAll`);
      const result = await axios(`http://api.gios.gov.pl/pjp-api/rest/station/findAll`);
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
