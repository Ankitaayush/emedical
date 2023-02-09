import React from 'react';
import logo from '../images/logo.png'
import Navbar from './navbar';
import Body from './body'
import foot from './foot'
import Container from './pre';
import MultiSelectDropdownMenu from './checkbox';
import CardList from './cardlist';

const Home=()=>{
return (
    <div>
  
  {/* <Body/> */}
  <Container/>
<MultiSelectDropdownMenu/>
<CardList/>
  <foot/>
  </div>

);
};
export default Home;