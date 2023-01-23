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
import Acceuil from './Component/Home/Acceuil';
import HomeInterface from './Component/Home/HomeInterface';
import Etudiant from './Component/Etudiant/Etudiant';
import Enseignant from './Component/Enseignant/Enseignant';

import MaterialDetails from './Component/Material/MaterialDetails';
import G_Materials from './Component/dashboard/G_Materials';
import Panier from './Component/Enseignant/Panier';
import Utilisateurs_PE from './Component/dashboard/Utilisateurs_PE';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard'  element={<Dashboard/>}>
            <Route path='' element={<Home/>}></Route>
            <Route path='Historique' element={<Historique/>}></Route>
            <Route path='Invitations' element={<Utilisateurs/>}></Route>
            <Route path='Materiels' element={<G_Materials/>}></Route>
            <Route path='Utilisateurs' element={<Utilisateurs_PE/>}></Route>
          </Route>
          <Route path='/' element={<Acceuil/>}>
          <Route path='' exact element={<HomeInterface/>}/>
          <Route path='Login' element={<Login/>}></Route>
          <Route path='Register' element={<Register/>}></Route>
          <Route path='Etudiant' element={<Etudiant/>}>
          </Route>
          <Route path='/Panier' element={<Panier/>}></Route>
          <Route path='Enseignant' element={<Enseignant/>}>
            
          </Route>
          <Route path='Material/:id' element={<MaterialDetails/>}></Route>
          </Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
