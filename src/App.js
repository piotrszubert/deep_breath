import './App.css';
import Display from './components/Display/Display';
import Header from './components/Header/Header';
import MapView from './components/MapView';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <MapView/>
      <Search/>
      <Display/>
    </div>
  );
}

export default App;
