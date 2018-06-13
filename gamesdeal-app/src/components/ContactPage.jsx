import React, {Component} from 'react'
import '../styles/App.css';
import {logo} from '../assets/index';
import {colors} from '../styles/index';
import Navbar from '../components/NavbarCon';
import Footer from '../components/Footer';
import SimpleSlider from '../components/SimpleSlider';
import games from '../data/games';
import { Provider } from 'react-redux';
import store from '../store';
import Form from '../components/Form';
import Address from '../components/Address';

class ContactPage extends Component{
    render(){
       
        return (
            <Provider store={store}>
            <React.Fragment> 
              <Navbar/>
              <Form/>
              <Address/>
              <Footer/>   
            </React.Fragment>
          </Provider>  
        )
    }
}

export default ContactPage

