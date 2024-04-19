import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.css'
import searchicon from '../Icons/search.png'
import carticon from  '../Icons/icons8-cart-50.png'
import loginicon from  '../Icons/icons8-user-30.png'

const NavigationBar = () => {
  return (
    <Navbar className="navbar">
        <div className="logo"><h5>ShoppingCart</h5></div>

        <div className="dropdown">
            <a href="#home" className="dropdown-a" >Electronics</a>
            <div className="dropdown-content">
                <a href="#">Laptop</a>
                <a href="#">Mobile</a>
                <a href="#">Camera</a>
            </div>
        </div>

        <div className="dropdown">
            <a href="#news" className="dropdown-a">Appliance</a>
            <div className="dropdown-content">
                <a href="#">Television</a>
                <a href="#">Refrigerator</a>
                <a href="#">WashingMachine</a>
                <a href="#">AirConditioners</a>
                <a href="#">Iron</a>
                <a href="#">Microwave</a>
            </div>
        </div>

        <div className="dropdown">
            <a href="#news" className="dropdown-a">Fashions</a>
            <div className="dropdown-content">
                <a href="#">Jeans</a>
                <a href="#">Shirt</a>
                <a href="#">Shoes</a>
                <a href="#">Jeans</a>
                <a href="#">Shirt</a>
                <a href="#">Shoes</a>
                <a href="#">Jeans</a>
                <a href="#">Shirt</a>
                <a href="#">Shoes</a>
            </div>
        </div>

        <div className="searchbar">
            <form >
                <input
                    type="text"
                    placeholder="Search product"
                />
                <img src={searchicon} ></img>
            </form>
        </div>

        <img src={loginicon} className='userloginicon'></img> 
        <div className="login">
            <a>Login</a>
        </div>  

        <img src={carticon} className="carticon"></img>
        <div className='cart'>
             <a>Cart</a>
        </div>
    </Navbar>
  );
};

export default NavigationBar;
