import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Menu from './views/Menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </div>
  );
}

export default App;
