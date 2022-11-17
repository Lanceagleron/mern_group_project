import './App.css';
<<<<<<< HEAD
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
=======
import Inventory from './views/Inventory';
import { Routes, Route } from 'react-router-dom';
import DevMain from './views/DevMain';
function App() {
  return (
    <Routes>
      <Route path="/" element={ <DevMain />}/>
      <Route path='/admin/inventory' element={ <Inventory /> }/>
    </Routes>
>>>>>>> 65bf3a347aa6bd625958dffc500203f79a4906ec
  );
}

export default App;
