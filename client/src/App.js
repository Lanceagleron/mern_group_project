import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Menu from './views/Menu';
import Inventory from './views/Inventory';
import DevMain from './views/DevMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path="/dev" element={ <DevMain />}/>
        <Route path='/admin/inventory' element={ <Inventory /> }/>
      </Routes>
    </div>
  );
}

export default App;
