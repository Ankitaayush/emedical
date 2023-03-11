import React,{useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Auth from './components/Auth';
// import LoginPage from './components/login'
import Footer from './components/foot';
import Logo from './components/logo';
import SearchBar from './components/Search';
import MultiSelectDropdownMenu from './components/checkbox';
import CardList from "./components/cardlist";
import Container from "./components/pre";
import ClinicList from "./components/clinic";
import Cart from './components/cart';

function App() {
  const [showAuth,setShowAuth] = useState(false)

  const viewAuthHandler = () => {
    return setShowAuth(prevState => {
      return (!prevState);
    })
  }

  return (
   <Router>
    <Navbar onClick={viewAuthHandler}/>

    <Routes>
        <Route path="/" element={<Home showAuth={showAuth} onClick={viewAuthHandler} />} />
        {/* <Route path="/login" element={<Auth/>}/> */}
        <Route path="/clinic" element={<ClinicList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    
        <Footer/>
   </Router>
  );
}

export default App;
