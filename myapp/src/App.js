
import './App.css';

import Header from './Components/Header';
import Movies from './Components/Movies';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Header></Header>
     <Movies></Movies>
    </div>
  );
}

export default App;
