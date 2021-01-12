import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import MapView from './components/MapView';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <MapView/>
      <Search/>
      <Display>
        
      </Display>
    </div>
  );
}

export default App;
