import './App.css';
import TestUtil from './components/util/TestUtil';
import NavBar from './components/util/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Socials from './components/pages/Socials';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/socials" element={<Socials/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
