
import './App.css';
import LandingPage from './Componets/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserLogin from './Componets/UserLogin';
import AdminLogin from './Componets/AdminLogin';
import AdminSignUp from './Componets/AdminSignUp';
import AdminHomePage from  './Componets/AdminHomePage';
import Error from './Componets/Error';
import UserHomePage from './Componets/UserHomaPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/userhomepage/*' element={<UserHomePage/>}/>  /// sir had putted /*
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminsignup' element={<AdminSignUp/>}/>
      <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
      
    </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
