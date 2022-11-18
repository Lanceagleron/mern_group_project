import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Menu from './views/Menu';
import Inventory from './views/Inventory';
import FoodCart from './views/FoodCart';
import Admin from './views/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={ <FoodCart /> }/>
        <Route path="/admin" element={ <Admin />}/>
        <Route path='/admin/inventory' element={ <Inventory /> }/>
      </Routes>
    </div>
  );
}

export default App;
