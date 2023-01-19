import logo from './logo.svg';
import './App.css';
import SideNav from './Component/dashboard/SideNav';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Dashboard from './Component/dashboard/Dashboard';
import Home from './Component/dashboard/Home';
import Historique from './Component/dashboard/Historique';
import Utilisateurs from './Component/dashboard/Utilisateurs';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard'  element={<Dashboard/>}>
            <Route path='home' element={<Home/>}></Route>
            <Route path='Historique' element={<Historique/>}></Route>
            <Route path='Utilisateurs' element={<Utilisateurs/>}></Route>
          </Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
