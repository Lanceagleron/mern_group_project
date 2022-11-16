import './App.css';
import Inventory from './views/Inventory';
import { Routes, Route } from 'react-router-dom';
import DevMain from './views/DevMain';
function App() {
  return (
    <Routes>
      <Route path="/" element={ <DevMain />}/>
      <Route path='/admin/inventory' element={ <Inventory /> }/>
    </Routes>
  );
}

export default App;
