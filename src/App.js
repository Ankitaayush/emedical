import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './components/home';
import LoginPage from './components/login'
import Footer from './components/foot';
import Logo from './components/logo';
import SearchBar from './components/Search';
import MultiSelectDropdownMenu from './components/checkbox';
import CardList from "./components/cardlist";
import Container from "./components/pre";
import ClinicList from "./components/clinic";
import Cart from './components/cart';
function App() {
  return (
   <Router>
    <Navbar/>
    {/* <div>
    <Logo/><h1>E-medical</h1>
</div> */}

{/* <SearchBar/>
<FileUpload/> */}
{/* <Container/>
<MultiSelectDropdownMenu/> */}
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/clinic" element={<ClinicList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    
        <Footer/>
   </Router>
  );
}

export default App;
