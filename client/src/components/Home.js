import React,{useState} from 'react';

import logo from '../images/logo.png'
import Navbar from './navbar';
import Body from './body'
import foot from './foot'
import Model from './modal';
import Auth from './Auth';
import Container from './pre';
import Button from './shared/formElements/Button';
import MultiSelectDropdownMenu from './checkbox';
import CardList from './cardlist';

const Home=(props)=>{

return (
    <div>
      {props.showAuth && <Auth onClick={props.onClick} show={props.showAuth} />}
      <Container/>
      <MultiSelectDropdownMenu/>
      <CardList/>
  <foot/>
  </div>

);
};
export default Home;