import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/foot';
import Logo from './components/logo';
import SearchBar from './components/Search';
import MultiSelect from './components/checkbox';
import CardList from "./components/cardlist";
function App() {
  return (
   <Router>
    <Navbar/>
    <div>
    <Logo/><h1>E-medical</h1>
</div>

<SearchBar/>
<MultiSelect/>
    <Routes>
        <Route path='/' exact component={Home} />
        </Routes>
        <CardList/>
        <Footer/>
   </Router>
  );
}

export default App;
